import { View, Image, Form, Input, Canvas } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import {
  AtButton,
  AtMessage,
  AtModal,
  AtModalContent,
  AtTextarea,
  AtToast
} from "taro-ui";
import Taro, { useRouter } from "@tarojs/taro";
import Images from "../../mobxStore/images";
import GoBackButton from "../../components/goBackButton/goBackButton";
import User from "../../mobxStore/user";

import Style from "./shareCard.module.css";
import { fetch } from "../../rapper";

const ShareCard: FC<{ user: User; images: Images }> = props => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const [blessText, setBlessText] = useState("");

  const handleSave = async () => {
    try {
      setLoading(true);
      // 若用户还未参与过抽奖
      if (!props.user.hasDrawn) {
        // 获取图片信息得到图片地址
        const imgInfo = await Taro.getImageInfo({ src: imgSrc });
        // 向用户授权
        await Taro.authorize({ scope: "scope.writePhotosAlbum" });
        // 保存图片
        await Taro.saveImageToPhotosAlbum({
          filePath: imgInfo.path
        });
        props.user.setDrawState(true);
        await fetch["POST/saveProgress"]({
          draw: true,
          questions: props.user.questionRawList
        });
        Taro.atMessage({
          message: "保存成功，请关注抽奖结果",
          type: "success"
        });
        // 已参与过抽奖
      } else {
        // 获取图片信息得到图片地址
        const imgInfo = await Taro.getImageInfo({ src: imgSrc });
        // 向用户授权
        await Taro.authorize({ scope: "scope.writePhotosAlbum" });
        // 保存图片
        await Taro.saveImageToPhotosAlbum({
          filePath: imgInfo.path
        });

        Taro.atMessage({ message: "保存成功", type: "success" });
      }
    } catch (error) {
      Taro.atMessage({ message: "保存失败", type: "error" });
    } finally {
      setLoading(false);
    }
  };
  const [loading, setLoading] = useState(false);

  const [originImgSrc, setOriginImgSrc] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgInfo, setImgInfo] = useState({ width: 0, height: 0 });

  // 初始化，获得原始图片的大小信息，并设置背景
  useEffect(() => {
    setLoading(true);
    Taro.getImageInfo({
      src: props.images.imgsrcs[`${router.params.card}`]
    })
      .then(async res => {
        setOriginImgSrc(res.path);
        setImgSrc(res.path);
        setImgInfo({ height: res.height, width: res.width });
        setModalVisible(true);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [props.images.imgsrcs, router.params.card]);

  const handleGeneratePic = async () => {
    // 根据不同校区确定文字定位
    const textConfig = {
      blessTextX: 200,
      blessTextY: 1140,
      blessTextSize: 100,
      blessTextColor: "white",
      nameX: 200,
      nameY: 300,
      nameSize: 160,
      nameColor: "white"
    };
    try {
      setLoading(true);
      // 绘制图片和文字
      const ctx = Taro.createCanvasContext("canvas");
      await new Promise<void>(async (resolve, reject) => {
        // 先把原始图片绘制到canvas上
        ctx.drawImage(originImgSrc, 0, 0);

        ctx.fillStyle = textConfig.nameColor;
        ctx.setFontSize(textConfig.nameSize);
        ctx.font = `bolder ${textConfig.nameSize}px`;
        ctx.fillText(
          props.user.userInfo?.nickName || "",
          textConfig.nameX,
          textConfig.nameY
        );

        ctx.fillStyle = textConfig.blessTextColor;
        ctx.setFontSize(textConfig.blessTextSize);
        ctx.font = `${textConfig.blessTextSize}px bold`;
        ctx.fillText(blessText, textConfig.blessTextX, textConfig.blessTextY);
        ctx.draw(true, () => resolve());
      });

      // 将canvas上已绘制的内容保存并得到临时地址
      const res = await Taro.canvasToTempFilePath({
        canvasId: "canvas",
        x: 0,
        y: 0,
        destHeight: imgInfo.height,
        destWidth: imgInfo.width
      });

      // 更新图片为最新绘制的内容
      setImgSrc(res.tempFilePath);
      setModalVisible(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className={Style.body}>
      <AtToast
        isOpened={loading}
        status="loading"
        duration={0}
        text="加载中"
        hasMask
      />
      <Canvas
        canvasId="canvas"
        style={{
          opacity: "0",
          position: "fixed",
          // 将canvas画布移出屏幕外
          top: "-9999px",
          left: "-9999px",
          width: imgInfo.width,
          height: imgInfo.height
        }}
      />

      <Image
        onClick={() => setModalVisible(true)}
        className={Style.card}
        src={imgSrc}
        mode="widthFix"
      />
      <GoBackButton />
      {props.user.hasDrawn ? (
        <AtButton circle onClick={() => handleSave()} className={Style.btn}>
          保存卡片
        </AtButton>
      ) : (
        <AtButton circle onClick={() => handleSave()} className={Style.btn}>
          保存卡片并参与抽奖
        </AtButton>
      )}
      <AtModal isOpened={modalVisible} onClose={() => setModalVisible(false)}>
        <AtModalContent>
          <View className={Style.blessForm}>
            <AtTextarea
              className={Style.blessInput}
              placeholder="在此写下你的祝福语"
              value={blessText}
              maxLength="10"
              onChange={v => {
                if (String(v).length <= 10) {
                  setBlessText(String(v));
                  return v;
                }
                return blessText;
              }}
            />
            <AtButton
              size="small"
              circle
              className={Style.blessBtn}
              onClick={() => handleGeneratePic()}
            >
              生成卡片
            </AtButton>
          </View>
        </AtModalContent>
      </AtModal>
      <AtMessage />
    </View>
  );
};
export default inject("user", "images")(observer(ShareCard));

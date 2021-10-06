import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC, useState } from "react";
import { AtButton, AtMessage, AtToast } from "taro-ui";
import Taro, { useRouter } from "@tarojs/taro";
import Images from "../../mobxStore/images";
import GoBackButton from "../../components/goBackButton/goBackButton";
import User from "../../mobxStore/user";

import Style from "./shareCard.module.css";
import { fetch } from "../../rapper";

const ShareCard: FC<{ user: User; images: Images }> = props => {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const handleSave = async () => {
    try {
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
        await Taro.previewImage({ current: imgSrc, urls: [imgSrc] });
        Taro.atMessage({
          message: "保存成功，请关注抽奖结果",
          type: "success"
        });
      } else {
        // 获取图片信息得到图片地址
        const imgInfo = await Taro.getImageInfo({ src: imgSrc });
        // 向用户授权
        await Taro.authorize({ scope: "scope.writePhotosAlbum" });
        // 保存图片
        await Taro.saveImageToPhotosAlbum({
          filePath: imgInfo.path
        });
        await Taro.previewImage({ current: imgSrc, urls: [imgSrc] });

        Taro.atMessage({ message: "保存成功", type: "success" });
      }
    } catch (error) {
      Taro.atMessage({ message: "保存失败", type: "error" });
    }
  };

  const handleGeneratePic = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const [imgSrc, setImgSrc] = useState<string>(
    props.images.imgsrcs[`${router.params.card}`]
  );

  return (
    <View
      className={Style.body}
      style={{ backgroundImage: `url(${imgSrc})` }}
      onClick={() => handleGeneratePic()}
    >
      <GoBackButton />
      {props.user.hasDrawn ? (
        <AtButton onClick={() => handleSave()} className={Style.btn}>
          保存卡片
        </AtButton>
      ) : (
        <AtButton onClick={() => handleSave()} className={Style.btn}>
          保存卡片并参与抽奖
        </AtButton>
      )}
      <AtToast
        isOpened={showToast}
        text="写祝福语这个功能还没做"
        status="success"
      />
      <AtMessage />
    </View>
  );
};
export default inject("user", "images")(observer(ShareCard));

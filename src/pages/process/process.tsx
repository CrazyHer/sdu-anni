import { View, Text, Image } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import {
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
  AtModal,
  AtToast
} from "taro-ui";
import Taro, { useShareAppMessage } from "@tarojs/taro";
import { FC, useEffect, useState } from "react";
import User from "../../mobxStore/user";
import GoBackButton from "../../components/goBackButton/goBackButton";
import Style from "./process.module.css";
import { fetch } from "../../rapper";
import Images from "../../mobxStore/images";

const ProcessPage: FC<{ user: User; images: Images }> = props => {
  const [loading, setLoading] = useState(false);

  useShareAppMessage(() => ({
    title: "团橘奇遇记 快来与团橘一起云游山大，答题抽奖吧！",
    path: "/pages/index/index",
    imageUrl: props.images.imgsrcs.mainBackground
  }));

  useEffect(() => {
    setLoading(true);
    fetch["POST/getProgress"]()
      .then(res => {
        if (res.success) {
          props.user.setDrawState(res.data.draw);
          props.user.setQuestionRawList(res.data.questions);
        } else {
          throw new Error(res.errorMsg);
        }
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    // 如果已开奖，则弹出提示框显示文案
    if (props.user.openPrize) {
      setModalVisible(true);
    }
  }, [props.user.openPrize]);

  const onClickGo = () => {
    Taro.navigateTo({ url: "/pages/mainMap/mainMap" });
  };

  const [campusSelectVisible, setCampusSelectVisible] = useState(false);

  const onShareCard = () => {
    setCampusSelectVisible(true);
  };

  const onRestart = () => {
    Taro.navigateTo({ url: "/pages/mainMap/mainMap" });
  };

  // 根据该校区完成情况显示不同状态
  const CampusCard = (p: { campus: string; url: string; path: string }) => (
    <View onClick={() => Taro.navigateTo({ url: p.path })}>
      {props.user.finishedCampusNum.find(v => v.campus === p.campus) ? (
        <Image className={Style.card} mode="aspectFit" src={p.url} />
      ) : (
        <Image
          className={Style.card}
          mode="aspectFit"
          src={p.url.replace(/.png/g, "_gray.png")}
        />
      )}
    </View>
  );

  return (
    <View
      className={Style.body}
      style={{
        backgroundImage: `url(${props.images.imgsrcs.mainBackgroundWithMask})`
      }}
    >
      <GoBackButton />
      <Text className={Style.title}>收集进度</Text>
      <View className={Style.campusCardGroup}>
        <View className={Style.row}>
          <CampusCard
            path="/pages/mainMap/jinan/zhongxin/zhongxin"
            url={props.images.imgsrcs.zhongxin_logo}
            campus="中心校区"
          />
          <CampusCard
            path="/pages/mainMap/jinan/hongjialou/hongjialou"
            url={props.images.imgsrcs.hongjialou_logo}
            campus="洪家楼校区"
          />
          <CampusCard
            path="/pages/mainMap/jinan/baotuquan/baotuquan"
            url={props.images.imgsrcs.baotuquan_logo}
            campus="趵突泉校区"
          />
          <CampusCard
            path="/pages/mainMap/jinan/qianfoshan/qianfoshan"
            url={props.images.imgsrcs.qianfoshan_logo}
            campus="千佛山校区"
          />
        </View>

        <View className={Style.row}>
          <CampusCard
            path="/pages/mainMap/jinan/ruanjianyuan/ruanjianyuan"
            url={props.images.imgsrcs.ruanjianyuan_logo}
            campus="软件园校区"
          />
          <CampusCard
            path="/pages/mainMap/jinan/xinglongshan/xinglongshan"
            url={props.images.imgsrcs.xinglongshan_logo}
            campus="兴隆山校区"
          />
          <CampusCard
            path="/pages/mainMap/weihai/questionWeihai/questionWeihai"
            url={props.images.imgsrcs.weihai_logo}
            campus="威海校区"
          />
          <CampusCard
            path="/pages/mainMap/qingdao/questionQingdao/questionQingdao"
            url={props.images.imgsrcs.qingdao_logo}
            campus="青岛校区"
          />
        </View>
      </View>

      <View className={Style.processText}>
        <Text>{props.user.userInfo?.nickName}：</Text>
        {props.user.finishedCampusNum.length === 8 ? (
          <Text>恭喜您已成功点亮所有校区！点击下方分享卡片即可参与抽奖</Text>
        ) : (
          <Text>
            您已点亮{props.user.finishedCampusNum.length}个校区，还差
            {8 - props.user.finishedCampusNum.length}张即可分享卡片并参与抽奖
          </Text>
        )}
      </View>

      {props.user.finishedCampusNum.length === 8 ? (
        <View className={Style.btnGroup}>
          <AtButton className={Style.btn} onClick={onShareCard} circle>
            分享卡片
          </AtButton>
          <AtButton className={Style.btn} onClick={onRestart} circle>
            重游山大
          </AtButton>
        </View>
      ) : (
        <View className={Style.btnGroup}>
          <AtButton className={Style.btn} onClick={onClickGo} circle>
            开始答题
          </AtButton>
        </View>
      )}
      <AtToast isOpened={loading} text="加载中" status="loading" />
      <AtModal
        isOpened={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => setModalVisible(false)}
        confirmText="确认"
        title="活动已开奖"
        content={props.user.prizeInfo}
      />
      <AtActionSheet
        isOpened={campusSelectVisible}
        title="选择您要生成的校区卡片"
        onClose={() => setCampusSelectVisible(false)}
      >
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_zhongxin"
            });
            setCampusSelectVisible(false);
          }}
        >
          中心校区
        </AtActionSheetItem>
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_hongjialou"
            });
            setCampusSelectVisible(false);
          }}
        >
          洪家楼校区
        </AtActionSheetItem>
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_baotuquan"
            });
            setCampusSelectVisible(false);
          }}
        >
          趵突泉校区
        </AtActionSheetItem>
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_qianfoshan"
            });
            setCampusSelectVisible(false);
          }}
        >
          千佛山校区
        </AtActionSheetItem>
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_ruanjianyuan"
            });
            setCampusSelectVisible(false);
          }}
        >
          软件园校区
        </AtActionSheetItem>
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_xinglongshan"
            });
            setCampusSelectVisible(false);
          }}
        >
          兴隆山校区
        </AtActionSheetItem>
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_weihai"
            });
            setCampusSelectVisible(false);
          }}
        >
          威海校区
        </AtActionSheetItem>
        <AtActionSheetItem
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/shareCard/shareCard?card=card_qingdao"
            });
            setCampusSelectVisible(false);
          }}
        >
          青岛校区
        </AtActionSheetItem>
      </AtActionSheet>
    </View>
  );
};
export default inject("user", "images")(observer(ProcessPage));

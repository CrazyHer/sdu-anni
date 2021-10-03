import { View, Text, Image, OpenData } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { AtButton, AtToast } from "taro-ui";
import Taro from "@tarojs/taro";
import { FC, useEffect, useMemo, useState } from "react";
import User from "../../mobxStore/user";
import Style from "./process.module.css";
import { fetch } from "../../rapper";

const sduLogo = "https://static.herui.club/assets/sduanni/sduLogo.png";

const ProcessPage: FC<{ user: User }> = props => {
  const [loading, setLoading] = useState(false);

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

  const onClickGo = () => {
    Taro.navigateTo({ url: "/pages/mainMap/mainMap" });
  };
  const onShareCard = () => {
    Taro.navigateTo({ url: "/pages/shareCard/shareCard" });
  };
  const onRestart = () => {
    Taro.navigateTo({ url: "/pages/mainMap/mainMap" });
  };

  return (
    <View className={Style.body}>
      <Image className={Style.img} src={sduLogo} mode="aspectFit" />
      <Text className={Style.title}>收集进度</Text>
      <View className={Style.campusCardGroup}>
        <View className={Style.row}>
          <View className={Style.card}> </View>
          <View className={Style.card}> </View>
          <View className={Style.card}> </View>
          <View className={Style.card}> </View>
        </View>
        <View className={Style.row}>
          <View className={Style.card}> </View>
          <View className={Style.card}> </View>
          <View className={Style.card}> </View>
          <View className={Style.card}> </View>
        </View>
      </View>

      <View className={Style.processText}>
        <Text>{props.user.userInfo?.nickName}：</Text>
        <Text>
          您已点亮{props.user.finishedCampusNum}个校区，还差
          {8 - props.user.finishedCampusNum}张即可分享卡片并参与抽奖
        </Text>
      </View>

      {props.user.finishedCampusNum === 8 ? (
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
    </View>
  );
};
export default inject("user")(observer(ProcessPage));

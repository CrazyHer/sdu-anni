import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import Style from "./process.module.css";

const ProcessPage = (props: any) => {
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
      <Text>我的进度</Text>
      <AtButton onClick={onClickGo}>开始答题</AtButton>
      <Text>当所有题目答完，进度为满时：</Text>
      <AtButton onClick={onShareCard}>分享卡片</AtButton>
      <AtButton onClick={onRestart}>重游山大</AtButton>
    </View>
  );
};
export default inject()(observer(ProcessPage));

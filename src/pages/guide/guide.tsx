import { View, Text, Image } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import Style from "./guide.module.css";
import anniLogo from "../../assets/anniLogo.jpg";

const Guide = (props: any) => {
  const onConfirm = () => {
    Taro.navigateTo({ url: "/pages/process/process" });
  };
  const onNoMoreInform = () => {
    Taro.navigateTo({ url: "/pages/process/process" });
  };
  return (
    <View className={Style.body}>
      <View>
        <Image className={Style.img} src={anniLogo} mode="aspectFit" />
      </View>
      <Text className={Style.title}>答题规则</Text>
      <View className={Style.rulesContent}>
        <Text>1. xxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
        <Text>2. xxx</Text>
        <Text>3. xxx</Text>
        <Text>4. xxx</Text>
      </View>
      <View className={Style.btnGroup}>
        <AtButton className={Style.btn} onClick={onNoMoreInform}>
          不再提醒
        </AtButton>
        <AtButton className={Style.btn} onClick={onConfirm}>
          明白啦
        </AtButton>
      </View>
    </View>
  );
};
export default inject()(observer(Guide));

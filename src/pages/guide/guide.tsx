import { View, Text, Image } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import { FC, useEffect } from "react";
import User from "../../mobxStore/user";
import Style from "./guide.module.css";

const anniLogo = "https://static.herui.club/assets/sduanni/anniLogo.jpg";

const Guide: FC<{ user: User }> = props => {
  const onConfirm = () => {
    Taro.redirectTo({ url: "/pages/process/process" });
  };
  const onNoMoreInform = () => {
    props.user.setGuildConfirm(true);
    Taro.navigateTo({ url: "/pages/process/process" });
  };

  return (
    <View className={Style.body}>
      <View>
        <Image className={Style.img} src={anniLogo} mode="aspectFit" />
      </View>
      <Text className={Style.title}>答题规则</Text>
      <View className={Style.rulesContent}>
        <Text>
          {`1.xxxxxxxxx
        2.xxx
        3.xxx
        4.xxx`}
        </Text>
      </View>
      <View className={Style.btnGroup}>
        <AtButton className={Style.btn} onClick={onNoMoreInform}>
          不再提醒
        </AtButton>
        <AtButton className={Style.btn} onClick={onConfirm}>
          开始答题
        </AtButton>
      </View>
    </View>
  );
};
export default inject("user")(observer(Guide));

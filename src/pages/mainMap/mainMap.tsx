import { View, Text, Image } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import Style from "./mainMap.module.css";

const MainMap = (props: any) => {
  return (
    <View className={Style.body}>
      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/jinan_icon.png"
        className={`${Style.jinanBtn} ${Style.btn}`}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/jinan" });
        }}
      />

      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/weihai_icon.png"
        className={`${Style.weihaiBtn} ${Style.btn}`}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/weihai/weihai" });
        }}
      />

      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/qingdao_icon.png"
        className={`${Style.qingdaoBtn} ${Style.btn}`}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/qingdao/qingdao" });
        }}
      />
    </View>
  );
};
export default inject()(observer(MainMap));

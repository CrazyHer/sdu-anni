import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import Style from "./mainMap.module.css";

const MainMap = (props: any) => {
  return (
    <View className={Style.body}>
      <Text>主地图页</Text>
      <AtButton
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/jinan" });
        }}
      >
        济南
      </AtButton>
      <AtButton
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/weihai/weihai" });
        }}
      >
        威海3
      </AtButton>
      <AtButton
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/qingdao/qingdao" });
        }}
      >
        青岛
      </AtButton>
    </View>
  );
};
export default inject()(observer(MainMap));

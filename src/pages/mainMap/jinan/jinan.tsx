import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import Style from "./jinan.module.css";

const Jinan: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <Text>济南地图</Text>
      <AtButton
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/baotuquan/baotuquan" });
        }}
      >
        趵突泉
      </AtButton>
      <AtButton
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/hongjialou/hongjialou"
          });
        }}
      >
        洪家楼
      </AtButton>
      <AtButton
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/qianfoshan/qianfoshan"
          });
        }}
      >
        千佛山
      </AtButton>
      <AtButton
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/ruanjianyuan/ruanjianyuan"
          });
        }}
      >
        软件园
      </AtButton>
      <AtButton
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/xinglongshan/xinglongshan"
          });
        }}
      >
        兴隆山
      </AtButton>
      <AtButton
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/zhongxin/zhongxin" });
        }}
      >
        中心
      </AtButton>
    </View>
  );
};
export default inject()(observer(Jinan));

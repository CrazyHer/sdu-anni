import { View, Text, Image } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import Taro from "@tarojs/taro";
import Style from "./jinan.module.css";
import GoBackButton from "../../../components/goBackButton/goBackButton";

const Jinan: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <GoBackButton />
      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/shandong_baotuquan.png"
        className={`${Style.btn} ${Style.baotuquan}`}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/baotuquan/baotuquan" });
        }}
      />

      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/shandong_hongjialou.png"
        className={`${Style.btn} ${Style.hongjialou}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/hongjialou/hongjialou"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/shandong_qianfoshan.png"
        className={`${Style.btn} ${Style.qianfoshan}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/qianfoshan/qianfoshan"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/shandong_ruanjianyuan.png"
        className={`${Style.btn} ${Style.ruanjianyuan}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/ruanjianyuan/ruanjianyuan"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/shandong_xinglongshan.png"
        className={`${Style.btn} ${Style.xinglongshan}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/xinglongshan/xinglongshan"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src="https://static.herui.club/assets/sduanni/shandong_zhongxin.png"
        className={`${Style.btn} ${Style.zhongxin}`}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/zhongxin/zhongxin" });
        }}
      />
    </View>
  );
};
export default inject()(observer(Jinan));

import { View, Image } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import Taro from "@tarojs/taro";
import GoBackButton from "../../../components/goBackButton/goBackButton";
import Style from "./jinan.module.css";
import User from "../../../mobxStore/user";
import Images from "../../../mobxStore/images";

const Jinan: FC<{ user: User; images: Images }> = props => {
  return (
    <View
      className={Style.body}
      style={{ backgroundImage: `url(${props.images.imgsrcs.jinan})` }}
    >
      <GoBackButton />
      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.shandong_baotuquan}
        className={`${Style.btn} ${Style.baotuquan}`}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/baotuquan/baotuquan" });
        }}
      />

      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.shandong_hongjialou}
        className={`${Style.btn} ${Style.hongjialou}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/hongjialou/hongjialou"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.shandong_qianfoshan}
        className={`${Style.btn} ${Style.qianfoshan}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/qianfoshan/qianfoshan"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.shandong_ruanjianyuan}
        className={`${Style.btn} ${Style.ruanjianyuan}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/ruanjianyuan/ruanjianyuan"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.shandong_xinglongshan}
        className={`${Style.btn} ${Style.xinglongshan}`}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/jinan/xinglongshan/xinglongshan"
          });
        }}
      />

      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.shandong_zhongxin}
        className={`${Style.btn} ${Style.zhongxin}`}
        onClick={() => {
          Taro.navigateTo({ url: "/pages/mainMap/jinan/zhongxin/zhongxin" });
        }}
      />
    </View>
  );
};
export default inject("user", "images")(observer(Jinan));

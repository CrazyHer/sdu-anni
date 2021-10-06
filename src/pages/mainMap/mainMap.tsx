import { View, Image } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import Taro from "@tarojs/taro";
import GoBackButton from "../../components/goBackButton/goBackButton";
import Style from "./mainMap.module.css";
import User from "../../mobxStore/user";
import Images from "../../mobxStore/images";

const MainMap: FC<{ user: User; images: Images }> = props => {
  return (
    <View
      className={Style.body}
      style={{ backgroundImage: `url(${props.images.imgsrcs.shandong})` }}
    >
      <GoBackButton />
      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.jinan_icon}
        className={`${Style.jinanBtn} ${Style.btn}`}
        onClick={() => {
          Taro.redirectTo({ url: "/pages/mainMap/jinan/jinan" });
        }}
      />

      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.weihai_icon}
        className={`${Style.weihaiBtn} ${Style.btn}`}
        onClick={() => {
          Taro.redirectTo({ url: "/pages/mainMap/weihai/weihai" });
        }}
      />

      <Image
        mode="aspectFit"
        src={props.images.imgsrcs.qingdao_icon}
        className={`${Style.qingdaoBtn} ${Style.btn}`}
        onClick={() => {
          Taro.redirectTo({ url: "/pages/mainMap/qingdao/qingdao" });
        }}
      />
    </View>
  );
};
export default inject("user", "images")(observer(MainMap));

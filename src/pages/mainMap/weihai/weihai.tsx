import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { FC, useEffect } from "react";
import { inject, observer } from "mobx-react";
import GoBackButton from "../../../components/goBackButton/goBackButton";
import Style from "./weihai.module.css";
import User from "../../../mobxStore/user";
import Images from "../../../mobxStore/images";

const Weihai: FC<{ user: User; images: Images }> = props => {
  useEffect(() => {
    Taro.showToast({
      title: "点击界面任意处即可答题",
      duration: 1000,
      icon: "none"
    });
  }, []);
  return (
    <View>
      <View
        className={Style.body}
        style={{ backgroundImage: `url(${props.images.imgsrcs.weihaishi})` }}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/weihai/questionWeihai/questionWeihai"
          });
        }}
      />
      <GoBackButton />
    </View>
  );
};
export default inject("user", "images")(observer(Weihai));

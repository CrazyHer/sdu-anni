import { View, Image } from "@tarojs/components";
import { FC } from "react";
import Taro from "@tarojs/taro";
import { inject, observer } from "mobx-react";
import Style from "./goBackButton.module.css";
import Images from "../../mobxStore/images";

const GoBackButton: FC<{ images?: Images }> = props => {
  return (
    <View>
      <Image
        className={Style.backbtn}
        src={props.images?.imgsrcs.button_back || ""}
        mode="aspectFit"
        onClick={() => Taro.navigateBack()}
      />
    </View>
  );
};
export default inject("images")(observer(GoBackButton));

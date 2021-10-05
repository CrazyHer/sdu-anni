import { View, Image } from "@tarojs/components";
import { FC } from "react";
import Taro from "@tarojs/taro";
import Style from "./goBackButton.module.css";

const GoBackButton: FC = props => {
  return (
    <View>
      <Image
        className={Style.backbtn}
        src="https://static.herui.club/assets/sduanni/back.png"
        mode="aspectFit"
        onClick={() => Taro.navigateBack()}
      />
    </View>
  );
};
export default GoBackButton;

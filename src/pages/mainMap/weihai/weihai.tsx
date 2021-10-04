import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { FC } from "react";
import Style from "./weihai.module.css";

const Weihai: FC = props => {
  return (
    <View
      className={Style.body}
      onClick={() => {
        Taro.navigateTo({
          url: "/pages/mainMap/weihai/questionWeihai/questionWeihai"
        });
      }}
    />
  );
};
export default Weihai;

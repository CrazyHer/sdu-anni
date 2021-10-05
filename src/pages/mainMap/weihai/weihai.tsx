import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { FC } from "react";
import Style from "./weihai.module.css";
import GoBackButton from "../../../components/goBackButton/goBackButton";

const Weihai: FC = props => {
  return (
    <View>
      <View
        className={Style.body}
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
export default Weihai;

import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { FC } from "react";
import Style from "./qingdao.module.css";
import GoBackButton from "./../../../components/goBackButton/goBackButton";

const Qingdao: FC = props => {
  return (
    <View>
      <View
        className={Style.body}
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/mainMap/qingdao/questionQingdao/questionQingdao"
          });
        }}
      />
      <GoBackButton />
    </View>
  );
};
export default Qingdao;

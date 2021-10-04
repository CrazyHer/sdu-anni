import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { FC } from "react";
import Style from "./qingdao.module.css";

const Qingdao: FC = props => {
  return (
    <View
      className={Style.body}
      onClick={() => {
        Taro.navigateTo({
          url: "/pages/mainMap/qingdao/questionQingdao/questionQingdao"
        });
      }}
    />
  );
};
export default Qingdao;

import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtButton } from "taro-ui";
import Style from "./index.module.css";
import sduLogo from "../../assets/sduLogo.png";

const Index = (props: any) => {
  const onClickGo = () => {
    Taro.navigateTo({ url: "/pages/guide/guide" });
  };
  return (
    <View className={Style.body}>
      <View>
        <Image className={Style.img} src={sduLogo} mode="aspectFit" />
      </View>
      <View className={Style.intro}>
        <Text>学无止境，气有浩然</Text>
        <Text>正值120山大校庆之际</Text>
        <Text>让我们共游山大，同学校史！</Text>
      </View>
      <View className={Style.btnGroup}>
        <AtButton className={Style.btn} onClick={onClickGo}>
          现在出发
        </AtButton>
      </View>
    </View>
  );
};

export default inject("counter")(observer(Index));

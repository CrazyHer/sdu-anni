import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import { AtButton } from "taro-ui";
import Style from "./hongjialou.module.css";

const Hongjialou: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <Text>洪家楼答题</Text>
      <AtButton>提交题目</AtButton>
    </View>
  );
};
export default inject()(observer(Hongjialou));

import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import { AtButton } from "taro-ui";
import Style from "./shareCard.module.css";

const ShareCard: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <Text>分享卡片</Text>
      <AtButton>保存卡片并参与抽奖</AtButton>
      <Text>当已参与过抽奖:</Text>
      <AtButton>保存卡片</AtButton>
    </View>
  );
};
export default inject()(observer(ShareCard));

import { View, Text, Image, ScrollView, RichText } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import { FC, useEffect } from "react";
import User from "../../mobxStore/user";
import GoBackButton from "../../components/goBackButton/goBackButton";
import Style from "./guide.module.css";
import Images from "../../mobxStore/images";

const Guide: FC<{ user: User; images: Images }> = props => {
  const onConfirm = () => {
    Taro.redirectTo({ url: "/pages/process/process" });
  };
  const onNoMoreInform = () => {
    props.user.setGuildConfirm(true);
    Taro.navigateTo({ url: "/pages/process/process" });
  };

  return (
    <View className={Style.body}>
      <GoBackButton />
      <View>
        <Image
          className={Style.img}
          src={props.images.imgsrcs.anniLogo}
          mode="aspectFit"
        />
      </View>
      <Text className={Style.title}>答题规则</Text>
      <ScrollView className={Style.rulesContent} scrollY enableFlex>
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Text className={Style.textB}>1.云游校区，回答题目</Text>
          <Text>
            在进度界面点击开始答题，在山东省地图上点击济南、威海、青岛图标，即可进入相应校区答题界面！
          </Text>
          <Text className={Style.textB}>2.学习校史，收集徽章</Text>
          <Text>
            每个校区对应的答题界面中都有三道校史知识题目，三道题均答对便可点亮一个校区徽章！
          </Text>
          <Text className={Style.textB}>3.分享卡片，参加抽奖</Text>
          <Text>
            八大校区全部点亮，便可在进度界面任选一个校区，生成卡片并分享到朋友圈，即可参加抽奖！抽奖结果将在活动后推文公布，兑奖时需提供朋友圈分享截图。
          </Text>
        </View>
      </ScrollView>
      <View className={Style.btnGroup}>
        <AtButton className={Style.btn} onClick={onNoMoreInform}>
          不再提醒
        </AtButton>
        <AtButton className={Style.btn} onClick={onConfirm}>
          开始答题
        </AtButton>
      </View>
    </View>
  );
};
export default inject("user", "images")(observer(Guide));

import { View, Text, Image, ScrollView } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import { FC, useEffect } from "react";
import User from "../../mobxStore/user";
import Style from "./guide.module.css";
import GoBackButton from "../../components/goBackButton/goBackButton";

const anniLogo = "https://static.herui.club/assets/sduanni/anniLogo.jpg";

const Guide: FC<{ user: User }> = props => {
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
        <Image className={Style.img} src={anniLogo} mode="aspectFit" />
      </View>
      <Text className={Style.title}>答题规则</Text>
      <ScrollView className={Style.rulesContent} scrollY enableFlex>
        <Text>
          {`
1.游校区，学校史
进入活动界面后，你可以点击山东省地图上的济南、青岛、威海三地，在小程序中打卡山大八大校区，并点击各校区图标进入答题界面！
2.答题目，集徽章
在每个校区对应的答题界面中都有三道题目，其中两道与校区相关，一道为校史题目，三道题均答对便可获得一个校区徽章，并在地图上点亮该校区卡片！
3.分享卡片，参加抽奖
完成全部八个校区的题目，点亮八个校区，便可以在初始界面点击图标进行分享，你可以从八个校区中任选一个，生成该校区的卡片并分享给你的朋友（朋友圈，qq空间，微博等），并参加抽奖！抽奖结果会在活动后公布，兑奖时要凭借分享的截图哦。
`}
        </Text>
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
export default inject("user")(observer(Guide));

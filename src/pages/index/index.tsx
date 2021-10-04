import { View, Image, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtButton, AtToast } from "taro-ui";
import { FC, useState } from "react";
import Taro from "@tarojs/taro";
import { fetch } from "../../rapper/index";
import Style from "./index.module.css";
import User from "../../mobxStore/user";

const Index: FC<{ user: User }> = props => {
  const [loading, setLoading] = useState(false);
  const navigateTo = () => {
    if (props.user.guildConfirm) {
      Taro.navigateTo({ url: "/pages/process/process" });
    } else {
      Taro.navigateTo({ url: "/pages/guide/guide" });
    }
  };

  const getUserInfo = async () => {
    if (!props.user.userInfo) {
      const userInfoRes = await Taro.getUserProfile({
        desc: "制作获奖卡片并记录中奖信息"
      });
      props.user.setUserInfo(userInfoRes.userInfo);
    }
  };

  const onClickGo = async () => {
    setLoading(true);
    try {
      // 获取用户数据并登录
      await getUserInfo();
      const loginRes = await Taro.login();
      const res = await fetch["POST/login"]({ code: loginRes.code });
      if (res.success) {
        props.user.setToken(res.data.token);
        navigateTo();
      } else throw new Error(res.errorMsg);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className={Style.body}>
      <View className={Style.intro}>
        <Text>庆百廿，游山大，学校史！</Text>
        <Text>依山傍海的旖旎风光，</Text>
        <Text>朴实深厚的学习氛围，</Text>
        <Text>山大在你心中是怎样的呢？</Text>
        <Text>在山大百廿校庆之际，</Text>
        <Text>团橘与你一起，</Text>
        <Text>“云上”打卡山大，</Text>
        <Text>学习山大校史，收集校区徽章，</Text>
        <Text>抽取精美礼品！</Text>
        <Text>快点击“现在出发”，参与活动吧！</Text>
      </View>
      <View className={Style.btnGroup}>
        <AtButton
          circle
          className={Style.btn}
          onClick={onClickGo}
          loading={loading}
        >
          {!loading && "现在出发"}
        </AtButton>
      </View>
    </View>
  );
};

export default inject("user")(observer(Index));

import { View, Image, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtButton, AtToast } from "taro-ui";
import { FC, useState } from "react";
import Taro from "@tarojs/taro";
import { fetch } from "../../rapper/index";
import Style from "./index.module.css";
import User from "../../mobxStore/user";

const sduLogo = "https://static.herui.club/assets/sduanni/sduLogo.png";

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
      <View>
        <Image src={sduLogo} mode="aspectFit" />
      </View>
      <View className={Style.intro}>
        <Text>学无止境，气有浩然</Text>
        <Text>正值120山大校庆之际</Text>
        <Text>让我们共游山大，同学校史！</Text>
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

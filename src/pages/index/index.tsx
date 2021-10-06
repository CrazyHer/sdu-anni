import { View, Image, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtButton, AtToast } from "taro-ui";
import { FC, useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { fetch } from "../../rapper/index";
import Style from "./index.module.css";
import User from "../../mobxStore/user";
import Images from "../../mobxStore/images";
import PreloadImg from "../../components/preloadImg/preloadImg";

const Index: FC<{ user: User; images: Images }> = props => {
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

  const [preloadProgress, setPreloadProgress] = useState(0);
  const [preloading, setPreloading] = useState(false);

  useEffect(() => {
    setPreloading(true);
    setTimeout(() => {
      setPreloading(false);
    }, 8000);
  }, []);

  return (
    <View
      className={Style.body}
      style={{ backgroundImage: `url(${props.images.imgsrcs.mainBackground})` }}
    >
      {preloading && (
        <PreloadImg
          onLoadFinish={() => setPreloading(false)}
          onProgressChange={p => setPreloadProgress(p)}
          imgSrcs={Object.keys(props.images.imgsrcs).map(
            v => props.images.imgsrcs[v]
          )}
        />
      )}
      <AtToast
        isOpened={preloading}
        duration={0}
        status="loading"
        text={`正在加载资源:${(preloadProgress * 100).toFixed(2)}%`}
        hasMask
      />
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

export default inject("user", "images")(observer(Index));

import { View, Text, Image, OpenData } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { AtButton, AtToast } from "taro-ui";
import Taro from "@tarojs/taro";
import { FC, useEffect, useMemo, useState } from "react";
import User from "../../mobxStore/user";
import Style from "./process.module.css";
import { fetch } from "../../rapper";
import GoBackButton from "../../components/goBackButton/goBackButton";

const ProcessPage: FC<{ user: User }> = props => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch["POST/getProgress"]()
      .then(res => {
        if (res.success) {
          props.user.setDrawState(res.data.draw);
          props.user.setQuestionRawList(res.data.questions);
        } else {
          throw new Error(res.errorMsg);
        }
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const onClickGo = () => {
    Taro.navigateTo({ url: "/pages/mainMap/mainMap" });
  };
  const onShareCard = () => {
    Taro.navigateTo({ url: "/pages/shareCard/shareCard" });
  };
  const onRestart = () => {
    Taro.navigateTo({ url: "/pages/mainMap/mainMap" });
  };

  // 根据该校区完成情况显示不同状态
  const CampusCard = (p: { campus: string; url: string }) => (
    <View>
      {props.user.finishedCampusNum.find(v => v.campus === p.campus) ? (
        <Image className={Style.card} mode="aspectFit" src={p.url} />
      ) : (
        <Image
          className={Style.card}
          mode="aspectFit"
          src={p.url.replace(/.png/g, "_gray.png")}
        />
      )}
    </View>
  );

  return (
    <View className={Style.body}>
      <GoBackButton />
      <Text className={Style.title}>收集进度</Text>
      <View className={Style.campusCardGroup}>
        <View className={Style.row}>
          <CampusCard
            url="https://static.herui.club/assets/sduanni/zhongxin_logo.png"
            campus="中心校区"
          />
          <CampusCard
            url="https://static.herui.club/assets/sduanni/ruanjianyuan_logo.png"
            campus="软件园校区"
          />
          <CampusCard
            url="https://static.herui.club/assets/sduanni/baotuquan_logo.png"
            campus="趵突泉校区"
          />
          <CampusCard
            url="https://static.herui.club/assets/sduanni/hongjialou_logo.png"
            campus="洪家楼校区"
          />
        </View>
        <View className={Style.row}>
          <CampusCard
            url="https://static.herui.club/assets/sduanni/qianfoshan_logo.png"
            campus="千佛山校区"
          />
          <CampusCard
            url="https://static.herui.club/assets/sduanni/xinglongshan_logo.png"
            campus="兴隆山校区"
          />
          <CampusCard
            url="https://static.herui.club/assets/sduanni/qingdao_logo.png"
            campus="青岛校区"
          />
          <CampusCard
            url="https://static.herui.club/assets/sduanni/weihai_logo.png"
            campus="威海校区"
          />
        </View>
      </View>

      <View className={Style.processText}>
        <Text>{props.user.userInfo?.nickName}：</Text>
        <Text>
          您已点亮{props.user.finishedCampusNum.length}个校区，还差
          {8 - props.user.finishedCampusNum.length}张即可分享卡片并参与抽奖
        </Text>
      </View>

      {props.user.finishedCampusNum.length === 8 ? (
        <View className={Style.btnGroup}>
          <AtButton className={Style.btn} onClick={onShareCard} circle>
            分享卡片
          </AtButton>
          <AtButton className={Style.btn} onClick={onRestart} circle>
            重游山大
          </AtButton>
        </View>
      ) : (
        <View className={Style.btnGroup}>
          <AtButton className={Style.btn} onClick={onClickGo} circle>
            开始答题
          </AtButton>
        </View>
      )}
      <AtToast isOpened={loading} text="加载中" status="loading" />
    </View>
  );
};
export default inject("user")(observer(ProcessPage));

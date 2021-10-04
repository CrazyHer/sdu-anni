import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import Style from "./zhongxin.module.css";

const Zhongxin: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("中心")}
        onFinish={async v => {
          console.log(v);
        }}
      />
    </View>
  );
};
export default inject()(observer(Zhongxin));

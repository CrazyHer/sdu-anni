import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import Style from "./ruanjianyuan.module.css";

const Ruanjianyuan: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("软件园校区")}
        onFinish={async v => {
          console.log(v);
        }}
      />
    </View>
  );
};
export default inject()(observer(Ruanjianyuan));

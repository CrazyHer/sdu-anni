import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import Style from "./baotuquan.module.css";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";

const Baotuquan: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("趵突泉校区")}
        onFinish={async v => {
          console.log(v);
        }}
      />
    </View>
  );
};
export default inject()(observer(Baotuquan));

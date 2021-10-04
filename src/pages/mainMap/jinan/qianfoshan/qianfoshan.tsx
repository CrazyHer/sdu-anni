import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import Style from "./qianfoshan.module.css";

const Qianfoshan: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("千佛山校区")}
        onFinish={async v => {
          console.log(v);
        }}
      />
    </View>
  );
};
export default inject()(observer(Qianfoshan));

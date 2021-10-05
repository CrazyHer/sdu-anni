import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import User from "src/mobxStore/user";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import Style from "./xinglongshan.module.css";

const Xinglongshan: FC<{ user: User }> = props => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("兴隆山校区")}
        onFinish={async v => {
          console.log(v);
        }}
      />
    </View>
  );
};
export default inject("user")(observer(Xinglongshan));

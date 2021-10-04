import { View } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import Style from "./questionWeihai.module.css";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import User from "../../../../mobxStore/user";

const QuestionWeihai: FC<{ user: User }> = props => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("威海校区")}
        onFinish={v => {
          console.log(v);
        }}
      />
    </View>
  );
};

export default inject("user")(observer(QuestionWeihai));

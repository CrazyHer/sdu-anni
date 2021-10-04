import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import Style from "./questionQingdao.module.css";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import User from "../../../../mobxStore/user";

const QuestionQingdao: FC<{ user: User }> = props => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("青岛校区")}
        onFinish={async v => {
          console.log(v);
        }}
      />
    </View>
  );
};

export default inject("user")(observer(QuestionQingdao));

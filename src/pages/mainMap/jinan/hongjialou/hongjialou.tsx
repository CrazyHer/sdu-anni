import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import Style from "./hongjialou.module.css";

const Hongjialou: FC = (props: any) => {
  return (
    <View className={Style.body}>
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("洪家楼校区")}
        onFinish={async v => {
          console.log(v);
        }}
      />
    </View>
  );
};
export default inject()(observer(Hongjialou));

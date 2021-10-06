import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import User from "../../../../mobxStore/user";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import GoBackButton from "../../../../components/goBackButton/goBackButton";
import Style from "./qianfoshan.module.css";
import { fetch } from "../../../../rapper";
import Images from "../../../../mobxStore/images";

const Qianfoshan: FC<{ user: User; images: Images }> = props => {
  return (
    <View
      className={Style.body}
      style={{
        backgroundImage: `url(${props.images.imgsrcs.dati_qianfoshan})`
      }}
    >
      <GoBackButton />
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("千佛山校区")}
        onFinish={async v => {
          props.user.updateQuestionStatus(v, true);
          await fetch["POST/saveProgress"]({
            draw: false,
            questions: props.user.questionRawList
          });
        }}
      />
    </View>
  );
};
export default inject("user", "images")(observer(Qianfoshan));

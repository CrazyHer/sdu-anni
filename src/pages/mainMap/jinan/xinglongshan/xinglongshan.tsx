import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import User from "../../../../mobxStore/user";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import GoBackButton from "../../../../components/goBackButton/goBackButton";
import Style from "./xinglongshan.module.css";
import { fetch } from "../../../../rapper";
import Images from "../../../../mobxStore/images";

const Xinglongshan: FC<{ user: User; images: Images }> = props => {
  return (
    <View
      className={Style.body}
      style={{
        backgroundImage: `url(${props.images.imgsrcs.dati_xinglongshan})`
      }}
    >
      <GoBackButton />
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("兴隆山校区")}
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
export default inject("user", "images")(observer(Xinglongshan));

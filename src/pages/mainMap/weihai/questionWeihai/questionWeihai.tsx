import { View } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC, useState } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import GoBackButton from "../../../../components/goBackButton/goBackButton";
import Style from "./questionWeihai.module.css";
import User from "../../../../mobxStore/user";
import { fetch } from "../../../../rapper";
import Images from "../../../../mobxStore/images";
import BgTransition from "../../../../components/bgTransition/bgTransition";

const QuestionWeihai: FC<{ user: User; images: Images }> = props => {
  const [bgSrcs] = useState([
    props.images.imgsrcs.dati_weihai0,
    props.images.imgsrcs.dati_weihai1,
    props.images.imgsrcs.dati_weihai2,
    props.images.imgsrcs.dati_weihai3
  ]);
  return (
    <View
      className={Style.body}
      style={{
        backgroundColor: "rgba(0,0,0,0)"
      }}
    >
      <BgTransition
        bgSrcs={bgSrcs}
        index={
          props.user
            .getQuestionsByCampus("威海校区")
            .filter(v => v.question_status).length
        }
      />

      <GoBackButton />
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("威海校区")}
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

export default inject("user", "images")(observer(QuestionWeihai));

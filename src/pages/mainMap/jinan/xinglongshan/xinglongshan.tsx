import { View } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC, useState } from "react";
import User from "../../../../mobxStore/user";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import GoBackButton from "../../../../components/goBackButton/goBackButton";
import Style from "./xinglongshan.module.css";
import Images from "../../../../mobxStore/images";
import BgTransition from "../../../../components/bgTransition/bgTransition";

const Xinglongshan: FC<{ user: User; images: Images }> = props => {
  const [bgSrcs] = useState([
    props.images.imgsrcs.dati_xinglongshan0,
    props.images.imgsrcs.dati_xinglongshan1,
    props.images.imgsrcs.dati_xinglongshan2,
    props.images.imgsrcs.dati_xinglongshan3
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
            .getQuestionsByCampus("兴隆山校区")
            .filter(v => v.question_status).length
        }
      />

      <GoBackButton />
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("兴隆山校区")}
      />
    </View>
  );
};
export default inject("user", "images")(observer(Xinglongshan));

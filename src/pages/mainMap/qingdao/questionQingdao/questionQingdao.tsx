import { View } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC, useState } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import User from "../../../../mobxStore/user";
import GoBackButton from "../../../../components/goBackButton/goBackButton";
import Style from "./questionQingdao.module.css";
import Images from "../../../../mobxStore/images";
import BgTransition from "../../../../components/bgTransition/bgTransition";

const QuestionQingdao: FC<{ user: User; images: Images }> = props => {
  const [bgSrcs] = useState([
    props.images.imgsrcs.dati_qingdao0,
    props.images.imgsrcs.dati_qingdao1,
    props.images.imgsrcs.dati_qingdao2,
    props.images.imgsrcs.dati_qingdao3
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
            .getQuestionsByCampus("青岛校区")
            .filter(v => v.question_status).length
        }
      />

      <GoBackButton />
      <QuestionSheet
        className={Style.questionSheet}
        questions={props.user.getQuestionsByCampus("青岛校区")}
      />
    </View>
  );
};

export default inject("user", "images")(observer(QuestionQingdao));

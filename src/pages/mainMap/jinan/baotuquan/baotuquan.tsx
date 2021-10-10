import { View } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC, useState } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import GoBackButton from "../../../../components/goBackButton/goBackButton";
import Style from "./baotuquan.module.css";
import User from "../../../../mobxStore/user";
import Images from "../../../../mobxStore/images";
import BgTransition from "../../../../components/bgTransition/bgTransition";

const Baotuquan: FC<{ user: User; images: Images }> = props => {
  const [bgSrcs] = useState([
    props.images.imgsrcs.dati_baotuquan0,
    props.images.imgsrcs.dati_baotuquan1,
    props.images.imgsrcs.dati_baotuquan2,
    props.images.imgsrcs.dati_baotuquan3
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
            .getQuestionsByCampus("趵突泉校区")
            .filter(v => v.question_status).length
        }
      />

      <GoBackButton />
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("趵突泉校区")}
      />
    </View>
  );
};
export default inject("user", "images")(observer(Baotuquan));

import { View, Text } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { FC } from "react";
import QuestionSheet from "../../../../components/questionSheet/questionSheet";
import GoBackButton from "../../../../components/goBackButton/goBackButton";
import Style from "./baotuquan.module.css";
import User from "../../../../mobxStore/user";
import { fetch } from "../../../../rapper";
import Images from "../../../../mobxStore/images";

const Baotuquan: FC<{ user: User; images: Images }> = props => {
  return (
    <View
      className={Style.body}
      style={{ backgroundImage: `url(${props.images.imgsrcs.dati_baotuquan})` }}
    >
      <GoBackButton />
      <QuestionSheet
        questions={props.user.getQuestionsByCampus("趵突泉校区")}
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
export default inject("user", "images")(observer(Baotuquan));

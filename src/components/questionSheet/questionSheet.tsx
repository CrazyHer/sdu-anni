import { View, Text } from "@tarojs/components";
import { FC, useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { inject, observer } from "mobx-react";
import { AtButton, AtModal, AtModalContent, AtToast } from "taro-ui";
import { fetch, Models } from "../../rapper";
import Style from "./questionSheet.module.css";
import User from "../../mobxStore/user";

const QuestionSheet: FC<{
  className?: string;
  questions: Models["POST/getProgress"]["Res"]["data"]["questions"];
}> = (props: {
  className?: string;
  questions: Models["POST/getProgress"]["Res"]["data"]["questions"];
  user: User;
}) => {
  // 当前作答的题目
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 选项状态，回答正确、错误、未回答
  const [optionStatus, setOptionStatus] = useState<{
    option: string;
    status: "right" | "wrong" | "none";
  }>({ option: "", status: "none" });

  // 答题正确则显示下一题按钮
  const [showNext, setShowNext] = useState(false);

  const [isFinished, setFinished] = useState(false);

  useEffect(() => {
    // 题目已答完
    if (!props.questions[currentQuestionIndex]) {
      setFinished(true);
      setOptionStatus({
        option: "",
        status: "none"
      });
      setShowNext(false);
      return;
    }
    // 题目未答或只答了一部分时，更新选项状态
    if (props.questions[currentQuestionIndex].question_status) {
      setOptionStatus({
        option: props.questions[currentQuestionIndex].question_answer,
        status: "right"
      });
      setShowNext(true);
    } else {
      setOptionStatus({
        option: "",
        status: "none"
      });
      setShowNext(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex]);

  const [loading, setLoading] = useState(false);
  const handleNext = async () => {
    try {
      setLoading(true);
      // 若题目已完成作答，不操作，否则更新题目状态
      if (!props.questions[currentQuestionIndex]?.question_status) {
        props.user.updateQuestionStatus(
          props.questions[currentQuestionIndex].question_id,
          true
        );
        await fetch["POST/saveProgress"]({
          draw: false,
          questions: props.user.questionRawList
        });
      }

      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const handleCampusInfo = () => {
    setModalVisible(true);
  };

  return (
    <View className={`${Style.content} ${props.className}`}>
      <AtToast
        isOpened={isFinished}
        status="success"
        onClick={() => Taro.navigateBack()}
        text={`恭喜你完成答题
       可点击返回主页`}
      />

      <AtModal
        isOpened={modalVisible}
        content={props.questions[currentQuestionIndex]?.question_knowledge}
        onCancel={() => setModalVisible(false)}
        onClose={() => setModalVisible(false)}
        cancelText="返回答题"
        customStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "10px"
        }}
      />
      <View
        className={Style.questionPanel}
        style={{
          // 答题结束时，隐藏答题板
          display: props.questions[currentQuestionIndex] ? "unset" : "none"
        }}
      >
        <Text className={Style.title}>
          {props.questions[currentQuestionIndex]?.question_name}
        </Text>
        <View className={Style.options}>
          {props.questions[currentQuestionIndex]?.question_option.map(v => (
            <AtButton
              circle
              key={v.option}
              // 由题目回答状态设定相应样式
              className={`${Style.btn} ${
                optionStatus.option === v.option
                  ? optionStatus.status === "right"
                    ? Style.right
                    : optionStatus.status === "wrong"
                    ? Style.wrong
                    : ""
                  : ""
              } `}
              onClick={async () => {
                // 若该题已回答正确，则不响应点击事件
                if (optionStatus.status === "right") {
                  return;
                }
                if (
                  v.option ===
                  props.questions[currentQuestionIndex].question_answer
                ) {
                  // 将选项设置为正确状态并展示按钮
                  setOptionStatus({
                    option:
                      props.questions[currentQuestionIndex].question_answer,
                    status: "right"
                  });
                  setShowNext(true);
                } else {
                  // 回答错误
                  // 将该选项设置为错误状态
                  setOptionStatus({ option: v.option, status: "wrong" });
                  setShowNext(false);
                }
              }}
            >
              {v.option}
            </AtButton>
          ))}
        </View>
      </View>
      <View className={Style.nextBtnWrapper}>
        {showNext && (
          <AtButton
            loading={loading}
            className={Style.nextBtn}
            onClick={handleNext}
            circle
          >
            {!loading && "下一题"}
          </AtButton>
        )}
        {optionStatus.status === "wrong" && (
          <AtButton
            loading={loading}
            className={Style.nextBtn}
            onClick={handleCampusInfo}
            circle
          >
            了解校史
          </AtButton>
        )}
      </View>
    </View>
  );
};
export default inject("user")(observer(QuestionSheet));

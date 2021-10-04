import { View, Text, Button } from "@tarojs/components";
import { FC, useState } from "react";
import { Models } from "src/rapper";
import { AtButton } from "taro-ui";
import Style from "./questionSheet.module.css";

const QuestionSheet: FC<{
  className?: string;
  questions: Models["POST/getProgress"]["Res"]["data"]["questions"];
  // 正确作答完一道题时
  onFinish: (question_id: number) => void;
}> = props => {
  // 当前作答的题目
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 字典中有选项代表已回答，值为false回答错误,true回答正确；若没有该选项则未回答
  const [optionStatus, setOptionStatus] = useState<Record<string, boolean>>({});

  return (
    <View className={`${Style.content} ${props.className}`}>
      <Text>{props.questions[currentQuestionIndex]?.question_name}</Text>
      <View className={Style.options}>
        {props.questions[currentQuestionIndex]?.question_option.map(v => (
          <AtButton
            key={v.option}
            // 由题目回答状态设定相应样式
            className={`${Style.btn} ${
              optionStatus[v.option] === undefined
                ? ""
                : optionStatus[v.option]
                ? Style.right
                : Style.wrong
            }`}
            onClick={async () => {
              if (
                v.option ===
                props.questions[currentQuestionIndex].question_answer
              ) {
                // 回答正确
                await props.onFinish(
                  props.questions[currentQuestionIndex].question_id
                );
                // 还原所有选项的错误状态并设置为唯一正确状态
                const temStatus = {};
                temStatus[v.option] = true;
                setOptionStatus(temStatus);
                // 两秒后跳转至下一题
                setTimeout(
                  () => setCurrentQuestionIndex(currentQuestionIndex + 1),
                  2000
                );
              } else {
                // 回答错误
                // 将该选项设置为唯一错误状态
                const temStatus = {};
                temStatus[v.option] = false;
                setOptionStatus(temStatus);
              }
            }}
          >
            {v.option}
          </AtButton>
        ))}
      </View>
    </View>
  );
};
export default QuestionSheet;

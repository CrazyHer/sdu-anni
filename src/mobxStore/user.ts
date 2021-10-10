import Taro from "@tarojs/taro";
import { action, autorun, computed, makeAutoObservable } from "mobx";
import { computedFn } from "mobx-utils";
import { Models } from "../rapper";

import customFetch from "../rapper/customFetch";

export default class User {
  token: string = Taro.getStorageSync("token") || "";
  guildConfirm: boolean = Taro.getStorageSync("guildConfirm") || false;
  hasDrawn: boolean = false; // 用户是否已抽奖
  openPrize: boolean = false; // 是否开奖
  isLucky: boolean = false; // 是否中奖
  prizeInfo: string = ""; // 开奖文案信息
  questionRawList: Models["POST/getProgress"]["Res"]["data"]["questions"] = [];
  userInfo: Taro.UserInfo | undefined = Taro.getStorageSync("userInfo");
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      Taro.setStorageSync("guildConfirm", this.guildConfirm);
    });
    autorun(() => {
      Taro.setStorageSync("token", this.token);
      customFetch(this.token);
    });
    autorun(() => {
      Taro.setStorageSync("userInfo", this.userInfo);
    });
  }

  // 根据校区获取对应的题目，使用计算函数缓存已计算过的结果优化性能
  getQuestionsByCampus = computedFn((campus: string) =>
    this.questionRawList.filter(v => v.question_campus === campus)
  );

  // 获取完成的校区数量
  @computed get finishedCampusNum(): {
    campus: string;
    value: number;
  }[] {
    const finishedQuestionNum: Record<string, number> = {};
    this.questionRawList.forEach(v => {
      // 记录每个校区完成题目的数量
      if (finishedQuestionNum[v.question_campus] && v.question_status) {
        finishedQuestionNum[v.question_campus] += 1;
      } else if (!finishedQuestionNum[v.question_campus] && v.question_status) {
        finishedQuestionNum[v.question_campus] = 1;
      }
    });
    // 每个校区答满3道题则记为完成
    return Object.keys(finishedQuestionNum)
      .map(key => ({ campus: key, value: finishedQuestionNum[key] }))
      .filter(v => v.value === 3);
  }

  @action setUserInfo = (userInfo: Taro.UserInfo) => {
    this.userInfo = userInfo;
  };

  @action setToken = (token: string) => {
    this.token = token;
  };

  @action setGuildConfirm = (confirm: boolean) => {
    this.guildConfirm = confirm;
  };

  @action setQuestionRawList = (list: typeof this.questionRawList) => {
    this.questionRawList = list;
  };

  @action setDrawState = (hasDrawn: boolean) => {
    this.hasDrawn = hasDrawn;
  };

  @action setPrizeState = (
    openPrize: boolean,
    isLucky: boolean,
    prizeInfo: string
  ) => {
    this.openPrize = openPrize;
    this.isLucky = isLucky;
    this.prizeInfo = prizeInfo;
  };

  @action updateQuestionStatus = (id: number, status: boolean) => {
    let target = this.questionRawList.find(v => v.question_id === id);
    if (target) {
      target.question_status = status;
    }
  };
}

import Taro from "@tarojs/taro";
import { action, autorun, makeAutoObservable } from "mobx";

import customFetch from "../rapper/customFetch";

export default class User {
  token: string = Taro.getStorageSync("token") || "";

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      if (this.token) {
        Taro.setStorageSync("token", this.token);
        customFetch(this.token);
      }
    });
  }

  @action setToken = (token: string) => {
    this.token = token;
  };
}

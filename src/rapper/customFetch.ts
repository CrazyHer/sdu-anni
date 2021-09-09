import Taro from "@tarojs/taro";

import { overrideFetch } from ".";

const baseURL = "";

// 使用Taro.request重写请求方法
const customFetch = (token: string) => {
  overrideFetch(
    ({ url, method, params }) =>
      new Promise<any>(async (resolve, reject) => {
        try {
          const config: Taro.request.Option<any> = {
            method: method === "GET" || method === "PATCH" ? "GET" : method,
            url: `${baseURL}${url}`,
            data: params
          };

          const response = await Taro.request(
            // 登录接口请求头不附带token
            url === "/login" ? config : { ...config, header: { token } }
          );

          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })
  );
};

export default customFetch;

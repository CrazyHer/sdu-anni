/* md5: 85c74751276bf01c0cea1853c3d5e102 */
/* Rap仓库id: 290408 */
/* Rapper版本: 1.2.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=290408
 */

import * as commonLib from 'rap/runtime/commonLib'

export interface IModels {
  /**
   * 接口名：wx.login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2077406
   */
  'POST/login': {
    Req: {
      /**
       * wx.login res返回code
       */
      code: string
    }
    Res: {
      success: boolean
      data: {
        token: string
        lucky: boolean
        openPrize: boolean
        prizeInfo: string
      }
      errorCode: string
      errorMsg: string
    }
  }

  /**
   * 接口名：完善用户信息（推迟）
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2097135
   */
  'POST/updateUserInfo': {
    Req: {
      token: string
      /**
       * wx名称
       */
      nick_name: string
      /**
       * 学号
       */
      stu_id: string
    }
    Res: {
      success: boolean
      data: {}
      errorCode: string
      errorMsg: string
    }
  }

  /**
   * 接口名：保存用户的进度
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2093424
   */
  'POST/saveProgress': {
    Req: {
      /**
       * 是否参与抽奖
       */
      draw: boolean
      questions: {
        question_id: number
        question_status: boolean
      }[]
    }
    Res: {
      success: boolean
      data: {}
      errorCode: string
      errorMsg: string
    }
  }

  /**
   * 接口名：获取用户的进度
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2093425
   */
  'POST/getProgress': {
    Req: {
      /**
       * 令牌
       */
      token: string
    }
    Res: {
      success: boolean
      errorCode: string
      errorMsg: string
      data: {
        draw: boolean
        questions: {
          question_id: number
          question_name: string
          question_option: {
            option: string
          }[]
          question_campus: string
          question_answer: string
          question_status: boolean
          question_knowledge: string
        }[]
      }
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'POST/login': ResSelector<IModels['POST/login']['Res']>
  'POST/updateUserInfo': ResSelector<IModels['POST/updateUserInfo']['Res']>
  'POST/saveProgress': ResSelector<IModels['POST/saveProgress']['Res']>
  'POST/getProgress': ResSelector<IModels['POST/getProgress']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  // if (!extraConfig || !extraConfig.fetchType) {
  //   console.warn('Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch')
  // }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)

  return {
    /**
     * 接口名：wx.login
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2077406
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/login': (req?: IModels['POST/login']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/login',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/login']>
    },

    /**
     * 接口名：完善用户信息（推迟）
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2097135
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/updateUserInfo': (req?: IModels['POST/updateUserInfo']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/updateUserInfo',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/updateUserInfo']>
    },

    /**
     * 接口名：保存用户的进度
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2093424
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/saveProgress': (req?: IModels['POST/saveProgress']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/saveProgress',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/saveProgress']>
    },

    /**
     * 接口名：获取用户的进度
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=290408&mod=477008&itf=2093425
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/getProgress': (req?: IModels['POST/getProgress']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/getProgress',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/getProgress']>
    },
  }
}

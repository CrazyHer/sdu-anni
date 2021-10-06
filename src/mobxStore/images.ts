import { makeAutoObservable } from "mobx";

export default class Images {
  imgsrcs = {
    mainBackground: "https://cdn.herui.club/assets/sduanni/mainBackground.png",
    mainBackgroundWithMask:
      "https://cdn.herui.club/assets/sduanni/mainBackgroundWithMask.png",
    anniLogo: "https://cdn.herui.club/assets/sduanni/anniLogo.jpg",
    zhongxin_logo: "https://cdn.herui.club/assets/sduanni/zhongxin_logo.png",
    ruanjianyuan_logo:
      "https://cdn.herui.club/assets/sduanni/ruanjianyuan_logo.png",
    baotuquan_logo: "https://cdn.herui.club/assets/sduanni/baotuquan_logo.png",
    hongjialou_logo:
      "https://cdn.herui.club/assets/sduanni/hongjialou_logo.png",
    qianfoshan_logo:
      "https://cdn.herui.club/assets/sduanni/qianfoshan_logo.png",
    xinglongshan_logo:
      "https://cdn.herui.club/assets/sduanni/xinglongshan_logo.png",
    qingdao_logo: "https://cdn.herui.club/assets/sduanni/qingdao_logo.png",
    weihai_logo: "https://cdn.herui.club/assets/sduanni/weihai_logo.png",
    jinan_icon: "https://cdn.herui.club/assets/sduanni/jinan_icon.png",
    weihai_icon: "https://cdn.herui.club/assets/sduanni/weihai_icon.png",
    qingdao_icon: "https://cdn.herui.club/assets/sduanni/qingdao_icon.png",
    shandong: "https://cdn.herui.club/assets/sduanni/shandong.png",
    weihaishi: "https://cdn.herui.club/assets/sduanni/weihaishi.jpg",

    dati_weihai0: "https://cdn.herui.club/assets/sduanni/dati_weihai0.png",
    dati_weihai1: "https://cdn.herui.club/assets/sduanni/dati_weihai1.png",
    dati_weihai2: "https://cdn.herui.club/assets/sduanni/dati_weihai2.png",
    dati_weihai3: "https://cdn.herui.club/assets/sduanni/dati_weihai3.png",

    qingdaoshi: "https://cdn.herui.club/assets/sduanni/qingdaoshi.png",
    dati_qingdao: "https://cdn.herui.club/assets/sduanni/dati_qingdao.jpg",
    jinan: "https://cdn.herui.club/assets/sduanni/jinan.jpg",
    shandong_baotuquan:
      "https://cdn.herui.club/assets/sduanni/shandong_baotuquan.png",
    shandong_hongjialou:
      "https://cdn.herui.club/assets/sduanni/shandong_hongjialou.png",
    shandong_qianfoshan:
      "https://cdn.herui.club/assets/sduanni/shandong_qianfoshan.png",
    shandong_ruanjianyuan:
      "https://cdn.herui.club/assets/sduanni/shandong_ruanjianyuan.png",
    shandong_xinglongshan:
      "https://cdn.herui.club/assets/sduanni/shandong_xinglongshan.png",
    shandong_zhongxin:
      "https://cdn.herui.club/assets/sduanni/shandong_zhongxin.png",
    dati_zhongxin: "https://cdn.herui.club/assets/sduanni/dati_zhongxin.png",
    dati_xinglongshan:
      "https://cdn.herui.club/assets/sduanni/dati_xinglongshan.png",
    dati_ruanjianyuan:
      "https://cdn.herui.club/assets/sduanni/dati_ruanjianyuan.png",
    dati_qianfoshan:
      "https://cdn.herui.club/assets/sduanni/dati_qianfoshan.png",
    dati_hongjialou:
      "https://cdn.herui.club/assets/sduanni/dati_hongjialou.png",
    dati_baotuquan: "https://cdn.herui.club/assets/sduanni/dati_baotuquan.png",

    demo: "https://cdn.herui.club/assets/sduanni/demo.png"
  };
  constructor() {
    makeAutoObservable(this);
  }
}

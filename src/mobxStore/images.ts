import { makeAutoObservable } from "mobx";

export default class Images {
  imgsrcs = {
    button_back: "https://cdn.herui.club/assets/sduanni/button_back.png",
    mainBackground: "https://cdn.herui.club/assets/sduanni/main_bg.jpg",
    mainBackgroundWithMask:
      "https://cdn.herui.club/assets/sduanni/main_bg_m.jpg",

    anniLogo: "https://cdn.herui.club/assets/sduanni/anni_logo.jpg",

    zhongxin_logo: "https://cdn.herui.club/assets/sduanni/logo_zhongxin.png",
    ruanjianyuan_logo:
      "https://cdn.herui.club/assets/sduanni/logo_ruanjianyuan.png",
    baotuquan_logo: "https://cdn.herui.club/assets/sduanni/logo_baotuquan.png",
    hongjialou_logo:
      "https://cdn.herui.club/assets/sduanni/logo_hongjialou.png",
    qianfoshan_logo:
      "https://cdn.herui.club/assets/sduanni/logo_qianfoshan.png",
    xinglongshan_logo:
      "https://cdn.herui.club/assets/sduanni/logo_xinglongshan.png",
    qingdao_logo: "https://cdn.herui.club/assets/sduanni/logo_qingdao.png",
    weihai_logo: "https://cdn.herui.club/assets/sduanni/logo_weihai.png",
    jinan_icon: "https://cdn.herui.club/assets/sduanni/icon_jinan.png",
    weihai_icon: "https://cdn.herui.club/assets/sduanni/icon_weihai.png",
    qingdao_icon: "https://cdn.herui.club/assets/sduanni/icon_qingdao.png",

    shandong: "https://cdn.herui.club/assets/sduanni/province_shandong.png",

    jinan: "https://cdn.herui.club/assets/sduanni/city_jinan.jpg",
    weihaishi: "https://cdn.herui.club/assets/sduanni/city_weihai.jpg",
    qingdaoshi: "https://cdn.herui.club/assets/sduanni/city_qingdao.jpg",

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

    dati_zhongxin0: "https://cdn.herui.club/assets/sduanni/dati_zhongxin0.jpg",
    dati_zhongxin1: "https://cdn.herui.club/assets/sduanni/dati_zhongxin1.jpg",
    dati_zhongxin2: "https://cdn.herui.club/assets/sduanni/dati_zhongxin2.jpg",
    dati_zhongxin3: "https://cdn.herui.club/assets/sduanni/dati_zhongxin3.jpg",

    dati_xinglongshan0:
      "https://cdn.herui.club/assets/sduanni/dati_xinglongshan0.jpg",
    dati_xinglongshan1:
      "https://cdn.herui.club/assets/sduanni/dati_xinglongshan1.jpg",
    dati_xinglongshan2:
      "https://cdn.herui.club/assets/sduanni/dati_xinglongshan2.jpg",
    dati_xinglongshan3:
      "https://cdn.herui.club/assets/sduanni/dati_xinglongshan3.jpg",

    dati_ruanjianyuan0:
      "https://cdn.herui.club/assets/sduanni/dati_ruanjianyuan0.jpg",
    dati_ruanjianyuan1:
      "https://cdn.herui.club/assets/sduanni/dati_ruanjianyuan1.jpg",
    dati_ruanjianyuan2:
      "https://cdn.herui.club/assets/sduanni/dati_ruanjianyuan2.jpg",
    dati_ruanjianyuan3:
      "https://cdn.herui.club/assets/sduanni/dati_ruanjianyuan3.jpg",

    dati_qianfoshan0:
      "https://cdn.herui.club/assets/sduanni/dati_qianfoshan0.jpg",
    dati_qianfoshan1:
      "https://cdn.herui.club/assets/sduanni/dati_qianfoshan1.jpg",
    dati_qianfoshan2:
      "https://cdn.herui.club/assets/sduanni/dati_qianfoshan2.jpg",
    dati_qianfoshan3:
      "https://cdn.herui.club/assets/sduanni/dati_qianfoshan3.jpg",

    dati_hongjialou0:
      "https://cdn.herui.club/assets/sduanni/dati_hongjialou0.jpg",
    dati_hongjialou1:
      "https://cdn.herui.club/assets/sduanni/dati_hongjialou1.jpg",
    dati_hongjialou2:
      "https://cdn.herui.club/assets/sduanni/dati_hongjialou2.jpg",
    dati_hongjialou3:
      "https://cdn.herui.club/assets/sduanni/dati_hongjialou3.jpg",

    dati_baotuquan0:
      "https://cdn.herui.club/assets/sduanni/dati_baotuquan0.jpg",
    dati_baotuquan1:
      "https://cdn.herui.club/assets/sduanni/dati_baotuquan1.jpg",
    dati_baotuquan2:
      "https://cdn.herui.club/assets/sduanni/dati_baotuquan2.jpg",
    dati_baotuquan3:
      "https://cdn.herui.club/assets/sduanni/dati_baotuquan3.jpg",

    dati_weihai0: "https://cdn.herui.club/assets/sduanni/dati_weihai0.jpg",
    dati_weihai1: "https://cdn.herui.club/assets/sduanni/dati_weihai1.jpg",
    dati_weihai2: "https://cdn.herui.club/assets/sduanni/dati_weihai2.jpg",
    dati_weihai3: "https://cdn.herui.club/assets/sduanni/dati_weihai3.jpg",

    dati_qingdao0: "https://cdn.herui.club/assets/sduanni/dati_qingdao0.jpg",
    dati_qingdao1: "https://cdn.herui.club/assets/sduanni/dati_qingdao1.jpg",
    dati_qingdao2: "https://cdn.herui.club/assets/sduanni/dati_qingdao2.jpg",
    dati_qingdao3: "https://cdn.herui.club/assets/sduanni/dati_qingdao3.jpg",

    card_zhongxin: "https://cdn.herui.club/assets/sduanni/card_zhongxin.jpg",
    card_baotuquan: "https://cdn.herui.club/assets/sduanni/card_baotuquan.jpg",
    card_hongjialou:
      "https://cdn.herui.club/assets/sduanni/card_hongjialou.jpg",
    card_ruanjianyuan:
      "https://cdn.herui.club/assets/sduanni/card_ruanjianyuan.jpg",
    card_xinglongshan:
      "https://cdn.herui.club/assets/sduanni/card_xinglongshan.jpg",
    card_qianfoshan:
      "https://cdn.herui.club/assets/sduanni/card_qianfoshan.jpg",
    card_weihai: "https://cdn.herui.club/assets/sduanni/card_weihai.jpg",
    card_qingdao: "https://cdn.herui.club/assets/sduanni/card_qingdao.jpg"
  };
  constructor() {
    makeAutoObservable(this);
  }
}

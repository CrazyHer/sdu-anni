import { View } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import Style from "./Layout.module.css";

const HLayout = (props: any) => {
  const { children } = props;
  return <View className={Style.content}>{children}</View>;
};

export default inject("user")(observer(HLayout));

import { View } from "@tarojs/components";
import { FC } from "react";

// 实现背景图片的平滑切换
const BgTransition: FC<{ bgSrcs: string[]; index: number }> = props => {
  return (
    <>
      {props.bgSrcs.map((src, index) => (
        <View
          key={src}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: -20,
            opacity: props.index === index ? "1" : "0",
            transition: "opacity 0.5s ease"
          }}
        />
      ))}
    </>
  );
};

export default BgTransition;

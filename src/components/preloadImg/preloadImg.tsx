import { View, Image } from "@tarojs/components";
import { FC, useEffect, useState } from "react";

const PreloadImg: FC<{
  imgSrcs: string[];
  onProgressChange: (percentage: number) => void;
  onLoadFinish: () => void;
}> = props => {
  const [loadedNum, setLoadedNum] = useState(0);

  useEffect(() => {
    props.onProgressChange(loadedNum / props.imgSrcs.length);
    if (loadedNum === props.imgSrcs.length) {
      props.onLoadFinish();
    }
  }, [loadedNum, props, props.imgSrcs.length]);

  return (
    <View style={{ display: "none" }}>
      {props.imgSrcs.map((v, i) => (
        <Image
          onLoad={() => {
            setLoadedNum(loadedNum + 1);
          }}
          key={i}
          src={v}
        />
      ))}
    </View>
  );
};
export default PreloadImg;

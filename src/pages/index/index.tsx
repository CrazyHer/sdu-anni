import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import Layout from "../../components/layout/Layout";
import Counter from "../../mobxStore/counter";
import Style from "./index.module.css";

const Index = (props: any) => {
  const counter = props.counter as Counter;
  const increment = () => {
    counter.increment();
  };

  const decrement = () => {
    counter.decrement();
  };

  const incrementAsync = () => {
    counter.incrementAsync();
  };
  return (
    <Layout>
      <View className={Style.body}>
        <View>初始化项目模板</View>
        <Button className={Style.btn} onClick={increment}>
          +
        </Button>
        <Button className={Style.btn} onClick={decrement}>
          -
        </Button>
        <Button className={Style.btn} onClick={incrementAsync}>
          Add Async
        </Button>
        <Text>{counter.counter}</Text>
      </View>
    </Layout>
  );
};
export default inject("counter")(observer(Index));

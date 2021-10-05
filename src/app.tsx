import { Component } from "react";
import { Provider } from "mobx-react";
import "taro-ui/dist/style/index.scss";
import store from "./mobxStore/index";
import "./app.css";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider {...store}>{this.props.children}</Provider>;
  }
}

export default App;

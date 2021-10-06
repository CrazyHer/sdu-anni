import { configure } from "mobx";
import Images from "./images";
import User from "./user";

configure({ enforceActions: "observed" });

const user = new User();
const images = new Images();
const stores = { user, images };

export default stores;

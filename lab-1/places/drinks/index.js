import {
  POINT_TEMPLATE_DRINK,
} from "../../utils/constant.js";
import {
  DRINK_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const drinks = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: DRINK_SYMBOL,
  popupTemplate: POINT_TEMPLATE_DRINK,
}))

export default drinks;

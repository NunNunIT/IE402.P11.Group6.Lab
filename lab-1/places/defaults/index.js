import {
  POINT_TEMPLATE_DEFAULT,
} from "../../utils/constant.js";
import {
  DEFAULT_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const defaults = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: DEFAULT_SYMBOL,
  popupTemplate: POINT_TEMPLATE_DEFAULT,
}))

export default defaults;

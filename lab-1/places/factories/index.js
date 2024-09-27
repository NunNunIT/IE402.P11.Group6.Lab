import {
  POINT_TEMPLATE_FACTORY,
} from "../../utils/constant.js";
import {
  FACTORY_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const factories = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: FACTORY_SYMBOL,
  popupTemplate: POINT_TEMPLATE_FACTORY,
}))

export default factories;

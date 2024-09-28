import {
  POINT_TEMPLATE_PARK,
} from "../../utils/constant.js";
import {
  PARK_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const parks = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: PARK_SYMBOL,
  popupTemplate: POINT_TEMPLATE_PARK,
  ...data,

}))

export default parks;

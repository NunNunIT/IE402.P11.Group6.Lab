import {
  POINT_TEMPLATE_GARA,
} from "../../utils/constant.js";
import {
  GARA_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const garas = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: GARA_SYMBOL,
  popupTemplate: POINT_TEMPLATE_GARA,
  ...data,
}))

export default garas;

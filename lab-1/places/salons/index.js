import {
  POINT_TEMPLATE_SALON,
} from "../../utils/constant.js";
import {
  SALON_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const salons = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: SALON_SYMBOL,
  popupTemplate: POINT_TEMPLATE_SALON,
  ...data,
}))

export default salons;

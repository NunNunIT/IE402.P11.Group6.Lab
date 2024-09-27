import {
  POINT_TEMPLATE_APARTMENT,
} from "../../utils/constant.js";
import {
  APARTMENT_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const apartments = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: APARTMENT_SYMBOL,
  popupTemplate: POINT_TEMPLATE_APARTMENT,
}))

export default apartments;

import {
  POINT_TEMPLATE_HOSPITAL,
} from "../../utils/constant.js";
import {
  HOSPITAL_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const hospitals = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: HOSPITAL_SYMBOL,
  popupTemplate: POINT_TEMPLATE_HOSPITAL,
  ...data,
}))

export default hospitals;
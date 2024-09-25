import {
  POINT_TEMPLATE_SCHOOL,
  SCHOOL_SYMBOL
} from "../utils/constant.js";
import datas from './data.js';

const hospitals = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: SCHOOL_SYMBOL,
  popupTemplate: POINT_TEMPLATE_SCHOOL,
}))

export default hospitals;

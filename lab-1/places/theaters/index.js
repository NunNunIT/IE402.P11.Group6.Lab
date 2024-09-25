import {
  POINT_TEMPLATE_SCHOOL,
} from "../../utils/constant.js";
import {
  SCHOOL_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const theaters = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: SCHOOL_SYMBOL,
  popupTemplate: POINT_TEMPLATE_SCHOOL,
}))

export default theaters;

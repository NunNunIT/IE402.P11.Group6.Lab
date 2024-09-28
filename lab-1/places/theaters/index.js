import {
  POINT_TEMPLATE_THEATER,
} from "../../utils/constant.js";
import {
  THEATER_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const theaters = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: THEATER_SYMBOL,
  popupTemplate: POINT_TEMPLATE_THEATER,
  ...data,

}))

export default theaters;

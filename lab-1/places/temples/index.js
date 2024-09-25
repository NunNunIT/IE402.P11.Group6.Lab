import {
  POINT_TEMPLATE_TEMPLE,
} from "../../utils/constant.js";
import {
  TEMPLE_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const temples = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: TEMPLE_SYMBOL,
  popupTemplate: POINT_TEMPLATE_TEMPLE,
}))

export default temples;

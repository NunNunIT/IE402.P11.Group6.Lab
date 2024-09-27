import {
  POINT_TEMPLATE_MARKET,
} from "../../utils/constant.js";
import {
  MARKET_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const markets = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: MARKET_SYMBOL,
  popupTemplate: POINT_TEMPLATE_MARKET,
}))

export default markets;

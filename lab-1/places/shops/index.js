import {
  POINT_TEMPLATE_SHOP,
} from "../../utils/constant.js";
import {
  SHOP_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const shops = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: SHOP_SYMBOL,
  popupTemplate: POINT_TEMPLATE_SHOP,
}))

export default shops;

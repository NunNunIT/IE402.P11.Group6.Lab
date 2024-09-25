import {
  POINT_TEMPLATE_REAL_ESTATE,
} from "../../utils/constant.js";
import {
  REAL_ESTATE_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const realEstates = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: REAL_ESTATE_SYMBOL,
  popupTemplate: POINT_TEMPLATE_REAL_ESTATE,
}))

export default realEstates;

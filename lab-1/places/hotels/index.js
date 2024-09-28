import {
  POINT_TEMPLATE_HOTEL,
} from "../../utils/constant.js";
import {
  HOTEL_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const hotels = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: HOTEL_SYMBOL,
  popupTemplate: POINT_TEMPLATE_HOTEL,
  ...data,
}))

export default hotels;

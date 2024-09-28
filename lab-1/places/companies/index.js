import {
  POINT_TEMPLATE_COMPANY,
} from "../../utils/constant.js";
import {
  COMPANY_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const companies = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: COMPANY_SYMBOL,
  popupTemplate: POINT_TEMPLATE_COMPANY,
  ...data,
}))

export default companies;

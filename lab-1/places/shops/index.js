import {
<<<<<<< HEAD
  POINT_TEMPLATE_SCHOOL,
} from "../../utils/constant.js";
import {
  SCHOOL_SYMBOL
=======
  POINT_TEMPLATE_SHOP,
} from "../../utils/constant.js";
import {
  SHOP_SYMBOL
>>>>>>> cccb8dc27c9f9ef5ec073f42515a57f217136e16
} from "../../utils/symbol.js";
import datas from './data.js';

const shops = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
<<<<<<< HEAD
  symbol: SCHOOL_SYMBOL,
  popupTemplate: POINT_TEMPLATE_SCHOOL,
=======
  symbol: SHOP_SYMBOL,
  popupTemplate: POINT_TEMPLATE_SHOP,
>>>>>>> cccb8dc27c9f9ef5ec073f42515a57f217136e16
}))

export default shops;

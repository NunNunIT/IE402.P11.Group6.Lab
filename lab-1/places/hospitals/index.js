import {
<<<<<<< HEAD
  POINT_TEMPLATE_SCHOOL,
=======
  POINT_TEMPLATE_HOSPITAL,
>>>>>>> cccb8dc27c9f9ef5ec073f42515a57f217136e16
} from "../../utils/constant.js";
import {
  HOSPITAL_SYMBOL
} from "../../utils/symbol.js";
import datas from './data.js';

const hospitals = datas.map((data) => ({
  type: "point",
  longitude: data["location/lng"],
  latitude: data["location/lat"],
  Name: data.title,
  Location: data.address,
  symbol: HOSPITAL_SYMBOL,
<<<<<<< HEAD
  popupTemplate: POINT_TEMPLATE_SCHOOL,
=======
  popupTemplate: POINT_TEMPLATE_HOSPITAL,
>>>>>>> cccb8dc27c9f9ef5ec073f42515a57f217136e16
}))

export default hospitals;
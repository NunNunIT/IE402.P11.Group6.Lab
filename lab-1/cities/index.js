import {
  CITY_SYMBOL,
  POINT_TEMPLATE_CITY,
  POINT_TEMPLATE_DISTRICT
} from "../utils/constant.js";

const city = [
  {
    type: "point",
    longitude: 106.1306634320799,
    latitude: 11.369479277826407,
    Name: "Thành phố Tây Ninh",
    Location: "Tỉnh Tây Ninh, Vietnam",
    symbol: CITY_SYMBOL,
    popupTemplate: POINT_TEMPLATE_CITY,
  },
  {
    type: "point",
    longitude: 106.1730254361892,
    latitude: 11.553648620035895,
    Name: "Tân Châu",
    Location: "Tỉnh Tây Ninh, Vietnam",
    symbol: CITY_SYMBOL,
    popupTemplate: POINT_TEMPLATE_DISTRICT,
  },
  {
    type: "point",
    longitude: 106.02402877501625,
    latitude: 11.312303130911445,
    Name: "Châu Thành",
    Location: "Tỉnh Tây Ninh, Vietnam",
    symbol: CITY_SYMBOL,
    popupTemplate: POINT_TEMPLATE_DISTRICT,
  },
];

export default city;

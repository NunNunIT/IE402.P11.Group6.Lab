// import Template from "./template.js";
import CanGio from "./can-gio.js";
import NhaBe from "./nha-be.js";

import { POINT_TEMPLATE_AREA } from "../utils/constant.js";

const districts = [CanGio, NhaBe].map(data => ({
  type: "polygon",
  popupTemplate: POINT_TEMPLATE_AREA,
  ...data,
  symbol: {
    type: "simple-fill",
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
    ...data.symbol,
  },
}));

export default districts;

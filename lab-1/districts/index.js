// import Template from "./template.js";
import CanGio from "./CanGio.js";
import NhaBe from "./NhaBe.js";
import BinhChanh from "./BinhChanh.js";

import { POINT_TEMPLATE_AREA } from "../utils/constant.js";

const districts = [CanGio, NhaBe, BinhChanh].map(data => ({
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

import BenCau from "./BenCau.js";
import ChauThanh from "./ChauThanh.js";
import DuongMinhChau from "./DuongMinhChau.js";
import GoDau from "./GoDau.js";
import TayNinh from "./TayNinh.js";
import NhaBe from "./NhaBe.js";

import { POINT_TEMPLATE_AREA } from "../utils/constant.js";

const districts = [BenCau, ChauThanh, GoDau, DuongMinhChau, TayNinh, NhaBe].map(data => ({
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

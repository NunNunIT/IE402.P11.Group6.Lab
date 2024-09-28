// import Template from "./template.js";
import QL22 from "./QL22.js";
import QL52 from "./QL52.js";
import PhamVanDong from "./PhamVanDong.js";

import { POINT_TEMPLATE_LINE } from "../utils/constant.js";

const streets = [QL22, QL52, PhamVanDong].map(data => ({
  type: "polyline",
  popupTemplate: POINT_TEMPLATE_LINE,
  ...data,
  symbol: {
    type: "simple-line",
    width: 2,
    ...data.symbol
  },
}))

export default streets;

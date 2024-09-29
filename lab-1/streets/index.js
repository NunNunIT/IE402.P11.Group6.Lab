// import Template from "./template.js";
import QL22 from "./QL22.js";
import QL52 from "./QL52.js";
import PhamVanDong from "./PhamVanDong.js";
import QL1A from "./QL1A.js";
import QL13 from "./QL13.js";
import QL50 from "./QL50.js";

import { POINT_TEMPLATE_LINE } from "../utils/constant.js";

const streets = [QL22, PhamVanDong, QL1A, QL13, QL52, QL50].map((data) => ({
  type: "polyline",
  popupTemplate: POINT_TEMPLATE_LINE,
  ...data,
  symbol: {
    type: "simple-line",
    width: 2,
    ...data.symbol,
  },
}));

export default streets;

import Template from "./template.js";
import QL22 from "./QL22.js";

import { POINT_TEMPLATE_LINE } from "../utils/constant.js";

const streets = [Template, QL22].map(data => ({
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

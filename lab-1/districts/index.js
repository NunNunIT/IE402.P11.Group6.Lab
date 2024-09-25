// import Template from "./template.js";
import CanGio from "./CanGio.js";
import NhaBe from "./NhaBe.js";
import BinhChanh from "./BinhChanh.js";
import Quan7 from "./Quan7.js";
import Quan8 from "./Quan8.js";
import Quan2 from "./Quan2.js";
import Quan1 from "./Quan1.js";
import BinhThanh from "./BinhThanh.js";
import CuChi from "./CuChi.js";
import Quan6 from "./Quan6.js";
import GoVap from "./GoVap.js";
import PhuNhuan from "./PhuNhuan.js";
import Quan12 from "./Quan12.js";
import TanPhu from "./TanPhu.js";

import { POINT_TEMPLATE_AREA } from "../utils/constant.js";

const districts = [CanGio, NhaBe, BinhChanh, Quan7, Quan8, Quan2, Quan1, BinhThanh, CuChi, Quan6, GoVap, PhuNhuan, Quan12, TanPhu].map(data => ({
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

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
import Quan3 from "./Quan3.js";
import HocMon from "./HocMon.js";
import Quan11 from "./Quan11.js";
import Quan5 from "./Quan5.js";
import QuanTanBinh from "./QuanTanBinh.js";
import QuanBinhTan from "./QuanBinhTan.js";
import Quan10 from "./Quan10.js";
import Quan9 from "./Quan9.js";
import TPThuDuc from "./TPThuDuc.js";
import Quan4 from "./Quan4.js";

import { POINT_TEMPLATE_AREA } from "../utils/constant.js";

const districts = [CanGio, NhaBe, BinhChanh, Quan3, HocMon, Quan11, Quan5, QuanTanBinh, QuanBinhTan, Quan10, Quan9, TPThuDuc, Quan4,].map(data => ({
const districts = [CanGio, NhaBe, BinhChanh, Quan3, HocMon, Quan11, Quan5, QuanTanBinh, QuanBinhTan, Quan10, Quan9, TPThuDuc, Quan4].map(data => ({
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

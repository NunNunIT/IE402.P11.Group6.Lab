const MAP_VIEW_TEMPLATE_INFO = {
  center: [106.12218230229296, 11.368515844547606],
  zoom: 10,
  highlightOptions: {
    color: "rgb(123, 211, 234)",
  },
}

const POINT_TEMPLATE_AREA = {
  title: "{name}",
  content:
    "Diện tích: <b>{area} km<sup>2</sup></b>.<br>" +
    "Dân số: <b>{population} người</b>.",
};

const DISTRICT_TEMPLATE_INFO = {
  type: "polygon",
  symbol: {
    type: "simple-fill",
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  },
  popupTemplate: POINT_TEMPLATE_AREA,
}

export {
  DISTRICT_TEMPLATE_INFO,
  MAP_VIEW_TEMPLATE_INFO,
  POINT_TEMPLATE_AREA
};
const MAP_VIEW_TEMPLATE_INFO = {
  center: [106.12218230229296, 11.368515844547606],
  zoom: 10,
  highlightOptions: {
    color: "rgb(123, 211, 234)",
  },
}

const TOWN_SYMBOL = {
  type: "picture-marker",
  url: "./symbols/location.png",
  width: "24px",
  height: "24px",
};

const POINT_TEMPLATE_TOWN = {
  title: "{Name}",
  content: "Thị xã <b>{Name}</b>, <b>{Location}</b>.",
};


const SCHOOL_SYMBOL = {
  type: "picture-marker",
  url: "./symbols/school.png",
  width: "24px",
  height: "24px",
};

const CITY_SYMBOL = {
  type: "picture-marker",
  url: "./symbols/city.png",
  width: "36px",
  height: "36px",
};

const POINT_TEMPLATE_CITY = {
  title: "{Name}",
  content: "Thành phố này thuộc <b>{Location}</b>.",
};

const POINT_TEMPLATE_DISTRICT = {
  title: "{Name}",
  content: "Thị trấn <b>{Name}<b/>, {Location}</b> .",
};

const POINT_TEMPLATE_SCHOOL = {
  title: "{Name}",
  content: "Trường học này ở <b>{Location}</b>.",
};

const POINT_TEMPLATE_LINE = {
  title: "{Name}",
  content: "Đường <b>{Name} - {Location}</b>.",
};

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
  POINT_TEMPLATE_AREA,
  SCHOOL_SYMBOL,
  POINT_TEMPLATE_SCHOOL,
  CITY_SYMBOL,
  POINT_TEMPLATE_DISTRICT,
  POINT_TEMPLATE_LINE,
  POINT_TEMPLATE_CITY,
  TOWN_SYMBOL,
  POINT_TEMPLATE_TOWN,
};
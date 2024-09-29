// Chỉnh tên đia điểm
const name = "Quận 4";
// Chỉnh số dân ở đây
const population = 199329;
// Chỉnh diện tích ở đây
const area = 4.18;
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [0, 102, 0, 0.35],
};

// Thêm ranh giới ở đây
const rings = [
  [106.69048309, 10.75217438],
  [106.68782806, 10.75180912],

  [106.68638989, 10.75151032], // quan 4 -> quan 5, quan 8

  [106.68642243, 10.75161632],
  [106.68643706, 10.75174388],
  [106.68645717, 10.75191397],
  [106.68647180, 10.75202237],
  [106.68648887, 10.75215892],
  [106.68650167, 10.75227271],
  [106.68651204, 10.75235775],
  [106.68656934, 10.75249429],
  [106.68662176, 10.75261587],
  [106.68667358, 10.75273684],
  [106.68671015, 10.75282967],
  [106.68679733, 10.75294107],
  [106.68689486, 10.75306564],
  [106.68699179, 10.75319200],
  [106.68703568, 10.75325069],
  [106.68713016, 10.75334591],
  [106.68722282, 10.75344353],

  [106.68729295, 10.75351909], // quan 4 -> quan 1, quan 5
  [106.69268036, 10.75829124],
  [106.69477081, 10.75947094],
  [106.69705963, 10.76187611],
  [106.69715118, 10.76200581],
  [106.69986725, 10.76440811],
  [106.7003479, 10.76471901],
  [106.70121002, 10.76535892],
  [106.7036972, 10.76811695],
  [106.70825195, 10.76972866],
  [106.70999146, 10.76650906],
  [106.71347809, 10.76309681],
  [106.71440887, 10.76251411],
  [106.7220459, 10.75926113],
  [106.72080231, 10.75611687],
  [106.71902466, 10.75345612],
  [106.71585083, 10.7524538],
  [106.71398926, 10.75245285],
  [106.70989227, 10.75243664],
  [106.70511627, 10.75238705],
  [106.70498657, 10.75238609],
  [106.70223999, 10.75235844],
  [106.69528961, 10.75228024],
  [106.69048309, 10.75217438],
];

export default {
  name,
  population,
  area,
  rings,
  symbol,
};

// Chỉnh tên đia điểm
const name = "Quận 6"
// Chỉnh số dân ở đây
const population = 233561
// Chỉnh diện tích ở đây
const area = 7.14
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [204, 0, 204, 0.35],
};

// Thêm ranh giới ở đây
const rings = [
  [106.63434301, 10.73363965],
  [106.63424182, 10.73358216],
  [106.63371147, 10.73328149],
  [106.63333718, 10.73306468],
  [106.63298362, 10.73286464],
  [106.63281172, 10.7327784],
  [106.63218749, 10.73245378],
  [106.63188635, 10.73229686],
  [106.63145964, 10.73206088],
  [106.63107925, 10.73187042],
  [106.63093173, 10.73177818],
  [106.63061352, 10.73157455],
  [106.62997223, 10.73121279],
  [106.62935045, 10.73090015],
  [106.62878962, 10.73057433],
  [106.62838485, 10.73032637],
  [106.62792888, 10.73004487],
  [106.62760091, 10.72984962],
  [106.62727783, 10.72964957],
  [106.6272693, 10.72972863],
  [106.62726111, 10.72988381],
  [106.62724648, 10.73010422],
  [106.62725867, 10.73026233],
  [106.6273367, 10.73054982],
  [106.62743911, 10.7307319],
  [106.62764149, 10.73102178],
  [106.62782681, 10.73125896],
  [106.62776341, 10.73150093],
  [106.62766266, 10.7315731],
  [106.62747828, 10.7316866],
  [106.6272442, 10.73171655],
  [106.62700646, 10.73169738],
  [106.62664192, 10.73162431],
  [106.62644076, 10.73154525],
  [106.62611889, 10.73141708],
  [106.62580068, 10.73145062],
  [106.6254837, 10.73147098],
  [106.62515208, 10.73149374],
  [106.62481924, 10.73151411],
  [106.62455712, 10.73143505],
  [106.6243657, 10.73139911],
  [106.62412918, 10.73144104],
  [106.62399157, 10.73165795],
  [106.62396353, 10.73192747],
  [106.62397572, 10.73198257],
  [106.62402327, 10.73223892],
  [106.62405253, 10.73240182],
  [106.62409155, 10.73262822],
  [106.62410618, 10.73275399],
  [106.62411349, 10.73294565],
  [106.62414519, 10.73312293],
  [106.62417567, 10.73340204],
  [106.6242159, 10.73355656],
  [106.62424882, 10.7336991],
  [106.62429759, 10.73389675],
  [106.62433295, 10.73402851],
  [106.62437196, 10.73418663],
  [106.6243939, 10.73424053],
  [106.6244573, 10.73436271],
  [106.62448534, 10.73454119],
  [106.62448778, 10.7345915],
  [106.62449266, 10.73475082],
  [106.62448656, 10.73493409],
  [106.62448656, 10.73508622],
  [106.62448047, 10.73525871],
  [106.62447193, 10.73545156],
  [106.62446706, 10.73557614],
  [106.62443536, 10.73564441],
  [106.62438171, 10.7357055],
  [106.62431957, 10.73573457],
  [106.62424459, 10.73575853],
  [106.62411962, 10.73576631],
  [106.62401904, 10.73574176],
  [106.62395564, 10.73570103],
  [106.62385323, 10.73558963],
  [106.62378801, 10.73549979],
  [106.62364658, 10.73531892],
  [106.62352771, 10.73527699],
  [106.62334605, 10.73520752],
  [106.62314306, 10.73512546],
  [106.62297542, 10.73508594],
  [106.62280046, 10.73503742],
  [106.62269379, 10.73498771],
  [106.62261637, 10.73489608],
  [106.6225292, 10.73479366],
  [106.62244141, 10.73474635],
  [106.62227012, 10.73469304],
  [106.62217258, 10.73464872],
  [106.62208419, 10.73452953],
  [106.62190436, 10.73427739],
  [106.62167272, 10.73412646],
  [106.62167028, 10.73412765],
  [106.62152032, 10.73408932],
  [106.6213539, 10.73405998],

  [106.62115091, 10.73405019], // quan 6 -> quan 8, binh tan

  [106.62121895, 10.73461318],
  [106.62217674, 10.73850757],
  [106.62227671, 10.73869204],
  [106.62217674, 10.73891004],
  [106.62196948, 10.73903462],
  [106.62186463, 10.73979404],
  [106.62184268, 10.74041212],
  [106.6217549, 10.74071637],
  [106.62172934, 10.74135162],
  [106.62250498, 10.74334908],
  [106.62210752, 10.744269],
  [106.62325772, 10.74521283],
  [106.62377918, 10.74549274],
  [106.62377674, 10.74571793],
  [106.62450409, 10.75597382],
  [106.62526703, 10.7575016],
  [106.62490845, 10.75895119],
  [106.62417071, 10.76206069],
  [106.62425422, 10.76201757],
  [106.62440297, 10.76177084],
  [106.62450964, 10.76147559],
  [106.62465107, 10.7607779],
  [106.6246913, 10.76074676],
  [106.62485772, 10.76073059],
  [106.62503268, 10.76073778],
  [106.62515276, 10.76071323],
  [106.62519727, 10.76067071],
  [106.62523567, 10.76058986],
  [106.62527834, 10.76056351],
  [106.62577516, 10.76042457],
  [106.62588976, 10.76041139],
  [106.62626405, 10.76054255],
  [106.62646949, 10.76054674],
  [106.62685597, 10.76048925],
  [106.62719673, 10.76044733],
  [106.62737717, 10.76044613],
  [106.62762527, 10.76036768],
  [106.62777401, 10.76036229],
  [106.62794409, 10.76037307],
  [106.62810441, 10.76039942],
  [106.62816903, 10.76038085],
  [106.62835679, 10.76025988],
  [106.62844701, 10.76022874],
  [106.62852259, 10.76021856],
  [106.62844947, 10.76022891],
  [106.62861041, 10.76021813],
  [106.62880304, 10.76030078],
  [106.62906394, 10.76028281],
  [106.62932973, 10.76017022],
  [106.62962965, 10.76016543],
  [106.62969304, 10.76011632],
  [106.62979667, 10.75969352],
  [106.62992713, 10.75964561],
  [106.63039773, 10.75975460],
  [106.63051721, 10.75973783],
  [106.63080494, 10.75957015],
  [106.63111583, 10.75926472],
  [106.63151573, 10.75910542],
  [106.63183759, 10.75888983],
  [106.63226309, 10.75881197],
  [106.63268005, 10.75876765],
  [106.63299460, 10.75844546],
  [106.63362248, 10.75818554],
  [106.6341629, 10.75902843],
  [106.6353302, 10.75783157],
  [106.63750484, 10.75529388],
  [106.63761836, 10.75468104],
  [106.64186096, 10.75434589],
  [106.64247131, 10.754282],
  [106.64317322, 10.75420761],
  [106.64978027, 10.7535038],
  [106.65068917, 10.75341534],
  [106.65069587, 10.75332611],
  [106.65068198, 10.75320745],
  [106.65063808, 10.75287567],
  [106.65060639, 10.75262773],
  [106.65061858, 10.75234864],
  [106.65051255, 10.75147891],
  [106.65137649, 10.75146505],
  [106.65184953, 10.75145786],
  [106.65226162, 10.75150817],
  [106.65326623, 10.75165670],
  [106.65326779, 10.75131212],
  [106.65330680, 10.75084738],
  [106.65335557, 10.75045930],
  [106.65345310, 10.75006163],
  [106.65356039, 10.74967834],
  [106.65368231, 10.74929504],
  [106.65382385, 10.74875641],
  [106.65387072, 10.74857433],
  [106.65399263, 10.74817187],
  [106.65415357, 10.74779816],
  [106.65438765, 10.74732862],
  [106.65467050, 10.74675368],
  [106.65486070, 10.74637996],
  [106.65499878, 10.74614048], // quan 6 -> quan 5, quan 8
  [106.65093231, 10.74376488],
  [106.64949036, 10.74291515],
  [106.64416504, 10.73971176],
  [106.64519912, 10.74034703],
  [106.64469926, 10.74005237],
  [106.6436215, 10.73939356],
  [106.64278026, 10.73885214],
  [106.64190732, 10.73829395],
  [106.64121726, 10.73788908],
  [106.64067107, 10.7375465],
  [106.64015169, 10.73723746],
  [106.63952503, 10.73685175],
  [106.63893251, 10.7364948],
  [106.63803519, 10.73597733],
  [106.63756214, 10.73568026],
  [106.63706472, 10.7353784],
  [106.63654778, 10.73507175],
  [106.63597232, 10.73472198],
  [106.6352847, 10.73429794],
  [106.63470437, 10.73387151],
  [106.63434301, 10.73363965],
];

export default {
  name,
  population,
  area,
  rings,
  symbol
};
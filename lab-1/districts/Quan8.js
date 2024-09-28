// Chỉnh tên đia điểm
const name = "Quận 8"
// Chỉnh số dân ở đây
const population = 424667
// Chỉnh diện tích ở đây
const area = 19.11
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [186, 135, 89, 0.35],
}

// Thêm ranh giới ở đây
const rings = [
  [106.59780884, 10.70182419],
  [106.60440826, 10.70431232],
  [106.60379028, 10.71084976],
  [106.61603546, 10.71425533],
  [106.61556244, 10.7149992],
  [106.61906433, 10.71624565],
  [106.62115091, 10.73405019],
  [106.62115091, 10.73405019],
  [106.62135390, 10.73405998],
  [106.62152032, 10.73408932],
  [106.62167028, 10.73412765],
  [106.62167272, 10.73412646],
  [106.62190436, 10.73427739],
  [106.62208419, 10.73452953],
  [106.62217258, 10.73464872],
  [106.62227012, 10.73469304],
  [106.62244141, 10.73474635],
  [106.62252920, 10.73479366],
  [106.62261637, 10.73489608],
  [106.62269379, 10.73498771],
  [106.62280046, 10.73503742],
  [106.62297542, 10.73508594],
  [106.62314306, 10.73512546],
  [106.62334605, 10.73520752],
  [106.62352771, 10.73527699],
  [106.62364658, 10.73531892],
  [106.62378801, 10.73549979],
  [106.62385323, 10.73558963],
  [106.62395564, 10.73570103],
  [106.62401904, 10.73574176],
  [106.62411962, 10.73576631],
  [106.62424459, 10.73575853],
  [106.62431957, 10.73573457],
  [106.62438171, 10.73570550],
  [106.62443536, 10.73564441],
  [106.62446706, 10.73557614],
  [106.62447193, 10.73545156],
  [106.62448047, 10.73525871],
  [106.62448656, 10.73508622],
  [106.62448656, 10.73493409],
  [106.62449266, 10.73475082],
  [106.62448778, 10.73459150],
  [106.62448534, 10.73454119],
  [106.62445730, 10.73436271],
  [106.62439390, 10.73424053],
  [106.62437196, 10.73418663],
  [106.62433295, 10.73402851],
  [106.62429759, 10.73389675],
  [106.62424882, 10.73369910],
  [106.62421590, 10.73355656],
  [106.62417567, 10.73340204],
  [106.62414519, 10.73312293],
  [106.62411349, 10.73294565],
  [106.62410618, 10.73275399],
  [106.62409155, 10.73262822],
  [106.62405253, 10.73240182],
  [106.62402327, 10.73223892],
  [106.62397572, 10.73198257],
  [106.62396353, 10.73192747],
  [106.62399157, 10.73165795],
  [106.62412918, 10.73144104],
  [106.62436570, 10.73139911],
  [106.62455712, 10.73143505],
  [106.62481924, 10.73151411],
  [106.62515208, 10.73149374],
  [106.62548370, 10.73147098],
  [106.62580068, 10.73145062],
  [106.62611889, 10.73141708],
  [106.62644076, 10.73154525],
  [106.62664192, 10.73162431],
  [106.62700646, 10.73169738],
  [106.62724420, 10.73171655],
  [106.62747828, 10.73168660],
  [106.62766266, 10.7315731],
  [106.62776341, 10.73150093],
  [106.62782681, 10.73125896],
  [106.62764149, 10.73102178],
  [106.62743911, 10.73073190],
  [106.62733670, 10.73054982],
  [106.62725867, 10.73026233],
  [106.62724648, 10.73010422],
  [106.62726111, 10.72988381],
  [106.62726930, 10.72972863],
  [106.62727783, 10.72964957],
  [106.62760091, 10.72984962],
  [106.62792888, 10.73004487],
  [106.62838485, 10.73032637],
  [106.62878962, 10.73057433],
  [106.62935045, 10.73090015],
  [106.62997223, 10.73121279],
  [106.63061352, 10.73157455],
  [106.63093173, 10.73177818],
  [106.63107925, 10.73187042],
  [106.63145964, 10.73206088],
  [106.63188635, 10.73229686],
  [106.63218749, 10.73245378],
  [106.63281172, 10.73277840],
  [106.63298362, 10.73286464],
  [106.63333718, 10.73306468],
  [106.63371147, 10.73328149],
  [106.63424182, 10.73358216],
  [106.63434301, 10.73363965],
  [106.63470437, 10.73387151],
  [106.63528470, 10.73429794],
  [106.63597232, 10.73472198],
  [106.63654778, 10.73507175],
  [106.63706472, 10.73537840],
  [106.63756214, 10.73568026],
  [106.63803519, 10.73597733],
  [106.63893251, 10.73649480],
  [106.63952503, 10.73685175],
  [106.64015169, 10.73723746],
  [106.64067107, 10.73754650],
  [106.64121726, 10.73788908],
  [106.64190732, 10.73829395],
  [106.64278026, 10.73885214],
  [106.64362150, 10.73939356],
  [106.64469926, 10.74005237],
  [106.64519912, 10.74034703],
  [106.64416504, 10.73971176],
  [106.64949036, 10.74291515],
  [106.65093231, 10.74376488],
  [106.65499878, 10.74614048],
  [106.66051483, 10.74865627],
  [106.66548157, 10.75031376],
  [106.66706085, 10.75007629],
  [106.66925812, 10.74959183],
  [106.6734848, 10.74875832],
  [106.67556763, 10.74887466],
  [106.67731476, 10.75179195],
  [106.68123627, 10.75201511],
  [106.68374634, 10.75126362],
  [106.68386078, 10.7505579],
  [106.6865387, 10.75178623],
  [106.68782806, 10.75180912],
  [106.69048309, 10.75217438],
  [106.69049835, 10.74990749],
  [106.69297791, 10.74523163],
  [106.69197083, 10.74156475],
  [106.68769836, 10.74026871],
  [106.68606567, 10.73994446],
  [106.68282318, 10.73945999],
  [106.68184662, 10.73451614],
  [106.67601013, 10.73535538],
  [106.67362213, 10.73738766],
  [106.67171478, 10.73624992],
  [106.66616058, 10.73211479],
  [106.66575623, 10.73421001],
  [106.65610504, 10.73220634],
  [106.64945984, 10.73034382],
  [106.65010071, 10.7287302],
  [106.64553833, 10.72908592],
  [106.64344025, 10.72768116],
  [106.64221191, 10.7277174],
  [106.62548828, 10.69449806],
  [106.62611389, 10.69368362],
  [106.6240387, 10.6924715],
  [106.62373352, 10.69298267],
  [106.62071228, 10.69977474],
  [106.61856079, 10.69903088],
  [106.61812592, 10.69773197],
  [106.61489105, 10.69776058],
  [106.60959625, 10.6954031],
  [106.60481262, 10.69569683],
  [106.60146332, 10.69512367],
  [106.59892273, 10.69865036],
  [106.59780884, 10.70182419]
];

export default {
  name,
  population,
  area,
  rings,
  symbol
};
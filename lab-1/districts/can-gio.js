// Chỉnh tên đia điểm
const name = "Huyện testing"
// Chỉnh số dân ở đây
const population = 100000
// Chỉnh diện tích ở đây
const area = 123.45
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [150, 75, 0, 0.4],
}

// Thêm ranh giới ở đây
const rings = [
  [106.96268463, 10.43849468],
  [106.97260284, 10.43316078],
  [106.98229218, 10.42474556],
  [106.98529816, 10.4182024],
  [106.98561096, 10.41319561],
  [106.98096466, 10.40523052],
  [106.97621918, 10.39969254],
  [106.97055054, 10.39481354],
  [106.94264984, 10.38544941],
  [106.91846466, 10.37398052],
  [106.89455414, 10.3650856],
  [106.87587738, 10.36071873],
  [106.86758423, 10.35986996],
  [106.85276794, 10.35833168],
  [106.83459473, 10.35422611],
  [106.82253265, 10.3774128],
  [106.81508636, 10.39125824],
  [106.80444336, 10.40364456],
  [106.77774048, 10.43307114],
  [106.77225494, 10.44035816],
  [106.76315308, 10.45245361],
  [106.75685883, 10.46256828],
  [106.75231171, 10.47235394],
  [106.74539185, 10.4884367],
  [106.74358368, 10.49762726],
  [106.74401855, 10.4999876],
  [106.7484436, 10.51856136],
  [106.74909973, 10.53071404],
  [106.74417877, 10.55299854],
  [106.74293518, 10.55956364],
  [106.74196625, 10.56537151],
  [106.74263, 10.57101822],
  [106.74528503, 10.57567596],
  [106.74704742, 10.57792377],
  [106.75133514, 10.58082676],
  [106.75795746, 10.58175373],
  [106.76085663, 10.58152962],
  [106.76564789, 10.57945633],
  [106.7697525, 10.57652473],
  [106.77313232, 10.57584381],
  [106.77918243, 10.57726002],
  [106.7826767, 10.58193588],
  [106.78343964, 10.58790112],
  [106.78263092, 10.59710026],
  [106.77784729, 10.60504246],
  [106.77243042, 10.61373711],
  [106.77042389, 10.6200552],
  [106.77151489, 10.63343143],
  [106.77096558, 10.63674831],
  [106.76914215, 10.64000702],
  [106.76397705, 10.64495087],
  [106.74906921, 10.64964104],
  [106.74160767, 10.65570831],
  [106.73924255, 10.66120529],
  [106.73915863, 10.6651268],
  [106.73989105, 10.66720009],
  [106.74230957, 10.6697855],
  [106.74760437, 10.67093372],
  [106.75245667, 10.67042828],
  [106.76551056, 10.66528606],
  [106.76880646, 10.66581059],
  [106.77279663, 10.66870689],
  [106.77370453, 10.67310524],
  [106.77275848, 10.67629242],
  [106.78279877, 10.67305946],
  [106.7922287, 10.66731262],
  [106.79718781, 10.66215897],
  [106.80708313, 10.6574564],
  [106.80897522, 10.65498447],
  [106.8140564, 10.64054871],
  [106.82392883, 10.62904263],
  [106.8266449, 10.6278038],
  [106.83761597, 10.62704277],
  [106.84036255, 10.63562202],
  [106.84280396, 10.63802052],
  [106.85153961, 10.63978958],
  [106.86004639, 10.63655472],
  [106.86156464, 10.6376543],
  [106.86373901, 10.6414814],
  [106.86497498, 10.64229965],
  [106.8699646, 10.64317322],
  [106.87185669, 10.64698601],
  [106.87290955, 10.64808464],
  [106.87490845, 10.64837742],
  [106.88296509, 10.64740467],
  [106.88506317, 10.64025593],
  [106.88956451, 10.63754559],
  [106.89273071, 10.6322031],
  [106.89839172, 10.62934208],
  [106.90338898, 10.62479973],
  [106.90561676, 10.62077999],
  [106.90969849, 10.6100235],
  [106.91136932, 10.6082716],
  [106.91391754, 10.6075058],
  [106.91819763, 10.6099081],
  [106.92063904, 10.61004162],
  [106.92653656, 10.60348129],
  [106.93278503, 10.60189629],
  [106.93458557, 10.60076427],
  [106.93836212, 10.59924507],
  [106.94138336, 10.59668827],
  [106.94685364, 10.59725761],
  [106.95626068, 10.59395599],
  [106.96067047, 10.59354115],
  [106.96320343, 10.59145069],
  [106.96855927, 10.58940411],
  [106.97458649, 10.58236885],
  [106.97988892, 10.58173275],
  [106.98386383, 10.57943439],
  [106.98705292, 10.58784676],
  [106.98604584, 10.59602547],
  [106.99060822, 10.60069656],
  [106.99069214, 10.60488796],
  [106.99214935, 10.60569096],
  [106.99633026, 10.60545635],
  [106.9980545, 10.60766315],
  [107.00066376, 10.6070919],
  [107.00257874, 10.6086359],
  [107.00215149, 10.61042309],
  [107.00292206, 10.61089611],
  [107.00655365, 10.60983849],
  [107.00794983, 10.61326122],
  [107.01248169, 10.61009884],
  [107.01744843, 10.60652065],
  [107.01905823, 10.60438728],
  [107.0222702, 10.59508324],
  [107.02659607, 10.58845997],
  [107.02700806, 10.58634186],
  [107.0266571, 10.58347702],
  [107.02423096, 10.57854366],
  [107.01194763, 10.56070232],
  [107.01073456, 10.55782986],
  [107.01068878, 10.55461502],
  [107.01228333, 10.55036736],
  [107.0147171, 10.54794788],
  [107.02500916, 10.54590702],
  [107.02727509, 10.5420599],
  [107.02709961, 10.53779697],
  [107.02404022, 10.53382015],
  [107.01863098, 10.52905178],
  [107.01248169, 10.52054691],
  [107.0094986, 10.51411915],
  [107.00696564, 10.51051426],
  [107.00574493, 10.5093689],
  [107.00019073, 10.50711155],
  [106.9973526, 10.50321579],
  [106.99820709, 10.47863674],
  [106.99658203, 10.46049023],
  [106.99147034, 10.45094681],
  [106.98085785, 10.44734478],
  [106.9661026, 10.44648933],
  [106.96268463, 10.43849468]
];

export default { name, population, area, rings, symbol };

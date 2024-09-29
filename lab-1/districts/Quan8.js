// Chỉnh tên đia điểm
const name = "Quận 8";
// Chỉnh số dân ở đây
const population = 424667;
// Chỉnh diện tích ở đây
const area = 19.11;
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [186, 135, 89, 0.35],
};

// Thêm ranh giới ở đây
const rings = [
  [106.60379028, 10.71084976], // quan 8 -> binh chanh, binh tan

  [106.60367885, 10.71103215],
  [106.60382393, 10.71108966],
  [106.6041714, 10.71121903],
  [106.60471272, 10.71140472],
  [106.60516138, 10.71154128],
  [106.60528696, 10.71157722],
  [106.60533938, 10.71160118],
  [106.60535157, 10.71162633],
  [106.6053406, 10.71167785],
  [106.60536498, 10.71166706],
  [106.60538571, 10.71165748],
  [106.60541619, 10.71166706],
  [106.60576975, 10.71177368],
  [106.60579414, 10.71169701],
  [106.60634521, 10.71183118],
  [106.60704746, 10.71200608],
  [106.60768388, 10.71216661],
  [106.60829713, 10.71232473],
  [106.60890062, 10.71248765],
  [106.60954923, 10.71264698],
  [106.61017711, 10.71281469],
  [106.61071721, 10.71296323],
  [106.61110613, 10.71306865],
  [106.61159015, 10.71318485],
  [106.61190226, 10.71325673],
  [106.61220827, 10.7133298],
  [106.61272033, 10.7134496],
  [106.61308609, 10.71353705],
  [106.61341649, 10.7136185],
  [106.61377005, 10.71370236],
  [106.61375176, 10.71369757],
  [106.61435892, 10.71384731],
  [106.61463689, 10.71391679],
  [106.6150185, 10.71401382],
  [106.61526721, 10.71406653],
  [106.61568295, 10.71417195],
  [106.61603042, 10.71425341],
  [106.61583657, 10.71456847],
  [106.6155781, 10.71498654],
  [106.61571343, 10.71506561],
  [106.61578415, 10.71510035],
  [106.6158829, 10.71511113],
  [106.61598166, 10.71499852],
  [106.61615966, 10.71502607],
  [106.61640349, 10.71506081],
  [106.61654736, 10.71510035],
  [106.61659734, 10.71510514],
  [106.61690458, 10.71515665],
  [106.61698626, 10.71519498],
  [106.61703137, 10.71520576],
  [106.61735568, 10.71525608],
  [106.6174398, 10.71529321],
  [106.61759464, 10.71542379],
  [106.61767876, 10.71549566],
  [106.61781653, 10.71560827],
  [106.61786774, 10.71567056],
  [106.61796893, 10.71580712],
  [106.61801526, 10.71585384],
  [106.6181384, 10.71595327],
  [106.61826641, 10.71603233],
  [106.61833956, 10.71607905],
  [106.61842856, 10.71614853],
  [106.61853341, 10.71619525],
  [106.61863948, 10.71622041],
  [106.61876993, 10.7162216],
  [106.61909789, 10.71619765],
  [106.61910155, 10.71632463],
  [106.61913325, 10.71694874],
  [106.61915885, 10.71763036],
  [106.61923322, 10.71830359],
  [106.61933442, 10.71898999],
  [106.61944414, 10.71964884],
  [106.61952461, 10.72032566],
  [106.61960995, 10.7209917],
  [106.61968554, 10.72168409],
  [106.61976113, 10.72233335],
  [106.6198355, 10.722985],
  [106.61991841, 10.72371332],
  [106.6199879, 10.72427753],
  [106.62003301, 10.72462492],
  [106.62008544, 10.72509569],
  [106.62015371, 10.72563234],
  [106.62020004, 10.72604082],
  [106.62024027, 10.72636545],
  [106.62029635, 10.72680268],
  [106.62033537, 10.72713209],
  [106.62038414, 10.72753338],
  [106.62041462, 10.72779332],
  [106.62044388, 10.72803769],
  [106.62046826, 10.72832638],
  [106.62049996, 10.72861626],
  [106.62052312, 10.72882709],
  [106.62055482, 10.72905828],
  [106.62058286, 10.72930864],
  [106.62061822, 10.72954701],
  [106.6206487, 10.72982252],
  [106.62067796, 10.7301184],
  [106.62070478, 10.73038312],
  [106.62073282, 10.7306766],
  [106.62075964, 10.7308467],
  [106.62078647, 10.73107789],
  [106.62081695, 10.7313522],
  [106.62086937, 10.73174869],
  [106.62090351, 10.73197868],
  [106.62094374, 10.73222065],
  [106.62094862, 10.73232007],
  [106.62098763, 10.73259438],
  [106.62102177, 10.73289145],
  [106.62105225, 10.73312024],
  [106.62108761, 10.73343887],
  [106.6211193, 10.7336988],
  [106.62113393, 10.73386171],

  [106.62115318, 10.73405161], // quan 8 -> quan 6, binh tan
  [106.62135227, 10.73405931],
  [106.6214556, 10.73407548],
  [106.62152235, 10.73408835],
  [106.62166499, 10.73412579],
  [106.62175277, 10.73417011],
  [106.62182684, 10.73421892],
  [106.6219006, 10.73427522],
  [106.62197436, 10.73438123],
  [106.62206611, 10.73451],
  [106.62215998, 10.73463098],
  [106.62218955, 10.73465673],
  [106.62224441, 10.73468339],
  [106.62234164, 10.73471543],
  [106.622409, 10.734734],
  [106.62245198, 10.73475017],
  [106.62249008, 10.73476783],
  [106.62253793, 10.73480078],
  [106.62260407, 10.73487444],
  [106.62263607, 10.73492355],
  [106.62269033, 10.73498494],
  [106.62273513, 10.7350119],
  [106.62278634, 10.73503675],
  [106.62287077, 10.7350628],
  [106.6229869, 10.73508916],
  [106.62313503, 10.7351224],
  [106.62327005, 10.735176],
  [106.6233938, 10.73522451],
  [106.62352547, 10.73527662],
  [106.6236416, 10.73532334],
  [106.62373241, 10.73543376],
  [106.62387048, 10.73560176],
  [106.62393235, 10.73567752],
  [106.62399331, 10.73573172],
  [106.62404696, 10.73575538],
  [106.62410091, 10.73576317],
  [106.62415912, 10.73576586],
  [106.62421856, 10.73576346],
  [106.62428561, 10.73574879],
  [106.6243353, 10.73572843],
  [106.62438315, 10.73570417],
  [106.62442155, 10.73566225],
  [106.62444777, 10.73562062],
  [106.62446026, 10.73558648],
  [106.62446971, 10.73552719],
  [106.62446941, 10.73548047],
  [106.62447123, 10.73542627],
  [106.62447642, 10.73528433],
  [106.62448221, 10.73511214],
  [106.62448861, 10.73493755],
  [106.624488, 10.73480069],
  [106.62448883, 10.73465988],
  [106.62448883, 10.73453591],
  [106.62445438, 10.73436312],
  [106.62436874, 10.73418883],
  [106.62431357, 10.73396842],
  [106.62426876, 10.73378725],
  [106.62422731, 10.73361655],
  [106.62417458, 10.73340543],
  [106.6241505, 10.73320779],
  [106.62411819, 10.73294815],
  [106.62409655, 10.73268881],
  [106.6240932, 10.7326409],
  [106.6240554, 10.73243068],
  [106.62401334, 10.73218901],
  [106.62396976, 10.73194345],
  [106.62396366, 10.73190781],
  [106.62398544, 10.731649],
  [106.62414241, 10.7314256],
  [106.62443837, 10.73139655],
  [106.62481205, 10.73151484],
  [106.6251836, 10.73149388],
  [106.62558196, 10.73146483],
  [106.62591511, 10.73143758],
  [106.62611932, 10.73141991],
  [106.62647868, 10.73155976],
  [106.62677799, 10.73167595],
  [106.62714161, 10.73172327],
  [106.62748603, 10.73168763],
  [106.62776309, 10.73150855],
  [106.6278277, 10.73125011],
  [106.62767409, 10.73108481],
  [106.62755567, 10.73091342],
  [106.62739781, 10.73064828],
  [106.62733106, 10.73053598],
  [106.62730576, 10.730415],
  [106.62727193, 10.73031498],
  [106.62724511, 10.73021615],
  [106.62724846, 10.73010625],
  [106.62724389, 10.7300206],
  [106.62726248, 10.72981247],
  [106.62727681, 10.72965106],
  [106.62781003, 10.72997663],
  [106.62849704, 10.73039409],
  [106.62924745, 10.73084388],
  [106.62930293, 10.73087683],
  [106.63005699, 10.73125176],
  [106.6302484, 10.73134639],
  [106.63080496, 10.73169916],
  [106.63109574, 10.73188123],
  [106.63172362, 10.73220765],
  [106.63245269, 10.73259037],
  [106.63298304, 10.73287067],
  [106.63357312, 10.73320187],
  [106.63405104, 10.73347259],
  [106.63451434, 10.73373492],
  [106.63502213, 10.73409727],
  [106.63540373, 10.73437038],
  [106.6360121, 10.73473632],
  [106.63668144, 10.73514],
  [106.63730444, 10.73551732],
  [106.63759086, 10.7356898],
  [106.63793467, 10.73589762],
  [106.63828336, 10.73610904],
  [106.63860979, 10.73630669],
  [106.63898561, 10.73653308],
  [106.63932607, 10.73673911],
  [106.63968603, 10.73695682],
  [106.64006076, 10.73718356],
  [106.64038079, 10.73737661],
  [106.64071699, 10.73757964],
  [106.64107756, 10.73779765],
  [106.64138571, 10.73798391],
  [106.64163899, 10.73813604],
  [106.64183895, 10.7382575],
  [106.64194015, 10.73831919],
  [106.64211479, 10.73843178],
  [106.64240344, 10.73861505],
  [106.64271524, 10.73881419],
  [106.64300571, 10.73899985],
  [106.64328217, 10.73917624],
  [106.64353271, 10.73933465],
  [106.64384512, 10.73953529],
  [106.64410847, 10.73970238],
  [106.64446782, 10.7399159],
  [106.64482687, 10.74012911],
  [106.64518348, 10.74034129],
  [106.64550108, 10.74052995],
  [106.6458205, 10.7407186],
  [106.64621247, 10.74095128],
  [106.64655628, 10.74115551],
  [106.64686535, 10.74133848],
  [106.6471613, 10.74151456],
  [106.64747951, 10.74170351],
  [106.64774895, 10.74186342],
  [106.64804613, 10.7420398],
  [106.64827107, 10.74217276],
  [106.64855788, 10.74234255],
  [106.64885536, 10.74251953],
  [106.6491565, 10.7426983],
  [106.64945703, 10.74287678],
  [106.64974445, 10.74304477],
  [106.65010192, 10.74325541],
  [106.6504311, 10.74344915],
  [106.65076211, 10.7436435],
  [106.65111263, 10.74384893],
  [106.65136683, 10.74399925],
  [106.65164023, 10.74415886],
  [106.65191059, 10.74431937],
  [106.65221538, 10.74449784],
  [106.65254456, 10.74469159],
  [106.65284783, 10.74486976],
  [106.65323919, 10.74510034],
  [106.65355096, 10.74528327],
  [106.65381644, 10.74544019],
  [106.65411301, 10.74561477],
  [106.65449705, 10.74583965],
  [106.65477746, 10.74600525],

  [106.65501703, 10.74614569], // quan 8 -> quan 5, quan 6

  [106.65611507, 10.74678622],
  [106.65701239, 10.74730367],
  [106.65936298, 10.74826191],
  [106.66048463, 10.74857813],
  [106.66226952, 10.74915307],
  [106.66422022, 10.749843],
  [106.66522482, 10.75021671],
  [106.66624894, 10.75018796],
  [106.66678538, 10.75004423],
  [106.66811186, 10.74975676],
  [106.66964315, 10.74952678],
  [106.67156459, 10.74932555],
  [106.67267649, 10.74885602],
  [106.67416877, 10.74861646],
  [106.67545623, 10.74876978],
  [106.67625602, 10.74933513],
  [106.67656813, 10.75067666],
  [106.67677295, 10.7510887],
  [106.67765077, 10.75165405],
  [106.6787334, 10.75169238],
  [106.67989407, 10.75187444],
  [106.68103523, 10.75197027],
  [106.68205934, 10.75166363],
  [106.68311272, 10.7514145],
  [106.68425388, 10.75110786],
  [106.68461476, 10.75100246],
  [106.68556085, 10.75122285],

  [106.68638989, 10.75151032], // quan 8 -> quan 4, quan 5

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
  [106.59780884, 10.70182419],
  [106.59780884, 10.70182419],
  [106.60440826, 10.70431232],

  [106.60379028, 10.71084976], // quan 8 -> binh chanh, binh tan
];

export default {
  name,
  population,
  area,
  rings,
  symbol,
};

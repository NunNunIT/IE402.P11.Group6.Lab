// Chỉnh tên đia điểm
const name = "Quận Bình Tân";
// Chỉnh số dân ở đây
const population = 822173;
// Chỉnh diện tích ở đây
const area = 52.02;
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [30, 144, 255, 0.35],
};

// Thêm ranh giới ở đây
const rings = [
  [106.62115091, 10.73405019], // quan binh tan -> quan 6, 8

  [106.62113393, 10.73386171],
  [106.6211193, 10.7336988],
  [106.62108761, 10.73343887],
  [106.62105225, 10.73312024],
  [106.62102177, 10.73289145],
  [106.62098763, 10.73259438],
  [106.62094862, 10.73232007],
  [106.62094374, 10.73222065],
  [106.62090351, 10.73197868],
  [106.62086937, 10.73174869],
  [106.62081695, 10.7313522],
  [106.62078647, 10.73107789],
  [106.62075964, 10.7308467],
  [106.62073282, 10.7306766],
  [106.62070478, 10.73038312],
  [106.62067796, 10.7301184],
  [106.6206487, 10.72982252],
  [106.62061822, 10.72954701],
  [106.62058286, 10.72930864],
  [106.62055482, 10.72905828],
  [106.62052312, 10.72882709],
  [106.62049996, 10.72861626],
  [106.62046826, 10.72832638],
  [106.62044388, 10.72803769],
  [106.62041462, 10.72779332],
  [106.62038414, 10.72753338],
  [106.62033537, 10.72713209],
  [106.62029635, 10.72680268],
  [106.62024027, 10.72636545],
  [106.62020004, 10.72604082],
  [106.62015371, 10.72563234],
  [106.62008544, 10.72509569],
  [106.62003301, 10.72462492],
  [106.6199879, 10.72427753],
  [106.61991841, 10.72371332],
  [106.6198355, 10.722985],
  [106.61976113, 10.72233335],
  [106.61968554, 10.72168409],
  [106.61960995, 10.7209917],
  [106.61952461, 10.72032566],
  [106.61944414, 10.71964884],
  [106.61933442, 10.71898999],
  [106.61923322, 10.71830359],
  [106.61915885, 10.71763036],
  [106.61913325, 10.71694874],
  [106.61910155, 10.71632463],
  [106.61909789, 10.71619765],
  [106.61876993, 10.7162216],
  [106.61863948, 10.71622041],
  [106.61853341, 10.71619525],
  [106.61842856, 10.71614853],
  [106.61833956, 10.71607905],
  [106.61826641, 10.71603233],
  [106.6181384, 10.71595327],
  [106.61801526, 10.71585384],
  [106.61796893, 10.71580712],
  [106.61786774, 10.71567056],
  [106.61781653, 10.71560827],
  [106.61767876, 10.71549566],
  [106.61759464, 10.71542379],
  [106.6174398, 10.71529321],
  [106.61735568, 10.71525608],
  [106.61703137, 10.71520576],
  [106.61698626, 10.71519498],
  [106.61690458, 10.71515665],
  [106.61659734, 10.71510514],
  [106.61654736, 10.71510035],
  [106.61640349, 10.71506081],
  [106.61615966, 10.71502607],
  [106.61598166, 10.71499852],
  [106.6158829, 10.71511113],
  [106.61578415, 10.71510035],
  [106.61571343, 10.71506561],
  [106.6155781, 10.71498654],
  [106.61583657, 10.71456847],
  [106.61603042, 10.71425341],
  [106.61568295, 10.71417195],
  [106.61526721, 10.71406653],
  [106.6150185, 10.71401382],
  [106.61463689, 10.71391679],
  [106.61435892, 10.71384731],
  [106.61375176, 10.71369757],
  [106.61377005, 10.71370236],
  [106.61341649, 10.7136185],
  [106.61308609, 10.71353705],
  [106.61272033, 10.7134496],
  [106.61220827, 10.7133298],
  [106.61190226, 10.71325673],
  [106.61159015, 10.71318485],
  [106.61110613, 10.71306865],
  [106.61071721, 10.71296323],
  [106.61017711, 10.71281469],
  [106.60954923, 10.71264698],
  [106.60890062, 10.71248765],
  [106.60829713, 10.71232473],
  [106.60768388, 10.71216661],
  [106.60704746, 10.71200608],
  [106.60634521, 10.71183118],
  [106.60579414, 10.71169701],
  [106.60576975, 10.71177368],
  [106.60541619, 10.71166706],
  [106.60538571, 10.71165748],
  [106.60536498, 10.71166706],
  [106.6053406, 10.71167785],
  [106.60535157, 10.71162633],
  [106.60533938, 10.71160118],
  [106.60528696, 10.71157722],
  [106.60516138, 10.71154128],
  [106.60471272, 10.71140472],
  [106.6041714, 10.71121903],
  [106.60382393, 10.71108966],
  [106.60367885, 10.71103215],

  [106.60379028, 10.71084976], // binh tan -> quan 8, binh chanh

  [106.60311127, 10.71156216],
  [106.60356903, 10.71326256],
  [106.60280609, 10.71496201],
  [106.60394287, 10.71733665],
  [106.60009766, 10.71793842],
  [106.60089874, 10.72231483],
  [106.59033203, 10.72692776],
  [106.58194733, 10.72943687],
  [106.5816803, 10.73325634],
  [106.57725525, 10.73055363],
  [106.57433319, 10.72763252],
  [106.57407379, 10.7327261],
  [106.56772614, 10.73435116],
  [106.55883789, 10.73647499],
  [106.55830383, 10.73947334],
  [106.55934143, 10.7422533],
  [106.55889893, 10.74458122],
  [106.55942535, 10.74898338],
  [106.56799316, 10.7549448],
  [106.5734024, 10.76039696],
  [106.56776428, 10.76292706],
  [106.56800842, 10.76433277],
  [106.56759644, 10.76493931],
  [106.5696106, 10.76859474],
  [106.57383728, 10.76825047],
  [106.57582092, 10.76924419],
  [106.57688904, 10.77120876],
  [106.58115387, 10.77515697],
  [106.58522797, 10.77499199],
  [106.58816528, 10.77795887],
  [106.58883667, 10.77914715],
  [106.58808899, 10.7817173],
  [106.5890274, 10.78735065],
  [106.58668518, 10.788167],
  [106.58687592, 10.789258],
  [106.58563995, 10.7894659],
  [106.58561707, 10.79061413],
  [106.58446503, 10.79075336],
  [106.58473969, 10.7947216],
  [106.58542633, 10.79458332],
  [106.58548737, 10.79572773],
  [106.58448029, 10.79580212],
  [106.58473969, 10.79723167],
  [106.58289337, 10.79732227],
  [106.58351898, 10.80636787],
  [106.58456421, 10.80675793],
  [106.58602905, 10.81311893],
  [106.58493042, 10.81401062],
  [106.58376312, 10.813797],
  [106.58337402, 10.81531334],
  [106.58195496, 10.81565666],
  [106.59029388, 10.82330418],
  [106.59375, 10.82784843],
  [106.60045624, 10.82607365],
  [106.60332489, 10.82630157],
  [106.6074295, 10.82333851],
  [106.61439514, 10.82121658],
  [106.61617279, 10.81941032],
  [106.61090088, 10.81621361],
  [106.60774231, 10.81301975],
  [106.60676575, 10.8061142],
  [106.60842896, 10.80585861],
  [106.61368561, 10.79672909],
  [106.61740875, 10.78808594],
  [106.61878967, 10.78452778],
  [106.62123871, 10.77728176],
  [106.6215744, 10.77378654],
  [106.62301636, 10.76741695],
  [106.62490845, 10.75895119],

  [106.62417071, 10.76206069], // Binh tan -> quan 6, tan phu

  [106.62418141, 10.76201045],
  [106.62424602, 10.76172778],
  [106.6243143, 10.76143254],
  [106.62437465, 10.7611864],
  [106.62443195, 10.76095763],
  [106.62451973, 10.76060729],
  [106.62458557, 10.76030426],
  [106.62461848, 10.76014855],
  [106.62467639, 10.75993056],
  [106.62474894, 10.75965568],
  [106.62482818, 10.75935864],
  [106.62490804, 10.75905081],
  [106.62497997, 10.75877892],
  [106.62502325, 10.75862142],
  [106.62506044, 10.7584729],
  [106.62509214, 10.75833575],
  [106.62513664, 10.7581501],
  [106.62517565, 10.7579914],
  [106.62523905, 10.75773987],
  [106.62527867, 10.75757278],
  [106.62528599, 10.75747936],
  [106.62520064, 10.7572949],
  [106.62513176, 10.75714878],
  [106.62497509, 10.75684454],
  [106.6248294, 10.75656127],
  [106.62472089, 10.75634568],
  [106.62467883, 10.75626183],
  [106.62455569, 10.7560654],
  [106.62445816, 10.7559037],
  [106.62444231, 10.7558492],
  [106.6244161, 10.75565097],
  [106.62440573, 10.75557072],
  [106.62438806, 10.75533596],
  [106.62437099, 10.75511377],
  [106.62435453, 10.75490536],
  [106.62433746, 10.75467778],
  [106.62432222, 10.75448015],
  [106.62430393, 10.75425078],
  [106.62428321, 10.75397888],
  [106.6242765, 10.75379862],
  [106.62426553, 10.75350876],
  [106.62425578, 10.75325962],
  [106.62424236, 10.75301587],
  [106.62422651, 10.75277452],
  [106.62420762, 10.75247687],
  [106.62419116, 10.75222354],
  [106.6241686, 10.751866],
  [106.6241686, 10.751866],
  [106.62415397, 10.75164022],
  [106.62414117, 10.75140007],
  [106.62412045, 10.7510593],
  [106.62410399, 10.75077482],
  [106.62408387, 10.75044902],
  [106.62407046, 10.75021785],
  [106.62404547, 10.74980282],
  [106.6240284, 10.74951654],
  [106.62400706, 10.74914882],
  [106.62398634, 10.7487811],
  [106.62396805, 10.74847267],
  [106.62394854, 10.74815405],
  [106.62393208, 10.74784981],
  [106.62391196, 10.74746831],
  [106.62389185, 10.74719581],
  [106.62387112, 10.74689756],
  [106.62384308, 10.74651007],
  [106.62382292, 10.74624059],
  [106.62381621, 10.746125],
  [106.62380219, 10.74597887],
  [106.62377781, 10.74571595],
  [106.62378451, 10.74549436],
  [106.623587, 10.7454165],
  [106.6232243, 10.74519431],
  [106.62302618, 10.7450332],
  [106.6225952, 10.74468164],
  [106.6220983, 10.74427791],
  [106.62250369, 10.74335165],
  [106.62233968, 10.74296383],
  [106.6222782, 10.74275702],
  [106.62207948, 10.74230544],
  [106.62194823, 10.74201433],
  [106.62172573, 10.74135672],
  [106.621756, 10.74072961],
  [106.62184081, 10.74040829],
  [106.62184934, 10.7403448],
  [106.6218719, 10.73989202],
  [106.62187494, 10.7398258],
  [106.62193712, 10.73932631],
  [106.6219737, 10.73903224],
  [106.62200783, 10.73902865],
  [106.62218523, 10.73890886],
  [106.62227788, 10.73869924],
  [106.62224253, 10.73865792],
  [106.62220107, 10.73858245],
  [106.62217364, 10.73852196],
  [106.62206818, 10.73807217],
  [106.62198162, 10.73772241],
  [106.62186519, 10.73726124],
  [106.62178411, 10.73693662],
  [106.62172132, 10.73664914],
  [106.62168414, 10.73647845],
  [106.62157563, 10.73605202],
  [106.62148907, 10.73571243],
  [106.62138788, 10.73531235],
  [106.62129827, 10.73496497],
  [106.62121536, 10.73463676],
  [106.62117879, 10.73430376],
  [106.62115318, 10.73405161],

  [106.62115091, 10.73405019], // quan binh tan -> quan 6, 8
];

export default { name, population, area, rings, symbol };

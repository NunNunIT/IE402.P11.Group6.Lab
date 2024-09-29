// Chỉnh tên ở đây
const Name = "Đường Phạm Văn Đồng";
// Chỉnh tên ở đây
const Location = "Thành phố Hồ Chí Minh";
const symbol = {
  // Chỉnh màu ở đây
  color: [0, 0, 255],
};

const paths = [
  [106.7632125, 10.87291645],
  [106.76332619, 10.87287724],
  [106.76342098, 10.8728063],
  [106.76348712, 10.87272997],
  [106.76364226, 10.87250608],
  [106.76374407, 10.87240042],
  [106.76377851, 10.8723642],
  [106.7638349, 10.87231241],
  [106.76391932, 10.87223309],
  [106.76400497, 10.87215347],
  [106.76409458, 10.87206966],
  [106.76412201, 10.87204362],
  [106.76416194, 10.8720077],
  [106.76422382, 10.87195083],
  [106.76409982, 10.87180529],
  [106.76399071, 10.87167419],
  [106.76385141, 10.8714937],
  [106.76379838, 10.87142306],
  [106.76372279, 10.87130303],
  [106.7636357, 10.87113846],
  [106.76360949, 10.87108667],
  [106.76355615, 10.87097083],
  [106.76354396, 10.8709418],
  [106.76350037, 10.87081159],
  [106.76349062, 10.87077807],
  [106.76348208, 10.87073945],
  [106.76346441, 10.87065684],
  [106.76345922, 10.87063289],
  [106.76343301, 10.87047186],
  [106.76341869, 10.87036859],
  [106.76341229, 10.87024826],
  [106.76340741, 10.87012523],
  [106.7634007, 10.86997198],
  [106.76339461, 10.86980046],
  [106.76339156, 10.8696936],
  [106.76337358, 10.8694742],
  [106.76334657, 10.86930463],
  [106.76331033, 10.86912185],
  [106.76323778, 10.86888089],
  [106.76320418, 10.86879113],
  [106.76313682, 10.86864536],
  [106.76306215, 10.86849988],
  [106.76295151, 10.8683152],
  [106.7628241, 10.86812123],
  [106.76274302, 10.8680003],
  [106.76267323, 10.86789434],
  [106.76260587, 10.86779287],
  [106.76248791, 10.86761327],
  [106.76241263, 10.86749833],
  [106.76238184, 10.86745043],
  [106.76226632, 10.86729149],
  [106.76205937, 10.86700922],
  [106.76197097, 10.86688889],
  [106.76177956, 10.86667187],
  [106.76165917, 10.86655873],
  [106.76148422, 10.86639439],
  [106.76139918, 10.86631687],
  [106.76115199, 10.86613667],
  [106.76101544, 10.86604837],
  [106.7609685, 10.86602113],
  [106.76076154, 10.86590978],
  [106.76057226, 10.8658116],
  [106.76023873, 10.86563978],
  [106.75989924, 10.86546506],
  [106.7595603, 10.86529204],
  [106.75921649, 10.86511574],
  [106.75887085, 10.86493943],
  [106.75852765, 10.86476312],
  [106.75818476, 10.86458801],
  [106.75784247, 10.8644138],
  [106.75749927, 10.86424198],
  [106.75715759, 10.86406867],
  [106.75681104, 10.86389446],
  [106.75661383, 10.86379388],
  [106.75628648, 10.86361548],
  [106.75612707, 10.86352897],
  [106.75595182, 10.8634275],
  [106.75573998, 10.86328711],
  [106.75561319, 10.8632027],
  [106.75543963, 10.86307818],
  [106.75532807, 10.86299646],
  [106.75517141, 10.86287912],
  [106.7550504, 10.86277645],
  [106.75500011, 10.86273484],
  [106.754777, 10.862531],
  [106.7547514, 10.86250705],
  [106.75452463, 10.86227327],
  [106.75442586, 10.86217397],
  [106.75427102, 10.86199018],
  [106.75412929, 10.86182675],
  [106.75396257, 10.86164654],
  [106.75372026, 10.86137774],
  [106.75368435, 10.8613373],
  [106.75356274, 10.86120379],
  [106.753478, 10.8611098],
  [106.75340272, 10.86102688],
  [106.75324575, 10.8608401],
  [106.7530887, 10.86065526],
  [106.75292503, 10.86047446],
  [106.75284029, 10.86037688],
  [106.75268493, 10.86019859],
  [106.75253792, 10.86002667],
  [106.75241752, 10.8598743],
  [106.75230322, 10.85971146],
  [106.75224836, 10.85962496],
  [106.75216175, 10.85946603],
  [106.75208982, 10.85930948],
  [106.75204106, 10.85918047],
  [106.75200296, 10.85903708],
  [106.75196303, 10.85878624],
  [106.75195205, 10.85867279],
  [106.75194687, 10.85849079],
  [106.75194322, 10.85831687],
  [106.75193956, 10.85811572],
  [106.7519356, 10.8579415],
  [106.75193224, 10.85774603],
  [106.7519295, 10.85764486],
  [106.75192645, 10.85748351],
  [106.7519231, 10.85733474],
  [106.75192005, 10.85716142],
  [106.7519167, 10.8569911],
  [106.75191396, 10.85682466],
  [106.75190938, 10.85666122],
  [106.75190664, 10.8564903],
  [106.75190343, 10.85632084],
  [106.75190221, 10.85615111],
  [106.75190191, 10.85598168],
  [106.75190221, 10.85581256],
  [106.7519016, 10.85564193],
  [106.75189947, 10.8554734],
  [106.7518952, 10.85530846],
  [106.75189124, 10.85522824],
  [106.75188149, 10.85511838],
  [106.75186991, 10.85500134],
  [106.75183272, 10.85479329],
  [106.75182358, 10.85473702],
  [106.75177877, 10.85454993],
  [106.75168886, 10.85428681],
  [106.75158133, 10.85403583],
  [106.75146216, 10.85379097],
  [106.75142005, 10.85370663],
  [106.75134447, 10.85357342],
  [106.75130684, 10.8535015],
  [106.75127727, 10.85345749],
  [106.75118834, 10.85330109],
  [106.75109629, 10.85313963],
  [106.75098808, 10.85294775],
  [106.75086732, 10.85274042],
  [106.75079265, 10.8526126],
  [106.7506817, 10.85242222],
  [106.75059453, 10.85227165],
  [106.75056999, 10.85223084],
  [106.75044015, 10.8519776],
  [106.75041668, 10.85193419],
  [106.75032219, 10.85176686],
  [106.75023898, 10.85161838],
  [106.75013352, 10.85143189],
  [106.7500116, 10.85122324],
  [106.74987279, 10.85098545],
  [106.74973838, 10.85075675],
  [106.74964014, 10.85058599],
  [106.7495551, 10.85043931],
  [106.74944599, 10.85025132],
  [106.74932193, 10.85003818],
  [106.74918538, 10.84980349],
  [106.74905188, 10.84957479],
  [106.74886773, 10.84925678],
  [106.74874563, 10.84904875],
  [106.74863316, 10.84885716],
  [106.7484984, 10.84862423],
  [106.74836612, 10.84839912],
  [106.74828587, 10.84826056],
  [106.74817675, 10.84808634],
  [106.74804813, 10.84786242],
  [106.74792703, 10.84765872],
  [106.74780567, 10.84745055],
  [106.74773803, 10.84733334],
  [106.74763318, 10.84715253],
  [106.747494, 10.84691178],
  [106.74737793, 10.84671018],
  [106.74725701, 10.84650342],
  [106.74712105, 10.84626727],
  [106.74707259, 10.84618076],
  [106.74695433, 10.8459781],
  [106.74686716, 10.84582962],
  [106.74681694, 10.84574425],
  [106.74672703, 10.84557541],
  [106.74660816, 10.8453482],
  [106.74650971, 10.84516051],
  [106.7463607, 10.84487392],
  [106.74628289, 10.84471918],
  [106.74618809, 10.84451951],
  [106.74611282, 10.84435813],
  [106.74602778, 10.84417822],
  [106.74594762, 10.84401776],
  [106.74585756, 10.84384378],
  [106.74577439, 10.84368742],
  [106.74573263, 10.84360839],
  [106.74567899, 10.84350691],
  [106.74560126, 10.84335663],
  [106.74549794, 10.84316804],
  [106.74542466, 10.84303663],
  [106.74530304, 10.84283187],
  [106.74522166, 10.84270285],
  [106.74509395, 10.84252563],
  [106.74494064, 10.84233763],
  [106.7447855, 10.84215473],
  [106.74462639, 10.84198469],
  [106.74445266, 10.84181825],
  [106.74436366, 10.84173351],
  [106.74422223, 10.84161168],
  [106.74403875, 10.84147876],
  [106.74387568, 10.84135902],
  [106.743764, 10.84128835],
  [106.74359179, 10.84116891],
  [106.74347353, 10.84108629],
  [106.74338514, 10.84102522],
  [106.74327816, 10.84095816],
  [106.74317636, 10.84089829],
  [106.74290265, 10.84077106],
  [106.74284687, 10.84074562],
  [106.74256433, 10.84064054],
  [106.74239312, 10.84057979],
  [106.74221939, 10.84052501],
  [106.74212399, 10.84049657],
  [106.74204535, 10.84047502],
  [106.74187466, 10.84043191],
  [106.74173141, 10.84039359],
  [106.74163235, 10.84036575],
  [106.74153756, 10.84033821],
  [106.74144825, 10.84031127],
  [106.7411904, 10.84024721],
  [106.7410127, 10.84020021],
  [106.74067773, 10.8401104],
  [106.74033232, 10.84001813],
  [106.73998912, 10.83992653],
  [106.73964592, 10.83983612],
  [106.73930364, 10.83975041],
  [106.73910553, 10.83970162],
  [106.73878549, 10.83962049],
  [106.73842278, 10.83953039],
  [106.73810922, 10.83945122],
  [106.73766909, 10.83933717],
  [106.73720245, 10.83921623],
  [106.73683029, 10.83912073],
  [106.73650569, 10.83903661],
  [106.73617695, 10.83894125],
  [106.73582003, 10.83883079],
  [106.7355954, 10.83875894],
  [106.73526774, 10.83864488],
  [106.73505469, 10.83856945],
  [106.73471301, 10.83843144],
  [106.73439999, 10.83830092],
  [106.73412323, 10.83817339],
  [106.73384049, 10.83803319],
  [106.73363689, 10.83792811],
  [106.73335617, 10.83776616],
  [106.73321597, 10.83768383],
  [106.73299042, 10.83754613],
  [106.73290294, 10.83749404],
  [106.73276091, 10.83741112],
  [106.73262649, 10.8373261],
  [106.73248537, 10.83722462],
  [106.73234394, 10.83711864],
  [106.73219246, 10.8369998],
  [106.73209736, 10.83692705],
  [106.73192363, 10.83678845],
  [106.73172856, 10.83663308],
  [106.73156191, 10.83649782],
  [106.73143694, 10.83639783],
  [106.73128241, 10.8362715],
  [106.73106448, 10.83609488],
  [106.7308813, 10.83594596],
  [106.73069019, 10.83578909],
  [106.73050152, 10.83563492],
  [106.73030706, 10.83547536],
  [106.73014735, 10.83534424],
  [106.72986419, 10.83511253],
  [106.7296801, 10.83496465],
  [106.72954294, 10.83485239],
  [106.72928523, 10.83464294],
  [106.72900481, 10.83441377],
  [106.72881736, 10.83426169],
  [106.72852001, 10.83402105],
  [106.72824893, 10.83380316],
  [106.72797207, 10.83358011],
  [106.72777841, 10.83342391],
  [106.72748117, 10.8331861],
  [106.72729123, 10.83303359],
  [106.72710866, 10.8328866],
  [106.72692852, 10.83273841],
  [106.72682794, 10.83265399],
  [106.72664231, 10.83250018],
  [106.72645628, 10.83234436],
  [106.72621932, 10.83214816],
  [106.72596961, 10.83194368],
  [106.72571754, 10.8317383],
  [106.72545419, 10.8315213],
  [106.72522869, 10.83133734],
  [106.72505452, 10.83119451],
  [106.72477533, 10.8309664],
  [106.72449796, 10.83074008],
  [106.72439239, 10.83065127],
  [106.7241961, 10.83050398],
  [106.72391447, 10.83029143],
  [106.72363128, 10.83007605],
  [106.72333998, 10.82985626],
  [106.72314054, 10.82970611],
  [106.72293541, 10.82953907],
  [106.72265043, 10.82931005],
  [106.72244015, 10.82914156],
  [106.72241851, 10.82914066],
  [106.7223862, 10.8291233],
  [106.72236669, 10.82909216],
  [106.72210243, 10.82889937],
  [106.72183787, 10.82870508],
  [106.72163609, 10.82855779],
  [106.72156629, 10.8285063],
  [106.72139012, 10.82839793],
  [106.72123407, 10.82831051],
  [106.72106064, 10.8282216],
  [106.72079059, 10.82808],
  [106.72048335, 10.82792043],
  [106.72021483, 10.82777973],
  [106.72017337, 10.82775728],
  [106.71990576, 10.82764142],
  [106.71960676, 10.82751119],
  [106.71932391, 10.82740043],
  [106.71904288, 10.82729295],
  [106.71898223, 10.8272693],
  [106.71867439, 10.82718368],
  [106.71835831, 10.82709477],
  [106.71801633, 10.82699777],
  [106.71770605, 10.82691006],
  [106.71742167, 10.82682923],
  [106.71715498, 10.82676007],
  [106.71681177, 10.82667206],
  [106.71647101, 10.82658464],
  [106.71612354, 10.82649573],
  [106.71578522, 10.82640921],
  [106.71543135, 10.8263179],
  [106.71483465, 10.82616165],
  [106.71444269, 10.82605775],
  [106.71383553, 10.82590926],
  [106.71340455, 10.82579131],
  [106.7127657, 10.82561768],
  [106.71210124, 10.82544045],
  [106.71139533, 10.82524526],
  [106.71072722, 10.82507581],
  [106.71037487, 10.82499079],
  [106.70948487, 10.82479021],
  [106.709455, 10.82478482],
  [106.70852659, 10.82453514],
  [106.70784384, 10.82434295],
  [106.70714928, 10.82415099],
  [106.70675234, 10.82403961],
  [106.70634483, 10.82393303],
  [106.70588763, 10.82381441],
  [106.70549597, 10.82371262],
  [106.70509425, 10.82360874],
  [106.70471112, 10.82350875],
  [106.70455201, 10.82346714],
  [106.70409908, 10.82333811],
  [106.70377112, 10.8232435],
  [106.70342091, 10.82314351],
  [106.70318835, 10.82307795],
  [106.70290489, 10.823004],
  [106.70256687, 10.82291599],
  [106.70222489, 10.82282648],
  [106.70186493, 10.82273277],
  [106.70143455, 10.8226208],
  [106.70104016, 10.82251856],
  [106.70068264, 10.82242575],
  [106.70016479, 10.82229013],
  [106.69981962, 10.82220006],
  [106.69930147, 10.82206594],
  [106.69889425, 10.8219592],
  [106.69848127, 10.82185148],
  [106.69810576, 10.82175329],
  [106.69774427, 10.82165958],
  [106.69749068, 10.82159252],
  [106.69732213, 10.82154223],
  [106.69704812, 10.82147158],
  [106.6965833, 10.82134913],
  [106.69620962, 10.82125004],
  [106.69584691, 10.82115124],
  [106.69552139, 10.82106293],
  [106.69518185, 10.82097042],
  [106.69481182, 10.82086923],
  [106.6944927, 10.82078271],
  [106.69413731, 10.82068392],
  [106.69375784, 10.82058392],
  [106.69340702, 10.82048992],
  [106.69295348, 10.82036867],
  [106.69260967, 10.82027497],
  [106.69226708, 10.82017617],
  [106.69179556, 10.82004115],
  [106.69150265, 10.81995553],
  [106.69107685, 10.81983548],
  [106.6907233, 10.81973164],
  [106.69037126, 10.81963135],
  [106.69007225, 10.81954393],
  [106.69003567, 10.819558],
  [106.68999361, 10.81954992],
  [106.68993844, 10.81953465],
  [106.68991863, 10.81951698],
  [106.68951935, 10.81942478],
  [106.68919047, 10.81934784],
  [106.68869579, 10.81916042],
  [106.68831906, 10.81901582],
  [106.68797982, 10.81887721],
  [106.68775745, 10.81878496],
  [106.68763035, 10.81873078],
  [106.68750477, 10.81866881],
  [106.6871125, 10.81850774],
  [106.68685433, 10.81840595],
  [106.68673363, 10.81835625],
  [106.68643311, 10.81818561],
  [106.68611094, 10.81799999],
  [106.68603961, 10.81796047],
  [106.68591708, 10.81790629],
  [106.68569641, 10.81777635],
  [106.68538095, 10.81759074],
  [106.68505177, 10.81739704],
  [106.68460158, 10.81713179],
  [106.68437238, 10.81699677],
  [106.68405356, 10.81680906],
  [106.6837476, 10.81662674],
  [106.68345256, 10.81644712],
  [106.68312887, 10.81625102],
  [106.68281797, 10.81606091],
  [106.6824827, 10.81585793],
  [106.68213736, 10.81569237],
  [106.68200203, 10.81562711],
  [106.68180148, 10.81552442],
  [106.68144974, 10.81534509],
  [106.68118426, 10.81521037],
  [106.68090477, 10.81506906],
  [106.6805701, 10.81489811],
  [106.68042105, 10.81482836],
  [106.68022141, 10.81473914],
  [106.6798584, 10.81457598],
  [106.67949965, 10.81441521],
  [106.67914246, 10.81425663],
];

export default { Name, Location, symbol, paths };

// Chỉnh tên đia điểm
const name = "Quận 12"
// Chỉnh số dân ở đây
const population = 100000
// Chỉnh diện tích ở đây
const area = 123.45
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [223, 255, 0, 0.35],
};

// Thêm ranh giới ở đây
const rings = [
  [106.69354970, 10.90132161],
  [106.69434741, 10.89802951],
  [106.69451438, 10.89612748],
  [106.69428699, 10.89477279],
  [106.69304818, 10.89189258],
  [106.68966737, 10.88654004],
  [106.68874473, 10.88382444],
  [106.68918800, 10.88154503],
  [106.68940874, 10.88113718],
  [106.69287122, 10.87616100],
  [106.69889022, 10.86922946],
  [106.70155476, 10.86730567],
  [106.70259720, 10.86688662],
  [106.71013833, 10.86650596],

  [106.71305255, 10.86576218],
  [106.71412362, 10.86519324],
  [106.71470704, 10.86475676],
  [106.71588734, 10.86353627],
  [106.71705824, 10.86160194],
  [106.71808001, 10.85827713],
  [106.71819884, 10.85726721],
  [106.71815436, 10.85647980],
  [106.71797690, 10.85572119],
  [106.71755026, 10.85486362],
  [106.71515495, 10.85214506],
  [106.71379869, 10.85149536],
  [106.71270069, 10.85117480],
  [106.71127867, 10.85107431],
  [106.71054629, 10.85110341],
  [106.70877310, 10.85134143],
  [106.70607638, 10.85189278],
  [106.70076540, 10.85109237],
  [106.70607842, 10.85189262],
  [106.70002078, 10.85083069],
  [106.69930564, 10.85038514],
  [106.69866322, 10.84975371],
  [106.69817281, 10.84853460],
  [106.69797858, 10.84750463],
  [106.69776823, 10.84592403],
  [106.69779016, 10.84495961],
  [106.69792511, 10.84402127],
  [106.69821157, 10.84308671],
  [106.69854071, 10.84247436],
  [106.69921850, 10.84168594],
  [106.70013565, 10.84080677],
  [106.70103154, 10.84008937],
  [106.70297359, 10.83901607],
  [106.70131914, 10.83794583],
  [106.70108222, 10.83754849],
  [106.70049938, 10.83533943],
  [106.70017809, 10.83490149],
  [106.69994996, 10.83469851],
  [106.69908250, 10.83419676],
  [106.69739181, 10.83360412],
  [106.69681349, 10.83332069],
  [106.69639387, 10.83302794],
  [106.69597942, 10.83267759],
  [106.69585142, 10.83249921],
  [106.69570500, 10.83223791],
  [106.69531199, 10.83110072],
  

// giáp gò vấp
  [106.69531203, 10.83110103],
  [106.69496760, 10.83059140],
  [106.69446266, 10.83019379],
  [106.69431420, 10.83015774],
  [106.69315237, 10.83014041],
  [106.69284522, 10.83021899],
  [106.69260574, 10.83037192],
  [106.69201280, 10.83097494],
  [106.69171457, 10.83163163],
  [106.69077660, 10.83578447],
  [106.69013576, 10.83699543],
  [106.68906834, 10.83854582],
  [106.68893052, 10.83882100],
  [106.68874816, 10.83950639],
  [106.68866659, 10.84065523],
  [106.68891396, 10.84211656],
  [106.68915411, 10.84289472],
  [106.68919237, 10.84370389],
  [106.68904398, 10.84423862],
  [106.68859699, 10.84534648],
  [106.68833104, 10.84584318],
  [106.68752172, 10.84684266],
  [106.68707876, 10.84714162],
  [106.68655851, 10.84733214],
  [106.68592296, 10.84731924],
  [106.68506535, 10.84711613],
  [106.68413486, 10.84695860],
  [106.68365880, 10.84706140],
  [106.68330194, 10.84728466],
  [106.68319297, 10.84742915],
  [106.68307405, 10.84763347],
  [106.68301551, 10.84785406],
  [106.68298815, 10.84820073],
  [106.68312897, 10.84864046],
  [106.68354152, 10.84928598],
  [106.68406673, 10.84983589],
  [106.68421798, 10.85022602],
  [106.68423414, 10.85055511],
  [106.68411357, 10.85107557],
  [106.68396689, 10.85129852],
  [106.68377887, 10.85148987],
  [106.68348171, 10.85161658],
  [106.68321845, 10.85165158],
  [106.68224073, 10.85157804],
  [106.68048918, 10.85108906],
  [106.67996041, 10.85089840],
  [106.67965085, 10.85088227],
  [106.67888978, 10.85096930],
  [106.67881079, 10.85098142],
  [106.67857710, 10.85100776],
  [106.67591149, 10.85204288],
  [106.67578110, 10.85324186],
  [106.67566514, 10.85345347],
  [106.67508451, 10.85479712],
  [106.67502480, 10.85514677],
  [106.67516441, 10.85637909],
  [106.67513373, 10.85708404],
  [106.67487812, 10.85775036],
  [106.67432149, 10.85832557],
  [106.67420478, 10.85849962],
  [106.67387554, 10.85933192],
  [106.67338872, 10.86029149],
  [106.67314595, 10.86053972],
  [106.67286740, 10.86068411],
  [106.67259777, 10.86067341],
  [106.67236030, 10.86057868],
  [106.67087257, 10.85976060],
  [106.67047678, 10.85943745],
  [106.67032970, 10.85923650],
  [106.67027076, 10.85906300],
  [106.67007583, 10.85867058],
  [106.66993581, 10.85862909],
  [106.66953211, 10.85842929],
  [106.66946924, 10.85813037],
  [106.66932511, 10.85830917],
  [106.66954385, 10.85840928],
  [106.66905313, 10.85814391],
  [106.66896727, 10.85823890],
  [106.66892341, 10.85822086],
  [106.66848467, 10.85795029],
  [106.66841842, 10.85786573],
  [106.66793666, 10.85753406],
  [106.66737736, 10.85663392],
  [106.66705388, 10.85600359],
  [106.66648928, 10.85614939],
  [106.66570072, 10.85619663],
  [106.66373345, 10.85555955],
  [106.66316043, 10.85545671],
  [106.66277627, 10.85546873],
  [106.66199129, 10.85558042],
  [106.66130045, 10.85579998],
  [106.66082134, 10.85614164],
  [106.65929701, 10.85760639],
  [106.65888938, 10.85789463],
  [106.65849285, 10.85799388],
  [106.65819635, 10.85799883],
  [106.65753579, 10.85772359],
  [106.65721922, 10.85767061],
  [106.65686842, 10.85770750],
  [106.65643300, 10.85804603],
  [106.65616542, 10.85842235],
  [106.65565573, 10.85877925],
  [106.65534496, 10.85892400],
  [106.65415302, 10.85919723],
  [106.65392460, 10.85929328],
  [106.65366063, 10.85953648],
  [106.65308912, 10.86050619], 
  [106.65293429, 10.86063062],
  [106.65268069, 10.86073427],
  [106.65251550, 10.86075252],
  [106.65224154, 10.86067007],
  [106.65095667, 10.85989833],
  [106.65068540, 10.85972605],
  [106.65055491, 10.85961868],
  [106.64990259, 10.85902991],
  [106.64958582, 10.85899003],
  [106.64923717, 10.85899741],
  [106.64887635, 10.85894871],
  [106.64859083, 10.85880225],
  [106.64788755, 10.85831851],
  [106.64763046, 10.85822776],
  [106.64729468, 10.85818957],
  [106.64712822, 10.85814361],
  [106.64700041, 10.85799471],
  [106.64688296, 10.85754298],
  [106.64682989, 10.85701031],
  [106.64650652, 10.85613224],
  [106.64643577, 10.85553230],
  [106.64652103, 10.85463153],
  [106.64648798, 10.85435842],
  [106.64639195, 10.85411518],
  [106.64624286, 10.85396968],
  [106.64606777, 10.85392700],
  [106.64591958, 10.85396717],
  [106.64580961, 10.85405489],
  [106.64550377, 10.85440864],
  [106.64533037, 10.85448832],
  [106.64505021, 10.85450956],
  [106.64483962, 10.85442513],
  [106.64468560, 10.85423577],
  [106.64453355, 10.85388601],
  [106.64452979, 10.85320245],
  [106.64438338, 10.85294832],
  [106.64419287, 10.85276689],
  [106.64403016, 10.85268766],
  [106.64383339, 10.85265450],
  [106.64357435, 10.85264456],
  [106.64340702, 10.85261179],
  [106.64325561, 10.85252987],
  [106.64301230, 10.85229522],
  [106.64292858, 10.85207043],
  [106.64283329, 10.85113764],
  [106.64273958, 10.85094293],
  [106.64251154, 10.85066676],
  [106.64199727, 10.85026963],
  [106.64141778, 10.84961581],
  [106.64131548, 10.84955756],
  [106.64113604, 10.84950592],
  [106.64041527, 10.84942619],
  [106.64028545, 10.84938496],
  [106.64018819, 10.84932244],
  [106.63870049, 10.84816856],
  [106.63733340, 10.84715528],
  [106.63650215, 10.84636065],
  [106.63607666, 10.84614064],
  [106.63573649, 10.84586265],
  [106.63551028, 10.84573631],
  [106.63536269, 10.84561971],
  [106.63511566, 10.84521468],
  [106.63536387, 10.84561969],
  [106.63502095, 10.84500672],
  [106.63490109, 10.84488077],
  [106.63476889, 10.84485274],
  [106.63460109, 10.84486733],
  [106.63429119, 10.84505344],
  [106.63414461, 10.84525773],
  [106.63400326, 10.84527380],
  [106.63383434, 10.84521042],
  [106.63374047, 10.84507095],
  [106.63365020, 10.84389745],
  [106.63353017, 10.84315741],
  [106.63372892, 10.84190248],
  [106.63350442, 10.84098567],
  [106.63228603, 10.84060148],
  [106.63212131, 10.84041714],
  [106.63216402, 10.83921403],
  [106.63237635, 10.83893897],
  [106.63266739, 10.83874631],
  [106.63285442, 10.83849514],
  [106.63297840, 10.83819943],
  [106.63299600, 10.83799280],
  [106.63290933, 10.83785983],
  [106.63233816, 10.83752789],
  [106.63216512, 10.83734905],
  [106.63193355, 10.83683436],
  [106.63194890, 10.83662457],
  [106.63207493, 10.83633083],
  [106.63253661, 10.83578147],
  [106.63270021, 10.83496479],
  [106.63281602, 10.83477139],
  [106.63282007, 10.83450996],
  [106.63274115, 10.83413021],
  [106.63245251, 10.83330841],

// giáp tân bình
  [106.63237533, 10.83299924],
  [106.63214074, 10.83217820],
  [106.63181344, 10.83151366],
  [106.63166063, 10.83101457],
  [106.63109059, 10.82962073],
  [106.63073707, 10.82903048],
  [106.63015048, 10.82770272],
  [106.62897030, 10.82602931],
  [106.62658214, 10.82311991],
  [106.62361243, 10.81964279],
  [106.62313466, 10.81939100],
  [106.62258625, 10.81925361],
  [106.62126348, 10.81876062],
  [106.61992690, 10.81862797],
  [106.61953226, 10.81864839],
  [106.61933534, 10.81868465],
  [106.61912439, 10.81877939],
  [106.61896071, 10.81888520],
  [106.61826819, 10.81955157],
  [106.61796332, 10.81972025],
  [106.61772793, 10.81976754],
  [106.61688501, 10.81975687],
  [106.61658252, 10.81982662],
  [106.61630277, 10.82002059],
  [106.61565049, 10.82023483],
  [106.61537013, 10.82026539],
  [106.61526285, 10.82033830],
  [106.61439468, 10.82117064],
  [106.61357430, 10.82135482],
  [106.61345236, 10.82136628],
  [106.61315671, 10.82145372],
  [106.61163606, 10.82175488],
  [106.61148650, 10.82181471],
  [106.61124238, 10.82197163],
  [106.61025721, 10.82246300],
  [106.60996725, 10.82260846],
  [106.60918834, 10.82304948],
  [106.60907287, 10.82308017],
  [106.60887834, 10.82311300],
  [106.60849649, 10.82315093],
  [106.60779123, 10.82330181],
  [106.60763251, 10.82331812],
  [106.60684797, 10.82361795],
  [106.60582397, 10.82427664],
  [106.60496111, 10.82490670],
  [106.60433096, 10.82536846],
  [106.60416808, 10.82553153],
  [106.60396306, 10.82600590],
  [106.60389422, 10.82609929],
  [106.60368887, 10.82622348],


  [106.60333509, 10.82626079],
  [106.60390107, 10.82856880],
  [106.60658353, 10.83354038],
  [106.60708671, 10.83437430],
  [106.60769315, 10.83534147],
  [106.60804662, 10.83588711],
  [106.60829787, 10.83626241],
  [106.61527986, 10.84259910],
  [106.61531865, 10.84265538],
  [106.61529230, 10.84271649],
  [106.61512972, 10.84295062],
  [106.61505559, 10.84313647],
  [106.61488236, 10.84333708],
  [106.61118039, 10.84908427],
  [106.60991847, 10.85106811],
  [106.60856608, 10.85317337],
  [106.60748835, 10.85484697],
  [106.60720714, 10.85528799],
  [106.60782277, 10.85618860],
  [106.60802622, 10.85649519],
  [106.60848516, 10.85717234],
  [106.60906555, 10.85805622],
  [106.60957978, 10.85884240],
  [106.61042093, 10.86013200],
  [106.61283088, 10.86364989],
  [106.61410252, 10.86539711],
  [106.61475982, 10.86630198],
  [106.61551618, 10.86736724],
  [106.61541628, 10.86774061],
  [106.61537129, 10.86797086],
  [106.61531970, 10.86843392],
  [106.61528896, 10.86867616],
  [106.61518416, 10.86949662],
  [106.61507920, 10.87004285],
  [106.61494905, 10.87032396],
  [106.61501719, 10.87037621],
  [106.61516313, 10.87045154],
  [106.61932079, 10.87117321],
  [106.61941413, 10.87118704],
  [106.62145335, 10.87341432],
  [106.62157707, 10.87353552],
  [106.62201381, 10.87400966],
  [106.62314530, 10.87523768],
  [106.62400504, 10.87620557],
  [106.62483528, 10.87715227],
  [106.62533504, 10.87771331],
  [106.62578384, 10.87822203],
  [106.62646382, 10.87910630],
  [106.62779399, 10.88103995],
  [106.62760463, 10.88116434],
  [106.62772921, 10.88129607],
  [106.62781790, 10.88143307],
  [106.62775667, 10.88147973],
  [106.62774662, 10.88147143],
  [106.62762924, 10.88153267],
  [106.62745486, 10.88166594],
  [106.62676644, 10.88214059],
  [106.62655340, 10.88231710],
  [106.62616712, 10.88256324],
  [106.62561160, 10.88294853],
  [106.62542566, 10.88310719],
  [106.62526087, 10.88357597],
  [106.62619042, 10.88410948],
  [106.62826311, 10.88557388],
  [106.62873932, 10.88594333],
  [106.62910139, 10.88631597],
  [106.62937457, 10.88670049],
  [106.62972888, 10.88744613],
  [106.62992654, 10.88791457],
  [106.63031399, 10.88886958],
  [106.63097247, 10.89039148],
  [106.63136122, 10.89126482],
  [106.63160138, 10.89156564],
  [106.63189046, 10.89170958],
  [106.63236051, 10.89180783],
  [106.63443852, 10.89183183],
  [106.63972583, 10.89188263],
  [106.64261339, 10.89238748],
  [106.64266824, 10.89240447],
  [106.64272215, 10.89246172],
  [106.64278773, 10.89269535],
  [106.64285837, 10.89343955],
  [106.64304898, 10.89373448],
  [106.64322962, 10.89386387],
  [106.64341067, 10.89395862],
  [106.64451222, 10.89398493],
  [106.64468663, 10.89410865],
  [106.64506278, 10.89419870],
  [106.64534260, 10.89420492],
  [106.64570299, 10.89414566],
  [106.64598737, 10.89416393],
  [106.64628402, 10.89423649],
  [106.64660213, 10.89440058],
  [106.64686241, 10.89467806],
  [106.64707960, 10.89480034],
  [106.64735570, 10.89487409],
  [106.64779498, 10.89484926],
  [106.64813136, 10.89486704],
  [106.64931438, 10.89530956],
  [106.65061794, 10.89507604],
  [106.65084462, 10.89499926],
  [106.65100739, 10.89496183],
  [106.65124983, 10.89488561],
  [106.65208544, 10.89478124],
  [106.65221419, 10.89479086],
  [106.65228081, 10.89477413],
  [106.65237150, 10.89465682],
  [106.65249441, 10.89441204],
  [106.65256811, 10.89409288],
  [106.65255772, 10.89370939],
  [106.65243716, 10.89333765],
  [106.65248413, 10.89306110],
  [106.65257884, 10.89290879],
  [106.65272848, 10.89273736],
  [106.65292979, 10.89255483],
  [106.65321223, 10.89215665],
  [106.65322554, 10.89209202],
  [106.65322547, 10.89202114],
  [106.65318272, 10.89183440],
  [106.65319721, 10.89178636],
  [106.65323865, 10.89176726],
  [106.65350784, 10.89183700],
  [106.65382337, 10.89185287],
  [106.65421614, 10.89202775],
  [106.65487164, 10.89212244],
  [106.65519860, 10.89214483],
  [106.65573675, 10.89205801],
  [106.65605295, 10.89209020],
  [106.65634575, 10.89215803],
  [106.65654350, 10.89223612],
  [106.65699981, 10.89237437],
  [106.65873711, 10.89249678],
  [106.65901041, 10.89253531],
  [106.65922390, 10.89261027],
  [106.65989263, 10.89262597],
  [106.66004830, 10.89257247],
  [106.66026365, 10.89255220],
  [106.66058308, 10.89256628],
  [106.66118186, 10.89267142],
  [106.66162373, 10.89282792],
  [106.66217794, 10.89294203],
  [106.66351848, 10.89295763],
  [106.66369074, 10.89281435],
  [106.66412762, 10.89266915],
  [106.66468684, 10.89252832],
  [106.66487052, 10.89253105],
  [106.66499981, 10.89251231],
  [106.66549828, 10.89214706],
  [106.66610376, 10.89197155],
  [106.66688344, 10.89182523],
  [106.66714264, 10.89183679],
  [106.66757924, 10.89200088],
  [106.66814642, 10.89193500],
  [106.66903189, 10.89176916],
  [106.66910532, 10.89181943],
  [106.66915075, 10.89192815],
  [106.66921188, 10.89224731],
  [106.66925184, 10.89264569],
  [106.66926321, 10.89288333],
  [106.66931632, 10.89393349],
  [106.66963977, 10.89398880],
  [106.67003808, 10.89522330],
  [106.67044792, 10.89662063],
  [106.67053127, 10.89733611],
  [106.67065566, 10.89864256],
  [106.67061864, 10.89864769],
  [106.67058471, 10.89921080],
  [106.67057328, 10.89951079],
  [106.67055106, 10.89964551],
  [106.67054915, 10.89975978],
  [106.67058589, 10.90009333],
  [106.67055675, 10.90033412],
  [106.67057110, 10.90074851],
  [106.67060338, 10.90093211],
  [106.67068468, 10.90119312],
  [106.67110516, 10.90121630],
  [106.67163246, 10.90144519],
  [106.67262772, 10.90160281],
  [106.67285419, 10.90169315],
  [106.67300467, 10.90171751],
  [106.67338960, 10.90174118],
  [106.67379293, 10.90184271],
  [106.67394187, 10.90192353],
  [106.67485774, 10.90221696],
  [106.67573223, 10.90243116],
  [106.67681230, 10.90282329],
  [106.67732131, 10.90306743],
  [106.67830657, 10.90325930],
  [106.67906213, 10.90356169],
  [106.67953909, 10.90369292],
  [106.67976186, 10.90361639],
  [106.68010925, 10.90253242],
  [106.68026504, 10.90208029],
  [106.68050024, 10.90129154],
  [106.68101965, 10.90008521],
  [106.68128458, 10.89929421],
  [106.68147453, 10.89856936],
  [106.68160300, 10.89846167],
  [106.68178618, 10.89850322],
  [106.68214548, 10.89866306],
  [106.68402002, 10.89929413],
  [106.68453769, 10.89952654],
  [106.68492436, 10.89964414],
  [106.68572015, 10.90003079],
  [106.68608674, 10.90026155],
  [106.68798547, 10.90125130],
  [106.68889699, 10.90173585],
  [106.68941412, 10.90233036],
  [106.69058722, 10.90331287],
  [106.69269245, 10.90419193]
];

export default {
  name,
  population,
  area,
  rings,
  symbol
};
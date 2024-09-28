// Chỉnh tên đia điểm
const name = "Thành Phố Thủ Đức";
// Chỉnh số dân ở đây
const population = 100000;
// Chỉnh diện tích ở đây
const area = 123.45;
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [64, 244, 208, 0.35],
};

// Thêm ranh giới ở đây
const rings = [
  //bắt đầu ranh giới quận 7 - thủ đức
  [106.76942969081568, 10.744302274314782],
  [106.76112623570972, 10.744252131770711],
  [106.75847122597024, 10.743946723293806],
  [106.75648311515343, 10.743397117730282],
  [106.75573784805592, 10.743086284230683],
  [106.75490404317641, 10.74273853444259],
  [106.75469365806164, 10.74265731028908],
  [106.75376896955771, 10.742298126658959],
  [106.7507156998032, 10.741596027379773],
  [106.74809107708131, 10.7415961032966],
  [106.7466253763372, 10.742115309497713],
  [106.74570969457174, 10.742970085888546],
  [106.74473319297343, 10.744496971172943],
  [106.74452617533176, 10.745223237932025],
  [106.74445925694694, 10.745543648290925],
  [106.74436576198606, 10.745992757079286],
  [106.74420872274202, 10.747516058418093],
  [106.74424744867494, 10.749304789661617],
  [106.74495720918421, 10.751230087872322],
  [106.74501113540828, 10.751321475923229],
  [106.74583658690615, 10.752717085917682],
  [106.75230773825487, 10.762297616332164],
  [106.75264155273041, 10.763418349003127],
  [106.75271939643855, 10.76449910434369],
  [106.75222456620152, 10.767059456608079],
  [106.75158346978866, 10.768665022842125],
  [106.75084015230902, 10.769904012280701],
  [106.74904802784724, 10.772329783244517],
  [106.74779452054122, 10.773551801687686],
  [106.74669675933993, 10.774467034746436],
  [106.74495677250287, 10.775626851056522],
  [106.74334768479892, 10.776442711350512],
  [106.74311303996782, 10.776561231283505],
  [106.74156754208984, 10.777276341162652],
  [106.74007130150754, 10.777610801325721],
  [106.7383321811694, 10.777459207018596],
  [106.73741435753358, 10.777029818170746],
  [106.73674446479983, 10.776665124162427],
  [106.7361027144325, 10.776053206940228],
  [106.73549022813738, 10.775214079837811],
  [106.73503565274463, 10.77428857840579],
  [106.73474844916261, 10.772758806838487],
  [106.73467196575501, 10.771268343799685],
  [106.73459971750889, 10.76632954790673],
  [106.73424784957542, 10.764145266517323],
  [106.73409548768038, 10.763521520758804],
  [106.73369787939265, 10.76259020650622],
  [106.73314932153762, 10.761750093836074],
  [106.73241509940577, 10.760941074753529],
  [106.73208068831744, 10.7607395377396],
  [106.73145424910389, 10.760361612695116],
  [106.7299137233497, 10.75967437231306],
  [106.72762339913831, 10.759292479161763],
  [106.7245498364463, 10.759138000886097],
  //kết thúc ranh giới quận 7 - thủ đức

  //bắt đầu ranh giới thủ đức - quận 4
  [106.72195823473743, 10.759471693663519],
  [106.72047302501484, 10.759859801697987],
  [106.71683405187483, 10.761346195279527],
  [106.71575321200909, 10.761900398755438],
  [106.71448174016241, 10.762552670446965],
  [106.71344673883036, 10.763107589645157],
  [106.71128242927688, 10.764828001151155],
  [106.71001062804693, 10.766239406681134],
  [106.70988200970751, 10.766436670375379],
  [106.7090694981403, 10.767868503877756],
  [106.70828870093655, 10.769733533144962],
  //kết thúc ranh giới thủ đức - quận 4

  //bắt đầu ranh giới thủ đức - quận 1
  [106.708088932681, 10.770703681122894],
  [106.70808613456586, 10.771969308602559],
  [106.70812634085289, 10.773238416775811],
  [106.70821966286704, 10.774391497404707],
  [106.70838403657264, 10.775346365750135],
  [106.70887846263273, 10.778044094272282],
  [106.7094562168848, 10.779910523050631],
  [106.70960022067251, 10.780329529384517],
  [106.71070674445026, 10.782181021553004],
  [106.71207716254008, 10.783479721921468],
  [106.71363637415024, 10.784431428378586],
  [106.71505434659585, 10.785208082189756],
  //kết thúc ranh giới thủ đức - quận 1

  //bắt đầu ranh giới thủ đức - bình thạnh
  [106.7185379133649, 10.786106796782597],
  [106.72073979479899, 10.786801975880968],
  [106.72162898310333, 10.78725029813897],
  [106.72237542104831, 10.787696540057844],
  [106.72349768912504, 10.78847108500619],
  [106.72430058377236, 10.789407115186789],
  [106.7251936466624, 10.790798706209715],
  [106.7263358859048, 10.792576647429918],
  [106.72677415215624, 10.793857250799421],
  [106.72719141438087, 10.795712680485902],
  [106.72731763346722, 10.796653809469639],
  [106.72725991291232, 10.798665388047153],
  [106.7272439774737, 10.798766316261885],
  [106.72720564467315, 10.79896715948496],
  [106.7271530737693, 10.79929301604897],
  [106.7267987590824, 10.800553971104335],
  [106.72595443734262, 10.802058979849724],
  [106.72332126446985, 10.805954851397527],
  [106.72281988743993, 10.806905816660292],
  [106.72249403630273, 10.807934097910094],
  [106.72221225833889, 10.809735736817231],
  [106.72229780013762, 10.810599169527716],
  [106.72272130879588, 10.81211305605113],
  [106.72301321570875, 10.812853479227746],
  [106.72323636626778, 10.81341851868359],
  [106.723638348951, 10.814199673197809],
  [106.72448829312503, 10.815546905298236],
  [106.72554356616875, 10.816649986307292],
  [106.72597007290993, 10.817045781577189],
  [106.72789839127216, 10.818481020819402],
  [106.7289078409148, 10.819061603109377],
  [106.72985044617089, 10.819488961774317],
  [106.73115018832732, 10.819684233186932],
  [106.7322118357564, 10.819572614436208],
  [106.73318324838587, 10.819248319419716],
  [106.73367840175871, 10.818963619843236],
  [106.73424215612403, 10.818412426231317],
  [106.7345507457124, 10.817981224849257],
  [106.73523990317153, 10.816594099333424],
  [106.7366209318083, 10.812124096717428],
  [106.73683830975096, 10.811761917123889],
  [106.73793337013048, 10.810611106353907],
  [106.73920785994748, 10.80965898528215],
  [106.74052654565276, 10.808977515246529],
  [106.74215789582139, 10.808537471478918],
  [106.7428663781521, 10.808416405427542],
  [106.7428663781521, 10.808416405427542],
  [106.7442671866942, 10.808399219253058],
  [106.7461893731873, 10.808748052282391],
  [106.74749823356072, 10.809224961752905],
  [106.74851140854896, 10.809948267933615],
  [106.74927120842582, 10.81050004184187],
  [106.75034245497726, 10.811700964208796],
  [106.75084579704979, 10.812441151212536],
  [106.75105217753165, 10.813198925942393],
  [106.75127610138428, 10.814993042603492],
  [106.75137282265325, 10.816224710315344],
  [106.75136711101506, 10.817236866500306],
  [106.75135117725435, 10.817931061645766],
  [106.75128496421917, 10.820283084457683],
  [106.75107528942924, 10.827721525565412],
  [106.75045164304268, 10.830285355067986],
  [106.74968163748288, 10.831597835210014],
  [106.7485876794508, 10.832747078403164],
  [106.7473175210388, 10.8336090766262],
  [106.7466039115468, 10.833950100593752],
  [106.74496037139626, 10.834544839936761],
  [106.74463852666536, 10.834661277101878],
  [106.7424029034357, 10.83529809236156],
  [106.74080922337353, 10.83553324434036],
  [106.74012482067997, 10.835538150373143],
  [106.73989832855906, 10.83554274704444],
  [106.73895500246536, 10.83529409755113],
  [106.73838504273478, 10.835001557450454],
  [106.73776047962649, 10.834504411341861],
  [106.73681535783467, 10.83345310196398],
  [106.7331364855258, 10.827793279691582],
  [106.73283064189509, 10.827403259580015],
  [106.7320397299071, 10.826394815617427],
  [106.73046160281874, 10.824749899438652],
  [106.72961830019494, 10.824107346827498],
  [106.72745334628257, 10.822847510269236],
  [106.72510435498583, 10.82172677690167],
  [106.7231222073663, 10.821087353549439],
  [106.72163151666633, 10.820704910037517],
  [106.72004191754132, 10.82043606302331],
  [106.71891942289103, 10.820353381138968],
  [106.7158041805275, 10.820673825810696],
  [106.71430075260768, 10.820927654070742],
  [106.71346924423833, 10.821255837654634],
  [106.71120647220673, 10.822600132245048],
  [106.7102872256113, 10.823492063962613],
  [106.70951159834355, 10.82464505203704],
  [106.70951159834355, 10.82464505203704],
  [106.70915646435012, 10.825575693181063],
  [106.70890584933319, 10.827852297665244],
  [106.70875123923554, 10.830107771208512],
  [106.70851667167577, 10.832114426552293],
  [106.70821076124314, 10.833772104723291],
  [106.70766766551762, 10.835135485942981],
  [106.70693443029147, 10.835992585082197],
  [106.70508807011657, 10.837594491978761],
  [106.70492048445668, 10.837740551878202],
  [106.70314341925061, 10.838905005330187],
  [106.70297396536998, 10.839015826989582],
  //kết thúc ranh giới thủ đức - bình thạnh

  //bắt đầu ranh giới thủ đức - quận 12
  [106.70103324091605, 10.840088748613164],
  [106.70013381375814, 10.840808017671023],
  [106.69920719711077, 10.84169705123271],
  [106.69853992658106, 10.842474884695278],
  [106.69821156374059, 10.84308733367117],
  [106.69793663862637, 10.843939642710094],
  [106.69779057152199, 10.844958749851056],
  [106.69776500344283, 10.84588171393646],
  [106.6978546688518, 10.846847692016093],
  [106.69790649324241, 10.847121524059602],
  [106.69817251847793, 10.848534064342944],
  [106.6986633589075, 10.849753574978006],
  [106.69930521613095, 10.850385043166636],
  [106.70001981659507, 10.85083000777007],
  [106.70076183439663, 10.851091764661858],
  [106.70517489200998, 10.851822574700217],
  [106.70607848136723, 10.851892435145235],
  [106.7077934664119, 10.851597535897247],
  [106.70877304331628, 10.85134199648821],
  [106.71054560301529, 10.851103572483746],
  [106.71127782119184, 10.851074469674948],
  [106.71270058508152, 10.851174823288778],
  [106.71379768564418, 10.851494925764907],
  [106.71451891062752, 10.851819237519285],
  [106.71515387233653, 10.852144716047706],
  [106.71607918029271, 10.85300296323937],
  [106.71680388929667, 10.853785506500488],
  [106.71754437560199, 10.854851148973601],
  [106.71797683924184, 10.855719924301052],
  [106.71815373210535, 10.856473257162232],
  [106.7181992340525, 10.857266274065829],
  [106.71808012930379, 10.858277571661377],
  [106.7170594615495, 10.861599074572275],
  [106.7158876446381, 10.863536142826508],
  [106.7147068826643, 10.864756734664393],
  [106.71413010728335, 10.86518998395129],
  [106.71305184714963, 10.865762913807185],
  //kết thức ranh giới thủ đức - quận 12

  //ranh giới riêng
  [106.71538199781614, 10.868181154753572],
  [106.71548620189817, 10.868453495207937],
  [106.71553333700679, 10.868737956366335],
  [106.71520710547729, 10.869572985775836],
  [106.71503706154569, 10.871389245948789],
  [106.71490945141113, 10.872245595663042],
  [106.71494856148489, 10.8724085840147],
  [106.715315855432, 10.872749597344177],
  [106.71573054943701, 10.872891948415457],
  //here temp
  [106.71784048449422, 10.89634754731778],
  [106.74905603367675, 10.878127786600544],
  [106.76858603362312, 10.892600721472594],
  [106.79200437243529, 10.872780810017787],
  [106.8085245951325, 10.873709192367143],
  [106.82413191672838, 10.89233946842784],
  [106.83999562863261, 10.898729479884198],
  [106.84706395068743, 10.863606927978896],
  [106.85789348995422, 10.840447592411754],
  [106.88200020329597, 10.81057250094979],
  [106.87224471148521, 10.765425388127165],
  //here temp

  [106.82729155045679, 10.759732618652643],
  [106.82649639736127, 10.759541552513921],
  [106.82534519655759, 10.759417670454352],
  [106.82432532586908, 10.759707285766417],
  [106.82350152441096, 10.760349969079732],
  [106.82291937706742, 10.76137789774071],
  [106.82277725792514, 10.762500192800319],
  [106.82294346523074, 10.764132686116325],
  [106.82327176354708, 10.76555714516028],
  [106.8251749502936, 10.770366005660255],
  [106.82592836670428, 10.772711399133124],
  [106.82603901471397, 10.773470706146837],
  [106.82605535151555, 10.774858299826287],
  [106.8258404568009, 10.776220069183],
  [106.82529074902536, 10.777709244577062],
  [106.82484266903735, 10.77830263794872],
  [106.82335974581451, 10.779690732788666],
  [106.82212962315414, 10.780320483452375],
  [106.82122395349043, 10.780586912400192],
  [106.81965179023953, 10.780644932002307],
  [106.81822871650884, 10.780357818054876],
  [106.81437185813046, 10.778402218027248],
  [106.81339477735378, 10.777805193623596],
  [106.80919748046635, 10.774105436012219],
  [106.80577560573424, 10.769941163157888],
  [106.80275463662161, 10.762222508406449],
  [106.80019297014807, 10.759487410138746],
  [106.7998361103267, 10.759278323993767],
  [106.79609386646607, 10.757390313784216],
  [106.79268567524429, 10.755877185805307],
  [106.79016721726843, 10.754650077218672],
  [106.77630563182564, 10.749656070172673],
  [106.77086600884444, 10.746090572127567],
  //điểm kết thúc
  [106.76942969081568, 10.744302274314782],
];

export default { name, population, area, rings, symbol };

// Chỉnh tên ở đây
const Name = "QL22";
// Chỉnh tên ở đây
const Location = "TP. Hồ Chí Minh";
const symbol = {
  // Chỉnh màu ở đây
  color: [255, 255, 0],
};

const paths = [
  [106.40917595, 11.01517545],
  [106.4093659, 11.0150873],
  [106.40955433, 11.01500157],
  [106.40976673, 11.01490596],
  [106.40990587, 11.01484327],
  [106.41002086, 11.01478913],
  [106.41013067, 11.01473664],
  [106.41024667, 11.01468234],
  [106.41036754, 11.01462475],
  [106.41048388, 11.01456946],
  [106.41076043, 11.01443811],
  [106.41125978, 11.01420331],
  [106.41163016, 11.01402925],
  [106.41178176, 11.01395866],
  [106.41196767, 11.01385796],
  [106.41220272, 11.01373197],
  [106.41239355, 11.01362857],
  [106.41249899, 11.01357164],
  [106.41264853, 11.01347505],
  [106.41278482, 11.01338718],
  [106.41293871, 11.01328762],
  [106.41299151, 11.01325356],
  [106.4131107, 11.01316437],
  [106.41314406, 11.01314002],
  [106.41325035, 11.01304573],
  [106.4133516, 11.01295753],
  [106.41345185, 11.01286999],
  [106.41355696, 11.01277735],
  [106.41366911, 11.01267994],
  [106.41376231, 11.01259717],
  [106.41385938, 11.01251308],
  [106.41395728, 11.01242669],
  [106.41405166, 11.01234376],
  [106.41413833, 11.01226823],
  [106.41423053, 11.01218694],
  [106.4143063, 11.01212128],
  [106.41444728, 11.01199705],
  [106.41456716, 11.01189131],
  [106.41470485, 11.01176675],
  [106.41484852, 11.01163774],
  [106.41501683, 11.01148799],
  [106.41514536, 11.01137837],
  [106.41527092, 11.01126894],
  [106.41537821, 11.01117696],
  [106.4154679, 11.01109863],
  [106.41558474, 11.01099595],
  [106.41570175, 11.01089228],
  [106.41578105, 11.01082103],
  [106.41593343, 11.01068396],
  [106.41618544, 11.0104569],
  [106.41637478, 11.01028847],
  [106.41665045, 11.010041],
  [106.41702137, 11.00973379],
  [106.41716168, 11.00961961],
  [106.41725572, 11.009542],
  [106.41737385, 11.00946226],
  [106.41758349, 11.00932218],
  [106.41769995, 11.0092435],
  [106.41786189, 11.00916287],
  [106.41805367, 11.00906956],
  [106.41826399, 11.00896391],
  [106.41844393, 11.00888769],
  [106.41863873, 11.00880558],
  [106.41885062, 11.00871623],
  [106.41903871, 11.008656],
  [106.4192154, 11.00859956],
  [106.41941908, 11.00853374],
  [106.41956929, 11.008487],
  [106.4199121, 11.00837365],
  [106.4202903, 11.00824774],
  [106.42088327, 11.00805087],
  [106.42150858, 11.00785418],
  [106.42197588, 11.00770773],
  [106.42241438, 11.00756892],
  [106.42312661, 11.00734575],
  [106.42390443, 11.00709992],
  [106.42489529, 11.00678567],
  [106.42582054, 11.00649107],
  [106.4265829, 11.00624876],
  [106.42730603, 11.00602071],
  [106.42782974, 11.00585414],
  [106.42897489, 11.00549346],
  [106.42955938, 11.00531149],
  [106.43011484, 11.00512915],
  [106.43078693, 11.00490945],
  [106.4314986, 11.00467967],
  [106.43222645, 11.00444529],
  [106.43297687, 11.00420659],
  [106.4337334, 11.00396253],
  [106.43448882, 11.00371889],
  [106.43450502, 11.00371286],
  [106.43484077, 11.00358513],
  [106.43509555, 11.00348771],
  [106.43555778, 11.003269],
  [106.43569357, 11.0032044],
  [106.43627782, 11.00289401],
  [106.43688283, 11.0025732],
  [106.43732481, 11.00233912],
  [106.4377154, 11.00213153],
  [106.43836199, 11.00178951],
  [106.43866338, 11.00162661],
  [106.43923186, 11.00131676],
  [106.43980873, 11.00100474],
  [106.44067345, 11.00053413],
  [106.44129137, 11.00019788],
  [106.44165306, 10.99998143],
  [106.44186561, 10.99984538],
  [106.44204378, 10.99971139],
  [106.44229205, 10.99952566],
  [106.44265763, 10.99922234],
  [106.44285435, 10.99905885],
  [106.44301715, 10.99889516],
  [106.44363702, 10.99826436],
  [106.44379786, 10.99807845],
  [106.44395676, 10.99789793],
  [106.44446129, 10.99731895],
  [106.44498252, 10.99671919],
  [106.44535484, 10.99629057],
  [106.44573499, 10.99586954],
  [106.4465037, 10.99502058],
  [106.44681008, 10.99468572],
  [106.44715799, 10.99428325],
  [106.44732406, 10.99409088],
  [106.44741555, 10.99398829],
  [106.4476238, 10.9937629],
  [106.44792325, 10.99343919],
  [106.44821549, 10.99312358],
  [106.44876928, 10.99252709],
  [106.44898522, 10.99228908],
  [106.44918434, 10.99207042],
  [106.44945048, 10.99178047],
  [106.44985227, 10.99134107],
  [106.45036734, 10.99077625],
  [106.45060044, 10.99052206],
  [106.45119446, 10.98985772],
  [106.451316, 10.98972512],
  [106.4514709, 10.98955543],
  [106.45158063, 10.98943582],
  [106.45186001, 10.98916744],
  [106.45234885, 10.98876109],
  [106.45248127, 10.98864938],
  [106.45300756, 10.98827876],
  [106.45326312, 10.98810858],
  [106.45359065, 10.987892],
  [106.45400191, 10.98764319],
  [106.45435057, 10.98741811],
  [106.45476196, 10.98715079],
  [106.45540742, 10.98673037],
  [106.45599372, 10.98634872],
  [106.45653696, 10.98599586],
  [106.45722351, 10.98555076],
  [106.45767151, 10.98525704],
  [106.4580487, 10.98500806],
  [106.4582648, 10.98486485],
  [106.45864893, 10.98461006],
  [106.45909825, 10.98431361],
  [106.45949103, 10.98405673],
  [106.45982043, 10.98384049],
  [106.460007, 10.98371878],
  [106.46034122, 10.98350069],
  [106.46068496, 10.98327502],
  [106.46109937, 10.98300431],
  [106.46145511, 10.98276993],
  [106.46178475, 10.98256451],
  [106.46217903, 10.98231804],
  [106.46269866, 10.98198662],
  [106.46294936, 10.98182851],
  [106.46347947, 10.98149072],
  [106.46356468, 10.98143732],
  [106.46378324, 10.98130845],
  [106.4642448, 10.98103241],
  [106.46445632, 10.98090861],
  [106.46455679, 10.98084882],
  [106.46482577, 10.98069859],
  [106.46512144, 10.9805324],
  [106.46562393, 10.98025321],
  [106.46595754, 10.98006661],
  [106.466434, 10.97980128],
  [106.46672903, 10.97963633],
  [106.4670551, 10.97945477],
  [106.46763615, 10.9791303],
  [106.46814072, 10.97884936],
  [106.46886822, 10.97844484],
  [106.46985665, 10.97790444],
  [106.47070544, 10.97744142],
  [106.47106048, 10.9772469],
  [106.4720724, 10.97668204],
  [106.47293858, 10.97621781],
  [106.47363954, 10.97584049],
  [106.47399918, 10.97564698],
  [106.47450838, 10.97537165],
  [106.47545745, 10.97486676],
  [106.47582293, 10.97467073],
  [106.47674763, 10.97422193],
  [106.47695829, 10.97412053],
  [106.47760488, 10.97382311],
  [106.47815677, 10.97356503],
  [106.4784132, 10.9734495],
  [106.47852688, 10.97339636],
  [106.47901999, 10.97316286],
  [106.47924943, 10.97305178],
  [106.47973767, 10.97280221],
  [106.48003587, 10.97264935],
  [106.48031335, 10.97248739],
  [106.48065318, 10.97225229],
  [106.48087762, 10.97208418],
  [106.48108395, 10.97191301],
  [106.48148414, 10.97155357],
  [106.4815691, 10.97147901],
  [106.4818385, 10.97122691],
  [106.48191965, 10.9711613],
  [106.48221309, 10.9709261],
  [106.48241729, 10.97075814],
  [106.48282338, 10.97047259],
  [106.48326989, 10.97015963],
  [106.48331972, 10.9701238],
  [106.48372239, 10.96983526],
  [106.48398879, 10.96964328],
  [106.48470398, 10.96916999],
  [106.48479872, 10.96910879],
  [106.48502775, 10.96896762],
  [106.48515968, 10.96888826],
  [106.48539232, 10.96875839],
  [106.48552402, 10.96868501],
  [106.48581283, 10.96854376],
  [106.48628254, 10.96831946],
  [106.48633927, 10.96828914],
  [106.48680075, 10.96809873],
  [106.48758833, 10.96779382],
  [106.48816592, 10.96757689],
  [106.48896212, 10.96729905],
  [106.48910955, 10.96724193],
  [106.48926639, 10.96717759],
  [106.48979272, 10.96698026],
  [106.48998492, 10.96690059],
  [106.49010198, 10.96685226],
  [106.49047717, 10.96672188],
  [106.49103569, 10.96650844],
  [106.49139308, 10.96637144],
  [106.49164713, 10.96627603],
  [106.49209227, 10.96610633],
  [106.49227417, 10.96603581],
  [106.49276227, 10.96584389],
  [106.49335873, 10.96560453],
  [106.49363486, 10.96549296],
  [106.49371495, 10.96545861],
  [106.4940274, 10.96532093],
  [106.4942855, 10.96522483],
  [106.49481301, 10.96501146],
  [106.49493313, 10.96495929],
  [106.49522834, 10.96483208],
  [106.49534435, 10.96478618],
  [106.49558489, 10.96466897],
  [106.49586182, 10.96453539],
  [106.49617268, 10.96436773],
  [106.49640746, 10.96422545],
  [106.49677815, 10.96400582],
  [106.49712953, 10.9637993],
  [106.49748969, 10.96359084],
  [106.49787564, 10.96336608],
  [106.49821324, 10.96317225],
  [106.49833677, 10.96310051],
  [106.49870848, 10.96288192],
  [106.49923885, 10.96257258],
  [106.49945196, 10.96244669],
  [106.49969907, 10.96229918],
  [106.49983963, 10.96221459],
  [106.50023297, 10.96199616],
  [106.50050933, 10.96183707],
  [106.5011479, 10.96148059],
  [106.50198161, 10.96102345],
  [106.50249971, 10.96074204],
  [106.50309059, 10.96043655],
  [106.50333163, 10.9603107],
  [106.50446186, 10.95973623],
  [106.50514929, 10.95938733],
  [106.50535605, 10.95928222],
  [106.50551745, 10.95919592],
  [106.50565796, 10.95912315],
  [106.50579405, 10.95905519],
  [106.50615123, 10.95887428],
  [106.50642203, 10.95873873],
  [106.50668368, 10.95860718],
  [106.50717134, 10.95835427],
  [106.50746851, 10.95819984],
  [106.50773666, 10.95806097],
  [106.5077868, 10.9580344],
  [106.50793345, 10.957963],
  [106.50804468, 10.95790441],
  [106.50840699, 10.95771381],
  [106.50931025, 10.9572405],
  [106.50950353, 10.95713867],
  [106.51020744, 10.95677097],
  [106.51042049, 10.9566383],
  [106.51059815, 10.95652674],
  [106.51098914, 10.95627439],
  [106.51132443, 10.95605295],
  [106.51170183, 10.95579953],
  [106.51176745, 10.95575121],
  [106.51223132, 10.95544238],
  [106.51241376, 10.95532023],
  [106.51286369, 10.95501773],
  [106.51314544, 10.95482832],
  [106.51344741, 10.95462593],
  [106.51396107, 10.95427826],
  [106.51407678, 10.95420045],
  [106.51450355, 10.95391014],
  [106.51465125, 10.95380866],
  [106.51514674, 10.95347052],
  [106.51561639, 10.95315053],
  [106.51605552, 10.95285244],
  [106.51663127, 10.95245545],
  [106.51719822, 10.95206461],
  [106.51747514, 10.95187527],
  [106.51817142, 10.95140966],
  [106.51876032, 10.95101245],
  [106.51925982, 10.95067479],
  [106.51971198, 10.95035942],
  [106.51997886, 10.95017487],
  [106.52025252, 10.94998795],
  [106.52047261, 10.94983834],
  [106.52072929, 10.94966418],
  [106.52115151, 10.94937472],
  [106.52140483, 10.94920223],
  [106.52170474, 10.94899757],
  [106.52206761, 10.94875313],
  [106.52237155, 10.94854587],
  [106.5227292, 10.94830095],
  [106.52354814, 10.94773643],
  [106.52367145, 10.94765242],
  [106.52371309, 10.94762416],
  [106.52405541, 10.94739443],
  [106.52448601, 10.94710739],
  [106.52485384, 10.94688856],
  [106.52492843, 10.94684501],
  [106.5253041, 10.94663859],
  [106.5254077, 10.94658384],
  [106.525976, 10.94630134],
  [106.52643315, 10.94607649],
  [106.5268824, 10.94585835],
  [106.52749541, 10.94555935],
  [106.52785545, 10.9453847],
  [106.52824751, 10.94519442],
  [106.52845715, 10.94509183],
  [106.52890118, 10.94488355],
  [106.52942097, 10.94463895],
  [106.52971494, 10.94448854],
  [106.530063, 10.94431934],
  [106.53032812, 10.94419107],
  [106.5304827, 10.94412333],
  [106.53095363, 10.94389505],
  [106.53112128, 10.94381304],
  [106.53189197, 10.94344366],
  [106.53205671, 10.94336531],
  [106.53287262, 10.94297515],
  [106.53341113, 10.94271774],
  [106.53381704, 10.94252518],
  [106.5343231, 10.94228387],
  [106.53467515, 10.94211493],
  [106.53524305, 10.94183534],
  [106.53587777, 10.94152654],
  [106.53602549, 10.94145727],
  [106.53607811, 10.94143167],
  [106.53687668, 10.94104863],
  [106.53737103, 10.94081051],
  [106.53744585, 10.9407763],
  [106.53799775, 10.94051065],
  [106.53846818, 10.94028564],
  [106.53883012, 10.9401126],
  [106.53928656, 10.93988662],
  [106.53954404, 10.93976018],
  [106.53997708, 10.93954769],
  [106.54028329, 10.93939875],
  [106.54096307, 10.93906655],
  [106.54121929, 10.93894019],
  [106.54189326, 10.93860878],
  [106.54254276, 10.93829353],
  [106.5430392, 10.93805733],
  [106.54321902, 10.93797115],
  [106.5435135, 10.93783832],
  [106.54363553, 10.93777838],
  [106.54397239, 10.93761116],
  [106.54446748, 10.93736324],
  [106.54498765, 10.93710781],
  [106.54534633, 10.93693369],
  [106.54584628, 10.93669059],
  [106.54619987, 10.93651609],
  [106.5464596, 10.93639039],
  [106.54696537, 10.93614623],
  [106.54716285, 10.9360521],
  [106.54749973, 10.93589046],
  [106.54777185, 10.93575931],
  [106.54823663, 10.93552884],
  [106.54834754, 10.93547336],
  [106.54880497, 10.93525212],
  [106.54929308, 10.93501705],
  [106.54952016, 10.93490843],
  [106.54990637, 10.93471289],
  [106.55005873, 10.93463335],
  [106.55023623, 10.93453702],
  [106.55036734, 10.93445307],
  [106.55070153, 10.93422912],
  [106.55085594, 10.93411091],
  [106.55104951, 10.93396835],
  [106.55128336, 10.93379444],
  [106.55152331, 10.93359126],
  [106.55171526, 10.93342487],
  [106.55181898, 10.93332165],
  [106.551934, 10.93320966],
  [106.55213416, 10.93300951],
  [106.55238877, 10.93272804],
  [106.55270493, 10.93237146],
  [106.55297443, 10.93206651],
  [106.55310711, 10.93191649],
  [106.55325975, 10.93173675],
  [106.55363205, 10.93130666],
  [106.55400718, 10.93088283],
  [106.55410421, 10.93077223],
  [106.55441634, 10.93043553],
  [106.5545313, 10.93030991],
  [106.55457603, 10.93026125],
  [106.55483298, 10.929947],
  [106.55499438, 10.92975616],
  [106.55504091, 10.92967784],
  [106.55512518, 10.92957993],
  [106.55531696, 10.92934227],
  [106.55542387, 10.92920876],
  [106.55552583, 10.92906615],
  [106.55567485, 10.9288494],
  [106.55584242, 10.92860733],
  [106.55594342, 10.92846057],
  [106.55613203, 10.92819905],
  [106.55625923, 10.92802297],
  [106.55636017, 10.92788427],
  [106.55645435, 10.92775322],
  [106.55655658, 10.92760036],
  [106.55668428, 10.9274075],
  [106.55685866, 10.92714384],
  [106.55691306, 10.92706451],
  [106.5570915, 10.92683064],
  [106.55718525, 10.92669947],
  [106.55732136, 10.92650803],
  [106.55745313, 10.92632272],
  [106.5574624, 10.92631161],
  [106.55750229, 10.92623903],
  [106.55754054, 10.92618879],
  [106.55757907, 10.92612732],
  [106.55800585, 10.92552777],
  [106.55854775, 10.92476027],
  [106.55862069, 10.92465756],
  [106.55873498, 10.92449806],
  [106.55881502, 10.92440036],
  [106.55886997, 10.92432179],
  [106.55907275, 10.92402807],
  [106.55921856, 10.92381745],
  [106.55946644, 10.92345868],
  [106.5596034, 10.92326048],
  [106.55985154, 10.92290975],
  [106.56007538, 10.92259874],
  [106.56040228, 10.92213772],
  [106.5606859, 10.92172561],
  [106.56098106, 10.92129334],
  [106.56106237, 10.92117623],
  [106.56111907, 10.92109686],
  [106.56134316, 10.92078214],
  [106.56145772, 10.92061378],
  [106.56162342, 10.92037498],
  [106.56175584, 10.92018605],
  [106.5619039, 10.91996827],
  [106.56200439, 10.91982066],
  [106.56210202, 10.91968393],
  [106.56222873, 10.91950641],
  [106.56233598, 10.91934678],
  [106.56252085, 10.9190789],
  [106.56279406, 10.91867665],
  [106.56305084, 10.91830309],
  [106.56310564, 10.91821468],
  [106.56318338, 10.91809858],
  [106.56332157, 10.91789705],
  [106.56363281, 10.91743604],
  [106.56389777, 10.91705],
  [106.56416397, 10.91665783],
  [106.56438881, 10.91632847],
  [106.56461551, 10.91599867],
  [106.56485624, 10.91564667],
  [106.56524219, 10.91509251],
  [106.56554825, 10.91465845],
  [106.56587089, 10.91420113],
  [106.56615131, 10.91380633],
  [106.56655439, 10.9132312],
  [106.56693571, 10.91268936],
  [106.56723128, 10.91227035],
  [106.56748316, 10.91191904],
  [106.56769066, 10.91162145],
  [106.56780098, 10.91146229],
  [106.56798719, 10.91118949],
  [106.56816934, 10.91092399],
  [106.5683003, 10.91073487],
  [106.56850612, 10.91044176],
  [106.5687223, 10.91013374],
  [106.56892661, 10.90984072],
  [106.56917415, 10.90949096],
  [106.56944867, 10.90910486],
  [106.56971724, 10.90872495],
  [106.56992336, 10.90843026],
  [106.57019098, 10.90804769],
  [106.57047033, 10.90764797],
  [106.57090349, 10.90702822],
  [106.57124516, 10.90653458],
  [106.57146038, 10.90622975],
  [106.57175278, 10.90579879],
  [106.5718853, 10.90561338],
  [106.57204603, 10.90538489],
  [106.57223309, 10.90511952],
  [106.57262469, 10.90456953],
  [106.57292162, 10.90415382],
  [106.57319443, 10.90376937],
  [106.57360542, 10.90318811],
  [106.57378729, 10.90293498],
  [106.5743272, 10.90216044],
  [106.5745861, 10.90179356],
  [106.57474242, 10.90157811],
  [106.57499288, 10.90122312],
  [106.5752021, 10.90092773],
  [106.5754873, 10.9005233],
  [106.57558858, 10.9003833],
  [106.5756588, 10.90027486],
  [106.57568068, 10.90022384],
  [106.57592829, 10.8999087],
  [106.57605694, 10.89972905],
  [106.5761961, 10.89953103],
  [106.57640673, 10.89922631],
  [106.57665644, 10.89886835],
  [106.57692757, 10.8984857],
  [106.57713074, 10.89820489],
  [106.57734485, 10.89790559],
  [106.57742777, 10.89779154],
  [106.5776006, 10.89753023],
  [106.57774003, 10.89732017],
  [106.57790308, 10.89708721],
  [106.57812234, 10.8967776],
  [106.57841924, 10.89635856],
  [106.57869699, 10.8959509],
  [106.57882813, 10.89576213],
  [106.57906882, 10.89541439],
  [106.57921665, 10.89520086],
  [106.57936911, 10.89497762],
  [106.57957321, 10.89468139],
  [106.57977969, 10.89438089],
  [106.57997822, 10.89409213],
  [106.5800742, 10.89395063],
  [106.58015952, 10.89383315],
  [106.58050111, 10.89336399],
  [106.58071968, 10.89305471],
  [106.58104672, 10.8925889],
  [106.58139564, 10.89208292],
  [106.5815895, 10.89180229],
  [106.58185846, 10.89141528],
  [106.58212869, 10.89103041],
  [106.58235948, 10.89070139],
  [106.58269059, 10.8902304],
  [106.58284742, 10.89000801],
  [106.58321712, 10.88947609],
  [106.58357426, 10.88896024],
  [106.58380885, 10.88862215],
  [106.58434191, 10.88785267],
  [106.5847806, 10.88722615],
  [106.58523163, 10.88659011],
  [106.585571, 10.886101],
  [106.58598135, 10.88551636],
  [106.5863298, 10.88502739],
  [106.58663257, 10.88460715],
  [106.58683846, 10.88432079],
  [106.58706785, 10.88400404],
  [106.58727459, 10.88368603],
  [106.58736334, 10.88354673],
  [106.587811, 10.8829037],
  [106.58799452, 10.88264053],
  [106.58847269, 10.8819485],
  [106.58885634, 10.88139677],
  [106.58916905, 10.88094838],
  [106.58945335, 10.88055106],
  [106.58959968, 10.88034309],
  [106.589983, 10.87980604],
  [106.59025186, 10.87942878],
  [106.59045519, 10.87914111],
  [106.5908168, 10.87865646],
  [106.59110568, 10.87825553],
  [106.59130479, 10.87798016],
  [106.59148402, 10.87773195],
  [106.59165491, 10.87749283],
  [106.59188331, 10.87717904],
  [106.59208195, 10.87690908],
  [106.59238032, 10.87648104],
  [106.59246552, 10.8763551],
  [106.59268035, 10.8760472],
  [106.5928556, 10.87579699],
  [106.59301298, 10.87557155],
  [106.59318989, 10.87531946],
  [106.59340372, 10.87500732],
  [106.59360225, 10.87472446],
  [106.5937596, 10.8744998],
  [106.59400743, 10.87414724],
  [106.59427584, 10.87376596],
  [106.59470289, 10.87316208],
  [106.59484445, 10.87297223],
  [106.59533602, 10.87229582],
  [106.59581496, 10.87161306],
  [106.59617291, 10.87110689],
  [106.59661005, 10.8704956],
  [106.59679801, 10.87022942],
  [106.59698606, 10.86996125],
  [106.59723943, 10.86961633],
  [106.59731458, 10.86951308],
  [106.59746002, 10.86931502],
  [106.59791366, 10.86867027],
  [106.59815841, 10.8683194],
  [106.5984196, 10.8679452],
  [106.59874916, 10.86748123],
  [106.59899379, 10.86713252],
  [106.59915944, 10.86689666],
  [106.59928065, 10.86672649],
  [106.59957308, 10.86631072],
  [106.59985611, 10.86591106],
  [106.60011111, 10.86554499],
  [106.60045905, 10.8650412],
  [106.60079219, 10.86455856],
  [106.60112087, 10.86408021],
  [106.60132164, 10.86378862],
  [106.6014621, 10.86359042],
  [106.60167476, 10.86328403],
  [106.60176909, 10.86316499],
  [106.60192498, 10.86294439],
  [106.60214589, 10.8626307],
  [106.60229707, 10.86241663],
  [106.60245285, 10.86219684],
  [106.60259361, 10.86200028],
  [106.60279129, 10.86172834],
  [106.60292863, 10.86154335],
  [106.60320139, 10.86116352],
  [106.60334672, 10.86095082],
  [106.60347845, 10.8607568],
  [106.60359896, 10.86058583],
  [106.6037235, 10.86041311],
  [106.60385953, 10.86021821],
  [106.60418088, 10.85976778],
  [106.6043301, 10.85956606],
  [106.60438222, 10.85948881],
  [106.60454193, 10.85924809],
  [106.6046844, 10.85903854],
  [106.60483414, 10.85883443],
  [106.60499612, 10.85860805],
  [106.60521211, 10.85830214],
  [106.60537383, 10.85807366],
  [106.60560538, 10.85774087],
  [106.60584091, 10.85740104],
  [106.60592884, 10.85726198],
  [106.60614424, 10.85697103],
  [106.60624474, 10.85687415],
  [106.60645194, 10.85660403],
  [106.60657892, 10.85641],
  [106.60687636, 10.85596306],
  [106.60696823, 10.85581672],
  [106.60723274, 10.85541256],
  [106.60722639, 10.85531608],
  [106.60724965, 10.85528348],
  [106.60749376, 10.85490386],
  [106.60767129, 10.85462747],
  [106.60784953, 10.85435158],
  [106.6080302, 10.85406976],
  [106.6081779, 10.85383944],
  [106.60841259, 10.85347355],
  [106.60859911, 10.85318225],
  [106.60877712, 10.85290616],
  [106.60891494, 10.85269149],
  [106.60916261, 10.85230571],
  [106.60933426, 10.85203984],
  [106.60948233, 10.85180821],
  [106.60963129, 10.85157595],
  [106.60977195, 10.85135893],
  [106.60989806, 10.85116135],
  [106.61006109, 10.85090881],
  [106.61026314, 10.85059365],
  [106.61047331, 10.85026683],
  [106.61054136, 10.8501599],
  [106.61059678, 10.85007309],
  [106.61072247, 10.84987791],
  [106.61081102, 10.84974026],
  [106.61084404, 10.8496893],
  [106.6110072, 10.84950668],
  [106.61124941, 10.84914273],
  [106.61149031, 10.8487773],
  [106.61180367, 10.84828753],
  [106.61213903, 10.84776318],
  [106.61242279, 10.84732153],
  [106.61268403, 10.84689397],
  [106.61274522, 10.84679054],
  [106.61289815, 10.84657993],
  [106.61299062, 10.84644797],
  [106.6130693, 10.84633602],
  [106.61324896, 10.84605653],
  [106.61338462, 10.84584565],
  [106.61358466, 10.84551908],
  [106.61377562, 10.84521368],
  [106.61384746, 10.84509696],
  [106.61394646, 10.84492599],
  [106.61402005, 10.84481399],
  [106.61432208, 10.84432698],
  [106.61455235, 10.84395139],
  [106.61482962, 10.84353923],
  [106.61490505, 10.84342724],
  [106.61497252, 10.84333774],
  [106.61503942, 10.84325183],
  [106.61514113, 10.84309404],
  [106.61520865, 10.84299077],
  [106.61536193, 10.84278428],
];

export default { Name, Location, symbol, paths };

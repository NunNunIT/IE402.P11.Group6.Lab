// Chỉnh tên đia điểm
const name = "Huyện Cần Giờ";
// Chỉnh số dân ở đây
const population = 100000;
// Chỉnh diện tích ở đây
const area = 123.45;
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [150, 75, 0, 0.4],
}[(106.77275864, 10.67629226)];

// Thêm ranh giới ở đây
const rings = [
  //bắt đầu cạnh chung cần giờ - nhà bè
  [106.77618326245297, 10.674680552668885],
  [106.7715444100586, 10.666297514009404],
  [106.77128176835971, 10.666085213512533],
  [106.77007104435647, 10.665675943370312],
  [106.7687313804887, 10.665329367353165],
  [106.76771482589166, 10.665194806482578],
  [106.76593349734766, 10.665095432945938],
  [106.76436275612923, 10.665341390952507],
  [106.76348713380558, 10.665621384428274],
  [106.76236984863817, 10.665898971675459],
  [106.76130191035475, 10.666258653011079],
  [106.75585437701432, 10.668778004132992],
  [106.75581480010467, 10.668793939847454],
  [106.75581480010467, 10.668793939847454],
  [106.75291242804754, 10.669978303210382],
  [106.75237674173664, 10.67013939707841],
  [106.75209733212544, 10.670223366237527],
  [106.75178765378206, 10.670316498195229],
  [106.75169157125534, 10.670345517260198],
  [106.7512551763583, 10.670476695085236],
  [106.75124491264255, 10.670479597738698],
  [106.75117066666103, 10.670493991836514],
  [106.75083655309044, 10.67055919340661],
  [106.75076818295403, 10.670572747716493],
  [106.75054724193619, 10.67061548776956],
  [106.75044953979769, 10.67063444481669],
  [106.75036640834398, 10.670645724306105],
  [106.74943747371535, 10.670768858830582],
  [106.7490513482365, 10.670797995260132],
  [106.74857550024663, 10.670833152153012],
  [106.7482577981377, 10.67085731351608],
  [106.74714176193987, 10.670837867268714],
  [106.74710354082545, 10.670840941564053],
  [106.74597917460792, 10.670817366703524],
  [106.74585385653607, 10.67081549528436],
  [106.74505949611367, 10.670666460670075],
  [106.74468663657503, 10.670596466798282],
  [106.74328018203532, 10.670134170123486],
  [106.74257308140946, 10.66978679221918],
  [106.74182278844361, 10.6694179996622],
  [106.74152937468449, 10.669226643273218],
  [106.74116931693804, 10.668991727161186],
  [106.740929232383, 10.668801476065376],
  [106.74003663107266, 10.668095101959052],
  [106.73899869214344, 10.666339182044199],
  [106.73863897163675, 10.665439862955555],
  [106.73837770640509, 10.664451838279145],
  [106.73839241271592, 10.663138977328973],
  [106.7385344584724, 10.662265756165372],
  [106.7385336674303, 10.662269805258292],
  [106.73905148851254, 10.660608576042089],
  [106.73946950078702, 10.659267113109532],
  [106.73979552955528, 10.65853258026071],
  [106.74082569164821, 10.656756113507631],
  [106.74200435028887, 10.655152411641662],
  [106.74505344502796, 10.652006953425595],
  [106.74775530502207, 10.649937032078023],
  [106.74890731631031, 10.64930383030949],
  [106.75045892082225, 10.648617756030838],
  [106.75314919022334, 10.647772372557307],
  [106.75348601067817, 10.647671689461092],
  [106.7541729164012, 10.6474859187663],
  [106.75782695403461, 10.646497684430663],
  [106.76126294039865, 10.645470912911671],
  [106.7623060704571, 10.64504509921749],
  [106.763361739395, 10.64452432109281],
  [106.76395508619461, 10.644201130394938],
  [106.765541155677, 10.64332626081983],
  [106.76778689485445, 10.641710259971841],
  [106.76875086462167, 10.640541272506148],
  [106.76888213098177, 10.64037553373081],
  [106.7691568616096, 10.640009492246747],
  [106.77035370872568, 10.638414866171194],
  [106.77083897402481, 10.637221236571888],
  [106.77127358562483, 10.635954285918553],
  [106.7714020351573, 10.635096315137524],
  [106.77146338193701, 10.633845120489958],
  [106.7714707256901, 10.633697722693281],
  [106.77147469923607, 10.633612471373096],
  [106.77142946817959, 10.632407808462167],
  [106.77142272041105, 10.632218950581173],
  [106.77142238644461, 10.63221857665318],
  [106.7714223772769, 10.632218108116906],
  [106.77100816870228, 10.62890277540994],
  [106.77061079426262, 10.625731772672278],
  [106.77032084262234, 10.624389024325737],
  [106.77032084262234, 10.624389024325737],
  [106.76997139264844, 10.622770682555736],
  [106.77050796883039, 10.61695730569291],
  [106.77080802944926, 10.615888351996352],
  [106.77122278420026, 10.614747037915194],
  [106.77571124814924, 10.608322585179424],
  [106.7774902230841, 10.60583080308656],
  [106.779110562304, 10.60365173488904],
  [106.77985584332401, 10.602384786904304],
  [106.7804682063418, 10.60125045351525],
  [106.78102692662485, 10.600102544046738],
  [106.78214484495736, 10.597302717126823],
  [106.78270404846698, 10.595723127349103],
  [106.7828120964888, 10.595291511354526],
  [106.78297202147424, 10.594614259105505],
  [106.7830953833853, 10.593772812363836],
  [106.78327805811166, 10.590904166510118],
  [106.78364130692256, 10.586457932523455],
  [106.78365331313059, 10.585300572443757],
  [106.78360093614094, 10.584583636610738],
  [106.78341995836486, 10.583633390584154],
  [106.78338593491503, 10.583545297187392],
  [106.78319570880383, 10.583052834240572],
  [106.7828659464495, 10.582461041757798],
  [106.78263278409293, 10.581935246290573],
  [106.78184570565446, 10.580465930532528],
  [106.78097630605313, 10.5795380287166],
  [106.77887945363126, 10.578115582737405],
  [106.77750711012241, 10.577007323219723],
  [106.77607858615958, 10.576634492575089],
  [106.77572724732288, 10.576546136047842],
  [106.77478672176751, 10.576341805943015],
  [106.77365466942057, 10.576232172954075],
  [106.77127561517364, 10.576239077330307],
  [106.76719945774173, 10.577256714032],
  [106.76470230746483, 10.578677067213468],
  [106.7631012015873, 10.579577886320438],
  [106.76120444621462, 10.580522279204134],
  [106.75984601677308, 10.580862419020436],
  [106.75814520264547, 10.580754388554366],
  [106.75622115309721, 10.58053348212896],
  [106.75418141550757, 10.580427358696456],
  [106.75187893232626, 10.579848995360084],
  [106.74993929624408, 10.57892312711408],
  //kết thúc cạnh chung cần giờ - nhà bè

  //default start here
  [106.74704742, 10.57792377],
  [106.74528503, 10.57567596],
  [106.74263, 10.57101822],
  [106.74196625, 10.56537151],
  [106.74293518, 10.55956364],
  [106.74417877, 10.55299854],
  [106.74909973, 10.53071404],
  [106.7484436, 10.51856136],
  [106.74401855, 10.4999876],
  [106.74358368, 10.49762726],
  [106.74539185, 10.4884367],
  [106.75231171, 10.47235394],
  [106.75685883, 10.46256828],
  [106.76315308, 10.45245361],
  [106.77225494, 10.44035816],
  [106.77774048, 10.43307114],
  [106.80444336, 10.40364456],
  [106.81508636, 10.39125824],
  [106.82253265, 10.3774128],
  [106.83459473, 10.35422611],
  [106.85276794, 10.35833168],
  [106.86758423, 10.35986996],
  [106.87587738, 10.36071873],
  [106.89455414, 10.3650856],
  [106.91846466, 10.37398052],
  [106.94264984, 10.38544941],
  [106.97055054, 10.39481354],
  [106.97621918, 10.39969254],
  [106.98096466, 10.40523052],
  [106.98561096, 10.41319561],
  [106.98529816, 10.4182024],
  [106.98229218, 10.42474556],
  [106.97260284, 10.43316078],
  [106.96268463, 10.43849468],
  [106.9661026, 10.44648933],
  [106.98085785, 10.44734478],
  [106.99147034, 10.45094681],
  [106.99658203, 10.46049023],
  [106.99820709, 10.47863674],
  //end default

  //start ranh giới riêng
  [106.99826627451236, 10.482804346737929],
  [106.99854648140516, 10.490876135581155],
  [106.99787719551341, 10.493902326356988],
  [106.99754648948624, 10.496481442339471],
  [106.9975514493461, 10.498276944399173],
  [106.99789736704163, 10.500293804538606],
  [106.9986985701326, 10.502421721819317],
  [106.99983659251588, 10.504433135888823],
  [107.00165433984128, 10.506278461068662],
  [107.00426331375921, 10.508006394020624],
  [107.00760848830672, 10.511408805030962],
  [107.01074330945322, 10.515718581604279],
  [107.01148500146296, 10.51717154786187],
  [107.01279845789983, 10.520363481477538],
  [107.01103772590045, 10.52497444550296],
  [107.00937058369497, 10.527339860880959],
  [107.00782831482124, 10.528618897503957],
  [107.00512592964839, 10.529904570992956],
  [107.00229350383147, 10.530485820091181],
  [107.00054748071469, 10.530298626622326],
  [106.99748704879656, 10.529202504727571],
  [106.99384284024146, 10.52837098437965],
  [106.99120370237786, 10.528545006536643],
  [106.98907830519954, 10.529124989351535],
  [106.98734521575153, 10.53046951245208],
  [106.98599648174773, 10.532259150668697],
  [106.98497187462975, 10.534493615549769],
  [106.98459371748731, 10.5370450355535],
  [106.98479502695058, 10.539532100600296],
  [106.98538220087681, 10.5418889758147],
  [106.98633472166311, 10.544872386603364],
  [106.98636691733894, 10.54497735381983],
  [106.986499223336, 10.545460430483171],
  [106.98785936169206, 10.550425060019643],
  [106.98806052212956, 10.55291143759635],
  [106.98780847044272, 10.554825650015712],
  [106.9870398951058, 10.556485955754544],
  [106.98588332081609, 10.557637344986865],
  [106.98414832579468, 10.558598776517995],
  [106.98228085348411, 10.55949787299426],
  [106.98054472494123, 10.560842208706548],
  [106.97945464926637, 10.562376391858978],
  [106.97900286468561, 10.564968397281806],
  [106.97947111184834, 10.567539406831486],
  [106.98077151501278, 10.571425760428122],
  [106.98279805947432, 10.575713937463401],
  [106.98416416264317, 10.579660182697124],
  [106.98233037746327, 10.580077734841195],
  [106.97713653740009, 10.581772113507178],
  [106.97543907067134, 10.582076554407466],
  [106.97454555193475, 10.582505676879652],
  [106.97311728612793, 10.584034487649133],
  [106.97248577721416, 10.5848290180096],
  [106.97022513405433, 10.587673157539719],
  [106.96839232840185, 10.5894443357497],
  [106.96729905370975, 10.590206517479048],
  [106.96666830579174, 10.590562331728632],
  [106.96579104351898, 10.590782453612112],
  [106.96472332270334, 10.590839612580213],
  [106.96398365163233, 10.590977630662849],
  [106.96275296985381, 10.591712688125146],
  [106.9616838868956, 10.59269561256549],
  [106.96091991759634, 10.593292681776722],
  [106.96031810645592, 10.593565131696455],
  [106.95960757239061, 10.593674662080497],
  [106.95873182474723, 10.593677020871842],
  [106.9567288489427, 10.593764529215878],
  [106.95466540451237, 10.59427622137498],
  [106.95305925790191, 10.594699359007],
  [106.94887234838316, 10.596364938964626],
  [106.94776505559318, 10.597070408393062],
  [106.94621409566439, 10.597258940621744],
  [106.94434849567718, 10.596729976551142],
  [106.94287200051444, 10.596434841524603],
  [106.94177371688357, 10.596467993792912],
  [106.94084310457677, 10.59685032068687],
  [106.94007717598834, 10.597340575683749],
  [106.93933970910695, 10.59812857661598],
  [106.93846628745266, 10.599295617952285],
  [106.93714100584316, 10.600128771362828],
  [106.93166812265855, 10.601758447893657],
  [106.92795138843034, 10.602827478374047],
  [106.92655576291662, 10.603562678397825],
  [106.92557158996918, 10.60448803474504],
  [106.92357986445656, 10.607560106250626],
  [106.92218795317399, 10.609352510837358],
  [106.92172205818315, 10.60967827781415],
  [106.92098334093144, 10.609870463246667],
  [106.91879081300279, 10.609850544491744],
  [106.91697966380691, 10.60912289856063],
  [106.91477968532712, 10.607933689592317],
  [106.91291837240567, 10.607264137201785],
  [106.91168451565854, 10.607510998651833],
  [106.91078284486692, 10.608300809003328],
  [106.91002218518965, 10.60951551247698],
  [106.90696951515544, 10.617077069236498],
  [106.9059941435989, 10.620054195057335],
  [106.90493064198206, 10.622390082621203],
  [106.90420261279186, 10.623375828789651],
  [106.90318451605555, 10.624753530877353],
  [106.89842521773727, 10.628862518239673],
  [106.89279255195838, 10.632220348306296],
  [106.89112879198198, 10.634776929629549],
  [106.88957110826428, 10.637483515130521],
  [106.88811871107296, 10.63832892997511],
  [106.88621016678194, 10.639090336082],
  [106.88557442103598, 10.639745264844759],
  [106.88500196782648, 10.640749393412971],
  [106.8845424882679, 10.642646965435903],
  [106.88427215951454, 10.644359550115515],
  [106.88389152092559, 10.645949071434748],
  [106.88220053874818, 10.64777859073538],
  [106.8791200922663, 10.648333048813573],
  [106.87535276925307, 10.648346702239717],
  [106.87368599704664, 10.64810455134424],
  [106.87256310945445, 10.647822013227316],
  [106.87177650784785, 10.647143567466195],
  [106.87143668844585, 10.646404074320776],
  [106.87130633020126, 10.64611077301589],
  [106.87116975364381, 10.645765117109852],
  [106.87037122123495, 10.643748234979988],
  [106.8700480757925, 10.643074073539365],
  [106.86936049158054, 10.642493212245638],
  [106.8685744367433, 10.642350610393624],
  [106.86734708106789, 10.642500133542063],
  [106.86646419877157, 10.64255061677434],
  [106.86504349716225, 10.642361295606156],
  [106.8641117399797, 10.641926561341268],
  [106.86366493450238, 10.6414273252928],
  [106.86312710171971, 10.640814088133183],
  [106.86223754502485, 10.638631879767257],
  [106.86139926974239, 10.637275924475265],
  [106.86076170224364, 10.63659904120261],
  [106.85977836091914, 10.636407906778587],
  [106.8584557609385, 10.636750692548096],
  [106.85532060163965, 10.63843121558604],
  [106.85390059285919, 10.63914168449141],
  [106.85205744217276, 10.639439392256277],
  [106.85061538733983, 10.639586327796925],
  [106.84826218632713, 10.639398359304602],
  [106.84600976333796, 10.638883644270761],
  [106.8435509114576, 10.638294166673873],
  [106.84207857664316, 10.637475237162922],
  [106.84109373586412, 10.636604146816916],
  [106.84072240649571, 10.63571163741579],
  [106.84056375466847, 10.63529836626794],
  [106.84005579923651, 10.633882616693478],
  [106.83945510831352, 10.63082978792784],
  [106.83879399933123, 10.62995654737522],
  [106.83803125994967, 10.628896282559065],
  [106.83493909852305, 10.627596386331149],
  [106.83164799021507, 10.627314055701019],
  [106.82763233282618, 10.62780961761918],
  [106.8245456773361, 10.628448399183538],
  [106.82243724111629, 10.630103958890713],
  [106.81867579396452, 10.634089824391095],
  [106.81535023840455, 10.6383703644259],
  [106.81251848213357, 10.642791192592833],
  [106.81180424307603, 10.645379507754967],
  [106.81128522765567, 10.647186593579521],
  [106.81036633663004, 10.650313433184031],
  [106.8084467026883, 10.654935589540665],
  [106.80594259573269, 10.657656848772495],
  [106.80477953623155, 10.658437282529615],
  [106.79741214522403, 10.662152109971135],
  [106.79464872146032, 10.664844865569043],
  [106.7945445055915, 10.664844762605075],
  [106.79135881071413, 10.667995132061295],
  [106.78888883083252, 10.669610825075688],
  [106.7853704417278, 10.671680709280423],
  [106.78226507376088, 10.673015055996055],
  [106.78129190860952, 10.673317797859632],
  [106.78056827795383, 10.673540352087556],
  [106.78016085590484, 10.673655614375138],
  //end ranh giới riêng

  // điểm cuối
  [106.77618326245297, 10.674680552668885],
];

export default { name, population, area, rings, symbol };

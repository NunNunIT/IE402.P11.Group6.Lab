// Chỉnh tên đia điểm
const name = "Thành Phố Thủ Đức"
// Chỉnh số dân ở đây
const population = 100000
// Chỉnh diện tích ở đây
const area = 123.45
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [64, 244, 208, 0.35],
}

// Thêm ranh giới ở đây
const rings = [[106.76773834, 10.74192715], [106.75878143, 10.74471092], [106.75190735, 10.741889], [106.74796295, 10.74188519], [106.74619293, 10.74274158], [106.74460602, 10.74485397], [106.7441864, 10.74769306], [106.74478149, 10.75098228], [106.75158691, 10.76091099], [106.75263977, 10.76358604], [106.75190735, 10.768116], [106.74765015, 10.77366161], [106.7432251, 10.7768116], [106.73961639, 10.77755737], [106.73681641, 10.77679062], [106.73523712, 10.774683], [106.73477173, 10.76678371], [106.73376465, 10.76266289], [106.73007965, 10.7598505], [106.72509766, 10.75899029], [106.7220459, 10.75926113], [106.71440887, 10.76251411], [106.71347809, 10.76309681], [106.70999146, 10.76650906], [106.70825195, 10.76972866], [106.7081604, 10.77058983], [106.70840454, 10.77524567], [106.71039581, 10.78187943], [106.71439362, 10.78490543], [106.72199249, 10.78732681], [106.72409058, 10.78896618], [106.72677612, 10.79364586], [106.72731018, 10.79893589], [106.72701263, 10.8003931], [106.72314453, 10.80614281], [106.72231293, 10.80980301], [106.72342682, 10.81380653], [106.72556305, 10.81674671], [106.72996521, 10.81935978], [106.73345184, 10.81918907], [106.73484802, 10.81756783], [106.73641205, 10.81276894], [106.73813629, 10.81022453], [106.74242401, 10.80854988], [106.74443817, 10.80844784], [106.74822998, 10.80968189], [106.75098419, 10.81287766], [106.75122833, 10.82818317], [106.74916077, 10.83242035], [106.74739838, 10.83353806], [106.73985291, 10.83552551], [106.73679352, 10.83350086], [106.73233795, 10.82651234], [106.72985077, 10.82418633], [106.72309875, 10.82098103], [106.71715546, 10.82025814], [106.71421051, 10.82079506], [106.71318817, 10.82117367], [106.70996857, 10.82375431], [106.70908356, 10.82560062], [106.70822906, 10.83372688], [106.70738983, 10.83579063], [106.70281219, 10.83913517], [106.70000458, 10.84080219], [106.69805908, 10.84364223], [106.69800568, 10.84747505], [106.6990509, 10.85001755], [106.70433044, 10.85171509], [106.71039581, 10.85112], [106.71403503, 10.85153198], [106.71643829, 10.8532753], [106.71813202, 10.85600662], [106.71714783, 10.86139011], [106.71543884, 10.86406136], [106.71322632, 10.86588955], [106.7155838, 10.86853313], [106.71492004, 10.87223148], [106.71539307, 10.87276077], [106.72353363, 10.87184715], [106.72124481, 10.8763628], [106.71528625, 10.87747288], [106.71405792, 10.87696648], [106.71380615, 10.87786388], [106.71259308, 10.87794971], [106.71379852, 10.87914944], [106.71795654, 10.88085461], [106.71658325, 10.88471127], [106.71753693, 10.8878336], [106.71560669, 10.887743], [106.71447754, 10.88678932], [106.71382141, 10.88752747], [106.71450043, 10.88816833], [106.71310425, 10.88988972], [106.71761322, 10.89638042], [106.72640991, 10.89070511], [106.72754669, 10.89013386], [106.72846222, 10.89092541], [106.72924805, 10.88943386], [106.73244476, 10.89064026], [106.73131561, 10.8859539], [106.73668671, 10.88458538], [106.73420715, 10.88051987], [106.73815155, 10.87915993], [106.73966217, 10.88103199], [106.74118805, 10.88135529], [106.74299622, 10.88031864], [106.74504852, 10.88158226], [106.74568176, 10.88077736], [106.74468994, 10.88007259], [106.74718475, 10.87738514], [106.74849701, 10.8782692], [106.74942017, 10.87678528], [106.75043488, 10.87722492], [106.75136566, 10.87548447], [106.7464447, 10.87387753], [106.74704742, 10.87207031], [106.7460022, 10.87172985], [106.74793243, 10.86929798], [106.74790192, 10.8683691], [106.74871063, 10.86563492], [106.75052643, 10.86402607], [106.75122833, 10.8644352], [106.75176239, 10.86336994], [106.75463867, 10.86631012], [106.76221466, 10.86726284], [106.76328278, 10.86993313], [106.76039124, 10.87238789], [106.76180267, 10.87439537], [106.76133728, 10.87455368], [106.76192474, 10.87556076], [106.76141357, 10.87851048], [106.76196289, 10.87871075], [106.76052856, 10.8812542], [106.76455688, 10.88485432], [106.76625061, 10.88915539], [106.76689148, 10.89153862], [106.76769257, 10.89162445], [106.76727295, 10.89249706], [106.76843262, 10.89233589], [106.76843262, 10.89360428], [106.76967621, 10.8938446], [106.77554321, 10.88721561], [106.77661896, 10.88508797], [106.78053284, 10.88149929], [106.78208923, 10.8764019], [106.78191376, 10.87396526], [106.77994537, 10.86838722], [106.78775787, 10.86721039], [106.78803253, 10.87037277], [106.78892517, 10.87195206], [106.79216766, 10.87197495], [106.7949295, 10.87353802], [106.79750824, 10.87322235], [106.7986145, 10.872015], [106.80128479, 10.87359619], [106.80441284, 10.87370396], [106.80524445, 10.87504578], [106.80857086, 10.87302685], [106.81279755, 10.8788271], [106.81381226, 10.87842369], [106.81630707, 10.88135242], [106.81729889, 10.88133144], [106.81780243, 10.88422775], [106.81894684, 10.8844471], [106.81934357, 10.88592434], [106.82007599, 10.88646221], [106.8208847, 10.88575268], [106.82183075, 10.88600445], [106.82492065, 10.88821602], [106.82376099, 10.89202404], [106.82512665, 10.89292336], [106.82508087, 10.89380932], [106.82582092, 10.89369392], [106.82678223, 10.89473915], [106.82804108, 10.89422989], [106.82971191, 10.89479542], [106.83392334, 10.89829731], [106.84024048, 10.89892864], [106.84301758, 10.89128685], [106.84358978, 10.88396454], [106.8459549, 10.88228989], [106.85106659, 10.87628269], [106.85076141, 10.87308121], [106.84673309, 10.86487675], [106.84957123, 10.85624123], [106.85668945, 10.84267807], [106.87164307, 10.82619095], [106.87273407, 10.82500172], [106.88011932, 10.81694031], [106.88132477, 10.81423092], [106.88191986, 10.80848885], [106.88097382, 10.80474186], [106.87821198, 10.80054379], [106.8653183, 10.78910923], [106.86473083, 10.78592014], [106.86611176, 10.78279209], [106.87218475, 10.77763748], [106.8742218, 10.77422905], [106.8745575, 10.76952076], [106.87258911, 10.76633263], [106.86807251, 10.76439762], [106.86495972, 10.76453209], [106.86302948, 10.76538181], [106.85695648, 10.7717371], [106.85192108, 10.77464294], [106.84824371, 10.77538395], [106.84568787, 10.7751255], [106.84033966, 10.7733078], [106.84033966, 10.7733078], [106.83167267, 10.76485157], [106.8300705, 10.76191044], [106.82808685, 10.76014996], [106.82434082, 10.75955772], [106.82314301, 10.76159], [106.82362366, 10.76660156], [106.82608795, 10.77394104], [106.8248291, 10.77861309], [106.82201385, 10.78080463], [106.81954193, 10.78093338], [106.81639862, 10.77990532], [106.81008911, 10.7746172], [106.80557251, 10.7700882], [106.80329895, 10.76251888], [106.79915619, 10.75899315], [106.79125214, 10.75560379], [106.77622223, 10.74871922], [106.76773834, 10.74192715]];

export default { name, population, area, rings, symbol };

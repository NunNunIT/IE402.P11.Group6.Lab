const data = [
  {
    "title": "136 BU\u0300I v\u0103n BA",
    "address": "14 B\u00f9i V\u0103n Ba, T\u00e2n Thu\u1eadn \u0110\u00f4ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7496688,
    "location/lng": 106.7320576
  },
  {
    "title": "2 \u0110\u00f4 Qu\u00e1n",
    "address": "80 \u0110. S\u1ed1 23, Khu ph\u1ed1 4, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Gian h\u00e0ng rong",
    "location/lat": 10.8265141,
    "location/lng": 106.7284122
  },
  {
    "title": "255 FOOD GARDEN",
    "address": "255A Nguy\u1ec5n V\u0103n L\u01b0\u1ee3ng, Ph\u01b0\u1eddng 10, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 76000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8385524,
    "location/lng": 106.670288
  },
  {
    "title": "5ku Farm",
    "address": "1/114 A \u0110\u01b0\u1eddng 103 Th\u1ea1nh M\u1ef9 L\u1ee3i, P, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7585445,
    "location/lng": 106.7540816
  },
  {
    "title": "602 Qu\u00e1n",
    "address": "543 \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8005688,
    "location/lng": 106.7166558
  },
  {
    "title": "A Ba",
    "address": "VRFF+GV5, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8737687,
    "location/lng": 106.8247431
  },
  {
    "title": "A Mao _ M\u00ec B\u00f2 \u0110\u00e0i Loan \u53f0\u7063\u725b\u8089\u9eb5 (Ch\u1ee7 Nh\u1eadt ngh\u1ec9 _ Sunday off)",
    "address": "80 L\u00ea H\u1ed3ng Phong, Ph\u01b0\u1eddng 2, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa n\u1eeda bu\u1ed5i",
    "location/lat": 10.7564793,
    "location/lng": 106.6784725
  },
  {
    "title": "A \u0110\u1eadu Qu\u00e1n - B\u00fan \u0111\u1eadu m\u1eafm t\u00f4m",
    "address": "462 Nguy\u1ec5n Th\u1ecb \u0110\u1ecbnh, Ph\u01b0\u1eddng Th\u1ea1nh M\u1ef9 L\u1ee3i, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7809356,
    "location/lng": 106.7618187
  },
  {
    "title": "ALFA Coffee & Bistro",
    "address": "8 H\u1ebbm 148 \u0110\u01b0\u1eddng s\u1ed1 59, P.14, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Qu\u00e1n \u0103n d\u00e0nh cho tr\u1ebb em, C\u01a1 s\u1edf rang c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8553856,
    "location/lng": 106.6531366
  },
  {
    "title": "Alibaba Buffet N\u01b0\u1edbng T\u00e2n Ph\u00fa - 320 T\u00e2n K\u1ef3 T\u00e2n Qu\u00ed",
    "address": "320 \u0110. T\u00e2n K\u1ef3 T\u00e2n Qu\u00fd, P. Ph\u00fa Thu\u1eadn, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8018261,
    "location/lng": 106.6251654
  },
  {
    "title": "Amor Resort Wedding & Event Garden",
    "address": "61A Nguy\u1ec5n V\u0103n \u0110\u1eadu, Ph\u01b0\u1eddng 6, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n c\u00e0 ph\u00ea",
    "location/lat": 10.808018,
    "location/lng": 106.687727
  },
  {
    "title": "An Lam Retreats Saigon River",
    "address": "21/4 Trung Street Vinh Phu Ward Thuan An City, B\u00ecnh D\u01b0\u01a1ng, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, N\u01a1i t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Nh\u00e0 h\u00e0ng cao c\u1ea5p, Kh\u00e1ch s\u1ea1n ngh\u1ec9 d\u01b0\u1ee1ng",
    "location/lat": 10.8709526,
    "location/lng": 106.6991153
  },
  {
    "title": "An L\u1ed9c Qu\u00e1n",
    "address": "21 \u0110\u01b0\u1eddng Nguy\u1ec5n V\u0103n Dung, Ph\u01b0\u1eddng 6, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.8491023,
    "location/lng": 106.6800741
  },
  {
    "title": "Anh Coffee Roastery",
    "address": "200 Pasteur, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, C\u1eeda h\u00e0ng b\u00e1nh, Nh\u00e0 h\u00e0ng \u0111i\u1ec3m t\u00e2m, C\u1eeda h\u00e0ng b\u00e1nh ng\u1ecdt",
    "location/lat": 10.7829311,
    "location/lng": 106.6934913
  },
  {
    "title": "Ao V\u01b0\u1eddn quan R\u1eeda Q9",
    "address": "24/25 \u0110\u01b0\u1eddng L\u00f2 Lu, Tr\u01b0\u1eddng Th\u1ea1nh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8234726,
    "location/lng": 106.8285368
  },
  {
    "title": "Artisan",
    "address": "11 Nguy\u1ec5n B\u00ednh, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Ti\u1ec7m b\u00e1nh, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.7260234,
    "location/lng": 106.7105486
  },
  {
    "title": "Asiana Plaza (T\u00e2n Ph\u00fa)",
    "address": "286 \u0110. V\u01b0\u1eddn L\u00e0i, Ph\u00fa Th\u1ecd Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7882524,
    "location/lng": 106.6254096
  },
  {
    "title": "BA G\u00c1C Vietnamese Grill & Beer L\u00ca QU\u00dd \u0110\u00d4N",
    "address": "31 L\u00ea Qu\u00fd \u0110\u00f4n, V\u00f5 Th\u1ecb S\u00e1u, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n bia s\u00e2n v\u01b0\u1eddn",
    "location/lat": 10.7816939,
    "location/lng": 106.6899251
  },
  {
    "title": "BBQ GARDEN | L\u1ea8U - N\u01af\u1edaNG KH\u00d4NG KH\u00d3I G\u00d2 V\u1ea4P",
    "address": "108/4 Nguy\u1ec5n V\u0103n Kh\u1ed1i, Ph\u01b0\u1eddng 9, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.843191,
    "location/lng": 106.6564299
  },
  {
    "title": "BBQ House - Plan K",
    "address": "Chung C\u01b0 My\u0303 Phu\u0301c, 66 L\u00fd Long T\u01b0\u1eddng, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.7233748,
    "location/lng": 106.7098252
  },
  {
    "title": "BBQ \u00d4NG M\u1eacP V\u00d5 V\u0102N KI\u1ec6T - \ub6b1\ubcf4\uc9d1 \ubcf4\ubc18\ub07c\uc5e3",
    "address": "372 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, Ph\u01b0\u1eddng C\u00f4 Giang, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7601453,
    "location/lng": 106.6942334
  },
  {
    "title": "BENARAS Indian Restaurant",
    "address": "21B \u0110. T\u00f4n \u0110\u1ee9c Th\u1eafng, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u1ea4n \u0110\u1ed9, Nh\u00e0 h\u00e0ng l\u1ee5c \u0111\u1ecba, Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7823738,
    "location/lng": 106.7057615
  },
  {
    "title": "BIA TUY\u1ebeT Q9 - \u0110\u1eb7ng V\u0103n Bi",
    "address": "36 \u0110\u1eb7ng V\u0103n Bi, B\u00ecnh Th\u1ecd, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8407487,
    "location/lng": 106.7656427
  },
  {
    "title": "BIG PIG | Bar - BBQ - Beer (46 Truong Son, Tan Binh District)",
    "address": "46 Tr\u01b0\u1eddng S\u01a1n, P.2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n bar, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u, C\u1eeda h\u00e0ng giao pizza, Bar th\u1ec3 thao, Qu\u00e1n r\u01b0\u1ee3u",
    "location/lat": 10.8099701,
    "location/lng": 106.665037
  },
  {
    "title": "BUFFET Ng\u00f3i X\u01b0a",
    "address": "3 Nguy\u1ec5n V\u0103n On, TT. C\u1ee7 Chi, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.970063,
    "location/lng": 106.4939456
  },
  {
    "title": "Ba H\u00ed S\u00e0i G\u00f2n",
    "address": "93 V\u1ea1n Ki\u1ebfp, Ph\u01b0\u1eddng 3, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.799092,
    "location/lng": 106.6936626
  },
  {
    "title": "Banana Mama Rooftop Bar & Kitchen Saigon",
    "address": "ABC, 102, \u0110. C\u1ed1ng Qu\u1ef3nh, Ph\u01b0\u1eddng Ph\u1ea1m Ng\u0169 L\u00e3o, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bar, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7649165,
    "location/lng": 106.6905357
  },
  {
    "title": "Baoz Dimsum",
    "address": "82-84-86-88 \u0110. Nguy\u1ec5n Tri Ph\u01b0\u01a1ng, st, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72700, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0111i\u1ec3m t\u00e2m, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7531011,
    "location/lng": 106.6696548
  },
  {
    "title": "Baoz Dimsum",
    "address": "297 - 299 \u0110. L\u00ea \u0110\u1ea1i H\u00e0nh, Ph\u01b0\u1eddng 13, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng \u0111i\u1ec3m t\u00e2m",
    "location/lat": 10.7649121,
    "location/lng": 106.6549606
  },
  {
    "title": "Baseball Cage - L\u1ed3ng b\u00f3ng ch\u00e0y t\u1ef1 \u0111\u1ed9ng",
    "address": "479 L\u00ea V\u0103n L\u01b0\u01a1ng, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, \u0110i\u1ec3m thu h\u00fat kh\u00e1ch du l\u1ecbch",
    "location/lat": 10.7363045,
    "location/lng": 106.7030225
  },
  {
    "title": "BeefSteak 100gram",
    "address": "221/5 \u0110. L\u00ea \u0110\u1ee9c Th\u1ecd, Ph\u01b0\u1eddng 17, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8392311,
    "location/lng": 106.6794355
  },
  {
    "title": "Beefsteak 100g",
    "address": "110 S\u1ed1 49, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7416337,
    "location/lng": 106.7140031
  },
  {
    "title": "Belgo",
    "address": "159A \u0110. Nguy\u1ec5n V\u0103n Th\u1ee7, \u0110a Kao, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng qu\u00e1n r\u01b0\u1ee3u d\u00e0nh cho ng\u01b0\u1eddi s\u00e0nh \u0103n, C\u1eeda h\u00e0ng bia",
    "location/lat": 10.7886841,
    "location/lng": 106.6980578
  },
  {
    "title": "Bella Italia Pizza and Restaurant",
    "address": "4 M\u1ef9 Ph\u00fa 2C, Ph\u00fa M\u1ef9, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u00fd, C\u1eeda h\u00e0ng giao pizza, Nh\u00e0 h\u00e0ng pizza, C\u1eeda h\u00e0ng b\u00e1n pizza mang v\u1ec1",
    "location/lat": 10.7182639,
    "location/lng": 106.7274742
  },
  {
    "title": "Ben Nay Restaurant",
    "address": "7 \u0110. T\u1ec9nh L\u1ed9 15, Ph\u00fa Ho\u00e0 \u0110\u00f4ng, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0133843,
    "location/lng": 106.5646575
  },
  {
    "title": "Bia H\u01a1i H\u00e0 N\u1ed9i",
    "address": "116A H\u1ed3ng H\u00e0, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8098591,
    "location/lng": 106.6708431
  },
  {
    "title": "Bia T\u01b0\u01a1i 3000",
    "address": "VM35+C72, \u0110. L\u00ea \u0110\u1ee9c Th\u1ecd, Ph\u01b0\u1eddng 13, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8535203,
    "location/lng": 106.658142
  },
  {
    "title": "Bia T\u01b0\u01a1i B\u1ebfn H\u1ea3i",
    "address": "RMFW+6QC, L\u01b0u ng\u1ecdc quy\u1ebfn, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8230691,
    "location/lng": 106.69688
  },
  {
    "title": "BinGo Buffet",
    "address": "46 \u0110\u01b0\u1eddng s\u1ed1 53, Khu \u0111\u1ecbnh c\u01b0 T\u00e2n Quy \u0110\u00f4ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.7371919,
    "location/lng": 106.7080886
  },
  {
    "title": "Bi\u1ec3n Xanh Qu\u1eadn 9 cn1",
    "address": "106/2 \u0110. 79, Ph\u01b0\u1edbc Long B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.833251,
    "location/lng": 106.7694627
  },
  {
    "title": "Bo Song Moi Seafood",
    "address": "24 Nguy\u1ec5n Xi\u1ec3n, Long B\u00ecnh, Qu\u1eadn 9 Long B\u00ecnh, Qu\u1eadn 9 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8734266,
    "location/lng": 106.8415824
  },
  {
    "title": "Bocaxa beefsteak G\u00f2 V\u1ea5p",
    "address": "220/64 Nguy\u1ec5n Oanh, Ph\u01b0\u1eddng 17, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng M\u1ef9, Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng b\u00edt t\u1ebft",
    "location/lat": 10.8361837,
    "location/lng": 106.6777876
  },
  {
    "title": "Boomerang Bistro Saigon",
    "address": "107 \u0110 T\u00f4n D\u1eadt Ti\u00ean, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72908, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ch\u00e2u \u00c2u hi\u1ec7n \u0111\u1ea1i, Bar & Grill, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7262831,
    "location/lng": 106.7204036
  },
  {
    "title": "Buffet 123K N\u01af\u1edaNG NGON - B\u00e0 \u0110i\u1ec3m",
    "address": "7 Phan V\u0103n H\u1edbn, B\u00e0 \u0110i\u1ec3m, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8412877,
    "location/lng": 106.5975545
  },
  {
    "title": "Buffet H\u1ea3i S\u1ea3n Ho\u00e0ng Gia 219k H\u1ea3i S\u1ea3n N\u01b0\u1edbng C\u1ef1c Ngon",
    "address": "135 \u0110. L\u0169y B\u00e1n B\u00edch, T\u00e2n Th\u1edbi Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng, Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7652212,
    "location/lng": 106.6320673
  },
  {
    "title": "Buffet Kh\u00f3i",
    "address": "1068 \u0110. Nguy\u1ec5n V\u0103n Linh, T\u00e2n Thu\u1eadn T\u00e2y, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7292636,
    "location/lng": 106.7017259
  },
  {
    "title": "Buffet N\u01b0\u1edbng L\u00f2 G\u1ea1ch",
    "address": "233 Nguy\u1ec5n Th\u00e1i S\u01a1n, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8255085,
    "location/lng": 106.6881739
  },
  {
    "title": "Buffet Th\u00e0nh L\u00f9n",
    "address": "722a \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.797057,
    "location/lng": 106.7219676
  },
  {
    "title": "Buffet Xi\u00ean s\u1ea1ch 69k",
    "address": "440/2 \u0110. Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.844991,
    "location/lng": 106.665205
  },
  {
    "title": "Buffet l\u1ea9u Lok Lok - L\u1ea9u 1 ng\u01b0\u1eddi",
    "address": "830 \u0110. S\u01b0 V\u1ea1n H\u1ea1nh, Ph\u01b0\u1eddng 13, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.7769466,
    "location/lng": 106.6664808
  },
  {
    "title": "Buffet \u0110\u1ea1i D\u01b0\u01a1ng CN3",
    "address": "26 T\u00e2y Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700901, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8188705,
    "location/lng": 106.6281
  },
  {
    "title": "Buffet \u1ed0c Anh M\u1eadp 139k",
    "address": "895a \u0110. T\u1ea1 Quang B\u1eedu, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7342371,
    "location/lng": 106.6627646
  },
  {
    "title": "Burger King",
    "address": "RM88+G2R, \u0110. B, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8163708,
    "location/lng": 106.6650108
  },
  {
    "title": "B\u00c1NH CU\u1ed0N T\u00c2Y S\u01a0N",
    "address": "44 Tr\u01b0\u01a1ng C\u00f4ng \u0110\u1ecbnh, Ph\u01b0\u1eddng 14, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.797446,
    "location/lng": 106.641229
  },
  {
    "title": "B\u00c1NH \u00c9P HU\u1ebe BOO BOO",
    "address": "121d \u0110. T\u00e2n Th\u1eafng, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.800038,
    "location/lng": 106.616798
  },
  {
    "title": "B\u00daN CH\u1ea2 H\u00c0 N\u1ed8I - B\u00daN C\u00c1 R\u00d4 \u0110\u1ed2NG.",
    "address": "45 \u0110. S\u1ed1 9, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8427321,
    "location/lng": 106.6677314
  },
  {
    "title": "B\u00daN M\u1eaeM 444",
    "address": "375 L\u00ea Quang \u0110\u1ecbnh, Ph\u01b0\u1eddng 5, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.813153,
    "location/lng": 106.6896733
  },
  {
    "title": "B\u00daN RI\u00caU C\u00d4 H\u01af\u01a0NG B\u00c9O - QU\u1eacN 7",
    "address": "76 \u0110\u01b0\u1eddng s\u1ed1 79, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7402884,
    "location/lng": 106.7096199
  },
  {
    "title": "B\u00e1nh Canh Gia Lai",
    "address": "QMM5+WG9, \u0110\u1ea1i Ngh\u0129a, Ph\u01b0\u1eddng 6, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.7847889,
    "location/lng": 106.6588588
  },
  {
    "title": "B\u00e1nh Canh Tr\u1ea3ng B\u00e0ng Ho\u00e0ng Dung 2",
    "address": "187 QL22, T\u00e2n Hi\u1ec7p, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9076435,
    "location/lng": 106.5707068
  },
  {
    "title": "B\u00e1nh C\u0103n 79",
    "address": "64 \u0110. Ho\u00e0ng Di\u1ec7u, ph\u01b0\u1eddng 6, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.7630342,
    "location/lng": 106.7035254
  },
  {
    "title": "B\u00e1nh M\u00ec Ch\u1ea3o C\u00f4 3 H\u1eadu",
    "address": "36 \u0110\u01b0\u1eddng S\u1ed1 18, Ph\u01b0\u1eddng 8, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8389593,
    "location/lng": 106.6564821
  },
  {
    "title": "B\u00e1nh Tr\u00e1ng Ch\u1ea5m Ch\u1ecb Hai",
    "address": "209/94/1 \u0110. T\u00f4n Th\u1ea5t Thuy\u1ebft, Ph\u01b0\u1eddng 3, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7552739,
    "location/lng": 106.6982989
  },
  {
    "title": "B\u00e1nh Tr\u00e1ng Ch\u1ecb H\u01b0\u01a1ng",
    "address": "146/27 \u0110.Nguy\u1ec5n Ch\u1ebf Ngh\u0129a, Ph\u01b0\u1eddng 12, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.741999,
    "location/lng": 106.6532579
  },
  {
    "title": "B\u00e1nh Tr\u00e1ng N\u01b0\u1edbng Thanh \u0110a",
    "address": "RP7C+78H, LO S, Thanh \u0110a, Ph\u01b0\u1eddng 27, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.813189,
    "location/lng": 106.7208505
  },
  {
    "title": "B\u00e1nh Tr\u00e1ng Tr\u1ed9n - Cu\u1ed1n Ngon",
    "address": "793 Tr\u1ea7n Xu\u00e2n So\u1ea1n, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7495557,
    "location/lng": 106.6995051
  },
  {
    "title": "B\u00e1nh Tr\u00e1ng Tr\u1ed9n C\u00f4 N\u0103m",
    "address": "45 L\u00ea Th\u1ecb H\u1ed3ng, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng b\u00e1n \u0111\u1ed3 \u0103n mang v\u1ec1",
    "location/lat": 10.83544,
    "location/lng": 106.6788133
  },
  {
    "title": "B\u00e1nh Tr\u00e1ng Tr\u1ed9n Tr\u1ee9ng G\u00e0 N\u01b0\u1edbng Mr.Pear",
    "address": "27 72 \u0110. S\u1ed1 9, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8422065,
    "location/lng": 106.6693151
  },
  {
    "title": "B\u00e1nh b\u1ed9t l\u1ecdc Bu\u00f4n M\u00ea",
    "address": "170 Phan V\u0103n H\u00e2n, Ph\u01b0\u1eddng 17, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7941153,
    "location/lng": 106.7048281
  },
  {
    "title": "B\u00e1nh canh cua \u00dat L\u1ec7",
    "address": "204-206-208-210 \u0110. T\u00f4 Hi\u1ebfn Th\u00e0nh, Ph\u01b0\u1eddng 15, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7792651,
    "location/lng": 106.6670108
  },
  {
    "title": "B\u00e1nh canh c\u00e1 l\u00f3c C\u01b0\u1eddng \u0110\u00f4 La",
    "address": "42 L\u00ea Th\u1ecb H\u1ed3ng, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8342688,
    "location/lng": 106.6777658
  },
  {
    "title": "B\u00e1nh canh tr\u00ed nh\u1ecb",
    "address": "187/19 Nguy\u1ec5n Th\u00e1i S\u01a1n, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8294446,
    "location/lng": 106.6972329
  },
  {
    "title": "B\u00e1nh kh\u1ecdt \u00dat Gi\u00e0u",
    "address": "25/55 V\u0103n Cao, Ph\u00fa Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.783569,
    "location/lng": 106.6198034
  },
  {
    "title": "B\u00e1nh m\u00ec \u00dat Th\u01b0\u01a1ng - Ut Thuong ' s Vietnamese Bread",
    "address": "102 \u0110o\u00e0n V\u0103n B\u01a1, Ph\u01b0\u1eddng 9, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Ti\u1ec7m b\u00e1nh",
    "location/lat": 10.7636196,
    "location/lng": 106.7033417
  },
  {
    "title": "B\u00e1nh tr\u00e1ng tr\u1ed9n m\u1ee1 h\u00e0nh C\u00f4 H\u1ea1nh H\u00f3c m\u00f4n",
    "address": "\u0110\u01b0\u1eddng 01- Trung Ch\u00e1nh/21/5C \u1ea4p M\u1ef9 H\u00f2a 1, Trung Ch\u00e1nh, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8623521,
    "location/lng": 106.6082988
  },
  {
    "title": "B\u00e1nh x\u00e8o rau r\u1eebng A \u0110\u1ea1t",
    "address": "1 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 3, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8146297,
    "location/lng": 106.6794777
  },
  {
    "title": "B\u00e1nh \u00e9p Hu\u1ebf",
    "address": "49 \u0110\u01b0\u1eddng Tr\u1ea7n T\u1ea5n, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7966034,
    "location/lng": 106.6345027
  },
  {
    "title": "B\u00e1nh \u01af\u1edbt L\u00f2ng G\u00e0 \u0110\u00e0 L\u1ea1t",
    "address": "137 \u0110\u01b0\u1eddng s\u1ed1 39, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7438388,
    "location/lng": 106.71203
  },
  {
    "title": "B\u00e8 Ph\u01b0\u1edbc Thi\u1ec7n",
    "address": "B\u00e8, Ph\u01b0\u1edbc Thi\u1ec7n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n c\u00e1",
    "location/lat": 10.8462838,
    "location/lng": 106.8491489
  },
  {
    "title": "B\u00ea Thui Gi\u00f3 M\u00f9a",
    "address": "70 \u0110. Ph\u00fa Th\u1ecd H\u00f2a, Ph\u00fa Th\u1ecd Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7832416,
    "location/lng": 106.6344179
  },
  {
    "title": "B\u00ecnh Kh\u00e1nh By Night",
    "address": "26 \u0110. Mai Ch\u00ed Th\u1ecd, Ph\u01b0\u1eddng B\u00ecnh Kh\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7808226,
    "location/lng": 106.7394252
  },
  {
    "title": "B\u00ecnh Qu\u1edbi qu\u00ea t\u00f4i",
    "address": "480/65/8 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8193061,
    "location/lng": 106.7408584
  },
  {
    "title": "B\u00f2 Ch\u1ecb Ba",
    "address": "425 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8214467,
    "location/lng": 106.6963164
  },
  {
    "title": "B\u00f2 L\u00e1 L\u1ed1t -M\u1ee1 Ch\u00e0i",
    "address": "242 \u0110. S\u1ed1 8, Linh Xu\u00e2n, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8755939,
    "location/lng": 106.7778939
  },
  {
    "title": "B\u00f2 N\u01b0\u1edbng Ph\u1ed1 - Nguy\u1ec5n Oanh",
    "address": "164 Nguy\u1ec5n Oanh, Ph\u01b0\u1eddng 17, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8318765,
    "location/lng": 106.6770692
  },
  {
    "title": "B\u00f2 N\u01b0\u1edbng Ph\u1ed1 - T\u00e2n Ph\u00fa",
    "address": "88A G\u00f2 D\u1ea7u, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 760400, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.795977,
    "location/lng": 106.625951
  },
  {
    "title": "B\u00f2 T\u01a1 - G\u00e0 Ta 69 (ch\u00fa Th\u00e0nh)",
    "address": "110/39 S\u1ed1 30, Ph\u01b0\u1eddng 6, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8458029,
    "location/lng": 106.680265
  },
  {
    "title": "B\u00f2 T\u01a1 Ch\u00ednh c\u01b0",
    "address": "t\u1ed5 1, 2 Ph\u1ea1m V\u0103n Ch\u00e8o, khu pho 7, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9742564,
    "location/lng": 106.4946724
  },
  {
    "title": "B\u00f2 T\u01a1 Nh\u00e2n Ph\u00e1t",
    "address": "160 \u0110. \u0110\u1eb7ng Nguy\u00ean C\u1ea9n, Ph\u01b0\u1eddng 13, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7532236,
    "location/lng": 106.6316979
  },
  {
    "title": "B\u00f2 T\u01a1 Nh\u00e2n Ph\u00e1t - 257 Tr\u01b0\u01a1ng V\u0129nh K\u00fd, P.T\u00e2n Th\u00e0nh, Q.T\u00e2n Ph\u00fa",
    "address": "257 Tr\u01b0\u01a1ng V\u0129nh K\u00fd, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7940497,
    "location/lng": 106.6308573
  },
  {
    "title": "B\u00f2 T\u01a1 Qu\u00e1n M\u1ed9c - T\u00e2n Ph\u00fa",
    "address": "111A G\u00f2 D\u1ea7u, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.795826,
    "location/lng": 106.6242438
  },
  {
    "title": "B\u00f2 T\u01a1 Qu\u00e1n M\u1ed9c 43-45 Nguy\u1ec5n Th\u1ecb Th\u1eadp ,P.T\u00e2n H\u01b0ng",
    "address": "45 Nguy\u1ec5n Th\u1ecb Th\u1eadp, Khu \u0111\u00f4 th\u1ecb Him Lam, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7406331,
    "location/lng": 106.6986267
  },
  {
    "title": "B\u00f2 T\u01a1 \u00dat Ng\u00e2n",
    "address": "69 Nguy\u1ec5n Th\u1ecb B\u00fap, T\u00e2n Ch\u00e1nh Hi\u1ec7p, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.871794,
    "location/lng": 106.6335195
  },
  {
    "title": "B\u00f2 b\u1edd k\u00e8",
    "address": "VM36+XVW, Ph\u01b0\u1eddng 13, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8549823,
    "location/lng": 106.6622009
  },
  {
    "title": "B\u00f2 t\u01a1 H\u1ea3o H\u1ea3o",
    "address": "Nguy\u1ec5n Th\u1ecb R\u00e0nh, Nhu\u1eadn \u0110\u1ee9c, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0410356,
    "location/lng": 106.4852434
  },
  {
    "title": "B\u00f2 \u00dat Den C\u1ee7 Chi",
    "address": "X9VJ+JWH, Th\u00e1i M\u1ef9, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9940685,
    "location/lng": 106.382361
  },
  {
    "title": "B\u00fan B\u00f2 Ch\u1ea3 Gh\u1eb9 7 Ghi\u1ec1n",
    "address": "111 L\u00ea V\u0103n Th\u1ecd, Ph\u01b0\u1eddng 8, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.839459,
    "location/lng": 106.657339
  },
  {
    "title": "B\u00fan B\u00f2 G\u00e1nh - 110 L\u00fd Ch\u00ednh Th\u1eafng",
    "address": "110 L\u00fd Ch\u00ednh Th\u1eafng, Ph\u01b0\u1eddng 8, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7890863,
    "location/lng": 106.6853027
  },
  {
    "title": "B\u00fan Qu\u1eady KI\u1ebeN - X\u00c2Y Sai Gon",
    "address": "12 \u0110. Nguy\u1ec5n Th\u1ecb Minh Khai, \u0110a Kao, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7879456,
    "location/lng": 106.7027084
  },
  {
    "title": "B\u00fan Th\u00e1i H\u1ea3i S\u1ea3n",
    "address": "937C, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7340183,
    "location/lng": 106.6575556
  },
  {
    "title": "B\u00fan Th\u1ecbt N\u01b0\u1edbng Ch\u1ecb Tuy\u1ec1n",
    "address": "175c C\u00f4 Giang, Ph\u01b0\u1eddng C\u00f4 Giang, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.761804,
    "location/lng": 106.693591
  },
  {
    "title": "B\u00fan b\u00f2 C\u00f4 H\u00e0/Co Ha beef noodle soup",
    "address": "L\u00f4 2, C\u01b0 x\u00e1 Thanh \u0110a, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa n\u1eeda bu\u1ed5i",
    "location/lat": 10.8184327,
    "location/lng": 106.7173854
  },
  {
    "title": "B\u00fan b\u00f2 Ng\u1ecdc Dung",
    "address": "504-506 Ho\u00e0ng H\u1eefu Nam, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8740724,
    "location/lng": 106.8151808
  },
  {
    "title": "B\u00fan ch\u1ea3 H\u00e0 N\u1ed9i - Ph\u00fa M\u1ef9 H\u01b0ng",
    "address": "34 Cao Tri\u1ec1u Ph\u00e1t, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.7320579,
    "location/lng": 106.709078
  },
  {
    "title": "B\u00fan ch\u1ea3 H\u00e0 N\u1ed9i Xu\u00e2n T\u1ee9",
    "address": "26A2 B\u00f9i Th\u1ecb Xu\u00e2n, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7995669,
    "location/lng": 106.6620785
  },
  {
    "title": "B\u00fan ch\u1ea3 h\u00e0 n\u1ed9i 222",
    "address": "02 \u0110. S\u1ed1 17, khu ph\u1ed1 6, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8375127,
    "location/lng": 106.7249327
  },
  {
    "title": "B\u00fan c\u00e1 R\u00f4 \u0111\u1ed3ng",
    "address": "Chuy\u1ec3n v\u1ec1 t\u1eeb 205, 172 Nguy\u1ec5n C\u1eedu \u0110\u00e0m, P, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8004308,
    "location/lng": 106.6280136
  },
  {
    "title": "B\u00fan m\u1ecdc C\u1ea7u B\u00e0 T\u00e0ng Qu\u1eadn 8",
    "address": "2429A Ph\u1ea1m Th\u1ebf Hi\u1ec3n, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7299812,
    "location/lng": 106.6393324
  },
  {
    "title": "B\u00fan n\u01b0\u1edbc t\u00f4m b\u00f2 c\u00f4 C\u00f3",
    "address": "H\u1ebbm 248 Tr\u1ea7n K\u1ebf X\u01b0\u01a1ng, Ph\u01b0\u1eddng 7, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8022248,
    "location/lng": 106.6915287
  },
  {
    "title": "B\u00fan th\u1ecbt n\u01b0\u1edbng Ki\u1ec1u B\u1ea3o",
    "address": "12 \u0110. T\u00f4 Hi\u1ebfn Th\u00e0nh, Ph\u01b0\u1eddng 15, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7764502,
    "location/lng": 106.6654471
  },
  {
    "title": "B\u00fan \u0110\u1eadu C\u1ea7u G\u1ed7",
    "address": "444 Phan X\u00edch Long, Ph\u01b0\u1eddng 2, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Khu \u0103n u\u1ed1ng",
    "location/lat": 10.8006446,
    "location/lng": 106.6844105
  },
  {
    "title": "B\u00fan \u0110\u1eadu M\u1eafm T\u00f4m - L\u00e0ng V\u00f2ng",
    "address": "260 T\u00e2n H\u01b0\u01a1ng, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7902583,
    "location/lng": 106.6208881
  },
  {
    "title": "B\u00fan \u0110\u1eadu X\u01b0a",
    "address": "111B \u0110\u01b0\u1eddng s\u1ed1 79, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.7402312,
    "location/lng": 106.7084039
  },
  {
    "title": "B\u00fan \u0111\u1eadu Ch\u1ecb \u0110\u1ea1i",
    "address": "47/8 \u0110. 449, T\u0103ng Nh\u01a1n Ph\u00fa A, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.8478772,
    "location/lng": 106.7937646
  },
  {
    "title": "B\u00fan \u0111\u1eadu M\u1eb9t",
    "address": "554 L\u00ea V\u0103n L\u01b0\u01a1ng, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7328129,
    "location/lng": 106.7013108
  },
  {
    "title": "B\u00fan \u0111\u1eadu m\u1eafm t\u00f4m M\u1ea1c V\u0103n Khoa",
    "address": "76 QL13, Ph\u01b0\u1eddng 26, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8120851,
    "location/lng": 106.7126639
  },
  {
    "title": "B\u00fan \u0111\u1eadu ng\u1ef1 thi\u1ec7n",
    "address": "81 \u0110. V\u00e0nh \u0110ai T\u00e2y, Khu Ph\u1ed1 4, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.792871,
    "location/lng": 106.735193
  },
  {
    "title": "B\u01a1 B\u00e1n B\u00f2 L\u00fd T\u1ef1 Tr\u1ecdng",
    "address": "31E L\u00fd T\u1ef1 Tr\u1ecdng, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 790000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.7798036,
    "location/lng": 106.7028883
  },
  {
    "title": "B\u01a1 B\u00e1n B\u00f2 Ung V\u0103n Khi\u00eam",
    "address": "100 Ung V\u0103n Khi\u00eam, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8072058,
    "location/lng": 106.7175121
  },
  {
    "title": "B\u1eadc Garden",
    "address": "316 \u0110. \u0110\u1ed9c L\u1eadp, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7932804,
    "location/lng": 106.6269724
  },
  {
    "title": "B\u1ebeP HO\u00c0NG - Ch\u00e1o \u1ebech - Ch\u00e1o G\u00e0 Malaysia",
    "address": "17 Nguy\u1ec5n \u0110\u00ecnh Chi\u1ec3u, Ph\u01b0\u1eddng 4, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8035724,
    "location/lng": 106.6794733
  },
  {
    "title": "B\u1ebf Bistro",
    "address": "360B \u0110. B\u1ebfn V\u00e2n \u0110\u1ed3n, Ph\u01b0\u1eddng 1, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7551336,
    "location/lng": 106.6911819
  },
  {
    "title": "B\u1ebfn S\u00f4ng Qu\u00e1n",
    "address": "702/53/9, \u0110. Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 15, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8554246,
    "location/lng": 106.6667191
  },
  {
    "title": "B\u1ebfn \u0110\u00f2 C\u00e2y Me",
    "address": "30A/30 Nguy\u1ec5n Xi\u1ec3n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8746528,
    "location/lng": 106.8413251
  },
  {
    "title": "B\u1ebfp Nh\u00e0 L\u1ee5c T\u1ec9nh",
    "address": "37 \u0110. Nam K\u1ef3 Kh\u1edfi Ngh\u0129a, Ph\u01b0\u1eddng Nguy\u1ec5n Th\u00e1i B\u00ecnh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.769578,
    "location/lng": 106.7015457
  },
  {
    "title": "B\u1ed9t Chi\u00ean Tr\u1ea7n Ph\u00fa",
    "address": "11 \u0110. L\u00ea Th\u00fac Ho\u1ea1ch, Ph\u00fa Th\u1ecd Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7860979,
    "location/lng": 106.6268304
  },
  {
    "title": "B\u1edd k\u00e8 qu\u00e1n c\u1ee7a Hoan",
    "address": "80 \u0110. 27, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8312636,
    "location/lng": 106.7339481
  },
  {
    "title": "B\u1edd s\u00f4ng qu\u00e1n",
    "address": "VM9X+2MM, T\u1ed5 51 Kp 3, An Ph\u00fa \u0110\u00f4ng, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8675997,
    "location/lng": 106.6991844
  },
  {
    "title": "CHIANG RAI - Nh\u00e0 H\u00e0ng Th\u00e1i",
    "address": "710/5 \u0110. L\u0169y B\u00e1n B\u00edch, T\u00e2n Th\u00e0nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.79062,
    "location/lng": 106.6378431
  },
  {
    "title": "CHIKA - Buffet xi\u00ean s\u1ea1ch 69k",
    "address": "6 \u0110\u01b0\u1eddng S\u1ed1 7, T\u00e2n Ki\u1ec3ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7471099,
    "location/lng": 106.7099412
  },
  {
    "title": "CHU DIMSUM HOUSE",
    "address": "708 \u0110. \u00c2u C\u01a1, Ph\u01b0\u1eddng 14, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.787635,
    "location/lng": 106.641058
  },
  {
    "title": "CON G\u00c0 \u0110EN",
    "address": "\u0110. Song H\u00e0nh, T\u00e2n Xu\u00e2n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8693946,
    "location/lng": 106.599769
  },
  {
    "title": "Cafe Ng\u1eafm M\u00e1y Bay",
    "address": "24 H\u1ebbm 389 Quang Trung, Ph\u01b0\u1eddng 10, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8302616,
    "location/lng": 106.66872
  },
  {
    "title": "Cafe S\u00e2n V\u01b0\u1eddn H\u1ed3 C\u00e1 Ch\u00f2i V\u00f5ng Home Garden C K",
    "address": "60 \u0110\u01b0\u1eddng 36, Linh \u0110\u00f4ng, Th\u00e0nh Ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Qu\u00e1n c\u00e0 ph\u00ea ngh\u1ec7 thu\u1eadt, Qu\u00e1n \u0103n d\u00e0nh cho tr\u1ebb em, Qu\u1ea7y c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng \u1ea9m th\u1ef1c \u0111\u1ed3ng qu\u00ea, Qu\u00e1n c\u00e0 ph\u00ea espresso, Ti\u1ec7m c\u00e0 ph\u00ea ph\u1ee5c v\u1ee5 c\u00e1c m\u00f3n tr\u00e1i c\u00e2y, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8378323,
    "location/lng": 106.7454577
  },
  {
    "title": "Cafe S\u00e2n V\u01b0\u1eddn Mi\u1ec1n Th\u1ea3o M\u1ed9c",
    "address": "554E \u0110. Minh Ph\u1ee5ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7630869,
    "location/lng": 106.6448925
  },
  {
    "title": "Caff\u00e8 Barbaro-ItalianLifestyleTaste",
    "address": "02 Nguy\u1ec5n An, Ph\u01b0\u1eddng Th\u1ea1nh M\u1ef9 L\u1ee3i, TP Th\u1ee7 \u0111\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71114, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Trung t\u00e2m vui ch\u01a1i d\u00e0nh cho tr\u1ebb em, Qu\u00e1n c\u00e0 ph\u00ea",
    "location/lat": 10.7732726,
    "location/lng": 106.75242
  },
  {
    "title": "Caf\u00e9 Nh\u00e0 \u0110\u1ea5t",
    "address": "RVF4+J4R, Long Ph\u01b0\u1edbc, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8241195,
    "location/lng": 106.8552533
  },
  {
    "title": "Callary Wedding & Events - Trung t\u00e2m Ti\u1ec7c c\u01b0\u1edbi v\u00e0 H\u1ed9i ngh\u1ecb Callary",
    "address": "123 L\u00fd Ch\u00ednh Th\u1eafng, V\u00f5 Th\u1ecb S\u00e1u, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "\u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi, Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7868327,
    "location/lng": 106.6849431
  },
  {
    "title": "Cantin",
    "address": "RQHV+MJP, T\u0103ng Nh\u01a1n Ph\u00fa B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cao c\u1ea5p",
    "location/lat": 10.829213,
    "location/lng": 106.7940856
  },
  {
    "title": "Chang Kang Kung Phan \u0110\u0103ng L\u01b0u",
    "address": "128C \u0110. Phan \u0110\u0103ng L\u01b0u, Ph\u01b0\u1eddng 3, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8023891,
    "location/lng": 106.6832843
  },
  {
    "title": "Chay Garden Qu\u1eadn 3 - Vegetarian Restaurant & Coffee",
    "address": "52 V\u00f5 V\u0103n T\u1ea7n, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay, Nh\u00e0 h\u00e0ng \u0103n chay, Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7782375,
    "location/lng": 106.6906675
  },
  {
    "title": "Cha\u0301o Dinh D\u01b0\u01a1\u0303ng T\u01b0\u01a1\u0300ng Nghi",
    "address": "40 H\u1ebbm 440 Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8435393,
    "location/lng": 106.6674255
  },
  {
    "title": "Cheese Pasta",
    "address": "36/70 Nguy\u1ec5n Gia Tr\u00ed, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u00fd",
    "location/lat": 10.803491,
    "location/lng": 106.7165141
  },
  {
    "title": "Chicken Plus 129 B\u00ecnh Th\u1edbi",
    "address": "129 B\u00ecnh Th\u1edbi, Ph\u01b0\u1eddng 11, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.766478,
    "location/lng": 106.6484551
  },
  {
    "title": "Chicken Plus B\u00e0 Hom",
    "address": "192 B\u00e0 Hom, Ph\u01b0\u1eddng 13, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.755498,
    "location/lng": 106.627966
  },
  {
    "title": "Chicken Plus D\u01b0\u01a1ng \u0110\u1ee9c Hi\u1ec1n",
    "address": "24 D. \u0110\u1ee9c Hi\u1ec1n, T\u00e2y Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n g\u00e0 r\u00e1n mang \u0111i, Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8075109,
    "location/lng": 106.6273689
  },
  {
    "title": "Chicken Plus V\u0129nh H\u1ed9i",
    "address": "7 \u0110. V\u0129nh H\u1ed9i, Ph\u01b0\u1eddng 4, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72813, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng \u0103n nhanh, Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7561817,
    "location/lng": 106.7025876
  },
  {
    "title": "Chidori Coffee in Bed Lam Son",
    "address": "25a \u0110. Lam S\u01a1n, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.8098773,
    "location/lng": 106.666741
  },
  {
    "title": "Chill's Ph\u00fa Nhu\u1eadn",
    "address": "21T \u0110. Nguy\u1ec5n V\u0103n Tr\u1ed7i, Ph\u01b0\u1eddng 11, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7923526,
    "location/lng": 106.6799716
  },
  {
    "title": "Chillthai - thaifood",
    "address": "41 H\u1ed3ng H\u00e0, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Th\u00e1i Lan",
    "location/lat": 10.8137359,
    "location/lng": 106.6698666
  },
  {
    "title": "Ch\u00e1o C\u00e1 - B\u1ea7u - Rau \u0110\u1eafng C\u1ea9m Linh",
    "address": "Trung L\u1eadp H\u1ea1, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0037802,
    "location/lng": 106.4762014
  },
  {
    "title": "Ch\u00e1o T\u1ed5 Y\u1ebfn - Ch\u00e8 Y\u1ebfn Ch\u01b0ng | B\u1ea3o S\u01a1n True Nest",
    "address": "180 L\u00ea H\u1ed3ng Phong, Ph\u01b0\u1eddng 3, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 008428, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7587722,
    "location/lng": 106.6778269
  },
  {
    "title": "Ch\u00e1o b\u1ea7u C\u00f4 Ba N\u1eef",
    "address": "\u0110\u01b0\u1eddng Trung \u0110\u00f4ng 7, Th\u1edbi Tam Th\u00f4n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9049762,
    "location/lng": 106.6163891
  },
  {
    "title": "Ch\u00e1o s\u01b0\u1eddn B\u00e9 Hi\u1ec1n",
    "address": "83 Nguy\u1ec5n X\u00ed, Ph\u01b0\u1eddng 26, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e1o, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8141038,
    "location/lng": 106.7055612
  },
  {
    "title": "Ch\u00e1o v\u1ecbt Th\u1ea3o",
    "address": "H\u1ebbm 2266 Hu\u1ef3nh T\u1ea5n Ph\u00e1t, Ph\u00fa Xu\u00e2n, Nh\u00e0 B\u00e8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.682339,
    "location/lng": 106.7467792
  },
  {
    "title": "Ch\u00e1o \u1ebech - Ch\u00e1o Cua Singapore Mr.Nghi\u00eam",
    "address": "55 \u0110. Nguy\u1ec5n H\u1eefu Th\u1ecd, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7473833,
    "location/lng": 106.7022983
  },
  {
    "title": "Ch\u00e2n g\u00e0 l\u1eafc l\u01b0 Emart",
    "address": "334 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 1, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8196529,
    "location/lng": 106.6917651
  },
  {
    "title": "Ch\u00e2n g\u00e0 s\u1ea3 t\u1eafc Vfood",
    "address": "RPXM+JCV, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8491002,
    "location/lng": 106.7335597
  },
  {
    "title": "Ch\u00fa B\u00e1n \u1ebech - Nh\u1eadu x\u1ecbn gi\u00e1 m\u1ecbn",
    "address": "S\u1ed1 1 L\u00f4 O, \u0110. H\u01b0ng Ph\u00fa, Ph\u01b0\u1eddng 9, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7457075,
    "location/lng": 106.6700408
  },
  {
    "title": "Ch\u1ea3 C\u00e1 \u0110\u1ebf V\u01b0\u01a1ng",
    "address": "16 \u0110. K\u1ef3 \u0110\u1ed3ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n c\u00e1",
    "location/lat": 10.7829981,
    "location/lng": 106.6822179
  },
  {
    "title": "Countryside Garden",
    "address": "1792/5B \u0110. V\u01b0\u1eddn L\u00e0i, KP2, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8421282,
    "location/lng": 106.6915069
  },
  {
    "title": "Cow Express",
    "address": "392 Phan X\u00edch Long, Ph\u01b0\u1eddng 2, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng M\u1ef9",
    "location/lat": 10.7998341,
    "location/lng": 106.6852933
  },
  {
    "title": "C\u00e0 Ri G\u00e0 1357 - M\u00c3 TH\u1eaeNG VI\u00caN",
    "address": "1357 \u0110. 3 Th\u00e1ng 2, Ph\u01b0\u1eddng 16, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.7576035,
    "location/lng": 106.648761
  },
  {
    "title": "C\u00e1 Vi\u00ean Chi\u00ean - Nguy\u1ec5n Xu\u00e2n Kho\u00e1t",
    "address": "102 Nguy\u1ec5n Xu\u00e2n Kho\u00e1t, T\u00e2n Th\u00e0nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7891023,
    "location/lng": 106.6333327
  },
  {
    "title": "C\u00e2u c\u00e1 gi\u1ea3i tr\u00ed D\u0169ng - Th\u01b0",
    "address": "Khu B \u0111\u01b0\u1eddng Nguy\u1ec5n V\u0103n Linh, \u0111\u01b0\u1eddng s\u1ed1 1 Conic Riverside, Nguy\u1ec5n V\u0103n Linh, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7192123,
    "location/lng": 106.6377246
  },
  {
    "title": "C\u00e2u l\u1ea1c b\u1ed9 Lan Anh",
    "address": "291 \u0110. C\u00e1ch M\u1ea1ng Th\u00e1ng 8, Ph\u01b0\u1eddng 12, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "C\u00e2u l\u1ea1c b\u1ed9 th\u1ec3 thao, C\u00e2u l\u1ea1c b\u1ed9 th\u1ec3 d\u1ee5c, Khu b\u1ec3 b\u01a1i, Nh\u00e0 h\u00e0ng, B\u1ec3 b\u01a1i",
    "location/lat": 10.778826,
    "location/lng": 106.6778972
  },
  {
    "title": "C\u00f4 Ba Qu\u00e1n",
    "address": "375 V\u0129nh Kh\u00e1nh, Ph\u01b0\u1eddng 8, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u1ea9m th\u1ef1c \u0111\u1ed3ng qu\u00ea",
    "location/lat": 10.7617534,
    "location/lng": 106.7022837
  },
  {
    "title": "C\u00f4n S\u01a1n Restaurant & Lounge",
    "address": "80-84 Tr\u1ea7n Qu\u1ed1c Th\u1ea3o, V\u00f5 Th\u1ecb S\u00e1u, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1, Nh\u00e0 h\u00e0ng Ch\u00e2u \u00c2u, Nh\u00e0 h\u00e0ng cao c\u1ea5p, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7843201,
    "location/lng": 106.6850108
  },
  {
    "title": "C\u0103n tin Ch\u00f9a B\u1eedu Long",
    "address": "23B Nguy\u1ec5n Xi\u1ec3n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.8793382,
    "location/lng": 106.8359767
  },
  {
    "title": "C\u01a0M NI\u00caU SIM FOOD - CN G\u00d2 V\u1ea4P",
    "address": "2 Ph\u1ea1m Huy Th\u00f4ng, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8316407,
    "location/lng": 106.679795
  },
  {
    "title": "C\u01a0M TH\u1ed0 TI\u1ebeN PH\u00c1T",
    "address": "235 Nguy\u1ec5n V\u0103n L\u01b0\u1ee3ng, Ph\u01b0\u1eddng 10, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72413, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m",
    "location/lat": 10.8384745,
    "location/lng": 106.6727974
  },
  {
    "title": "C\u01a1m Chay Ho\u00e0ng Kim",
    "address": "348 \u0110. L\u00ea Tr\u1ecdng T\u1ea5n, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.8080262,
    "location/lng": 106.6200729
  },
  {
    "title": "C\u01a1m Chay T\u1ecbnh \u0110\u1ed9",
    "address": "140 Vo\u0303 Duy Ninh, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7907311,
    "location/lng": 106.7172972
  },
  {
    "title": "C\u01a1m Chay di\u1ec7u thi\u1ec7n",
    "address": "23, Nguy\u1ec5n X\u00ed, Ph\u01b0\u1eddng 26, Qu\u1eadn B\u00ecnh Th\u1ea1nh, Th\u00e0nh Ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Th\u00e0nh Ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Ph\u01b0\u1eddng 26, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay, Nh\u00e0 h\u00e0ng c\u01a1m",
    "location/lat": 10.8108613,
    "location/lng": 106.7115895
  },
  {
    "title": "C\u01a1m G\u00e0 Th\u01b0\u1ee3ng H\u1ea3i",
    "address": "21 V\u00f5 V\u0103n T\u1ea7n, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7779894,
    "location/lng": 106.6920106
  },
  {
    "title": "C\u01a1m G\u00e0 X\u1ed1i M\u1ee1 Anh Ba - C\u1ed1ng L\u1ee1",
    "address": "129A \u0110. Tr\u1ea7n Th\u1ecb Tr\u1ecdng, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8271574,
    "location/lng": 106.6381681
  },
  {
    "title": "C\u01a1m Ni\u00eau Thi\u00ean L\u00fd - Ho\u00e0ng Hoa Th\u00e1m",
    "address": "134c Ho\u00e0ng Hoa Th\u00e1m, Ph\u01b0\u1eddng 12, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8009996,
    "location/lng": 106.6475105
  },
  {
    "title": "C\u01a1m Qu\u00ea M\u01b0\u1eddi Kh\u00f3 2",
    "address": "8 \u0110. Nguy\u1ec5n V\u0103n Tr\u1ed7i, Ph\u01b0\u1eddng 17, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7923223,
    "location/lng": 106.6814649
  },
  {
    "title": "C\u01a1m T\u1ea5m B\u1ee5i S\u00e0i G\u00f2n",
    "address": "100 Th\u1ea1ch Th\u1ecb Thanh, Ph\u01b0\u1eddng T\u00e2n \u0110\u1ecbnh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m",
    "location/lat": 10.7909414,
    "location/lng": 106.6914856
  },
  {
    "title": "C\u01a1m T\u1ea5m H\u1ed3ng Ph\u00e1t",
    "address": "570A \u0110. H\u1ed3ng B\u00e0ng, Ph\u01b0\u1eddng 16, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m",
    "location/lat": 10.7540835,
    "location/lng": 106.646125
  },
  {
    "title": "C\u01a1m T\u1ea5m Ph\u00fac L\u1ed9c Th\u1ecd",
    "address": "152 Hu\u1ef3nh Thi\u1ec7n L\u1ed9c, Ph\u00fa Trung, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.778988,
    "location/lng": 106.6400147
  },
  {
    "title": "C\u01a1m T\u1ea5m Ph\u00fac L\u1ed9c Th\u1ecd - L\u00fd Th\u01b0\u1eddng Ki\u1ec7t",
    "address": "144 L\u00fd Th\u01b0\u1eddng Ki\u1ec7t, Ph\u01b0\u1eddng 14, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m",
    "location/lat": 10.7641046,
    "location/lng": 106.6600917
  },
  {
    "title": "C\u01a1m T\u1ea5m Ph\u00fac L\u1ed9c Th\u1ecd - N\u01a1 Trang Long",
    "address": "478 N\u01a1 Trang Long, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72311, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8199742,
    "location/lng": 106.703917
  },
  {
    "title": "C\u01a1m T\u1ea5m S\u00e0 B\u00ec Ch\u01b0\u1edfng - Tr\u1ea7n B\u00ecnh Tr\u1ecdng",
    "address": "179 \u0110. Tr\u1ea7n B\u00ecnh Tr\u1ecdng, Ph\u01b0\u1eddng 3, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.758552,
    "location/lng": 106.6804491
  },
  {
    "title": "C\u01a1m T\u1ea5m Tuy\u1ebft C\u00e2y G\u00f5",
    "address": "933 \u0110. H\u1ed3ng B\u00e0ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7544235,
    "location/lng": 106.6394626
  },
  {
    "title": "C\u01a1m chay Ph\u01b0\u1edbc \u0110\u1ee9c",
    "address": "19 \u0110\u01b0\u1eddng s\u1ed1 79, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7396338,
    "location/lng": 106.7123023
  },
  {
    "title": "C\u01a1m g\u00e0 Nha Trang",
    "address": "313 B\u00f9i \u0110\u00ecnh Tu\u00fd, Ph\u01b0\u1eddng 24, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 84800, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8074245,
    "location/lng": 106.700122
  },
  {
    "title": "C\u01a1m g\u00e0 Tacayo - 223 X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh",
    "address": "223 X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh, Ph\u01b0\u1eddng 17, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.800226,
    "location/lng": 106.710993
  },
  {
    "title": "C\u01a1m g\u00e0 da gi\u00f2n Anh Th\u01b0 - t\u1eeb n\u0103m 2002",
    "address": "H\u1ebbm L\u00ea Th\u00fac Ho\u1ea1ch, Ph\u00fa Th\u1ecd Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.785878,
    "location/lng": 106.6302695
  },
  {
    "title": "C\u01a1m g\u00e0 x\u1ed1i m\u1ee1 54",
    "address": "H\u1ebbm Ch\u00f9a V\u0103n Th\u00e1nh S\u1ed1 107 x\u1eb9t, 52 Ng. T\u1ea5t T\u1ed1, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7929617,
    "location/lng": 106.7137828
  },
  {
    "title": "C\u01a1m g\u00e0 x\u1ed1i m\u1ee1 Su Su",
    "address": "117/1D \u0110. C\u1ed1ng Qu\u1ef3nh, Ph\u01b0\u1eddng Nguy\u1ec5n C\u01b0 Trinh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7652059,
    "location/lng": 106.689606
  },
  {
    "title": "C\u01a1m ni\u00eau Thi\u00ean L\u00fd",
    "address": "74 Nguy\u1ec5n Th\u1ecb Th\u1eadp, Khu \u0111\u00f4 th\u1ecb Him Lam, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.741221,
    "location/lng": 106.6972631
  },
  {
    "title": "C\u01a1m qu\u00ea M\u01b0\u1eddi Kh\u00f3",
    "address": "27 Tr\u1ea7n Qu\u1ed1c Th\u1ea3o, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7788008,
    "location/lng": 106.6907882
  },
  {
    "title": "C\u01a1m x\u00e1 x\u00edu V\u0129nh T\u00e2m",
    "address": "649 Tr\u1ea7n Xu\u00e2n So\u1ea1n, T\u00e2n Ki\u1ec3ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c, Th\u1ee9c \u0103n mang v\u1ec1 Trung Qu\u1ed1c",
    "location/lat": 10.7516516,
    "location/lng": 106.7034533
  },
  {
    "title": "C\u1ed5 Th\u1ee5 Qu\u00e1n",
    "address": "545 Nguy\u1ec5n Xi\u1ec3n, Long Th\u1ea1nh M\u1ef9, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8365211,
    "location/lng": 106.8299037
  },
  {
    "title": "C\u1ee5c Than Bistro",
    "address": "306 Nguy\u1ec5n Th\u01b0\u1ee3ng Hi\u1ec1n, Ph\u01b0\u1eddng 5, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8060838,
    "location/lng": 106.6850866
  },
  {
    "title": "C\u1eeda H\u00e0ng C\u00e0 Ph\u00ea Hoa Nguy\u00ean",
    "address": "30/1, L\u00ea V\u0103n L\u01b0\u01a1ng, Ph\u01b0\u1eddng T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh Ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Th\u00e0nh Ph\u1ed1 H\u1ed3 Ch\u00ed Minh, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7279775,
    "location/lng": 106.6993434
  },
  {
    "title": "C\u1eeda H\u00e0ng C\u01a1m T\u1ea5m C\u00e2y Kh\u1ebf",
    "address": "350 Nguy\u1ec5n Oanh, Ph\u01b0\u1eddng 17, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8407974,
    "location/lng": 106.6763929
  },
  {
    "title": "C\u1eeda H\u00e0ng M\u1ef3 Cay Larva",
    "address": "460 \u0110. L\u00ea V\u0103n S\u1ef9, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7997221,
    "location/lng": 106.6610981
  },
  {
    "title": "C\u1eeda h\u00e0ng KFC Phan V\u0103n H\u1edbn",
    "address": "53/3, \u0110\u01b0\u1eddng Phan V\u0103n H\u1edbn, \u1ea4p Ti\u1ec1n L\u00e2n, 53 Phan V\u0103n H\u1edbn, B\u00e0 \u0110i\u1ec3m, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng M\u1ef9",
    "location/lat": 10.8364526,
    "location/lng": 106.6036605
  },
  {
    "title": "C\u1eedu Long Qu\u00e1n",
    "address": "76 B\u00f9i H\u1eefu Ngh\u0129a, Ph\u01b0\u1eddng 7, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7539942,
    "location/lng": 106.6747605
  },
  {
    "title": "C\u1eedu Long Qu\u00e1n Tr\u1ea7n Xu\u00e2n Ho\u00e0",
    "address": "2-4 Tr\u1ea7n Xu\u00e2n Ho\u00e0, Ph\u01b0\u1eddng 7, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7528885,
    "location/lng": 106.6673635
  },
  {
    "title": "D7 Chill",
    "address": "55 \u0110. S\u1ed1 65, Khu \u0111\u1ecbnh c\u01b0 T\u00e2n Quy \u0110\u00f4ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng qu\u00e1n r\u01b0\u1ee3u d\u00e0nh cho ng\u01b0\u1eddi s\u00e0nh \u0103n",
    "location/lat": 10.7370316,
    "location/lng": 106.7066119
  },
  {
    "title": "Daiichi Ramen & Curry B\u00ecnh Th\u1ea1nh",
    "address": "113 Nguy\u1ec5n C\u00f4ng Tr\u1ee9, Ph\u01b0\u1eddng 19, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00ec Nh\u1eadt B\u1ea3n, Nh\u00e0 h\u00e0ng ca ri Nh\u1eadt B\u1ea3n, M\u00f3n ngon Nh\u1eadt B\u1ea3n, Qu\u00e1n m\u00ec soba",
    "location/lat": 10.792906,
    "location/lng": 106.7103379
  },
  {
    "title": "Dim Tu Tac Restaurant",
    "address": "29B \u0110. Tr\u1ea7n H\u01b0ng \u0110\u1ea1o, Ph\u01b0\u1eddng 6, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0111i\u1ec3m t\u00e2m",
    "location/lat": 10.752732,
    "location/lng": 106.671303
  },
  {
    "title": "Dntn Nh\u00e0 H\u00e0ng Th\u1ea1nh Ph\u00fa",
    "address": "52 B\u00ecnh Ph\u00fa, Street, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8550356,
    "location/lng": 106.7408997
  },
  {
    "title": "Dodo Pizza Th\u1ed1ng Nh\u1ea5t",
    "address": "317 \u0110. Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 740500, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.839654,
    "location/lng": 106.6652719
  },
  {
    "title": "Domino's Pizza",
    "address": "289 Nguy\u1ec5n S\u01a1n, P, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.783662,
    "location/lng": 106.6234379
  },
  {
    "title": "Domino's Pizza Li\u00ean T\u1ec9nh 5",
    "address": "240 QL50, Ph\u01b0\u1eddng 6, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.73598,
    "location/lng": 106.655919
  },
  {
    "title": "Domino's Pizza L\u00ea V\u0103n Kh\u01b0\u01a1ng",
    "address": "291 L\u00ea V\u0103n Kh\u01b0\u01a1ng, Hi\u1ec7p Th\u00e0nh, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8699745,
    "location/lng": 106.6491301
  },
  {
    "title": "Domino's Pizza Nguy\u1ec5n Ki\u1ec7m",
    "address": "736A \u0110. Nguy\u1ec5n Ki\u1ec7m, Ph\u01b0\u1eddng 4, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8078984,
    "location/lng": 106.678694
  },
  {
    "title": "Domino's Pizza \u0110\u01b0\u1eddng Phan Huy \u00cdch",
    "address": "7 Phan Huy \u00cdch, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8237316,
    "location/lng": 106.6298119
  },
  {
    "title": "Don Chicken Vinhomes",
    "address": "Park 2 Sh01, 720A \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, Vinhomes T\u00e2n C\u1ea3ng, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7916651,
    "location/lng": 106.7219796
  },
  {
    "title": "Dookki",
    "address": "139- 141, Nguy\u1ec5n Gia Tr\u00ed, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8048629,
    "location/lng": 106.715701
  },
  {
    "title": "Doya Jjambbong",
    "address": "545 \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.82518,
    "location/lng": 106.6901915
  },
  {
    "title": "D\u00ea H\u01b0\u01a1ng S\u01a1n",
    "address": "81/1 \u0110. 12, Khu ph\u1ed1 3, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.788982,
    "location/lng": 106.7312987
  },
  {
    "title": "D\u00ea H\u1ea3i K\u00fd",
    "address": "H\u1ebbm 276/31 Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.839999,
    "location/lng": 106.6669434
  },
  {
    "title": "D\u00ea N\u00fai B\u00ecnh Thu\u1eadn",
    "address": "55 Nguy\u1ec5n \u0110\u1ee9c Thu\u1eadn, Ph\u01b0\u1eddng 13, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8056815,
    "location/lng": 106.6411635
  },
  {
    "title": "D\u00ea t\u01b0\u01a1i 368",
    "address": "377 \u0110. Ph\u1ea1m Th\u1ecb Gi\u00e2y, Th\u1edbi Tam Th\u00f4n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8855214,
    "location/lng": 106.6078329
  },
  {
    "title": "D\u1ecaCH V\u1ee4 N\u1ea4U \u0102N \u00daT \u0110UA",
    "address": "0938/3G T\u1ed5 54 KP3, An Ph\u00fa \u0110\u00f4ng, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8675146,
    "location/lng": 106.697928
  },
  {
    "title": "Eddie's (District 7) - New York Deli & Diner",
    "address": "408 Ph\u1ea1m Th\u00e1i B\u01b0\u1eddng, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng M\u1ef9",
    "location/lat": 10.7274799,
    "location/lng": 106.7079411
  },
  {
    "title": "Food In Box",
    "address": "H\u1ebbm 285B, Ph\u1ea1m V\u0103n Chi\u00eau, Ph\u01b0\u1eddng 9, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.850348,
    "location/lng": 106.6509243
  },
  {
    "title": "GoGi House",
    "address": "129-131 \u0110. Nguy\u1ec5n H\u1ed3ng \u0110\u00e0o, Ph\u01b0\u1eddng 14, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.7943008,
    "location/lng": 106.6427241
  },
  {
    "title": "GoGi House B\u00e0 Hom",
    "address": "73B B\u00e0 Hom, Ph\u01b0\u1eddng 13, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.7543178,
    "location/lng": 106.6326023
  },
  {
    "title": "GoGi House L\u00e3nh Binh Th\u0103ng",
    "address": "323-325 L\u00e3nh Binh Th\u0103ng, Ph\u01b0\u1eddng 8, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.764555,
    "location/lng": 106.6475169
  },
  {
    "title": "GoGi House Tr\u01b0\u1eddng S\u01a1n",
    "address": "14 Tr\u01b0\u1eddng S\u01a1n, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.807745,
    "location/lng": 106.664902
  },
  {
    "title": "GoGi House T\u00e2n S\u01a1n Nh\u00ec",
    "address": "42-44-46-68, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 80000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.802534,
    "location/lng": 106.6348704
  },
  {
    "title": "Gold palace",
    "address": "329 N\u01a1 Trang Long, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72300, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8191345,
    "location/lng": 106.7009696
  },
  {
    "title": "G\u00e0 180 \u0110\u1ed8",
    "address": "RRVQ+FJ7, Nguy\u1ec5n Xi\u1ec3n, Long Th\u1ea1nh M\u1ef9, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.8436725,
    "location/lng": 106.8390463
  },
  {
    "title": "G\u00e0 C\u01a1 B\u1eafp 1 - Chuy\u00ean c\u00e1c m\u00f3n g\u00e0",
    "address": "171B Tr\u1ea7n V\u0103n \u0110ang, Ph\u01b0\u1eddng 11, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.7843739,
    "location/lng": 106.673221
  },
  {
    "title": "G\u00e0 H\u1ea5p H\u00e8m 34",
    "address": "34 Nguy\u1ec5n Th\u1ecb Th\u1eed, Xu\u00e2n Th\u1edbi S\u01a1n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.8678404,
    "location/lng": 106.5791549
  },
  {
    "title": "G\u00e0 N\u01b0\u1edbng- C\u01a1m Lam- G\u00e0 \u1ee6 Mu\u1ed1i Hoa Ti\u00eau M\u1ed9c An Nhi\u00ean",
    "address": "66/2 S\u1ed1 2, Hi\u1ec7p B\u00ecnh Ph\u01b0\u1edbc, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8469381,
    "location/lng": 106.7232145
  },
  {
    "title": "G\u00e0 R\u00e1n K- JEJU CHICKEN- CN B\u00ccNH TH\u1ea0NH",
    "address": "222 \u0110\u01b0\u1eddng D5, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72300, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n g\u00e0 r\u00e1n mang \u0111i",
    "location/lat": 10.805475,
    "location/lng": 106.7169449
  },
  {
    "title": "G\u00e0 Th\u1ee7y",
    "address": "14/12 \u0110o\u00e0n V\u0103n B\u01a1, Ph\u01b0\u1eddng 16, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7559806,
    "location/lng": 106.7154663
  },
  {
    "title": "G\u00e0 h\u1ea5p h\u00e8m N\u0103m M\u1eadp",
    "address": "9/4c \u0110 Ph\u1ea1m Th\u1ecb Hy, B\u00e0 \u0110i\u1ec3m, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8524291,
    "location/lng": 106.6002525
  },
  {
    "title": "G\u00e0nh H\u00e0o Q.9",
    "address": "524 L\u00ea V\u0103n Vi\u1ec7t, Long Th\u1ea1nh M\u1ef9, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8490444,
    "location/lng": 106.8100485
  },
  {
    "title": "HANA YA SHIKI",
    "address": "47 \u0110\u01b0\u1eddng S\u1ed1 3, KDC Cityland Park Hills, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.835458,
    "location/lng": 106.6704127
  },
  {
    "title": "HAPPYFOOD M\u1ef3 Cay - Tokbokki & C\u01a1m Tr\u1ed9n",
    "address": "162/98 Nguy\u1ec5n Duy Cung, Ph\u01b0\u1eddng 12, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8368097,
    "location/lng": 106.6420316
  },
  {
    "title": "HOME Saigon - HOME Vietnamese Restaurant",
    "address": "216/4 \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, V\u00f5 Th\u1ecb S\u00e1u, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7828343,
    "location/lng": 106.6899003
  },
  {
    "title": "Hai Ch\u00e2u B\u00ecnh M\u1ef9",
    "address": "8/1 \u0110\u01b0\u1eddng 162 \u1ea4p 5, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9358536,
    "location/lng": 106.6437627
  },
  {
    "title": "Haidilao Hot Pot",
    "address": "101 \u0110 T\u00f4n D\u1eadt Ti\u00ean, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.7294121,
    "location/lng": 106.7191013
  },
  {
    "title": "Haidilao Hot Pot \u6d77\u5e95\u635e\u706b\u9505 Estella",
    "address": "TTTM Estella Place, 88 Song H\u00e0nh, An Ph\u00fa, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.8018536,
    "location/lng": 106.7493055
  },
  {
    "title": "Haidilao Vi\u1ec7t Nam",
    "address": "172A L\u1ea1c Long Qu\u00e2n, Ph\u01b0\u1eddng 8, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7791616,
    "location/lng": 106.6499385
  },
  {
    "title": "HanKang BBQ - 68 D\u01b0\u01a1ng \u0110\u00ecnh H\u1ed9i",
    "address": "68 D\u01b0\u01a1ng \u0110\u00ecnh H\u1ed9i, Ph\u01b0\u1edbc Long B, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8194108,
    "location/lng": 106.7782309
  },
  {
    "title": "Hana Buffet",
    "address": "243 \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng",
    "location/lat": 10.7834847,
    "location/lng": 106.6910313
  },
  {
    "title": "Hana Buffet T\u00e2n Ph\u00fa",
    "address": "204-206, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 760400, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng",
    "location/lat": 10.7988466,
    "location/lng": 106.6318016
  },
  {
    "title": "Hangu - \u0102n V\u1eb7t H\u00e0n Qu\u1ed1c",
    "address": "164/17B, B\u00f9i Quang L\u00e0, Ph\u01b0\u1eddng 12, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8330063,
    "location/lng": 106.6414249
  },
  {
    "title": "Hanuri Korean fast food - X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh",
    "address": "121 X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh, Ph\u01b0\u1eddng 17, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7944207,
    "location/lng": 106.7087411
  },
  {
    "title": "Hanuri Phan V\u0103n Tr\u1ecb",
    "address": "530-532 \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.829838,
    "location/lng": 106.6811835
  },
  {
    "title": "Happy Lamb Hotpot Vietnam",
    "address": "329 \u0110. Tr\u1ea7n H\u01b0ng \u0110\u1ea1o, Ph\u01b0\u1eddng C\u00f4 Giang, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7618244,
    "location/lng": 106.6902509
  },
  {
    "title": "Haru Sushi Ph\u00fa Nhu\u1eadn",
    "address": "211 - 213 Phan X\u00edch Long, Ph\u01b0\u1eddng 2, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng sushi, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.79873,
    "location/lng": 106.6867887
  },
  {
    "title": "Haru Sushi Qu\u1eadn 7",
    "address": "458 Nguy\u1ec5n Th\u1ecb Th\u1eadp, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng sushi",
    "location/lat": 10.7394396,
    "location/lng": 106.7072969
  },
  {
    "title": "Here & Now Vegetarian (Open kitchen & chill)",
    "address": "220/12 Nguy\u1ec5n Tr\u1ecdng Tuy\u1ec3n, Ph\u01b0\u1eddng 8, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n chay",
    "location/lat": 10.798405,
    "location/lng": 106.673836
  },
  {
    "title": "Hoa T\u00fac Saigon",
    "address": "74/7 Hai B\u00e0 Tr\u01b0ng, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.778463,
    "location/lng": 106.7035736
  },
  {
    "title": "Hoa Vi\u00ean 979",
    "address": "979 Nguy\u1ec5n Xi\u1ec3n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8572215,
    "location/lng": 106.8341482
  },
  {
    "title": "Hoa Vi\u00ean Craft Brewery",
    "address": "H\u1ebbm 18 Bis/30A1, \u0110. Nguy\u1ec5n Th\u1ecb Minh Khai, \u0110a Kao, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bia, Khu v\u1ef1c ph\u1ee5c v\u1ee5 bia, Nh\u00e0 m\u00e1y bia, Nh\u00e0 h\u00e0ng S\u00e9c, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7858744,
    "location/lng": 106.6992178
  },
  {
    "title": "Hoa Vi\u00ean C\u00fac Linh",
    "address": "41 \u0110\u01b0\u1eddng S\u1ed1 16, Long Th\u1ea1nh M\u1ef9, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8397601,
    "location/lng": 106.8236129
  },
  {
    "title": "Hoa Vi\u00ean Qu\u00e1n 102",
    "address": "39/79C \u0110. S\u1ed1 102, T\u0103ng Nh\u01a1n Ph\u00fa A, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8373801,
    "location/lng": 106.78918
  },
  {
    "title": "Hoa Vi\u00ean Ti\u1ec7c C\u01b0\u1edbi Ba D\u1ea9u",
    "address": "40/12A \u0110. Th\u1ea1nh L\u1ed9c 15, Th\u1ea1nh L\u1ed9c, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8624482,
    "location/lng": 106.6849068
  },
  {
    "title": "Hoang Yen Vietnamese Cuisine",
    "address": "H\u1ed3 B\u00e1n Nguy\u1ec7t PMH, 103 \u0110 T\u00f4n D\u1eadt Ti\u00ean, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7275389,
    "location/lng": 106.7196056
  },
  {
    "title": "Hotel Continental Saigon",
    "address": "134 \u0110. \u0110\u1ed3ng Kh\u1edfi, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng Ph\u00e1p, Nh\u00e0 t\u1ed5 ch\u1ee9c bu\u1ed5i ti\u1ec7c, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi",
    "location/lat": 10.7768963,
    "location/lng": 106.7026553
  },
  {
    "title": "Ho\u00e0ng Ty Premium Restaurant",
    "address": "33 \u0110\u01b0\u1eddng s\u1ed1 41, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.737428,
    "location/lng": 106.71109
  },
  {
    "title": "Huy\u1ec1n v\u1ecbt",
    "address": "12G B\u1ea1ch \u0110\u1eb1ng, P.2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8155233,
    "location/lng": 106.6699547
  },
  {
    "title": "Hu\u1ef3nh Th\u1ea3o Center",
    "address": "114 L\u00ea Th\u1ecb H\u00e0, T\u00e2n Xu\u00e2n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8769862,
    "location/lng": 106.5990993
  },
  {
    "title": "H\u00e0ng D\u01b0\u01a1ng Qu\u00e1n",
    "address": "132 \u0110. S\u1ed1 65, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7356121,
    "location/lng": 106.7059747
  },
  {
    "title": "H\u00e0ng D\u01b0\u01a1ng Sakura",
    "address": "16 S\u1ed1 77, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 00000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ed7n h\u1ee3p",
    "location/lat": 10.7356651,
    "location/lng": 106.7051916
  },
  {
    "title": "H\u00e0o s\u1eefa Ph\u00e1p",
    "address": "96 L\u00ea V\u0103n L\u01b0\u01a1ng, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.749687,
    "location/lng": 106.7048329
  },
  {
    "title": "H\u00e0u 5k",
    "address": "75 Nguy\u1ec5n Qu\u00fd Anh, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1ee5c v\u1ee5 s\u00f2",
    "location/lat": 10.8000471,
    "location/lng": 106.6274046
  },
  {
    "title": "H\u00e0u Anh \u0110en",
    "address": "50 Phan Anh, T\u00e2n Th\u1edbi Ho\u00e0, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 73100, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7612028,
    "location/lng": 106.6243989
  },
  {
    "title": "H\u01b0\u01a1ng Th\u1ea3o Qu\u00e1n",
    "address": "22/143 Long Thu\u1eadn, Long Ph\u01b0\u1edbc, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8147208,
    "location/lng": 106.8627515
  },
  {
    "title": "H\u1ea2I S\u1ea2N B\u00cd BO",
    "address": "160 D\u01b0\u01a1ng B\u1ea1ch Mai, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7377886,
    "location/lng": 106.6654635
  },
  {
    "title": "H\u1ea3i S\u1ea3n Ho\u00e0ng Gia CN Qu\u1eadn 7",
    "address": "103A Nguy\u1ec5n Th\u1ecb Th\u1eadp, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72908, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Ch\u1ee3 h\u1ea3i s\u1ea3n, Si\u00eau th\u1ecb",
    "location/lat": 10.737856,
    "location/lng": 106.7212787
  },
  {
    "title": "H\u1ea3i S\u1ea3n H\u00f2n Th\u01a1m",
    "address": "6 \u0110. L\u00ea Tr\u1ecdng T\u1ea5n, T\u00e2y Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8038832,
    "location/lng": 106.632755
  },
  {
    "title": "H\u1ea3i S\u1ea3n Li\u00ean Ph\u01b0\u1eddng Q9",
    "address": "137 \u0110. Li\u00ean Ph\u01b0\u1eddng, P, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8077108,
    "location/lng": 106.7849633
  },
  {
    "title": "H\u1ea3i S\u1ea3n T\u01b0\u01a1i S\u1ea1ch 247",
    "address": "166A \u0110\u1ed7 B\u00ed, Ph\u00fa Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, C\u1eeda h\u00e0ng th\u1ef1c ph\u1ea9m \u0111\u00f4ng l\u1ea1nh, Ch\u1ee3 h\u1ea3i s\u1ea3n, Nh\u00e0 b\u00e1n bu\u00f4n h\u1ea3i s\u1ea3n",
    "location/lat": 10.7801536,
    "location/lng": 106.6226226
  },
  {
    "title": "H\u1ea3i S\u1ea3n Vinsea",
    "address": "18 \u0110\u01b0\u1eddng C12, \u0110. C\u1ed9ng H\u00f2a, Ph\u01b0\u1eddng 13, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Nh\u00e0 b\u00e1n bu\u00f4n h\u1ea3i s\u1ea3n",
    "location/lat": 10.8067371,
    "location/lng": 106.6375596
  },
  {
    "title": "H\u1ea3i s\u1ea3n H\u1ea3i Ch\u00e2u Nguy\u1ec5n H\u1eefu C\u1ea3nh",
    "address": "67 \u0110. Nguy\u1ec5n H\u1eefu C\u1ea3nh, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Khu \u0103n u\u1ed1ng, Nh\u00e0 h\u00e0ng, Ch\u1ee3 h\u1ea3i s\u1ea3n, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7920608,
    "location/lng": 106.7179183
  },
  {
    "title": "H\u1ea3i s\u1ea3n \u0111\u1ed3ng qu\u00ea Qu\u00e1n Tr\u00f2n Vo",
    "address": "S\u1ed1 18 \u0111\u01b0\u1eddng 270, KCD, Nam H\u00f2a, Ph\u01b0\u1edbc Long A, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8218674,
    "location/lng": 106.7691434
  },
  {
    "title": "H\u1ebbm Kitchen - B\u1ebfp H\u1ebbm - Thai Food",
    "address": "157.36 Nguy\u1ec5n Gia Tr\u00ed, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Th\u00e1i Lan, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8057781,
    "location/lng": 106.714568
  },
  {
    "title": "H\u1ec7 th\u1ed1ng C\u01a1m G\u00e0 Th\u1ea1ch Lam - thachlamchicken.com",
    "address": "217 Th\u1ea1ch Lam, Ph\u00fa Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7786119,
    "location/lng": 106.6253562
  },
  {
    "title": "H\u1ec7 th\u1ed1ng Nh\u00e0 h\u00e0ng Tr\u1ea1i D\u00ea",
    "address": "90 \u0110. L\u0169y B\u00e1n B\u00edch, T\u00e2n Th\u1edbi Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72015, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7664477,
    "location/lng": 106.6320975
  },
  {
    "title": "H\u1ec7 th\u1ed1ng l\u1ea9u d\u00ea n\u1ed3i \u0111\u1ea5t 3",
    "address": "385 Tr\u1ea7n Xu\u00e2n So\u1ea1n, T\u00e2n Ki\u1ec3ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7516013,
    "location/lng": 106.710579
  },
  {
    "title": "H\u1ed3 C\u00e2u C\u00e1 Ao Sen",
    "address": "QQHH+57J, B\u00ecnh Tr\u01b0ng \u0110\u00f4ng, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7779706,
    "location/lng": 106.7781522
  },
  {
    "title": "H\u1ed3 C\u00e2u C\u00e1 Gi\u1ea3i Tr\u00ed Minh Ph\u00e1t",
    "address": "173B T\u1ed5 32 kp2, Th\u1ea1nh Xu\u00e2n, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8839034,
    "location/lng": 106.6606275
  },
  {
    "title": "H\u1ed3 C\u00e2u C\u00e1 Gi\u1ea3i Tr\u00ed \u0110\u00f4ng B\u1eafc",
    "address": "136/3 \u0110. TX 25, P, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "H\u1ed3 c\u00e2u c\u00e1, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8792505,
    "location/lng": 106.6580123
  },
  {
    "title": "H\u1ed3 C\u00e2u C\u00e1 Hai Anh Em",
    "address": "534/1b, B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.828022,
    "location/lng": 106.7381047
  },
  {
    "title": "H\u1ed3 C\u00e2u C\u00e1 H\u00e0ng Tre Qu\u1eadn 9",
    "address": "98/2 \u0111\u01b0\u1eddng 2, Ph\u01b0\u1edbc Thi\u1ec7n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.843965,
    "location/lng": 106.8503198
  },
  {
    "title": "H\u1ed3 c\u00e2u c\u00e1 \u00dat Thu",
    "address": "\u0110\u00f4ng Th\u1ea1nh, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9126555,
    "location/lng": 106.6218928
  },
  {
    "title": "H\u1ed8I NG\u1ed8 QU\u00c1N HUYNH \u0110\u1ec6",
    "address": "109 \u0110\u01b0\u1eddng H, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.6998516,
    "location/lng": 106.6117408
  },
  {
    "title": "H\u1ed9i Qu\u00e1n G\u00f3c Chia S\u1ebb",
    "address": "WM28+G7Q, \u1ea4p 4, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9013373,
    "location/lng": 106.6657478
  },
  {
    "title": "H\u1ed9i qu\u00e1n 007",
    "address": "RPCF+3M2, C\u01b0 x\u00e1 Thanh \u0110a, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8201345,
    "location/lng": 106.724134
  },
  {
    "title": "H\u1ee7 Ti\u1ebfu M\u1ef1c \u00fat Sang | Qu\u00e1n h\u1ee7 ti\u1ebfu m\u1ef1c qu\u1eadn 12",
    "address": "29/219 \u0110. Song H\u00e0nh, \u0110\u00f4ng H\u01b0ng Thu\u1eadn, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8285764,
    "location/lng": 106.6254811
  },
  {
    "title": "H\u1ee7 Ti\u1ebfu Sa T\u1ebf T\u00f4 K\u00fd \u8001\u8607\u6c99\u55f2",
    "address": "156 \u0110. Gia Ph\u00fa, Ph\u01b0\u1eddng 1, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.746942,
    "location/lng": 106.6526695
  },
  {
    "title": "H\u1ee7 Ti\u1ebfu \u0110\u00f4ng",
    "address": "329 Nhu\u1eadn \u0110\u1ee9c, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0187341,
    "location/lng": 106.4905003
  },
  {
    "title": "H\u1ee7 T\u00edu B\u1ea3y Gi\u00e0",
    "address": "WH2R+FGJ, \u0110\u01b0\u1eddng L\u00ea Th\u1ecb L\u01a1, T\u00e2n Hi\u1ec7p, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9012022,
    "location/lng": 106.5912806
  },
  {
    "title": "H\u1ee7 ti\u1ebfu - B\u00e1nh bao C\u1ea3 C\u1ea7n",
    "address": "110 \u0110. H\u00f9ng V\u01b0\u01a1ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Khu \u0103n u\u1ed1ng, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7572165,
    "location/lng": 106.6684548
  },
  {
    "title": "Ikigai Sushi - 236 nguy\u1ec5n tr\u1ecdng tuy\u1ec3n",
    "address": "236 Nguy\u1ec5n Tr\u1ecdng Tuy\u1ec3n, Ph\u01b0\u1eddng 8, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng sushi",
    "location/lat": 10.7979088,
    "location/lng": 106.673368
  },
  {
    "title": "Ilmirack Ph\u00fa M\u1ef9 H\u01b0ng",
    "address": "222-224 Khu Ph\u1ed1 M\u1ef9 Ho\u00e0ng, Khu \u0111\u00f4 th\u1ecb Ph\u00fa M\u1ef9 H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7275084,
    "location/lng": 106.7093066
  },
  {
    "title": "Janchu - Korean Fast Food",
    "address": "21 DN11, \u0110\u00f4ng H\u01b0ng Thu\u1eadn, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8419302,
    "location/lng": 106.6263894
  },
  {
    "title": "Japan Eats",
    "address": "5/70 Nguy\u1ec5n Trung Ng\u1ea1n, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7844733,
    "location/lng": 106.7059655
  },
  {
    "title": "Jimmy\u2019s New York Pizza - D7",
    "address": "C\u1ea3nh Vi\u00ean 3, 66 \u0110\u01b0\u1eddng C, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.7213629,
    "location/lng": 106.7291676
  },
  {
    "title": "Jinguk Qu\u00e1n \u0103n H\u00e0n qu\u1ed1c",
    "address": "76 \u0110. Phan Khi\u00eam \u00cdch, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7329991,
    "location/lng": 106.707234
  },
  {
    "title": "Jollibee Hi\u1ec7p B\u00ecnh",
    "address": "159 \u0110. Hi\u1ec7p B\u00ecnh, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8449706,
    "location/lng": 106.7284772
  },
  {
    "title": "Jollibee L\u00ea \u0110\u1ee9c Th\u1ecd",
    "address": "688 \u0110. L\u00ea \u0110\u1ee9c Th\u1ecd, Ph\u01b0\u1eddng 15, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8463565,
    "location/lng": 106.6710066
  },
  {
    "title": "Jollibee T\u00e2n H\u01b0\u01a1ng",
    "address": "131 T\u00e2n H\u01b0\u01a1ng, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7895966,
    "location/lng": 106.6249477
  },
  {
    "title": "Jungle Family & Kids Cafe - Nh\u00e0 h\u00e0ng & Khu vui ch\u01a1i tr\u1ebb em",
    "address": "Au Co Tower, 659 \u0110. \u00c2u C\u01a1, T\u00e2n Th\u00e0nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ph\u01b0\u01a1ng T\u00e2y, Trung t\u00e2m vui ch\u01a1i d\u00e0nh cho tr\u1ebb em",
    "location/lat": 10.7870179,
    "location/lng": 106.6403367
  },
  {
    "title": "K-Pub Nguy\u1ec5n V\u0103n L\u1ea1c",
    "address": "01 Nguy\u1ec5n V\u0103n L\u1ea1c, Ph\u01b0\u1eddng 21, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7951439,
    "location/lng": 106.7101351
  },
  {
    "title": "KALINA Wedding & Events",
    "address": "107 \u0110. T\u00e2n Th\u1eafng, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "\u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi, Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 t\u1ed5 ch\u1ee9c bu\u1ed5i ti\u1ec7c, Nh\u00e0 h\u00e0ng, Nh\u00e0 t\u1ed5 ch\u1ee9c \u0111\u00e1m c\u01b0\u1edbi",
    "location/lat": 10.8005275,
    "location/lng": 106.6179883
  },
  {
    "title": "KDL B\u1ebfn X\u01b0a - V\u01b0\u1eddn \u1ea8m Th\u1ef1c Nan",
    "address": "39a H\u00e0 Huy Gi\u00e1p, Th\u1ea1nh L\u1ed9c, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n c\u00e0 ph\u00ea, Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi",
    "location/lat": 10.8524917,
    "location/lng": 106.6772489
  },
  {
    "title": "KFC Hu\u1ef3nh T\u1ea5n Ph\u00e1t 2",
    "address": "1899 Hu\u1ef3nh T\u1ea5n Ph\u00e1t, TT. Nh\u00e0 B\u00e8, Nh\u00e0 B\u00e8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.6988955,
    "location/lng": 106.7388747
  },
  {
    "title": "KFC L\u00fd Th\u01b0\u1eddng Ki\u1ec7t",
    "address": "446 L\u00fd Th\u01b0\u1eddng Ki\u1ec7t, Ph\u01b0\u1eddng 7, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.785852,
    "location/lng": 106.654075
  },
  {
    "title": "KFC L\u0169y B\u00e1n B\u00edch",
    "address": "01 \u0110. V\u01b0\u1eddn L\u00e0i, Ph\u00fa Th\u1ecd Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7864143,
    "location/lng": 106.6364394
  },
  {
    "title": "KFC Th\u00edch Qu\u1ea3ng \u0110\u1ee9c",
    "address": "87 Th\u00edch Qu\u1ea3ng \u0110\u1ee9c, Ph\u01b0\u1eddng 4, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.8052486,
    "location/lng": 106.6822575
  },
  {
    "title": "KFC Th\u1ed1ng Nh\u1ea5t",
    "address": "451 \u0110. Th\u1ed1ng Nh\u1ea5t, P.11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8449406,
    "location/lng": 106.6646893
  },
  {
    "title": "KFC \u00c2u D\u01b0\u01a1ng L\u00e2n",
    "address": "230 \u0110. \u00c2u D\u01b0\u01a1ng L\u00e2n, Ph\u01b0\u1eddng 3, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7442735,
    "location/lng": 106.6838298
  },
  {
    "title": "Karaoke Nnice V\u00f5 Th\u1ecb S\u00e1u",
    "address": "121 \u0110. V\u00f5 Th\u1ecb S\u00e1u, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bar karaoke, Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7860568,
    "location/lng": 106.6904135
  },
  {
    "title": "Khu 13 Chill In Hongkong",
    "address": "80 \u0110\u01b0\u1eddng \u0110\u00f4 \u0110\u1ed1c Long, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7919476,
    "location/lng": 106.626698
  },
  {
    "title": "Khu Ngh\u1ec9 D\u01b0\u1ee1ng Sinh Th\u00e1i H\u01b0\u01a1ng Sen - Ven S\u00f4ng S\u00e0i G\u00f2n (Huong Sen Resort)",
    "address": "25 \u0111\u01b0\u1eddng 176, B\u00ecnh M\u1ef9, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, Khu tr\u1ebb em, Kh\u00e1ch s\u1ea1n ngh\u1ec9 d\u01b0\u1ee1ng, Nh\u00e0 h\u00e0ng, H\u1ed3 b\u01a1i",
    "location/lat": 10.9603327,
    "location/lng": 106.6484405
  },
  {
    "title": "Khu du l\u1ecbch B\u00ecnh Qu\u1edbi 1",
    "address": "1147 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "\u0110i\u1ec3m thu h\u00fat kh\u00e1ch du l\u1ecbch, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8302324,
    "location/lng": 106.7376293
  },
  {
    "title": "Khu du l\u1ecbch T\u00e2n C\u1ea3ng",
    "address": "A100 Ung V\u0103n Khi\u00eam, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "N\u01a1i t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi",
    "location/lat": 10.7999642,
    "location/lng": 106.7247441
  },
  {
    "title": "Khu \u0103n u\u1ed1ng, c\u00e2u c\u00e1 b\u00e8 Ph\u01b0\u1edbc Thi\u1ec7n",
    "address": "\u0111\u01b0\u1eddng ph\u01b0\u1edbc thi\u1ec7n, qu\u1eadn 9, th\u00e0nh ph\u1ed1, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n c\u00e1",
    "location/lat": 10.8457774,
    "location/lng": 106.850599
  },
  {
    "title": "Khu \u1ea8m Th\u1ef1c B\u1ebfn Ph\u00fa L\u00e2m",
    "address": "8/11 T\u00e2n H\u00f2a \u0110\u00f4ng, Ph\u01b0\u1eddng 14, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7557074,
    "location/lng": 106.634055
  },
  {
    "title": "Khu \u1ea9m th\u1ef1c sinh th\u00e1i Sen Nam B\u1ed9",
    "address": "506 \u0110. V\u00f5 Ch\u00ed C\u00f4ng, P, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8097434,
    "location/lng": 106.7927183
  },
  {
    "title": "Khui Beer Garden",
    "address": "3/79g \u0110. Song H\u00e0nh, T\u00e2n Xu\u00e2n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8785016,
    "location/lng": 106.5934095
  },
  {
    "title": "Kh\u00e1ch s\u1ea1n Ho\u00e0ng H\u00e0 Hotel - Nh\u00e0 h\u00e0ng Sushi House",
    "address": "57 Tr\u01b0\u01a1ng Qu\u1ed1c Dung, Ph\u01b0\u1eddng 10, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7965803,
    "location/lng": 106.672699
  },
  {
    "title": "Kh\u00e1ch s\u1ea1n Silverland Jolie",
    "address": "4 D, Thi S\u00e1ch, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, Nh\u00e0 h\u00e0ng, Spa",
    "location/lat": 10.777352,
    "location/lng": 106.705919
  },
  {
    "title": "Kh\u00e1ch s\u1ea1n T\u00e2n S\u01a1n Nh\u1ea5t S\u00e0i G\u00f2n (5 sao)",
    "address": "202 \u0110. Ho\u00e0ng V\u0103n Th\u1ee5, Ph\u01b0\u1eddng 9, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1, Nh\u00e0 h\u00e0ng cao c\u1ea5p",
    "location/lat": 10.8004961,
    "location/lng": 106.6708908
  },
  {
    "title": "Kh\u00f3i Qu\u00e1n - Qu\u00e1n \u0102n Qu\u1ea3ng Ng\u00e3i",
    "address": "158 \u0110. L\u00ea Th\u00fac Ho\u1ea1ch, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7884503,
    "location/lng": 106.6196683
  },
  {
    "title": "Kichi Kichi B\u00ecnh Ti\u00ean",
    "address": "298 \u0110. B\u00ecnh Ti\u00ean, Ph\u01b0\u1eddng 04, Qu\u1eadn 06, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.7464673,
    "location/lng": 106.6430077
  },
  {
    "title": "Kichi-Kichi Hu\u1ef3nh T\u1ea5n Ph\u00e1t",
    "address": "559 Hu\u1ef3nh T\u1ea5n Ph\u00e1t, T\u00e2n Thu\u1eadn \u0110\u00f4ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7428584,
    "location/lng": 106.7297895
  },
  {
    "title": "Kichi-Kichi T\u00e2n S\u01a1n Nh\u00ec",
    "address": "150 \u0110. T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8002261,
    "location/lng": 106.6325446
  },
  {
    "title": "Kim Qu\u00e1n",
    "address": "21 Green View, Nguy\u1ec5n L\u01b0\u01a1ng B\u1eb1ng (g\u00f3c \u0110\u01b0\u1eddng 16 v\u00e0, Nguy\u1ec5n L\u01b0\u01a1ng B\u1eb1ng, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7223154,
    "location/lng": 106.7262635
  },
  {
    "title": "Kimochi Sushi - Nh\u00e0 h\u00e0ng Sushi & Sashimi Nh\u1eadt B\u1ea3n",
    "address": "167/2/5 Ng\u00f4 T\u1ea5t T\u1ed1, P. 22, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Sushi mang \u0111i, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.791152,
    "location/lng": 106.7149088
  },
  {
    "title": "KunKin Garden ApartHotel & Spa",
    "address": "219/8 Ng. T\u1ea5t T\u1ed1, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng, C\u0103n h\u1ed9 \u0111\u01b0\u1ee3c ph\u1ee5c v\u1ee5",
    "location/lat": 10.790679,
    "location/lng": 106.7157144
  },
  {
    "title": "L'Usine",
    "address": "19 \u0110. L\u00ea Th\u00e1nh T\u00f4n, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Ph\u00f2ng tr\u01b0ng b\u00e0y ngh\u1ec7 thu\u1eadt, Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa n\u1eeda bu\u1ed5i, C\u1eeda h\u00e0ng \u0111\u1ed3 gia d\u1ee5ng, Nh\u00e0 h\u00e0ng ph\u1ee5c v\u1ee5 b\u1eefa tr\u01b0a, C\u1eeda h\u00e0ng qu\u1ea7n \u00e1o nam, C\u1eeda h\u00e0ng l\u01b0u ni\u1ec7m, C\u1eeda h\u00e0ng v\u0103n ph\u00f2ng ph\u1ea9m, C\u1eeda h\u00e0ng qu\u1ea7n \u00e1o n\u1eef",
    "location/lat": 10.779555,
    "location/lng": 106.703996
  },
  {
    "title": "LAGarden Restaurant",
    "address": "Lan Anh Village, B\u00ecnh An, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7854496,
    "location/lng": 106.7223664
  },
  {
    "title": "La Fiesta Phu My Hung",
    "address": "Hung, 1-1A H\u00e0 Huy T\u1eadp, Ph\u00fa M\u1ef9, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Tex-Mex",
    "location/lat": 10.7267278,
    "location/lng": 106.7137097
  },
  {
    "title": "Le Montage - bistro and bar",
    "address": "4 \u0110. S\u1ed1 7, khu d\u00e2n c\u01b0 Tr\u1ea7n Th\u00e1i, Nh\u00e0 B\u00e8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n \u0103n nh\u1ecf, Qu\u00e1n c\u00e0 ph\u00ea",
    "location/lat": 10.7237107,
    "location/lng": 106.7037345
  },
  {
    "title": "Le Palais - Dining and Banquet",
    "address": "23 \u0110. Tr\u1ea7n B\u1ea1ch \u0110\u1eb1ng, Th\u1ee7 Thi\u00eam, Tp Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7821243,
    "location/lng": 106.720066
  },
  {
    "title": "Lin food & beer 97/11 Kinh D\u01b0\u01a1ng V\u01b0\u01a1ng",
    "address": "97/11 \u0110. Kinh D\u01b0\u01a1ng V\u01b0\u01a1ng, Ph\u01b0\u1eddng 12, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7499604,
    "location/lng": 106.6296254
  },
  {
    "title": "Lotteria B\u00ecnh Ph\u00fa",
    "address": "211 -213, B\u00ecnh Ph\u00fa, Ph\u01b0\u1eddng 11, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7456719,
    "location/lng": 106.6307869
  },
  {
    "title": "Lotteria Coop Tuy L\u00fd V\u01b0\u01a1ng",
    "address": "001 T\u1ea7ng Tr\u1ec7t, Coopmart, 54 \u0110. Tuy L\u00fd V\u01b0\u01a1ng, Ph\u01b0\u1eddng 13, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7443202,
    "location/lng": 106.6550285
  },
  {
    "title": "Lotteria Ga S\u00e0i G\u00f2n",
    "address": "01 \u0110. Nguy\u1ec5n Th\u00f4ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7824056,
    "location/lng": 106.6773192
  },
  {
    "title": "Lotteria H\u1eadu Giang",
    "address": "52 \u0110. H\u1eadu Giang, Ph\u01b0\u1eddng 6, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.749778,
    "location/lng": 106.6473684
  },
  {
    "title": "Lotteria Nguy\u1ec5n V\u0103n Nghi",
    "address": "33 Nguy\u1ec5n V\u0103n Nghi, Ph\u01b0\u1eddng 4, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8216438,
    "location/lng": 106.6884523
  },
  {
    "title": "L\u00e0m T\u00ed - Food & Beer",
    "address": "504 \u0110. 3 Th\u00e1ng 2, Ph\u01b0\u1eddng 14, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bia s\u00e2n v\u01b0\u1eddn, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.766956,
    "location/lng": 106.665317
  },
  {
    "title": "L\u00e0ng \u1ea8m Th\u1ef1c 66 - CN T\u00e2n Ph\u00fa",
    "address": "237 \u0110. \u0110\u1ed9c L\u1eadp, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7930616,
    "location/lng": 106.6272458
  },
  {
    "title": "L\u00e0ng \u1ea8m Th\u1ef1c 66 CN Qu\u1eadn 10",
    "address": "H\u1ebdm 334/1 L\u00fd Th\u01b0\u1eddng Ki\u1ec7t, Ph\u01b0\u1eddng 14, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7698042,
    "location/lng": 106.6589068
  },
  {
    "title": "L\u00e3ng Qu\u00e1n",
    "address": "531 V\u0129nh Kh\u00e1nh, Ph\u01b0\u1eddng 10, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7611131,
    "location/lng": 106.7054162
  },
  {
    "title": "L\u00f2 Heo Quay T\u01b0 Nhanh",
    "address": "8 QL50, \u1ea4p 1, B\u00ecnh Ch\u00e1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71813, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7325648,
    "location/lng": 106.6602953
  },
  {
    "title": "L\u00f2 \u0110\u1ea5t BBQ",
    "address": "159 Tr\u1ea7n Tu\u1ea5n Kh\u1ea3i, Ph\u01b0\u1eddng 5, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7524357,
    "location/lng": 106.6737438
  },
  {
    "title": "L\u00f2 \u0110\u1ea5t Bbq",
    "address": "396 \u0110. Minh Ph\u1ee5ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.7600668,
    "location/lng": 106.6443595
  },
  {
    "title": "L\u00faa Beer Garden",
    "address": "492 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, C\u1ea7u Kho, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.758439,
    "location/lng": 106.6913787
  },
  {
    "title": "L\u1ea0C BUFFET L\u1ea8U RAU N\u1ea4M CN TH\u1ee6 \u0110\u1ee8C",
    "address": "37 \u0110. s\u1ed1 10, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8260738,
    "location/lng": 106.7291887
  },
  {
    "title": "L\u1ea0C BUFFET L\u1ea8U RAU N\u1ea4M CN T\u00c2N PH\u00da",
    "address": "237/2A H\u00f2a B\u00ecnh, Hi\u1ec7p T\u00e2n, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7717417,
    "location/lng": 106.6252165
  },
  {
    "title": "L\u1ea1c - Buffet L\u1ea9u Rau N\u1ea5m",
    "address": "213 \u0110. \u0110\u1eb7ng Thu\u1ef3 Tr\u00e2m, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8320102,
    "location/lng": 106.7012545
  },
  {
    "title": "L\u1ea1t An Vegan",
    "address": "46 H\u01b0ng Ph\u01b0\u1edbc 4, Khu \u0111\u00f4 th\u1ecb Ph\u00fa M\u1ef9 H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.729711,
    "location/lng": 106.70701
  },
  {
    "title": "L\u1ea8U B\u00d2 NGH\u0128A PH\u00c1T",
    "address": "15 L\u1ed9c Vinh, Ph\u01b0\u1eddng 6, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7864192,
    "location/lng": 106.6588813
  },
  {
    "title": "L\u1ea8U D\u00ca N\u1ed2I \u0110\u1ea4T TWO",
    "address": "3499 Ph\u1ea1m Th\u1ebf Hi\u1ec3n, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.704542,
    "location/lng": 106.6221703
  },
  {
    "title": "L\u1ea8U G\u00c0 L\u00c1 \u00c9 108",
    "address": "108 \u0110. Tr\u1ea7n Th\u1ecb Tr\u1ecdng, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8265664,
    "location/lng": 106.6362813
  },
  {
    "title": "L\u1ea9u & N\u01b0\u1edbng Anh Em",
    "address": "258/9 \u0110. D\u01b0\u01a1ng Qu\u1ea3ng H\u00e0m, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8303728,
    "location/lng": 106.6900555
  },
  {
    "title": "L\u1ea9u 3 Mi\u1ec1n 169k",
    "address": "417a Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8212928,
    "location/lng": 106.6957678
  },
  {
    "title": "L\u1ea9u 69k H\u1ed3 Gia",
    "address": "364 \u0110. D\u01b0\u01a1ng Qu\u1ea3ng H\u00e0m, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8318228,
    "location/lng": 106.6864739
  },
  {
    "title": "L\u1ea9u B\u00f2 Ba \u0110u\u00f4nL",
    "address": "VHWQ+PJ6, Song h\u00e0nh, \u0110 L\u00ea L\u1ee3i, T\u00e2n Hi\u1ec7p, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.89678,
    "location/lng": 106.5890203
  },
  {
    "title": "L\u1ea9u B\u00f2 C\u01b0 X\u00e1 - 3A H\u1ed3 Bi\u1ec3u Ch\u00e1nh",
    "address": "3a H\u1ed3 Bi\u1ec3u Ch\u00e1nh, Ph\u01b0\u1eddng 12, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7938917,
    "location/lng": 106.6768622
  },
  {
    "title": "L\u1ea9u B\u00f2 N\u0103m Tr\u1ecdng",
    "address": "C12/9E Mai V\u0103n V\u0129nh, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.740454,
    "location/lng": 106.7138155
  },
  {
    "title": "L\u1ea9u B\u00f2 Thi\u00ean T\u00e2n",
    "address": "21 \u0110. S\u1ed1 25, Kp 5, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8324621,
    "location/lng": 106.7280533
  },
  {
    "title": "L\u1ea9u B\u00f2 T\u00e8o g\u1ed1c",
    "address": "589/115D T\u1ed5 50, Hi\u1ec7p Th\u00e0nh, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.8854511,
    "location/lng": 106.6425293
  },
  {
    "title": "L\u1ea9u B\u0103ng Chuy\u1ec1n OSAKA.O",
    "address": "455 \u0110. L\u0169y B\u00e1n B\u00edch, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n, Nh\u00e0 h\u00e0ng l\u1ea9u l\u00f2ng ki\u1ec3u Nh\u1eadt B\u1ea3n",
    "location/lat": 10.775353,
    "location/lng": 106.632968
  },
  {
    "title": "L\u1ea9u Chay Nh\u00e0 N\u00e1t - Ph\u00fa Nhu\u1eadn",
    "address": "77B \u0110. Ho\u00e0ng V\u0103n Th\u1ee5, Ph\u01b0\u1eddng 15, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 500000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7991191,
    "location/lng": 106.6779272
  },
  {
    "title": "L\u1ea9u Chay \u0110\u1ed3ng Gi\u00e1 T\u00f4 Hi\u1ebfn Th\u00e0nh Q10",
    "address": "215 \u0110. T\u00f4 Hi\u1ebfn Th\u00e0nh, Ph\u01b0\u1eddng 13, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72501, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.779355,
    "location/lng": 106.6676158
  },
  {
    "title": "L\u1ea9u C\u00e1 C\u00f4 Th\u01b0 - TA88",
    "address": "Hem 252 L\u00fd Th\u01b0\u1eddng Ki\u1ec7t, Ph\u01b0\u1eddng 14, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7668958,
    "location/lng": 106.6602349
  },
  {
    "title": "L\u1ea9u C\u00e1 K\u00e8o 48",
    "address": "209/48 \u0110. T\u00f4n Th\u1ea5t Thuy\u1ebft, Ph\u01b0\u1eddng 3, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7547202,
    "location/lng": 106.6995064
  },
  {
    "title": "L\u1ea9u C\u00e1 K\u00e8o B\u00e0 Huy\u1ec7n",
    "address": "87 B\u00e0 Huy\u1ec7n Thanh Quan, V\u00f5 Th\u1ecb S\u00e1u, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7780714,
    "location/lng": 106.6868817
  },
  {
    "title": "L\u1ea9u C\u00e1 Thanh \u0110a",
    "address": "860/75/1, X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8123397,
    "location/lng": 106.7183532
  },
  {
    "title": "L\u1ea9u D\u00ea B\u00ecnh D\u01b0\u01a1ng 1",
    "address": "L\u00ea V\u0103n Th\u1ecd, 186 \u0110. S\u1ed1 1, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8474626,
    "location/lng": 106.657668
  },
  {
    "title": "L\u1ea9u D\u00ea B\u1ea1n T\u00f4i",
    "address": "599 \u0110\u01b0\u1eddng \u0110. Nguy\u1ec5n Ki\u1ec7m, Ph\u01b0\u1eddng 9, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8064013,
    "location/lng": 106.6783779
  },
  {
    "title": "L\u1ea9u D\u00ea Ki\u1ec3m",
    "address": "XH6Q+9X C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9608708,
    "location/lng": 106.590004
  },
  {
    "title": "L\u1ea9u D\u00ea Lu\u1eadn",
    "address": "419 L\u00ea V\u0103n L\u01b0\u01a1ng, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7386862,
    "location/lng": 106.7034471
  },
  {
    "title": "L\u1ea9u D\u00ea Quang T\u1edbi",
    "address": "903/39 Tr\u1ea7n Xu\u00e2n So\u1ea1n, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.749256,
    "location/lng": 106.6957671
  },
  {
    "title": "L\u1ea9u D\u00ea \u0110o\u00e0n R\u00e2u",
    "address": "330 Nguy\u1ec5n Oanh, Ph\u01b0\u1eddng 17, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng b\u00e1n \u0111\u1ed3 \u0103n mang v\u1ec1",
    "location/lat": 10.8402086,
    "location/lng": 106.6761001
  },
  {
    "title": "L\u1ea9u D\u00ea \u0110\u1ee9c Ph\u00e1t",
    "address": "PJ3C+GHR, Khu d\u00e2n c\u01b0 Ph\u00fa L\u1ee3i, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.703875,
    "location/lng": 106.6213934
  },
  {
    "title": "L\u1ea9u D\u00ea \u0110\u1ee9c Th\u00e0nh",
    "address": "471/7 \u0110. TTH21, T\u00e2n Th\u1edbi Hi\u1ec7p, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.860828,
    "location/lng": 106.632644
  },
  {
    "title": "L\u1ea9u G\u00e0 N\u00f2i T\u01b0 M\u1eadp 81",
    "address": "447 -449, Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8216432,
    "location/lng": 106.6969976
  },
  {
    "title": "L\u1ea9u Mini B\u1ebfp Nh\u00e0 Ng\u00f4",
    "address": "159 \u0110. Tam Ch\u00e2u, Tam Binh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.8691318,
    "location/lng": 106.7438306
  },
  {
    "title": "L\u1ea9u M\u1eafm Anh Bi",
    "address": "118 \u0110\u01b0\u1eddng s\u1ed1 435, Ph\u00fa Ho\u00e0 \u0110\u00f4ng, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 11.0217123,
    "location/lng": 106.5717452
  },
  {
    "title": "L\u1ea9u Th\u00e1i Chua Cay - L\u1ea9u G\u00e0 \u1edat Hi\u1ec3m Hai Ph\u01b0\u1ee3ng ( NAY \u0110\u1ed4I T\u00caN TH\u00c0NH B\u1ea2O NHI )",
    "address": "47 \u0110. S\u1ed1 2, Linh Xu\u00e2n, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8738582,
    "location/lng": 106.7775851
  },
  {
    "title": "L\u1ea9u b\u00f2 Quang Kh\u1ea3i Chi Nh\u00e1nh 2",
    "address": "338 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, Ph\u01b0\u1eddng C\u00f4 Giang, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.760907,
    "location/lng": 106.6952512
  },
  {
    "title": "L\u1ea9u b\u00f2 Qu\u00e1n L\u00e1",
    "address": "VH3W+552, Unnamed Road, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bia, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.8528897,
    "location/lng": 106.595403
  },
  {
    "title": "L\u1ea9u chay & coffee Hoa Sen Tr\u1eafng",
    "address": "66/19 Tr\u1ea7n V\u0103n Quang, Ph\u01b0\u1eddng 10, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.781284,
    "location/lng": 106.64785
  },
  {
    "title": "L\u1ea9u chay Thi\u1ec7n \u00dd 2",
    "address": "77 \u0110\u1ed7 Xu\u00e2n H\u1ee3p, Ph\u01b0\u1edbc Long B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.8319477,
    "location/lng": 106.7676039
  },
  {
    "title": "L\u1ea9u d\u00ea SOS",
    "address": "S\u1ed1 8 \u0110. S\u1ed1 35, P, Th\u00e0nh ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7868334,
    "location/lng": 106.7285256
  },
  {
    "title": "L\u1ea9u d\u00ea Y\u00ean H\u1ed3ng",
    "address": "5/4A T\u1ed5 58 KP4, T\u00e2n Ch\u00e1nh Hi\u1ec7p, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.8664532,
    "location/lng": 106.6343442
  },
  {
    "title": "L\u1ea9u d\u00ea \u0110\u1ed3ng H\u01b0\u01a1ng",
    "address": "663 T\u00f4 Ng\u1ecdc V\u00e2n, Tam Binh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8676909,
    "location/lng": 106.736833
  },
  {
    "title": "L\u1ea9u d\u00ea \u0110\u1ee9c D\u01b0\u1ee1ng",
    "address": "B15/1 \u0110. T\u00e2n S\u01a1n, Ph\u01b0\u1eddng 12, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.833713,
    "location/lng": 106.644406
  },
  {
    "title": "L\u1ea9u g\u00e0 l\u00e1 \u00e9 Con G\u00e0 Tr\u1ed1ng",
    "address": "18 V\u0129nh Kh\u00e1nh, Ph\u01b0\u1eddng 10, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7608214,
    "location/lng": 106.7067215
  },
  {
    "title": "L\u1ed9 Thi\u00ean Qu\u00e1n",
    "address": "73 \u0110. S\u1ed1 37, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.7442291,
    "location/lng": 106.7137617
  },
  {
    "title": "L\u1ed9 Thi\u00ean Qu\u00e1n",
    "address": "526 L\u00ea Quang \u0110\u1ecbnh, Ph\u01b0\u1eddng 1, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8160317,
    "location/lng": 106.6887625
  },
  {
    "title": "L\u1ed9 Thi\u00ean Qu\u00e1n",
    "address": "872 \u0110. Tr\u01b0\u1eddng Chinh, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8204625,
    "location/lng": 106.6309555
  },
  {
    "title": "L\u1ee5c B\u00e1t Qu\u00e1n - Nh\u00e0 h\u00e0ng Thu\u1ea7n Th\u1ef1c V\u1eadt",
    "address": "36 \u0110. S\u1ed1 2, An Ph\u00fa, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay, Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng \u0103n chay, Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.785989,
    "location/lng": 106.7531494
  },
  {
    "title": "L\u1eecA BBQ - L\u1ea9u & N\u01b0\u1edbng",
    "address": "38 (s\u1ed1 c\u0169), 441 (s\u1ed1 m\u1edbi, Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, M\u00f3n n\u01b0\u1edbng, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.8228632,
    "location/lng": 106.7015565
  },
  {
    "title": "MEN Qu\u00e1n - Kho\u00e1i M\u1ed3i & M\u00ea Bia",
    "address": "691 \u0110. Ho\u00e0ng Sa, Ph\u01b0\u1eddng 14, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7867609,
    "location/lng": 106.6837591
  },
  {
    "title": "METTA Vegetarian PN - Nh\u00e0 h\u00e0ng chay",
    "address": "100 Tr\u1ea7n Huy Li\u1ec7u, Ph\u01b0\u1eddng 15, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n chay",
    "location/lat": 10.7961839,
    "location/lng": 106.677757
  },
  {
    "title": "MILANO COFFEE Premium",
    "address": "590/2 \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng, Qu\u00e1n c\u00e0 ph\u00ea espresso, Qu\u00e1n c\u00e0 ph\u00ea internet, Ph\u00f2ng tr\u00e0, \u0110i\u1ec3m truy c\u1eadp Wi-fi",
    "location/lat": 10.8307065,
    "location/lng": 106.6794918
  },
  {
    "title": "MOO BEEF STEAK 87 CAO TRI\u1ec0U PH\u00c1T",
    "address": "87 Cao Tri\u1ec1u Ph\u00e1t, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng b\u00edt t\u1ebft, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7318412,
    "location/lng": 106.7070321
  },
  {
    "title": "MORICO - Modern Japanese Restaurant",
    "address": "92 \u0110. Nguy\u1ec5n H\u1eefu C\u1ea3nh, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n, Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng tr\u00e1ng mi\u1ec7ng, C\u1eeda h\u00e0ng kem, Nh\u00e0 h\u00e0ng sushi",
    "location/lat": 10.7908858,
    "location/lng": 106.7187283
  },
  {
    "title": "MR.POKKI",
    "address": "104 \u0110. S\u1ed1 37, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7444778,
    "location/lng": 106.7127404
  },
  {
    "title": "Maison De Charme Restaurant & Events",
    "address": "Tr\u1ea7n Xu\u00e2n So\u1ea1n, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "\u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7468822,
    "location/lng": 106.7012084
  },
  {
    "title": "Manmaru 1 Japanese Restaurant",
    "address": "71 M\u1ea1c \u0110\u0129nh Chi Qu\u1eadn 1, Dakao Ward, 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Izakaya",
    "location/lat": 10.7881159,
    "location/lng": 106.6956813
  },
  {
    "title": "Manwah - Taiwanese Hotpot An D\u01b0\u01a1ng V\u01b0\u01a1ng",
    "address": "65 \u0110. An D\u01b0\u01a1ng V\u01b0\u01a1ng, Ph\u01b0\u1eddng 8, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u, Nh\u00e0 h\u00e0ng \u0110\u00e0i Loan",
    "location/lat": 10.7568929,
    "location/lng": 106.6716124
  },
  {
    "title": "Manwah - Taiwanese Hotpot Lotte G\u00f2 V\u1ea5p",
    "address": "242 Nguy\u1ec5n V\u0103n L\u01b0\u1ee3ng, Ph\u01b0\u1eddng 10, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0110\u00e0i Loan, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.8379617,
    "location/lng": 106.6707641
  },
  {
    "title": "Mars Venus Restaurant - Wine Cellar",
    "address": "176/9 \u0110. L\u00ea V\u0103n S\u1ef9, Ph\u01b0\u1eddng 10, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ch\u00e2u \u00c2u, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7931152,
    "location/lng": 106.6715497
  },
  {
    "title": "Matchandeul Korean BBQ",
    "address": "49 Cao Tri\u1ec1u Ph\u00e1t, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.731812,
    "location/lng": 106.7083296
  },
  {
    "title": "Mayonaka Restaurant & Sushi Bar",
    "address": "\u0110. \u0110\u1ec1 Th\u00e1m, Ph\u01b0\u1eddng C\u00f4 Giang, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 860000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7654978,
    "location/lng": 106.6946785
  },
  {
    "title": "McDonald\u2019s",
    "address": "683 \u0110. \u00c2u C\u01a1, T\u00e2n Th\u00e0nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh, Qu\u00e1n c\u00e0 ph\u00ea, C\u1eeda h\u00e0ng kem, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7884856,
    "location/lng": 106.6405601
  },
  {
    "title": "Metta Vegetarian - Qu\u00e1n chay",
    "address": "S\u1ed1 6 \u0110. S\u1ed1 19, Khu B, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.797603,
    "location/lng": 106.7415085
  },
  {
    "title": "Metta Vegetarian Q3",
    "address": "25C T\u00fa X\u01b0\u01a1ng, V\u00f5 Th\u1ecb S\u00e1u, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7820964,
    "location/lng": 106.688015
  },
  {
    "title": "Mi\u0300 Y\u0301 Double B",
    "address": "266/70 \u0110. T\u00f4 Hi\u1ebfn Th\u00e0nh, C\u01b0 x\u00e1 B\u1eafc H\u1ea3i, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7795635,
    "location/lng": 106.6652777
  },
  {
    "title": "Moshi Sushi",
    "address": "H\u1ebbm 181 \u0110. 3 Th\u00e1ng 2, Ph\u01b0\u1eddng 11, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7720778,
    "location/lng": 106.6751578
  },
  {
    "title": "Mr Mlem C\u01a1 s\u1edf 7 - H\u1ec7 th\u1ed1ng Buffet N\u01b0\u1edbng Ch\u1ea3o 139k",
    "address": "531 \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.800826,
    "location/lng": 106.7159529
  },
  {
    "title": "Mr.Saigon - M\u00ec \u00dd, Salad S\u00e0i G\u00f2n - L\u00ea Lai",
    "address": "75 L\u00ea Lai, Ph\u01b0\u1eddng 3, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ph\u01b0\u01a1ng T\u00e2y",
    "location/lat": 10.8187205,
    "location/lng": 106.6825675
  },
  {
    "title": "M\u00ec Cay Sasin T\u00e2n Ph\u00fa",
    "address": "105 \u0110. T\u00e2n Th\u1eafng, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n m\u00ec, Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8010141,
    "location/lng": 106.6185278
  },
  {
    "title": "M\u00ec Cay Seoul",
    "address": "321 \u0110. L\u00ea Tr\u1ecdng T\u1ea5n, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72010, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8076022,
    "location/lng": 106.6205128
  },
  {
    "title": "M\u00ec Cay Seoul",
    "address": "737 \u0110. L\u0169y B\u00e1n B\u00edch, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7832408,
    "location/lng": 106.636028
  },
  {
    "title": "M\u00ec Cay Seoul G\u00f2 V\u1ea5p - 04 L\u00ea \u0110\u1ee9c Th\u1ecd",
    "address": "4 \u0110. L\u00ea \u0110\u1ee9c Th\u1ecd, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.830742,
    "location/lng": 106.682075
  },
  {
    "title": "M\u00ec Cay Seoul Ho\u00e0ng Di\u1ec7u Qu\u1eadn 4",
    "address": "80, Ho\u00e0ng Di\u1ec7u, Ph\u01b0\u1eddng 13, Qu\u1eadn 4, Tp. H\u1ed3 Ch\u00ed Minh, 78 \u0110. Ho\u00e0ng Di\u1ec7u, Ph\u01b0\u1eddng 12, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.764409,
    "location/lng": 106.704863
  },
  {
    "title": "M\u00ec Cay Seoul Nguy\u1ec5n V\u0103n T\u0103ng",
    "address": "309 Nguy\u1ec5n V\u0103n T\u0103ng, Long Th\u1ea1nh M\u1ef9, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8415728,
    "location/lng": 106.8230691
  },
  {
    "title": "M\u00ec Cay Seoul Qu\u1eadn 8",
    "address": "90 D\u01b0\u01a1ng Quang \u0110\u00f4ng, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7366559,
    "location/lng": 106.6672017
  },
  {
    "title": "M\u00ec L\u1ea1nh Yoo Chun",
    "address": "3 Khu Ph\u1ed1 M\u1ef9 Ho\u00e0ng, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7282018,
    "location/lng": 106.7102289
  },
  {
    "title": "M\u00ec Qu\u1ea3ng B\u00e0 Ngo\u1ea1i",
    "address": "915a Nguy\u1ec5n Xi\u1ec3n, Long Th\u1ea1nh M\u1ef9, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8530975,
    "location/lng": 106.8334882
  },
  {
    "title": "M\u00ec Qu\u1ea3ng Tr\u00ed H\u1ed9i An",
    "address": "138 B\u00e0u C\u00e1t 2, Ph\u01b0\u1eddng 12, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7923856,
    "location/lng": 106.645875
  },
  {
    "title": "M\u00ec V\u1ecbt Ti\u1ec1m Thi\u00eam Huy",
    "address": "455 \u0110. Nguy\u1ec5n Tr\u00e3i, Ph\u01b0\u1eddng 7, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7550388,
    "location/lng": 106.6727799
  },
  {
    "title": "M\u00ec cay Nam H\u00e0n - tokbkkki - \u0103n v\u1eb7t qu\u1eadn g\u00f2 v\u1ea5p",
    "address": "61/59 \u0110. s\u1ed1 59, Ph\u01b0\u1eddng 14, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8530091,
    "location/lng": 106.6495483
  },
  {
    "title": "M\u00ec cay Sasin",
    "address": "233A \u0110. Nguy\u1ec5n V\u0103n Lu\u00f4ng, Ph\u01b0\u1eddng 11, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.745028,
    "location/lng": 106.634747
  },
  {
    "title": "M\u00ec cay Sasin G\u00f2 V\u1ea5p",
    "address": "351 \u0110\u01b0\u1eddng L\u00ea V\u0103n Tho, Ph\u01b0\u1eddng 9, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n m\u00ec, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8466482,
    "location/lng": 106.6568445
  },
  {
    "title": "M\u00ec cay Shin Qu\u1eadn 8",
    "address": "43 L\u01b0\u01a1ng V\u0103n Can, Ph\u01b0\u1eddng 15, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7346277,
    "location/lng": 106.6399612
  },
  {
    "title": "M\u00ec tr\u1ed9n Park Kim Thang T\u00e2n Ph\u00fa",
    "address": "219 L\u00ea Cao L\u00e3ng, Ph\u00fa Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7808619,
    "location/lng": 106.6211445
  },
  {
    "title": "M\u00ec \u00dd - Ph\u1ed1 Spaghetti",
    "address": "535/8 \u0110. Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u00fd",
    "location/lat": 10.847531,
    "location/lng": 106.6643757
  },
  {
    "title": "M\u00ec \u1ed1c h\u1ebfn M\u00e1 Lan (CN Q.7)",
    "address": "76 \u0110\u01b0\u1eddng S\u1ed1 7, T\u00e2n Ki\u1ec3ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7470978,
    "location/lng": 106.707784
  },
  {
    "title": "M\u00f9a V\u00e0ng The Warehouse",
    "address": "N\u1eb1m trong khu\u00f4n vi\u00ean si\u00eau th\u1ecb Big C, 268 \u0110. T\u00f4 Hi\u1ebfn Th\u00e0nh, Ph\u01b0\u1eddng 15, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7792011,
    "location/lng": 106.6651091
  },
  {
    "title": "M\u1ef3 cay - G\u00e0 R\u00e1n - Tr\u00e0 S\u1eefa- \u0102n V\u1eb7t 79",
    "address": "2185 Hu\u1ef3nh T\u1ea5n Ph\u00e1t, TT. Nh\u00e0 B\u00e8, Nh\u00e0 B\u00e8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.6907101,
    "location/lng": 106.7417974
  },
  {
    "title": "NAI V\u00c0NG NEW",
    "address": "27 \u0110. Nguy\u1ec5n V\u0103n B\u00e1, Khu Ph\u1ed1 3, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8445131,
    "location/lng": 106.7701797
  },
  {
    "title": "NG\u00d5 CHAY VEGETARIAN",
    "address": "220/24 \u0110. Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 10, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8365383,
    "location/lng": 106.6652107
  },
  {
    "title": "NH B\u00fan Ch\u1ea3 H\u00e0 N\u1ed9i X\u01b0a",
    "address": "973 \u0110\u01b0\u01a1\u0300ng Ph\u1ea1m V\u0103n B\u1ea1ch, Ph\u01b0\u1eddng 12, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8351924,
    "location/lng": 106.6442012
  },
  {
    "title": "NH\u00c0 H\u00c0NG BUFFET 123K N\u01af\u1edaNG NGON - CN TH\u1edaI AN (T\u1eea HI\u1ec6P TH\u00c0NH D\u1edcI V\u1ec0)",
    "address": "96A Nguy\u1ec5n Th\u1ecb Ki\u00eau, Th\u1edbi An, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8755595,
    "location/lng": 106.6530807
  },
  {
    "title": "NH\u00c0 H\u00c0NG TH\u1ee6Y MINH CH\u00c2U 3",
    "address": "37 Tr\u1ea7n Qu\u00fd Ki\u00ean, Ph\u01b0\u1eddng Th\u1ea1nh M\u1ef9 L\u1ee3i, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7722978,
    "location/lng": 106.7525716
  },
  {
    "title": "NH\u00c0 H\u00c0NG \u1ea8m Th\u1ef1c B\u1ebfn X\u01b0a",
    "address": "6/1G Nguy\u1ec5n Th\u1ecb Th\u1eadp, B\u00ecnh Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh, Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.7393065,
    "location/lng": 106.7228071
  },
  {
    "title": "NOIR . Dining in the Dark Saigon",
    "address": "180D Hai B\u00e0 Tr\u01b0ng, Street, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 710000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng lai \u00c1, Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng Ch\u00e2u \u00c2u, Nh\u00e0 h\u00e0ng h\u1ed7n h\u1ee3p, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7866367,
    "location/lng": 106.6946782
  },
  {
    "title": "Naked Sushi Ph\u00f9ng Kh\u1eafc Khoan",
    "address": "22 \u0110. Ph\u00f9ng Kh\u1eafc Khoan, P, Q.01, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.785539,
    "location/lng": 106.6971473
  },
  {
    "title": "Nathalie's Thai Restaurant",
    "address": "23 B\u00f9i B\u1eb1ng \u0110o\u00e0n, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Th\u00e1i Lan",
    "location/lat": 10.7293758,
    "location/lng": 106.7087402
  },
  {
    "title": "Nem Nam Restaurant",
    "address": "C\u1ea3nh vi\u00ean 1, Ph\u1ed1 Ti\u1ec3u Nam/25 T\u00e2n Ph\u00fa, Ward, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7223235,
    "location/lng": 106.7297757
  },
  {
    "title": "Nem n\u01b0\u1edbng nia",
    "address": "50 \u0110. Ho\u00e0ng Di\u1ec7u, Ph\u01b0\u1eddng 12, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7648759,
    "location/lng": 106.7060125
  },
  {
    "title": "Ng\u00f5 Th\u00e1i",
    "address": "945/64B \u0110. L\u00ea \u0110\u1ee9c Th\u1ecd, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng Th\u00e1i Lan",
    "location/lat": 10.848618,
    "location/lng": 106.6622928
  },
  {
    "title": "Ng\u00f5 Th\u00e1i 2",
    "address": "48 \u0110. S\u1ed1 1, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8453303,
    "location/lng": 106.6626722
  },
  {
    "title": "Ng\u1ecdc Hoa Tr\u00e9 Tr\u1ed9n",
    "address": "\u0110\u01b0\u1eddng Xu\u00e2n Th\u1edbi S\u01a1n 19, \u1ea4p 3, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8703566,
    "location/lng": 106.5833891
  },
  {
    "title": "Ng\u1ecdc khanh qu\u00e1n",
    "address": "S\u1ed1 02 \u0110\u01b0\u1eddng 808 \u1ea5p Ph\u00fa Trung, An Ph\u00fa, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.1268237,
    "location/lng": 106.4920387
  },
  {
    "title": "Nh\u00e0 H\u00e0ng - H\u1ea7m R\u01b0\u1ee3u - Karaoke SOS",
    "address": "122 \u0110\u01b0\u1eddng S\u1ed1 7, T\u00e2n Ki\u1ec3ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7469308,
    "location/lng": 106.7059376
  },
  {
    "title": "Nh\u00e0 H\u00e0ng 39 | Nh\u00e0 H\u00e0ng \u0110\u1eb7c S\u1ea3n Qu\u1eadn 7",
    "address": "2 \u0110\u01b0\u1eddng s\u1ed1 39, B\u00ecnh Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72914, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7439342,
    "location/lng": 106.7176332
  },
  {
    "title": "Nh\u00e0 H\u00e0ng 939 H\u00f2n Ch\u1ed3ng",
    "address": "927 \u0110. Ho\u00e0ng Sa, Ph\u01b0\u1eddng 11, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7856908,
    "location/lng": 106.6751492
  },
  {
    "title": "Nh\u00e0 H\u00e0ng AGA Steak House",
    "address": "72/24 \u0110. Phan \u0110\u0103ng L\u01b0u, Ph\u01b0\u1eddng 5, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8049908,
    "location/lng": 106.6865703
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Buffet Chay T\u1ecbnh T\u00e2m Trai",
    "address": "145/1 \u0110\u1ed7 Xu\u00e2n H\u1ee3p, Ph\u01b0\u1edbc Long B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.8285791,
    "location/lng": 106.7694213
  },
  {
    "title": "Nh\u00e0 H\u00e0ng B\u00e1nh Tr\u00e1ng Tr\u1ea3ng B\u00e0ng Ho\u00e0ng Ty 1",
    "address": "133/9 B\u00ecnh Qu\u1edbi, C\u01b0 x\u00e1 Thanh \u0110a, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.819554,
    "location/lng": 106.722649
  },
  {
    "title": "Nh\u00e0 H\u00e0ng B\u00e1t G\u1ed1m",
    "address": "\u0110. 18, Ph\u00fa M\u1ef9, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7218135,
    "location/lng": 106.7300902
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Ca N\u00f4| Nh\u00e0 H\u00e0ng H\u1ea3i S\u1ea3n Th\u1ee7 \u0110\u1ee9c| \u1ea8m Th\u1ef1c \u0110\u1ed3ng Qu\u00ea Th\u1ee7 \u0110\u1ee9c",
    "address": "625/18 QL13, Hi\u1ec7p B\u00ecnh Ph\u01b0\u1edbc, Th\u1ee7 \u0110\u1ee9c, B\u00ecnh D\u01b0\u01a1ng, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8553831,
    "location/lng": 106.7194667
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chang Kang Kung Aeon Mall T\u00e2n Ph\u00fa",
    "address": "T\u1ea7ng 3 TTTM Aeon mall, 30 \u0110. T\u00e2n Th\u1eafng, Celadon City, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8010081,
    "location/lng": 106.6166855
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chay M\u1ed8C NHI\u00caN - Tr\u01b0\u1eddng Sa",
    "address": "810 \u0110. Tr\u01b0\u1eddng Sa, Ph\u01b0\u1eddng 14, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7881937,
    "location/lng": 106.6827688
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chay M\u1ed9c Nhi\u00ean - L\u1ed9c V\u1eebng",
    "address": "535 QL13, Hi\u1ec7p B\u00ecnh Ph\u01b0\u1edbc, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n chay, Nh\u00e0 h\u00e0ng m\u00f3n chay, Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.8479074,
    "location/lng": 106.7178267
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chay N\u1ea5m Thi\u00ean \u0110\u00e0ng",
    "address": "278 L\u00ea V\u0103n L\u01b0\u01a1ng, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7427707,
    "location/lng": 106.703855
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chay S\u00e2n M\u00e2y",
    "address": "771 L\u00ea H\u1ed3ng Phong, Ph\u01b0\u1eddng 12, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay, Nh\u00e0 h\u00e0ng \u0103n chay",
    "location/lat": 10.772202,
    "location/lng": 106.6721722
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chay Thi\u1ec1n \u00dd",
    "address": "36 Tr\u1ea7n Qu\u00fd C\u00e1p, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.8162379,
    "location/lng": 106.6961922
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chay \u0110\u00f3a Sen V\u00e0ng Tr\u1ea7n H\u01b0ng \u0110\u1ea1o",
    "address": "5 \u0110\u01b0\u1eddng Tr\u1ea7n H\u01b0ng \u0110\u1ea1o, T\u00e2n Th\u00e0nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7950348,
    "location/lng": 106.637487
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Chef Mamma`s",
    "address": "25 H\u1eadu Giang, Ph\u01b0\u1eddng 4, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u00fd",
    "location/lat": 10.8077947,
    "location/lng": 106.6631739
  },
  {
    "title": "Nh\u00e0 H\u00e0ng C\u00e1nh \u0110\u1ed3ng Gi\u00f3",
    "address": "WJ65+5QJ, \u0110\u01b0\u1eddng Trung, \u0110\u00f4ng 8, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9104546,
    "location/lng": 106.6094007
  },
  {
    "title": "Nh\u00e0 H\u00e0ng C\u01a1m Ni\u00eau \u0110\u1ec7 Nh\u1ea5t",
    "address": "695 \u0110\u1ed7 Xu\u00e2n H\u1ee3p, Ph\u01b0\u1edbc Long B, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 100000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7970794,
    "location/lng": 106.7805714
  },
  {
    "title": "Nh\u00e0 H\u00e0ng C\u1ea7u Tr\u1eafng",
    "address": "287A B\u00ecnh Long, B\u00ecnh H\u01b0ng Ho\u00e0 A, B\u00ecnh T\u00e2n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.788978,
    "location/lng": 106.6167509
  },
  {
    "title": "Nh\u00e0 H\u00e0ng D\u00ea T\u01b0\u01a1i V\u0129nh L\u1ed9c 4",
    "address": "406 L\u00ea Th\u1ecb H\u00e0, T\u00e2n Xu\u00e2n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8817778,
    "location/lng": 106.599048
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Gia Ph\u00fa Ph\u00fac Ki\u1ebfn \u5609\u5bcc\u798f\u5efa\u83dc\u9928",
    "address": "513 \u0110. Gia Ph\u00fa, Ph\u01b0\u1eddng 3, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c",
    "location/lat": 10.7427053,
    "location/lng": 106.6463833
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Hoa vi\u00ean Tri K\u1ef7",
    "address": "123 \u0110. H\u1ed3ng H\u00e0, Ph\u01b0\u1eddng 9, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8102932,
    "location/lng": 106.6723832
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Ho\u00e0ng Gia",
    "address": "12 H\u1ebbm 324 L\u00fd Th\u01b0\u1eddng Ki\u1ec7t, Ph\u01b0\u1eddng 14, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7693058,
    "location/lng": 106.6593124
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u01b0\u01a1ng B\u1eafc",
    "address": "6 \u0110\u01b0\u1eddng B - B\u1eafc, Khu \u0111\u00f4 th\u1ecb Ph\u00fa M\u1ef9 H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.7314419,
    "location/lng": 106.7244114
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u01b0\u01a1ng Huy\u1ec1n X\u1ea3 Gi\u00f3",
    "address": "7h \u0110. B\u00f9i Minh Tr\u1ef1c, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng lai \u00c1, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7369633,
    "location/lng": 106.6570623
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u1ea3i S\u1ea3n 1A",
    "address": "1A \u0110. C\u1ea7m B\u00e1 Th\u01b0\u1edbc, Ph\u01b0\u1eddng 7, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa n\u1eeda bu\u1ed5i",
    "location/lat": 10.8031273,
    "location/lng": 106.6866121
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u1ea3i S\u1ea3n Giang Gh\u1eb9",
    "address": "680 \u0110. Tr\u01b0\u1eddng Chinh, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8062351,
    "location/lng": 106.6352005
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u1ea3i S\u1ea3n R\u1ea1n Bi\u1ec3n 9",
    "address": "42 Tr\u1ea7n \u0110\u00ecnh Xu, Ph\u01b0\u1eddng C\u00f4 Giang, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7597155,
    "location/lng": 106.6920659
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u1ea3i S\u1ea3n T\u00fac M\u1ea1ch",
    "address": "32 - 34 - 36 \u0110. L\u00fd Chi\u00eau Ho\u00e0ng, Ph\u01b0\u1eddng 10, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 746000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1, Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c",
    "location/lat": 10.73807,
    "location/lng": 106.6286018
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u1ea3i Th\u00e0nh",
    "address": "39/30 \u0110. S\u1ed1 102, T\u0103ng Nh\u01a1n Ph\u00fa A, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8391072,
    "location/lng": 106.7889011
  },
  {
    "title": "Nh\u00e0 H\u00e0ng H\u1ea7m R\u01b0\u1ee3u Tr\u1ea7n Long - CN G\u00f2 V\u1ea5p",
    "address": "545 Nguy\u1ec5n Oanh, Ph\u01b0\u1eddng 17, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8498456,
    "location/lng": 106.6785584
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Karaoke Thu\u1ef7 Tr\u00fac 1",
    "address": "81, H\u1ebbm/186 \u0110. V\u01b0\u1eddn L\u00e0i, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7892647,
    "location/lng": 106.6274021
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Kh\u00f4ng Gian",
    "address": "\u0110. S\u1ed1 23, Khu Ph\u1ed1 5, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8256806,
    "location/lng": 106.7295884
  },
  {
    "title": "Nh\u00e0 H\u00e0ng NS B\u1ebfn Thuy\u1ec1n",
    "address": "11 \u0110. Nguy\u1ec5n V\u0103n Tr\u1ed7i, Ph\u01b0\u1eddng 14, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7919597,
    "location/lng": 106.6811462
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Nam \u00c1",
    "address": "127 \u0110. H\u1ed3ng H\u00e0, Ph\u01b0\u1eddng 9, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8096099,
    "location/lng": 106.6735276
  },
  {
    "title": "Nh\u00e0 H\u00e0ng OhVang",
    "address": "208 B\u00f9i V\u0103n Ba, T\u00e2n Thu\u1eadn \u0110\u00f4ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7487522,
    "location/lng": 106.7358938
  },
  {
    "title": "Nh\u00e0 H\u00e0ng R\u1ea1ch D\u1ee9a",
    "address": "53/4 \u0110\u01b0\u1eddng 181, B\u00ecnh M\u1ef9, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.9698151,
    "location/lng": 106.6449687
  },
  {
    "title": "Nh\u00e0 H\u00e0ng S\u00e2n V\u01b0\u1eddn 360",
    "address": "336/27 Nguy\u1ec5n V\u0103n Lu\u00f4ng, Ph\u01b0\u1eddng 12, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7515259,
    "location/lng": 106.6368082
  },
  {
    "title": "Nh\u00e0 H\u00e0ng S\u00e2n V\u01b0\u1eddn T\u01b0 Tr\u00ec - Nh\u00e0 H\u00e0ng Ti\u1ec7c C\u01b0\u1edbi",
    "address": "499 L\u00ea V\u0103n Th\u1ecd, Ph\u01b0\u1eddng 9, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng, Khu \u0103n u\u1ed1ng, Giao \u0111\u1ed3 \u0103n, Nh\u00e0 t\u1ed5 ch\u1ee9c bu\u1ed5i ti\u1ec7c, C\u00f4ng vi\u00ean xe d\u00e3 ngo\u1ea1i",
    "location/lat": 10.8503742,
    "location/lng": 106.6560225
  },
  {
    "title": "Nh\u00e0 H\u00e0ng S\u00f4ng",
    "address": "56-58, \u0110\u01b0\u1eddng \u0110. L\u00ea H\u1ed3ng Phong, Ph\u01b0\u1eddng 2, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Qu\u1ea3ng \u0110\u00f4ng",
    "location/lat": 10.7557019,
    "location/lng": 106.6786895
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Th\u1ee7y",
    "address": "261 Ung V\u0103n Khi\u00eam, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng, Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.8037045,
    "location/lng": 106.7224311
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Ti\u1ec7c C\u01b0\u1edbi H\u01b0\u01a1ng Ph\u1ed1",
    "address": "A12 \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Trung t\u00e2m h\u1ed9i th\u1ea3o, N\u01a1i t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Nh\u00e0 h\u00e0ng, Nh\u00e0 t\u1ed5 ch\u1ee9c \u0111\u00e1m c\u01b0\u1edbi, D\u1ecbch v\u1ee5 c\u01b0\u1edbi h\u1ecfi, \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi",
    "location/lat": 10.8287013,
    "location/lng": 106.6833645
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Ti\u1ec7c C\u01b0\u1edbi Melisa",
    "address": "H\u1ebbm 1020 Tho\u1ea1i Ng\u1ecdc H\u1ea7u, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7823796,
    "location/lng": 106.6368605
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Ti\u1ec7c C\u01b0\u1edbi \u00c1 \u0110\u00f4ng",
    "address": "1120 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, Ph\u01b0\u1eddng 6, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7510962,
    "location/lng": 106.6673103
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Truy\u1ec1n Thuy\u1ebft Champong Qu\u1eadn 2",
    "address": "62 Nguy\u1ec5n Ho\u00e0ng, An Ph\u00fa, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7960779,
    "location/lng": 106.7449256
  },
  {
    "title": "Nh\u00e0 H\u00e0ng Yu Shang Lou \u5fa1\u5c1a\u6a13\u7cb5\u83dc\u6d77\u9bae\u9152\u5bb6",
    "address": "975 \u0110. Tr\u1ea7n H\u01b0ng \u0110\u1ea1o, Ph\u01b0\u1eddng 5, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c, Nh\u00e0 h\u00e0ng Qu\u1ea3ng \u0110\u00f4ng, Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7538856,
    "location/lng": 106.6765454
  },
  {
    "title": "Nh\u00e0 H\u00e0ng \u0110\u1ea1i D\u01b0\u01a1ng",
    "address": "262 \u0110. Minh Ph\u1ee5ng, P.02, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7558213,
    "location/lng": 106.6435863
  },
  {
    "title": "Nh\u00e0 H\u00e0ng \u0110\u1ea5t S\u00e9t",
    "address": "16 L\u00ea H\u1ed3ng Phong, Ph\u01b0\u1eddng 12, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.7747752,
    "location/lng": 106.6718178
  },
  {
    "title": "Nh\u00e0 H\u00e0ng \u1ea8m Th\u1ef1c 316",
    "address": "316 \u0110. T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7968854,
    "location/lng": 106.6305093
  },
  {
    "title": "Nh\u00e0 H\u00e0ng \u1ea8m Th\u1ef1c C\u00e1nh \u0110\u1ed3ng Hoang",
    "address": "32/5 \u0110\u01b0\u1eddng Trung \u0110\u00f4ng 7, \u1ea4p Trung \u0110\u00f4ng, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9051194,
    "location/lng": 106.6144825
  },
  {
    "title": "Nh\u00e0 H\u00e0ng \u1ea8m Th\u1ef1c H\u01b0\u01a1ng Sen",
    "address": "500 Mu\u1ed3ng T\u00edm , Ph\u01b0\u1eddng C\u00e1t L\u00e1i , Qu\u1eadn 2, Th\u00e0nh Ph\u1ed1, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u1ea9m th\u1ef1c \u0111\u1ed3ng qu\u00ea, Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7728995,
    "location/lng": 106.7846438
  },
  {
    "title": "Nh\u00e0 H\u00e0ng \u1ea8m Th\u1ef1c Qu\u00ea T\u00f4i",
    "address": "129 \u0110. T\u00e2n S\u01a1n, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8204469,
    "location/lng": 106.6390008
  },
  {
    "title": "Nh\u00e0 H\u00e0ng \u1ea8m Th\u1ef1c V\u01b0\u1eddn Xanh",
    "address": "53/22A \u0110\u01b0\u1eddng S\u1ed1 4, P, Th\u00e0nh Ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8378717,
    "location/lng": 106.723248
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Busan Korean Food",
    "address": "92 Nguy\u1ec5n Gia Tr\u00ed, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8037605,
    "location/lng": 106.7159592
  },
  {
    "title": "Nh\u00e0 h\u00e0ng B\u00ean S\u00f4ng",
    "address": "88 \u0110. 26, Khu Ph\u1ed1 5, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8296476,
    "location/lng": 106.7329843
  },
  {
    "title": "Nh\u00e0 h\u00e0ng B\u00ecnh An",
    "address": "1163 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.833024,
    "location/lng": 106.738805
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Chay B\u1ebfp xanh An Duy\u00ean",
    "address": "10 \u0110. Nguy\u1ec5n Tri Ph\u01b0\u01a1ng, Ph\u01b0\u1eddng 6, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay, Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng, Nh\u00e0 h\u00e0ng \u0103n chay",
    "location/lat": 10.7513161,
    "location/lng": 106.669511
  },
  {
    "title": "Nh\u00e0 h\u00e0ng C\u00e2y Sak\u00ea",
    "address": "440/6 N\u01a1 Trang Long, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72311, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8232401,
    "location/lng": 106.7088142
  },
  {
    "title": "Nh\u00e0 h\u00e0ng C\u1ea7n Phong 2",
    "address": "C100 Nguy\u1ec5n V\u0103n Qu\u00e1, \u0110\u00f4ng H\u01b0ng Thu\u1eadn, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8443322,
    "location/lng": 106.6319342
  },
  {
    "title": "Nh\u00e0 h\u00e0ng G\u1ea1o N\u1ebfp Q9",
    "address": "1 \u0110.D6, P, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 714100, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.8130349,
    "location/lng": 106.7817657
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Hai L\u00faa",
    "address": "648 \u0110. Nguy\u1ec5n Tr\u00e3i, Ph\u01b0\u1eddng 11, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7537027,
    "location/lng": 106.6643941
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Hanuri",
    "address": "736 \u0110. S\u01b0 V\u1ea1n H\u1ea1nh, Ph\u01b0\u1eddng 12, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa n\u1eeda bu\u1ed5i, Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7720566,
    "location/lng": 106.6696638
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Hoa - Gi\u00f3",
    "address": "527 Tr\u1ea7n V\u0103n M\u01b0\u1eddi, Xu\u00e2n Th\u1edbi Th\u01b0\u1ee3ng, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8575404,
    "location/lng": 106.5900849
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Hoa vi\u00ean Ao \u0110\u00f4i",
    "address": "1/174A \u0110\u00ecnh Phong Ph\u00fa, T\u0103ng Nh\u01a1n Ph\u00fa B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8340532,
    "location/lng": 106.7855953
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Hoa vi\u00ean S\u01a1n Thu\u1ef7",
    "address": "16 \u0110\u01b0\u1eddng S\u1ed1 1, Khu Ph\u1ed1 Gi\u00e3n D\u00e2n, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8679867,
    "location/lng": 106.8143542
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Ho\u00e0ng T\u00e2m - Phan X\u00edch Long",
    "address": "352 Phan X\u00edch Long, Ph\u01b0\u1eddng 2, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7993365,
    "location/lng": 106.6863256
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Ho\u00e0ng T\u00e2m - Ph\u00fa M\u1ef9 H\u01b0ng",
    "address": "24 Raymondienne, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7287894,
    "location/lng": 106.726288
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Hu\u1ebf",
    "address": "1163 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8299378,
    "location/lng": 106.7399004
  },
  {
    "title": "Nh\u00e0 h\u00e0ng H\u01b0\u01a1ng Sen",
    "address": "96 Thanh \u0110a, C\u01b0 x\u00e1 Thanh \u0110a, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8191009,
    "location/lng": 106.7182973
  },
  {
    "title": "Nh\u00e0 h\u00e0ng H\u1ea3i S\u1ea3n Bi\u1ec3n Nh\u1edb 5 t\u1ea1i Ph\u01b0\u1edbc Ki\u1ec3n",
    "address": "A12 \u0110\u01b0\u1eddng S\u1ed1 4, Ph\u01b0\u1edbc Ki\u1ec3n, Nh\u00e0 B\u00e8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7239254,
    "location/lng": 106.7040991
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Luxury Palace",
    "address": "171 Nguy\u1ec5n Th\u00e1i S\u01a1n, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.827434,
    "location/lng": 106.6896502
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Minh Anh",
    "address": "709 Nguy\u1ec5n Th\u1ecb \u0110\u1ecbnh, C\u00e1t L\u00e1i, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7738693,
    "location/lng": 106.7701052
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Nam B\u1ed9",
    "address": "200 \u0110. Tr\u1ea7n N\u00e3o, P. B\u00ecnh An, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7899848,
    "location/lng": 106.7299176
  },
  {
    "title": "Nh\u00e0 h\u00e0ng N\u0103m L\u1eeda 18",
    "address": "S\u1ed1 2. Kdc, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8654064,
    "location/lng": 106.7341171
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Phong Cua 1",
    "address": "1019A B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8209404,
    "location/lng": 106.7273249
  },
  {
    "title": "Nh\u00e0 h\u00e0ng S:1",
    "address": "679 \u0110\u1ed7 Xu\u00e2n H\u1ee3p, Ph\u01b0\u1edbc Long B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u1ea9m th\u1ef1c \u0111\u1ed3ng qu\u00ea",
    "location/lat": 10.7985096,
    "location/lng": 106.7813101
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Sepia",
    "address": "1 Kh\u1ed5ng T\u1eed, B\u00ecnh Th\u1ecd, Th\u00e0nh Ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8432965,
    "location/lng": 106.7694749
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Sesan",
    "address": "14 Einstein, B\u00ecnh Th\u1ecd, Th\u00e0nh Ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8438291,
    "location/lng": 106.7668457
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Sugar Town - V\u1ea1n Ph\u00fac",
    "address": "S\u1ed1 2 \u0110\u01b0\u1eddng s\u1ed1 18, Khu \u0111\u00f4 Th\u1ecb V\u1ea1n Ph\u00fac, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, C\u1eeda h\u00e0ng b\u00e1nh ng\u1ecdt, Qu\u00e1n \u0103n nh\u1eb9",
    "location/lat": 10.8443831,
    "location/lng": 106.7051252
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Th\u1ee7y M\u1ed9c",
    "address": "B309 \u0110\u01b0\u1eddng S\u1ed1 8, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7319843,
    "location/lng": 106.7029078
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Tr\u0103m N\u0103m",
    "address": "36 \u0110\u01b0\u1eddng s\u1ed1 6, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng H\u00e0n Qu\u1ed1c",
    "location/lat": 10.7301953,
    "location/lng": 106.7082948
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Tu\u1ea5n M\u1eadp",
    "address": "31 \u0110. V\u01b0\u1eddn L\u00e0i, Ph\u00fa Th\u1ecd Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7869375,
    "location/lng": 106.6350281
  },
  {
    "title": "Nh\u00e0 h\u00e0ng T\u00e2y \u0110\u00f4 (HCM)",
    "address": "47a \u0110\u01b0\u1eddng s\u1ed1 6, Ph\u01b0\u1eddng 8, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7617824,
    "location/lng": 106.6482549
  },
  {
    "title": "Nh\u00e0 h\u00e0ng Vee Ayy",
    "address": "345/84 \u0110. Tr\u1ea7n H\u01b0ng \u0110\u1ea1o, C\u1ea7u Kho, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7604423,
    "location/lng": 106.6896802
  },
  {
    "title": "Nh\u00e0 h\u00e0ng V\u0103n Hoa",
    "address": "68-76 \u0110. T\u1ea3n \u0110\u00e0, Ph\u01b0\u1eddng 11, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7526983,
    "location/lng": 106.6644903
  },
  {
    "title": "Nh\u00e0 h\u00e0ng V\u01b0\u1eddn Cau",
    "address": "360 \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Trung t\u00e2m h\u00f4\u0323i nghi\u0323",
    "location/lat": 10.8218252,
    "location/lng": 106.6937803
  },
  {
    "title": "Nh\u00e0 h\u00e0ng V\u01b0\u1eddn Cau 2",
    "address": "171 Nguy\u1ec5n Th\u00e1i S\u01a1n, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8276007,
    "location/lng": 106.6900869
  },
  {
    "title": "Nh\u00e0 h\u00e0ng V\u01b0\u1eddn Qu\u00ea",
    "address": "668/42, QL1A, Th\u1ea1nh L\u1ed9c, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8630273,
    "location/lng": 106.6817165
  },
  {
    "title": "Nh\u00e0 h\u00e0ng V\u01b0\u1eddn Sinh Th\u00e1i Ven S\u00f4ng",
    "address": "147 C\u00e2y B\u00e0i, Ph\u00fa Ho\u00e0 \u0110\u00f4ng, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.9985215,
    "location/lng": 106.5298073
  },
  {
    "title": "Nh\u00e0 h\u00e0ng chay H\u01b0\u01a1ng Sen",
    "address": "319/22 L\u00ea V\u0103n Th\u1ecd, Ph\u01b0\u1eddng 9, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8458194,
    "location/lng": 106.6560836
  },
  {
    "title": "Nh\u00e0 h\u00e0ng chay H\u1ed3 l\u00f4 Gia",
    "address": "511A \u0110. Ph\u1ea1m V\u0103n Ch\u00ed, Ph\u01b0\u1eddng 7, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7416502,
    "location/lng": 106.6413846
  },
  {
    "title": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n & l\u1ea9u Yeebo (Qu\u1eadn 7) - Yeebo Seafood and Hotpot Restaurant (District 7)",
    "address": "109 \u0110 T\u00f4n D\u1eadt Ti\u00ean, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c",
    "location/lat": 10.7249454,
    "location/lng": 106.7198718
  },
  {
    "title": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n Hi\u1ebfu H\u00e0u S\u1eefa 2 (C\u00e1 S\u1ea5u Hoa C\u00e0 c\u0169)",
    "address": "130/2 \u0110. Kha V\u1ea1n C\u00e2n, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Qu\u00e1n bia s\u00e2n v\u01b0\u1eddn, Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh, Khu \u0103n u\u1ed1ng",
    "location/lat": 10.8333761,
    "location/lng": 106.726963
  },
  {
    "title": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n H\u01b0\u01a1ng L\u00faa 9",
    "address": "11- 17, 11 \u0110. S\u1ed1 65, P, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72900, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7387757,
    "location/lng": 106.7068643
  },
  {
    "title": "Nh\u00e0 h\u00e0ng n\u01b0\u1edbng \u00d4RIBBQ",
    "address": "23/40 Nguy\u1ec5n H\u1eefu Ti\u1ebfn, T\u00e2y Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.8086174,
    "location/lng": 106.6237846
  },
  {
    "title": "Nh\u00e0 h\u00e0ng sinh th\u00e1i L\u00faa",
    "address": "19A, \u0110\u01b0\u1eddng 182, L\u00e3 Xu\u00e2n Oai, T\u0103ng Nh\u01a1n Ph\u00fa A, Th\u00e0nh ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8356019,
    "location/lng": 106.7921841
  },
  {
    "title": "Nh\u00e0 h\u00e0ng ti\u1ec7c c\u01b0\u1edbi Aqua Jardin",
    "address": "307 N\u01a1 Trang Long, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "N\u01a1i t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.8192869,
    "location/lng": 106.6996639
  },
  {
    "title": "Nh\u00e0 h\u00e0ng ti\u1ec7c c\u01b0\u1edbi Grand Palace",
    "address": "142/18 \u0110. C\u1ed9ng H\u00f2a, Ph\u01b0\u1eddng 4, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "N\u01a1i t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8037608,
    "location/lng": 106.6559084
  },
  {
    "title": "Nh\u00e2n K\u00fd M\u1ef3 Gia - H\u1ee7 ti\u1ebfu ng\u01b0\u1eddi Hoa",
    "address": "634 \u0110. H\u01b0ng Ph\u00fa, Ph\u01b0\u1eddng 10, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.746312,
    "location/lng": 106.668548
  },
  {
    "title": "Nh\u1ea5t Kh\u1eafc Qu\u00e1n",
    "address": "B402 \u0110o\u00e0n V\u0103n B\u01a1, Ph\u01b0\u1eddng 16, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7565262,
    "location/lng": 106.7163782
  },
  {
    "title": "N\u0103m S\u00e1nh Quy\u1ebft Th\u1eafng B\u00f2 T\u01a1 T\u00e2y Ninh",
    "address": "31 C\u1eedu Long, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.810475,
    "location/lng": 106.6670329
  },
  {
    "title": "N\u01af\u1edaC L\u00c8O CHAY",
    "address": "\u0110. Nguy\u1ec5n H\u1eefu C\u1ea3nh, Ph\u01b0\u1eddng 22, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay, Qu\u00e1n m\u00ec",
    "location/lat": 10.7941716,
    "location/lng": 106.7159187
  },
  {
    "title": "O \u01a0i - Ph\u00fa M\u1ef9 H\u01b0ng",
    "address": "\u0111\u01b0\u1eddng 22 \u0110. N\u1ed9i Khu Nam Th\u00f4ng 2C, P. Ph\u00fa Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7172053,
    "location/lng": 106.7299951
  },
  {
    "title": "OK 3 CON D\u00ca",
    "address": "594 \u0110. 3 Th\u00e1ng 2, Ph\u01b0\u1eddng 14, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7657253,
    "location/lng": 106.6629313
  },
  {
    "title": "OKKIO Ph\u00fa M\u1ef9 H\u01b0ng - Specialty Coffee & Brunch",
    "address": "171 Nguy\u1ec5n \u0110\u1ee9c C\u1ea3nh, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n c\u00e0 ph\u00ea",
    "location/lat": 10.7218077,
    "location/lng": 106.7115729
  },
  {
    "title": "Oasis Cafe",
    "address": "176/1b \u0110. L\u00ea V\u0103n S\u1ef9, Ph\u01b0\u1eddng 10, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Ti\u1ec7m c\u00e0 ph\u00ea ph\u1ee5c v\u1ee5 c\u00e1c m\u00f3n tr\u00e1i c\u00e2y, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7928678,
    "location/lng": 106.6709141
  },
  {
    "title": "Ong N\u00e2u Spaghetti",
    "address": "511 L\u00ea Quang \u0110\u1ecbnh, Ph\u01b0\u1eddng 1, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8179061,
    "location/lng": 106.6890907
  },
  {
    "title": "Osaka - C\u01a1m th\u1ed1 Nh\u1eadt B\u1ea3n",
    "address": "64 \u0110. Nguy\u1ec5n Th\u1eddi Trung, Ph\u01b0\u1eddng 6, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7521767,
    "location/lng": 106.6698658
  },
  {
    "title": "Oscar Palace",
    "address": "100 Phan Huy \u00cdch, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8292772,
    "location/lng": 106.6326015
  },
  {
    "title": "Otok\u00e9 Chicken",
    "address": "547 Hu\u1ef3nh T\u1ea5n Ph\u00e1t, T\u00e2n Thu\u1eadn \u0110\u00f4ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh, Khu \u0103n u\u1ed1ng, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7432603,
    "location/lng": 106.7297242
  },
  {
    "title": "PH\u1ede TH\u00ccN 13 L\u00d2 \u0110\u00daC - Vinhomes Grand Park",
    "address": "The Manhattan, BT T12-04, \u0110. Nguy\u1ec5n Xi\u1ec3n, K\u0110T Vinhomes Grand Park, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71216, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8378257,
    "location/lng": 106.8441233
  },
  {
    "title": "PH\u1ede TI\u1ebeN VUA",
    "address": "136A \u0110. C\u00e1ch M\u1ea1ng Th\u00e1ng 8, Ph\u01b0\u1eddng 10, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7788863,
    "location/lng": 106.6800576
  },
  {
    "title": "Padme Chay",
    "address": "290/28 \u0110. Nam K\u1ef3 Kh\u1edfi Ngh\u0129a, Ph\u01b0\u1eddng 8, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7905947,
    "location/lng": 106.6845487
  },
  {
    "title": "Panda BBQ",
    "address": "208 \u0110. Nguy\u1ec5n H\u1eefu Th\u1ecd, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.7443146,
    "location/lng": 106.7019099
  },
  {
    "title": "Panda BBQ",
    "address": "101 \u0110. K\u00eanh 19/5, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.809243,
    "location/lng": 106.614685
  },
  {
    "title": "Panda BBQ G\u00f2 V\u1ea5p",
    "address": "151 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 03, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.8172431,
    "location/lng": 106.6842346
  },
  {
    "title": "Panda Nguy\u1ec5n Th\u1ecb Th\u1eadp",
    "address": "88 Nguy\u1ec5n Th\u1ecb Th\u1eadp, B\u00ecnh Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.7380625,
    "location/lng": 106.7232431
  },
  {
    "title": "Panda Phan V\u0103n Tr\u1ecb",
    "address": "364 \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.825703,
    "location/lng": 106.6900966
  },
  {
    "title": "Pasteur Street Craft Beer - Ph\u00fa M\u1ef9 H\u01b0ng Taproom & Restaurant",
    "address": "Crescent Residence 5, Khu \u0111\u00f4 th\u1ecb Ph\u00fa M\u1ef9 H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bia, Nh\u00e0 h\u00e0ng M\u1ef9, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7248979,
    "location/lng": 106.7209618
  },
  {
    "title": "Phoenix Restaurant & Cafe",
    "address": "RM76+GX8, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8137965,
    "location/lng": 106.6624581
  },
  {
    "title": "Phong Cua 2",
    "address": "1067 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8238401,
    "location/lng": 106.7316864
  },
  {
    "title": "Ph\u1ed1 N\u01b0\u1edbng JOKUL",
    "address": "439 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8218903,
    "location/lng": 106.6977316
  },
  {
    "title": "Ph\u1ed1 \u1ea8m Th\u1ef1c Chay",
    "address": "702 \u0110. H\u1ed3ng B\u00e0ng, Ph\u01b0\u1eddng 1, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7546392,
    "location/lng": 106.6409169
  },
  {
    "title": "Ph\u1ed1 \u1ea9m th\u1ef1c",
    "address": "E27 C\u01b0 X\u00e1 Ph\u00fa L\u00e2m B, Ph\u01b0\u1eddng 13, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.753369,
    "location/lng": 106.6293395
  },
  {
    "title": "Ph\u1ed5 \u0110\u00ecnh Ho\u00e0ng V\u0103n Th\u00e1i - Uraetei Yakiniku",
    "address": "73 Ho\u00e0ng V\u0103n Th\u00e1i, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7308249,
    "location/lng": 106.723154
  },
  {
    "title": "Ph\u1ed5 \u0110\u00ecnh Tr\u1ea7n Qu\u1ed1c Th\u1ea3o - Uraetei Yakiniku",
    "address": "125A Tr\u1ea7n Qu\u1ed1c Th\u1ea3o, V\u00f5 Th\u1ecb S\u00e1u, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n Yakiniku, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7839133,
    "location/lng": 106.6850865
  },
  {
    "title": "Ph\u1edf 24 - Nguy\u1ec5n L\u01b0\u01a1ng B\u1eb1ng",
    "address": "100 Nguy\u1ec5n L\u01b0\u01a1ng B\u1eb1ng, P. Ph\u00fa Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.729953,
    "location/lng": 106.720638
  },
  {
    "title": "Ph\u1edf B\u00f2 Ph\u00fa Gia",
    "address": "146e L\u00fd Ch\u00ednh Th\u1eafng, Ph\u01b0\u1eddng 14, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7864359,
    "location/lng": 106.6845303
  },
  {
    "title": "Ph\u1edf Duy Ph\u01b0\u01a1ng Nam - B\u00fan B\u00f2 & B\u00f2 Kho",
    "address": "96/88 \u0110. \u0110\u1eb7ng Thu\u1ef3 Tr\u00e2m, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.830627,
    "location/lng": 106.703781
  },
  {
    "title": "Ph\u1edf D\u1eadu",
    "address": "288 M1, \u0110. Nam K\u1ef3 Kh\u1edfi Ngh\u0129a, Ward 8, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7898196,
    "location/lng": 106.6850666
  },
  {
    "title": "Ph\u1edf Gia H\u00e2n",
    "address": "387 Chu V\u0103n An, Ph\u01b0\u1eddng 12, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.8114721,
    "location/lng": 106.697296
  },
  {
    "title": "Ph\u1edf Hoa Trang",
    "address": "86 B\u00f9i C\u00f4ng Tr\u1eebng, \u0110\u00f4ng Th\u1ea1nh, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.9083828,
    "location/lng": 106.6510341
  },
  {
    "title": "Ph\u1edf H\u00f9ng Ng\u00e2n 1",
    "address": "669 \u0110. T\u00e2n S\u01a1n, Ph\u01b0\u1eddng 15, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.8348235,
    "location/lng": 106.6451385
  },
  {
    "title": "Ph\u1edf Ki\u1ec1u Oanh",
    "address": "3 \u0110\u01b0\u1eddng \u0110\u00ecnh, T\u00e0i An, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7099383,
    "location/lng": 106.6225288
  },
  {
    "title": "Ph\u1edf L\u1ea9u \u0110u\u00f4i B\u00f2 - Bao Ngon B\u00ecnh Th\u1ea1nh",
    "address": "196a Nguy\u1ec5n V\u0103n \u0110\u1eadu, ph\u01b0\u1eddng 5, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.810812,
    "location/lng": 106.690507
  },
  {
    "title": "Ph\u1edf L\u1ec7",
    "address": "415 \u0110. Nguy\u1ec5n Tr\u00e3i, Ph\u01b0\u1eddng 7, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7552959,
    "location/lng": 106.6735196
  },
  {
    "title": "Ph\u1edf Mi\u1ebfn g\u00e0 K\u1ef3 \u0110\u1ed3ng",
    "address": "14/5Bis \u0110. K\u1ef3 \u0110\u1ed3ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7839022,
    "location/lng": 106.6819786
  },
  {
    "title": "Ph\u1edf N\u00e0ng Ti\u00ean",
    "address": "145 Ung V\u0103n Khi\u00eam, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.8066547,
    "location/lng": 106.7197844
  },
  {
    "title": "Ph\u1edf Ph\u00fa V\u01b0\u01a1ng",
    "address": "120 \u0110. Nguy\u1ec5n Th\u00e1i B\u00ecnh, Ph\u01b0\u1eddng Nguy\u1ec5n Th\u00e1i B\u00ecnh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.7683896,
    "location/lng": 106.6985673
  },
  {
    "title": "Ph\u1edf QUANG",
    "address": "376e \u0110. B\u00ecnh \u0110\u00f4ng, Ph\u01b0\u1eddng 15, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.7326721,
    "location/lng": 106.6346521
  },
  {
    "title": "Ph\u1edf SOL - C\u1ea3nh Vi\u00ean Q7 (Ph\u1edf & C\u00e1c M\u00f3n Ngon T\u1eeb Ph\u1edf)",
    "address": "1 Ph\u1ed1 Ti\u1ec3u Nam, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7226771,
    "location/lng": 106.7294352
  },
  {
    "title": "Ph\u1edf Th\u00ecn 13 L\u00f2 \u0110\u00fac (H\u00e0 N\u1ed9i Ch\u00ednh G\u1ed1c)",
    "address": "H0.01 Happy Valley Chung C\u01b0, Khu \u0111\u00f4 th\u1ecb Ph\u00fa M\u1ef9 H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7301016,
    "location/lng": 106.713896
  },
  {
    "title": "Ph\u1edf Th\u1ea3o Nguy\u00ean",
    "address": "5 \u0110. 32, Linh \u0110\u00f4ng, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.8419556,
    "location/lng": 106.7416288
  },
  {
    "title": "Ph\u1edf Ti Ti",
    "address": "429 Ph\u1ea1m Th\u1ebf Hi\u1ec3n, Ph\u01b0\u1eddng 3, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.747568,
    "location/lng": 106.680775
  },
  {
    "title": "Ph\u1edf Trang",
    "address": "391 Nguy\u1ec5n Oanh, Ph\u01b0\u1eddng 6, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.8450656,
    "location/lng": 106.677536
  },
  {
    "title": "Ph\u1edf Vi\u1ec7t Nam | Ph\u1edf Ngon S\u00e0i G\u00f2n",
    "address": "66 Tr\u1ea7n Qu\u1ed1c To\u1ea3n, Ph\u01b0\u1eddng 8, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7881865,
    "location/lng": 106.6885695
  },
  {
    "title": "Ph\u1edf Xu\u00e2n Mai",
    "address": "63 Nguy\u1ec5n Th\u1ecb Nh\u1ecf, Ph\u01b0\u1eddng 2, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7526644,
    "location/lng": 106.6504633
  },
  {
    "title": "Ph\u1edf c\u00e2y xo\u00e0i",
    "address": "47/3 D. C\u00f4ng Khi, Xu\u00e2n Th\u1edbi Th\u01b0\u1ee3ng, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8507896,
    "location/lng": 106.564253
  },
  {
    "title": "Ph\u1edf \u0110\u1ec7 Nh\u1ea5t",
    "address": "QL22, TT. H\u00f3c M\u00f4n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.8815727,
    "location/lng": 106.5889991
  },
  {
    "title": "Ph\u1edf \u0110\u1ecbnh 3",
    "address": "3-1B Ph\u1ea1m Th\u00e1i B\u01b0\u1eddng, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.7273351,
    "location/lng": 106.7124088
  },
  {
    "title": "Pig Bear\u2019s Kitchen",
    "address": "118/1 Hu\u1ef3nh Kh\u01b0\u01a1ng An, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng, Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8242395,
    "location/lng": 106.6885292
  },
  {
    "title": "Pizza 4P's Hai B\u00e0 Tr\u01b0ng",
    "address": "151b Hai B\u00e0 Tr\u01b0ng, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza, Nh\u00e0 s\u1ea3n xu\u1ea5t ph\u00f4 mai, Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh, Nh\u00e0 h\u00e0ng h\u1ed7n h\u1ee3p, Nh\u00e0 h\u00e0ng \u00fd, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n, Nh\u00e0 h\u00e0ng m\u00f3n t\u00e2y ki\u1ec3u Nh\u1eadt, Nh\u00e0 h\u00e0ng th\u1ef1c ph\u1ea9m h\u1eefu c\u01a1, C\u1eeda h\u00e0ng giao pizza, C\u1eeda h\u00e0ng b\u00e1n pizza mang v\u1ec1",
    "location/lat": 10.7830429,
    "location/lng": 106.6969727
  },
  {
    "title": "Pizza 4P\u2019s L\u00ea Th\u00e1nh T\u00f4n",
    "address": "8/15, \u0110. L\u00ea Th\u00e1nh T\u00f4n, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza, Nh\u00e0 s\u1ea3n xu\u1ea5t ph\u00f4 mai, Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh, Nh\u00e0 h\u00e0ng h\u1ed7n h\u1ee3p, Nh\u00e0 h\u00e0ng \u00fd, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n, Nh\u00e0 h\u00e0ng m\u00f3n t\u00e2y ki\u1ec3u Nh\u1eadt, Nh\u00e0 h\u00e0ng th\u1ef1c ph\u1ea9m h\u1eefu c\u01a1, C\u1eeda h\u00e0ng giao pizza, C\u1eeda h\u00e0ng b\u00e1n pizza mang v\u1ec1",
    "location/lat": 10.7818738,
    "location/lng": 106.7051397
  },
  {
    "title": "Pizza Hut L\u00ea Th\u1ecb H\u00e0",
    "address": "14/1 L\u00ea Th\u1ecb H\u00e0, Khu ph\u1ed1 8, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8854442,
    "location/lng": 106.5983216
  },
  {
    "title": "Popeyes",
    "address": "121 \u0110. L\u00ea \u0110\u1ee9c Th\u1ecd, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8344643,
    "location/lng": 106.6815186
  },
  {
    "title": "Popeyes An D\u01b0\u01a1ng V\u01b0\u01a1ng",
    "address": "326 \u0110. An D\u01b0\u01a1ng V\u01b0\u01a1ng, Ph\u01b0\u1eddng 4, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7598924,
    "location/lng": 106.6794806
  },
  {
    "title": "Popeyes L\u0169y B\u00e1n B\u00edch",
    "address": "661 \u0110. L\u0169y B\u00e1n B\u00edch, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0, Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7806205,
    "location/lng": 106.6357104
  },
  {
    "title": "Popeyes Nguy\u1ec5n X\u00ed",
    "address": "171 Nguy\u1ec5n X\u00ed, Ph\u01b0\u1eddng 26, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8144222,
    "location/lng": 106.708284
  },
  {
    "title": "Popeyes Qu\u1ed1c L\u1ed9 50 (Li\u00ean T\u1ec9nh 5)",
    "address": "411 Li\u00ean T\u1ec9nh 5, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7327793,
    "location/lng": 106.6562945
  },
  {
    "title": "Popeyes Th\u1ed1ng Nh\u1ea5t",
    "address": "405 \u0110. Th\u1ed1ng Nh\u1ea5t, Ph\u01b0\u1eddng 16, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8435012,
    "location/lng": 106.6645818
  },
  {
    "title": "Popeyes \u0110\u1ed3ng \u0110en",
    "address": "75 \u0110\u1ed3ng \u0110en, Ph\u01b0\u1eddng 12, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7934215,
    "location/lng": 106.6447999
  },
  {
    "title": "Propaganda",
    "address": "21 H\u00e0n Thuy\u00ean, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Qu\u00e1n c\u00e0 ph\u00ea, \u0110i\u1ec3m m\u1ed1c l\u1ecbch s\u1eed, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7787806,
    "location/lng": 106.6981583
  },
  {
    "title": "QU\u00c1N 2 CON D\u00ca",
    "address": "1611 Phan V\u0103n H\u1edbn, \u1ea4p 1, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.866633,
    "location/lng": 106.5612772
  },
  {
    "title": "QU\u00c1N BI\u1ec0N L\u00c1",
    "address": "558 25B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8300774,
    "location/lng": 106.7477088
  },
  {
    "title": "QU\u00c1N CHAY T\u00d9Y T\u00c2M",
    "address": "49 Tr\u1ecbnh \u0110\u00ecnh Tr\u1ecdng, PH\u01af\u1edcNG 05, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7743687,
    "location/lng": 106.6438654
  },
  {
    "title": "QU\u00c1N D\u00ca ANH EM",
    "address": "197 \u0110\u01b0\u1eddng TL 19, Th\u1ea1nh L\u1ed9c, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8730803,
    "location/lng": 106.6886726
  },
  {
    "title": "QU\u00c1N VEN S\u00d4NG",
    "address": "RPRQ+79F, Th\u00e0nh Ph\u1ed1, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8406773,
    "location/lng": 106.738437
  },
  {
    "title": "QU\u00c1N \u0102N GIA \u0110\u00ccNH- G\u00c0 N\u1ea4U CUA \u0110\u1ed2NG",
    "address": "Xu\u00e2n Th\u1edbi S\u01a1n 20, Xu\u00e2n Th\u1edbi S\u01a1n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8713559,
    "location/lng": 106.5823093
  },
  {
    "title": "QU\u00c1N \u0102N H\u00d9NG K\u00dd | QU\u00c1N \u0102N NGON B\u00ccNH T\u00c2N",
    "address": "312 TL10, An L\u1ea1c, B\u00ecnh T\u00e2n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7561028,
    "location/lng": 106.6243169
  },
  {
    "title": "Quan 80-1 L\u1ea9u g\u00e0 n\u00f2i .80 to hieu",
    "address": "80 T\u00f4 Hi\u1ec7u, T\u00e2n Th\u1edbi Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7650341,
    "location/lng": 106.6272299
  },
  {
    "title": "Quan Nhau Tr\u00ed Em",
    "address": "VQFC+CQ7, Linh Xu\u00e2n, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8735321,
    "location/lng": 106.771911
  },
  {
    "title": "Quan c\u01a1m",
    "address": "WG98+FXP, \u0110\u01b0\u1eddng Tam T\u00e2n, T\u00e2n Th\u00f4ng H\u1ed9i, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9187072,
    "location/lng": 106.5174445
  },
  {
    "title": "Quan oc ty",
    "address": "15/60 22-Q, vo duy ninh-P, B\u00ecnh Th\u1ea1nh, H\u1ed3 Ch\u00ed Minh B\u00ecnh Th\u1ea1nh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7928459,
    "location/lng": 106.7147188
  },
  {
    "title": "Qua\u0301n B\u01a1\u0300 K\u00eanh - U\u0301t Lan",
    "address": "2F22+PQF, Ph\u01b0\u1edbc Hi\u1ec7p, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0018142,
    "location/lng": 106.4519162
  },
  {
    "title": "Qua\u0301n Ga\u0300 N\u01b0\u01a1\u0301ng Tu\u0301 Lam",
    "address": "136D \u0110. Mai Ch\u00ed Th\u1ecd, An Ph\u00fa, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7998198,
    "location/lng": 106.7574374
  },
  {
    "title": "Qua\u0301n V\u01b0\u01a1\u0300n Mai",
    "address": "\u0110\u01b0\u1eddng S\u1ed1 40, B\u00ecnh Tr\u01b0ng \u0110\u00f4ng, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7801482,
    "location/lng": 106.7754693
  },
  {
    "title": "Qua\u0301n tho\u0309 Ma\u0323nh Qu\u00fd",
    "address": "191 Ho\u00e0ng Hoa Th\u00e1m, Ph\u01b0\u1eddng 13, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bia, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8066835,
    "location/lng": 106.6478434
  },
  {
    "title": "Qua\u0301n \u00d4\u0301c M\u0103\u0301m S\u01b0\u0303a",
    "address": "282/6 B\u00f9i H\u1eefu Ngh\u0129a, Ph\u01b0\u1eddng 2, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8004591,
    "location/lng": 106.7006078
  },
  {
    "title": "Qua\u0301n \u0102n B\u01a1\u0300 S\u00f4ng M\u00e1 Muol",
    "address": "XJ5X+FV2, B\u00ecnh M\u1ef9, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.958646,
    "location/lng": 106.6496314
  },
  {
    "title": "Qu\u00e1n 006",
    "address": "RP7C+2JR, Thanh \u0110a, C\u01b0 x\u00e1 Thanh \u0110a, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8126074,
    "location/lng": 106.7215186
  },
  {
    "title": "Qu\u00e1n 7 Minh",
    "address": "579 V\u01b0\u1eddn L\u00e0i, An Ph\u00fa \u0110\u00f4ng, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.831463,
    "location/lng": 106.692431
  },
  {
    "title": "Qu\u00e1n 79 B\u00ecnh Th\u1ea1nh",
    "address": "33 X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh, Ph\u01b0\u1eddng 26, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8153579,
    "location/lng": 106.7159148
  },
  {
    "title": "Qu\u00e1n A C\u01b0\u1eddng",
    "address": "169 T\u0103ng Nh\u01a1n Ph\u00fa, T\u0103ng Nh\u01a1n Ph\u00fa B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8319535,
    "location/lng": 106.7764959
  },
  {
    "title": "Qu\u00e1n Ba T\u1ed9",
    "address": "480/31/2/1 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8255923,
    "location/lng": 106.742401
  },
  {
    "title": "Qu\u00e1n Ba Voi",
    "address": "32/5 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8160636,
    "location/lng": 106.7488504
  },
  {
    "title": "Qu\u00e1n BaBa S\u00e1u Nguy\u00ean",
    "address": "H\u1ebbm 352 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.821696,
    "location/lng": 106.7322886
  },
  {
    "title": "Qu\u00e1n Bia Tuy\u1ebft B\u1edd S\u00f4ng 160",
    "address": "291 \u0110. 160, Tha\u0300nh ph\u00f4\u0301, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71207, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8348842,
    "location/lng": 106.7894584
  },
  {
    "title": "Qu\u00e1n B\u00e1nh X\u00e8o C\u00f4 Nguy\u1ec7t",
    "address": "774 Quang Trung, Ph\u01b0\u1eddng 8, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.8371279,
    "location/lng": 106.6562627
  },
  {
    "title": "Qu\u00e1n B\u00e1nh x\u00e8o C\u1ea7u V\u00e1n",
    "address": "211 \u0110. L\u0169y B\u00e1n B\u00edch, T\u00e2n Th\u1edbi Ho\u00e0, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7695561,
    "location/lng": 106.6315956
  },
  {
    "title": "Qu\u00e1n B\u00f2 T\u01a1 Ng\u1ecdc Th\u1ea3o",
    "address": "2F6G+V5R, Trung L\u1eadp H\u1ea1, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0122447,
    "location/lng": 106.4754032
  },
  {
    "title": "Qu\u00e1n B\u00f2 T\u01a1 Xu\u00e2n \u0110\u00e0o",
    "address": "Hi\u1ec7p Th\u00e0nh, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 560000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8677009,
    "location/lng": 106.6412033
  },
  {
    "title": "Qu\u00e1n B\u00fan B\u00f2 Hu\u1ebf O L\u00ea",
    "address": "642 \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 10, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.832621,
    "location/lng": 106.6729527
  },
  {
    "title": "Qu\u00e1n B\u1ebfn \u0110\u00f2 - T\u00f4m S\u00f4ng \u0110\u1ed3ng Nai",
    "address": "VR7V+W6X, Nguy\u1ec5n Xi\u1ec3n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8648567,
    "location/lng": 106.8431176
  },
  {
    "title": "Qu\u00e1n B\u1edd S\u00f4ng",
    "address": "6 khu d\u00e2n c\u01b0 Nam R\u1ea1ch Chi\u1ebfc, khu ph\u1ed1 3, Qu\u1eadn 2, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7916223,
    "location/lng": 106.7691091
  },
  {
    "title": "Qu\u00e1n B\u1edd S\u00f4ng M\u1edbi",
    "address": "101 Nguy\u1ec5n Xi\u1ec3n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8732734,
    "location/lng": 106.8406551
  },
  {
    "title": "Qu\u00e1n B\u1edd S\u00f4ng Thanh Th\u1ea3o",
    "address": "206/124, Hu\u1ef3nh T\u1ea5n Ph\u00e1t, Huy\u1ec7n Nh\u00e0 B\u00e8, Ph\u00fa Xu\u00e2n, Nh\u00e0 B\u00e8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.6968102,
    "location/lng": 106.7360123
  },
  {
    "title": "Qu\u00e1n B\u1ee5i Original",
    "address": "19 Ng\u00f4 V\u0103n N\u0103m, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, M\u00f3n n\u01b0\u1edbng, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa n\u1eeda bu\u1ed5i, B\u1eefa t\u1ed1i, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7813148,
    "location/lng": 106.7058729
  },
  {
    "title": "Qu\u00e1n Chay B\u1eedu Ni\u1ec7m CN2 - Qu\u1eadn 8",
    "address": "174 Nguy\u1ec5n Th\u1ecb M\u01b0\u1eddi, 204 \u0110. Cao L\u1ed7, c\u0169, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7362677,
    "location/lng": 106.6753678
  },
  {
    "title": "Qu\u00e1n Chay Ch\u01a1n L\u1ea1c",
    "address": "154 QL13, Ph\u01b0\u1eddng 26, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.8140016,
    "location/lng": 106.7129254
  },
  {
    "title": "Qu\u00e1n Chay Ph\u00e1p Uy\u1ec3n",
    "address": "17/4 Nguy\u1ec5n Huy T\u01b0\u1edfng, Ph\u01b0\u1eddng 6, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.8047839,
    "location/lng": 106.6892956
  },
  {
    "title": "Qu\u00e1n Chay Quan \u00c2m",
    "address": "8 6, 137/7 \u0110. B\u00ecnh Ti\u00ean, Ph\u01b0\u1eddng 8, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7430375,
    "location/lng": 106.6426761
  },
  {
    "title": "Qu\u00e1n Chay Th\u1ea3o",
    "address": "30/11 Nguy\u1ec5n \u0110\u00ecnh Chi, Ph\u01b0\u1eddng 9, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7509197,
    "location/lng": 106.6414296
  },
  {
    "title": "Qu\u00e1n Chay T\u00e2m H\u1eadu CN3",
    "address": "A45B \u0110\u01b0\u1eddng S\u1ed1 14, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7309467,
    "location/lng": 106.7037235
  },
  {
    "title": "Qu\u00e1n Ch\u00e1o G\u1ecfi V\u1ecbt Ch\u1ee3 \u0110\u00f4ng Ba",
    "address": "59 B\u00ecnh H\u00f2a 1, Binh Ho\u00e0, Thu\u1eadn An, B\u00ecnh D\u01b0\u01a1ng, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8821577,
    "location/lng": 106.7153556
  },
  {
    "title": "Qu\u00e1n Ch\u1ecb D\u1eadu Ven S\u00f4ng",
    "address": "16 QL13, Hi\u1ec7p B\u00ecnh Ph\u01b0\u1edbc, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8530747,
    "location/lng": 106.7179312
  },
  {
    "title": "Qu\u00e1n Cua Ngon - H\u01b0\u01a1ng V\u1ecb \u0110\u1ea5t M\u0169i",
    "address": "250 Nguy\u1ec5n Th\u00e1i B\u00ecnh, Ph\u01b0\u1eddng 12, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72510, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7959329,
    "location/lng": 106.6510007
  },
  {
    "title": "Qu\u00e1n C\u00e1 Ng\u1eeb \u0110\u1ea1i D\u01b0\u01a1ng",
    "address": "9/8 \u0110\u1eb7ng Th\u00fac V\u1ecbnh T\u1ed5 59 - \u00c2p Trung \u0110\u00f4ng, Th\u1edbi Tam Th\u00f4n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8930791,
    "location/lng": 106.6181288
  },
  {
    "title": "Qu\u00e1n C\u00e2y D\u1eeba",
    "address": "VPJG+R2P, \u0110. Nh\u00e1nh Ph\u1ee5 Ba B\u00f2, B\u00ecnh Chi\u1ec3u, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8820897,
    "location/lng": 106.7250865
  },
  {
    "title": "Qu\u00e1n C\u00e2y D\u1eeba",
    "address": "1054 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, Ph\u01b0\u1eddng 6, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7507327,
    "location/lng": 106.6704534
  },
  {
    "title": "Qu\u00e1n C\u00e2y G\u00f2n",
    "address": "315 \u0110. K\u00eanh T\u00e2n H\u00f3a, Ph\u00fa Trung, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7773452,
    "location/lng": 106.6389178
  },
  {
    "title": "Qu\u00e1n C\u00e2y Me B\u1ebfn \u0110\u00f2",
    "address": "M\u1ea1c Hi\u1ec3n T\u00edch, C\u1ea7u S\u00f4ng Nh\u1ea1n, TP.Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8658084,
    "location/lng": 106.8433191
  },
  {
    "title": "Qu\u00e1n C\u01a1m B\u00e0 B\u1ea3y",
    "address": "Trung L\u1eadp Th\u01b0\u1ee3ng, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0443403,
    "location/lng": 106.4381783
  },
  {
    "title": "Qu\u00e1n C\u01a1m T\u1ea5m B\u00e0 T\u00e1m Ti\u1ec1n",
    "address": "88 Nguy\u1ec5n Th\u01b0\u1ee3ng Hi\u1ec1n, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m",
    "location/lat": 10.8142149,
    "location/lng": 106.6854223
  },
  {
    "title": "Qu\u00e1n C\u01a1m tr\u1ed9n 2 C\u00f4",
    "address": "H\u1ebbm 294, 63 X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh, Ph\u01b0\u1eddng 21, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.8000476,
    "location/lng": 106.712771
  },
  {
    "title": "Qu\u00e1n C\u1eadu \u00dat",
    "address": "82/2/22, \u0110. \u0110inh B\u1ed9 L\u0129nh, Ph\u01b0\u1eddng 26, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.8077702,
    "location/lng": 106.7103043
  },
  {
    "title": "Qu\u00e1n C\u1ee7 Ri\u1ec1ng - Th\u1ecbt Ch\u00f3 Thui R\u01a1m",
    "address": "43, \u0110\u01b0\u1eddng S\u1ed1 19, Ph\u01b0\u1eddng B\u00ecnh Tr\u1ecb \u0110\u00f4ng B, Qu\u1eadn B\u00ecnh T\u00e2n, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7926397,
    "location/lng": 106.6230929
  },
  {
    "title": "Qu\u00e1n D\u00ea N\u00fai Ninh B\u00ecnh Chu\u1ea9n",
    "address": "335 \u0110. T\u00e2n K\u1ef3 T\u00e2n Qu\u00fd, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 00828, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8012219,
    "location/lng": 106.6242782
  },
  {
    "title": "Qu\u00e1n D\u00ea N\u00fai \u0110\u00f4i",
    "address": "116 D\u01b0\u01a1ng \u0110\u00ecnh H\u1ed9i, Ph\u01b0\u1edbc Long B, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8217787,
    "location/lng": 106.7798769
  },
  {
    "title": "Qu\u00e1n D\u00ec Ba Gia Lai",
    "address": "219B N\u01a1 Trang Long, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8161006,
    "location/lng": 106.6977401
  },
  {
    "title": "Qu\u00e1n Gi\u00f3 (t\u00f4m s\u00f4ng)",
    "address": "Saigon River, 1/109A Th\u00edch M\u1eadt Th\u1ec3, Ph\u01b0\u1eddng Th\u1ea1nh M\u1ef9 L\u1ee3i, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7566386,
    "location/lng": 106.7519758
  },
  {
    "title": "Qu\u00e1n H\u1ea3i S\u1ea3n C\u00f4 Ch\u1ee7 Nh\u1ecf",
    "address": "6/7B \u0110. T\u00e2n Xu\u00e2n 2, T\u00e2n Xu\u00e2n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8785129,
    "location/lng": 106.6062095
  },
  {
    "title": "Qu\u00e1n H\u1ea3i V\u1ecbt 6",
    "address": "16 D\u01b0\u01a1ng Th\u1ecb Giang, T\u00e2n Th\u1edbi Nh\u1ea5t, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.8269733,
    "location/lng": 106.6206204
  },
  {
    "title": "Qu\u00e1n Kh\u00e1nh H\u00e0o",
    "address": "273/34/5, Nguy\u1ec5n V\u0103n \u0110\u1eadu, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8162985,
    "location/lng": 106.6925961
  },
  {
    "title": "Qu\u00e1n Li\u00ean",
    "address": "34 4, Khu Ph\u1ed1 8-14, TT. H\u00f3c M\u00f4n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8885576,
    "location/lng": 106.5904776
  },
  {
    "title": "Qu\u00e1n L\u00e0ng Tre",
    "address": "120 \u0110. T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8011908,
    "location/lng": 106.6328802
  },
  {
    "title": "Qu\u00e1n L\u00e1 434",
    "address": "434 \u0110. T\u00e2n K\u1ef3 T\u00e2n Qu\u00fd, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7986009,
    "location/lng": 106.6171285
  },
  {
    "title": "Qu\u00e1n L\u1ea9u B\u00f2 S\u00e1u Ri | Nh\u01b0\u1ee3ng quy\u1ec1n th\u01b0\u01a1ng hi\u1ec7u S\u00e1u Ri",
    "address": "61 B\u00f9i \u0110i\u1ec1n, Ph\u01b0\u1eddng 4, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.74234,
    "location/lng": 106.6727499
  },
  {
    "title": "Qu\u00e1n L\u1ea9u C\u00e1 \u0110u\u1ed1i G\u00f2 V\u1ea5p Kh\u1ea3i R\u00e2u",
    "address": "40 \u0110. Nguy\u1ec5n V\u0103n Kh\u1ed1i, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8421041,
    "location/lng": 106.6601916
  },
  {
    "title": "Qu\u00e1n L\u1ea9u D\u00ea 87",
    "address": "87 \u0110. Ph\u1ea1m H\u00f9ng, Ph\u01b0\u1eddng 9, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.7460915,
    "location/lng": 106.6690996
  },
  {
    "title": "Qu\u00e1n L\u1ea9u D\u00ea Anh Ba",
    "address": "524 \u0110. L\u00ea Tr\u1ecdng T\u1ea5n, T\u00e2y Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8109186,
    "location/lng": 106.6119951
  },
  {
    "title": "Qu\u00e1n L\u1ea9u D\u00ea T\u00e0i K\u00fd 2",
    "address": "21 G\u00f2 \u00d4 M\u00f4i, Ph\u00fa Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7302264,
    "location/lng": 106.7378603
  },
  {
    "title": "Qu\u00e1n L\u1ea9u M\u1eafm 140",
    "address": "140/13 Tr\u1ea7n Huy Li\u1ec7u, Ph\u01b0\u1eddng 15, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.797967,
    "location/lng": 106.678123
  },
  {
    "title": "Qu\u00e1n L\u1ea9u d\u00ea C\u00e2y D\u1eeba",
    "address": "149 \u0110. B\u00ecnh \u0110\u00f4ng, Ph\u01b0\u1eddng 11, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7495383,
    "location/lng": 106.6650509
  },
  {
    "title": "Qu\u00e1n L\u1ea9u \u00dat S\u01a1n",
    "address": "245A Chu V\u0103n An, Ph\u01b0\u1eddng 12, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8107815,
    "location/lng": 106.7021101
  },
  {
    "title": "Qu\u00e1n L\u1eafc Kiu",
    "address": "646H \u0110. Nguy\u1ec5n Tr\u00e3i, Ph\u01b0\u1eddng 11, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7538898,
    "location/lng": 106.6651754
  },
  {
    "title": "Qu\u00e1n NEM vu\u00f4ng cua bi\u1ec3n",
    "address": "15E \u0110. Nguy\u1ec5n Th\u1ecb Minh Khai, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7857535,
    "location/lng": 106.7009648
  },
  {
    "title": "Qu\u00e1n Nem N\u01b0\u1edbng \u0110\u00e0 L\u1ea1t B\u00ecnh Th\u1ea1nh",
    "address": "56 Tr\u1ea7n B\u00ecnh Tr\u1ecdng, Ph\u01b0\u1eddng 5, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.8136709,
    "location/lng": 106.6879519
  },
  {
    "title": "Qu\u00e1n Ng\u1ecdc",
    "address": "30E H\u1ed3 H\u1ea3o H\u1edbn, Ph\u01b0\u1eddng C\u00f4 Giang, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7608781,
    "location/lng": 106.6931794
  },
  {
    "title": "Qu\u00e1n Nh\u00e0 L\u00e1",
    "address": "480/61 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8200839,
    "location/lng": 106.7402198
  },
  {
    "title": "Qu\u00e1n Nh\u1eadu 126",
    "address": "126 Ph\u1ea1m Th\u1ebf Hi\u1ec3n, Ph\u01b0\u1eddng 2, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7498965,
    "location/lng": 106.6845652
  },
  {
    "title": "Qu\u00e1n Nh\u1edb Tuy\u1ebft",
    "address": "70 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, Ph\u01b0\u1eddng Nguy\u1ec5n Th\u00e1i B\u00ecnh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7665644,
    "location/lng": 106.7009536
  },
  {
    "title": "Qu\u00e1n N\u00f4ng Tr\u1ea1i D\u00ea - View S\u00f4ng",
    "address": "319/30 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng b\u00e1n \u0111\u1ed3 \u0103n mang v\u1ec1",
    "location/lat": 10.8263564,
    "location/lng": 106.7335643
  },
  {
    "title": "Qu\u00e1n N\u0103m Ngh\u00eau",
    "address": "217 Nguy\u1ec5n Gia Tr\u00ed, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8089083,
    "location/lng": 106.7169458
  },
  {
    "title": "Qu\u00e1n N\u01b0\u1edbng Bia Lu",
    "address": "20 \u0110. Tr\u1ea7n Qu\u1ed1c Ho\u00e0n, Ph\u01b0\u1eddng 4, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8016513,
    "location/lng": 106.6623638
  },
  {
    "title": "Qu\u00e1n Ph\u1edf 3000",
    "address": "3000 Ph\u1ea1m Th\u1ebf Hi\u1ec3n, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7113514,
    "location/lng": 106.6262357
  },
  {
    "title": "Qu\u00e1n Ph\u1edf C\u00f4ng",
    "address": "17 Nguy\u1ec5n V\u0103n Kh\u1ed1i, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72300, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.8415872,
    "location/lng": 106.6614298
  },
  {
    "title": "Qu\u00e1n Ph\u1edf Xu\u00e2n",
    "address": "1 L\u00ea Lai, Ph\u01b0\u1eddng 12, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf",
    "location/lat": 10.7961853,
    "location/lng": 106.646672
  },
  {
    "title": "Qu\u00e1n Ph\u1edf Y\u00ean",
    "address": "327 L\u00ea V\u0103n L\u01b0\u01a1ng, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ph\u1edf, Qu\u00e1n m\u00ec",
    "location/lat": 10.7419327,
    "location/lng": 106.7040551
  },
  {
    "title": "Qu\u00e1n R\u00f9a Cu \u1ea8n",
    "address": "VR7R+325, Unnamed Road, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8626288,
    "location/lng": 106.8400964
  },
  {
    "title": "Qu\u00e1n S\u00f4ng Tr\u0103ng",
    "address": "233A B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8216627,
    "location/lng": 106.7290266
  },
  {
    "title": "Qu\u00e1n Thu Nga 1",
    "address": "12 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8295139,
    "location/lng": 106.7445071
  },
  {
    "title": "Qu\u00e1n T\u00e0i V\u01b0\u1ee3ng 2",
    "address": "35 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 3, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8150514,
    "location/lng": 106.6803726
  },
  {
    "title": "Qu\u00e1n X\u1ee9 N\u1eabu 2",
    "address": "41 Tr\u1ea7n V\u0103n Quang, Ph\u01b0\u1eddng 10, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7795549,
    "location/lng": 106.6484094
  },
  {
    "title": "Qu\u00e1n b\u00f2 t\u01a1 Kim Dung",
    "address": "So 638 Nguy\u1ec5n Th\u1ecb R\u00e0nh, \u1ea4p Ng\u00e3 T\u01b0, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0380783,
    "location/lng": 106.4858856
  },
  {
    "title": "Qu\u00e1n chay Ki\u1ec1u \u0110\u00e0m",
    "address": "793/55/16, Tr\u1ea7n Xu\u00e2n So\u1ea1n, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay",
    "location/lat": 10.7473653,
    "location/lng": 106.7008505
  },
  {
    "title": "Qu\u00e1n chay S\u1ed1 12",
    "address": "12 \u0110. B\u00ecnh Ti\u00ean, Ph\u01b0\u1eddng 3, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7405144,
    "location/lng": 106.6437584
  },
  {
    "title": "Qu\u00e1n ch\u00e8 Thanh T\u00e2m",
    "address": "100 B\u00f9i H\u1eefu Ngh\u0129a, Ph\u01b0\u1eddng 7, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c",
    "location/lat": 10.754527,
    "location/lng": 106.6746672
  },
  {
    "title": "Qu\u00e1n ch\u00fa Cu\u1ed9i",
    "address": "553b \u0110. Nguy\u1ec5n V\u0103n Lu\u00f4ng, Ph\u01b0\u1eddng 12, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.7535407,
    "location/lng": 106.6346342
  },
  {
    "title": "Qu\u00e1n d\u00ea n\u00fai V\u0129nh L\u1ed9c",
    "address": "206 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 27, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.818866,
    "location/lng": 106.7260325
  },
  {
    "title": "Qu\u00e1n g\u00e0 n\u01b0\u1edbng B\u1ea3y \u0110\u1ef1c",
    "address": "RPGQ+CF4, B\u00ecnh Qu\u1edbi, L\u00e0ng Du L\u1ecbch B\u00ecnh Qu\u1edbi, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8260103,
    "location/lng": 106.7387141
  },
  {
    "title": "Qu\u00e1n h\u01b0\u01a1ng bi\u1ec3n",
    "address": "VMH5+VR3, \u0110. TX 25, Th\u1ea1nh Xu\u00e2n, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8796362,
    "location/lng": 106.6595482
  },
  {
    "title": "Qu\u00e1n l\u1ea9u T\u00e1m \u0110\u1eb1ng",
    "address": "267 Tr\u1ecbnh Quang Ngh\u1ecb, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.7073004,
    "location/lng": 106.6194521
  },
  {
    "title": "Qu\u00e1n l\u1ea9u d\u00ea Lam S\u01a1n",
    "address": "29 H\u1ed3ng H\u00e0, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1ecf, Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8131976,
    "location/lng": 106.6699446
  },
  {
    "title": "Qu\u00e1n v\u1ecb ng\u1ecdt",
    "address": "2/108B \u1ea4p \u0110\u00ecnh, T\u00e2n Xu\u00e2n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.873684,
    "location/lng": 106.597075
  },
  {
    "title": "Qu\u00e1n \u00d4ng Ti\u00ean - Chi Nh\u00e1nh 1",
    "address": "225 Ph\u1ea1m Th\u1ebf Hi\u1ec3n, Ph\u01b0\u1eddng 3, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n bia",
    "location/lat": 10.7492778,
    "location/lng": 106.6838971
  },
  {
    "title": "Qu\u00e1n \u00dat 12",
    "address": "558/62 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8197301,
    "location/lng": 106.7486899
  },
  {
    "title": "Qu\u00e1n \u00dat B\u00ecnh",
    "address": "11/2 \u0111\u01b0\u1eddng 614 x\u00e3, Ph\u01b0\u1edbc Hi\u1ec7p, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.9810635,
    "location/lng": 106.4586675
  },
  {
    "title": "Qu\u00e1n \u0102n 6 X\u1ecb",
    "address": "31/1D, 31/1D G\u00f2 \u00d4 M\u00f4i, Ph\u00fa Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.729631,
    "location/lng": 106.7387689
  },
  {
    "title": "Qu\u00e1n \u0102n B\u00e9 Chim",
    "address": "XH75+H3W, T\u00e2n Ph\u00fa Trung, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.9639867,
    "location/lng": 106.557693
  },
  {
    "title": "Qu\u00e1n \u0102n C\u00e2y D\u1eeba",
    "address": "VR9R+WWM, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8698458,
    "location/lng": 106.8422924
  },
  {
    "title": "Qu\u00e1n \u0102n C\u00e2y Xo\u00e0i",
    "address": "25 H\u1ebbm 496 D\u01b0\u01a1ng Qu\u1ea3ng H\u00e0m, Ph\u01b0\u1eddng 6, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71412, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8372403,
    "location/lng": 106.6845201
  },
  {
    "title": "Qu\u00e1n \u0102n C\u01b0\u1eddng K\u00fd M\u00ec Gia. S\u1ee7i c\u1ea3o 157",
    "address": "157 \u0110. H\u00e0 T\u00f4n Quy\u1ec1n, Ph\u01b0\u1eddng 4, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00ec Trung Qu\u1ed1c, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.7573319,
    "location/lng": 106.6526803
  },
  {
    "title": "Qu\u00e1n \u0102n Gia \u0110\u00ecnh",
    "address": "168, \u0110\u01b0\u1eddng s\u1ed1 1, B\u00ecnh H\u01b0ng, B\u00ecnh Ch\u00e1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7330659,
    "location/lng": 106.6920318
  },
  {
    "title": "Qu\u00e1n \u0102n Gia \u0110\u00ecnh Thanh \u0110i\u1ec1n",
    "address": "41 \u0110. \u0110\u1ed7 \u0110\u0103ng Tuy\u1ec3n, Nhu\u1eadn \u0110\u1ee9c, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0529397,
    "location/lng": 106.4805279
  },
  {
    "title": "Qu\u00e1n \u0102n Gia \u0110\u00ecnh Th\u00fay Ki\u1ec1u - Qu\u00e1n Nh\u1eadu B\u00ecnh D\u00e2n",
    "address": "83 \u0110. s\u1ed1 10, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8282407,
    "location/lng": 106.7316124
  },
  {
    "title": "Qu\u00e1n \u0102n Gia \u0110\u00ecnh119",
    "address": "119 R\u1ea1ch C\u00f9ng, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7057814,
    "location/lng": 106.6188728
  },
  {
    "title": "Qu\u00e1n \u0102n Ho\u00e0ng Oai",
    "address": "16884 H\u1ebbm 168 L\u00ea Th\u1ecb B\u1ea1ch C\u00e1t, Ph\u01b0\u1eddng 11, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7665614,
    "location/lng": 106.650731
  },
  {
    "title": "Qu\u00e1n \u0102n Hu\u1ebf O Nh\u1edb",
    "address": "160 \u0110\u01b0\u1eddng A4, Ph\u01b0\u1eddng 12, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7970922,
    "location/lng": 106.64905
  },
  {
    "title": "Qu\u00e1n \u0102n N\u00fai Ng\u1ef1",
    "address": "25 \u0110\u01b0\u1eddng s\u1ed1 20, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8376353,
    "location/lng": 106.6889934
  },
  {
    "title": "Qu\u00e1n \u0102n Qu\u00e1n G\u1ea5m",
    "address": "7 An H\u1ea1, Ph\u1ea1m V\u0103n Hai, B\u00ecnh Ch\u00e1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8667631,
    "location/lng": 106.5332547
  },
  {
    "title": "Qu\u00e1n \u0102n Tr\u1ecdng Ngh\u0129a",
    "address": "7 An H\u1ea1, Ph\u1ea1m V\u0103n Hai, B\u00ecnh Ch\u00e1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8709731,
    "location/lng": 106.5342193
  },
  {
    "title": "Qu\u00e1n \u0102n V\u1ecdng C\u00e1c",
    "address": "VHMH+M2J, Nguy\u1ec5n Th\u1ecb \u0110\u00e0nh, T\u00e2n Th\u1edbi Nh\u00ec, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8842043,
    "location/lng": 106.5775274
  },
  {
    "title": "Qu\u00e1n \u0102n \u0110\u0103ng Khoa",
    "address": "77 \u0110. S\u1ed1 8, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7424129,
    "location/lng": 106.7086828
  },
  {
    "title": "Qu\u00e1n \u0103n C\u00e1nh \u0111\u1ed3ng Sen",
    "address": "10/6 T\u00e2n Hi\u1ec7p 39, T\u00e2n Hi\u1ec7p, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.914797,
    "location/lng": 106.595024
  },
  {
    "title": "Qu\u00e1n \u0103n C\u00f9 Lao Xanh",
    "address": "558/10 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8301282,
    "location/lng": 106.7429357
  },
  {
    "title": "Qu\u00e1n \u0103n D\u00ea \u0110\u1ed3ng Qu\u00ea",
    "address": "B12 \u0110. D1, Ph\u01b0\u1edbc Ki\u1ec3n, Nh\u00e0 B\u00e8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng ch\u00e2u \u00c1",
    "location/lat": 10.7219601,
    "location/lng": 106.7064221
  },
  {
    "title": "Qu\u00e1n \u0103n D\u01af\u01a0NG TH\u00c0NH \u694a \u57ce \u71c9 \u54c1",
    "address": "68 Phan X\u00edch Long, Ph\u01b0\u1eddng 16, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n s\u00fap",
    "location/lat": 10.755859,
    "location/lng": 106.646621
  },
  {
    "title": "Qu\u00e1n \u0103n Gia \u0110\u00ecnh T\u00e2m (Heart Kitchen)",
    "address": "5C V\u01b0\u1eddn L\u00e0i, An Ph\u00fa \u0110\u00f4ng, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8309373,
    "location/lng": 106.6930679
  },
  {
    "title": "Qu\u00e1n \u0103n Hai Chi\u1ebfn",
    "address": "418 B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.823698,
    "location/lng": 106.7352828
  },
  {
    "title": "Qu\u00e1n \u0103n Ho\u00e0ng B\u1ea3y",
    "address": "2H3P+CF7, Trung An, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0035472,
    "location/lng": 106.5861762
  },
  {
    "title": "Qu\u00e1n \u0103n L\u00e0ng Tre",
    "address": "RV26+V62, \u0110\u01b0\u1eddng s\u1ed1 9, Long Ph\u01b0\u1edbc, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.802132,
    "location/lng": 106.8605304
  },
  {
    "title": "Qu\u00e1n \u0103n N\u0103m D\u1ea7n",
    "address": "3GM9+FF5, An Nh\u01a1n T\u00e2y, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0836295,
    "location/lng": 106.5187449
  },
  {
    "title": "Qu\u00e1n \u0103n N\u0103m L\u1ee3i",
    "address": "1 \u0110\u01b0\u1eddng S\u1ed1 3 Khu D\u00e2n C\u01b0 T\u00e2n Tr\u01b0\u1eddng, Ph\u00fa Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7335115,
    "location/lng": 106.7393638
  },
  {
    "title": "Qu\u00e1n \u0103n V\u0103n Hoa (Ba c\u00e2y d\u1eeba)",
    "address": "8 Ho\u00e0i Thanh, Ph\u01b0\u1eddng 14, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.740169,
    "location/lng": 106.6519884
  },
  {
    "title": "Qu\u00e1n \u0103n gia \u0111\u00ecnh N\u00f4ng d\u00e2n h\u1ed9i qu\u00e1n",
    "address": "26 \u0110\u01b0\u1eddng S\u1ed1 6, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8583776,
    "location/lng": 106.8384742
  },
  {
    "title": "Qu\u00e1n \u0103n gia \u0111\u00ecnh R\u1ea5t Hu\u1ebf",
    "address": "28/2D Thanh \u0110a, Ph\u01b0\u1eddng 27, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.817892,
    "location/lng": 106.7197658
  },
  {
    "title": "Qu\u00e1n \u0103n gia \u0111\u00ecnh, ch\u00f2i l\u00e1 Hai L\u00faa",
    "address": "C\u1ea1nh b\u00ean, \u0110\u01b0\u1eddng D1, khu du l\u1ecbch, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8186415,
    "location/lng": 106.8647577
  },
  {
    "title": "Qu\u00e1n \u0103n s\u00e2n v\u01b0\u1eddn V\u01b0\u1eddn xo\u00e0i",
    "address": "453 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.8225807,
    "location/lng": 106.7004694
  },
  {
    "title": "Qu\u00e1n \u0103n s\u00e2n v\u01b0\u1eddn \u0110\u1ed3ng B\u00e0 Canh",
    "address": "66 2B, Xu\u00e2n Th\u1edbi S\u01a1n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8830408,
    "location/lng": 106.5740894
  },
  {
    "title": "Qu\u00e1n \u0110\u1ed3ng Qu\u00ea",
    "address": "H\u1ebbm 335, Ph\u01b0\u1edbc Thi\u1ec7n, Long B\u00ecnh, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8448197,
    "location/lng": 106.8498569
  },
  {
    "title": "Qu\u00e1n \u0110\u1ed3ng Xanh",
    "address": "480/60a, B\u00ecnh Qu\u1edbi, Ph\u01b0\u1eddng 28, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8201745,
    "location/lng": 106.7398009
  },
  {
    "title": "Qu\u00e1n \u1ed0c Ch\u00edch",
    "address": "81/5 \u0110\u01b0\u1eddng s\u1ed1 57, Ph\u01b0\u1eddng 14, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8544253,
    "location/lng": 106.65094
  },
  {
    "title": "Qu\u00e1n \u1ed0c C\u00f4 S\u00e1u",
    "address": "D\u01b0\u01a1ng B\u1ea1ch Mai, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7370519,
    "location/lng": 106.6657181
  },
  {
    "title": "Qu\u00e1n \u1ed0c C\u00f4 Th\u00fay",
    "address": "Tam Ph\u00fa, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8574281,
    "location/lng": 106.7376674
  },
  {
    "title": "Qu\u00e1n \u1ed0c Hi\u1ec1n",
    "address": "55/24/12 Th\u00e0nh M\u1ef9, Ph\u01b0\u1eddng 8, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7816103,
    "location/lng": 106.6528115
  },
  {
    "title": "Qu\u00e1n \u1ed0c L\u00e1",
    "address": "13 Tr\u1ea7n Qu\u00fd Ki\u00ean, Ph\u01b0\u1eddng Th\u1ea1nh M\u1ef9 L\u1ee3i, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7743634,
    "location/lng": 106.7507369
  },
  {
    "title": "Qu\u00e1n \u1ed0c L\u1ea9u C\u00e2y B\u00e0ng",
    "address": "157, D\u01b0\u01a1ng Qu\u1ea3ng H\u00e0m, Ph\u01b0\u1eddng 7, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8341913,
    "location/lng": 106.6843345
  },
  {
    "title": "Qu\u00e1n \u1ed0c Mai",
    "address": "117B D\u01b0\u01a1ng \u0110\u00ecnh H\u1ed9i, Ph\u01b0\u1edbc Long B, Th\u00e0nh Ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8208039,
    "location/lng": 106.7787912
  },
  {
    "title": "Qu\u00e1n \u1ed0c Nam Vi\u1ec7t | Qu\u00e1n nh\u1eadu ngon G\u00f2 V\u1ea5p",
    "address": "A1 \u0110. s\u1ed1 2, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.833285,
    "location/lng": 106.684684
  },
  {
    "title": "Qu\u00e1n \u1ed0c Qu\u1ef3nh 106A Ph\u00f9ng V\u0103n Cung, F7, Q.Ph\u00fa Nhu\u1eadn",
    "address": "106 \u0110. Ph\u00f9ng V\u0103n Cung, Ph\u01b0\u1eddng 7, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n \u0103n nh\u1eb9, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8027784,
    "location/lng": 106.6847571
  },
  {
    "title": "Qu\u00e1n \u1ed0c Th\u1ea3o",
    "address": "68/1 B\u00f4ng Sao, Ph\u01b0\u1eddng 5, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7346375,
    "location/lng": 106.6637843
  },
  {
    "title": "Qu\u00e1n \u1ed0c V\u0169",
    "address": "37 V\u0129nh Kh\u00e1nh, Ph\u01b0\u1eddng 8, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7614025,
    "location/lng": 106.7027047
  },
  {
    "title": "Qu\u00e1n \u1ed0c Xu\u00e2n H\u00f3n",
    "address": "43 L\u00ea Th\u1ecb B\u1ea1ch C\u00e1t, Ph\u01b0\u1eddng 13, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7636446,
    "location/lng": 106.6527255
  },
  {
    "title": "Qu\u00e1n \u1ee4t \u1ee4t V\u00f5 V\u0103n Ki\u1ec7t",
    "address": "168 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, Ph\u01b0\u1eddng C\u1ea7u \u00d4ng L\u00e3nh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng M\u1ef9, Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.7646348,
    "location/lng": 106.6984256
  },
  {
    "title": "RAKUEN BBQ",
    "address": "84 B\u00e0u C\u00e1t, Ph\u01b0\u1eddng 14, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72112, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7924135,
    "location/lng": 106.6421256
  },
  {
    "title": "Raum Brunch Cafe",
    "address": "27 \u0110\u01b0\u1eddng s\u1ed1 16, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa n\u1eeda bu\u1ed5i",
    "location/lat": 10.723896,
    "location/lng": 106.7290105
  },
  {
    "title": "Rolling Rices",
    "address": "111 Ho\u00e0ng Hoa Th\u00e1m, Ph\u01b0\u1eddng 6, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.8076318,
    "location/lng": 106.6889401
  },
  {
    "title": "Rose Garden Wedding & Event",
    "address": "568 \u0110. L\u0169y B\u00e1n B\u00edch, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "N\u01a1i t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng, \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi",
    "location/lat": 10.7857798,
    "location/lng": 106.6369132
  },
  {
    "title": "SI\u00caU TH\u1eca \u0102N V\u1eb6T TI\u1ec2U MU\u1ed8I - TI\u1ec2U MU\u1ed8I FOOD & DRINK",
    "address": "66 Nguy\u1ec5n Ph\u00fac Chu, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8222056,
    "location/lng": 106.6326418
  },
  {
    "title": "SPICY BOX D2 B\u00ccNH TH\u1ea0NH",
    "address": "36/3B, Nguy\u1ec5n Gia Tr\u00ed, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71107, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng ti\u1ec7c \u0111\u1ee9ng",
    "location/lat": 10.8023519,
    "location/lng": 106.7160984
  },
  {
    "title": "SUKIYA K\u00eanh T\u00e2n Ho\u00e1",
    "address": "237/36 Tr\u1ecbnh \u0110\u00ecnh Tr\u1ecdng, Ph\u00fa Trung, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Gyudon",
    "location/lat": 10.7751258,
    "location/lng": 106.6380525
  },
  {
    "title": "Saigon Chic",
    "address": "82 \u0110. S\u1ed1 27, Ph\u01b0\u1eddng 6, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.8425415,
    "location/lng": 106.6805878
  },
  {
    "title": "Saigon Grill rooftop Restaurant",
    "address": "Pasteur/91 Ward, St, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam",
    "location/lat": 10.7769024,
    "location/lng": 106.6992778
  },
  {
    "title": "Saigon Prince Hotel (Formerly Duxton Hotel Saigon)",
    "address": "63 \u0110. Nguy\u00ea\u0303n Hu\u00ea\u0323, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Kh\u00e1ch s\u1ea1n, S\u00e2n g\u00f4n, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7728099,
    "location/lng": 106.7040688
  },
  {
    "title": "Sasin - M\u00ec 7 c\u1ea5p \u0111\u1ed9",
    "address": "36 Phan Huy \u00cdch, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72100, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8256405,
    "location/lng": 106.6309016
  },
  {
    "title": "Sasin - M\u00ec cay H\u00e0n Qu\u1ed1c",
    "address": "69 \u0110\u01b0\u1eddng s\u1ed1 1, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7348902,
    "location/lng": 106.7004258
  },
  {
    "title": "Sasin 334 T\u1ec9nh L\u1ed9 10, B\u00ecnh T\u00e2n",
    "address": "334 TL10, Khu ph\u1ed1 14, B\u00ecnh T\u00e2n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 71900, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7564584,
    "location/lng": 106.6235289
  },
  {
    "title": "Sindbad Kebab",
    "address": "Grandview A, My Tu/3 Nguy\u1ec5n \u0110\u1ee9c C\u1ea3nh, Phu My Hung, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7228753,
    "location/lng": 106.7104065
  },
  {
    "title": "Somtamlam K66 Ho\u00e0ng Di\u1ec7u",
    "address": "K66 \u0110. B\u1ebfn V\u00e2n \u0110\u1ed3n, Ph\u01b0\u1eddng 6, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Th\u00e1i Lan",
    "location/lat": 10.7610247,
    "location/lng": 106.7001393
  },
  {
    "title": "StarCafe gate 16",
    "address": "RM87+Q7, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.8168427,
    "location/lng": 106.6627707
  },
  {
    "title": "Steak Bin & Pizza",
    "address": "352K \u0110. Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng b\u00edt t\u1ebft, Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8209687,
    "location/lng": 106.6941346
  },
  {
    "title": "Steak M\u1ef9 Chip B\u00e9o",
    "address": "76/30/9, Nguy\u00ean H\u1ed3ng, Ph\u01b0\u1eddng 1, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng b\u00edt t\u1ebft, Nh\u00e0 h\u00e0ng M\u1ef9",
    "location/lat": 10.8162125,
    "location/lng": 106.6936902
  },
  {
    "title": "Sunny farm Coffee and BBQ",
    "address": "173/1a B\u00ecnh L\u1ee3i, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.8321008,
    "location/lng": 106.7047284
  },
  {
    "title": "Sushi Hokkaido Sachi",
    "address": "172H 172Q, Nguy\u1ec5n \u0110\u00ecnh Chi\u1ec3u, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng sushi",
    "location/lat": 10.7805648,
    "location/lng": 106.6918326
  },
  {
    "title": "Sushi Hokkaido Sachi - Crescent Mall",
    "address": "101 \u0110 T\u00f4n D\u1eadt Ti\u00ean, Khu \u0111\u00f4 th\u1ecb Ph\u00fa M\u1ef9 H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7282008,
    "location/lng": 106.718055
  },
  {
    "title": "Sushi Hokkaido Sachi Pasteur",
    "address": "180 Pasteur, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7784151,
    "location/lng": 106.6983601
  },
  {
    "title": "Sushi Masa Th\u1ea1ch Th\u1ecb Thanh",
    "address": "52 Th\u1ea1ch Th\u1ecb Thanh, Ph\u01b0\u1eddng T\u00e2n \u0110\u1ecbnh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng sushi, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7905328,
    "location/lng": 106.6924793
  },
  {
    "title": "Sushi T\u00ed",
    "address": "41 Hu\u1ef3nh T\u1ecbnh C\u1ee7a, Ph\u01b0\u1eddng 19, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7915914,
    "location/lng": 106.7104322
  },
  {
    "title": "Su\u1ed1i Bia",
    "address": "S\u1ed1 1 \u0110\u01b0\u1eddng D4A, khu d\u00e2n c\u01b0 ki\u1ebfn \u00c1, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 008428, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8061263,
    "location/lng": 106.7810913
  },
  {
    "title": "S\u00e1u Hu\u1ebf",
    "address": "3/30A1 T\u1ed5 23, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.83616,
    "location/lng": 106.624914
  },
  {
    "title": "S\u01a0N D\u00ca QU\u00c1N 2",
    "address": "339 B\u00f9i V\u0103n Ng\u1eef, Hi\u1ec7p Th\u00e0nh, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8900062,
    "location/lng": 106.6343397
  },
  {
    "title": "S\u1ee7i C\u1ea3o Gia \u00dd",
    "address": "548/29 \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, Ph\u01b0\u1eddng 21, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00ec Trung Qu\u1ed1c, Qu\u00e1n m\u00ec",
    "location/lat": 10.799888,
    "location/lng": 106.7155489
  },
  {
    "title": "TDG Center - Trung T\u00e2m H\u1ed9i Ngh\u1ecb & Nh\u00e0 H\u00e0ng Ti\u1ec7c C\u01b0\u1edbi Sang Tr\u1ecdng TPHCM",
    "address": "02 \u0110\u01b0\u1eddng D2, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "\u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi, Nh\u00e0 h\u00e0ng Braxin, Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8050765,
    "location/lng": 106.6191892
  },
  {
    "title": "TEXAS CHICKEN NGUY\u1ec4N S\u01a0N",
    "address": "71 Nguy\u1ec5n S\u01a1n, Ph\u00fa Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.7815968,
    "location/lng": 106.6303419
  },
  {
    "title": "TI\u1ec6M N\u01af\u1edaNG N\u00c0NG PH\u01af\u01a0NG | QU\u00c1N N\u01af\u1edaNG NGON H\u00d3C M\u00d4N | L\u1ea8U S\u1eeeA H\u00d3C M\u00d4N",
    "address": "41/2 \u0110. Tr\u1ecbnh Th\u1ecb D\u1ed1i, \u1ea4p 6, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8958294,
    "location/lng": 106.6386806
  },
  {
    "title": "TI\u1ec6M \u0102N S\u0102N M\u00c2Y",
    "address": "583 L\u00ea V\u0103n L\u01b0\u01a1ng, T\u00e2n H\u01b0ng, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7330431,
    "location/lng": 106.7015895
  },
  {
    "title": "TRUNG T\u00c2M H\u1ed8I NGH\u1eca - TI\u1ec6C C\u01af\u1edaI CELINA GARDEN",
    "address": "47 B\u00ecnh Ph\u00fa, Tam Ph\u00fa, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 t\u1ed5 ch\u1ee9c bu\u1ed5i ti\u1ec7c, D\u1ecbch v\u1ee5 c\u01b0\u1edbi h\u1ecfi, \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi",
    "location/lat": 10.8559444,
    "location/lng": 106.7416944
  },
  {
    "title": "Taipu Udon",
    "address": "373/6 \u0110. Nguy\u1ec5n Ki\u1ec7m, Ph\u01b0\u1eddng 9, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00ec Udon",
    "location/lat": 10.7997883,
    "location/lng": 106.6797138
  },
  {
    "title": "Tam \u0110a Qu\u00e1n",
    "address": "1655 \u0110. Nguy\u1ec5n Duy Trinh, Tr\u01b0\u1eddng Th\u1ea1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.8090362,
    "location/lng": 106.8286015
  },
  {
    "title": "Tami Coffee & Chay (Vegetarian Restaurant)",
    "address": "33 Ho\u00e0ng Di\u1ec7u, Ph\u01b0\u1eddng 10, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay, C\u01a1 s\u1edf rang c\u00e0 ph\u00ea, Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng \u0103n chay, Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7957227,
    "location/lng": 106.6708338
  },
  {
    "title": "Tandoor Indian Restaurant",
    "address": "39 Ng\u00f4 \u0110\u1ee9c K\u1ebf, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u1ea4n \u0110\u1ed9",
    "location/lat": 10.773186,
    "location/lng": 106.705366
  },
  {
    "title": "Tartine Saigon PMH M\u1ef9 Khang",
    "address": "2 Nam Th\u00f4ng II C, P. T\u00e2n Ph\u00fa, Qu\u1eadn 7, M\u1ef9 Khang, S19-2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 756335, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, M\u00f3n n\u01b0\u1edbng, Ti\u1ec7m b\u00e1nh, Qu\u00e1n \u0103n nh\u1ecf, Qu\u00e1n c\u00e0 ph\u00ea",
    "location/lat": 10.7161406,
    "location/lng": 106.7300691
  },
  {
    "title": "Texas Chicken H\u1eadu Giang",
    "address": "176D \u0110. H\u1eadu Giang, Ph\u01b0\u1eddng 5, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.7498932,
    "location/lng": 106.6436792
  },
  {
    "title": "Texas Chicken Nguy\u1ec5n Gia Tr\u00ed",
    "address": "203 Nguy\u1ec5n Gia Tr\u00ed, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng th\u1ecbt g\u00e0",
    "location/lat": 10.8064874,
    "location/lng": 106.7158515
  },
  {
    "title": "Texas Chicken Ph\u00fa M\u1ef9 H\u01b0ng",
    "address": "228 Ph\u1ea1m Th\u00e1i B\u01b0\u1eddng, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7275142,
    "location/lng": 106.7089615
  },
  {
    "title": "Texas Chicken Quang Trung",
    "address": "578 Quang Trung, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8355342,
    "location/lng": 106.6624204
  },
  {
    "title": "The 67 Pub & Restaraunt",
    "address": "Star Hill Street, The 67, 10 \u0110\u01b0\u1eddng s\u1ed1 10, T\u00e2n Ph\u00fa, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Ti\u1ec7m b\u00e1nh, Qu\u00e1n c\u00e0 ph\u00ea, Qu\u00e1n r\u01b0\u1ee3u",
    "location/lat": 10.7291414,
    "location/lng": 106.7253403
  },
  {
    "title": "The Adora Luxury",
    "address": "198 \u0110. Ho\u00e0ng V\u0103n Th\u1ee5, Ph\u01b0\u1eddng 9, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7999756,
    "location/lng": 106.673267
  },
  {
    "title": "The Gangs Central",
    "address": "87 \u0110. Nguy\u00ea\u0303n Hu\u00ea\u0323, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7733574,
    "location/lng": 106.7040212
  },
  {
    "title": "The Gangs Ho\u1ea3 Xa",
    "address": "179 \u0110. Cao Th\u1eafng, Ph\u01b0\u1eddng 12, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bia s\u00e2n v\u01b0\u1eddn, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7743592,
    "location/lng": 106.6762941
  },
  {
    "title": "The Gangs \u0110a Kao",
    "address": "32 \u0110. M\u1ea1c \u0110\u0129nh Chi, \u0110a Kao, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7867756,
    "location/lng": 106.6976154
  },
  {
    "title": "The Noon",
    "address": "277B \u0110. C\u00e1ch M\u1ea1ng Th\u00e1ng 8, Ph\u01b0\u1eddng 12, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7778209,
    "location/lng": 106.6807236
  },
  {
    "title": "The Pizza Company",
    "address": "10D Ho\u00e0ng Hoa Th\u00e1m, Ph\u01b0\u1eddng 7, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8049126,
    "location/lng": 106.6917001
  },
  {
    "title": "The Pizza Company (CN Quang Trung).",
    "address": "638 Quang Trung, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8360998,
    "location/lng": 106.6604283
  },
  {
    "title": "The Pizza Company Phan X\u00edch Long",
    "address": "355 Phan X\u00edch Long, Ph\u01b0\u1eddng 1, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng pizza",
    "location/lat": 10.8013515,
    "location/lng": 106.6831668
  },
  {
    "title": "The River Oriental",
    "address": "23 \u0110. Tr\u1ea7n B\u1ea1ch \u0110\u1eb1ng, Th\u1ee7 Thi\u00eam, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7834204,
    "location/lng": 106.7193045
  },
  {
    "title": "The Sushi House",
    "address": "12/7 Nguy\u1ec5n Kho\u00e1i, Ph\u01b0\u1eddng 2, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng sushi",
    "location/lat": 10.7535453,
    "location/lng": 106.695575
  },
  {
    "title": "The Vibes",
    "address": "51bis An Ph\u00fa, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ed7n h\u1ee3p, Trung t\u00e2m th\u01b0\u01a1ng m\u1ea1i, Qu\u00e1n c\u00e0 ph\u00ea",
    "location/lat": 10.8085856,
    "location/lng": 106.7506565
  },
  {
    "title": "The Vintage Emporium \u0110a kao",
    "address": "95 \u0110. Nguy\u1ec5n V\u0103n Th\u1ee7, \u0110a Kao, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 h\u00e0ng chuy\u00ean ph\u1ee5c v\u1ee5 b\u1eefa s\u00e1ng",
    "location/lat": 10.790093,
    "location/lng": 106.6992612
  },
  {
    "title": "Th\u1ecbt C\u1ea7y T\u01b0 Th\u00e2n 1",
    "address": "53 \u0110. T\u00e2n Th\u1edbi Nh\u00ec 8, T\u00e2n Th\u1edbi Nh\u00ec, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8946303,
    "location/lng": 106.5781552
  },
  {
    "title": "Tipu House Coffee",
    "address": "2 \u0110. S\u1ed1 1, Melosa Khang \u0110i\u1ec1n, Th\u00e0nh ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n c\u00e0 ph\u00ea, Nh\u00e0 thi\u1ebft k\u1ebf ki\u1ebfn tr\u00fac, Nh\u00e0 t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Nh\u00e0 cung c\u1ea5p th\u1ef1c ph\u1ea9m, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.781819,
    "location/lng": 106.7920618
  },
  {
    "title": "Ti\u1ec7m C\u01a1m Chay PH\u1eacT H\u1eeeU DUY\u00caN - \u4f5b\u53cb\u7de3\u7d20\u98df\u9928",
    "address": "28 V\u0103n Th\u00e2n, Ph\u01b0\u1eddng 8, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.743334,
    "location/lng": 106.642187
  },
  {
    "title": "Ti\u1ec7m C\u01a1m Linh Giang",
    "address": "145/2 D\u01b0\u01a1ng T\u1eed Giang, Ph\u01b0\u1eddng 15, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c",
    "location/lat": 10.7565793,
    "location/lng": 106.654342
  },
  {
    "title": "Ti\u1ec7m L\u1ea9u B\u00f2 nh\u00e0 g\u1ed7 S\u00e0i G\u00f2n",
    "address": "479A \u0110. L\u00ea Tr\u1ecdng T\u1ea5n, S\u01a1n K\u1ef3, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n l\u1ea9u",
    "location/lat": 10.8107545,
    "location/lng": 106.6112403
  },
  {
    "title": "Ti\u1ec7m c\u01a1m T\u00e2n Nh\u00e3",
    "address": "100 Tr\u1ea7n Tu\u1ea5n Kh\u1ea3i, Ph\u01b0\u1eddng 5, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7517478,
    "location/lng": 106.6743019
  },
  {
    "title": "Ti\u1ec7m \u0103n G\u1eb7m",
    "address": "8 Nguy\u1ec5n Thi\u1ec7n Thu\u1eadt, Ph\u01b0\u1eddng 24, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72307, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8054507,
    "location/lng": 106.7002568
  },
  {
    "title": "Ti\u1ec7m \u1ed1c Xo\u0103n T\u00edt",
    "address": "272 G\u00f2 D\u1ea7u, T\u00e2n Qu\u00fd, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7959909,
    "location/lng": 106.617898
  },
  {
    "title": "Tokbokki T\u00e2m L\u00f9n",
    "address": "Phan Chu Trinh/T\u00e2n Ti\u1ebfn 2/93/2B \u1ea4p T\u00e2n Ti\u1ebfn, Xu\u00e2n Th\u1edbi \u0110\u00f4ng, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, C\u1eeda h\u00e0ng b\u00e1n th\u1ef1c ph\u1ea9m s\u1ea1ch",
    "location/lat": 10.8655066,
    "location/lng": 106.5951276
  },
  {
    "title": "Topping Beef \u0110\u1ed9c L\u1eadp",
    "address": "106 \u0110. Nguy\u1ec5n Th\u1ecb Minh Khai, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ph\u01b0\u01a1ng T\u00e2y",
    "location/lat": 10.7798309,
    "location/lng": 106.6949897
  },
  {
    "title": "Trung T\u00e2m H\u1ed9i Ngh\u1ecb Ti\u1ec7c C\u01b0\u1edbi D\u00ecn K\u00fd Center",
    "address": "142/18 \u0110. C\u1ed9ng H\u00f2a, Ph\u01b0\u1eddng 4, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 760000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.803206,
    "location/lng": 106.6564751
  },
  {
    "title": "Trung T\u00e2m Ti\u1ec7c C\u01b0\u1edbi H\u1ed9i Ngh\u1ecb Happy Gold",
    "address": "650 \u0110. L\u0169y B\u00e1n B\u00edch, T\u00e2n Th\u00e0nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.788858,
    "location/lng": 106.6375023
  },
  {
    "title": "Trung T\u00e2m Ti\u1ec7c C\u01b0\u1edbi H\u1ed9i Ngh\u1ecb Melisa Center",
    "address": "QJJQ+CFX, H\u1ebbm 83 Tho\u1ea1i Ng\u1ecdc H\u1ea7u, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7811046,
    "location/lng": 106.6387234
  },
  {
    "title": "Trung t\u00e2m H\u1ed9i ngh\u1ecb & Ti\u1ec7c c\u01b0\u1edbi Metropole",
    "address": "216 L\u00fd Ch\u00ednh Th\u1eafng, Ph\u01b0\u1eddng 9, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "\u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7799574,
    "location/lng": 106.682232
  },
  {
    "title": "Trung t\u00e2m H\u1ed9i ngh\u1ecb - Ti\u1ec7c c\u01b0\u1edbi Diamond Place",
    "address": "15A H\u1ed3 V\u0103n Hu\u00ea, Ph\u01b0\u1eddng 9, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Trung t\u00e2m h\u00f4\u0323i nghi\u0323, Nh\u00e0 t\u1ed5 ch\u1ee9c s\u1ef1 ki\u1ec7n, Nh\u00e0 h\u00e0ng, \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c l\u1ec5 c\u01b0\u1edbi",
    "location/lat": 10.8008352,
    "location/lng": 106.6752473
  },
  {
    "title": "Tr\u00e0ng An Qu\u00e1n - \u1ea8m Th\u1ef1c \u0110\u1ed3ng Qu\u00ea",
    "address": "TP, 131 S\u1ed1 47, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.741822,
    "location/lng": 106.7123838
  },
  {
    "title": "Tr\u00e2u N\u00fai G\u00e0 \u0110\u1ed3i",
    "address": "S\u1ed1 7 \u0110. s\u1ed1 10, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8243774,
    "location/lng": 106.7266406
  },
  {
    "title": "Tr\u00e9 tr\u1ed9n Giang Ho\u00e0ng",
    "address": "121 Tr\u1ecbnh \u0110\u00ecnh Tr\u1ecdng, Ph\u00fa Trung, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7757414,
    "location/lng": 106.6420401
  },
  {
    "title": "Tr\u1ea7n Quang K\u00fd V\u1ecbt Quay Ti\u00eau Macao - CN L\u0169y B\u00e1n B\u00edch",
    "address": "466A \u0110. L\u0169y B\u00e1n B\u00edch, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7797916,
    "location/lng": 106.6357568
  },
  {
    "title": "TukTuk Thai Bistro",
    "address": "38 L\u00fd T\u1ef1 Tr\u1ecdng, B\u1ebfn Ngh\u00e9, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Th\u00e1i Lan",
    "location/lat": 10.7773874,
    "location/lng": 106.7002539
  },
  {
    "title": "TukTuk Thai Bistro",
    "address": "29 Ng\u00f4 Th\u1eddi Nhi\u1ec7m, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.780616,
    "location/lng": 106.69018
  },
  {
    "title": "Tuy\u1ebft Qu\u00e1n (Food & Beer)",
    "address": "722 \u0110. \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, Vinhomes T\u00e2n C\u1ea3ng, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.7974528,
    "location/lng": 106.7238782
  },
  {
    "title": "Tu\u1ea5n D\u00ea",
    "address": "115 \u0110\u00f4ng H\u01b0ng Thu\u1eadn 2, \u0110\u00f4ng H\u01b0ng Thu\u1eadn, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8351224,
    "location/lng": 106.6270385
  },
  {
    "title": "Two Guys Bistro / Bar",
    "address": "5 L\u00ea H\u1eefu Ki\u1ec1u Ph\u01b0\u1eddng B\u00ecnh Tr\u01b0ng T\u00e2y, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7835368,
    "location/lng": 106.7522701
  },
  {
    "title": "T\u00e1 L\u1ea3 Qu\u00e1n - Qu\u00e1n \u0102n Ngon Ph\u1ea1m V\u0103n \u0110\u00f4ng",
    "address": "339 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 1, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8207058,
    "location/lng": 106.6932988
  },
  {
    "title": "T\u00e2n S\u01a1n",
    "address": "425 Quang Trung, Ph\u01b0\u1eddng 14, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.837564,
    "location/lng": 106.642097
  },
  {
    "title": "T\u00e8obokki Hu\u1ef3nh Thi\u1ec7n L\u1ed9c",
    "address": "14A Hu\u1ef3nh Thi\u1ec7n L\u1ed9c, Ho\u00e0 Thanh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "C\u1eeda h\u00e0ng t\u1ea1p ph\u1ea9m Tri\u1ec1u Ti\u00ean, Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7803653,
    "location/lng": 106.6362532
  },
  {
    "title": "T\u1edaI B\u1ebeN FOOD & BEER",
    "address": "173 \u0110. B\u1ebfn V\u00e2n \u0110\u1ed3n, Ph\u01b0\u1eddng 6, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 008428, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.761827,
    "location/lng": 106.697943
  },
  {
    "title": "Uchi Sushi",
    "address": "14 S\u1ed1 45, Ph\u01b0\u1eddng 6, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng sushi, Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.7577088,
    "location/lng": 106.7006533
  },
  {
    "title": "Unatoto Nguy\u1ec5n Th\u1ecb Th\u1eadp - C\u01a1m l\u01b0\u01a1n n\u01b0\u1edbng s\u1ed1 1 Nh\u1eadt B\u1ea3n",
    "address": "70 Nguy\u1ec5n Th\u1ecb Th\u1eadp, B\u00ecnh Thu\u1eadn, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72914, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7379031,
    "location/lng": 106.7253835
  },
  {
    "title": "Va Th\u00e0nh \u74e6\u57ce Casual Taiwanese",
    "address": "40 Hu\u1ef3nh M\u1eabn \u0110\u1ea1t, P.2, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0110\u00e0i Loan",
    "location/lat": 10.7546505,
    "location/lng": 106.6769748
  },
  {
    "title": "Vegan Garden",
    "address": "Shop 3SB1-9 S\u1ed1 2 M\u1ef9 Vi\u00ean Chung C\u01b0 M\u1ef9 Vi\u00ean P, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay, Nh\u00e0 h\u00e0ng \u0103n nhanh, Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay",
    "location/lat": 10.7180448,
    "location/lng": 106.7297147
  },
  {
    "title": "Veganizta",
    "address": "Crescent Residence 1, 103 T\u00f4n D\u1eadt Ti\u00ean, T\u00e2n Ph\u00fa, CR1-05, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n chay, Nh\u00e0 h\u00e0ng \u0110\u00f4ng Nam \u00c1",
    "location/lat": 10.727837,
    "location/lng": 106.7191793
  },
  {
    "title": "V\u01b0\u1eddn C\u00f2 B\u00ean S\u00f4ng",
    "address": "Long Th\u1ea1nh M\u1ef9, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8286654,
    "location/lng": 106.8342321
  },
  {
    "title": "V\u01b0\u1eddn N\u01b0\u1edbng H\u00e0n Qu\u1ed1c Buffet",
    "address": "1212 \u0110. L\u00ea \u0110\u1ee9c Th\u1ecd, Ph\u01b0\u1eddng 13, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8526642,
    "location/lng": 106.6603828
  },
  {
    "title": "V\u01b0\u1eddn c\u00f2 H\u1ed3ng K\u00fd",
    "address": "35 \u0110\u01b0\u1eddng 23, Long Th\u1ea1nh M\u1ef9, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.827905,
    "location/lng": 106.8349986
  },
  {
    "title": "V\u01b0\u1eddn \u1ed0c Wongnai",
    "address": "268 \u0110. T\u00f4 Hi\u1ebfn Th\u00e0nh, Ph\u01b0\u1eddng 15, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7796597,
    "location/lng": 106.6648913
  },
  {
    "title": "V\u1ecbt C\u1ecf V\u00e2n \u0110\u00ecnh Qu\u1eadn 9",
    "address": "128 \u0110. Man Thi\u1ec7n, Ph\u01b0\u1eddng T\u00e2n Ph\u00fa, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8531865,
    "location/lng": 106.788986
  },
  {
    "title": "V\u1ecbt quay V\u0129nh Phong",
    "address": "527 Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 7, Qu\u1eadn 5, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "M\u00f3n n\u01b0\u1edbng, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7544894,
    "location/lng": 106.6742585
  },
  {
    "title": "Warning Zone 223",
    "address": "223 \u0110. Nam K\u1ef3 Kh\u1edfi Ngh\u0129a, Ph\u01b0\u1eddng 14, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7884409,
    "location/lng": 106.685031
  },
  {
    "title": "Warning Zone 33",
    "address": "33 Nguy\u1ec5n \u0110\u00ecnh Chi\u1ec3u, \u0110a Kao, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7858114,
    "location/lng": 106.6975936
  },
  {
    "title": "Wong Wong Dimsum",
    "address": "102 V\u0103n Th\u00e2n, Ph\u01b0\u1eddng 8, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c",
    "location/lat": 10.742014,
    "location/lng": 106.6397099
  },
  {
    "title": "XP Garden",
    "address": "476 \u0110. D\u01b0\u01a1ng Qu\u1ea3ng H\u00e0m, Ph\u01b0\u1eddng 6, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Qu\u00e1n c\u00e0 ph\u00ea, H\u00e3ng phim, S\u00e2n kh\u1ea5u",
    "location/lat": 10.8360298,
    "location/lng": 106.6837651
  },
  {
    "title": "Xi\u00ean Kh\u00e8 Koozi",
    "address": "782 \u0110. Tr\u01b0\u1eddng Sa, Ph\u01b0\u1eddng 14, Qu\u1eadn 3, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7882771,
    "location/lng": 106.681721
  },
  {
    "title": "Xu\u00e2n Lam Qu\u00e1n",
    "address": "267 \u0110\u01b0\u1eddng Tr\u1ecbnh Quang Ngh\u1ecb, Ph\u01b0\u1eddng 7, Qu\u1eadn 8, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7073823,
    "location/lng": 106.620111
  },
  {
    "title": "X\u00f4i B\u00ecnh Ti\u00ean - Minh Ph\u1ee5ng",
    "address": "88 \u0110. Minh Ph\u1ee5ng, Ph\u01b0\u1eddng 5, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng c\u01a1m, Nh\u00e0 h\u00e0ng b\u00e1n \u0111\u1ed3 \u0103n mang v\u1ec1",
    "location/lat": 10.7494238,
    "location/lng": 106.6425052
  },
  {
    "title": "X\u1ebbng - M\u1ed3i & Bia",
    "address": "22 Nguy\u1ec5n \u0110\u00ecnh Chi\u1ec3u, \u0110a Kao, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7904926,
    "location/lng": 106.7012738
  },
  {
    "title": "Yolo Bbq",
    "address": "49-51 Phan Huy \u00cdch, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.8268583,
    "location/lng": 106.6312731
  },
  {
    "title": "Zion Sky Lounge and Dining",
    "address": "87A H\u00e0m Nghi, Ph\u01b0\u1eddng Nguy\u1ec5n Th\u00e1i B\u00ecnh, Qu\u1eadn 1, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7705736,
    "location/lng": 106.7021213
  },
  {
    "title": "ZumWhere Ph\u00fa Nhu\u1eadn",
    "address": "117B Nguy\u1ec5n \u0110\u00ecnh Ch\u00ednh, Ph\u01b0\u1eddng 15, Ph\u00fa Nhu\u1eadn, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Izakaya, Nh\u00e0 m\u00e1y bia",
    "location/lat": 10.7951316,
    "location/lng": 106.6784585
  },
  {
    "title": "iSushi Tr\u01b0\u1eddng S\u01a1n T\u00e2n B\u00ecnh",
    "address": "18 Tr\u01b0\u1eddng S\u01a1n, Ph\u01b0\u1eddng 2, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Nh\u1eadt B\u1ea3n",
    "location/lat": 10.8081917,
    "location/lng": 106.6648058
  },
  {
    "title": "l\u1ea9u b\u00f2 \u0111\u1ed3ng",
    "address": "111/5A T\u1ed5 103, \u00c2p Tam \u0110\u00f4ng, Th\u1edbi Tam Th\u00f4n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.885006,
    "location/lng": 106.6236829
  },
  {
    "title": "qu\u00e1n 3 ch\u1ecb em",
    "address": "3C9H+QJ6, Unnamed Road, Trung L\u1eadp Th\u01b0\u1ee3ng, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 11.0694166,
    "location/lng": 106.4290285
  },
  {
    "title": "\u00d4RIBBQ",
    "address": "l\u00f4 20-21-22, 2A \u0110. Song H\u00e0nh, Trung M\u1ef9 T\u00e2y, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8505905,
    "location/lng": 106.6143319
  },
  {
    "title": "\u00dat Th\u01a1m M\u00e1 Heo Qu\u00e1n",
    "address": "VHCF+3J7, \u0110\u01b0\u1eddng Tr\u01b0\u01a1ng Th\u1ecb Nh\u01b0, Xu\u00e2n Th\u1edbi S\u01a1n, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8701712,
    "location/lng": 106.5740333
  },
  {
    "title": "\u0102n v\u1eb7t Nh\u1edb",
    "address": "Th\u00e1i M\u1ef9, C\u1ee7 Chi, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.9946322,
    "location/lng": 106.4031217
  },
  {
    "title": "\u0110\u00e1 L\u1eeda CN5",
    "address": "242 Nguy\u1ec5n Oanh, Ph\u01b0\u1eddng 17, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8371694,
    "location/lng": 106.6756176
  },
  {
    "title": "\u0110\u00f4 B\u1ea5t T\u1eed - 110D T\u00f4 Hi\u1ec7u",
    "address": "110D T\u00f4 Hi\u1ec7u, Hi\u1ec7p T\u00e2n, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7678464,
    "location/lng": 106.6270862
  },
  {
    "title": "\u0110\u00f4ng Giang Qu\u00e1n",
    "address": "642 \u0110. H\u1ed3ng B\u00e0ng, Ph\u01b0\u1eddng 16, Qu\u1eadn 11, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng, Ph\u00f2ng ti\u1ec7c, Nh\u00e0 t\u1ed5 ch\u1ee9c bu\u1ed5i ti\u1ec7c",
    "location/lat": 10.7543943,
    "location/lng": 106.6439492
  },
  {
    "title": "\u0110\u1ea9u Camping Hawaii",
    "address": "1017 B\u00ecnh Qu\u1edbi, C\u01b0 x\u00e1 Thanh \u0110a, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8207268,
    "location/lng": 106.7255678
  },
  {
    "title": "\u0110\u1ec9nh Phong Qu\u00e1n",
    "address": "495 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Qu\u00e1n bia, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8230441,
    "location/lng": 106.7022118
  },
  {
    "title": "\u1ea8M TH\u1ef0C H\u01af\u1edaNG D\u01af\u01a0NG",
    "address": "7 \u0110. Mai Ch\u00ed Th\u1ecd, Ph\u01b0\u1eddng B\u00ecnh Kh\u00e1nh, Qu\u1eadn 2, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 713702, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7842836,
    "location/lng": 106.7431861
  },
  {
    "title": "\u1ea8M TH\u1ef0C S\u00c1U CUA 2",
    "address": "96/5 Nguy\u1ec5n \u1ea2nh Th\u1ee7, \u0110. T\u00e2y L\u00e2n 7, B\u00e0 \u0110i\u1ec3m, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8428694,
    "location/lng": 106.5997758
  },
  {
    "title": "\u1ea8m Th\u1ef1c 72-Nguy\u1ec5n S\u1ef9 S\u00e1ch",
    "address": "72 Nguy\u1ec5n S\u1ef9 S\u00e1ch, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8201366,
    "location/lng": 106.6362992
  },
  {
    "title": "\u1ea8m Th\u1ef1c Ba Mi\u1ec1n",
    "address": "162 Nguy\u1ec5n Th\u1ecb \u0110\u1ecbnh, Ph\u01b0\u1eddng B\u00ecnh Tr\u01b0ng T\u00e2y, Th\u00e0nh ph\u1ed1 Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7877051,
    "location/lng": 106.7553812
  },
  {
    "title": "\u1ea8m Th\u1ef1c Chay Di\u1ec7u Thi\u1ec7n",
    "address": "16/1H,Nguy\u1ec5n \u1ea2nh Th\u1ee7, \u1ea4p H\u01b0ng L\u00e2n, B\u00e0 \u0110i\u1ec3m, H\u00f3c M\u00f4n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8521995,
    "location/lng": 106.6043077
  },
  {
    "title": "\u1ea8m Th\u1ef1c L\u00e0ng Tre",
    "address": "26/1 Nguy\u1ec5n Th\u1ecb B\u00fap, T\u00e2n Ch\u00e1nh Hi\u1ec7p, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8756949,
    "location/lng": 106.626209
  },
  {
    "title": "\u1ea8m Th\u1ef1c Qu\u00ea Nh\u00e0 Qu\u1eadn T\u00e2n B\u00ecnh",
    "address": "52A Nguy\u1ec5n Th\u00e1i B\u00ecnh, Ph\u01b0\u1eddng 4, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Vi\u1ec7t Nam, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7989019,
    "location/lng": 106.6554157
  },
  {
    "title": "\u1ea8m Th\u1ef1c Sinh Th\u00e1i S\u00f4ng Qu\u00ea 5",
    "address": "187 \u0110. \u0110\u00e0o Tr\u00ed, Ph\u00fa M\u1ef9, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 72906, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7126959,
    "location/lng": 106.744819
  },
  {
    "title": "\u1ea8m th\u1ef1c Chay - V\u01b0\u1eddn Chay",
    "address": "428 L\u00ea Quang \u0110\u1ecbnh, Ph\u01b0\u1eddng 11, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng cho ng\u01b0\u1eddi \u0103n chay, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8118414,
    "location/lng": 106.6908568
  },
  {
    "title": "\u1ea8m th\u1ef1c OLA",
    "address": "1534 \u0110. V\u00f5 V\u0103n Ki\u1ec7t, Ph\u01b0\u1eddng 7, Qu\u1eadn 6, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7401164,
    "location/lng": 106.6432296
  },
  {
    "title": "\u1ea8m th\u1ef1c Ph\u01b0\u01a1ng Nam Qu\u1eadn 2",
    "address": "S\u1ed1 01 \u0110\u01b0\u1eddng s\u1ed1 1, P. An Ph\u00fa, Th\u00e0nh ph\u1ed1, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.788598,
    "location/lng": 106.7449989
  },
  {
    "title": "\u1ea8m th\u1ef1c Ph\u01b0\u1edbc Qu\u1eafn",
    "address": "L\u01b0\u01a1ng Ng\u1ecdc Quy\u1ebfn, Ph\u01b0\u1eddng 5, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8229697,
    "location/lng": 106.6962316
  },
  {
    "title": "\u1ea8m th\u1ef1c Th\u1ed1",
    "address": "133 \u0110\u01b0\u1eddng 18, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8218142,
    "location/lng": 106.7196682
  },
  {
    "title": "\u1ea8m th\u1ef1c s\u00e2n v\u01b0\u1eddn M\u00e1i L\u00e1 Qu\u1eadn 7",
    "address": "1D \u0110\u01b0\u1eddng S\u1ed1 36, T\u00e2n Quy, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7413095,
    "location/lng": 106.7089206
  },
  {
    "title": "\u1ea8m th\u1ef1c s\u00e2n v\u01b0\u1eddn PON",
    "address": "508 \u0110. L\u00ea Tr\u1ecdng T\u1ea5n, T\u00e2y Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8097255,
    "location/lng": 106.6144057
  },
  {
    "title": "\u1ea8m th\u1ef1c s\u00e2n v\u01b0\u1eddn l\u1ea9u b\u00f2 Tuy\u1ec1n k\u00fd",
    "address": "277 L\u00e3 Xu\u00e2n Oai, T\u0103ng Nh\u01a1n Ph\u00fa A, Qu\u1eadn 9, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng gia \u0111\u00ecnh",
    "location/lat": 10.836903,
    "location/lng": 106.7993104
  },
  {
    "title": "\u1ea8m th\u1ef1c tre v\u00e0ng",
    "address": "538 L\u00ea V\u0103n Th\u1ecd, Ph\u01b0\u1eddng 13, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 700000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8529215,
    "location/lng": 106.6561763
  },
  {
    "title": "\u1ed0C An Vy",
    "address": "79 \u0110. S\u1ed1 23, Hi\u1ec7p B\u00ecnh Ch\u00e1nh, Th\u1ee7 \u0110\u1ee9c, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng m\u00f3n n\u01b0\u1edbng",
    "location/lat": 10.826903,
    "location/lng": 106.728374
  },
  {
    "title": "\u1ed0C TR\u1ee8NG MU\u1ed0I 3",
    "address": "107 \u0110. S\u1ed1 7, Cityland Center Hills, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8293932,
    "location/lng": 106.6797516
  },
  {
    "title": "\u1ed0c Bom",
    "address": "223 Nguy\u1ec5n V\u0103n C\u00f4ng, Ph\u01b0\u1eddng 3, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.8224002,
    "location/lng": 106.6742282
  },
  {
    "title": "\u1ed0c Ch\u00e1nh",
    "address": "55/5 Nguy\u1ec5n V\u0103n C\u00f4ng, Ph\u01b0\u1eddng 3, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8238868,
    "location/lng": 106.6774516
  },
  {
    "title": "\u1ed0c Ch\u1ea3o 535",
    "address": "535 Ph\u1ea1m V\u0103n \u0110\u1ed3ng, Ph\u01b0\u1eddng 13, B\u00ecnh Th\u1ea1nh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8235646,
    "location/lng": 106.7042277
  },
  {
    "title": "\u1ed0c C\u00f4 Giang",
    "address": "59 \u0110. Nguy\u1ec5n H\u1eefu D\u1eadt, T\u00e2y Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8074464,
    "location/lng": 106.6309887
  },
  {
    "title": "\u1ed0c C\u00f4 Giang",
    "address": "304 \u0110. TX25, Th\u1ea1nh Xu\u00e2n, Qu\u1eadn 12, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8801161,
    "location/lng": 106.6647379
  },
  {
    "title": "\u1ed0c C\u0169",
    "address": "261 \u0110. S\u1ed1 8, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.844964,
    "location/lng": 106.6593584
  },
  {
    "title": "\u1ed0c Ho\u00e0ng Sa",
    "address": "79/3 \u0110. T\u00f4n Th\u1ea5t Thuy\u1ebft, Ph\u01b0\u1eddng 1, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7544825,
    "location/lng": 106.6915379
  },
  {
    "title": "\u1ed0c H\u00fat",
    "address": "81 K\u00eanh N\u01b0\u1edbc \u0110en, B\u00ecnh H\u01b0ng Ho\u00e0 A, B\u00ecnh T\u00e2n, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.787518,
    "location/lng": 106.615082
  },
  {
    "title": "\u1ed0c Ngon Thi\u1ec7n \u00dd",
    "address": "200 Nguy\u1ec5n V\u0103n Kh\u1ed1i, Ph\u01b0\u1eddng 9, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8429159,
    "location/lng": 106.6534892
  },
  {
    "title": "\u1ed0c Nho 88",
    "address": "190 L\u00ea Qu\u1ed1c H\u01b0ng, Ph\u01b0\u1eddng 12, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7631239,
    "location/lng": 106.7059438
  },
  {
    "title": "\u1ed0c Nh\u1edb S\u00e0i G\u00f2n",
    "address": "136 Tr\u1ecbnh \u0110\u00ecnh Tr\u1ecdng, Ph\u00fa Trung, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.77495,
    "location/lng": 106.6438903
  },
  {
    "title": "\u1ed0c Oanh",
    "address": "534 V\u0129nh Kh\u00e1nh, Ph\u01b0\u1eddng 8, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7607037,
    "location/lng": 106.7032931
  },
  {
    "title": "\u1ed0c Quang Anh",
    "address": "189 \u0110. T\u00f4 Hi\u1ebfn Th\u00e0nh, Ph\u01b0\u1eddng 13, Qu\u1eadn 10, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7798791,
    "location/lng": 106.6682696
  },
  {
    "title": "\u1ed0c Sen",
    "address": "18A X\u00f3m Chi\u1ebfu, Ph\u01b0\u1eddng 16, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.7570694,
    "location/lng": 106.7107798
  },
  {
    "title": "\u1ed0c Xanh Thu B\u1eb9",
    "address": "98 Tr\u1ea7n Quang C\u01a1, Ph\u00fa Th\u1ea1nh, T\u00e2n Ph\u00fa, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh 70000, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n, Qu\u00e1n \u0103n nh\u1ecf",
    "location/lat": 10.7782786,
    "location/lng": 106.6235934
  },
  {
    "title": "\u1ed0c c\u00e2y me c\u0169",
    "address": "119 \u0110. S\u1ed1 1, Ph\u01b0\u1eddng 11, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8460927,
    "location/lng": 106.6605212
  },
  {
    "title": "\u1ed0c \u0110\u00e0o 2",
    "address": "123 V\u0129nh Kh\u00e1nh, Ph\u01b0\u1eddng 10, Qu\u1eadn 4, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng h\u1ea3i s\u1ea3n",
    "location/lat": 10.7611372,
    "location/lng": 106.7049786
  },
  {
    "title": "\u1ed0c \u0110\u00eam- Th\u1ebf gi\u1edbi \u1ed1c 30k",
    "address": "247 Ph\u1ea1m V\u0103n B\u1ea1ch, Ph\u01b0\u1eddng 15, T\u00e2n B\u00ecnh, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng",
    "location/lat": 10.8189004,
    "location/lng": 106.6376496
  },
  {
    "title": "\u1ed0c \u0111\u00eam Ch\u00fa Ki\u1ec7t",
    "address": "137 \u0110. S\u1ed1 27, Ph\u01b0\u1eddng 6, G\u00f2 V\u1ea5p, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng \u0103n nhanh",
    "location/lat": 10.843444,
    "location/lng": 106.6809328
  },
  {
    "title": "\u65fa\u548c\u725b\u6f6e\u6c55\u725b\u8089\u706b\u9505(7\u90e1) L\u1ea9u b\u00f2 tri\u1ec1u ch\u00e2u WangHeNiu(Q7)",
    "address": "\u0110. P/4-1B Khu ph\u1ed1 M\u1ef9 C\u1ea3nh, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Trung Qu\u1ed1c",
    "location/lat": 10.7271964,
    "location/lng": 106.7140236
  },
  {
    "title": "\ub4e4\uae68\uc2dc\ub798\uae30 Perilla Korean restaurant",
    "address": "161 \u0110 T\u00f4n D\u1eadt Ti\u00ean, T\u00e2n Phong, Qu\u1eadn 7, Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh, Vi\u1ec7t Nam",
    "categories": "Nh\u00e0 h\u00e0ng Ha\u0300n Qu\u1ed1c",
    "location/lat": 10.7224348,
    "location/lng": 106.7140959
  }
]

export default data;
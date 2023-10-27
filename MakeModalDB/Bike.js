const bikeData = [
  {
    "Option": "Aprilia Tuono 660",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "2017 Triumph Thruxton",
    "Variant": "Classic Cafe Racer (Petrol-865cc)"
  },
  {
    "Option": "2023 Royal Enfield Bullet 350",
    "Variant": "STD (Petrol-349cc)"
  },
  {
    "Option": "Aftek Knight Rider",
    "Variant": "STD (Petrol-170cc)"
  },
  {
    "Option": "Aftek Royal Plus",
    "Variant": "STD (Petrol-110cc)"
  },
  {
    "Option": "Aftek Scorpion",
    "Variant": "Z 200 (Petrol-170cc)"
  },
  {
    "Option": "Aftek Skipper",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Aftek Turbo 170",
    "Variant": "STD (Petrol-170cc)"
  },
  {
    "Option": "Apache RTR 180 2013",
    "Variant": "Standerd (Petrol-180cc)"
  },
  {
    "Option": "Aprilia Caponord 1200",
    "Variant": "ABS Travel (Petrol-1197cc)"
  },
  {
    "Option": "Aprilia Caponord 1200",
    "Variant": "STD (Petrol-1197cc)"
  },
  {
    "Option": "Aprilia Dorsoduro 1200",
    "Variant": "STD (Petrol-1197cc)"
  },
  {
    "Option": "Aprilia Facelift",
    "Variant": "STD (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia factory",
    "Variant": "125 (Petrol-124.8cc)"
  },
  {
    "Option": "Aprilia Mana",
    "Variant": "850 ABS (Petrol-839.3cc)"
  },
  {
    "Option": "Aprilia Mana",
    "Variant": "850 GT (Petrol-839.3cc)"
  },
  {
    "Option": "Aprilia RS 660",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Aprilia RSV4",
    "Variant": "Factory (Petrol-0cc)"
  },
  {
    "Option": "Aprilia RSV4 (2012-2019)",
    "Variant": "1000 RF (Petrol-999.6cc)"
  },
  {
    "Option": "Aprilia RSV4 (2012-2019)",
    "Variant": "1000 RR (Petrol-999.6cc)"
  },
  {
    "Option": "Aprilia RSV4 (2012-2019)",
    "Variant": "Factory (Petrol-999cc)"
  },
  {
    "Option": "Aprilia RSV4 (2012-2019)",
    "Variant": "R (Petrol-999.6cc)"
  },
  {
    "Option": "Aprilia SR",
    "Variant": "160 Carbon (Petrol-0cc)"
  },
  {
    "Option": "Aprilia SR",
    "Variant": "160 Race (Petrol-0cc)"
  },
  {
    "Option": "Aprilia SR",
    "Variant": "2020 (Petrol-160.03cc)"
  },
  {
    "Option": "Aprilia SR",
    "Variant": "2020 Carbon (Petrol-160.03cc)"
  },
  {
    "Option": "Aprilia SR",
    "Variant": "2020 Race (Petrol-160.03cc)"
  },
  {
    "Option": "Aprilia SR",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Aprilia SR 125",
    "Variant": "2020 Analog (Petrol-124.45cc)"
  },
  {
    "Option": "Aprilia SR 125",
    "Variant": "2020 Digi Cluster (Petrol-124.45cc)"
  },
  {
    "Option": "Aprilia SR 125",
    "Variant": "BS4 (Petrol-125cc)"
  },
  {
    "Option": "Aprilia SR 125",
    "Variant": "CBS (Petrol-125cc)"
  },
  {
    "Option": "Aprilia SR 125",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Aprilia SR 150",
    "Variant": "ABS (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150",
    "Variant": "Carbon ABS (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150",
    "Variant": "Carbon Connectivity ABS (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150",
    "Variant": "Carbon STD (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150",
    "Variant": "STD (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150 Race",
    "Variant": "ABS (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150 Race",
    "Variant": "Connectivity (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150 Race",
    "Variant": "Connectivity ABS (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SR 150 Race",
    "Variant": "STD (Petrol-154.8cc)"
  },
  {
    "Option": "Aprilia SRV 850",
    "Variant": "ABS (Petrol-839.3cc)"
  },
  {
    "Option": "Aprilia Storm 125",
    "Variant": "BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Aprilia Storm 125",
    "Variant": "FL CBS Disc Brake BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Aprilia Storm 125",
    "Variant": "STD (Petrol-124.49cc)"
  },
  {
    "Option": "Aprilia SXR 125",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Aprilia SXR 160",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Aprilia Tuono BS4",
    "Variant": "V4 1000 Factory BS4 (Petrol-1077cc)"
  },
  {
    "Option": "Aprilia Tuono BS4",
    "Variant": "V4 1100 RR BS4 (Petrol-1077cc)"
  },
  {
    "Option": "Aprilia Tuono V4",
    "Variant": "Factory (Petrol-0cc)"
  },
  {
    "Option": "Avon E Bike",
    "Variant": "VX (Petrol-0cc)"
  },
  {
    "Option": "Bajaj 4S Champion",
    "Variant": "STD (Petrol-99.3cc)"
  },
  {
    "Option": "Bajaj Aspire",
    "Variant": "STD (Petrol-111.6cc)"
  },
  {
    "Option": "Bajaj Avenger 180",
    "Variant": "STD (Petrol-178.6cc)"
  },
  {
    "Option": "Bajaj Avenger 200",
    "Variant": "STD (Petrol-200cc)"
  },
  {
    "Option": "Bajaj Avenger 220",
    "Variant": "STD (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Avenger 220 Street",
    "Variant": "STD (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Avenger Cruise 220",
    "Variant": "ABS (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Avenger Cruise 220",
    "Variant": "Bajaj Avenger Cruise 220 Desert Gold (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Avenger Cruise 220",
    "Variant": "BS6 (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Avenger Street 150",
    "Variant": "STD (Petrol-150cc)"
  },
  {
    "Option": "Bajaj Avenger Street 150",
    "Variant": "Street 150 (Petrol-150cc)"
  },
  {
    "Option": "Bajaj Avenger Street 160",
    "Variant": "ABS (Petrol-160cc)"
  },
  {
    "Option": "Bajaj Avenger Street 160",
    "Variant": "BS6 (Petrol-160cc)"
  },
  {
    "Option": "Bajaj Avenger Street 180",
    "Variant": "STD (Petrol-180cc)"
  },
  {
    "Option": "Bajaj Avenger Street 220 BS4",
    "Variant": "220 (Petrol-219.89cc)"
  },
  {
    "Option": "Bajaj Avenger Street 220 BS4",
    "Variant": "ABS BS4 (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Avenger Street 220 BS4",
    "Variant": "DTSi (Petrol-200cc)"
  },
  {
    "Option": "Bajaj Blade",
    "Variant": "125 (Petrol-125cc)"
  },
  {
    "Option": "Bajaj Boxer",
    "Variant": "150 (Petrol-149cc)"
  },
  {
    "Option": "Bajaj Bravo",
    "Variant": "STD (Petrol-145.5cc)"
  },
  {
    "Option": "Bajaj Byk",
    "Variant": "STD (Petrol-92.21cc)"
  },
  {
    "Option": "Bajaj Caliber",
    "Variant": "115 (Petrol-111.6cc)"
  },
  {
    "Option": "Bajaj Caliber",
    "Variant": "Croma (Petrol-111.6cc)"
  },
  {
    "Option": "Bajaj Chetak (1972-2006)",
    "Variant": "2 Stroke (Petrol-145.45cc)"
  },
  {
    "Option": "Bajaj Chetak (1972-2006)",
    "Variant": "4 Stroke (Petrol-145.45cc)"
  },
  {
    "Option": "Bajaj CT 110X",
    "Variant": "ES Alloy (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj CT 110X",
    "Variant": "ES Alloy BS6 (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj CT 110X",
    "Variant": "Kick Start (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj CT 110X",
    "Variant": "KS Alloy (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj CT 110X",
    "Variant": "KS Alloy BS6 (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj CT 125X",
    "Variant": "Disc (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj CT 125X",
    "Variant": "Drum (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj CT100",
    "Variant": "ES Alloy CBS BS4 (Petrol-102cc)"
  },
  {
    "Option": "Bajaj CT100",
    "Variant": "ES Alloy Drum (Petrol-102cc)"
  },
  {
    "Option": "Bajaj CT100",
    "Variant": "KS Alloy (Petrol-102cc)"
  },
  {
    "Option": "Bajaj CT100",
    "Variant": "KS Alloy CBS BS4 (Petrol-102cc)"
  },
  {
    "Option": "Bajaj CT100",
    "Variant": "KS Spoke CBS BS4 (Petrol-102cc)"
  },
  {
    "Option": "Bajaj CT100",
    "Variant": "Spoke BS4 (Petrol-102cc)"
  },
  {
    "Option": "Bajaj cub",
    "Variant": "STD (Petrol-100cc)"
  },
  {
    "Option": "Bajaj Discover 100",
    "Variant": "Discover 100 (Petrol-94.38cc)"
  },
  {
    "Option": "Bajaj Discover 100 M",
    "Variant": "100 M Disc (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Discover 100 M",
    "Variant": "100M (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Discover 100 T",
    "Variant": "100 T (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Discover 100 T",
    "Variant": "100 T Disc (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Discover 110",
    "Variant": "Drum CBS (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj Discover 110",
    "Variant": "STD (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2007-2015)",
    "Variant": "125 (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2007-2015)",
    "Variant": "125 M Disc (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2007-2015)",
    "Variant": "125F (Petrol-125cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2015-2020)",
    "Variant": "125 ST (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2015-2020)",
    "Variant": "125 T Disc (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2015-2020)",
    "Variant": "125 T Drum (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2015-2020)",
    "Variant": "Disc (Petrol-124.5cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2015-2020)",
    "Variant": "Disc CBS (Petrol-124.5cc)"
  },
  {
    "Option": "Bajaj Discover 125 (2015-2020)",
    "Variant": "Drum CBS (Petrol-124.5cc)"
  },
  {
    "Option": "Bajaj Discover 135",
    "Variant": "STD (Petrol-134.21cc)"
  },
  {
    "Option": "Bajaj Discover 150 F",
    "Variant": "Disc (Petrol-144.8cc)"
  },
  {
    "Option": "Bajaj Discover 150 F",
    "Variant": "Drum (Petrol-144.8cc)"
  },
  {
    "Option": "Bajaj Discover 150 F",
    "Variant": "STD (Petrol-144.8cc)"
  },
  {
    "Option": "Bajaj Discover 150 S",
    "Variant": "150 Disc (Petrol-144.8cc)"
  },
  {
    "Option": "Bajaj Discover 150 S",
    "Variant": "150 Drum (Petrol-144.8cc)"
  },
  {
    "Option": "Bajaj Dominar 250",
    "Variant": "STD (Petrol-248.77cc)"
  },
  {
    "Option": "Bajaj Dominar 400",
    "Variant": "BS4 (Petrol-373.3cc)"
  },
  {
    "Option": "Bajaj Dominar 400",
    "Variant": "BS6 (Petrol-373.3cc)"
  },
  {
    "Option": "Bajaj Dominar 400",
    "Variant": "STD (Petrol-373.3cc)"
  },
  {
    "Option": "Bajaj Dominar 400 (2016-2018)",
    "Variant": "ABS (Petrol-373.3cc)"
  },
  {
    "Option": "Bajaj Dominar 400 (2016-2018)",
    "Variant": "STD (Petrol-373.2cc)"
  },
  {
    "Option": "Bajaj Dominar 400 (2016-2018)",
    "Variant": "STD (Petrol-373.3cc)"
  },
  {
    "Option": "Bajaj KB 100 RTZ",
    "Variant": "STD (Petrol-99.7cc)"
  },
  {
    "Option": "Bajaj Kristal",
    "Variant": "STD (Petrol-95cc)"
  },
  {
    "Option": "Bajaj legend",
    "Variant": "Bajaj legend (Petrol-145cc)"
  },
  {
    "Option": "Bajaj M80",
    "Variant": "4S (Petrol-74.4cc)"
  },
  {
    "Option": "Bajaj NS250",
    "Variant": "STD (Petrol-248.8cc)"
  },
  {
    "Option": "Bajaj Platina 100",
    "Variant": "ES Disc BS6 (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 100",
    "Variant": "ES Drum BS6 (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 100",
    "Variant": "Kick Start CBS (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 100",
    "Variant": "KS Alloy BS6 (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "100 Spoke Wheel (Petrol-99.27cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "ABS (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "Drum (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "ES 100 Alloy (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "ES 100 KS Alloy (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "ES Alloy (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "ES Alloy CBS (Petrol-115cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "ES Spoke (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "LED DRL (Petrol-102cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "Platina 100 (Petrol-99.27cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "Platina 125 (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj Platina 110",
    "Variant": "Standard (Petrol-108cc)"
  },
  {
    "Option": "Bajaj Platina 110 H Gear",
    "Variant": "Disc (Petrol-115cc)"
  },
  {
    "Option": "Bajaj Platina 110 H Gear",
    "Variant": "Disc BS6 (Petrol-115.45cc)"
  },
  {
    "Option": "Bajaj Platina 110 H Gear",
    "Variant": "Drum (Petrol-115cc)"
  },
  {
    "Option": "Bajaj Platina 125",
    "Variant": "STD (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 125",
    "Variant": "Carbon Fiber Single Seat (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj Pulsar 125",
    "Variant": "Carbon Fiber Split Seat (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj Pulsar 125",
    "Variant": "Disc (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj Pulsar 125",
    "Variant": "Drum (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj Pulsar 125",
    "Variant": "Neon Single Seat (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj Pulsar 125",
    "Variant": "Single Seat - Drum (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj Pulsar 125",
    "Variant": "Split Seat BS4 (Petrol-124.4cc)"
  },
  {
    "Option": "Bajaj Pulsar 135LS",
    "Variant": "STD (Petrol-134.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "ABS (Petrol-149cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "Classic (Petrol-149cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "Neon ABS (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "Neon BS6 (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "Single Disc BS6 (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "STD (Petrol-149cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "Twin Disc ABS (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 150",
    "Variant": "Twin Disc BS6 (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 150 (2001-2009)",
    "Variant": "150 (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 150(2009-2014)",
    "Variant": "STD (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 180",
    "Variant": "ABS (2009-2019) BS4 (Petrol-178.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 180",
    "Variant": "ABS (Petrol-178.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 180",
    "Variant": "STD (2009-2019) BS4 (Petrol-178.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 180",
    "Variant": "STD (Petrol-178.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 180F",
    "Variant": "BS6 (Petrol-178.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 180F",
    "Variant": "STD (Petrol-178.6cc)"
  },
  {
    "Option": "Bajaj Pulsar 200",
    "Variant": "STD (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar 220 F",
    "Variant": "ABS (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Pulsar 220 F",
    "Variant": "STD (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Pulsar 220 F",
    "Variant": "STD 2009 (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Pulsar 220S",
    "Variant": "STD (Petrol-220cc)"
  },
  {
    "Option": "Bajaj Pulsar AS 150",
    "Variant": "Standard (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Pulsar AS 200",
    "Variant": "Standard (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar F250",
    "Variant": "All-Black (Petrol-249.07cc)"
  },
  {
    "Option": "Bajaj Pulsar F250",
    "Variant": "STD (Petrol-249.07cc)"
  },
  {
    "Option": "Bajaj Pulsar N160",
    "Variant": "Dual Channel ABS (Petrol-164.82cc)"
  },
  {
    "Option": "Bajaj Pulsar N160",
    "Variant": "Single Channel ABS (Petrol-164.82cc)"
  },
  {
    "Option": "Bajaj Pulsar N250",
    "Variant": "All-Black (Petrol-249.07cc)"
  },
  {
    "Option": "Bajaj Pulsar N250",
    "Variant": "STD (Petrol-249.07cc)"
  },
  {
    "Option": "Bajaj Pulsar NS 125",
    "Variant": "STD (Petrol-124.45cc)"
  },
  {
    "Option": "Bajaj Pulsar NS160",
    "Variant": "STD (Petrol-160.3cc)"
  },
  {
    "Option": "Bajaj Pulsar NS160",
    "Variant": "STD 2023 (Petrol-160cc)"
  },
  {
    "Option": "Bajaj Pulsar NS160",
    "Variant": "Twin Disc ABS (Petrol-160.3cc)"
  },
  {
    "Option": "Bajaj Pulsar NS160",
    "Variant": "Twin Disc BS6 (Petrol-160.3cc)"
  },
  {
    "Option": "Bajaj Pulsar NS200",
    "Variant": "ABS (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar NS200",
    "Variant": "STD (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar NS200",
    "Variant": "STD 2023 (Petrol-199cc)"
  },
  {
    "Option": "Bajaj Pulsar NS200",
    "Variant": "STD BS4 (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar P150",
    "Variant": "Single Disc (Petrol-149.68cc)"
  },
  {
    "Option": "Bajaj Pulsar P150",
    "Variant": "Twin Disc (Petrol-149.68cc)"
  },
  {
    "Option": "Bajaj Pulsar RS200",
    "Variant": "ABS (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar RS200",
    "Variant": "Black Edition (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar RS200",
    "Variant": "BS4 ABS (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar RS200",
    "Variant": "Dual ABS (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Pulsar RS200",
    "Variant": "STD (Petrol-199.5cc)"
  },
  {
    "Option": "Bajaj Saffire",
    "Variant": "Bajaj Saffire STD (Petrol-92cc)"
  },
  {
    "Option": "Bajaj Sunny",
    "Variant": "STD (Petrol-49cc)"
  },
  {
    "Option": "Bajaj V12",
    "Variant": "DISC (Petrol-124.5cc)"
  },
  {
    "Option": "Bajaj V12",
    "Variant": "STD (Petrol-124.5cc)"
  },
  {
    "Option": "Bajaj V15 Power Up",
    "Variant": "STD (Petrol-149.5cc)"
  },
  {
    "Option": "Bajaj Wind",
    "Variant": "125 (Petrol-124.6cc)"
  },
  {
    "Option": "Bajaj XCD",
    "Variant": "125cc DTSSi (Petrol-124.58cc)"
  },
  {
    "Option": "Bajaj XCD",
    "Variant": "XCD 135 DTSSI kick start (Petrol-134.6cc)"
  },
  {
    "Option": "Bajaj XCD",
    "Variant": "XCD 135 DTSSI self start (Petrol-134.6cc)"
  },
  {
    "Option": "Bajaj XCD",
    "Variant": "XCD Sprint (Petrol-125cc)"
  },
  {
    "Option": "Benelli 302R BS4",
    "Variant": "ABS BS4 (Petrol-300cc)"
  },
  {
    "Option": "Benelli 502 C",
    "Variant": "Black (Petrol-500cc)"
  },
  {
    "Option": "Benelli 502 C",
    "Variant": "Red (Petrol-500cc)"
  },
  {
    "Option": "Benelli BX 250",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Benelli Imperiale 400",
    "Variant": "Black (Petrol-374cc)"
  },
  {
    "Option": "Benelli Imperiale 400",
    "Variant": "Red (Petrol-374cc)"
  },
  {
    "Option": "Benelli Imperiale 400",
    "Variant": "Silver (Petrol-374cc)"
  },
  {
    "Option": "Benelli Imperiale 400",
    "Variant": "STD BS4 (Petrol-374cc)"
  },
  {
    "Option": "Benelli Leoncino 250",
    "Variant": "STD BS6 (Petrol-249cc)"
  },
  {
    "Option": "Benelli Leoncino 250 BS4",
    "Variant": "STD BS4 (Petrol-249cc)"
  },
  {
    "Option": "Benelli Leoncino 500",
    "Variant": "Red (Petrol-500cc)"
  },
  {
    "Option": "Benelli Leoncino 500",
    "Variant": "Silver (Petrol-500cc)"
  },
  {
    "Option": "Benelli Leoncino 500 BS4",
    "Variant": "STD BS4 (Petrol-500cc)"
  },
  {
    "Option": "Benelli TNT 25",
    "Variant": "Premium (Petrol-249cc)"
  },
  {
    "Option": "Benelli TNT 25",
    "Variant": "Standard (Petrol-249cc)"
  },
  {
    "Option": "Benelli TNT 300 BS4",
    "Variant": "ABS BS4 (Petrol-300cc)"
  },
  {
    "Option": "Benelli TNT 300 BS4",
    "Variant": "STD (Petrol-300cc)"
  },
  {
    "Option": "Benelli TNT 600 GT",
    "Variant": "ABS (Petrol-600cc)"
  },
  {
    "Option": "Benelli TNT 600 GT",
    "Variant": "STD (Petrol-600cc)"
  },
  {
    "Option": "Benelli TNT 600i BS4",
    "Variant": "ABS BS4 (Petrol-600cc)"
  },
  {
    "Option": "Benelli TNT 600i BS4",
    "Variant": "i (Petrol-600cc)"
  },
  {
    "Option": "Benelli TNT 600i BS4",
    "Variant": "Limited Edition (Petrol-600cc)"
  },
  {
    "Option": "Benelli TNT 899",
    "Variant": "Standard (Petrol-898cc)"
  },
  {
    "Option": "Benelli TNT R",
    "Variant": "R (Petrol-1131cc)"
  },
  {
    "Option": "Benelli Trek 1130",
    "Variant": "Amazonas (Petrol-1131cc)"
  },
  {
    "Option": "Benelli TRK 251",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Benelli TRK 502",
    "Variant": "Red (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502",
    "Variant": "STD (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502",
    "Variant": "White (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502",
    "Variant": "X (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502",
    "Variant": "X Adventure Yellow (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502",
    "Variant": "X Red (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502",
    "Variant": "X White (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502 BS4",
    "Variant": "STD BS4 (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 502 BS4",
    "Variant": "X BS4 (Petrol-500cc)"
  },
  {
    "Option": "Benelli TRK 800",
    "Variant": "STD (Petrol-754cc)"
  },
  {
    "Option": "Big Dog K9 Red Chopper",
    "Variant": "STD (Petrol-2032cc)"
  },
  {
    "Option": "BMW C 400 GT",
    "Variant": "STD (Petrol-350cc)"
  },
  {
    "Option": "BMW F 750 GS",
    "Variant": "STD BS6 (Petrol-853cc)"
  },
  {
    "Option": "BMW F 750 GS BS4",
    "Variant": "Pro (Petrol-853cc)"
  },
  {
    "Option": "BMW F 750 GS BS4",
    "Variant": "Pro Low Suspension (Petrol-853cc)"
  },
  {
    "Option": "BMW F 750 GS BS4",
    "Variant": "STD BS4 (Petrol-853cc)"
  },
  {
    "Option": "BMW F 850 GS",
    "Variant": "Pro (Petrol-853cc)"
  },
  {
    "Option": "BMW F 850 GS Adventure",
    "Variant": "Pro (Petrol-853cc)"
  },
  {
    "Option": "BMW F 850 GS BS4",
    "Variant": "Adventure BS4 (Petrol-853cc)"
  },
  {
    "Option": "BMW F 850 GS BS4",
    "Variant": "Pro BS4 (Petrol-853cc)"
  },
  {
    "Option": "BMW F 850 GS BS4",
    "Variant": "Pro Low Suspension BS4 (Petrol-853cc)"
  },
  {
    "Option": "BMW F 850 GS BS4",
    "Variant": "STD BS4 (Petrol-853cc)"
  },
  {
    "Option": "BMW F 900 R",
    "Variant": "Pro- Racing Red/Hockenheim Silver (Petrol-895cc)"
  },
  {
    "Option": "BMW F 900 R",
    "Variant": "STD (Petrol-895cc)"
  },
  {
    "Option": "BMW F 900 XR",
    "Variant": "Pro (Petrol-895cc)"
  },
  {
    "Option": "BMW F 900 XR",
    "Variant": "Pro- Racing Red/Hockenheim (Petrol-895cc)"
  },
  {
    "Option": "BMW F 900 XR",
    "Variant": "STD (Petrol-895cc)"
  },
  {
    "Option": "BMW F650",
    "Variant": "GS (Petrol-798cc)"
  },
  {
    "Option": "BMW F700",
    "Variant": "GS (Petrol-798cc)"
  },
  {
    "Option": "BMW G 310 GS",
    "Variant": "ABS BS6 (Petrol-313cc)"
  },
  {
    "Option": "BMW G 310 GS BS4",
    "Variant": "ABS BS4 (Petrol-313cc)"
  },
  {
    "Option": "BMW G 310 R",
    "Variant": "STD (Petrol-313cc)"
  },
  {
    "Option": "BMW G 310 R BS4",
    "Variant": "ABS BS4 (Petrol-313cc)"
  },
  {
    "Option": "BMW G 310 RR",
    "Variant": "STD (Petrol-313cc)"
  },
  {
    "Option": "BMW G 310 RR",
    "Variant": "Style Sport (Petrol-313cc)"
  },
  {
    "Option": "BMW HP2 Sport",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW K",
    "Variant": "Pro (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1300 R",
    "Variant": "R (Petrol-1293cc)"
  },
  {
    "Option": "BMW K 1300 R",
    "Variant": "S (Petrol-1293cc)"
  },
  {
    "Option": "BMW K 1300 S",
    "Variant": "K1300S (Petrol-1293cc)"
  },
  {
    "Option": "BMW K 1600 B BS4",
    "Variant": "Grand America BS4 (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1600 B BS4",
    "Variant": "Pro BS4 (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1600 Bagger",
    "Variant": "STD (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1600 Grand America",
    "Variant": "STD (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1600 GTL",
    "Variant": "STD (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1600 GTL BS4",
    "Variant": "GT (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1600 GTL BS4",
    "Variant": "Pro (Petrol-1649cc)"
  },
  {
    "Option": "BMW K 1600 GTL BS4",
    "Variant": "STD BS4 (Petrol-1649cc)"
  },
  {
    "Option": "BMW M 1000 RR",
    "Variant": "Competition (Petrol-999cc)"
  },
  {
    "Option": "BMW M 1000 RR",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "BMW R 1200 GS",
    "Variant": "1200 GS LC (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 GS",
    "Variant": "Dynamic Plus (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 GS",
    "Variant": "Pro (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 GS",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 GS Adventure",
    "Variant": "Dynamic Plus (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 GS Adventure",
    "Variant": "Pro (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 GS Adventure",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 R",
    "Variant": "1200GS (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 R",
    "Variant": "Exclusive (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 R",
    "Variant": "GS (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 R",
    "Variant": "GS Adventure (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 R",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 R",
    "Variant": "Style (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 RS",
    "Variant": "Dynamic Plus (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 RS",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 RT",
    "Variant": "Pro (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1200 RT",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW R 1250 GS",
    "Variant": "Pro 40 Years Edition (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS",
    "Variant": "Pro BS6 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS",
    "Variant": "STD BS6 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS Adventure",
    "Variant": "Pro 40 Years Edition (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS Adventure",
    "Variant": "Pro BS6 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS Adventure BS4",
    "Variant": "Pro BS4 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS Adventure BS4",
    "Variant": "STD BS4 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS BS4",
    "Variant": "Pro BS4 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 GS BS4",
    "Variant": "STD BS4 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 R",
    "Variant": "STD (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 R BS4",
    "Variant": "STD BS4 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 RT",
    "Variant": "STD (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 1250 RT BS4",
    "Variant": "STD BS4 (Petrol-1254cc)"
  },
  {
    "Option": "BMW R 18",
    "Variant": "100 Year Edition (Petrol-1802cc)"
  },
  {
    "Option": "BMW R 18",
    "Variant": "Classic First Edition (Petrol-1802cc)"
  },
  {
    "Option": "BMW R 18",
    "Variant": "First Edition (Petrol-1802cc)"
  },
  {
    "Option": "BMW R 18",
    "Variant": "STD (Petrol-1802cc)"
  },
  {
    "Option": "BMW R 18 Transcontinental",
    "Variant": "STD (Petrol-1802cc)"
  },
  {
    "Option": "BMW R nineT",
    "Variant": "100 Year Edition (Petrol-1170cc)"
  },
  {
    "Option": "BMW R nineT",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW R nineT BS4",
    "Variant": "STD BS4 (Petrol-1170cc)"
  },
  {
    "Option": "BMW R NineT Racer BS4",
    "Variant": "STD BS4 (Petrol-1170cc)"
  },
  {
    "Option": "BMW R NineT Scrambler",
    "Variant": "STD (Petrol-1170cc)"
  },
  {
    "Option": "BMW R NineT Scrambler BS4",
    "Variant": "STD BS4 (Petrol-1170cc)"
  },
  {
    "Option": "BMW S 1000 R",
    "Variant": "M Sport (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 R",
    "Variant": "Pro (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 R",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 R 2013 -2020",
    "Variant": "Pro (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 R 2013 -2020",
    "Variant": "Sport (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 R 2013 -2020",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR",
    "Variant": "M Sport (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR",
    "Variant": "Pro (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR",
    "Variant": "Pro- Hockenheim Silver (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR",
    "Variant": "Standard- Hockenheim Silver (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR (2013-2018)",
    "Variant": "Pro (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR (2013-2018)",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR BS4",
    "Variant": "Pro BS4 (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR BS4",
    "Variant": "Pro M Sport BS4 (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 RR BS4",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 XR",
    "Variant": "Pro (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 XR",
    "Variant": "Pro Racing red (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 XR (2017-2020)",
    "Variant": "Pro (Petrol-999cc)"
  },
  {
    "Option": "BMW S 1000 XR (2017-2020)",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "BNC Motors Corbett 14",
    "Variant": "EX (Petrol-0cc)"
  },
  {
    "Option": "BNC Motors Corbett 14",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Cake Mobility Kalk Work",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "CFMoto 250NK",
    "Variant": "STD (Petrol-249.2cc)"
  },
  {
    "Option": "CFMoto 300NK",
    "Variant": "STD (Petrol-292.4cc)"
  },
  {
    "Option": "CFMoto 300NK BS4",
    "Variant": "STD BS4 (Petrol-292.4cc)"
  },
  {
    "Option": "CFMoto 300SR",
    "Variant": "STD (Petrol-292.4cc)"
  },
  {
    "Option": "CFMoto 400GT",
    "Variant": "STD (Petrol-400cc)"
  },
  {
    "Option": "CFMoto 650GT",
    "Variant": "STD (Petrol-649.3cc)"
  },
  {
    "Option": "CFMoto 650GT BS4",
    "Variant": "STD BS4 (Petrol-649.3cc)"
  },
  {
    "Option": "CFMoto 650MT",
    "Variant": "STD (Petrol-649cc)"
  },
  {
    "Option": "CFMoto 650MT BS4",
    "Variant": "STD BS4 (Petrol-649cc)"
  },
  {
    "Option": "CFMoto 650NK",
    "Variant": "STD (Petrol-649.3cc)"
  },
  {
    "Option": "CFMoto 650NK BS4",
    "Variant": "STD BS4 (Petrol-649.3cc)"
  },
  {
    "Option": "CFMoto MT800",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Cleveland Cyclewerks Ace",
    "Variant": "Deluxe (Petrol-229cc)"
  },
  {
    "Option": "Cleveland Cyclewerks Ace",
    "Variant": "STD (Petrol-229.5cc)"
  },
  {
    "Option": "Cleveland Cyclewerks Misfit",
    "Variant": "STD (Petrol-229cc)"
  },
  {
    "Option": "Ducati 1299 Panigale",
    "Variant": "1299 Panigale (Petrol-1285cc)"
  },
  {
    "Option": "Ducati 1299 Panigale",
    "Variant": "1299 Panigale S (Petrol-1285cc)"
  },
  {
    "Option": "Ducati 1299 Panigale",
    "Variant": "ABS (Petrol-1285cc)"
  },
  {
    "Option": "Ducati 1299 Panigale",
    "Variant": "Panigale R (Petrol-1198cc)"
  },
  {
    "Option": "Ducati 1299 Panigale",
    "Variant": "R Final Edition (Petrol-1285cc)"
  },
  {
    "Option": "Ducati 1299 Panigale S",
    "Variant": "ABS (Petrol-1285cc)"
  },
  {
    "Option": "Ducati 1299 Superleggera",
    "Variant": "STD (Petrol-1285cc)"
  },
  {
    "Option": "Ducati 959 Panigale",
    "Variant": "ABS (Petrol-955cc)"
  },
  {
    "Option": "Ducati 959 Panigale",
    "Variant": "Corse (Petrol-955cc)"
  },
  {
    "Option": "Ducati DesertX",
    "Variant": "STD (Petrol-937cc)"
  },
  {
    "Option": "Ducati Diavel",
    "Variant": "Carbon (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Diavel",
    "Variant": "Carbon Star White (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Diavel",
    "Variant": "Sports (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Diavel",
    "Variant": "Standard (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Diavel",
    "Variant": "Titanium (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Diavel 1260",
    "Variant": "S (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Diavel 1260",
    "Variant": "STD (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Diavel 1260 BS4",
    "Variant": "S BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Diavel 1260 BS4",
    "Variant": "STD BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Diavel Diesel",
    "Variant": "Limited Edition (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Hypermotard 939",
    "Variant": "1100 (Petrol-1078cc)"
  },
  {
    "Option": "Ducati Hypermotard 939",
    "Variant": "1100S (Petrol-1078cc)"
  },
  {
    "Option": "Ducati Hypermotard 939",
    "Variant": "Hyperstrada (Petrol-937cc)"
  },
  {
    "Option": "Ducati Hypermotard 939",
    "Variant": "SP (Petrol-821.1cc)"
  },
  {
    "Option": "Ducati Hypermotard 939",
    "Variant": "Standard (Petrol-821.1cc)"
  },
  {
    "Option": "Ducati Hypermotard 939",
    "Variant": "STD (Petrol-937cc)"
  },
  {
    "Option": "Ducati Hypermotard 950",
    "Variant": "RVE (Petrol-937cc)"
  },
  {
    "Option": "Ducati Hypermotard 950",
    "Variant": "SP (Petrol-937cc)"
  },
  {
    "Option": "Ducati Hypermotard 950 BS4",
    "Variant": "STD BS4 (Petrol-937cc)"
  },
  {
    "Option": "Ducati Hyperstrada",
    "Variant": "STD (Petrol-937cc)"
  },
  {
    "Option": "Ducati Monster",
    "Variant": "Plus (Petrol-937cc)"
  },
  {
    "Option": "Ducati Monster",
    "Variant": "SP (Petrol-937cc)"
  },
  {
    "Option": "Ducati Monster",
    "Variant": "STD (Petrol-937cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "1100 (Petrol-1078cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "1100 ABS (Petrol-1078cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "1100S (Petrol-1078cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "1100S ABS (Petrol-1078cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "1200 S Stripe (Petrol-1198cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "696 (Petrol-696cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "795 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "796 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "796 Corse Stripe (Petrol-803cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "796 S2R (Petrol-803cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "821cc (Petrol-821cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "Diesel (Petrol-1078cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "S (Petrol-1197cc)"
  },
  {
    "Option": "Ducati Monster 1200",
    "Variant": "STD (Petrol-1194.6cc)"
  },
  {
    "Option": "Ducati Monster 795",
    "Variant": "STD (Petrol-803cc)"
  },
  {
    "Option": "Ducati Monster 797 BS4",
    "Variant": "Plus BS4 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Monster 797 BS4",
    "Variant": "STD BS4 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Monster 821 BS4",
    "Variant": "821 Dark (Petrol-821cc)"
  },
  {
    "Option": "Ducati Monster 821 BS4",
    "Variant": "Ducati Monster 797 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Multistrada",
    "Variant": "Ducati Multistrada 950 (Petrol-937cc)"
  },
  {
    "Option": "Ducati Multistrada",
    "Variant": "Enduro (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Multistrada",
    "Variant": "Pikes Peak (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Multistrada",
    "Variant": "S (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Multistrada",
    "Variant": "STD (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Multistrada 1260 BS4",
    "Variant": "Enduro BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Multistrada 1260 BS4",
    "Variant": "Pikes Peak BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Multistrada 1260 BS4",
    "Variant": "S BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Multistrada 1260 BS4",
    "Variant": "STD BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Ducati Multistrada 950",
    "Variant": "S (Petrol-937cc)"
  },
  {
    "Option": "Ducati Multistrada 950 BS4",
    "Variant": "Spoked Wheels BS4 (Petrol-937cc)"
  },
  {
    "Option": "Ducati Multistrada 950 BS4",
    "Variant": "STD BS4 (Petrol-937cc)"
  },
  {
    "Option": "Ducati Multistrada V2",
    "Variant": "S (Petrol-937cc)"
  },
  {
    "Option": "Ducati Multistrada V2",
    "Variant": "STD (Petrol-937cc)"
  },
  {
    "Option": "Ducati Multistrada V4",
    "Variant": "Pikes Peak (Petrol-1158cc)"
  },
  {
    "Option": "Ducati Multistrada V4",
    "Variant": "S (Petrol-1158cc)"
  },
  {
    "Option": "Ducati Multistrada V4",
    "Variant": "S Grey (Petrol-1158cc)"
  },
  {
    "Option": "Ducati Multistrada V4",
    "Variant": "STD (Petrol-1158cc)"
  },
  {
    "Option": "Ducati Panigale",
    "Variant": "1198 SP (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Panigale",
    "Variant": "1198R Corse (Petrol-1099cc)"
  },
  {
    "Option": "Ducati Panigale",
    "Variant": "1198S Corse (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Panigale",
    "Variant": "1199 Panigale (Petrol-1198cc)"
  },
  {
    "Option": "Ducati Panigale",
    "Variant": "848 EVO (Petrol-849.4cc)"
  },
  {
    "Option": "Ducati Panigale R",
    "Variant": "ABS (Petrol-1198cc)"
  },
  {
    "Option": "Ducati Panigale V2",
    "Variant": "Bayliss (Petrol-955cc)"
  },
  {
    "Option": "Ducati Panigale V2",
    "Variant": "STD (Petrol-955cc)"
  },
  {
    "Option": "Ducati Panigale V4",
    "Variant": "R (Petrol-998cc)"
  },
  {
    "Option": "Ducati Panigale V4",
    "Variant": "S (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Panigale V4",
    "Variant": "SP2 (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Panigale V4",
    "Variant": "STD (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Panigale V4 BS4",
    "Variant": "25° Anniversario 916 BS4 (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Panigale V4 BS4",
    "Variant": "R BS4 (Petrol-998cc)"
  },
  {
    "Option": "Ducati Panigale V4 BS4",
    "Variant": "S BS4 (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Panigale V4 BS4",
    "Variant": "Speciale BS4 (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Panigale V4 BS4",
    "Variant": "STD (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Scrambler 1100",
    "Variant": "Pro (Petrol-1079cc)"
  },
  {
    "Option": "Ducati Scrambler 1100",
    "Variant": "Dark Pro (Petrol-1079cc)"
  },
  {
    "Option": "Ducati Scrambler 1100",
    "Variant": "Sport Pro (Petrol-1079cc)"
  },
  {
    "Option": "Ducati Scrambler 1100",
    "Variant": "Tribute Pro (Petrol-1079cc)"
  },
  {
    "Option": "Ducati Scrambler 1100 BS4",
    "Variant": "Special BS4 (Petrol-1079cc)"
  },
  {
    "Option": "Ducati Scrambler 1100 BS4",
    "Variant": "Sport BS4 (Petrol-1079cc)"
  },
  {
    "Option": "Ducati Scrambler 1100 BS4",
    "Variant": "STD BS4 (Petrol-1079cc)"
  },
  {
    "Option": "Ducati Scrambler 800",
    "Variant": "Icon (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler 800",
    "Variant": "Icon Dark (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler 800",
    "Variant": "Nightshift (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler 800",
    "Variant": "Urban Motard (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Cafe Racer (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Cafe Racer BS4 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Classic (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Desert Sled (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Full Throttle BS4 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Icon BS4 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Icon Dark BS4 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Mach 2.0 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler BS4",
    "Variant": "Urban Enduro (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler Desert Sled",
    "Variant": "Fasthouse (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler Desert Sled",
    "Variant": "STD (Petrol-803cc)"
  },
  {
    "Option": "Ducati Scrambler Desert Sled BS4",
    "Variant": "ABS BS4 (Petrol-803cc)"
  },
  {
    "Option": "Ducati Streetfighter",
    "Variant": "1200 S Granturismo (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Streetfighter",
    "Variant": "1200 S Touring (Petrol-1198.4cc)"
  },
  {
    "Option": "Ducati Streetfighter",
    "Variant": "848 (Petrol-849cc)"
  },
  {
    "Option": "Ducati Streetfighter V2",
    "Variant": "STD (Petrol-955cc)"
  },
  {
    "Option": "Ducati Streetfighter V4",
    "Variant": "S (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Streetfighter V4",
    "Variant": "S Stealth Black (Petrol-1103cc)"
  },
  {
    "Option": "Ducati Streetfighter V4",
    "Variant": "STD (Petrol-1103cc)"
  },
  {
    "Option": "Ducati SuperSport 950",
    "Variant": "S (Petrol-937cc)"
  },
  {
    "Option": "Ducati SuperSport 950",
    "Variant": "S Arctic White Silk (Petrol-937cc)"
  },
  {
    "Option": "Ducati SuperSport 950",
    "Variant": "STD (Petrol-937cc)"
  },
  {
    "Option": "Ducati SuperSport BS4",
    "Variant": "S BS4 (Petrol-937cc)"
  },
  {
    "Option": "Ducati SuperSport BS4",
    "Variant": "STD BS4 (Petrol-937cc)"
  },
  {
    "Option": "Ducati XDiavel",
    "Variant": "Black Star (Petrol-1262cc)"
  },
  {
    "Option": "Ducati XDiavel",
    "Variant": "Dark (Petrol-1262cc)"
  },
  {
    "Option": "Ducati XDiavel BS4",
    "Variant": "S BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Ducati XDiavel BS4",
    "Variant": "STD BS4 (Petrol-1262cc)"
  },
  {
    "Option": "Evolet Raptor",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Fazer",
    "Variant": "STD (Petrol-153cc)"
  },
  {
    "Option": "FB Mondial HPS 300",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Fujiyama Vespar",
    "Variant": "48 V, 28 Ah (Petrol-0cc)"
  },
  {
    "Option": "Fujiyama Vespar",
    "Variant": "60 V, 28 Ah (Petrol-0cc)"
  },
  {
    "Option": "Fujiyama Vespar",
    "Variant": "60 V, 30 Ah (Petrol-0cc)"
  },
  {
    "Option": "FZ 150",
    "Variant": "150 (Petrol-150cc)"
  },
  {
    "Option": "GT One Pro",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Harley Davidson 1200 Custom",
    "Variant": "ABS (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson 1200 Custom",
    "Variant": "BS6 (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson CVO - duplicate",
    "Variant": "CLASSIC ELECTRA GLIDE (Petrol-1802cc)"
  },
  {
    "Option": "Harley Davidson CVO Limited",
    "Variant": "BS6 (Petrol-1923cc)"
  },
  {
    "Option": "Harley Davidson CVO Limited",
    "Variant": "STD (Petrol-1923cc)"
  },
  {
    "Option": "Harley Davidson Deluxe",
    "Variant": "STD (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Electra Glide Standard",
    "Variant": "STD (Petrol-1cc)"
  },
  {
    "Option": "Harley Davidson Fat Bob",
    "Variant": "BS4 (Petrol-1585cc)"
  },
  {
    "Option": "Harley Davidson Fat Bob",
    "Variant": "Standard (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Fat Bob",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Fat Boy 114",
    "Variant": "1584 cc (Petrol-1584cc)"
  },
  {
    "Option": "Harley Davidson Fat Boy 114",
    "Variant": "2010 (Petrol-1690cc)"
  },
  {
    "Option": "Harley Davidson Fat Boy 114",
    "Variant": "2017 -2020 (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Fat Boy 114",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Fat Boy Anniversary",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Forty Eight",
    "Variant": "BS4 (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Forty Eight",
    "Variant": "STD (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Forty Eight",
    "Variant": "XL 1200 X (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Forty Eight Special",
    "Variant": "BS6 (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Forty Eight Special",
    "Variant": "STD (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Heritage Classic",
    "Variant": "Softail Classic (Petrol-1690cc)"
  },
  {
    "Option": "Harley Davidson Heritage Classic",
    "Variant": "Standard (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Heritage Classic",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Iron 1200",
    "Variant": "STD (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Iron 883",
    "Variant": "883 (Petrol-883cc)"
  },
  {
    "Option": "Harley Davidson Iron 883",
    "Variant": "BS4 (Petrol-883cc)"
  },
  {
    "Option": "Harley Davidson Iron 883",
    "Variant": "STD (Petrol-883cc)"
  },
  {
    "Option": "Harley Davidson Iron 883",
    "Variant": "SuperLow 1200T (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Iron 883",
    "Variant": "XL 883L SPORTSTER (Petrol-883cc)"
  },
  {
    "Option": "Harley Davidson Iron 883",
    "Variant": "XR 1200X (Petrol-1202cc)"
  },
  {
    "Option": "Harley Davidson Low Rider",
    "Variant": "BS6 (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Low Rider",
    "Variant": "STD (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Low Rider S",
    "Variant": "BS6 (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Low Rider S",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Nightster",
    "Variant": "Special (Petrol-975cc)"
  },
  {
    "Option": "Harley Davidson Nightster",
    "Variant": "STD (Petrol-975cc)"
  },
  {
    "Option": "Harley Davidson Pan America 1250",
    "Variant": "Special (Petrol-1252cc)"
  },
  {
    "Option": "Harley Davidson Pan America 1250",
    "Variant": "STD (Petrol-1252cc)"
  },
  {
    "Option": "Harley Davidson Road Glide Special",
    "Variant": "BS4 (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Road Glide Special",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Road King",
    "Variant": "BS4 (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Road King",
    "Variant": "STD (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Roadster",
    "Variant": "STD (Petrol-1cc)"
  },
  {
    "Option": "Harley Davidson Softail",
    "Variant": "STD (Petrol-1746cc)"
  },
  {
    "Option": "Harley Davidson Softail 2012-2017",
    "Variant": "Breakout (Petrol-1690cc)"
  },
  {
    "Option": "Harley Davidson Softail 2012-2017",
    "Variant": "FAT BOY SPECIAL (Petrol-1690cc)"
  },
  {
    "Option": "Harley Davidson Sportster S",
    "Variant": "STD (Petrol-1252cc)"
  },
  {
    "Option": "Harley Davidson Street 750",
    "Variant": "10th Anniversary edition (Petrol-749cc)"
  },
  {
    "Option": "Harley Davidson Street 750",
    "Variant": "BS6 (Petrol-749cc)"
  },
  {
    "Option": "Harley Davidson Street 750",
    "Variant": "STD (Petrol-749cc)"
  },
  {
    "Option": "Harley Davidson Street Bob",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Street Bob 2010",
    "Variant": "STD (Petrol-1585cc)"
  },
  {
    "Option": "Harley Davidson Street Bob 2010",
    "Variant": "STD (Petrol-1745cc)"
  },
  {
    "Option": "Harley Davidson Street Glide",
    "Variant": "Special (Petrol-1690cc)"
  },
  {
    "Option": "Harley Davidson Street Glide",
    "Variant": "Touring (Petrol-1690cc)"
  },
  {
    "Option": "Harley Davidson Street Glide Special",
    "Variant": "BS4 (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Street Glide Special",
    "Variant": "STD (Petrol-1868cc)"
  },
  {
    "Option": "Harley Davidson Street Rod",
    "Variant": "BS6 (Petrol-749cc)"
  },
  {
    "Option": "Harley Davidson Street Rod",
    "Variant": "STD (Petrol-749cc)"
  },
  {
    "Option": "Harley Davidson SUPER GLIDE",
    "Variant": "FXDC SUPER GLIDE (Petrol-1585cc)"
  },
  {
    "Option": "Harley Davidson SUPER GLIDE",
    "Variant": "Super Glide Custom (Petrol-1585cc)"
  },
  {
    "Option": "Harley Davidson SuperLow",
    "Variant": "Super Low (Petrol-883cc)"
  },
  {
    "Option": "Harley Davidson SuperLow",
    "Variant": "XL883L (Petrol-883cc)"
  },
  {
    "Option": "Harley Davidson Ultra Classic Electra Glide",
    "Variant": "Standard (Petrol-107cc)"
  },
  {
    "Option": "Harley Davidson V ROD",
    "Variant": "NIGHT ROD (Petrol-1247cc)"
  },
  {
    "Option": "Harley Davidson X440",
    "Variant": "Denim (Petrol-440cc)"
  },
  {
    "Option": "Harley Davidson X440",
    "Variant": "S (Petrol-440cc)"
  },
  {
    "Option": "Harley Davidson X440",
    "Variant": "Vivid (Petrol-440cc)"
  },
  {
    "Option": "Harley Davidson XR1200X",
    "Variant": "STD (Petrol-1202cc)"
  },
  {
    "Option": "Herald Legend",
    "Variant": "DLX (Petrol-0cc)"
  },
  {
    "Option": "Herald Legend",
    "Variant": "Prime (Petrol-0cc)"
  },
  {
    "Option": "Herald Legend",
    "Variant": "Pro (Petrol-0cc)"
  },
  {
    "Option": "Herald Legend",
    "Variant": "Super (Petrol-0cc)"
  },
  {
    "Option": "Herald Rider",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Herald Royal",
    "Variant": "DLX (Petrol-0cc)"
  },
  {
    "Option": "Herald Royal",
    "Variant": "Prime (Petrol-0cc)"
  },
  {
    "Option": "Herald Royal",
    "Variant": "Pro (Petrol-0cc)"
  },
  {
    "Option": "Herald Royal",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Hero Achiever",
    "Variant": "Alloy (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Achiever",
    "Variant": "Disc (Petrol-149.1cc)"
  },
  {
    "Option": "Hero Achiever",
    "Variant": "Drum (Petrol-149.1cc)"
  },
  {
    "Option": "Hero CBZ",
    "Variant": "STD (Petrol-149cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Blaze Edition Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Blaze Edition Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Disc 100 Million Edition (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Disc Black And Accent (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Disc BS4 (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Drum 100 Million Edition (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Drum Black And Accent (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Drum BS4 (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Fi IBS BS4 (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "Fuel injection BS4 (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "New Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour",
    "Variant": "New Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour (2012-2016)",
    "Variant": "Alloy Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour (2012-2016)",
    "Variant": "Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour (2012-2016)",
    "Variant": "PGM-Fi (Petrol-124.8cc)"
  },
  {
    "Option": "Hero Glamour (2012-2016)",
    "Variant": "PGM-Fi Disc Self Cast (Petrol-124.8cc)"
  },
  {
    "Option": "Hero Glamour Xtec",
    "Variant": "Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Glamour Xtec",
    "Variant": "Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero HF 100",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Dawn (2012-2017)",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Dawn (2018-2019)",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe",
    "Variant": "Kick Start Drum Alloy Wheel (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe",
    "Variant": "Kick Start Drum Spoke Wheel (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe",
    "Variant": "Self Start Alloy Wheel (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe",
    "Variant": "Self Start Alloy Wheel All Black (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe",
    "Variant": "Self Start Alloy Wheel i3S (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe BS4",
    "Variant": "Alloy Kick Start (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe BS4",
    "Variant": "Alloy Self Start (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe BS4",
    "Variant": "ECO (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe BS4",
    "Variant": "i3s (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe BS4",
    "Variant": "iBS i3S (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe BS4",
    "Variant": "Spoke Kick Start (Petrol-97.2cc)"
  },
  {
    "Option": "Hero HF Deluxe BS4",
    "Variant": "Spoke Self Start (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Achiever",
    "Variant": "Achiever (Petrol-141.1cc)"
  },
  {
    "Option": "Hero Honda Ambition",
    "Variant": "Disc Kick (Petrol-133cc)"
  },
  {
    "Option": "Hero Honda Ambition",
    "Variant": "Disc Self (Petrol-133cc)"
  },
  {
    "Option": "Hero Honda Ambition",
    "Variant": "Drum Kick (Petrol-133cc)"
  },
  {
    "Option": "Hero Honda Ambition",
    "Variant": "Drum Self (Petrol-133cc)"
  },
  {
    "Option": "Hero Honda CBZ",
    "Variant": "Disc (Petrol-156.8cc)"
  },
  {
    "Option": "Hero Honda CBZ",
    "Variant": "Self (Petrol-156.8cc)"
  },
  {
    "Option": "Hero Honda CBZ",
    "Variant": "Star (Petrol-156.8cc)"
  },
  {
    "Option": "Hero Honda CBZ",
    "Variant": "Super Sprint (Petrol-156.8cc)"
  },
  {
    "Option": "Hero Honda CBZ Xtreme",
    "Variant": "KickStart (Petrol-142.7cc)"
  },
  {
    "Option": "Hero Honda CBZ Xtreme",
    "Variant": "SelfStart (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Honda CD Dawn",
    "Variant": "Dawn (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda CD Deluxe",
    "Variant": "Deluxe (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda CD100",
    "Variant": "STD (Petrol-97cc)"
  },
  {
    "Option": "Hero Honda CD100 SS",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Glamour",
    "Variant": "FI (Petrol-124.8cc)"
  },
  {
    "Option": "Hero Honda Glamour",
    "Variant": "Glamour (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Honda Hunk",
    "Variant": "Hunk (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Honda Joy",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Karizma",
    "Variant": "R (Petrol-223cc)"
  },
  {
    "Option": "Hero Honda Karizma",
    "Variant": "ZMR PGM Fi (Petrol-223cc)"
  },
  {
    "Option": "Hero Honda Passion",
    "Variant": "Plus (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Passion",
    "Variant": "PRO (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Passion",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Passion Plus",
    "Variant": "STD (Petrol-100cc)"
  },
  {
    "Option": "Hero Honda Sleek",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Splendor",
    "Variant": "NXG (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Splendor",
    "Variant": "Plus (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Splendor",
    "Variant": "Pro (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Splendor",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Honda Splendor",
    "Variant": "Super (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Honda Street",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Hunk",
    "Variant": "Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Hunk",
    "Variant": "Double Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Hunk",
    "Variant": "Double Disc Self Cast (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Hunk",
    "Variant": "STD (Petrol-149.2cc)"
  },
  {
    "Option": "Hero HX 250R",
    "Variant": "250cc (Petrol-249cc)"
  },
  {
    "Option": "Hero Ignitor",
    "Variant": "125 Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Ignitor",
    "Variant": "125 Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Impulse",
    "Variant": "150cc (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Karizma (2012-2017)",
    "Variant": "223cc (Petrol-223cc)"
  },
  {
    "Option": "Hero Karizma (2012-2017)",
    "Variant": "250 (Petrol-250cc)"
  },
  {
    "Option": "Hero Karizma ZMR",
    "Variant": "223cc (Petrol-223cc)"
  },
  {
    "Option": "Hero Karizma ZMR",
    "Variant": "STD (Petrol-223cc)"
  },
  {
    "Option": "Hero MotoCorp Karizma 2003-2013",
    "Variant": "R (Petrol-223cc)"
  },
  {
    "Option": "Hero MotoCorp Karizma 2003-2013",
    "Variant": "ZMR (Petrol-223cc)"
  },
  {
    "Option": "Hero MotoCorp Passion",
    "Variant": "Pro Alloy Kick (Petrol-97.2cc)"
  },
  {
    "Option": "Hero MotoCorp Passion",
    "Variant": "Pro Alloy-Self (Petrol-97.2cc)"
  },
  {
    "Option": "Hero MotoCorp Passion",
    "Variant": "Pro Disc Self (Petrol-97.2cc)"
  },
  {
    "Option": "Hero MotoCorp Passion",
    "Variant": "Pro Spoke Kick (Petrol-97.2cc)"
  },
  {
    "Option": "Hero MotoCorp Passion",
    "Variant": "Pro Spoke-Self (Petrol-97.2cc)"
  },
  {
    "Option": "Hero MotoCorp Passion",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero MotoCorp Puch",
    "Variant": "2G Manual (Petrol-64cc)"
  },
  {
    "Option": "Hero MotoCorp Puch",
    "Variant": "3G Automatic (Petrol-64cc)"
  },
  {
    "Option": "Hero Passion Plus",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "Disc (Petrol-113.2cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "Disc 100 Million Edition (Petrol-113cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "Drum (Petrol-113.2cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "Drum 100 Million Edition (Petrol-113cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "i3s Disc Alloy (Petrol-109.15cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "i3s Drum Alloy (Petrol-109.15cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "XTec Disc (Petrol-113.2cc)"
  },
  {
    "Option": "Hero Passion Pro",
    "Variant": "XTec Drum (Petrol-113.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "CAST (Petrol-100cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "i3S AW DISC (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "i3S AW DRUM (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "i3s Disc Alloy (Petrol-109.15cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "i3s Drum Alloy (Petrol-109.15cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "i3S SW DRUM (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "Kick Drum Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "Kick Drum Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "Kick Start (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "Kick Start Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "Self Disc Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "Self Drum Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "Self Drum Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion Pro BS4",
    "Variant": "TR (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Passion XPro",
    "Variant": "DISC SELF CAST (Petrol-109.1cc)"
  },
  {
    "Option": "Hero Passion XPro",
    "Variant": "DRUM KICK CAST (Petrol-109.1cc)"
  },
  {
    "Option": "Hero Passion XPro",
    "Variant": "DRUM KICK SPOKE (Petrol-109.1cc)"
  },
  {
    "Option": "Hero Passion XPro",
    "Variant": "DRUM SELF CAST (Petrol-109.1cc)"
  },
  {
    "Option": "Hero Passion XPro",
    "Variant": "DRUM SELF SPOKE (Petrol-109.1cc)"
  },
  {
    "Option": "Hero Passion XPro",
    "Variant": "i3s Disc Alloy (Petrol-109.15cc)"
  },
  {
    "Option": "Hero Passion XPro",
    "Variant": "i3s Drum Alloy (Petrol-109.15cc)"
  },
  {
    "Option": "Hero Pleasure",
    "Variant": "Alloy Wheel (Petrol-102cc)"
  },
  {
    "Option": "Hero Pleasure",
    "Variant": "Sheet Metal Wheel (Petrol-102cc)"
  },
  {
    "Option": "Hero Pleasure Plus",
    "Variant": "Alloy Wheel BS4 (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Pleasure Plus",
    "Variant": "LX Sheet Metal Wheel (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Pleasure Plus",
    "Variant": "Platinum (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Pleasure Plus",
    "Variant": "Sheet Metal Wheel BS4 (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Pleasure Plus",
    "Variant": "VX Alloy Wheel (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Pleasure Plus",
    "Variant": "XTEC Drum Cast (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Pleasure Plus",
    "Variant": "XTEC Drum Cast Jubilant Yellow (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Splendor iSmart",
    "Variant": "Disc (Petrol-113.2cc)"
  },
  {
    "Option": "Hero Splendor iSmart",
    "Variant": "Drum (Petrol-113.2cc)"
  },
  {
    "Option": "Hero Splendor iSmart BS3",
    "Variant": "Drum Self Cast (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor iSmart BS3",
    "Variant": "Drum Self Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor iSmart BS4",
    "Variant": "STD (Petrol-109.15cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "100 Million Edition (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Black and Accent (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "i3s BS4 (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "IBS i3S BS4 (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "iSmart (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Kick Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Kick Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Kick with Alloy Wheel (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Matt Shield Gold (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "NXG Kick Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "NXG Kick Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "NXG Self Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "NXG Self Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Pro Classic BS4 (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Pro Drum Self Cast- SE (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Self Alloy BS4 (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Self with Alloy Wheel (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus",
    "Variant": "Self with Alloy Wheel and i3S (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Plus XTEC",
    "Variant": "STD (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro",
    "Variant": "Drum Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro",
    "Variant": "Kick Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro",
    "Variant": "Pro Kick Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro",
    "Variant": "Pro Self Black Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro",
    "Variant": "Pro Self Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro",
    "Variant": "Self Alloy (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro Classic",
    "Variant": "Self Drum Spoke (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Splendor Pro Classic",
    "Variant": "spectra base (Petrol-97.2cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "Canvas Black Edition Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "Canvas Black Edition Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "i3s Drum Alloy (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "New Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "New Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "SDA (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor",
    "Variant": "SDA SX (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor Xtec",
    "Variant": "Disc (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Super Splendor Xtec",
    "Variant": "Drum (Petrol-124.7cc)"
  },
  {
    "Option": "Hero Xoom 110",
    "Variant": "LX (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Xoom 110",
    "Variant": "VX (Petrol-110.9cc)"
  },
  {
    "Option": "Hero Xoom 110",
    "Variant": "ZX (Petrol-110.9cc)"
  },
  {
    "Option": "Hero XPulse 200 4V",
    "Variant": "4V Rally Edition (Petrol-199.6cc)"
  },
  {
    "Option": "Hero XPulse 200 4V",
    "Variant": "Carb (Petrol-199.6cc)"
  },
  {
    "Option": "Hero XPulse 200 4V",
    "Variant": "Fi (Petrol-199.6cc)"
  },
  {
    "Option": "Hero XPulse 200 4V",
    "Variant": "Pro (Petrol-199.6cc)"
  },
  {
    "Option": "Hero XPulse 200 4V",
    "Variant": "STD (Petrol-199.6cc)"
  },
  {
    "Option": "Hero XPulse 200T 4V",
    "Variant": "2V (Petrol-199.6cc)"
  },
  {
    "Option": "Hero XPulse 200T 4V",
    "Variant": "STD (Petrol-199.6cc)"
  },
  {
    "Option": "Hero XPulse 200T BS4",
    "Variant": "STD BS4 (Petrol-199.6cc)"
  },
  {
    "Option": "Hero Xtreme",
    "Variant": "Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Xtreme",
    "Variant": "Double Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Xtreme",
    "Variant": "Drum (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Xtreme",
    "Variant": "Single Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Xtreme",
    "Variant": "Sport (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Xtreme",
    "Variant": "STD (Petrol-200cc)"
  },
  {
    "Option": "Hero Xtreme 160R",
    "Variant": "100 Million Limited Edition (Petrol-163cc)"
  },
  {
    "Option": "Hero Xtreme 160R",
    "Variant": "Double Disc (Petrol-163cc)"
  },
  {
    "Option": "Hero Xtreme 160R",
    "Variant": "Single Disc (Petrol-163cc)"
  },
  {
    "Option": "Hero Xtreme 160R",
    "Variant": "Stealth Edition (Petrol-163cc)"
  },
  {
    "Option": "Hero Xtreme 160R",
    "Variant": "Stealth Edition 2.0 (Petrol-163cc)"
  },
  {
    "Option": "Hero Xtreme 160R 4V",
    "Variant": "Connected 2.0 (Petrol-163.2cc)"
  },
  {
    "Option": "Hero Xtreme 160R 4V",
    "Variant": "Pro (Petrol-163.2cc)"
  },
  {
    "Option": "Hero Xtreme 160R 4V",
    "Variant": "STD (Petrol-163.2cc)"
  },
  {
    "Option": "Hero Xtreme 160S",
    "Variant": "STD (Petrol-163cc)"
  },
  {
    "Option": "Hero Xtreme 200R 2018-2022",
    "Variant": "ABS BS6 (Petrol-199.6cc)"
  },
  {
    "Option": "Hero Xtreme 200R 2018-2022",
    "Variant": "STD (Petrol-199.6cc)"
  },
  {
    "Option": "Hero Xtreme 200R BS4",
    "Variant": "ABS BS4 (Petrol-199.6cc)"
  },
  {
    "Option": "Hero Xtreme 200S 4V",
    "Variant": "2V (Petrol-199.6cc)"
  },
  {
    "Option": "Hero Xtreme 200S 4V",
    "Variant": "STD (Petrol-199.6cc)"
  },
  {
    "Option": "Hero Xtreme 200S BS4",
    "Variant": "STD BS4 (Petrol-199.6cc)"
  },
  {
    "Option": "Hero Xtreme Sports",
    "Variant": "Double Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Hero Xtreme Sports",
    "Variant": "Single Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Honda CB",
    "Variant": "Disc (Petrol-156.8cc)"
  },
  {
    "Option": "Honda CB",
    "Variant": "Self (Petrol-156.8cc)"
  },
  {
    "Option": "Honda CB",
    "Variant": "Star (Petrol-156.8cc)"
  },
  {
    "Option": "Honda CB",
    "Variant": "Super Sprint (Petrol-156.8cc)"
  },
  {
    "Option": "Honda CB 125 F",
    "Variant": "STD (Petrol-124.7cc)"
  },
  {
    "Option": "Honda CB Dazzler",
    "Variant": "Sports (Petrol-149.1cc)"
  },
  {
    "Option": "Honda CB Hornet 160R BS4",
    "Variant": "ABS DLX BS4 (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Hornet 160R BS4",
    "Variant": "CBS (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Hornet 160R BS4",
    "Variant": "Special Edition CBS (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Hornet 160R BS4",
    "Variant": "Special Edition STD (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Hornet 160R BS4",
    "Variant": "STD ABS (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Hornet 160R BS4",
    "Variant": "STD BS4 (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Shine BS4",
    "Variant": "Disc Brake (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine BS4",
    "Variant": "Disc CBS (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine BS4",
    "Variant": "Drum Brake (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine BS4",
    "Variant": "Drum CBS (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine BS4",
    "Variant": "Limited Edition Disc CBS (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine BS4",
    "Variant": "Limited Edition Drum CBS (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine BS4",
    "Variant": "Spoke (Petrol-124.7cc)"
  },
  {
    "Option": "Honda CB Shine SP",
    "Variant": "Disc Brake (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine SP",
    "Variant": "Disc CBS (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine SP",
    "Variant": "Drum Brake (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Shine SP",
    "Variant": "Drum CBS (Petrol-124.73cc)"
  },
  {
    "Option": "Honda CB Trigger",
    "Variant": "150 (Petrol-149.1cc)"
  },
  {
    "Option": "Honda CB Trigger",
    "Variant": "CBS (Petrol-149.1cc)"
  },
  {
    "Option": "Honda CB Trigger",
    "Variant": "DLX (Petrol-149.1cc)"
  },
  {
    "Option": "Honda CB Twister",
    "Variant": "Kick Start (Petrol-109cc)"
  },
  {
    "Option": "Honda CB Twister",
    "Variant": "Self Start (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CB Twister",
    "Variant": "Self Start with Disc Brake (Petrol-109cc)"
  },
  {
    "Option": "Honda CB Unicorn 150",
    "Variant": "ABS (Petrol-149.2cc)"
  },
  {
    "Option": "Honda CB Unicorn 150",
    "Variant": "Disc (Petrol-149.2cc)"
  },
  {
    "Option": "Honda CB Unicorn 160",
    "Variant": "ABS (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Unicorn 160",
    "Variant": "BS-IV (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Unicorn 160",
    "Variant": "CBS (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB Unicorn 160",
    "Variant": "Disc Brake (Petrol-162.71cc)"
  },
  {
    "Option": "Honda CB1000R",
    "Variant": "1000R (Petrol-998cc)"
  },
  {
    "Option": "Honda CB1000R",
    "Variant": "ABS (Petrol-998cc)"
  },
  {
    "Option": "Honda CB1000R",
    "Variant": "ABS Pearl Siena Red (Petrol-998cc)"
  },
  {
    "Option": "Honda CB1000R",
    "Variant": "STD (Petrol-998cc)"
  },
  {
    "Option": "Honda CB1000R Plus BS4",
    "Variant": "STD (Petrol-998cc)"
  },
  {
    "Option": "Honda CB200X",
    "Variant": "DX (Petrol-184.4cc)"
  },
  {
    "Option": "Honda CB200X",
    "Variant": "STD (Petrol-184.4cc)"
  },
  {
    "Option": "Honda CB300F",
    "Variant": "Deluxe (Petrol-293.52cc)"
  },
  {
    "Option": "Honda CB300F",
    "Variant": "Deluxe Pro (Petrol-293.52cc)"
  },
  {
    "Option": "Honda CB300R",
    "Variant": "STD (Petrol-286.01cc)"
  },
  {
    "Option": "Honda CB300R BS4",
    "Variant": "ABS BS4 (Petrol-286.01cc)"
  },
  {
    "Option": "Honda CB350RS",
    "Variant": "DLX (Petrol-348.36cc)"
  },
  {
    "Option": "Honda CB350RS",
    "Variant": "DLX Dual Tone (Petrol-348.36cc)"
  },
  {
    "Option": "Honda CB350RS",
    "Variant": "DLX Mono Tone (Petrol-348.36cc)"
  },
  {
    "Option": "Honda CB500X",
    "Variant": "STD (Petrol-471.03cc)"
  },
  {
    "Option": "Honda CB650R",
    "Variant": "STD (Petrol-648.72cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "1000RR (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "1000RR Fireblade (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "125R (Petrol-124.7cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "150R (Petrol-149.4cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "150R Deluxe (Petrol-149.4cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "250R (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "250R ABS (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "400R (Petrol-399cc)"
  },
  {
    "Option": "Honda CBR",
    "Variant": "900RR Fireblade (Petrol-900cc)"
  },
  {
    "Option": "Honda CBR 150 R (2012-2017)",
    "Variant": "Deluxe (Petrol-149.4cc)"
  },
  {
    "Option": "Honda CBR 150 R (2012-2017)",
    "Variant": "Standard (Petrol-149.4cc)"
  },
  {
    "Option": "Honda CBR 300",
    "Variant": "STD (Petrol-286cc)"
  },
  {
    "Option": "Honda CBR 600RR",
    "Variant": "600RR (Petrol-599cc)"
  },
  {
    "Option": "Honda CBR1000RR",
    "Variant": "Black (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR1000RR",
    "Variant": "Fireblade (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR1000RR",
    "Variant": "Fireblade SP (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR1000RR",
    "Variant": "Fireblade Special Edition (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR1000RR",
    "Variant": "Repsol (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR1000RR",
    "Variant": "White (Petrol-999cc)"
  },
  {
    "Option": "Honda CBR1000RR-R",
    "Variant": "Fireblade Black (Petrol-1000cc)"
  },
  {
    "Option": "Honda CBR1000RR-R",
    "Variant": "Fireblade Red (Petrol-1000cc)"
  },
  {
    "Option": "Honda CBR250R",
    "Variant": "ABS (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR250R",
    "Variant": "STD (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR250R (2011-2017)",
    "Variant": "ABS (2011-2017) (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR250R (2011-2017)",
    "Variant": "ABS Tricolor (2011-2017) (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR250R (2011-2017)",
    "Variant": "REPSOL (2011-2017) (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR250R (2011-2017)",
    "Variant": "Repsol Limited Edition (2011-2017) (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR250R (2011-2017)",
    "Variant": "Standard (2011-2017) (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR250R (2011-2017)",
    "Variant": "STD Tricolor (2011-2017) (Petrol-249.6cc)"
  },
  {
    "Option": "Honda CBR300R BS4",
    "Variant": "ABS BS4 (Petrol-286cc)"
  },
  {
    "Option": "Honda CBR650F",
    "Variant": "ABS (Petrol-648.72cc)"
  },
  {
    "Option": "Honda CBR650R",
    "Variant": "STD (Petrol-648.72cc)"
  },
  {
    "Option": "Honda CBR650R BS4",
    "Variant": "STD BS4 (Petrol-648.72cc)"
  },
  {
    "Option": "Honda CD 110 Dream",
    "Variant": "DLX (Petrol-109.51cc)"
  },
  {
    "Option": "Honda CD 110 Dream",
    "Variant": "DLX New (Petrol-109.51cc)"
  },
  {
    "Option": "Honda CD 110 Dream",
    "Variant": "STD (Petrol-109.51cc)"
  },
  {
    "Option": "Honda CD 110 Dream BS4",
    "Variant": "CBS DLX Carrier BS4 (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CD 110 Dream BS4",
    "Variant": "CBS STD Carrier BS4 (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CD 110 Dream BS4",
    "Variant": "Kick Start (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CD 110 Dream BS4",
    "Variant": "Self Drum Carrier (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CD 110 Dream BS4",
    "Variant": "Self Drum Grab Rail (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CD 110 Dream BS4",
    "Variant": "Self Start (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CD 110 Dream BS4",
    "Variant": "STD (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CLIQ",
    "Variant": "Deluxe (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CLIQ",
    "Variant": "STD (Petrol-109.19cc)"
  },
  {
    "Option": "Honda CRF",
    "Variant": "250L (Petrol-249cc)"
  },
  {
    "Option": "Honda CRF1000L Africa Twin",
    "Variant": "ABS (Petrol-999.11cc)"
  },
  {
    "Option": "Honda CRF1100L Africa Twin",
    "Variant": "DCT (Petrol-1082.96cc)"
  },
  {
    "Option": "Honda CRF1100L Africa Twin",
    "Variant": "Manual (Petrol-1082.96cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "DLX (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "DLX OBD2 (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "Repsol Edition (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "Smart (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "Sports DLX (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "Sports STD (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "STD (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio",
    "Variant": "STD OBD2 (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Dio 125",
    "Variant": "Smart (Petrol-123.92cc)"
  },
  {
    "Option": "Honda Dio 125",
    "Variant": "STD (Petrol-123.92cc)"
  },
  {
    "Option": "Honda Dio BS4",
    "Variant": "Dio (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dio BS4",
    "Variant": "DLX (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dio BS4",
    "Variant": "STD (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Neo",
    "Variant": "Carrier (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Neo",
    "Variant": "Grab Rail (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Neo",
    "Variant": "Kick Drum Alloy (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Neo",
    "Variant": "Kick Drum Spoke (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Neo",
    "Variant": "Self Drum Brake Alloy (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Yuga",
    "Variant": "110 (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Yuga",
    "Variant": "CBS (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Yuga",
    "Variant": "Drum (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Dream Yuga",
    "Variant": "Kick-Drum-Alloy (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Eterno",
    "Variant": "Eterno (Petrol-147.7cc)"
  },
  {
    "Option": "Honda Gold Wing",
    "Variant": "DCT + Airbag (Petrol-1833cc)"
  },
  {
    "Option": "Honda Gold Wing",
    "Variant": "Manual (Petrol-1833cc)"
  },
  {
    "Option": "Honda Gold Wing BS4",
    "Variant": "DCT BS4 (Petrol-1833cc)"
  },
  {
    "Option": "Honda Gold Wing BS4",
    "Variant": "GL1800 (Petrol-1832cc)"
  },
  {
    "Option": "Honda Gold Wing BS4",
    "Variant": "GL1800 Airbag (Petrol-1832cc)"
  },
  {
    "Option": "Honda Gold Wing BS4",
    "Variant": "STD (Petrol-1833cc)"
  },
  {
    "Option": "Honda Gold Wing BS4",
    "Variant": "Touring (Petrol-1832cc)"
  },
  {
    "Option": "Honda Grazia",
    "Variant": "Disc (Petrol-123.97cc)"
  },
  {
    "Option": "Honda Grazia",
    "Variant": "Drum (Petrol-123.97cc)"
  },
  {
    "Option": "Honda Grazia",
    "Variant": "Repsol Edition (Petrol-123.97cc)"
  },
  {
    "Option": "Honda Grazia",
    "Variant": "Sports Edition (Petrol-124cc)"
  },
  {
    "Option": "Honda Grazia BS4",
    "Variant": "Disc BS4 (Petrol-124.9cc)"
  },
  {
    "Option": "Honda Grazia BS4",
    "Variant": "Drum Alloy BS4 (Petrol-124.9cc)"
  },
  {
    "Option": "Honda Grazia BS4",
    "Variant": "Drum Alloy BS6 (Petrol-124.9cc)"
  },
  {
    "Option": "Honda Grazia BS4",
    "Variant": "Drum BS4 (Petrol-124.9cc)"
  },
  {
    "Option": "Honda H&apos;ness CB350",
    "Variant": "Anniversary Edition (Petrol-348.36cc)"
  },
  {
    "Option": "Honda H&apos;ness CB350",
    "Variant": "DLX (Petrol-348.36cc)"
  },
  {
    "Option": "Honda H&apos;ness CB350",
    "Variant": "DLX Pro (Petrol-348.36cc)"
  },
  {
    "Option": "Honda H&apos;ness CB350",
    "Variant": "DLX Pro Chrome (Petrol-348.36cc)"
  },
  {
    "Option": "Honda Hornet 2.0",
    "Variant": "Repsol Edition (Petrol-184.4cc)"
  },
  {
    "Option": "Honda Hornet 2.0",
    "Variant": "STD (Petrol-184.4cc)"
  },
  {
    "Option": "Honda Interceptor",
    "Variant": "Interceptor (Petrol-782cc)"
  },
  {
    "Option": "Honda Livo",
    "Variant": "Disc (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Livo",
    "Variant": "Drum (Petrol-109.51cc)"
  },
  {
    "Option": "Honda Livo BS4",
    "Variant": "Disc (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Livo BS4",
    "Variant": "Disc CBS (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Livo BS4",
    "Variant": "Drum (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Livo BS4",
    "Variant": "Drum CBS (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Navi",
    "Variant": "CBS (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Navi",
    "Variant": "STD (Petrol-109.19cc)"
  },
  {
    "Option": "Honda Shine",
    "Variant": "Celebration Edition Disc (Petrol-123.94cc)"
  },
  {
    "Option": "Honda Shine",
    "Variant": "Celebration Edition Drum (Petrol-123.94cc)"
  },
  {
    "Option": "Honda Shine",
    "Variant": "Disc (Petrol-123.94cc)"
  },
  {
    "Option": "Honda Shine",
    "Variant": "Disc OBD2 (Petrol-123.94cc)"
  },
  {
    "Option": "Honda Shine",
    "Variant": "Drum (Petrol-123.94cc)"
  },
  {
    "Option": "Honda Shine",
    "Variant": "Drum OBD2 (Petrol-123.94cc)"
  },
  {
    "Option": "Honda Shine 100",
    "Variant": "STD (Petrol-98.98cc)"
  },
  {
    "Option": "Honda SP 125",
    "Variant": "Disc (Petrol-123.94cc)"
  },
  {
    "Option": "Honda SP 125",
    "Variant": "Drum (Petrol-123.94cc)"
  },
  {
    "Option": "Honda Stunner CBF",
    "Variant": "CBF Stunner PGM FI (Petrol-124.7cc)"
  },
  {
    "Option": "Honda Stunner CBF",
    "Variant": "Self Disc Alloy (Petrol-124.7cc)"
  },
  {
    "Option": "Honda Stunner CBF",
    "Variant": "Self Drum Alloy (Petrol-124.7cc)"
  },
  {
    "Option": "Honda Unicorn",
    "Variant": "STD (Petrol-162.7cc)"
  },
  {
    "Option": "Honda Unicorn (2005)",
    "Variant": "Alloy (Petrol-149.1cc)"
  },
  {
    "Option": "Honda Unicorn (2005)",
    "Variant": "Spoke (Petrol-149.1cc)"
  },
  {
    "Option": "Honda VFR",
    "Variant": "1200F (Petrol-1237cc)"
  },
  {
    "Option": "Honda XBlade",
    "Variant": "Disc (Petrol-162.71cc)"
  },
  {
    "Option": "Honda XBlade",
    "Variant": "Double Disc (Petrol-162.71cc)"
  },
  {
    "Option": "Honda XBlade BS4",
    "Variant": "ABS BS4 (Petrol-162.71cc)"
  },
  {
    "Option": "Honda XBlade BS4",
    "Variant": "STD BS4 (Petrol-162.71cc)"
  },
  {
    "Option": "Hornback M1",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Husqvarna Norden 901",
    "Variant": "STD (Petrol-900cc)"
  },
  {
    "Option": "Husqvarna Svartpilen 250",
    "Variant": "STD (Petrol-248.76cc)"
  },
  {
    "Option": "Husqvarna Vitpilen 250",
    "Variant": "STD (Petrol-248.76cc)"
  },
  {
    "Option": "Hyosung Aquila 250",
    "Variant": "Aquila 250 (Petrol-249cc)"
  },
  {
    "Option": "Hyosung Aquila GV300",
    "Variant": "STD (Petrol-275cc)"
  },
  {
    "Option": "Hyosung GD",
    "Variant": "250N (Petrol-249cc)"
  },
  {
    "Option": "Hyosung GT250R",
    "Variant": "250R (Petrol-249cc)"
  },
  {
    "Option": "Hyosung GT300R",
    "Variant": "ABS (Petrol-275cc)"
  },
  {
    "Option": "Hyosung GT650R",
    "Variant": "650 (Petrol-647cc)"
  },
  {
    "Option": "Hyosung GT650R",
    "Variant": "650N (Petrol-647cc)"
  },
  {
    "Option": "Hyosung GT650R",
    "Variant": "650R (Petrol-647cc)"
  },
  {
    "Option": "Hyosung GT650R",
    "Variant": "STD (Petrol-647cc)"
  },
  {
    "Option": "Hyosung GV650 Aquila Pro",
    "Variant": "STD (Petrol-647cc)"
  },
  {
    "Option": "Hyosung ST7",
    "Variant": "ST7 (Petrol-678.2cc)"
  },
  {
    "Option": "Indian Challenger",
    "Variant": "Dark Horse Black Smoke (Petrol-1768cc)"
  },
  {
    "Option": "Indian Challenger",
    "Variant": "Dark Horse Bronze Smoke (Petrol-1768cc)"
  },
  {
    "Option": "Indian Challenger",
    "Variant": "Dark Horse Indy Red (Petrol-1768cc)"
  },
  {
    "Option": "Indian Challenger",
    "Variant": "Dark Horse lcon Riot Orange Smoke (Petrol-1768cc)"
  },
  {
    "Option": "Indian Challenger",
    "Variant": "Limited Black Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Challenger",
    "Variant": "Limited Maroon Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Challenger",
    "Variant": "Limited Spirit Blue Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Chief Bobber Dark Horse",
    "Variant": "Black Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chief Bobber Dark Horse",
    "Variant": "Sagebrush Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chief Bobber Dark Horse",
    "Variant": "Titanium Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chief BS4",
    "Variant": "STD BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Chief Classic BS4",
    "Variant": "STD BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Chief Dark Horse",
    "Variant": "Alumina Jade Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chief Dark Horse",
    "Variant": "Black Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chief Dark Horse",
    "Variant": "Stealth Gray (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chief Dark Horse BS4",
    "Variant": "STD BS4 (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chief Vintage BS4",
    "Variant": "STD BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Chieftain BS4",
    "Variant": "STD BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Chieftain Classic BS4",
    "Variant": "STD BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Chieftain Dark Horse",
    "Variant": "Black Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chieftain Dark Horse",
    "Variant": "Icon Dirt Track Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chieftain Dark Horse BS4",
    "Variant": "STD BS4 (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chieftain Elite",
    "Variant": "Heavy Metal Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chieftain Elite BS4",
    "Variant": "STD BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Chieftain Limited",
    "Variant": "Deepwater Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chieftain Limited",
    "Variant": "Silver Quartz Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Chieftain Limited BS4",
    "Variant": "STD BS4 (Petrol-1890cc)"
  },
  {
    "Option": "Indian FTR",
    "Variant": "Black Smoke (Petrol-1203cc)"
  },
  {
    "Option": "Indian FTR",
    "Variant": "R Carbon Fiber (Petrol-1203cc)"
  },
  {
    "Option": "Indian FTR",
    "Variant": "Rally Titanium Smoke (Petrol-1203cc)"
  },
  {
    "Option": "Indian FTR",
    "Variant": "S Maroon Metallic (Petrol-1203cc)"
  },
  {
    "Option": "Indian FTR",
    "Variant": "S White Smoke (Petrol-1203cc)"
  },
  {
    "Option": "Indian FTR 1200 BS4",
    "Variant": "S BS4 (Petrol-1203cc)"
  },
  {
    "Option": "Indian FTR 1200 BS4",
    "Variant": "S Race Replica BS4 (Petrol-1203cc)"
  },
  {
    "Option": "Indian FTR 1200 BS4",
    "Variant": "STD BS4 (Petrol-1203cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Black Smoke (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Black Smoke Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Icon Pearl White Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Icon Quartz Gray Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Ruby Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Ruby Metallic Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Silver Quartz Smoke (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Silver Quartz Smoke Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Spirit Blue Metal Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Dark Horse Spirit Blue Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Alumina Jade Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Alumina Jade Smoke (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Black Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Black Metallic Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Deepwater Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Deepwater Metallic Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Lime Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Maroon Metallic (Petrol-1768cc)"
  },
  {
    "Option": "Indian Pursuit",
    "Variant": "Limited Maroon Metallic Premium Package (Petrol-1768cc)"
  },
  {
    "Option": "Indian Roadmaster",
    "Variant": "Black Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Roadmaster",
    "Variant": "Dark Horse Black Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Roadmaster",
    "Variant": "Dark Horse Polished Bronze (Petrol-1890cc)"
  },
  {
    "Option": "Indian Roadmaster",
    "Variant": "Dark Horse Silver Quartz Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Roadmaster",
    "Variant": "Limited Black Azure Crystal (Petrol-1890cc)"
  },
  {
    "Option": "Indian Roadmaster",
    "Variant": "Limited Crimson Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Roadmaster",
    "Variant": "Maroon Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Roadmaster BS4",
    "Variant": "Touring BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Roadmaster Classic BS4",
    "Variant": "ABS BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Roadmaster Elite BS4",
    "Variant": "STD BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Scout",
    "Variant": "Black Metallic (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout",
    "Variant": "Maroon Metallic (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout",
    "Variant": "SIlver Quartz Metallic (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber",
    "Variant": "Alumina Jade Smoke (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber",
    "Variant": "Black Metallic (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber",
    "Variant": "Black Smoke (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber",
    "Variant": "Icon Indy Red (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber",
    "Variant": "lcon Thunder Black Azure Crystle (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber",
    "Variant": "Maroon Metallic Smoke (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber",
    "Variant": "SIlver Quartz Smoke (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Bobber BS4",
    "Variant": "STD BS4 (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout BS4",
    "Variant": "ABS BS4 (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Rogue",
    "Variant": "Black Metallic (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Rogue",
    "Variant": "Black Smoke (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Rogue",
    "Variant": "Stealth Gray (Petrol-1133cc)"
  },
  {
    "Option": "Indian Scout Sixty BS4",
    "Variant": "STD BS4 (Petrol-999cc)"
  },
  {
    "Option": "Indian Springfield",
    "Variant": "Black Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Springfield",
    "Variant": "Maroon Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Springfield BS4",
    "Variant": "ABS BS4 (Petrol-1811cc)"
  },
  {
    "Option": "Indian Springfield Dark Horse",
    "Variant": "Black Smoke (Petrol-1890cc)"
  },
  {
    "Option": "Indian Springfield Dark Horse",
    "Variant": "Quartz Gray (Petrol-1890cc)"
  },
  {
    "Option": "Indian Springfield Dark Horse BS4",
    "Variant": "STD BS4 (Petrol-1890cc)"
  },
  {
    "Option": "Indian Super Chief Limited",
    "Variant": "Black Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Super Chief Limited",
    "Variant": "Blue Slate Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Super Chief Limited",
    "Variant": "Maroon Metallic (Petrol-1890cc)"
  },
  {
    "Option": "Indian Vintage",
    "Variant": "Dark Horse (Petrol-1890cc)"
  },
  {
    "Option": "Indus Yo EXL",
    "Variant": "Crux S Base (Petrol-0cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Anniversary Edition (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Double Disc (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Dual Channel - Black (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Dual Channel - Grey (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Dual Channel - Maroon (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Khakhi And Midnight Grey Editions (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Single Channel - Black (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Single Channel - Grey (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Single Channel - Maroon (Petrol-293cc)"
  },
  {
    "Option": "Jawa",
    "Variant": "Single Disc (Petrol-293cc)"
  },
  {
    "Option": "Jawa 42 2.1",
    "Variant": "STD (Petrol-293cc)"
  },
  {
    "Option": "Jawa 42 2.1",
    "Variant": "Tawang Edition (Petrol-293cc)"
  },
  {
    "Option": "Jawa 42 Bobber",
    "Variant": "Jasper Red (Petrol-334cc)"
  },
  {
    "Option": "Jawa 42 Bobber",
    "Variant": "Moonstone White (Petrol-334cc)"
  },
  {
    "Option": "Jawa 42 Bobber",
    "Variant": "Mystic Copper (Petrol-334cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Double Disc (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Dual Channel - Comet Red (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Dual Channel - Galactic Green (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Dual Channel - Halley&apos;s Teal (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Dual Channel - Lumos Lime (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Dual Channel - Nebula Blue (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Dual Channel - Starlight Blue (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Single Channel - Comet Red (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Single Channel - Galactic Green (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Single Channel - Halley&apos;s Teal (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Single Channel - Lumos Lime (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Single Channel - Nebula Blue (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Single Channel - Starlight Blue (Petrol-293cc)"
  },
  {
    "Option": "Jawa Forty Two",
    "Variant": "Single Disc (Petrol-293cc)"
  },
  {
    "Option": "Jawa Perak",
    "Variant": "STD (Petrol-334cc)"
  },
  {
    "Option": "Joy e-bike Skyline",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Kawasaki Eliminator",
    "Variant": "175 (Petrol-173.9cc)"
  },
  {
    "Option": "Kawasaki ER - 6n",
    "Variant": "650cc (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki KLX 110",
    "Variant": "STD (Petrol-112cc)"
  },
  {
    "Option": "Kawasaki KLX 140",
    "Variant": "STD (Petrol-144cc)"
  },
  {
    "Option": "Kawasaki KLX 450R",
    "Variant": "STD (Petrol-449cc)"
  },
  {
    "Option": "Kawasaki KLX230RS",
    "Variant": "STD (Petrol-233cc)"
  },
  {
    "Option": "Kawasaki KX 100",
    "Variant": "STD (Petrol-99cc)"
  },
  {
    "Option": "Kawasaki KX 250",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Kawasaki KX 450",
    "Variant": "STD (Petrol-449cc)"
  },
  {
    "Option": "Kawasaki KX112",
    "Variant": "STD (Petrol-112cc)"
  },
  {
    "Option": "Kawasaki KX250F",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Kawasaki KX65",
    "Variant": "STD (Petrol-64cc)"
  },
  {
    "Option": "Kawasaki Ninja 1000 BS4",
    "Variant": "ABS BS4 (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Ninja 1000 BS4",
    "Variant": "Limited Edition Silver BS4 (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Ninja 1000SX",
    "Variant": "ABS BS6 (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Ninja 1000SX",
    "Variant": "Limited Edition Silver BS6 (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Ninja 300",
    "Variant": "ABS (Petrol-296cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "150 RR (Petrol-148cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "250R (Petrol-249cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "400R (Petrol-399cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "ABS BS4 (Petrol-296cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "KRR ZX150 (Petrol-148cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "STD (Petrol-296cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "ZX-6R (Petrol-636cc)"
  },
  {
    "Option": "Kawasaki Ninja 300 BS4",
    "Variant": "ZX14 (Petrol-1352cc)"
  },
  {
    "Option": "Kawasaki Ninja 400",
    "Variant": "ABS BS6 (Petrol-399cc)"
  },
  {
    "Option": "Kawasaki Ninja 400 BS4",
    "Variant": "ABS BS4 (Petrol-399cc)"
  },
  {
    "Option": "Kawasaki Ninja 650",
    "Variant": "STD (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Ninja 650 (2011-2020)",
    "Variant": "650R (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Ninja 650 (2011-2020)",
    "Variant": "KRT Edition (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Ninja 650 (2011-2020)",
    "Variant": "STD (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Ninja H2",
    "Variant": "R (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja H2",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "Kawasaki Ninja H2 BS4",
    "Variant": "Carbon BS4 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja H2 BS4",
    "Variant": "R BS4 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja H2 BS4",
    "Variant": "STD BS4 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja H2 SX",
    "Variant": "SE BS6 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja H2 SX",
    "Variant": "STD (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja H2 SX BS4",
    "Variant": "SE BS4 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja H2 SX BS4",
    "Variant": "STD BS4 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja ZX-10R",
    "Variant": "STD (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja ZX-10R 2019-2022",
    "Variant": "ABS BS4 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja ZX-10R 2019-2022",
    "Variant": "ABS BS6 (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja ZX-10RR 2019",
    "Variant": "STD (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Ninja ZX-14R BS4",
    "Variant": "ABS BS4 (Petrol-1441cc)"
  },
  {
    "Option": "Kawasaki Ninja ZX-6R BS4",
    "Variant": "STD BS4 (Petrol-636cc)"
  },
  {
    "Option": "Kawasaki Versys 1000",
    "Variant": "STD (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Versys 1000 (2014-2018)",
    "Variant": "STD (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Versys 1000 BS4",
    "Variant": "STD BS4 (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Versys 650",
    "Variant": "ABS BS6 (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Versys 650 BS4",
    "Variant": "ABS BS4 (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Versys X 300 BS4",
    "Variant": "STD BS4 (Petrol-296cc)"
  },
  {
    "Option": "Kawasaki Vulcan S",
    "Variant": "ABS (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Vulcan S BS4",
    "Variant": "ABS BS4 (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Vulcan S BS4",
    "Variant": "Pearl Lava Orange BS4 (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki W175",
    "Variant": "Special Edition (Petrol-177cc)"
  },
  {
    "Option": "Kawasaki W175",
    "Variant": "STD (Petrol-177cc)"
  },
  {
    "Option": "Kawasaki W800",
    "Variant": "STD (Petrol-773cc)"
  },
  {
    "Option": "Kawasaki W800 Street",
    "Variant": "STD (Petrol-773cc)"
  },
  {
    "Option": "Kawasaki W800 Street BS4",
    "Variant": "STD BS4 (Petrol-773cc)"
  },
  {
    "Option": "Kawasaki Z",
    "Variant": "250 (Petrol-249cc)"
  },
  {
    "Option": "Kawasaki Z",
    "Variant": "750 (Petrol-748cc)"
  },
  {
    "Option": "Kawasaki Z",
    "Variant": "750R (Petrol-748cc)"
  },
  {
    "Option": "Kawasaki Z H2",
    "Variant": "SE (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Z H2",
    "Variant": "STD (Petrol-998cc)"
  },
  {
    "Option": "Kawasaki Z1000 BS4",
    "Variant": "R BS4 (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Z1000 BS4",
    "Variant": "Sports (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Z1000 BS4",
    "Variant": "STD BS4 (Petrol-1043cc)"
  },
  {
    "Option": "Kawasaki Z250",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Kawasaki Z650",
    "Variant": "STD (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Z650 (2017-2020)",
    "Variant": "STD (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Z650RS",
    "Variant": "50th Anniversary Edition (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Z650RS",
    "Variant": "STD (Petrol-649cc)"
  },
  {
    "Option": "Kawasaki Z800",
    "Variant": "Standard (Petrol-806cc)"
  },
  {
    "Option": "Kawasaki Z900",
    "Variant": "STD (Petrol-948cc)"
  },
  {
    "Option": "Kawasaki Z900 (2018-2020)",
    "Variant": "STD (Petrol-948cc)"
  },
  {
    "Option": "Kawasaki Z900RS",
    "Variant": "STD (Petrol-948cc)"
  },
  {
    "Option": "Kawasaki Z900RS BS4",
    "Variant": "STD BS4 (Petrol-948cc)"
  },
  {
    "Option": "Keeway K-Light 250V",
    "Variant": "Matte Black (Petrol-249cc)"
  },
  {
    "Option": "Keeway K-Light 250V",
    "Variant": "Matte Blue (Petrol-249cc)"
  },
  {
    "Option": "Keeway K-Light 250V",
    "Variant": "Matte Dark Grey (Petrol-249cc)"
  },
  {
    "Option": "Keeway K300 N",
    "Variant": "Matte Black (Petrol-292.4cc)"
  },
  {
    "Option": "Keeway K300 N",
    "Variant": "Matte Red (Petrol-292.4cc)"
  },
  {
    "Option": "Keeway K300 N",
    "Variant": "Matte White (Petrol-292.4cc)"
  },
  {
    "Option": "Keeway K300 R",
    "Variant": "Glassy Red (Petrol-292.4cc)"
  },
  {
    "Option": "Keeway K300 R",
    "Variant": "Glossy Black (Petrol-292.4cc)"
  },
  {
    "Option": "Keeway K300 R",
    "Variant": "Glossy White (Petrol-292.4cc)"
  },
  {
    "Option": "Keeway Sixties 300i",
    "Variant": "Matte Grey (Petrol-278.2cc)"
  },
  {
    "Option": "Keeway Sixties 300i",
    "Variant": "Matte Light Blue (Petrol-278.2cc)"
  },
  {
    "Option": "Keeway Sixties 300i",
    "Variant": "Matte White (Petrol-278.2cc)"
  },
  {
    "Option": "Keeway SR 250",
    "Variant": "STD (Petrol-223cc)"
  },
  {
    "Option": "Keeway SR125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Keeway V302C",
    "Variant": "Glossy Black (Petrol-298cc)"
  },
  {
    "Option": "Keeway V302C",
    "Variant": "Glossy Grey (Petrol-298cc)"
  },
  {
    "Option": "Keeway V302C",
    "Variant": "Glossy Red (Petrol-298cc)"
  },
  {
    "Option": "Keeway Vieste 300",
    "Variant": "Matte Black (Petrol-278.2cc)"
  },
  {
    "Option": "Keeway Vieste 300",
    "Variant": "Matte Blue (Petrol-278.2cc)"
  },
  {
    "Option": "Keeway Vieste 300",
    "Variant": "Matte White (Petrol-278.2cc)"
  },
  {
    "Option": "Kinetic 4S",
    "Variant": "4S (Petrol-113.5cc)"
  },
  {
    "Option": "Kinetic Boss",
    "Variant": "115 (Petrol-113.61cc)"
  },
  {
    "Option": "Kinetic Nova",
    "Variant": "135 (Petrol-134.9cc)"
  },
  {
    "Option": "Kinetic Sym Flyte",
    "Variant": "Flyte (Petrol-125cc)"
  },
  {
    "Option": "Kinetic Velocity",
    "Variant": "STD (Petrol-100cc)"
  },
  {
    "Option": "Komaki Super",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "KTM 125 Duke",
    "Variant": "2021 (Petrol-124.7cc)"
  },
  {
    "Option": "KTM 125 Duke",
    "Variant": "BS4 (Petrol-124.7cc)"
  },
  {
    "Option": "KTM 125 Duke",
    "Variant": "BS6 (Petrol-124.7cc)"
  },
  {
    "Option": "KTM 1290 Super Duke R",
    "Variant": "STD (Petrol-1301cc)"
  },
  {
    "Option": "KTM 200 Duke",
    "Variant": "2013 - 2016 (Petrol-200cc)"
  },
  {
    "Option": "KTM 200 Duke",
    "Variant": "BS4 (Petrol-199.5cc)"
  },
  {
    "Option": "KTM 200 Duke",
    "Variant": "STD (Petrol-200cc)"
  },
  {
    "Option": "KTM 200 Duke",
    "Variant": "STD 2018 - 2020 (Petrol-199.5cc)"
  },
  {
    "Option": "KTM 250 Adventure",
    "Variant": "STD (Petrol-248.76cc)"
  },
  {
    "Option": "KTM 250 Duke",
    "Variant": "2017-2019 (Petrol-248.8cc)"
  },
  {
    "Option": "KTM 250 Duke",
    "Variant": "2019-2020 (Petrol-248.8cc)"
  },
  {
    "Option": "KTM 250 Duke",
    "Variant": "STD (Petrol-248.76cc)"
  },
  {
    "Option": "KTM 390 Adventure",
    "Variant": "STD (Petrol-373cc)"
  },
  {
    "Option": "KTM 390 Adventure",
    "Variant": "With Spoke Wheels (Petrol-373.27cc)"
  },
  {
    "Option": "KTM 390 Adventure X",
    "Variant": "STD (Petrol-373cc)"
  },
  {
    "Option": "KTM 390 Duke",
    "Variant": "2017 (Petrol-373.2cc)"
  },
  {
    "Option": "KTM 390 Duke",
    "Variant": "BS4 (Petrol-373.2cc)"
  },
  {
    "Option": "KTM 390 Duke",
    "Variant": "BS6 (Petrol-373.27cc)"
  },
  {
    "Option": "KTM 390 Duke (2013-2016)",
    "Variant": "STD (Petrol-373cc)"
  },
  {
    "Option": "KTM 790 Adventure",
    "Variant": "STD (Petrol-799cc)"
  },
  {
    "Option": "KTM 790 Duke",
    "Variant": "STD BS4 (Petrol-799cc)"
  },
  {
    "Option": "KTM 790 Duke",
    "Variant": "STD BS6 (Petrol-799cc)"
  },
  {
    "Option": "KTM Duke 390 2017 Edition1",
    "Variant": "Standard (Petrol-373.2cc)"
  },
  {
    "Option": "KTM EXC 450",
    "Variant": "STD (Petrol-449cc)"
  },
  {
    "Option": "KTM RC 125",
    "Variant": "STD (Petrol-124.7cc)"
  },
  {
    "Option": "KTM RC 125 (2019-2021)",
    "Variant": "BS4 (Petrol-124.7cc)"
  },
  {
    "Option": "KTM RC 125 (2019-2021)",
    "Variant": "BS6 (Petrol-124.7cc)"
  },
  {
    "Option": "KTM RC 125 (2019-2021)",
    "Variant": "STD (Petrol-124.7cc)"
  },
  {
    "Option": "KTM RC 200",
    "Variant": "GP Edition (Petrol-199.5cc)"
  },
  {
    "Option": "KTM RC 200",
    "Variant": "STD (Petrol-199.5cc)"
  },
  {
    "Option": "KTM RC 200 (2016-2021)",
    "Variant": "125 (Petrol-124.7cc)"
  },
  {
    "Option": "KTM RC 200 (2016-2021)",
    "Variant": "BS4 (Petrol-199.5cc)"
  },
  {
    "Option": "KTM RC 200 (2016-2021)",
    "Variant": "BS6 (Petrol-199.5cc)"
  },
  {
    "Option": "KTM RC 200 (2016-2021)",
    "Variant": "STD (Petrol-200cc)"
  },
  {
    "Option": "KTM RC 390",
    "Variant": "390 (Petrol-373.2cc)"
  },
  {
    "Option": "KTM RC 390",
    "Variant": "BS4 (Petrol-373.2cc)"
  },
  {
    "Option": "KTM RC 390",
    "Variant": "BS6 (Petrol-373.3cc)"
  },
  {
    "Option": "KTM RC 390",
    "Variant": "390 (Petrol-373.2cc)"
  },
  {
    "Option": "KTM RC 390",
    "Variant": "BS4 (Petrol-373.2cc)"
  },
  {
    "Option": "KTM RC 390",
    "Variant": "BS6 (Petrol-373.3cc)"
  },
  {
    "Option": "KTM RC 390 (2014-2016)",
    "Variant": "STD (Petrol-373cc)"
  },
  {
    "Option": "KTM RC8",
    "Variant": "1190 (Petrol-1195cc)"
  },
  {
    "Option": "LML CRD",
    "Variant": "100cc (Petrol-100cc)"
  },
  {
    "Option": "LML NV",
    "Variant": "2 Stroke ES (Petrol-149.56cc)"
  },
  {
    "Option": "LML NV",
    "Variant": "2 Stroke KS (Petrol-149.56cc)"
  },
  {
    "Option": "LML NV",
    "Variant": "4 Stroke ES (Petrol-147.55cc)"
  },
  {
    "Option": "LML NV",
    "Variant": "4 Stroke KS (Petrol-147.55cc)"
  },
  {
    "Option": "LML Star Euro 150",
    "Variant": "Geared ES (Petrol-150cc)"
  },
  {
    "Option": "LML Star Euro 150",
    "Variant": "Gearless ES (Petrol-150cc)"
  },
  {
    "Option": "Mahindra Centuro",
    "Variant": "110cc (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Centuro",
    "Variant": "Disc Brake (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Centuro",
    "Variant": "Mirzya Special Edition (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Centuro",
    "Variant": "N1 (Petrol-110cc)"
  },
  {
    "Option": "Mahindra Centuro",
    "Variant": "NXT (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Centuro",
    "Variant": "Rockstar (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Centuro",
    "Variant": "Rockstar Kick Alloy (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Duro",
    "Variant": "125 DZ (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Duro",
    "Variant": "Duro (Petrol-125cc)"
  },
  {
    "Option": "Mahindra Gusto",
    "Variant": "DX (Petrol-109.6cc)"
  },
  {
    "Option": "Mahindra Gusto",
    "Variant": "DX CBS (Petrol-109.6cc)"
  },
  {
    "Option": "Mahindra Gusto",
    "Variant": "Hx (Petrol-109.6cc)"
  },
  {
    "Option": "Mahindra Gusto",
    "Variant": "RS (Petrol-109.6cc)"
  },
  {
    "Option": "Mahindra Gusto",
    "Variant": "VX (Petrol-109.6cc)"
  },
  {
    "Option": "Mahindra Gusto",
    "Variant": "VX CBS (Petrol-109.6cc)"
  },
  {
    "Option": "Mahindra Gusto",
    "Variant": "VX SPL EDITION (Petrol-109.6cc)"
  },
  {
    "Option": "Mahindra Gusto 125",
    "Variant": "DX (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Gusto 125",
    "Variant": "VX (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Gusto 125",
    "Variant": "VX CBS (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Kine",
    "Variant": "Kine 80cc (Petrol-71.5cc)"
  },
  {
    "Option": "Mahindra Mojo 300 BS4",
    "Variant": "ABS (Petrol-294.72cc)"
  },
  {
    "Option": "Mahindra Mojo 300 BS6",
    "Variant": "Black Pearl (Petrol-294.72cc)"
  },
  {
    "Option": "Mahindra Mojo 300 BS6",
    "Variant": "Coral Red (Petrol-294.72cc)"
  },
  {
    "Option": "Mahindra Mojo 300 BS6",
    "Variant": "Garnet Black (Petrol-294.72cc)"
  },
  {
    "Option": "Mahindra Mojo 300 BS6",
    "Variant": "Red Agate (Petrol-294.72cc)"
  },
  {
    "Option": "Mahindra MOJO UT 300",
    "Variant": "ABS (Petrol-294.72cc)"
  },
  {
    "Option": "Mahindra MOJO UT 300",
    "Variant": "STD (Petrol-294.72cc)"
  },
  {
    "Option": "Mahindra MOJO XT 300",
    "Variant": "ABS (Petrol-295cc)"
  },
  {
    "Option": "Mahindra MOJO XT 300",
    "Variant": "STD (Petrol-295cc)"
  },
  {
    "Option": "Mahindra MOJO XT 300",
    "Variant": "Tourer Edition (Petrol-295cc)"
  },
  {
    "Option": "Mahindra Pantero",
    "Variant": "KS Spoke Analog (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Pantero",
    "Variant": "KS Alloy Analog (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Pantero",
    "Variant": "SS Alloy Analog (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Pantero",
    "Variant": "SS Alloy Digital (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Rodeo",
    "Variant": "RZ Standard (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Rodeo",
    "Variant": "Rodeo (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Rodeo",
    "Variant": "RZ (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Rodeo",
    "Variant": "UZO (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Rodeo",
    "Variant": "Uzo STD (Petrol-124.6cc)"
  },
  {
    "Option": "Mahindra Stallio",
    "Variant": "110 (Petrol-106.7cc)"
  },
  {
    "Option": "Mahindra Sym FLyte",
    "Variant": "SYM Flyte (Petrol-124.6cc)"
  },
  {
    "Option": "Moto Guzzi Audace",
    "Variant": "ABS BS4 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi Audace 1400",
    "Variant": "STD (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi California 1400",
    "Variant": "ABS Tour Full BS4 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi California 1400",
    "Variant": "ABS Tour Full BS6 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi California 1400",
    "Variant": "Custom ABS BS4 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi California 1400",
    "Variant": "Custom ABS BS6 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi Eldorado",
    "Variant": "STD (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi Eldorado",
    "Variant": "STD BS4 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi Eldorado",
    "Variant": "STD BS6 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi Griso 1200 8V",
    "Variant": "SE BS4 (Petrol-1151cc)"
  },
  {
    "Option": "Moto Guzzi Griso 1200 8V",
    "Variant": "SE BS6 (Petrol-1151cc)"
  },
  {
    "Option": "Moto Guzzi MGX-21",
    "Variant": "STD BS4 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi MGX-21",
    "Variant": "STD BS6 (Petrol-1380cc)"
  },
  {
    "Option": "Moto Guzzi Sports 8V",
    "Variant": "Corsa (Petrol-1151cc)"
  },
  {
    "Option": "Moto Guzzi Sports 8V",
    "Variant": "Standard (Petrol-1151cc)"
  },
  {
    "Option": "Moto Guzzi V85 TT",
    "Variant": "STD (Petrol-853cc)"
  },
  {
    "Option": "Moto Guzzi V9",
    "Variant": "Bobber BS4 (Petrol-853cc)"
  },
  {
    "Option": "Moto Guzzi V9",
    "Variant": "Bobber BS6 (Petrol-853cc)"
  },
  {
    "Option": "Moto Guzzi V9",
    "Variant": "Roamer BS4 (Petrol-853cc)"
  },
  {
    "Option": "Moto Morini SEIEMMEZZO 6 ½",
    "Variant": "Retro Street Matte Grey (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini SEIEMMEZZO 6 ½",
    "Variant": "Retro Street Milano Red (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini SEIEMMEZZO 6 ½",
    "Variant": "Retro Street Mstelize White (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini SEIEMMEZZO 6 ½",
    "Variant": "Scrambler Graphite Black (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini SEIEMMEZZO 6 ½",
    "Variant": "Scrambler Indigo Blue (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini SEIEMMEZZO 6 ½",
    "Variant": "Scrambler Matte Green (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini X-Cape",
    "Variant": "Carrara White (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini X-Cape",
    "Variant": "Red Passion (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini X-Cape",
    "Variant": "Smoky Anthracite (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini X-Cape",
    "Variant": "X Carrara White (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini X-Cape",
    "Variant": "X Red Passion (Petrol-649cc)"
  },
  {
    "Option": "Moto Morini X-Cape",
    "Variant": "X Smoky Anthracite (Petrol-649cc)"
  },
  {
    "Option": "MV Agusta Brutale",
    "Variant": "1090RR (Petrol-1078cc)"
  },
  {
    "Option": "MV Agusta Brutale",
    "Variant": "675cc (Petrol-675cc)"
  },
  {
    "Option": "MV Agusta Brutale",
    "Variant": "920 (Petrol-921cc)"
  },
  {
    "Option": "MV Agusta Brutale",
    "Variant": "R 1090 (Petrol-1078cc)"
  },
  {
    "Option": "MV Agusta Brutale 1090",
    "Variant": "STD (Petrol-1078cc)"
  },
  {
    "Option": "MV Agusta Brutale 800",
    "Variant": "ABS BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta Brutale 800",
    "Variant": "ABS BS6 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta Brutale 800",
    "Variant": "RR BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta Dragster 800 RR",
    "Variant": "ABS BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta Dragster 800 RR",
    "Variant": "ABS BS6 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta Dragster 800 RR",
    "Variant": "America BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta Dragster 800 RR",
    "Variant": "Pirelli BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta F3",
    "Variant": "675cc (Petrol-675cc)"
  },
  {
    "Option": "MV Agusta F3 800",
    "Variant": "RC BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta F3 800",
    "Variant": "RC BS6 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta F3 800",
    "Variant": "STD BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta F3 800",
    "Variant": "STD BS6 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta F4",
    "Variant": "R (Petrol-998cc)"
  },
  {
    "Option": "MV Agusta F4",
    "Variant": "RC (Petrol-998cc)"
  },
  {
    "Option": "MV Agusta F4",
    "Variant": "RR (Petrol-998cc)"
  },
  {
    "Option": "MV Agusta F4",
    "Variant": "STD (Petrol-998cc)"
  },
  {
    "Option": "MV Agusta Turismo Veloce 800",
    "Variant": "STD BS4 (Petrol-798cc)"
  },
  {
    "Option": "MV Agusta Turismo Veloce 800",
    "Variant": "STD BS6 (Petrol-798cc)"
  },
  {
    "Option": "Norton 500",
    "Variant": "STD (Petrol-500cc)"
  },
  {
    "Option": "Norton Atlas 650",
    "Variant": "STD (Petrol-650cc)"
  },
  {
    "Option": "Norton Commando 961 Cafe Racer",
    "Variant": "STD BS4 (Petrol-961cc)"
  },
  {
    "Option": "Norton Commando 961 Sport",
    "Variant": "STD BS4 (Petrol-961cc)"
  },
  {
    "Option": "Norton Dominator",
    "Variant": "STD BS4 (Petrol-961cc)"
  },
  {
    "Option": "Norton Dominator",
    "Variant": "STD BS6 (Petrol-961cc)"
  },
  {
    "Option": "Okinawa Dual 100",
    "Variant": "48 V, 28 Ah (Petrol-0cc)"
  },
  {
    "Option": "Okinawa Dual 100",
    "Variant": "48 V, 35 Ah (Petrol-0cc)"
  },
  {
    "Option": "Piaggio Vespa Esclusivo",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Piaggio Vespa S",
    "Variant": "125 (Petrol-125cc)"
  },
  {
    "Option": "Polaris Sportsman",
    "Variant": "500 H.O (Petrol-498cc)"
  },
  {
    "Option": "Polaris Sportsman",
    "Variant": "570 EFI (Petrol-567cc)"
  },
  {
    "Option": "Polaris Sportsman",
    "Variant": "Touring 500 H.O (Petrol-498cc)"
  },
  {
    "Option": "QJ Motor R400",
    "Variant": "STD (Petrol-400cc)"
  },
  {
    "Option": "QJ Motor SRC 250",
    "Variant": "Black (Petrol-249cc)"
  },
  {
    "Option": "QJ Motor SRC 250",
    "Variant": "Red (Petrol-249cc)"
  },
  {
    "Option": "QJ Motor SRC 250",
    "Variant": "Silver (Petrol-249cc)"
  },
  {
    "Option": "QJ Motor SRC 500",
    "Variant": "Gold Black (Petrol-480cc)"
  },
  {
    "Option": "QJ Motor SRC 500",
    "Variant": "Red White (Petrol-480cc)"
  },
  {
    "Option": "QJ Motor SRC 500",
    "Variant": "Silver Black (Petrol-480cc)"
  },
  {
    "Option": "QJ Motor SRK 400",
    "Variant": "Black (Petrol-400cc)"
  },
  {
    "Option": "QJ Motor SRK 400",
    "Variant": "Red (Petrol-400cc)"
  },
  {
    "Option": "QJ Motor SRK 400",
    "Variant": "White (Petrol-400cc)"
  },
  {
    "Option": "QJ Motor SRK 700",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "QJ Motor SRV 125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "QJ Motor SRV 300",
    "Variant": "Black (Petrol-296cc)"
  },
  {
    "Option": "QJ Motor SRV 300",
    "Variant": "Green (Petrol-296cc)"
  },
  {
    "Option": "QJ Motor SRV 300",
    "Variant": "Orange (Petrol-296cc)"
  },
  {
    "Option": "QJ Motor SRV 300",
    "Variant": "Red (Petrol-296cc)"
  },
  {
    "Option": "QJ Motor TRX 125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Rajdoot 250",
    "Variant": "STD (Petrol-173cc)"
  },
  {
    "Option": "Rajdoot Bobby",
    "Variant": "STD (Petrol-173cc)"
  },
  {
    "Option": "Rajdoot Excel T",
    "Variant": "173 (Petrol-173cc)"
  },
  {
    "Option": "Royal Enfield Bobber 650",
    "Variant": "STD (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Bullet 350",
    "Variant": "STD (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Bullet 500",
    "Variant": "ABS (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Bullet 500",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Bullet Classic",
    "Variant": "350cc (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Bullet Classic",
    "Variant": "Electra 5S (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Bullet Classic",
    "Variant": "Electra Deluxe (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Bullet Classic",
    "Variant": "Electra Efi (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Bullet Electra",
    "Variant": "std (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Bullet Trials 350",
    "Variant": "STD (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Bullet Trials 500",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Cafe Racer",
    "Variant": "500 (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 350",
    "Variant": "Chrome Series With Dual-Channel (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Classic 350",
    "Variant": "Dark Series With Dual-Channel (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Classic 350",
    "Variant": "Halcyon Series With Dual-Channel (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Classic 350",
    "Variant": "Halcyon Series With Single-Channel (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Classic 350",
    "Variant": "Redditch Series With Single-Channel (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Classic 350",
    "Variant": "Signals Series With Dual-Channel (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "ABS BS4 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "BS6 Dual-channel ABS (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Chrome Black BS6 2020 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Classic Black BS6 2020 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Gunmetal Grey BS4 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Gunmetal Grey BS6 2020 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Gunmetal Grey Spoke BS6 2020 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Mercury Silver BS6 January 2021 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Metallo Silver BS6 January 2021 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Orange Ember BS6 January 2021 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Pure Black BS6 January 2021 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Redditch ABS BS4 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Redditch BS4 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "S BS4 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Signals Edition BS4 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Signals Edition BS6 2020 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "STD BS3 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "STD BS6 2020 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 350 (2012-2021)",
    "Variant": "Stealth Black BS6 2020 (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "ABS (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Battle Green (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Chrome (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Desert Storm (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Despatch (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Pegasus Edition (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Squadron Blue (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Stealth Black (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Classic 500",
    "Variant": "Tribute Black Limited Edition (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Constellation",
    "Variant": "700 (Petrol-700cc)"
  },
  {
    "Option": "Royal Enfield Continental GT",
    "Variant": "535cc (Petrol-535cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Apex Grey (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Black Magic (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "British Racing Green (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Dr. Mayhem (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "DUX Deluxe (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Ice Queen (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Mister Clean (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Mr Clean (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Rocker Red (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Slipstream Blue (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "STD BS4 (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Ventura Blue (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Continental GT 650",
    "Variant": "Ventura Storm (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Electra-X",
    "Variant": "500 (Petrol-350cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Dune Brown (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Glacier Blue (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Granite Black (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Gravel Grey (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Lake Blue (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Mirage Silver (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Pine Green (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Rock Red (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Sleet Black (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Sleet Grey (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan",
    "Variant": "Snow White (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan BS4",
    "Variant": "ABS (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan BS4",
    "Variant": "Sleet (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Himalayan BS4",
    "Variant": "STD (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Hunter 350",
    "Variant": "Metro (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Hunter 350",
    "Variant": "Metro Rebel (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Hunter 350",
    "Variant": "Retro (Petrol-349.34cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Baker Express (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Barcelona Blue (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Black Pearl (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Black Ray (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Cali Green (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Canyon Red (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Downtown Drag (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Glitter Dust (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Mark 2 (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Mark Three (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Orange Crush (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Ravishing Red (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Silver Spectre (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "STD BS4 (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Sunset Strip (Petrol-647.95cc)"
  },
  {
    "Option": "Royal Enfield Interceptor 650",
    "Variant": "Ventura Blue (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Machismo 500",
    "Variant": "500 (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Machismo 500",
    "Variant": "Machismo 500 (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Machismo-350",
    "Variant": "Machismo (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Meteor 350",
    "Variant": "Fireball (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Meteor 350",
    "Variant": "Fireball Custom (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Meteor 350",
    "Variant": "Stellar (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Meteor 350",
    "Variant": "Stellar Custom (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Meteor 350",
    "Variant": "Supernova (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Meteor 350",
    "Variant": "Supernova Custom (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Scram 411",
    "Variant": "Blazing Black And Skyline Blue (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Scram 411",
    "Variant": "Graphite Series (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Scram 411",
    "Variant": "White Flame And Silver Spirit (Petrol-411cc)"
  },
  {
    "Option": "Royal Enfield Scrambler",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Super Meteor",
    "Variant": "700 (Petrol-692cc)"
  },
  {
    "Option": "Royal Enfield Super Meteor 650",
    "Variant": "Astral (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Super Meteor 650",
    "Variant": "Celestial (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Super Meteor 650",
    "Variant": "Interstellar (Petrol-648cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 350",
    "Variant": "ABS (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 350",
    "Variant": "KickStart (Petrol-347cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 350",
    "Variant": "STD (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 350 (2002-2009)",
    "Variant": "STD (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 350X",
    "Variant": "ABS (Petrol-346cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 350X",
    "Variant": "STD (Petrol-349cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 500",
    "Variant": "ABS (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 500",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 500 (2002-2009)",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 500X",
    "Variant": "ABS (Petrol-499cc)"
  },
  {
    "Option": "Royal Enfield Thunderbird 500X",
    "Variant": "STD (Petrol-499cc)"
  },
  {
    "Option": "SRV 850",
    "Variant": "ABS (Petrol-839.3cc)"
  },
  {
    "Option": "Suzuki Avenis",
    "Variant": "Base (Petrol-124.3cc)"
  },
  {
    "Option": "Suzuki Avenis",
    "Variant": "Race Edition (Petrol-124.3cc)"
  },
  {
    "Option": "Suzuki Avenis",
    "Variant": "Race Edition 2021 (Petrol-124.3cc)"
  },
  {
    "Option": "Suzuki Avenis",
    "Variant": "Ride Connect Edition (Petrol-124.3cc)"
  },
  {
    "Option": "Suzuki Avenis",
    "Variant": "Standard Edition (Petrol-124.3cc)"
  },
  {
    "Option": "Suzuki AX100",
    "Variant": "STD (Petrol-98.2cc)"
  },
  {
    "Option": "Suzuki Bandit",
    "Variant": "1250S (Petrol-1255cc)"
  },
  {
    "Option": "Suzuki Burgman Street",
    "Variant": "Bluetooth (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Burgman Street",
    "Variant": "BS6 (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Burgman Street",
    "Variant": "EX (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Burgman Street",
    "Variant": "Ride Connect Edition 2023 (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Burgman Street",
    "Variant": "STD (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Burgman Street",
    "Variant": "STD 2023 (Petrol-124cc)"
  },
  {
    "Option": "Suzuki DR-Z50",
    "Variant": "STD BS4 (Petrol-49cc)"
  },
  {
    "Option": "Suzuki DR-Z50",
    "Variant": "STD BS6 (Petrol-49cc)"
  },
  {
    "Option": "Suzuki Gixxer",
    "Variant": "Ride Connect Edition (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer",
    "Variant": "Standard Edition (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer (2014-2018)",
    "Variant": "ABS (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer (2014-2018)",
    "Variant": "Dual Disc (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer (2014-2018)",
    "Variant": "SP (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer (2014-2018)",
    "Variant": "Special Edition Rear Disc Brake (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer (2014-2018)",
    "Variant": "STD (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer 250",
    "Variant": "Ride Connect Edition (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer 250",
    "Variant": "Standard Edition (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer 250 BS4",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer SF",
    "Variant": "MotoGP BS6 (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer SF",
    "Variant": "MotoGP Edition (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer SF",
    "Variant": "Ride Connect Edition (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer SF",
    "Variant": "Standard Edition (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer SF",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "ABS (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "Fi (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "Fi ABS (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "Moto GP Rear Disc (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "Rear Disc (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "SP (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "SP ABS (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "Special Edition Rear Disc Brake (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "Special MOTOGP Edition (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF (2015-2018)",
    "Variant": "Standard (Petrol-154.9cc)"
  },
  {
    "Option": "Suzuki Gixxer SF 250",
    "Variant": "Moto GP BS6 (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer SF 250",
    "Variant": "Ride Connect Edition (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer SF 250",
    "Variant": "Ride Connect Edition - Race (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer SF 250",
    "Variant": "Standard Edition (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer SF 250",
    "Variant": "Standard Edition - Race (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer SF 250 BS4",
    "Variant": "ABS (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Gixxer SF 250 BS4",
    "Variant": "MotoGP Edition BS4 (Petrol-249cc)"
  },
  {
    "Option": "Suzuki GS 150 R",
    "Variant": "GS150R (Petrol-149.5cc)"
  },
  {
    "Option": "Suzuki GSX R1000",
    "Variant": "1000Z Limited Edition (Petrol-999cc)"
  },
  {
    "Option": "Suzuki GSX R1000",
    "Variant": "600 (Petrol-599cc)"
  },
  {
    "Option": "Suzuki GSX R1000",
    "Variant": "750 (Petrol-750cc)"
  },
  {
    "Option": "Suzuki GSX R1000",
    "Variant": "ABS (Petrol-999cc)"
  },
  {
    "Option": "Suzuki GSX R1000",
    "Variant": "R (Petrol-999cc)"
  },
  {
    "Option": "Suzuki GSX R1000R",
    "Variant": "ABS BS4 (Petrol-999.8cc)"
  },
  {
    "Option": "Suzuki GSX S1000F",
    "Variant": "ABS (Petrol-999cc)"
  },
  {
    "Option": "Suzuki GSX S750",
    "Variant": "STD BS4 (Petrol-749cc)"
  },
  {
    "Option": "Suzuki GSX-S1000",
    "Variant": "ABS BS4 (Petrol-999cc)"
  },
  {
    "Option": "Suzuki GSX-S1000GT",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "Suzuki Hayabusa",
    "Variant": "STD (Petrol-1340cc)"
  },
  {
    "Option": "Suzuki Hayabusa 2009-2020",
    "Variant": "STD BS4 (Petrol-1340cc)"
  },
  {
    "Option": "Suzuki Hayabusa 2009-2020",
    "Variant": "Z (Petrol-1340cc)"
  },
  {
    "Option": "Suzuki Hayate",
    "Variant": "Drum (Petrol-112.8cc)"
  },
  {
    "Option": "Suzuki Hayate",
    "Variant": "EP (Petrol-113cc)"
  },
  {
    "Option": "Suzuki Hayate",
    "Variant": "EP BS-IV (Petrol-113cc)"
  },
  {
    "Option": "Suzuki Heat",
    "Variant": "Alloy (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Heat",
    "Variant": "Spoke (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Inazuma",
    "Variant": "250 (Petrol-248cc)"
  },
  {
    "Option": "Suzuki Intruder",
    "Variant": "160 (Petrol-160cc)"
  },
  {
    "Option": "Suzuki Intruder",
    "Variant": "160 (Petrol-160cc)"
  },
  {
    "Option": "Suzuki Intruder 250",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Intruder M1800R",
    "Variant": "BOSS (Petrol-1783cc)"
  },
  {
    "Option": "Suzuki Intruder M1800R",
    "Variant": "M1800R (Petrol-1783cc)"
  },
  {
    "Option": "Suzuki Intruder M1800R",
    "Variant": "Z (Petrol-1783cc)"
  },
  {
    "Option": "Suzuki Intruder M800",
    "Variant": "M800 (Petrol-805cc)"
  },
  {
    "Option": "Suzuki Katana",
    "Variant": "STD (Petrol-999cc)"
  },
  {
    "Option": "Suzuki Let&apos;s",
    "Variant": "110cc (Petrol-112.8cc)"
  },
  {
    "Option": "Suzuki Let&apos;s",
    "Variant": "STD (Petrol-112.8cc)"
  },
  {
    "Option": "Suzuki MAX100",
    "Variant": "STD (Petrol-98.2cc)"
  },
  {
    "Option": "Suzuki RM Z250",
    "Variant": "STD BS4 (Petrol-249cc)"
  },
  {
    "Option": "Suzuki RM Z450",
    "Variant": "STD BS4 (Petrol-449cc)"
  },
  {
    "Option": "Suzuki Shaolin",
    "Variant": "STD (Petrol-138.2cc)"
  },
  {
    "Option": "Suzuki Shogun",
    "Variant": "Suzuki Shogun STD (Petrol-108.2cc)"
  },
  {
    "Option": "Suzuki Slingshot",
    "Variant": "125 (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Slingshot",
    "Variant": "Drum Spokes (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Slingshot",
    "Variant": "Plus Disc Self (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Slingshot",
    "Variant": "Plus Drum Kick (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Slingshot",
    "Variant": "Plus Drum Self (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Supra",
    "Variant": "SS (Petrol-98.2cc)"
  },
  {
    "Option": "Suzuki Supra",
    "Variant": "STD (Petrol-98.2cc)"
  },
  {
    "Option": "Suzuki Swish",
    "Variant": "125cc (Petrol-124cc)"
  },
  {
    "Option": "Suzuki V Strom 1000",
    "Variant": "STD (Petrol-1037cc)"
  },
  {
    "Option": "Suzuki V-Strom 650XT",
    "Variant": "ABS (Petrol-645cc)"
  },
  {
    "Option": "Suzuki V-Strom 650XT",
    "Variant": "STD (Petrol-645cc)"
  },
  {
    "Option": "Suzuki V-Strom SX",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Suzuki Zeus",
    "Variant": "125DU (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Zeus",
    "Variant": "125EU (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Zeus",
    "Variant": "125XCD (Petrol-124cc)"
  },
  {
    "Option": "Suzuki Zeus",
    "Variant": "125XU (Petrol-124cc)"
  },
  {
    "Option": "SWM Superdual T",
    "Variant": "STD BS4 (Petrol-600cc)"
  },
  {
    "Option": "Tork Cruiser",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Triumph Bonneville Bobber",
    "Variant": "Chrome Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville Bobber",
    "Variant": "Gold Line Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville Bobber",
    "Variant": "STD (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville Bobber",
    "Variant": "STD BS4 2017 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville Speedmaster",
    "Variant": "2018 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville Speedmaster",
    "Variant": "Chrome Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville Speedmaster",
    "Variant": "Gold Line Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville Speedmaster",
    "Variant": "STD (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T100",
    "Variant": "2020 (Petrol-900cc)"
  },
  {
    "Option": "Triumph Bonneville T100",
    "Variant": "Black (Petrol-900cc)"
  },
  {
    "Option": "Triumph Bonneville T100",
    "Variant": "Chrome Edition (Petrol-900cc)"
  },
  {
    "Option": "Triumph Bonneville T100",
    "Variant": "Gold Line Edition (Petrol-900cc)"
  },
  {
    "Option": "Triumph Bonneville T100",
    "Variant": "STD (Petrol-900cc)"
  },
  {
    "Option": "Triumph Bonneville T100",
    "Variant": "T100 BS4 (Petrol-900cc)"
  },
  {
    "Option": "Triumph Bonneville T100",
    "Variant": "Twin 500 (Petrol-900cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "2020 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "865cc (Petrol-865cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "ABS BS4 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "Black (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "Black 2020 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "Black Gold Line Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "Chrome Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "Gold Line Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Bonneville T120",
    "Variant": "STD (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Daytona 675",
    "Variant": "675 cc (Petrol-675cc)"
  },
  {
    "Option": "Triumph Daytona 675",
    "Variant": "675 R (Petrol-675cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "GT (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "GT 221 Special Edition (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "GT Chrome Edition (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "GT Triple Black (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "R (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "R 221 Special Edition (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "R Black (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket 3",
    "Variant": "R Chrome Edition (Petrol-2458cc)"
  },
  {
    "Option": "Triumph Rocket III",
    "Variant": "STD (Petrol-2294cc)"
  },
  {
    "Option": "Triumph Scrambler 1200",
    "Variant": "STD (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Scrambler 1200",
    "Variant": "Steve McQueen Edition (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Scrambler 1200",
    "Variant": "XC BS4 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Scrambler 1200",
    "Variant": "XC BS6 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Scrambler 1200",
    "Variant": "XE (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Scrambler 900",
    "Variant": "Chrome Edition (Petrol-900cc)"
  },
  {
    "Option": "Triumph Scrambler 900",
    "Variant": "Gold Line Edition (Petrol-900cc)"
  },
  {
    "Option": "Triumph Scrambler 900",
    "Variant": "Sandstorm Edition (Petrol-900cc)"
  },
  {
    "Option": "Triumph Scrambler 900",
    "Variant": "STD (Petrol-900cc)"
  },
  {
    "Option": "Triumph Scrambler 900",
    "Variant": "STD BS4 (Petrol-900cc)"
  },
  {
    "Option": "Triumph Speed 400",
    "Variant": "STD (Petrol-398.15cc)"
  },
  {
    "Option": "Triumph Speed Triple",
    "Variant": "master (Petrol-865cc)"
  },
  {
    "Option": "Triumph Speed Triple",
    "Variant": "Triple (Petrol-1050cc)"
  },
  {
    "Option": "Triumph Speed Triple 1200",
    "Variant": "RS (Petrol-1160cc)"
  },
  {
    "Option": "Triumph Speed Twin",
    "Variant": "STD (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Speed Twin",
    "Variant": "STD BS4 (Petrol-1200cc)"
  },
  {
    "Option": "Triumph Speed Twin 900",
    "Variant": "2019 (Petrol-900cc)"
  },
  {
    "Option": "Triumph Speed Twin 900",
    "Variant": "Chrome Edition (Petrol-900cc)"
  },
  {
    "Option": "Triumph Speed Twin 900",
    "Variant": "EC1 Special Edition (Petrol-900cc)"
  },
  {
    "Option": "Triumph Speed Twin 900",
    "Variant": "Gold Line 2021 (Petrol-900cc)"
  },
  {
    "Option": "Triumph Speed Twin 900",
    "Variant": "Scrambler BS4 (Petrol-865cc)"
  },
  {
    "Option": "Triumph Speed Twin 900",
    "Variant": "STD (Petrol-900cc)"
  },
  {
    "Option": "Triumph Speed Twin 900",
    "Variant": "Triumph Street Scrambler BS4 (Petrol-865cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "675cc (Petrol-675cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "R 2017 (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "R 2020-2022 (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "R Crystal White (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "R Silver Ice (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "RS 2017 (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "RS 2020 - 2022 (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "RS Carnival Red (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "RS Cosmic Yellow (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "RS Silver Ice (Petrol-765cc)"
  },
  {
    "Option": "Triumph Street Triple",
    "Variant": "S (Petrol-765cc)"
  },
  {
    "Option": "Triumph Thruxton",
    "Variant": "Classic Cafe Racer (Petrol-865cc)"
  },
  {
    "Option": "Triumph Thunderbird",
    "Variant": "LT (Petrol-1699cc)"
  },
  {
    "Option": "Triumph Thunderbird",
    "Variant": "Storm (Petrol-1699cc)"
  },
  {
    "Option": "Triumph Thunderbird Storm",
    "Variant": "1597 cc (Petrol-1699cc)"
  },
  {
    "Option": "Triumph Thunderbird Storm",
    "Variant": "1699 cc (Petrol-1699cc)"
  },
  {
    "Option": "Triumph Tiger 1200",
    "Variant": "GT Explorer (Petrol-1160cc)"
  },
  {
    "Option": "Triumph Tiger 1200",
    "Variant": "GT Pro (Petrol-1160cc)"
  },
  {
    "Option": "Triumph Tiger 1200",
    "Variant": "Rally Explorer (Petrol-1160cc)"
  },
  {
    "Option": "Triumph Tiger 1200",
    "Variant": "Rally Pro (Petrol-1160cc)"
  },
  {
    "Option": "Triumph Tiger 1200",
    "Variant": "XCx BS4 (Petrol-1215cc)"
  },
  {
    "Option": "Triumph Tiger 800",
    "Variant": "2018 (Petrol-800cc)"
  },
  {
    "Option": "Triumph Tiger 800",
    "Variant": "800XC (Petrol-800cc)"
  },
  {
    "Option": "Triumph Tiger 800",
    "Variant": "XCA (Petrol-800cc)"
  },
  {
    "Option": "Triumph Tiger 800",
    "Variant": "XCx (Petrol-800cc)"
  },
  {
    "Option": "Triumph Tiger 800",
    "Variant": "XR (Petrol-800cc)"
  },
  {
    "Option": "Triumph Tiger 800",
    "Variant": "XRx (Petrol-800cc)"
  },
  {
    "Option": "Triumph Tiger 850 Sport",
    "Variant": "STD (Petrol-888cc)"
  },
  {
    "Option": "Triumph Tiger 900",
    "Variant": "GT (Petrol-888cc)"
  },
  {
    "Option": "Triumph Tiger 900",
    "Variant": "Rally (Petrol-888cc)"
  },
  {
    "Option": "Triumph Tiger 900",
    "Variant": "Rally PRO (Petrol-888cc)"
  },
  {
    "Option": "Triumph Tiger Explorer",
    "Variant": "1000cc (Petrol-1215cc)"
  },
  {
    "Option": "Triumph Tiger Explorer",
    "Variant": "XCx (Petrol-1215cc)"
  },
  {
    "Option": "Triumph Tiger Sport 660",
    "Variant": "STD (Petrol-660cc)"
  },
  {
    "Option": "Triumph Trident 660",
    "Variant": "STD (Petrol-660cc)"
  },
  {
    "Option": "Triumph Triple",
    "Variant": "1050 (Petrol-1050cc)"
  },
  {
    "Option": "TVS Apache 2007-2011",
    "Variant": "ES (Petrol-147.5cc)"
  },
  {
    "Option": "TVS Apache RR 310",
    "Variant": "ABS (BS4) (Petrol-312.2cc)"
  },
  {
    "Option": "TVS Apache RR 310",
    "Variant": "ABS (Petrol-312.2cc)"
  },
  {
    "Option": "TVS Apache RTR 160",
    "Variant": "Disc (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160",
    "Variant": "Disc Bluetooth (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160",
    "Variant": "Drum (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 2009-2022",
    "Variant": "Disc (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 2009-2022",
    "Variant": "Dual Disc (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 2009-2022",
    "Variant": "Dual Disc ABS (BS4) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 2009-2022",
    "Variant": "Front Disc (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 2009-2022",
    "Variant": "Rear Disc (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 2009-2022",
    "Variant": "Single Disc ABS (BS4) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "180 ABS (Petrol-177.4cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "2012 (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Carburetor Dual Disc (2018) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Carburetor Single Disc (2018) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Disc (2019) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Double Disc (2009) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Drum (2019) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Dual Disc ABS (BS4) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Fi ABS (BS4) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Fi Dual Disc (2018) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Front And Rear Disc (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Front And Rear Disc With SmartXonnect (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Front Disc, Rear Drum (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "RTR 160 Fi (2009) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "RTR 160 KickStart (2009) (Petrol-160cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "RTR 165 RP (Petrol-164.9cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "RTR 180 (2009) (Petrol-177.4cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "RTR 220 (2013) (Petrol-220cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Single Disc (2009) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Single Disc ABS (BS4) (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 160 4V",
    "Variant": "Special Edition (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Apache RTR 180",
    "Variant": "Disc (Petrol-177.4cc)"
  },
  {
    "Option": "TVS Apache RTR 180 2018-2022",
    "Variant": "ABS (BS4) (Petrol-177.4cc)"
  },
  {
    "Option": "TVS Apache RTR 180 2018-2022",
    "Variant": "BS6 (Petrol-177.4cc)"
  },
  {
    "Option": "TVS Apache RTR 180 2018-2022",
    "Variant": "STD (Petrol-177.4cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "ABS BS4 (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "Carb ABS (BS4) (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "Dual Channel ABS (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "Fuel Injection BS4 (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "Pirelli BS4 (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "Single Channel ABS (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "Smart Xonnect (BS4) (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V",
    "Variant": "Standard BS4 (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V 2016-2017",
    "Variant": "ABS (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V 2016-2017",
    "Variant": "Fi (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V 2016-2017",
    "Variant": "Pirelli (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 4V 2016-2017",
    "Variant": "Standard (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 Fi E100",
    "Variant": "STD BS4 (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Apache RTR 200 Fi E100",
    "Variant": "STD BS6 (Petrol-197.75cc)"
  },
  {
    "Option": "TVS Centra",
    "Variant": "STD (Petrol-99.8cc)"
  },
  {
    "Option": "TVS Fiero",
    "Variant": "F2 Disc (Petrol-147.5cc)"
  },
  {
    "Option": "TVS Fiero",
    "Variant": "F2 Drum (Petrol-147.5cc)"
  },
  {
    "Option": "TVS Flame",
    "Variant": "DS 125 (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Flame",
    "Variant": "Flame SR 125 (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Flame",
    "Variant": "SR 125 Disc (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Jive",
    "Variant": "Jive (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Max",
    "Variant": "4R (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Max",
    "Variant": "4R LX (Petrol-109.7cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Disc (Petrol-124.8cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Disc BS4 (Petrol-124.79cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Drum (Petrol-124.8cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Drum BS4 (Petrol-124.79cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Race Edition (Petrol-124.8cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Race Edition BS4 (Petrol-124.79cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Race XP (Petrol-124.8cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "Super Squad Edition (Petrol-124.8cc)"
  },
  {
    "Option": "TVS NTORQ 125",
    "Variant": "XT (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Phoenix",
    "Variant": "125 (Petrol-124.5cc)"
  },
  {
    "Option": "TVS Phoenix",
    "Variant": "125 Drum (Petrol-124.5cc)"
  },
  {
    "Option": "TVS Phoenix",
    "Variant": "125 (Petrol-124.5cc)"
  },
  {
    "Option": "TVS Phoenix",
    "Variant": "125 Drum (Petrol-124.5cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "Base Edition BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "Commuter Bike of the Year - Disc (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "Commuter Bike of the Year - Disc BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "Commuter Bike of the Year - Drum (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "Commuter Bike of the Year - Drum BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "Dual Tone Edition Disc (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "Dual Tone Edition Drum (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Radeon",
    "Variant": "STD (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Raider",
    "Variant": "Disc (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Raider",
    "Variant": "Drum (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Raider",
    "Variant": "Single Seat (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Raider",
    "Variant": "SmartXonnect (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Ronin",
    "Variant": "Dual Tone - Single Channel (Petrol-225.9cc)"
  },
  {
    "Option": "TVS Ronin",
    "Variant": "Single Tone - Single Channel (Petrol-225.9cc)"
  },
  {
    "Option": "TVS Ronin",
    "Variant": "Triple Tone - Dual Channel (Petrol-225.9cc)"
  },
  {
    "Option": "TVS Ronin",
    "Variant": "Triple Tone - Dual Channel - Dawn Orange (Petrol-225.9cc)"
  },
  {
    "Option": "TVS Sport",
    "Variant": "100 (Petrol-99.7cc)"
  },
  {
    "Option": "TVS Sport",
    "Variant": "Kick Start Alloy (Petrol-99.7cc)"
  },
  {
    "Option": "TVS Sport",
    "Variant": "Kick Start Alloy Wheel (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Sport",
    "Variant": "Kick Start Long Seat (Petrol-99.7cc)"
  },
  {
    "Option": "TVS Sport",
    "Variant": "Kick Start Spoke (Petrol-99.7cc)"
  },
  {
    "Option": "TVS Sport",
    "Variant": "Self Start Alloy Wheel (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Sport",
    "Variant": "Self Start Alloy Wheel New (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus",
    "Variant": "ES Disc (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus",
    "Variant": "ES Drum (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus",
    "Variant": "Mono Tone BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "City (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "City Plus (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Dual Tone (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Dual Tone SBT (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Ecothrust (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Gold Edition (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Kargil Edition (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Kick Start Mag (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Special Edition (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Sport (Petrol-99.7cc)"
  },
  {
    "Option": "TVS Star City Plus BS4",
    "Variant": "Star (Petrol-99.7cc)"
  },
  {
    "Option": "TVS Velocity",
    "Variant": "160 (Petrol-159.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "110 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "125 (Petrol-124.5cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "2015 (Petrol-110cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Disc (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Disc SBT BS4 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Disc SBT BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Drum (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Drum SBT BS4 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Drum SBT BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Edge (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "GL (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "GLX (Petrol-124.8cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Premium Edition (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Premium Edition SBT BS4 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Victor",
    "Variant": "Premium Edition SBT BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Wego",
    "Variant": "Disc (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Wego",
    "Variant": "Drum BS4 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS Wego",
    "Variant": "Drum BS6 (Petrol-109.7cc)"
  },
  {
    "Option": "TVS XL Heavy Duty",
    "Variant": "2 Stroke (Petrol-69.9cc)"
  },
  {
    "Option": "TVS XL Heavy Duty",
    "Variant": "SE (Petrol-69.9cc)"
  },
  {
    "Option": "TVS XL Heavy Duty",
    "Variant": "STD (Petrol-69.9cc)"
  },
  {
    "Option": "TVS XL Super",
    "Variant": "SE (Petrol-69.9cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Comfort (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Comfort BS4 (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Comfort i-Touch Start (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Comfort i-Touch Start BS4 (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Heavy Duty (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Heavy Duty BS4 (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Heavy Duty i Touch Start (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Heavy Duty i Touch Start BS4 (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Heavy Duty i Touch Start Special Edition (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Heavy Duty i Touch Start Special Edition BS4 (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "Heavy Duty i Touch Start Win Edition (Petrol-99.7cc)"
  },
  {
    "Option": "TVS XL100",
    "Variant": "STD BS4 (Petrol-99.7cc)"
  },
  {
    "Option": "UM Renegade",
    "Variant": "Commando (Petrol-223cc)"
  },
  {
    "Option": "UM Renegade",
    "Variant": "Sport S (Petrol-279cc)"
  },
  {
    "Option": "UM Renegade Commando",
    "Variant": "Carb (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Commando",
    "Variant": "EFI (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Commando",
    "Variant": "Limited (Petrol-196cc)"
  },
  {
    "Option": "UM Renegade Commando",
    "Variant": "STD (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Commando Classic",
    "Variant": "Carb (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Commando Classic",
    "Variant": "Classic (Petrol-279cc)"
  },
  {
    "Option": "UM Renegade Commando Classic",
    "Variant": "STD (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Commando Mojave",
    "Variant": "STD (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Duty Ace",
    "Variant": "STD (Petrol-223cc)"
  },
  {
    "Option": "UM Renegade Duty S",
    "Variant": "STD (Petrol-223cc)"
  },
  {
    "Option": "UM Renegade Limited",
    "Variant": "STD (Petrol-196cc)"
  },
  {
    "Option": "UM Renegade Sport",
    "Variant": "STD (Petrol-196.4cc)"
  },
  {
    "Option": "UM Renegade Sports S",
    "Variant": "Carb (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Sports S",
    "Variant": "EFI (Petrol-279.5cc)"
  },
  {
    "Option": "UM Renegade Sports S",
    "Variant": "STD (Petrol-279.5cc)"
  },
  {
    "Option": "Vegh S25",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Vegh S60",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Vespa 946 Emporio Armani Edition",
    "Variant": "Emporio Armani (Petrol-125cc)"
  },
  {
    "Option": "Vespa Connectivity",
    "Variant": "STD (Petrol-154.8cc)"
  },
  {
    "Option": "Vespa Elegante 125",
    "Variant": "125 (Petrol-125cc)"
  },
  {
    "Option": "Vespa Elegante 125",
    "Variant": "946cc (Petrol-125cc)"
  },
  {
    "Option": "Vespa Elegante 125",
    "Variant": "BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa Elegante 125",
    "Variant": "Elegante (Petrol-125cc)"
  },
  {
    "Option": "Vespa Elegante 125",
    "Variant": "VX 125 (Petrol-125cc)"
  },
  {
    "Option": "Vespa Elegante 150",
    "Variant": "ABS (Petrol-154.8cc)"
  },
  {
    "Option": "Vespa Elegante 150",
    "Variant": "BS6 (Petrol-149cc)"
  },
  {
    "Option": "Vespa Elegante 150",
    "Variant": "FL ABS BS6 (Petrol-149.5cc)"
  },
  {
    "Option": "Vespa Elegante 150",
    "Variant": "STD (Petrol-154.8cc)"
  },
  {
    "Option": "Vespa LX 125",
    "Variant": "BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa LX 125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Vespa LX125",
    "Variant": "125 Sport (Petrol-125cc)"
  },
  {
    "Option": "Vespa Notte 125",
    "Variant": "BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa Notte 125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Vespa RED 125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Vespa SXL 125",
    "Variant": "BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa SXL 125",
    "Variant": "CBS (Petrol-125cc)"
  },
  {
    "Option": "Vespa SXL 125",
    "Variant": "Dual (Petrol-0cc)"
  },
  {
    "Option": "Vespa SXL 125",
    "Variant": "Racing Sixties (Petrol-0cc)"
  },
  {
    "Option": "Vespa SXL 125",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Vespa SXL 125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Vespa SXL 150",
    "Variant": "BS6 (Petrol-149cc)"
  },
  {
    "Option": "Vespa SXL 150",
    "Variant": "Dual (Petrol-0cc)"
  },
  {
    "Option": "Vespa SXL 150",
    "Variant": "Racing Sixties (Petrol-0cc)"
  },
  {
    "Option": "Vespa SXL 150",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Vespa SXL 150 BS4",
    "Variant": "ABS (Petrol-150cc)"
  },
  {
    "Option": "Vespa SXL 150 BS4",
    "Variant": "STD (Petrol-150cc)"
  },
  {
    "Option": "Vespa Typhoon",
    "Variant": "125 (Petrol-125cc)"
  },
  {
    "Option": "Vespa Urban Club 125",
    "Variant": "BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa Urban Club 125",
    "Variant": "CBS (Petrol-125cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "75th Anniversary Edition (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "BS6 (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "CBS (Petrol-125cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "Dual (Petrol-0cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "Pearl White And Azuro Provenza (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "Pearl White And Beige (Petrol-124.45cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Vespa VXL 125",
    "Variant": "STD (Petrol-125cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "75th Anniversary Edition (Petrol-149.5cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "ABS (Petrol-154.8cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "BS6 (Petrol-149cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "Dual (Petrol-0cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "Pearl White And Azuro Provenza (Petrol-149.5cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "Pearl White And Beige (Petrol-149.5cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Vespa VXL 150",
    "Variant": "STD (Petrol-154.8cc)"
  },
  {
    "Option": "Vespa ZX",
    "Variant": "125 (Petrol-0cc)"
  },
  {
    "Option": "Vespa ZX",
    "Variant": "CBS (Petrol-125cc)"
  },
  {
    "Option": "Yahama RXG",
    "Variant": "135 (Petrol-132cc)"
  },
  {
    "Option": "Yamaha RD 350",
    "Variant": "135 (Petrol-132cc)"
  },
  {
    "Option": "Yamaha Aerox 155",
    "Variant": "MotoGP Edition (Petrol-155cc)"
  },
  {
    "Option": "Yamaha Aerox 155",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Yamaha Alba",
    "Variant": "Alloy (Petrol-106cc)"
  },
  {
    "Option": "Yamaha Alba",
    "Variant": "Spoke (Petrol-106cc)"
  },
  {
    "Option": "Yamaha Alpha",
    "Variant": "Disc (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Alpha",
    "Variant": "Drum (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Alpha",
    "Variant": "LE (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Crux",
    "Variant": "Crux (Petrol-106cc)"
  },
  {
    "Option": "Yamaha Crux S",
    "Variant": "STD (Petrol-105.9cc)"
  },
  {
    "Option": "Yamaha Enticer",
    "Variant": "125 (Petrol-123.7cc)"
  },
  {
    "Option": "Yamaha Fazer 125",
    "Variant": "DLX (Petrol-123.7cc)"
  },
  {
    "Option": "Yamaha Fazer 25 (Fazer 250)",
    "Variant": "250 (Petrol-249cc)"
  },
  {
    "Option": "Yamaha Fazer 25 (Fazer 250)",
    "Variant": "ABS (Petrol-249cc)"
  },
  {
    "Option": "Yamaha Fazer 25 (Fazer 250)",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Yamaha Fazer-FI",
    "Variant": "Version 2.0 (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ 16",
    "Variant": "STD (Petrol-153cc)"
  },
  {
    "Option": "Yamaha FZ 25",
    "Variant": "MotoGP Edition (Petrol-249cc)"
  },
  {
    "Option": "Yamaha FZ 25",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Yamaha FZ 25 BS4",
    "Variant": "ABS (Petrol-249cc)"
  },
  {
    "Option": "Yamaha FZ 25 BS4",
    "Variant": "Moto GP Limited Edition (Petrol-249cc)"
  },
  {
    "Option": "Yamaha FZ 25 BS4",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Yamaha FZ FI",
    "Variant": "Version 2.0 (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ S FI (V 2.0)",
    "Variant": "Dual Disc (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ S FI (V 2.0)",
    "Variant": "STD (Petrol-153cc)"
  },
  {
    "Option": "Yamaha FZ-FI V3",
    "Variant": "BS6 (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ-FI V3",
    "Variant": "STD (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ-S (V 2.0)",
    "Variant": "STD. (Petrol-150cc)"
  },
  {
    "Option": "Yamaha FZ-S Fi Version 3.0 BS4",
    "Variant": "STD (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ-X",
    "Variant": "Bluetooth (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ-X",
    "Variant": "Dark Matte Blue (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ-X",
    "Variant": "STD (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZ1",
    "Variant": "1000cc (Petrol-998cc)"
  },
  {
    "Option": "Yamaha FZS 25",
    "Variant": "STD (Petrol-249cc)"
  },
  {
    "Option": "Yamaha FZS-FI V3",
    "Variant": "Dark Knight (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZS-FI V3",
    "Variant": "Dark Knight Bluetooth (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZS-FI V3",
    "Variant": "DLX (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZS-FI V3",
    "Variant": "STD (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZS-FI V3",
    "Variant": "STD Bluetooth (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZS-FI V3",
    "Variant": "Vintage Edition (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZS-FI V3",
    "Variant": "Vintage Edition Bluetooth (Petrol-149cc)"
  },
  {
    "Option": "Yamaha FZS-FI V4",
    "Variant": "Deluxe (Petrol-149cc)"
  },
  {
    "Option": "Yamaha G5",
    "Variant": "Alloy (Petrol-106cc)"
  },
  {
    "Option": "Yamaha G5",
    "Variant": "Spoke (Petrol-106cc)"
  },
  {
    "Option": "Yamaha Gladiator",
    "Variant": "RS (Petrol-123.7cc)"
  },
  {
    "Option": "Yamaha Gladiator",
    "Variant": "SS (Petrol-123.7cc)"
  },
  {
    "Option": "Yamaha Gladiator Graffiti",
    "Variant": "STD (Petrol-123.7cc)"
  },
  {
    "Option": "Yamaha Libero",
    "Variant": "STD (Petrol-105.6cc)"
  },
  {
    "Option": "Yamaha Majesty",
    "Variant": "125 (Petrol-125cc)"
  },
  {
    "Option": "Yamaha MT 01",
    "Variant": "MT01 Sports (Petrol-1670cc)"
  },
  {
    "Option": "Yamaha MT 09 (2016-2020)",
    "Variant": "ABS (Petrol-847cc)"
  },
  {
    "Option": "Yamaha MT 09 (2016-2020)",
    "Variant": "STD BS4 (Petrol-847cc)"
  },
  {
    "Option": "Yamaha MT 15 V2",
    "Variant": "Deluxe (Petrol-155cc)"
  },
  {
    "Option": "Yamaha MT 15 V2",
    "Variant": "MotoGP Edition (Petrol-155cc)"
  },
  {
    "Option": "Yamaha MT 15 V2",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Yamaha MT-15",
    "Variant": "Dark Matte Blue (Petrol-155cc)"
  },
  {
    "Option": "Yamaha MT-15",
    "Variant": "Ice Fluo Vermillion (Petrol-155cc)"
  },
  {
    "Option": "Yamaha MT-15",
    "Variant": "Metallic Black (Petrol-155cc)"
  },
  {
    "Option": "Yamaha MT-15 BS4",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15 V4",
    "Variant": "2023 - Discontinued (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15 V4",
    "Variant": "Dark Knight (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15 V4",
    "Variant": "M (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15 V4",
    "Variant": "M MotoGP Edition (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15 V4",
    "Variant": "M World GP 60th Anniversary (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15 V4",
    "Variant": "Metallic Red (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15 V4",
    "Variant": "Racing Blue And Intensity White (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "ABS (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "Dark Knight (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "Metallic Red (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "Moto GP Limited Edition (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "MotoGP Edition (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "Racing Blue (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "STD 2018 (Petrol-155cc)"
  },
  {
    "Option": "Yamaha R15S",
    "Variant": "Thunder Grey (Petrol-155cc)"
  },
  {
    "Option": "Yamaha Ray Z",
    "Variant": "Precious Edition (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Ray Z",
    "Variant": "STD (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Ray ZR",
    "Variant": "113 (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Ray ZR",
    "Variant": "150 (Petrol-150cc)"
  },
  {
    "Option": "Yamaha Ray ZR",
    "Variant": "Darknight Edition (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Ray ZR",
    "Variant": "Disc (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Ray ZR",
    "Variant": "Drum (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Ray ZR",
    "Variant": "Moto GP Limited Edition (Petrol-113cc)"
  },
  {
    "Option": "Yamaha Ray ZR",
    "Variant": "Street Rally Edition (Petrol-113cc)"
  },
  {
    "Option": "Yamaha RayZR 125 Fi Hybrid",
    "Variant": "Disc (Petrol-125cc)"
  },
  {
    "Option": "Yamaha RayZR 125 Fi Hybrid",
    "Variant": "DLX Disc (Petrol-125cc)"
  },
  {
    "Option": "Yamaha RayZR 125 Fi Hybrid",
    "Variant": "Drum (Petrol-125cc)"
  },
  {
    "Option": "Yamaha RayZR 125 Fi Hybrid",
    "Variant": "MotoGP Edition (Petrol-125cc)"
  },
  {
    "Option": "Yamaha RayZR 125 Fi Hybrid",
    "Variant": "Street Rally (Petrol-125cc)"
  },
  {
    "Option": "Yamaha RX 100 (1985 - 1996)",
    "Variant": "STD (Petrol-98cc)"
  },
  {
    "Option": "Yamaha RX 135",
    "Variant": "STD (Petrol-132cc)"
  },
  {
    "Option": "Yamaha RXZ",
    "Variant": "STD (Petrol-132cc)"
  },
  {
    "Option": "Yamaha Saluto",
    "Variant": "Disc (Petrol-125cc)"
  },
  {
    "Option": "Yamaha Saluto",
    "Variant": "Drum (Petrol-125cc)"
  },
  {
    "Option": "Yamaha Saluto RX",
    "Variant": "RX (Petrol-110cc)"
  },
  {
    "Option": "Yamaha Saluto RX",
    "Variant": "STD (Petrol-110cc)"
  },
  {
    "Option": "Yamaha SS 125",
    "Variant": "SS 125 (Petrol-123cc)"
  },
  {
    "Option": "Yamaha SZ",
    "Variant": "x (Petrol-153cc)"
  },
  {
    "Option": "Yamaha SZ-RR",
    "Variant": "R (Petrol-153cc)"
  },
  {
    "Option": "Yamaha SZ-RR",
    "Variant": "RR (Petrol-153cc)"
  },
  {
    "Option": "Yamaha SZ-RR",
    "Variant": "S (Petrol-153cc)"
  },
  {
    "Option": "Yamaha SZ-RR",
    "Variant": "Standard (Petrol-153cc)"
  },
  {
    "Option": "Yamaha SZ-RR",
    "Variant": "SZ Sports (Petrol-153cc)"
  },
  {
    "Option": "Yamaha SZ-RR",
    "Variant": "Version 2.0 (Petrol-149cc)"
  },
  {
    "Option": "Yamaha SZ-RR",
    "Variant": "X 150 (Petrol-150cc)"
  },
  {
    "Option": "Yamaha Vmax",
    "Variant": "VMAX 1700 (Petrol-1679cc)"
  },
  {
    "Option": "Yamaha WR 155R",
    "Variant": "STD (Petrol-0cc)"
  },
  {
    "Option": "Yamaha YBR 110",
    "Variant": "YBR 110 (Petrol-106cc)"
  },
  {
    "Option": "Yamaha YZF",
    "Variant": "R25 (Petrol-249cc)"
  },
  {
    "Option": "Yamaha YZF R1",
    "Variant": "M (Petrol-998cc)"
  },
  {
    "Option": "Yamaha YZF R1",
    "Variant": "STD BS4 (Petrol-998cc)"
  },
  {
    "Option": "Yamaha YZF R125",
    "Variant": "Alloy (Petrol-149.8cc)"
  },
  {
    "Option": "Yamaha YZF R125",
    "Variant": "Version 1.0 (Petrol-249cc)"
  },
  {
    "Option": "Yamaha YZF R15",
    "Variant": "Version 2.0 (Petrol-149cc)"
  },
  {
    "Option": "Yamaha YZF R15 Movistar",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Yamaha YZF R15 V3 Moto GP Edition",
    "Variant": "STD (Petrol-155cc)"
  },
  {
    "Option": "Yamaha YZF R15S 2015",
    "Variant": "Version 1.0 (Petrol-149cc)"
  },
  {
    "Option": "Yamaha YZF R3",
    "Variant": "STD (Petrol-321cc)"
  },
  {
    "Option": "Yamaha YZF R3 (2015-2017)",
    "Variant": "STD (2015-2017) (Petrol-321cc)"
  },
  {
    "Option": "Yamaha YZF R6",
    "Variant": "YZF R6 (Petrol-599cc)"
  },
  {
    "Option": "Yamaha_FZ_v2_0",
    "Variant": "1 (Petrol-998cc)"
  },
  {
    "Option": "Yamaha_FZ_v2_0",
    "Variant": "6R (Petrol-600cc)"
  },
  {
    "Option": "Yamaha_FZ_v2_0",
    "Variant": "8 (Petrol-779cc)"
  },
  {
    "Option": "YBR 125",
    "Variant": "125 (Petrol-123cc)"
  },
  {
    "Option": "Yezdi Adventure",
    "Variant": "Gloss (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Adventure",
    "Variant": "Matte - Mambo Black (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Adventure",
    "Variant": "Matte - Slick Silver (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Adventure",
    "Variant": "Ranger Camo (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Crimson Dual Tone (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Gallant Grey (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Glacial White (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Hunter Green (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Inferno Red (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Sin Silver (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Smoke Grey (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Roadster",
    "Variant": "Steel Blue (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Scrambler",
    "Variant": "Dual Tone (Petrol-334cc)"
  },
  {
    "Option": "Yezdi Scrambler",
    "Variant": "Single Tone (Petrol-334cc)"
  },
  {
    "Option": "Zontes 350D",
    "Variant": "STD (Petrol-349cc)"
  },
  {
    "Option": "Zontes 350R",
    "Variant": "Black (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350R",
    "Variant": "Blue (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350R",
    "Variant": "White (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350T",
    "Variant": "ADV Champagne (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350T",
    "Variant": "ADV Orange (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350T",
    "Variant": "Champagne (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350T",
    "Variant": "Orange (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350X",
    "Variant": "Black and Gold (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350X",
    "Variant": "Black and Green (Petrol-348cc)"
  },
  {
    "Option": "Zontes 350X",
    "Variant": "Silver and Orange (Petrol-348cc)"
  },
  {
    "Option": "Zontes GK350",
    "Variant": "Black and Blue (Petrol-348cc)"
  },
  {
    "Option": "Zontes GK350",
    "Variant": "Black and Gold (Petrol-348cc)"
  },
  {
    "Option": "Zontes GK350",
    "Variant": "White and Orange (Petrol-348cc)"
  }
]



module.exports = {
  bikeData
};

var data = (JSON); 
data.done( function( msgg) { 
// just do it 
  item=msgg.[1];
  for(var i=0;i<170;i++){
  console.log(item.data[i].stationName)
  }
}); 
data.fail( function( msg ) { 
// just do it 
  console.log("fail        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff what should i do")
});

var JSON={
    "count": 170,
    "data": [
        {
            "stationNo": "C0AD1",
            "stationName": "八里",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AD0",
            "stationName": "三芝",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AD4",
            "stationName": "土城",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "318",
            "stationName": "大安福州山",
            "recTime": "202204271602",
            "rain": 0
        },
        {
            "stationNo": "01A17",
            "stationName": "坪林",
            "recTime": "201911130140",
            "rain": 0
        },
        {
            "stationNo": "C0AD2",
            "stationName": "深坑",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0AD3",
            "stationName": "蘆洲",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AD5",
            "stationName": "鶯歌",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "01A21",
            "stationName": "大豹",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "125",
            "stationName": "中正橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "01A43",
            "stationName": "福山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "01A44",
            "stationName": "大桶山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "01B03",
            "stationName": "五堵",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "01C40",
            "stationName": "石門",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "21C07",
            "stationName": "巴陵",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "21C08",
            "stationName": "高義",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "21C09",
            "stationName": "嘎拉賀",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "21C14",
            "stationName": "霞雲",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "21D15",
            "stationName": "玉峰",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "21D16",
            "stationName": "白石",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "21D17",
            "stationName": "鎮西堡",
            "recTime": "202202220020",
            "rain": 0
        },
        {
            "stationNo": "21D35",
            "stationName": "西丘斯山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "21U11",
            "stationName": "池端",
            "recTime": "202101301100",
            "rain": 0
        },
        {
            "stationNo": "46685",
            "stationName": "五分山",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "46688",
            "stationName": "板橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "46690",
            "stationName": "淡水",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "46691",
            "stationName": "鞍部",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "46692",
            "stationName": "台北",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "46693",
            "stationName": "陽明山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "A0A9M",
            "stationName": "新店",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A51",
            "stationName": "大豹1",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0A52",
            "stationName": "山佳",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A53",
            "stationName": "坪林1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A54",
            "stationName": "四堵",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A55",
            "stationName": "泰平",
            "recTime": "202204270450",
            "rain": 0
        },
        {
            "stationNo": "C0A56",
            "stationName": "福山1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A57",
            "stationName": "桶後",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A58",
            "stationName": "屈尺",
            "recTime": "201804031500",
            "rain": 0
        },
        {
            "stationNo": "C0A59",
            "stationName": "大尖山",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0A86",
            "stationName": "大坪",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A87",
            "stationName": "五指山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A88",
            "stationName": "福隆",
            "recTime": "202204271400",
            "rain": 0
        },
        {
            "stationNo": "C0A89",
            "stationName": "雙溪1",
            "recTime": "202204270630",
            "rain": 0
        },
        {
            "stationNo": "C0A92",
            "stationName": "富貴角",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A93",
            "stationName": "三和",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A94",
            "stationName": "金山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A95",
            "stationName": "鼻頭角",
            "recTime": "202204261930",
            "rain": 1
        },
        {
            "stationNo": "C0A97",
            "stationName": "三貂角",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A98",
            "stationName": "社子",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AH4",
            "stationName": "平等",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AI4",
            "stationName": "石牌",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A9C",
            "stationName": "天母",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AH1",
            "stationName": "永和",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A9D",
            "stationName": "永和(遷站)",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0A9E",
            "stationName": "士林",
            "recTime": "202112241010",
            "rain": 0.5
        },
        {
            "stationNo": "C0A9F",
            "stationName": "內湖",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A9I",
            "stationName": "三重",
            "recTime": "201806271400",
            "rain": 0
        },
        {
            "stationNo": "C0AC4",
            "stationName": "大屯山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AC6",
            "stationName": "三峽",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AC7",
            "stationName": "信義",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C1A63",
            "stationName": "下盆",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0A64",
            "stationName": "石碇",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A65",
            "stationName": "火燒寮",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0A66",
            "stationName": "瑞芳",
            "recTime": "202204270440",
            "rain": 0
        },
        {
            "stationNo": "C0A68",
            "stationName": "五股",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0A71",
            "stationName": "林口",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C1A9N",
            "stationName": "四十份",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C1AC5",
            "stationName": "關渡",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AC8",
            "stationName": "文山",
            "recTime": "202204271600",
            "rain": 0.5
        },
        {
            "stationNo": "CAAH6",
            "stationName": "大安森林",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AG9",
            "stationName": "中和",
            "recTime": "202110181410",
            "rain": 0.5
        },
        {
            "stationNo": "C0AC9",
            "stationName": "中和(遷站)",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0ACA",
            "stationName": "新莊",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "L1A80",
            "stationName": "碧湖",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "L1A81",
            "stationName": "九芎根",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "L1A82",
            "stationName": "十三股",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "L1A83",
            "stationName": "坪林2",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "L1A84",
            "stationName": "太平",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "001",
            "stationName": "湖田國小",
            "recTime": "202204271610",
            "rain": 0
        },
        {
            "stationNo": "002",
            "stationName": "大屯國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "003",
            "stationName": "桃源國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "004",
            "stationName": "北投國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "005",
            "stationName": "陽明高中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "006",
            "stationName": "太平國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "007",
            "stationName": "民生國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "008",
            "stationName": "中正國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "009",
            "stationName": "三興國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "010",
            "stationName": "格致國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "011",
            "stationName": "平等國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "012",
            "stationName": "至善國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "013",
            "stationName": "碧湖國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "014",
            "stationName": "東湖國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "015",
            "stationName": "留公國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "016",
            "stationName": "舊莊國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "017",
            "stationName": "市政中心",
            "recTime": "202204271609",
            "rain": 0
        },
        {
            "stationNo": "018",
            "stationName": "博嘉國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "019",
            "stationName": "北政國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "020",
            "stationName": "長安國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "06",
            "stationName": "埤腹",
            "recTime": "202204271536",
            "rain": 0
        },
        {
            "stationNo": "09",
            "stationName": "雙園",
            "recTime": "202204271536",
            "rain": 0
        },
        {
            "stationNo": "14",
            "stationName": "中洲",
            "recTime": "202204271436",
            "rain": 0
        },
        {
            "stationNo": "15",
            "stationName": "玉成",
            "recTime": "202204271536",
            "rain": 0
        },
        {
            "stationNo": "22",
            "stationName": "建國",
            "recTime": "202204271536",
            "rain": 0
        },
        {
            "stationNo": "31",
            "stationName": "福德",
            "recTime": "202204271537",
            "rain": 0
        },
        {
            "stationNo": "35",
            "stationName": "奇岩",
            "recTime": "202204271537",
            "rain": 0
        },
        {
            "stationNo": "41",
            "stationName": "雙溪",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "301",
            "stationName": "南港舊莊里",
            "recTime": "202204271602",
            "rain": 0
        },
        {
            "stationNo": "302",
            "stationName": "南港茶製場",
            "recTime": "202204271603",
            "rain": 0
        },
        {
            "stationNo": "303",
            "stationName": "南港九如里",
            "recTime": "202204271604",
            "rain": 0
        },
        {
            "stationNo": "304",
            "stationName": "內湖安泰里",
            "recTime": "202204271605",
            "rain": 0
        },
        {
            "stationNo": "305",
            "stationName": "士林溪山里",
            "recTime": "202204271606",
            "rain": 0
        },
        {
            "stationNo": "306",
            "stationName": "士林明德樂園",
            "recTime": "202204271607",
            "rain": 0
        },
        {
            "stationNo": "307",
            "stationName": "士林菁山里",
            "recTime": "202204271608",
            "rain": 0
        },
        {
            "stationNo": "308",
            "stationName": "士林擎天崗",
            "recTime": "202204271609",
            "rain": 0
        },
        {
            "stationNo": "309",
            "stationName": "北投貴子坑",
            "recTime": "202204271510",
            "rain": 0
        },
        {
            "stationNo": "310",
            "stationName": "中山劍南路",
            "recTime": "202204271601",
            "rain": 0
        },
        {
            "stationNo": "311",
            "stationName": "北投竹子湖",
            "recTime": "202204271602",
            "rain": 0
        },
        {
            "stationNo": "312",
            "stationName": "北投小油坑",
            "recTime": "202204271603",
            "rain": 0
        },
        {
            "stationNo": "313",
            "stationName": "挹翠山莊",
            "recTime": "202204271604",
            "rain": 0
        },
        {
            "stationNo": "315",
            "stationName": "文山貓空",
            "recTime": "202204271609",
            "rain": 0
        },
        {
            "stationNo": "314",
            "stationName": "文山指南里",
            "recTime": "202204271608",
            "rain": 0
        },
        {
            "stationNo": "401",
            "stationName": "望星橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "402",
            "stationName": "白馬山莊",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "403",
            "stationName": "中和橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "404",
            "stationName": "磺溪橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "405",
            "stationName": "宜興橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "317",
            "stationName": "信義四獸山",
            "recTime": "202204271601",
            "rain": 0
        },
        {
            "stationNo": "319",
            "stationName": "內湖金面山",
            "recTime": "202204271603",
            "rain": 0
        },
        {
            "stationNo": "320",
            "stationName": "內湖大湖里",
            "recTime": "202204271512",
            "rain": 0
        },
        {
            "stationNo": "321",
            "stationName": "北投稻香里",
            "recTime": "202204271604",
            "rain": 0
        },
        {
            "stationNo": "322",
            "stationName": "中山劍潭山",
            "recTime": "202204271601",
            "rain": 0
        },
        {
            "stationNo": "323",
            "stationName": "文山仙跡岩",
            "recTime": "202204271607",
            "rain": 0
        },
        {
            "stationNo": "324",
            "stationName": "北投水磨坑溪",
            "recTime": "202204271601",
            "rain": 0
        },
        {
            "stationNo": "325",
            "stationName": "士林猴洞溪(莊頂路)",
            "recTime": "202204271557",
            "rain": 0
        },
        {
            "stationNo": "326",
            "stationName": "士林猴洞溪(至善路)",
            "recTime": "202204271356",
            "rain": 0
        },
        {
            "stationNo": "327",
            "stationName": "內湖大溝溪",
            "recTime": "202204271558",
            "rain": 2
        },
        {
            "stationNo": "021",
            "stationName": "富德公墓",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AH7",
            "stationName": "松山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "A0A46",
            "stationName": "文化大學",
            "recTime": "202204271550",
            "rain": 0
        },
        {
            "stationNo": "A0A01",
            "stationName": "台灣大學",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "82A75",
            "stationName": "文山茶改",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AH8",
            "stationName": "深坑",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "050",
            "stationName": "五常國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "051",
            "stationName": "潭美國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "120",
            "stationName": "石門水庫",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "053",
            "stationName": "南港高工",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "121",
            "stationName": "大豹2",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "054",
            "stationName": "仁愛國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "122",
            "stationName": "福山2",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "055",
            "stationName": "興華國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "123",
            "stationName": "大桶山1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "124",
            "stationName": "坪林3",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "126",
            "stationName": "五堵",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "127",
            "stationName": "竹子湖1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "128",
            "stationName": "熊空山",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "129",
            "stationName": "碧湖1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "130",
            "stationName": "石碇1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "131",
            "stationName": "三峽1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "132",
            "stationName": "瑞芳1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "133",
            "stationName": "火燒寮1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "134",
            "stationName": "社后橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "135",
            "stationName": "三貂嶺",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "136",
            "stationName": "富貴角1",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "138",
            "stationName": "平溪活動中心",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "139",
            "stationName": "平溪旅遊中心",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "140",
            "stationName": "暖江橋",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "141",
            "stationName": "瑞亭國小",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "142",
            "stationName": "復興國小",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "022",
            "stationName": "萬華國中",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "025",
            "stationName": "永建國小",
            "recTime": "202204271600",
            "rain": 0
        }
    ]
}

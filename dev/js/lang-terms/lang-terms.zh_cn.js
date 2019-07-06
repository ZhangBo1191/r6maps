'use strict';

var R6MLangTermsSimplifiedChinese = (function(R6MLangTerms, undefined) {
  var name = 'zh_cn',
    terms = {
      general: {
        pageTitle: '',
        pageTitleSelectMap: 'R6Maps.com - 选择地图',
        pageTitleStart: '',
        cameraViewCaption: '{floorName} 摄像头视角',
        shortcutTip: 'Shortcut: {shortcut}',
        menu: '列表',
        about: '关于',
        languageHeader: '语言',
        optionsHeader: '设置',
        labelLosOpacity: '摄像头视界不透明度',
        labelPercent: '{int}%',
        labelLosDefault: '(Default)',
        labelLos105: '(Huh?)',
        labelLos110: '(Ludicrous!）',
        labelRoomLabelStyle: '位置标签样式',
        labelNumberFloorsToDisplay: '楼层显示数量',
        lockPanning: '楼层同步',
        lockZooming: '锁定缩放',
        fullScreen: '全屏',
        enableScreenshots: '启用截屏',
        contributions: '贡献',
        supportSiteNote: '如果感觉本站对您有帮助，可以通过下方捐赠链接支持本项目。',
        latestUpdate: '2017年2月更新'
      },
      roomLabelStyles: {
        Dark: '黑色背景',
        Light: '透明背景(默认)',
        DarkAndLarge: '大号字体&黑色背景',
        LightAndLarge: '大号字体&透明背景',
        DarkAndSmall: '小号字体&黑色背景',
        LightAndSmall: '小号字体&透明背景',
        DisplayNone: '关闭'
      },
      floorDisplayOptions: {
        one: '1 - 单层',
        two: '2 - 左右分栏',
        four: '4 - 网格'
      },
      selectMaps: {
        selectAMap: '选择地图',
        homeLink: '选择地图'
      },
      compass: {
        letterN: '北',
        letterE: '东',
        letterS: '南',
        letterW: '西'
      },
      floorNames: {
        basement: { full: '地下', short: 'B' },
        firstFloor: { full: '1层', short: '1' },
        secondFloor: { full: '2层', short: '2' },
        thirdFloor: { full: '3层', short: '3' },
        fourthFloor: { full: '4层', short: '4' },
        roof: { full: '屋顶', short: 'R' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: '炸弹',
        hostageShort: 'H',
        hostage: '人质',
        secureShort: 'S',
        secure: '肃清威胁',
        showAll: '显示全部'
      },
      legend: {
        breakableWalls: '可破坏墙面',
        breakableFloorTraps: '可破坏地板',
        ceilingHatches: '可破坏天花板',
        lineOfSightWalls: '可提供视野的墙面',
        lineOfSightFloors: '可提供视野的地面',
        droneTunnels: '无人机隧道',
        objectives: '目标',
        insertionPoints: '出生点',
        securityCameras: '摄像头',
        skylights: '天窗',
        onFloorAboveOrBelow: '梯子通向上层或下层',
        cameraLineOfSight: '摄像头视界',
        ladders: '梯子'
      },
      stats: {
        title: 'R6Maps.com - Stats',
        titleBeta: 'R6Maps.com - Stats BETA',
        headerMain: 'Stats',
        headerMainBeta: 'Stats BETA',
        headerFilters: '查询条件',
        headerMap: '地图统计数据',
        headerOperators: '特勤干员',
        headerAboutAndOptions: '概述/选项',
        headerWinReasons: '{role} 获胜原因',
        labelSeason: '赛季',
        labelPlatform: '平台',
        labelMap: '地图',
        labelGameMode: '模式',
        labelObjectiveLocation: '防守点位',
        allOption: '所有地图',
        seasonWithNumber: '赛季 {0}',
        objectiveRoomDivider: ' / ',
        ellipsis: '...',
        loadButtonText: '查询',
        averageRoundLength: '每轮次平均时长',
        numberSeconds: '{num} 秒',
        totalRoundsPlayed: '总对战次数',
        numberRounds: '{num} 局',
        tableHeaderAttackers: '进攻方',
        tableHeaderAttackersSingular: '进攻方',
        tableHeaderDefenders: '防守方',
        tableHeaderDefendersSingular: '防守方',
        tableHeaderName: '干员姓名',
        tableHeaderPickRate: '使用率',
        tableHeaderWinRate: '胜率',
        tableHeaderSurvivalRate: '存活率',
        tableHeaderKillsPerDeath: '战损比',
        tableHeaderKillsPerRound: '场均击杀',
        tableHeaderTotalRounds: '使用次数',
        tableHeaderAllRanks: '所有排名',
        tableNoteHeader: '说明:',
        tableNotePickRate: '基于排名的使用率为近似值，通过相应游戏场次计算获得。',
        tableNoteHeaders: '可点击表头进行排序',
        tableNoteWarningText: '橙色数据样本较少，仅供参考。',
        tableFewRoundsNote: '游戏场次样本较少，该数据仅供参考。',
        averagesAndTotals: '均值/总数',
        percentageFormat: '{num}%',
        instructions: '请设置查询条件并单击 \'查询\' 以获取结果.',
        noResults: '未能找到结果，请修改查询条件并重试。',
        error: '加载数据出错，请稍后重试。',
        chartHeader: '{role} 的 {stat}',
        loadedInfoLine1AllPlatforms: '{season} 赛季所有平台统计数据',
        loadedInfoLine1SinglePlatform: '{season} 赛季 {platform} 平台统计数据',
        loadedInfoLine2AllMapsAllModes: '所有地图 | 所有模式',
        loadedInfoLine2SingleMapAllModes: '{map} | 所有模式',
        loadedInfoLine2AllMapsSingleMode: '所有地图 | {mode}',
        loadedInfoLine2SingleMapSingleModeAllLocations: '{map} | {mode} | 所有位置',
        loadedInfoLine2SingleMapSingleModeSingleLocation: '{map} | {mode} | {location}',
        aboutLinksHeader: '相关链接',
        aboutR6MapsHome: 'R6Maps.com 主页',
        aboutR6MapsAbout: '关于 R6Maps.com',
        aboutBasedOnUbisoft: 'Ubisoft Data Peek 项目',
        winRatesForMap: '地图{map}的胜率',
        detailedStatsLink: '查看详细统计数据'
      },
      statsRoundWinReasons: {
        allTeamsDead: '歼灭所有敌方干员',
        attackersEliminated: '歼灭所有敌方干员',
        attackersKilledHostage: '人质死亡',
        attackersSurrendered: '投降',
        bombDeactivated_OneBomb: '炸弹解除',
        bombExploded: '炸弹爆炸',
        defendersEliminated: '歼灭所有敌方干员',
        defendersKilledHostage: '人质死亡',
        defendersSurrendered: '投降',
        defuserDeactivated: '拆弹器失效',
        hostageExtracted: '人质获救',
        noEnemies: '没有敌人',
        objectiveCaptured: '肃清威胁',
        objectiveProtected: '保卫成功',
        timeExpired: '超时'
      },
      ranks: {
        unranked: '未排名',
        copper: '紫铜',
        bronze: '青铜',
        silver: '白银',
        gold: '黄金',
        platinum: '白金',
        diamond: '钻石'
      },
      platforms: {
        pc: 'PC',
        xboxone: 'Xbox One',
        ps4: 'PS4'
      },
      seasons: {
        1: 'Black Ice',
        2: 'Dust Line',
        3: 'Skull Rain',
        4: 'Red Crow',
        5: 'Velvet Shell',
        6: 'Operation Health',
        7: 'Blood Orchid'
      },
      operators: {
        ash: 'Ash',
        bandit: 'Bandit',
        blackbeard: 'Blackbeard',
        blitz: 'Blitz',
        buck: 'Buck',
        capitao: 'Capitao',
        castle: 'Castle',
        caveira: 'Caveira',
        doc: 'Doc',
        echo: 'Echo',
        ela: 'Ela',
        frost: 'Frost',
        fuze: 'Fuze',
        gignRecruit: 'GIGN 新进干员',
        glaz: 'Glaz',
        gsg9Recruit: 'GSG9 新进干员',
        hibana: 'Hibana',
        iq: 'IQ',
        jackal: 'Jackal',
        jager: 'Jager',
        kapkan: 'Kapkan',
        lesion: 'Lesion',
        mira: 'Mira',
        montagne: 'Montagne',
        mute: 'Mute',
        pulse: 'Pulse',
        rook: 'Rook',
        sasRecruit: 'SAS 新进干员',
        sledge: 'Sledge',
        smoke: 'Smoke',
        spetsnazRecruit: 'Spetsnaz 新进干员',
        swatRecruit: 'SWAT 新进干员',
        tachanka: 'Lord Tachanka',
        thatcher: 'Thatcher',
        thermite: 'Thermite',
        twitch: 'Twitch',
        valkyrie: 'Valkyrie',
        ying: 'Ying'
      },
      mapNames: {
        bank: '银行',
        bartlett: '巴特雷特大学',
        border: '边境',
        chalet: '木屋',
        club: '俱乐部会所',
        consulate: '领事馆',
        coastline: '海岸线',
        favela: '贫民窟',
        hereford: '赫里福基地',
        house: '芝加哥豪宅',
        kanal: '运河',
        kafe: '杜斯妥也夫斯基<br/>咖啡馆',
        oregon: '奥勒冈乡间屋宅',
        plane: '总统专机',
        skyscraper: '摩天大楼',
        themepark: '主题乐园',
        tower: '塔楼',
        yacht: '游艇'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: '泊车柜台',
          spawnBackAlley: '巷弄出入口',
          printerRoom: '列印室',
          parkingLot: '泊车柜台',
          boulevard: '大道',
          jewelryFront: '首饰柜台',
          plaza: '广场',
          mainEntrance: '主要入口',
          garageRamp: '车库坡道',
          exteriorParking: '外部停车场',
          garageRoof: '车库屋顶',
          alleyAccess: '巷弄出入口',
          backAlleyRooftop: '后巷屋顶',
          backAlley: '后巷',
          highRoof: '上层屋顶',
          lowRoof: '下层屋顶',
          vault: '金库',
          goldVault: '黄金保险库',
          serverRoomStairs: '机房楼梯',
          serverRoom: '机房',
          CCTVRoom: '闭路电视室',
          loadingDock: '装卸台',
          secureHallway: '保全过道',
          sewer: '地道',
          lockers: '寄物柜区',
          vaultLobby: '金库门厅',
          vaultEntrance: '金库入口',
          mainStairway: '主台阶',
          bankGarage: '银行车库',
          elevators: '电梯',
          tellersOffice: '柜台人员<br/>办公室',
          archives: '档案室',
          tellers: '办事柜台',
          loanOffice: '贷款处',
          officeHallway: '办公室过道',
          skylightStairwell: '透天楼梯间',
          lobby: '门厅',
          openArea: '开阔区',
          staffRoom: '行员休息室',
          electricalRoom: '电气室',
          adminOffice: '管理处',
          ATMs: '提款机',
          executiveHallway: '主管过道',
          frontDesk: '接待厅',
          executiveLounge: '贵宾室<br/>（主管休息室）',
          CEOOffice: '执行长办公室',
          janitorCloset: '传达室',
          hallway: '过道',
          terrace: '露台',
          stockTradingRoom: '股票交易处',
          conferenceRoom: '讨论室'
        },
        bartlett: {
          archwayHall: '拱廊厅',
          archwaylHallway: '',
          backAlley: '后巷',
          bathroom: '浴室',
          campusField: '运动场',
          classroom: '教室',
          coatRoom: '衣帽间',
          compassHallway: '园厅过道',
          courtyard: '庭院',
          centralHallway: '中央过道',
          diningRoom: '饭厅',
          eastBalcony: '东侧阳台',
          eastCorridor: '东侧廊道',
          eastStairs: '东侧<br/>楼梯',
          festival: '展览场',
          frontEntrance: '前方入口',
          frontOffice: '办事处',
          frontPatio: '前方天井',
          gardenPass: '庭院<br/>引道',
          kitchen: '厨房',
          lobby: '门厅',
          lounge: '休息室',
          lowerLibrary: '下层图书馆',
          mainGate: '大门',
          mainOffice: '主办公室',
          modelHall: '模型厅',
          pantry: '食品室',
          parking: '停车场',
          pianoRoom: '钢琴室',
          readingRoom: '阅览室',
          roof: '屋顶',
          rowingMuseum: '划船博物馆',
          serviceRoom: '服务室',
          terrace: '露台',
          trophyRoom: '奖杯陈列室',
          upperLibrary: '上层图书馆',
          vistaHallway: '景观厅<br/>过道',
          westBalcony: '西侧阳台',
          westCorridor: '西侧廊道'
        },
        border: {
          armoryLockers: '军械<br/>储物柜',
          tellers: '办事柜台',
          ventilationRoom: '通风<br/>机房',
          exitHallway: '出口过道',
          supplyCorridor: '材料室<br/>廊道',
          detention: '拘留室',
          customsInspection: '验关台',
          customsDesk: '验关<br/>服务台',
          centralStairs: '中央楼梯',
          serverRoom: '机房',
          supplyRoom: '材料室',
          workshop: '工作间',
          mainLobby: '主大厅',
          bathroom: '浴室',
          waitingRoom: '等候室',
          eastStairs: '东侧<br/>楼梯',
          passportCheck: '护照检查',
          archives: '档案室',
          offices: '办公室',
          officesHallway: '办公室<br/>过道',
          fountain: '喷水池',
          mainHallway: '主过道',
          armoryDesk: '军械<br/>作业台',
          securityRoom: '警卫室',
          breakRoom: '茶水间',
          spawnEastVehicleEntrance: '东侧<br/>车辆入口',
          spawnValley: '谷地',
          spawnWestVehicleExit: '西侧<br/>车辆出口',
          westTower: '西侧塔楼',
          pedestrianExit: '行人出口',
          valley: '谷地',
          parkingLotEntrance: '停车场<br/>入口',
          parkingLot: '停车场',
          westRoad: '西侧道路',
          vehicleCustoms: '车辆验关',
          crashScene: '车祸现场',
          eastRoad: '东侧道路',
          pedestrianEntrance: '行人入口',
          pedestrianCustoms: '行人验关',
          watchTower: '瞭望塔',
          eastAlley: '东侧小径',
          parkingLotAlley: '停车场<br/>小径',
          northBalcony: '北侧阳台',
          eastBalcony: '东侧阳台',
          westBalcony: '西侧<br/>阳台',
          southBalcony: '南侧阳台',
          roof: '屋顶'
        },
        chalet: {
          spawnFrontYard: '前院',
          spawnCampfire: '营火',
          spawnCliffside: '崖侧',
          spawnLakeside: '湖边',
          libraryStairs: '书房楼梯',
          snowmobileGarageCorridor: '雪橇车库廊道',
          snowmobileGarage: '雪橇<br/>车库',
          greatRoomStairs: '大厅<br/>楼梯',
          storageRoom: '贮藏室',
          wineCellar: '酒窖',
          wineStock: '酒储室',
          basementHallway: '地下室过道',
          backyardStairs: '后院楼梯',
          mainStairs: '主楼梯',
          mainGarage: '主车库',
          garageEntrance: '主车库<br/>入口',
          westEntrance: '西侧入口',
          gamingRoomHallway: ' 娱乐室<br/>过道',
          gamingRoom: '娱乐室',
          bar: '吧台',
          greatRoom: '大厅',
          diningRoom: '饭厅',
          mainEntrance: '主要入口',
          trophyRoom: '奖杯陈列室',
          kitchenHallway: '厨房<br/>过道',
          kitchen: '厨房',
          libraryHallway: '书房过道',
          libraryEntrance: '书房<br/>入口',
          library: '书房',
          bedroomTerrace: '卧室<br/>露台',
          fireplaceHallway: '壁炉<br/>过道',
          bedroomHallway: '卧室<br/>过道',
          masterBathroom: '主卧浴室',
          masterBedroom: '主卧室',
          office: '办公室',
          woodenTrail: '木板步道',
          campfireWood: '营火木堆',
          backyard: '后院',
          gazeebo: '凉亭',
          cliffsideStairs: '崖侧楼梯',
          cliffsideWoods: '崖侧树林',
          backyardPatio: '后院天井',
          officeBalcony: '办公室<br/>阳台',
          helipadTrail: '直升机停机坪<br/>步道',
          helipad: '直升机停机坪',
          frontYardPatio: '前院天井',
          frontYard: '前院',
          bathroomBalcony: '浴室<br/>阳台',
          libraryBalcony: '书房<br/>阳台',
          bedroomBalcony: '卧室<br/>阳台',
          snowmobiles: '雪橇车'
        },
        club: {
          spawnMainEntrance: '大门',
          spawnShippingDocks: '装卸码头',
          spawnWarehouse: '仓库',
          spawnConstructionSite: '建筑工地',
          easternSubroof: '东侧屋顶<br/>下层',
          constructionSite: '建筑工地',
          container: '货柜',
          graffitiArea: '涂鸦区',
          recreationArea: '休憩区',
          junkyard: '废物堆积场',
          VIPParking: '贵宾停车位',
          mainGate: '大门',
          parking: '停车场',
          kennels: '狗舍',
          trash: '垃圾场',
          centralSubroof: '中央屋顶<br/>下层',
          easternRoof: '东侧屋顶',
          centralRoof: '中央屋顶',
          westernRoof: '西侧屋顶',
          balcony: '阳台',
          escapeTunnel: '逃生<br/>通道',
          arsenalRoom: '武器室',
          basementHallway: '地下室过道',
          memorialRoom: '纪念品室',
          utilityRoom: '杂物间',
          oilPit: '油场',
          centralStairs: '中央<br/>楼梯',
          church: '教堂',
          frontPorch: '前方走廊',
          garage: '车库',
          lobby: '门厅',
          stockRoom: '储藏室',
          garageStorage: '车库<br/>贮藏室',
          lounge: '休息室',
          bar: '吧台',
          centralHallway: '中央过道',
          kitchen: '厨房',
          kitchenEntrance: '厨房<br/>入口',
          westernHallway: '西侧<br/>过道',
          stripClub: '脱衣舞厅',
          junkyardEntrance: '废物<br/>堆积场<br/>入口',
          sideEntrance: '侧边入口',
          changingRoom: '更衣室',
          bedroom: '卧室',
          bathroom: '浴室',
          bedroomHallway: '卧室过道',
          logisticOffice: '后勤<br/>办公室',
          gym: '健身房',
          secretStash: '秘密<br/>藏身处',
          CCTVRoom: '闭路电视室',
          cashRoom: '现金室',
          easternStairs: '东侧<br/>楼梯'
        },
        consulate: {
          spawnRiotBarricade: '镇暴路障',
          spawnPoliceLine: '警卫封锁线',
          spawnGasStation: '加油站',
          spawnSideEntrance: '侧边入口',
          exitStairs: '逃生梯',
          garage: '车库',
          basementCorridor: '地下室廊道',
          securityRoom: '警卫室',
          cafeteria: '餐厅',
          mainStairs: '主楼梯',
          lockerHallway: '更衣室<br/>过道',
          serviceStairs: '服务人员楼梯',
          electricRoom: '电气室',
          storageRoom: '贮藏室',
          archives: '档案室',
          archivesCorridor: '档案室<br/>廊道',
          pressRoom: '新闻室',
          westCorridor: '西侧廊道',
          publicBathroom: '公共<br/>浴室',
          antechamber: '前厅',
          lobby: '门厅',
          eastCorridor: '东侧廊道',
          tellers: '办事柜台',
          visaOffice: '签证处',
          visaEntrance: '签证处<br/>入口',
          frontDoor: '前门',
          balcony: '阳台',
          copyRoom: '影印室',
          cabinet: '陈列室',
          administrationOffice: '管理处',
          breakRoom: '茶水间',
          frontOffice: '办事处',
          meetingRoom: '会议室',
          hallway: '过道',
          consulFrontDesk: '领事<br/>接待厅',
          privateBathroom: '私人浴室',
          waitingRoom: '等候室',
          consulateOffice: '领事<br/>办公室',
          garageWay: '车库通道',
          courtyard: '庭院',
          backCourtyard: '后方庭院',
          sideEntrance: '侧边入口',
          dumpster: '垃圾箱',
          parking: '停车场',
          gardens: '庭园',
          fountain: '喷水池',
          emergencyExit: '紧急<br/>逃生<br/>出口',
          garageRoof: '车库<br/>屋顶',
          memorialGarden: '纪念庭园',
          policeLine: '警卫封锁线',
          riotBarracade: '镇暴路障',
          eastFrontYard: '东侧前院',
          westFrontYard: '西侧前院',
          frontAlley: '前巷',
          buildingRoof: '领事馆屋顶'
        },
        coastline: {
          aquarium: '水族馆',
          backAlley: '后巷<br/>走道',
          balcony: '阳台',
          bathroom: '浴室',
          billiardsRoom: '撞球间',
          blueBar: '蔚蓝酒吧',
          cantina: '酒吧',
          courtyard: '庭院',
          djBooth: 'DJ 台',
          garageRoof: '车库屋顶',
          hallOfFame: '名人堂',
          hallway: '走廊',
          hookahDeck: '水烟天台',
          hookahLounge: '水烟间',
          kitchen: '厨房',
          mainEntrance: '主要<br/>入口',
          mainLobby: '主大厅',
          northStairs: '北方<br/>楼梯',
          office: '办公室',
          penthouse: '顶层房间',
          pool: '泳池',
          poolEntrance: '泳池入口',
          poolSide: '泳池边',
          rooftop: '屋顶',
          ruins: '废墟',
          securityRoom: '控制室',
          serviceEntrance: '维修入口<br/>（服务入口）',
          southHallway: '南方走廊',
          southPromenade: '南海滨步道',
          southStairs: '南方楼梯',
          sunriseBar: '日升酒吧',
          sunRoom: '阳光房',
          theater: '电影院',
          terrace: '平台',
          toilets: '厕所',
          vipLounge: '贵宾休息室',
          walkway: '走道'
        },
        favela: {
          packagingRoom: '包装室',
          footballApartment: '美式足球<br/>公寓',
          armoryRoom: '军械室',
          auntsApartment: '阿姨<br/>公寓',
          auntsBedroom: '阿姨卧室',
          growRoom: '植物<br/>成长间',
          bikersApartment: '骑士<br/>公寓',
          methLab: '制毒室',
          footballBedroom: '美式足球<br/>卧室',
          footballOffice: '美式足球<br/>办公室',
          bikersBedroom: '骑士<br/>卧室',
          backStairs: '后方楼梯',
          auntsHall: '阿姨主厅',
          kidsRoom: '小孩房间',
          mainStairs: '主楼梯',
          stairHall: '楼梯间',
          roof: '顶楼',
          laundryRoom: '洗衣间',
          vaultRoom: '金库',
          bikersGarage: '骑士<br/>车库',
          backAlley: '后巷走道',
          schoolAlley: '学校走道',
          footballPitch: '美式足球场',
          market: '市场',
          marketAlley: '市场<br/>走道',
          schoolRooftops: '学校<br/>屋顶',
          street: '街道',
          rooftops: '屋上',
          courtyard: '中庭',
          accessAlley: '连接走道',
          shop: '商店',
          marketRooftops: '市场屋顶'
        },
        hereford: {
          shootingRange: '靶场',
          mainStairs: '主楼梯',
          kitchen: '厨房',
          diningRoom: '饭厅',
          masterBedroom: '主卧室',
          laundryRoom: '洗衣间',
          bathroom: '浴室',
          workshop: '工作间',
          rooftop: '屋顶'
        },
        house: {
          spawnConstructionSite: '建筑工地<br/>（施工场）',
          spawnRiverDocks: '河岸码头',
          spawnAPCArea: '管制区域',
          spawnSideStreet: '侧街',
          depot: '库房',
          trainingRoom: '训练室',
          kitchenStairs: '厨房<br/>楼梯',
          sideStairs: '侧边<br/>楼梯',
          laundryRoom: '洗衣间',
          garage: '车库',
          livingRoom: '客厅',
          backEntrance: '后方入口',
          lobby: '门厅',
          kitchen: '厨房',
          office: '办公室',
          diningRoom: '饭厅',
          workshop: '工作间',
          kidsBedroom: '儿童卧室',
          upperHallway: '上方<br/>过道',
          lobbyStairs: '门厅<br/>楼梯',
          walkIn: '更衣间',
          masterBedroom: '主卧室',
          bathroom: '浴室',
          sideStreet: '侧街',
          garageEntrance: '车库入口',
          garden: '庭园',
          backAlley: '后巷',
          patio: '天井',
          jacuzzi: '按摩池',
          basementStairs: '地下室楼梯',
          treehouseAlley: '树屋<br/>小径',
          frontYard: '前院',
          frontStreet: '前街',
          frontPorch: '前方走廊',
          backPorch: '后方走廊',
          backPorchTop: '后方走廊顶部',
          frontPorchTop: '前方走廊顶部',
          rooftop: '屋顶'
        },
        kanal: {
          spawnFloatingDock: '浮动船坞',
          spawnSailboats: '帆船',
          spawnConstructionSite: '建筑工地',
          boatGarage: '船只场库',
          boatSupplies: '船只材料区',
          pipes: '渗漏的管线',
          boatSuppliesHallway: '船只<br/>材料区<br/>过道',
          lockerRoom: '更衣室',
          coastGuardStairs: '海巡队<br/>楼梯',
          showers: '淋浴间',
          showersCorridor: '淋浴间<br/>廊道',
          loadingDock: '装卸码头',
          machineHallway: '机器<br/>过道',
          controlCenterStairs: '控制中心<br/>楼梯',
          holdingRoom: '保藏室',
          holdingRoomHallway: '保藏室<br/>过道',
          radio: '无线电室',
          coastGuardOffice: '海巡队<br/>办公室',
          archives: '档案室',
          coastGuardHall: '海巡队<br/>过道',
          mainEntrance: '主要入口',
          lounge: '休息室',
          bridge: '桥梁',
          modelRoom: '模型室',
          securityRoom: '警卫室',
          projectorRoom: '放映室',
          mapsOffice: '地图办公室',
          mapsOfficeHallway: '地图办公室<br/>过道',
          kitchen: '厨房',
          cafeteria: '餐厅',
          plantsHallway: '工厂过道',
          thirdFloorExit: '3楼<br/>逃生口',
          controlRoom: '控制室',
          electricRoom: '电气室',
          controlRoomHallway: '控制房过道',
          serverRoom: '机房',
          lockgate: '闸门',
          quayContainers: '码头货柜',
          lockgateTunnel: '闸门隧道',
          waterWalkway: '水道',
          quayConstruction: '码头工地',
          constructionSite: '建筑工地',
          constructionEntrance: '工地<br/>入口',
          parkingAlley: '停车场小径',
          parkingEntrance: '停车场<br/>入口',
          middleRoad: '中间道路',
          forkliftAlley: '升降机<br/>小径',
          frontLawn: '前方草坪',
          basementStairs: '地下室楼梯',
          coastGuardRoof: '海巡队屋顶',
          bridgeRoof: '桥梁顶',
          roofBrickPile: '屋顶堆砖',
          balcony: '阳台',
          controlCenterRoof: '控制中心屋顶',
          dockStairs: '码头楼梯',
          parking: '停车场',
          boatCrane: '船只起重机',
          mapArchives: '地图<br/>档案室'
        },
        kafe: {
          riverDocks: '河岸码头',
          christmasMarket: '耶诞集市',
          park: '停车区小径',
          laundryRoom: '洗衣间',
          bakery: '烘焙坊',
          diningRoom: '饭厅',
          museumEntrance: '博物馆入口',
          miningRoom: '矿产展览室',
          trainMuseum: '火车博物馆',
          mainCorridor: '主廊道',
          readingRoomCorridor: '阅览室廊道',
          readingRoom: '阅览室',
          fireplaceHall: '壁炉厅',
          cigarShop: '雪茄店',
          cigarLounge: '雪茄吧',
          bar: '吧台',
          barBackstore: '吧台后方商店',
          washrooms: '洗手间',
          cocktailLounge: '酒吧间',
          cocktailLoungeEntrance: '酒吧间<br/>入口',
          westMainStreet: '西侧主街',
          mainStreet: '主街',
          eastMainStreet: '东侧主街',
          bakeryParking: '烘焙坊<br/>停车场',
          bakeryRoof: '烘焙坊屋顶',
          cafeRoofTop: '咖啡馆屋顶',
          terrace: '露台',
          backAlley: '后巷',
          garage: '车库'
        },
        oregon: {
          spawnJunkyard: '废物堆积场',
          spawnStreet: '街道',
          spawnConstructionSite: '建筑工地',
          towerStairs: '瞭望塔<br/>楼梯',
          boilerRoom: '锅炉室',
          electricRoom: '电气室',
          bunkerEntrance: '碉堡入口',
          bunker: '碉堡',
          basementCorridor: '地下室<br/>廊道',
          supplyRoom: '材料室',
          laundryRoom: '洗衣间',
          laundryStorage: '洗衣<br/>贮藏室',
          laundryStairs: '洗衣<br/>楼梯',
          office: '办公室',
          diningHall: '食堂',
          diningHallCorridor: '食堂廊道',
          showers: '淋浴间',
          kitchen: '厨房',
          bathroom: '浴室',
          dormStairs: '宿舍楼梯',
          pantry: '食品室',
          bathroomCorridor: '浴室廊道',
          classroom: '教室',
          lobby: '门厅',
          mainStairs: '主楼梯',
          meetingHall: '会议厅',
          rearStage: '舞台后方',
          garage: '车库',
          officeStorage: '办公<br/>贮藏室',
          kidsDorm: '儿童宿舍',
          dormMainHall: '宿舍正厅',
          smallDorms: '小型宿舍',
          armoryCorridor: '军械室廊道',
          masterBedroom: '主卧室',
          armory: '军械室',
          walkIn: '更衣间',
          attic: '阁楼',
          watchTower: '瞭望塔',
          busYard: '巴士停车场',
          junkyard: '废物堆积场',
          farmlands: '农田',
          shootingRange: '靶场',
          constructionSite: '建筑工地',
          parking: '停车场',
          mainEntrance: '主要入口',
          street: '街道',
          balcony: '阳台',
          diningHallRoof: '食堂屋顶',
          officeRoof: '办公室屋顶',
          meetingHallEntrance: '会议厅入口',
          garageRoof: '车库屋顶',
          dormsRoof: '宿舍屋顶',
          meetingHallRoof: '会议厅<br/>屋顶',
          supplyCloset: '材料间'
        },
        plane: {
          spawnOfficialEntrance: '主要入口',
          spawnReporterEntrance: '记者入口',
          spawnServiceEntrance: '前方维修口',
          pressBathroom: '媒体<br/>盥洗室',
          meetingRoom: '会议室',
          frontHallway: '前方<br/>过道',
          executiveOffice: '主管<br/>办公室',
          mainEntrance: '前方搭乗口',
          frontStairs: '前方楼梯',
          pantry: '食品室',
          kitchen: '厨房',
          executiveHallway: '主管过道',
          executiveBedroom: '主管卧室',
          changeRoom: '更衣室',
          laund: '洗衣间',
          frontServiceEntrance: '前方维修口',
          rightWing: '右机翼',
          backServiceEntrance: '后方维修口',
          reporterEntrance: '记者入口',
          leftWing: '左机翼',
          staffSection: '幕僚办公区',
          securityRoom: '警卫室',
          pressSectionA: '新闻宣传部 A',
          pressSectionB: '新闻宣传部 B',
          backStairs: '后方楼梯',
          cargoHold: '货舱',
          serviceCorridor: '空服员廊道',
          storage: '贮藏室',
          luggageHold: '行李舱',
          firstAidStation: '急救站',
          cargoFrontEntrance: '货物<br/>前方入口',
          cockpitStairs: '驾驶舱楼梯',
          cabinStaff: '空服<br/>人员区',
          radioCabin: '无线电舱室',
          cabin: '驾驶舱',
          caterer: '供餐口',
          serverRoomA: '机房 A',
          serverRoomB: '机房 B',
          technicalSeating: '技术人员座位',
          ladderRoom: '阶梯间'
        },
        skyscraper: {
          helipad: '停机坪',
          tower: '塔楼',
          ventilationUnits: '通风单位',
          kitchen: '厨房',
          pantry: '餐具间',
          deliveryRoom: '传递室',
          houseLobby: '房子大厅',
          houseEntrance: '房子<br/>入口',
          mainEntrance: '主入口',
          reception: '接待厅',
          bedroom: '卧室',
          closet: '衣柜',
          bathroom: '浴室',
          houseStairs: '房子<br/>楼梯',
          restaurant: '餐厅',
          toilet: '厕所',
          bbq: '烤肉区',
          backHallway: '后廊',
          mainStairs: '主楼梯',
          geishaRoom: '艺妓房',
          hallway: '走廊',
          karaoke: '卡拉 OK',
          teaRoom: '茶水间',
          taiko: '太鼓',
          terrace: '天台',
          backStairs: '后侧<br/>楼梯',
          houseBalcony: '房子阳台',
          exhibition: '展览厅',
          lounge: '休息室',
          workOffice: '办公室',
          clearance: 'VIP<br/>休息室',
          peacefullTree: '平和之树',
          contemplationGarden: '沉思庭园',
          westGarden: '西侧庭园',
          bridge: '桥',
          gazeebo: '凉亭',
          restBalcony: '休憩<br/>阳台',
          northGarden: '北侧庭园',
          eastGarden: '东侧庭园',
          sandGarden: '沙庭园',
          sidePath: '侧边<br/>通道',
          sideStairs: '侧边<br/>楼梯',
          dragonStatue: '龙雕像',
          coveredWalkway: '遮阳通道'
        },
        themepark: {
          arcadeRoof: '游乐中心<br/>屋顶',
          arcadeEntrance: '游乐中心<br/>入口',
          arcadeStairs: '游乐中心<br/>楼梯',
          arcadeToilet: '游乐中心<br/>厕所',
          barrelRoom: '木桶间',
          backAlley: '后巷走道',
          bumperCars: '碰碰车',
          bunk: '床铺',
          bunkToilet: '床铺厕所',
          cafe: '咖啡厅',
          cafeCorridor: '咖啡厅走廊',
          cafeStairs: '咖啡厅<br/>楼梯',
          cafeTerrace: '咖啡厅<br/>阳台',
          cashStash: '现金<br/>存放处',
          coffinRoom: '棺木房',
          controlRoom: '控制间',
          crypt: '墓穴',
          dayCare: '托儿所',
          drugLab: '毒品<br/>实验室',
          drugStorage: '毒品<br/>贮藏室',
          executionRoom: '处刑室',
          fuelStorage: '燃料贮藏室',
          gallery: '画廊',
          gargoyle: '石像鬼',
          gargoyleStorage: '石像鬼<br/>贮藏室',
          guestInfo: '访客<br/>信息处',
          hauntedBalcony: '闹鬼<br/>阳台',
          hauntedDining: '闹鬼<br/>餐厅',
          hauntedEntrance: '闹鬼<br/>入口',
          hauntedRoof: '闹鬼<br/>屋顶',
          hauntedShop: '闹鬼<br/>商店',
          hauntedStairs: '闹鬼<br/>楼梯',
          initiationRoom: '入会房',
          jointCorridor: '共同<br/>走廊',
          liftCar: '千斤顶',
          loadingDeck: '卸货<br/>港口',
          lockerRoom: '置屋室',
          mainEntrance: '主要入口',
          office: '办公室',
          officeToilet: '办公室<br/>厕所',
          palms: '棕榈树',
          propStorage: '支柱贮藏室',
          railOverlook: '轨道<br/>眺望处',
          railCorridor: '轨道走廊',
          railPlatform: '轨道<br/>平台',
          railRamp: '轨道斜坡',
          roboCircuit: '机器线圈',
          serviceCorridor: '员工<br/>走廊',
          serviceEntry: '员工<br/>入口',
          southExit: '南方<br/>出口',
          sweetShop: '甜点店',
          teacups: '茶杯',
          upperArcade: '上层<br/>游乐中心',
          village: '村庄'
        },
        tower: {
          // EXT/Spawn
          northRoof: '北方屋顶',
          northRoofNotShown: '北方屋顶<br/>(未显示)',
          southRoof: '南方屋顶',
          southRoofNotShown: '南方屋顶<br/>(未显示)',
          roofAccess: '屋顶<br/>出入口',
          northRappel: '',
          southRappel: '',
          // 3F
          mezzanine: '夹层',
          ventilation: '通风处',
          // 2F
          centerAtrium: '中央<br/>天井',
          infoBooth: '信息<br/>柜台',
          eastAtrium: '东侧<br/>天井',
          westAtrium: '西侧<br/>天井',
          eastBalcony: '东侧<br/>阳台',
          westBalcony: '西侧<br/>阳台',
          galleryMain: '画廊<br/>主展场',
          mediaCenter: '媒体<br/>中心',
          galleryAnnex: '画廊<br/>次要展场',
          giftShop: '礼品店',
          exhibitRoom: '展览室',
          lanternRoom: '灯笼室',
          elevator: '电梯',
          officesHallway: '办公室<br/>走廊',
          exhibitHallway: '展览<br/>走廊',
          offices: '办公室',
          companyReception: '公司<br/>接待处',
          supplyRoom: '材料室',
          meetingRoom: '会议室',
          ceoOffice: '执行长<br/>办公室',
          bathroom: '浴室',
          serverRoom: '机房',
          // 2F to 1F Stairs
          northStairs: '北方<br/>楼梯',
          westStairs: '西方<br/>楼梯',
          eastStairs: '东方<br/>楼梯',
          // 1F
          mainReception: '主要<br/>接待处',
          centerHallway: '中央<br/>走廊',
          teaRoom: '茶室',
          lounge: '休息室',
          bar: '酒吧',
          kitchen: '厨房',
          restaurant: '餐厅',
          birdRoom: '鸟室',
          restaurantReception: '餐厅<br/>接待处',
          restaurantHallway: '餐厅<br/>走廊',
          barHallway: '酒吧<br/>走廊',
          westObservatory: '西侧<br/>观景台',
          bonsaiRoom: '盆栽间',
          traditionalHall: '传统<br/>大厅',
          gameRoom: '游戏间',
          eastObservatory: '东侧<br/>观景台',
          fountain: '喷泉',
          //Air Ducts:
          northAirDuct: '北方<br/>通风口',
          eastAirDuct: '东方<br/>通风口',
          westAirDuct: '西方<br/>通风口'
        },
        yacht: {
          spawnSubmarine: '潜水艇',
          spawnZodiak: '黄道带',
          spawnSnowMobile: '摩托雪橇',
          mapsRoom: '地图室',
          cockpit: '驾驶室',
          cockpitHallway: '驾驶室过道',
          captainsOffice: '船长办公室',
          cockpitBalcony: '驾驶室<br/>阳台',
          topDeckStairs: '顶层<br/>甲板<br/>楼梯',
          helipadEntrance: '直升机<br/>停机坪入口',
          helipad: '直升机停机坪',
          spaDeck: '水浴甲板',
          eastDeck: '东侧甲板',
          westDeck: '西侧甲板',
          frontDeck: '前方<br/>甲板',
          masterBedroom: '主卧室',
          casino: '赌博区',
          pokerRoom: '扑克室',
          bathroom: '盥洗室',
          bedroomHallway: '卧室过道',
          casinoHallway: '赌博区过道',
          globeHallway: '球形过道',
          lounge: '休息室',
          cafeteria: '餐厅',
          engine: '引擎',
          backEntrance: '引擎<br/>后方入口',
          rearDeck: '后方<br/>甲板',
          serverRoom: '机房',
          engineStorage: '引擎<br/>贮藏室',
          engineControl: '引擎<br/>控制室',
          backStairs: '后方<br/>楼梯',
          emergencyExit: '紧急逃生出口',
          engineHallway: '引擎过道',
          frontStairs: '前方<br/>楼梯',
          kitchen: '厨房',
          staffDormitory: '员工宿舍',
          westBalcony: '西侧阳台',
          eastBalcony: '东侧阳台',
          kitchenHallway: '厨房过道',
          kitchenStairs: '厨房楼梯',
          kitchenPantry: '厨房<br/>食品室',
          infirmary: '医务室',
          borealSubRoom: 'Akiark<br/>分室',
          cafeteriaHallway: '餐厅过道',
          engineUtility: '引擎<br/>工具室',
          submarine: '潜水艇',
          westGlacier: '西侧冰川',
          eastHullBreach: '东船身突破口',
          eastGlacier: '东侧冰川',
          frozenRiver: '冰河',
          zodiac: '黄道带',
          westHullBreach: '西船身突破口',
          kingOfTheWorld: '世界<br/>之王',
          roof: '屋顶',
          anchorName: '船锚室',
          aklarkSubEntrance: 'Aklark 分室<br/>入口'
        }
      }
    };

  R6MLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MLangTerms);

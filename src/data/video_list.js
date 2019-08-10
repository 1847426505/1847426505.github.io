//全景案例展示
var scene_show = [
	{ID:1,SRC:"http://asd.oiexi.com/image/default/0E64BE1D87DE48CFA25CC031065271BB-6-2.jpg"},
	{ID:2,SRC:"http://asd.oiexi.com/image/default/D65CE1369B8B4759A318160DA4724113-6-2.jpg"},
	{ID:3,SRC:"http://asd.oiexi.com/image/default/CA65A7EBC4A446E49789B0BC173A5454-6-2.jpg"},
	{ID:4,SRC:"http://asd.oiexi.com/image/default/BF7443B16FE24AF5A03402A6395B4CED-6-2.jpg"},
	{ID:5,SRC:"http://asd.oiexi.com/image/default/715BC55DC0AA43D2973B6F9683E09757-6-2.jpg"},
	{ID:6,SRC:"http://asd.oiexi.com/image/default/8D2B01142CBB409A8C0FEEA921B89E35-6-2.jpg"},
	{ID:7,SRC:"http://asd.oiexi.com/image/default/E2309A5E90EB45A895CB72A264007128-6-2.jpg"},
	{ID:8,SRC:"http://asd.oiexi.com/image/default/08F4D9FF66054AA295861C76590381B5-6-2.jpg"},
	{ID:9,SRC:"http://asd.oiexi.com/image/default/08F4D9FF66054AA295861C76590381B5-6-2.jpg"},
	{ID:10,SRC:"http://asd.oiexi.com/image/default/D135D0118477495EBD4CEB57ADE88A67-6-2.jpg"}
];
var news = [
	{ID:1,TITLE:"浓情端午",img_url:"./image/news/浓情端午.jpg",msg:"一起来看划龙舟",date:"06月06日"}
]
var scene_ktv = [
	{ID:1,img_url:"http://asd.oiexi.com/def06c4d66d4452b8c3ff179f42f3003/snapshots/81d8665dff9b4bd69720c8d265219268-00005.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/2c8af267-16b78c78acd-0000-0000-020-e9477.mp4",title_msg:"oiexiktv展示"},
	{ID:2,img_url:"http://asd.oiexi.com/4eb8b9c81ade4b2fbfcc75cbea0dfb74/snapshots/5d79f536b4084fdcaa802dc7441d9189-00001.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/4f0aa605-16b78c76fa1-0000-0000-020-e9477.mp4",title_msg:"ktv含窗口"},
	{ID:3,img_url:"http://asd.oiexi.com/b8cae4d184ae47f98d6b535e8462de58/snapshots/7dee2d00c0734a498540f403ae1e183e-00001.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/244a258-16b78c74ea2-0000-0000-020-e9477.mp4",title_msg:"ktv"},
	{ID:4,img_url:"http://asd.oiexi.com/59af0a0334484d5291fb3d1c55f7ded5/snapshots/75f1343a25e148de87521f4664b809a8-00004.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/47c49c60-16b78c70abe-0000-0000-020-e9477.mp4",title_msg:"ktv窗口"},
	{ID:5,img_url:"http://asd.oiexi.com/ca5c5c2558904de498ed601de8ce9384/snapshots/49a6e36efd44453eac0ee5d11c2c0c05-00001.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/18a35408-16b78c6ca19-0000-0000-020-e9477.mp4",title_msg:"98k"},
	{ID:6,img_url:"http://asd.oiexi.com/b41af9f8ea2c42b782e704d8d48bd102/snapshots/b1422497bdbc4d3bbb01ff6ee738b0ce-00001.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/41d0d9f5-16b7583f41e-0000-0000-020-e9477.mp4",title_msg:"10s全景茶室"},
	{ID:7,img_url:"http://asd.oiexi.com/def06c4d66d4452b8c3ff179f42f3003/snapshots/81d8665dff9b4bd69720c8d265219268-00005.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/2c8af267-16b78c78acd-0000-0000-020-e9477.mp4",title_msg:"oiexiktv展示"},
];

var scene_ct = [
	{ID:1,img_url:"http://asd.oiexi.com/830da65e3e7348b4ad4fd671eabf41a2/snapshots/4b96da5c750e42de87b3d7d71e850d1e-00005.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/3a19816a-16b78d9a619-0000-0000-020-e9477.mp4",title_msg:"雍和会"},
	{ID:2,img_url:"http://asd.oiexi.com/8e0e9eef09c24a48847f0b2d5a360ba2/snapshots/94b2b2abe4c84a428e0fb60a3839f658-00005.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/4d4562ca-16b78d95d63-0000-0000-020-e9477.mp4",title_msg:"教师节展示"},
	{ID:3,img_url:"http://asd.oiexi.com/2ea6b358259d440689b70c478d8c727a/snapshots/a124c302a2f04104b76bcb055ac6c5e0-00004.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/494ccd74-16b78d910a1-0000-0000-020-e9477.mp4",title_msg:"餐厅"},
	{ID:4,img_url:"http://asd.oiexi.com/5635a340aa1641d9b37fab41cd967f97/snapshots/e3e3c60b590b4c4aaa8f3512f9720072-00004.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/5087b1d2-16b78d8bc24-0000-0000-020-e9477.mp4",title_msg:"oiexi餐厅使用展示"},
];


var scene_yht = [
	{ID:1,img_url:"http://asd.oiexi.com/72b09255b9574da1ad44d2f0705de5c4/snapshots/076a089bcc83435bb44b7c087bb333e0-00004.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/31cdc972-16b78e9b918-0000-0000-020-e9477.mp4",title_msg:"纱幕展示"},
	{ID:2,img_url:"http://asd.oiexi.com/6870faf5543a46979becad394b106277/snapshots/b7534542dc5f4ab9902c6bc6f9901372-00002.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/383a2be6-16b78e96aaa-0000-0000-020-e9477.mp4",title_msg:"舞台"},
	{ID:3,img_url:"http://asd.oiexi.com/3bd153663f9940e28535d51f2fef5f1a/snapshots/7e1a5692512340c89e84ae83322a02b0-00003.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/a47086a-16b78e85fdc-0000-0000-020-e9477.mp4",title_msg:"快闪"},
	{ID:4,img_url:"http://asd.oiexi.com/5543989babb743c0a35c9ee7d16b0729/snapshots/06ddfeafa6e64a52aa1739a0006e1de8-00004.jpg",video_url:"http://asd.oiexi.com/customerTrans/cbea0c061d0d45fabe8884aa6689f935/1dc251f-16b78e7bdf0-0000-0000-020-e9477.mp4",title_msg:"全景SPA间"},
];

var scene_dc = [];

var scene_cs = [];
// 카드 초기화
var CardList = new Array();
var CardKinds = ["B", "P", "S", "L"];

// 유저와 컴퓨터
var User1;
var User2;
var Com1;
var Com2;
var UserList = [User1,User2];

// 유저의 처음 카드 초기화
var User1_Card = new Array();
var User2_Card = new Array();
var Com1_Card = new Array();
var Com2_Card = new Array();

// 카드의 합
var totalCountB = 0;
var totalCountL = 0;
var totalCountP = 0;
var totalCountS = 0;
var count = 0;

// 유저와 컴퓨터 오픈카드.
var User1_OpenCard = new Array();
var User2_OpenCard = new Array();
var Com1_OpenCard = new Array();
var Com2_OpenCard = new Array();
var Total_OpenCard = new Array();

// 카드의 타입
var Type;
var turn = 1;
var Cardcount = 0;
var toggle = false;

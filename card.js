function initCard() {
    for(var i = 0; i < 56; i++)
  {
    for(var j = 0; j < 4; j++)
    {
      for(var one = 0; one < 5; one++)
      {
        CardList[i] = 1 + CardKinds[j];
        i++;
      }
      for(var two = 0; two < 3; two++)
      {
        CardList[i] = 2 + CardKinds[j];
        i++;
      }
      for(var three = 0; three < 3; three++)
      {
        CardList[i] = 3 + CardKinds[j];
        i++;
      }
      for(var four = 0; four < 2; four++)
      {
        CardList[i] = 4 + CardKinds[j];
        i++;
      }
      for(var five = 0; five < 1; five++)
      {
        CardList[i] = 5 + CardKinds[j];
        i++;
      }
    }
  }
}
// 카드섞기
function cardMix(){
  for(var i = 55; i > 0; i--)0
  {
    var Number = Math.floor(Math.random() * 55) + 1;
    var temp = CardList[i];
    CardList[i] = CardList[Number];
    CardList[Number] = temp;
  }
}

function devideCard(){
  for(var i = 0; i < 14; i++)
  {
    User1_Card[i] = CardList.pop();
    User2_Card[i] = CardList.pop();
    Com1_Card[i] = CardList.pop();
    Com2_Card[i] = CardList.pop();

      /*
      User1_Card[i] = CardList[j];
      User2_Card[i] = CardList[27-j];
      Com1_Card[i] =  CardList[41-j];
      Com2_Card[i] = CardList[55-j];
      */
  }
}

function openCard() {

    if(toggle)
    {
      User1_OpenCard.push(User1_Card.pop());
    }
      if(!toggle)
      {
        User2_OpenCard.push(User2_Card.pop());
      }

        Com1_OpenCard.push(Com1_Card.pop());
        Com2_OpenCard.push(Com2_Card.pop());

    if(toggle)
    {
        Total_OpenCard.push(User1_Card.pop());
    }

    if(!toggle)
    {
        Total_OpenCard.push(User2_OpenCard.pop());
    }

      Total_OpenCard.push(Com1_OpenCard.pop());
      Total_OpenCard.push(Com2_OpenCard.pop());
/*
  User1_OpenCard = User1_Card.slice(0,1);
  User2_OpenCard = User2_Card.slice(0,1);
  Com1_OpenCard = Com1_Card.slice(0,1);
  Com2_OpenCard = Com2_Card.slice(0,1);
*/
}

/*
function classloseCard() {
  document.getElementById().style.display = 'none';
}


function mouseClick_OpenCard() {
  $("FrontCard").click(function() {
    document.getElementById("Card_Open").style.display = "block";
  });
}
*/

//카드변수 하나당 대응하는 카드 이미지
function user1_CardImg(User_Card){
  //바나나
  if(User_Card=='1B'){
    $(".user1_OpendCard").attr("src","images/Banana_1.jpg");
  }
  else if(User_Card=='2B'){
    $(".user1_OpendCard").attr("src","images/Banana_2.jpg");
  }
  else if(User_Card=='3B'){
    $(".user1_OpendCard").attr("src","images/Banana_3.jpg");
  }
  else if(User_Card=='4B'){
    $(".user1_OpendCard").attr("src","images/Banana_4.jpg");
  }
  else if(User_Card=='5B'){
    $(".user1_OpendCard").attr("src","images/Banana_5.jpg");
  }
  //복숭아
  else if(User_Card=='1P'){
    $(".user1_OpendCard").attr("src","images/peach_1.jpg");
  }
  else if(User_Card=='2P'){
    $(".user1_OpendCard").attr("src","images/peach_2.jpg");
  }
  else if(User_Card=='3P'){
    $(".user1_OpendCard").attr("src","images/peach_3.jpg");
  }
  else if(User_Card=='4P'){
    $(".user1_OpendCard").attr("src","images/peach_4.jpg");
  }
  else if(User_Card=='5P'){
    $(".user1_OpendCard").attr("src","images/peach_5.jpg");
  }
  else if(User_Card=='1S'){
    $(".user1_OpendCard").attr("src","images/straw_1.jpg");
  }
  else if(User_Card=='2S'){
    $(".user1_OpendCard").attr("src","images/straw_2.jpg");
  }
  else if(User_Card=='3S'){
    $(".user1_OpendCard").attr("src","images/straw_3.jpg");
  }
  else if(User_Card=='4S'){
    $(".user1_OpendCard").attr("src","images/straw_4.jpg");
  }
  else if(User_Card=='5S'){
    $(".user1_OpendCard").attr("src","images/straw_5.jpg");
  }
  else if(User_Card=='1L'){
    $(".user1_OpendCard").attr("src","images/Lemon_1.jpg");
  }
  else if(User_Card=='2L'){
    $(".user1_OpendCard").attr("src","images/Lemon_2.jpg");
  }
  else if(User_Card=='3L'){
    $(".user1_OpendCard").attr("src","images/Lemon_3.jpg");
  }
  else if(User_Card=='4L'){
    $(".user1_OpendCard").attr("src","images/Lemon_4.jpg");
  }
  else if(User_Card=='5L'){
    $(".user1_OpendCard").attr("src","images/Lemon_2.jpg");
  }
}

function com1_CardImg(User_Card){
  //바나나
  if(User_Card=='1B'){
    $(".com1_OpendCard").attr("src","images/Banana_1.jpg");
  }
  else if(User_Card=='2B'){
    $(".com1_OpendCard").attr("src","images/Banana_2.jpg");
  }
  else if(User_Card=='3B'){
    $(".com1_OpendCard").attr("src","images/Banana_3.jpg");
  }
  else if(User_Card=='4B'){
    $(".com1_OpendCard").attr("src","images/Banana_4.jpg");
  }
  else if(User_Card=='5B'){
    $(".com1_OpendCard").attr("src","images/Banana_5.jpg");
  }
  //복숭아
  else if(User_Card=='1P'){
    $(".com1_OpendCard").attr("src","images/peach_1.jpg");
  }
  else if(User_Card=='2P'){
    $(".com1_OpendCard").attr("src","images/peach_2.jpg");
  }
  else if(User_Card=='3P'){
    $(".com1_OpendCard").attr("src","images/peach_3.jpg");
  }
  else if(User_Card=='4P'){
    $(".com1_OpendCard").attr("src","images/peach_4.jpg");
  }
  else if(User_Card=='5P'){
    $(".com1_OpendCard").attr("src","images/peach_5.jpg");
  }
  else if(User_Card=='1S'){
    $(".com1_OpendCard").attr("src","images/straw_1.jpg");
  }
  else if(User_Card=='2S'){
    $(".com1_OpendCard").attr("src","images/straw_2.jpg");
  }
  else if(User_Card=='3S'){
    $(".com1_OpendCard").attr("src","images/straw_3.jpg");
  }
  else if(User_Card=='4S'){
    $(".com1_OpendCard").attr("src","images/straw_4.jpg");
  }
  else if(User_Card=='5S'){
    $(".com1_OpendCard").attr("src","images/straw_5.jpg");
  }
  else if(User_Card=='1L'){
    $(".com1_OpendCard").attr("src","images/Lemon_1.jpg");
  }
  else if(User_Card=='2L'){
    $(".com1_OpendCard").attr("src","images/Lemon_2.jpg");
  }
  else if(User_Card=='3L'){
    $(".com1_OpendCard").attr("src","images/Lemon_3.jpg");
  }
  else if(User_Card=='4L'){
    $(".com1_OpendCard").attr("src","images/Lemon_4.jpg");
  }
  else if(User_Card=='5L'){
    $(".com1_OpendCard").attr("src","images/Lemon_2.jpg");
  }
}

function com2_CardImg(User_Card){
  //바나나

  if(User_Card=='1B'){
    $(".com2_OpendCard").attr("src","images/Banana_1.jpg");
  }
  else if(User_Card=='2B'){
    $(".com2_OpendCard").attr("src","images/Banana_2.jpg");
  }
  else if(User_Card=='3B'){
    $(".com2_OpendCard").attr("src","images/Banana_3.jpg");
  }
  else if(User_Card=='4B'){
    $(".com2_OpendCard").attr("src","images/Banana_4.jpg");
  }
  else if(User_Card=='5B'){
    $(".com2_OpendCard").attr("src","images/Banana_5.jpg");
  }
  //복숭아
  else if(User_Card=='1P'){
    $(".com2_OpendCard").attr("src","images/peach_1.jpg");
  }
  else if(User_Card=='2P'){
    $(".com2_OpendCard").attr("src","images/peach_2.jpg");
  }
  else if(User_Card=='3P'){
    $(".com2_OpendCard").attr("src","images/peach_3.jpg");
  }
  else if(User_Card=='4P'){
    $(".com2_OpendCard").attr("src","images/peach_4.jpg");
  }
  else if(User_Card=='5P'){
    $(".com2_OpendCard").attr("src","images/peach_5.jpg");
  }
  else if(User_Card=='1S'){
    $(".com2_OpendCard").attr("src","images/straw_1.jpg");
  }
  else if(User_Card=='2S'){
    $(".com2_OpendCard").attr("src","images/straw_2.jpg");
  }
  else if(User_Card=='3S'){
    $(".com2_OpendCard").attr("src","images/straw_3.jpg");
  }
  else if(User_Card=='4S'){
    $(".com2_OpendCard").attr("src","images/straw_4.jpg");
  }
  else if(User_Card=='5S'){
    $(".com2_OpendCard").attr("src","images/straw_5.jpg");
  }
  else if(User_Card=='1L'){
    $(".com2_OpendCard").attr("src","images/Lemon_1.jpg");
  }
  else if(User_Card=='2L'){
    $(".com2_OpendCard").attr("src","images/Lemon_2.jpg");
  }
  else if(User_Card=='3L'){
    $(".com2_OpendCard").attr("src","images/Lemon_3.jpg");
  }
  else if(User_Card=='4L'){
    $(".com2_OpendCard").attr("src","images/Lemon_4.jpg");
  }
  else if(User_Card=='5L'){
    $(".com2_OpendCard").attr("src","images/Lemon_2.jpg");
  }
}

function user2_CardImg(User_Card){
  //바나나

  if(User_Card=='1B'){
    $(".user2_OpendCard").attr("src","images/Banana_1.jpg");
  }
  else if(User_Card=='2B'){
    $(".user2_OpendCard").attr("src","images/Banana_2.jpg");
  }
  else if(User_Card=='3B'){
    $(".user2_OpendCard").attr("src","images/Banana_3.jpg");
  }
  else if(User_Card=='4B'){
    $(".user2_OpendCard").attr("src","images/Banana_4.jpg");
  }
  else if(User_Card=='5B'){
    $(".user2_OpendCard").attr("src","images/Banana_5.jpg");
  }
  //복숭아
  else if(User_Card=='1P'){
    $(".user2_OpendCard").attr("src","images/peach_1.jpg");
  }
  else if(User_Card=='2P'){
    $(".user2_OpendCard").attr("src","images/peach_2.jpg");
  }
  else if(User_Card=='3P'){
    $(".user2_OpendCard").attr("src","images/peach_3.jpg");
  }
  else if(User_Card=='4P'){
    $(".user2_OpendCard").attr("src","images/peach_4.jpg");
  }
  else if(User_Card=='5P'){
    $(".user2_OpendCard").attr("src","images/peach_5.jpg");
  }
  else if(User_Card=='1S'){
    $(".user2_OpendCard").attr("src","images/straw_1.jpg");
  }
  else if(User_Card=='2S'){
    $(".user2_OpendCard").attr("src","images/straw_2.jpg");
  }
  else if(User_Card=='3S'){
    $(".user2_OpendCard").attr("src","images/straw_3.jpg");
  }
  else if(User_Card=='4S'){
    $(".user2_OpendCard").attr("src","images/straw_4.jpg");
  }
  else if(User_Card=='5S'){
    $(".user2_OpendCard").attr("src","images/straw_5.jpg");
  }
  else if(User_Card=='1L'){
    $(".user2_OpendCard").attr("src","images/Lemon_1.jpg");
  }
  else if(User_Card=='2L'){
    $(".user2_OpendCard").attr("src","images/Lemon_2.jpg");
  }
  else if(User_Card=='3L'){
    $(".user2_OpendCard").attr("src","images/Lemon_3.jpg");
  }
  else if(User_Card=='4L'){
    $(".user2_OpendCard").attr("src","images/Lemon_4.jpg");
  }
  else if(User_Card=='5L'){
    $(".user2_OpendCard").attr("src","images/Lemon_2.jpg");
  }
}

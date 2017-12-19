function gameTurn() {
    $(".user1_CardBack").click(function () {
      toggle = true;
      if(User1_Card == null){
        alert("게임끝");
        return winnerCondition();
      }
        user1_CardImg(User1_Card.pop());
        setTimeout(alert("컴퓨터1 카드를 자동을 뒤집습니다."),2000);
        setTimeout("com1_CardImg(Com1_Card.pop())",2000);

     });

     getCardCondition();


    $(".user2_CardBack").click(function () {
      toggle = false;
      if(User2_Card == null){
      alert("게임끝");
      return winnerCondition();
    }
      user2_CardImg(User2_Card.pop());
      setTimeout(alert("컴퓨터2가 카드를 뒤집습니다."),2000);
      setTimeout("com2_CardImg(Com2_Card.pop())",2000);

      });

    getCardCondition();
}

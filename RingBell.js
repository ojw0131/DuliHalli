function getCardCondition() {

  for (var i = 0; i < Total_OpenCard.length; i++)
  {
    if(Total_OpenCard.length != 0)
    {
      Type = Total_OpenCard.pop();
      count = parseInt(Total_OpenCard.pop());
      if(Type == "B"){
        totalCountB = totalCountB + count;
      }
      else if(Type == "L"){
        totalCountL = totalCountL + count;
      }
      else if(Type == "P"){
        totalCountP = totalCountP + count;
      }
      else if(Type == "S"){
        totalCountS = totalCounsS + count;
      }
    }
  }

// 유저 1이 벨을 눌렀을때
  $("#Bell").click(function(){
    // 만약 정상적으로 눌렀다면
    if((!toggle)&&(totalCountB == 5 || totalCountL == 5 || totalCountP == 5 || totalCountS == 5))
    {
      alert("합이 5에 종을 누르셨습니다. 카드를 가져옵니다!");
      for(var i = 0; i < Total_OpenCard.length; i++)
      {
          User1_Card.push(Total_OpenCard.pop());
      }
    }
    else if((!toggle)&&(totalCountB != 5 && totalCountL != 5 && totalCountP != 5 && totalCountS != 5))
    {
      alert("종을 잘못 치셨군요! 카드를 상대방에게 한장 줍니다.");
      User2_Card.push(User1_Card.pop());
    }
    // 그렇지 않으면 유저2에게 카드를 준다.
    else if((toggle)&&(totalCountB == 5 || totalCountL == 5 || totalCountP == 5 || totalCountS == 5))
    {
      alert("합이 5에 종을 누르셨습니다. 카드를 가져옵니다!");
      for(var i = 0; i < Total_OpenCard.length; i++)
      {
        // 다 가져온다.
          User2_Card.push(Total_OpenCard.pop());
      }
    }
    else if((toggle)&&(totalCountB != 5 && totalCountL != 5 && totalCountP != 5 && totalCountS != 5))
    {
      alert("종을 잘못 치셨군요! 카드를 상대방에게 한장 줍니다.");
      User1_Card.push(User2_Card.pop());
    }
  });
}

/*
  $("#Bell").click(function(){
      if(totalCountB == 5 || totalCountL == 5 || totalCountP == 5 || totalCountS == 5 )
      {
        for(var i = 0; i < Total_OpenCard.length; i++)
        {
          for(;Total_OpenCard.length == 0;)
          {
            alert("합이 5에 종을 누르셨습니다. 카드를 가져옵니다!");
            User2_Card.push(Total_OpenCard.pop());
          }
        }
      }
      else {
        alert("종을 잘못 치셨군요! 카드를 상대방에게 한장 줍니다.");
        User1_Card.push(User2_Card.pop());
      }
    });
}
*/

function winnerCondition(){
  if(User1_Card == null)
  {
    alert("User1의 소유하신 카드가 없습니다.");
    alert("승리자는 User2!");
    return;
  }
  else if(User2_Card == null)
  {
    alert("User2의 소유하신 카드가 없습니다.");
    alert("승리자는 User1!");
    return;
  }
}

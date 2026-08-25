window.alert("wlecome to Rock,Paper,Sissor Game");
playerChioceOne = window.prompt(
  "please enter your Choice Rock||Paper||Sissor ",
);
playerChioceTwo = window.prompt(
  "please enter your Choice Rock||Paper||Sissor ",
);

if (playerChioceOne === playerChioceTwo) {
  console.log("its a tie");
} else if (
  (playerChioceOne === "Rock" && playerChioceTwo == "Sissor") ||
  (playerChioceOne === "Sissor" && playerChioceTwo == "Paper") ||
  (playerChioceOne === "Paper" && playerChioceTwo == "Rock")
) {
  console.log("Player one win");
} else {
  console.log("Player two win");
}

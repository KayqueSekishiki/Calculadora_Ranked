function rankedLevel(win, lose) {
  const winRate = win - lose;
  let rank;

  if (win <= 10) {
    rank = "Ferro";
  } else if (win >= 11 && win <= 20) {
    rank = "Bronze";
  } else if (win >= 21 && win <= 50) {
    rank = "Prata";
  } else if (win >= 51 && win <= 80) {
    rank = "Ouro";
  } else if (win >= 81 && win <= 90) {
    rank = "Diamante";
  } else if (win >= 91 && win <= 100) {
    rank = "Lendário";
  } else {
    rank = "Imortal";
  }

  return `O Herói tem um saldo de ${winRate} está no nível ${rank}`;
}

console.log(rankedLevel(120, 10));

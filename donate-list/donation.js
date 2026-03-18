function copyCard() {
  const num = document.getElementById('cardNumber').innerText;
  navigator.clipboard.writeText(num);
  alert('Номер карты скопирован!');
}

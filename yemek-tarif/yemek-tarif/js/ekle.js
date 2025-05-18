document.getElementById('tarifForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const ad = document.getElementById('ad').value;
  const malzemeler = document.getElementById('malzemeler').value;
  const icerik = document.getElementById('icerik').value;
  const puan = parseFloat(document.getElementById('puan').value);

  const tarifler = JSON.parse(localStorage.getItem('tarifler')) || [];
  tarifler.push({ ad, malzemeler, icerik, puan });
  localStorage.setItem('tarifler', JSON.stringify(tarifler));

  alert("Tarif eklendi!");
  location.href = "index.html";
});

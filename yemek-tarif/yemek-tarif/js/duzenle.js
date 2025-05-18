document.addEventListener('DOMContentLoaded', () => {
  const index = localStorage.getItem('duzenlenecekIndex');
  const tarifler = JSON.parse(localStorage.getItem('tarifler')) || [];
  const tarif = tarifler[index];

  document.getElementById('ad').value = tarif.ad;
  document.getElementById('malzemeler').value = tarif.malzemeler;
  document.getElementById('icerik').value = tarif.icerik;
  document.getElementById('puan').value = tarif.puan;

  document.getElementById('duzenleForm').addEventListener('submit', (e) => {
    e.preventDefault();

    tarifler[index] = {
      ad: document.getElementById('ad').value,
      malzemeler: document.getElementById('malzemeler').value,
      icerik: document.getElementById('icerik').value,
      puan: parseFloat(document.getElementById('puan').value),
    };

    localStorage.setItem('tarifler', JSON.stringify(tarifler));
    alert("Tarif güncellendi!");
    location.href = "index.html";
  });
});

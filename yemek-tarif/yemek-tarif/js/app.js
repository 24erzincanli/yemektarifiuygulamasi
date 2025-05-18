document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const tarifListesi = document.getElementById('tarifListesi');

  function tarifleriGoster() {
    const tarifler = JSON.parse(localStorage.getItem('tarifler')) || [];
    const arama = searchInput.value.toLowerCase();
    tarifListesi.innerHTML = '';

    tarifler.filter(t => t.ad.toLowerCase().includes(arama)).forEach((t, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${t.ad}</h3>
        <p><b>Malzemeler:</b> ${t.malzemeler}</p>
        <p><b>Tarif:</b> ${t.icerik}</p>
        <p><b>Puan:</b> ${t.puan}</p>
        <button onclick="duzenle(${i})">Düzenle</button>
        <button onclick="sil(${i})">Sil</button>
      `;
      tarifListesi.appendChild(card);
    });
  }

  searchInput.addEventListener('input', tarifleriGoster);
  tarifleriGoster();
});

function sil(index) {
  if (!confirm("Silmek istiyor musun?")) return;
  const tarifler = JSON.parse(localStorage.getItem('tarifler')) || [];
  tarifler.splice(index, 1);
  localStorage.setItem('tarifler', JSON.stringify(tarifler));
  location.reload();
}

function duzenle(index) {
  localStorage.setItem('duzenlenecekIndex', index);
  location.href = "tarif-duzenle.html";
}

function logout() {
  localStorage.removeItem('loggedInUser');
  location.href = "login.html";
}

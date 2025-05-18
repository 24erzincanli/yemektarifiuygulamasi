document.addEventListener('DOMContentLoaded', () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (users.some(u => u.username === username)) {
        return alert("Kullanıcı zaten var.");
      }

      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert("Kayıt başarılı!");
      location.href = "login.html";
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;

      const user = users.find(u => u.username === username && u.password === password);
      if (!user) return alert("Bu kullanıcı mevcut değil.");

      localStorage.setItem('loggedInUser', JSON.stringify(user));
      location.href = "index.html";
    });
  }
});

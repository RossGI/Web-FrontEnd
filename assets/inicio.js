async function start() {
    if (localStorage.getItem("token")) {
      document.getElementById(`iniciarSesion`).style.display = "none";
      document.getElementById(`cerrarSesion`).style.display = "contents";
      return;
    }
}

async function cerrarSesion() {
    localStorage.removeItem('token');
    document.location.reload();
}
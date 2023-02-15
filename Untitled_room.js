function Logout() {
    localStorage.removeItem("SU")
    window.location = "index.html"
}

function addRoom() {
    var adrom = document.getElementById("rooms").value
    localStorage.setItem("ar", adrom)
}

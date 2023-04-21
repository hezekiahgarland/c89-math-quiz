function login() {
    p1_name = document.getElementById("p1name").value;
    p2_name = document.getElementById("p2name").value;
    localStorage.setItem('player1name', p1_name);
    localStorage.setItem('player2name', p2_name);
    window.location = "game_page.html";
}
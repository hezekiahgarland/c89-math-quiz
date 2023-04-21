p1_name = localStorage.getItem("player1name");
p2_name = localStorage.getItem("player2name");
p1score = 0;
p2score = 0;
document.getElementById("player1_name").innerHTML = p1_name;
document.getElementById("player2_name").innerHTML = p2_name;
document.getElementById("q_turn").innerHTML = "question turn:" + p1_name;
document.getElementById("a_turn").innerHTML = "answer turn:" + p2_name;
q_turn = "p1";
a_turn = "p2";

function send() {
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    product = num1 * num2;
    q_tage = '<h4 id="display_word">Q : ' + num1+ " x "+num2 + '</h4>';
    i_tage = '<br>ans : <input id="ans_word" type="text">'
    b_tage = '<br><br><button class="btn btn-info" onclick="check()">check</button>';
    document.getElementById("output").innerHTML = q_tage + i_tage + b_tage;

    document.getElementById("n1").value="";
    document.getElementById("n2").value="";

}

function check() {
    user_ans = document.getElementById("ans_word").value;
    if (user_ans == product) {
        if (a_turn == "p1") {
            p1score += 1;
            document.getElementById("player1_score").innerHTML = p1score;
        } else {
            p2score += 1;
            document.getElementById("player2_score").innerHTML = p2score
        }
    } else {
        alert("wrong ans,correct ans is " + product)
    }
    if (q_turn == "p1") {
        q_turn = "p2";
        a_turn = "p1";
        document.getElementById("q_turn").innerHTML = "question turn:" + p2_name;
        document.getElementById("a_turn").innerHTML = "answer turn:" + p1_name;

    } else if (q_turn == "p2") {
        q_turn = "p1";
        a_turn = "p2";
        document.getElementById("q_turn").innerHTML = "question turn:" + p1_name;
        document.getElementById("a_turn").innerHTML = "answer turn:" + p2_name;
    }
    document.getElementById("output").innerHTML = "";
}
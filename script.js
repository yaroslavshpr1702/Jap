function show_text() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'block';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'none';
}
function show_pic() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'block';
    c3_elem.style.display = 'none';
}
function show_game() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
}
function coins() {
    var q1 = document.getElementById("q1");
    if (q1 == 1) q1 = 1;
    var q2 = document.getElementById("q2");
    if (q2 == 1) q2 = 1;
    var q3 = document.getElementById("q3");
    if (q3 == 1) q3 = 1;
    var coins = q1 + q2 + q3;
    document.getElementById("an").innerHTML = "Вы набрали " + coins + " баллов"
}
function checkJap() {
    var x = document.getElementById("check").value;
    document.getElementById("an").innerHTML = x;
}

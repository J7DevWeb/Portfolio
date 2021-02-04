const cv = document.getElementById('cv');
const front = document.getElementById('front');
const back = document.getElementById('back');
const bdd = document.getElementById('bdd');

window.onload = gotoCV();

function gotoCV(){
    cv.style.display = 'block';
    front.style.display = 'none';
    back.style.display = 'none';
    bdd.style.display = 'none';
};

function gotoFront(){
    cv.style.display = 'none';
    front.style.display = 'block';
    back.style.display = 'none';
    bdd.style.display = 'none';
};

function gotoBack(){
    cv.style.display = 'none';
    front.style.display = 'none';
    back.style.display = 'block';
    bdd.style.display = 'none';
};

function gotoBdd(){
    cv.style.display = 'none';
    front.style.display = 'none';
    back.style.display = 'none';
    bdd.style.display = 'block';
};














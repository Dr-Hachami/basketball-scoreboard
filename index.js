let home = document.getElementById('home');
let guest = document.getElementById('guest');


let homeRecord = 0;
let guestRecord = 0;

home.textContent = homeRecord;
guest.textContent = guestRecord;

function reset(){
    homeRecord = 0;
    guestRecord = 0;
    home.textContent = homeRecord;
    guest.textContent = guestRecord;
}

function addOneHome(){
    homeRecord+=1
    home.textContent = homeRecord;
}
function addOneGuest(){
    guestRecord+=1
    guest.textContent = guestRecord;
}
function addTowHome(){
    homeRecord+=2
    home.textContent = homeRecord;
}
function addTowGuest(){
    guestRecord+=2
    guest.textContent = guestRecord;
}
function addThreeHome(){
    homeRecord+=3
    home.textContent = homeRecord;
}
function addThreeGuest(){
    guestRecord+=3
    guest.textContent = guestRecord;
}
 
window.onload=function(){
var what = document.getElementById("whatLabel");
var ships = document.getElementById("shipsLabel");
var combat = document.getElementById("combatLabel");
var who = document.getElementById("whoLabel");
var where = document.getElementById("whereLabel");
var enlist = document.getElementById("enlistLabel");

what.addEventListener("click", toggleVis);
ships.addEventListener("click", toggleVis);
combat.addEventListener("click", toggleVis);
who.addEventListener("click", toggleVis);
where.addEventListener("click", toggleVis);
enlist.addEventListener("click", toggleVis);
}


function toggleVis(obj) {
    switch(this.id){
        case "whatLabel":
            document.getElementById("what").style.display = "block";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "none";
            document.getElementById("enlist").style.display = "none";
            break;
        case "shipsLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "block";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "none";
            document.getElementById("enlist").style.display = "none";
            break;
        case "whoLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "block";
            document.getElementById("where").style.display = "none";
            document.getElementById("enlist").style.display = "none";
            break;
        case "whereLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "block";
            document.getElementById("enlist").style.display = "none";
            break;
        case "combatLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "block";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "none";
            document.getElementById("enlist").style.display = "none";
            break;
        case "enlistLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "none";
            document.getElementById("enlist").style.display = "block";
            break;
    }
}

setInterval(rotateShips, 3000);

var i = 1;

function rotateShips() {
    if (i == 8) {
        i = 1;
    }
    document.getElementById("shipview").setAttribute("src", "img/ship"+i+".jpg");
    i++;
}

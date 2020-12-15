window.onload=function(){
var what = document.getElementById("whatLabel");
var ships = document.getElementById("shipsLabel");
var combat = document.getElementById("combatLabel");
var who = document.getElementById("whoLabel");
var where = document.getElementById("whereLabel");

var visitorModal = document.getElementById("visitorModal");
var visitorBtn = document.getElementById("visitorBtn");
var closer = document.getElementsByClassName("close")[0];

visitorBtn.onclick = function () {
    visitorModal.style.display = "block";
}

closer.onclick = function () {
    visitorModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == visitorModal) {
        visitorModal.style.display = "none";
    }
}

what.addEventListener("click", toggleVis);
ships.addEventListener("click", toggleVis);
combat.addEventListener("click", toggleVis);
who.addEventListener("click", toggleVis);
where.addEventListener("click", toggleVis);
}


function toggleVis(obj) {
    switch(this.id){
        case "whatLabel":
            document.getElementById("what").style.display = "block";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "none";
            break;
        case "shipsLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "block";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "none";
            break;
        case "whoLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "block";
            document.getElementById("where").style.display = "none";
            break;
        case "whereLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "none";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "block";
            break;
        case "combatLabel":
            document.getElementById("what").style.display = "none";
            document.getElementById("ships").style.display = "none";
            document.getElementById("combat").style.display = "block";
            document.getElementById("who").style.display = "none";
            document.getElementById("where").style.display = "none";
            break;
    }
}

setInterval(rotateShips, 3000);

var shipI = 1;
function rotateShips() {
    if (shipI == 8) {
        shipI = 1;
    }
    document.getElementById("shipview").setAttribute("src", "img/ship"+shipI+".jpg");
    shipI++;
}

function openPage(evt, pageName) {
    // Declare all variables
    var i, modalPages, modalBtns;
  
    // Get all elements with class="tabcontent" and hide them
    modalPages = document.getElementsByClassName("modalPage");
    for (i = 0; i < modalPages.length; i++) {
        modalPages[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    modalBtns = document.getElementsByClassName("modalBtn");
    for (i = 0; i < modalBtns.length; i++) {
        modalBtns[i].className = modalBtns[i].className.replace(" active", "");
    }

    if (pageName == "formPage") {
        $("#congrats").css("display", "none");
        $("#visitorForm").css("display", "block");
    }

    writeTable();

  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function writeTable()
{
    $("#visitors").get(0).innerHTML = ""; //rebuild table each time!
    
    $("#visitors").append("<th>Name</th><th>Address</th><th>Phone</th><th>Email</th><th class='hide'>ID</th><th>Comments:</th><th>Actions</th>");

    for (i = 0; i< visitors.length; i++) {
        $("#visitors").append(
            "<tr>" + 
            "<td>" + visitors[i].fullName + "</td>" +
            "<td>" + visitors[i].fullAddress + "</td>" +
            "<td>" + visitors[i].phone + "</td>" +
            "<td>" + visitors[i].email + "</td>" +
            "<td class='hide'>" + visitors[i].id + "</td>" +
            "<td>" + visitors[i].comments + "</td>" + 
            "<td><button class='deleteVisitor' onclick='modelDeleteVisitor("+visitors[i].id+");writeTable()'>Delete</button></td>" +
            "</tr>");
    }
    
}

function liker() {
  document.getElementById("likes").innerHTML++;
  change_colour("like");
}
var like = document.getElementById("like");
like.addEventListener("click", liker, true);

function disliker() {
  document.getElementById("likes").innerHTML--;
  change_colour("dislike");
}

var dislike = document.getElementById("dislike");
dislike.addEventListener("click", disliker, true);

function execute() {
  var link = document.getElementById("video").value;
  document.getElementById("toInsertLink").src = link;

  if (document.getElementById("linkTable") == null) {
    var article = document.createElement("section");
    article.id = "linkTable";
    article.style.alignContent = "center";

    var tbl = document.createElement("table");
    tbl.style.width = "100%";
    tbl.setAttribute("border", "1");

    var tbdy = document.createElement("tbody");
    tbdy.id = "tableBody";

    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + link + "</td>";

    tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    article.append(tbl);
    document.getElementsByTagName("main")[0].appendChild(article);
  } else {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + link + "</td>";
    document.getElementById("tableBody").appendChild(tr);
  }
}

function pinIt() {
  var marquee = document.createElement("marquee");
  marquee.innerHTML = document.getElementById("pininput").value;
  document.getElementById("pinnwand").appendChild(marquee);
  change_colour("pin-submit");
}
//var sumbitPin = document.getElementById("pin-submit");
//sumbitPin.addEventListener("click", pinIt, true);

function change_colour(button_id) {
  if (button_id !== undefined) {
    // generate random numbers for rgb
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    // set rgb color
    let button = document.getElementById(button_id);
    button.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
}

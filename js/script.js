// JS file //

//pop-up functions
// When the user clicks on div, open the popup
function popupFunction1() {
  var popup = document.getElementById("popupTextCrypto");
  popup.classList.toggle("show");
}

function popupFunction2() {
  var popup = document.getElementById("popupTextNft");
  popup.classList.toggle("show");
}

function popupFunction3() {
  var popup = document.getElementById("popupTextTimeSt");
  popup.classList.toggle("show");
}

function popupFunction4() {
  var popup = document.getElementById("popupTextInfo");
  popup.classList.toggle("show");
}

function popupFunction5() {
  var popup = document.getElementById("popupTextHacker");
  popup.classList.toggle("show");
}

function popupFunction6() {
  var popup = document.getElementById("popupTextHash");
  popup.classList.toggle("show");
}

function popupFunction7() {
  var popup = document.getElementById("popupTextPow");
  popup.classList.toggle("show");
}

function popupFunction8() {
  var popup = document.getElementById("popupTextReward");
  popup.classList.toggle("show");
}

//d3 functions
// d3.html("assets/GOT-network.svg").then(function(newDocument) {
//
//   const mySvg = newDocument.querySelector("svg");
//
//   document.querySelector("#visualization-container").appendChild(mySvg);
//
//   //Select all the groups inside the nodes groups
//   //On each group do something when i click it
//   const clusters = d3.selectAll("#nodes > g");
//   clusters.on("click", function() {
//     clusters.style("opacity" , 0.3);
//     d3.select(this).style("opacity", 1);
//   });
//
//   console.log(clusters);
//
// });

d3.html("assets/timeline.svg").then(function(newDocument3) {

  const mySvg3 = newDocument3.querySelector("svg");

  document.querySelector("#timeline-container").appendChild(mySvg3);

  //Select all the groups inside the nodes groups
  //On each group do something when i click it
  const clusters = d3.selectAll("#year-timeline > g");
  clusters.on("click", function() {
    clusters.style("opacity" , 0.2);
    d3.select(this).style("opacity", 1);
  });

  console.log(clusters);

});

d3.html("assets/keywords/keywords.svg").then(function(newDocument2) {

  const mySvg2 = newDocument2.querySelector("svg");

  document.querySelector("#keywords-container1").appendChild(mySvg2);

  //Select all the groups inside the nodes groups
  //On each group do something when i click it
  const clusters = d3.selectAll("#key > g");
  clusters.on("click", function() {
    clusters.style("opacity" , 0.05);
    d3.select(this).style("opacity", 1);
  });

  console.log(clusters);

});

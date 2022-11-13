

let geo = document.getElementById('Geo');
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

geo.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});




(function a() {
  
    var old = console.log;
    var logger = document.getElementById('loc');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
          
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
}
)();




var row = 4;
var columns = 4;

var currTile;
var otherTile;

window.onload=function main(){
  for(let r=0; r < row ;r++){
    for(let c=0; c < columns ;c++){
      //<img>
      let tile = document.createElement("img");
      tile.src="./img/wycinek/blank.png";
      tile.addEventListener("dragstart", dragStart); 
      tile.addEventListener("dragover", dragOver);   
      tile.addEventListener("dragenter", dragEnter); 
      tile.addEventListener("dragleave", dragLeave); 
      tile.addEventListener("drop", dragDrop);       
      tile.addEventListener("dragend", dragEnd);   
      
      document.getElementById("PuzzleBox").append(tile);
    }
  }

  let pieces = [];

  for(let i=1;i<=row*columns;i++){
    pieces.push(i.toString());
  }
  
 
    function Roll(){
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }}
    
   document.getElementById("Puzzle").addEventListener("click", Roll());
    

  for(let i=0;i<pieces.length;i++){
    let tile = document.createElement("img");
    tile.src="./img/wycinek/"+pieces[i] + ".jpeg";
    tile.addEventListener("dragstart", dragStart); 
    tile.addEventListener("dragover", dragOver);   
    tile.addEventListener("dragenter", dragEnter); 
    tile.addEventListener("dragleave", dragLeave); 
    tile.addEventListener("drop", dragDrop);       
    tile.addEventListener("dragend", dragEnd);     
    document.getElementById("puzzleDivContainer").append(tile);
  }

function dragStart(){
  currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; 
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}

}

 
  var marker = new L.marker([53.447196, 14.491953]);
  var map = L.map('map').setView([53.447196,14.491953],14);
  marker.addTo(map);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  

  var rast = document.getElementById("Raster");
  function res(){
  var zut = url("../img/Przechwytywanie.png"),
  imageBounds = [[53.451375, 14.481461], [53.444142,14.503412]];
  L.imageOverlay(zut, imageBounds).addTo(map);
  }
  rast.addEventListener('click',res);
  
  
  map.on('click', 
      function(e){
   
          var coord = e.latlng.toString().split(',');
          var lat = coord[0].split('(');
          var lng = coord[1].split(')');
          console.log("Your location is:"+"</br>"+" latitude: "+ lat[1]+ "</br>" +"longitude:" + lng[0]);
             
      });
  
     
         var x = document.getElementById('loc');
         setTimeout(() => {  x.remove(); }, 11000);
  
  
  
  
  




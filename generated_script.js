var panaramas, photo1, photos, photo2, photo3, done;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function display_panarama() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_panarama = document.getElementById('panarama');
  element_panarama.setAttribute("src", randomMember(panaramas)); }

// Describe this function...
function display_photos() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  photo1 = randomMember(photos);
  photo2 = randomMember(photos);
  photo3 = randomMember(photos);
  done = false;
  while (!done) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    if (photo1 == photo2) {
      photo2 = randomMember(photos);
    } else if (photo1 == photo3) {
      photo3 = randomMember(photos);
    } else if (photo2 == photo3) {
      photo3 = randomMember(photos);
    } else {
      done = true;
    }
  }
  let element_photo1 = document.getElementById('photo1');
  element_photo1.setAttribute("src", photo1);
  let element_photo2 = document.getElementById('photo2');
  element_photo2.setAttribute("src", photo2);
  let element_photo3 = document.getElementById('photo3');
  element_photo3.setAttribute("src", photo3); }


panaramas = ['images/panarama1.jpg', 'images/panarama2.jpg']; photos = ['images/spas_sobor.jpg', 'images/borysohlibsky_cathedral.jpg', 'images/st_catherine_church.jpg', 'images/yeletsky_monastery.jpg', 'images/piatnytska_church2.jpg', 'images/museum_of_antiquities.jpg', 'images/hotel_desna.jpg', 'images/philharmony.jpg', 'images/regimental_chancellery.jpg', 'images/collegium.jpg', 'images/desna.jpg']; display_panarama(); display_photos();


document.getElementById('panarama').addEventListener('click', (event) => {
  display_panarama();

});

document.getElementById('photo1').addEventListener('click', (event) => {
  display_photos();

});

document.getElementById('photo2').addEventListener('click', (event) => {
  display_photos();

});

document.getElementById('photo3').addEventListener('click', (event) => {
  display_photos();

});

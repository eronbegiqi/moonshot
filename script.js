const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

/* Make negativ number go red */
function MakeNegative() {
  TDs = document.getElementsByTagName('td');
  for (var i=0; i<TDs.length; i++) {
          var temp = TDs[i];
          if (temp.firstChild.nodeValue.indexOf('-') == 0) temp.className = "negative";
      }
}

MakeNegative();
/* Make positive number go green */
function MakePositive() {
  TDs = document.getElementsByTagName('td');
  for (var i=0; i<TDs.length; i++) {
          var temp = TDs[i];
          if (temp.firstChild.nodeValue.indexOf[4] >= 0) temp.className = "positive";
      }
}
MakePositive();

function filled(){
  var Image_Id = document.getElementById('filled-img');
            if (Image_Id.src.match("assets/Star 1.svg")) {
                Image_Id.src = "assets/Star 2.svg";
            }
            else {
                Image_Id.src = "assets/Star 1.svg";
            }
}

//Tool Tip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
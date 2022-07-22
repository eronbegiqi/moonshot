const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

//Make color change based on number positive or negative
function MakePosNeg(n) {
  for (var i = 0; i < n.length; i++) {
    var temp = n[i];
    if (temp.firstChild.nodeValue.indexOf("-") < 0) {
      temp.className = "positive";
    } else {
      temp.className = "negative";
    }
  }
}
var TDs = document.querySelectorAll(".plusmin");
const column = document.querySelectorAll(`td:nth-child(6)`);
const column2 = document.querySelectorAll(`td:nth-child(8)`);

onload = MakePosNeg(column);
onload = MakePosNeg(column2);
onload = MakePosNeg(TDs);
///

function filled() {
  var Image_Id = document.getElementById("filled-img");
  if (Image_Id.src.match("assets/Star 1.svg")) {
    Image_Id.src = "assets/Star 2.svg";
  } else {
    Image_Id.src = "assets/Star 1.svg";
  }
}

//Tool Tip
tippy(".tip-wl", {
  content: "Add to watchlist!",
  arrow: true,
  followCursor: true,
});

// tippy(".filter-2", {
//   content: "Add to watchlist!",
//   arrow: true,
//   placement: 'bottom',
//   animation: 'shift-toward-extreme',
//   trigger: 'click',
//   followCursor: true,
//   allowHTML: true,
// });

tippy(".lang", {
  content: "",
});

// Copy text


const copyToClipboard = (elementId) => {
  const text = document.getElementById(elementId).innerHTML;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      tippy(".btn-0", {
        content: "Copied",
        arrow: true,
        followCursor: true,
        showOnCreate: true,
      });
    })
    .catch((err) => {
      console.error(`Error copying text to clipboard: ${err}`);
    });
};

//Image logo upload size resulution
function validateSize(input) {
  const fileSize = input.files[0].size / 1024 / 1024; // in MiB
  if (fileSize > 2) {
    alert('File size exceeds 2 MiB');
    // $(file).val(''); //for clearing with Jquery
  } else {
    // Proceed further
  }
}
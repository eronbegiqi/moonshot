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
//File uploader

// Register the plugin with FilePond
FilePond.registerPlugin(FilePondPluginFileValidateType); // Type of file
FilePond.registerPlugin(FilePondPluginImageValidateSize); // Resolution
// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
const pond = FilePond.create(inputElement, {
  // Only accept images
  allowImageValidateSize: [true],
  imageValidateSizeMaxWidth: [200],
  imageValidateSizeMaxHeight: [200],
  imageValidateSizeLabelExpectedMaxSize: ["Maximum size is 200 x 200 pixels"],
  acceptedFileTypes: ["image/png"],
});

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

///Fetch API prices
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const apis = [
  {
    id: "eth",
    url: "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=A648CSNISJNNW6TWAY6VYIRABFS2C7YCDT",
  },
  {
    id: "bnb",
    url: "https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=512DXVIGWKJQCSDAUGV6JUIN9AV5G2JHKK\n",
  },
  {
    id: "fantom",
    url: "https://api.ftmscan.com/api?module=stats&action=ftmprice&apikey=W7T5QNHX5WIW9AN4BB8C62IISXS13N5JA8",
  },
];

apis.forEach(function (api) {
  async function getPrice() {
    try {
      let res = await fetch(api.url, requestOptions);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderPrice() {
    let objs = await getPrice();
    let price = objs.result;
    let html = "$ " + `${price.ethusd}`;

    let ids = document.getElementById(api.id);
    ids.innerHTML = html;
  }
  renderPrice();
});

async function getPrice() {
  try {
    let res = await fetch(
      "https://api.polygonscan.com/api?module=stats&action=maticprice&apikey=87SH1Q55XWEXAH9C2YIS1W4UFAC3T5KU39",
      requestOptions
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderPrice() {
  let objs = await getPrice();
  let price = objs.result;
  let html = "$ " + `${price.maticusd}`;

  let ids = document.getElementById("matic");
  ids.innerHTML = html;
}
renderPrice();
///Fetch API gas fee

async function getGasfee() {
  try {
    let res = await fetch(
      "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=A648CSNISJNNW6TWAY6VYIRABFS2C7YCDT",
      requestOptions
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderGasfee() {
  let objs = await getGasfee();
  let gasfee = objs.result;
  let html = `${gasfee.ProposeGasPrice}`+  " Gwei" ;

  let ids = document.getElementById("ethe-gas-standard");
  ids.innerHTML = html;
}
renderGasfee();



/////Password meter
const myPassMeter = passwordStrengthMeter({
  containerElement: "#pswmeter",
  passwordInput: "#psw-input",
});

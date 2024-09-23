function getInputFromId(id) {
  return parseFloat(document.getElementById(id).value);
}

function setTextValue(id, value) {
  return (document.getElementById(id).innerText = value);
}

// jei section a hidden shseta hobe bg white else bg green

// tabSwitch
function tabSwitch(id) {
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
  
}
document.getElementById("donationTab").addEventListener("click", (e) => {
  tabSwitch("donationSection");
});
document.getElementById("historyTab").addEventListener("click", (e) => {
  tabSwitch("historySection");
});


document.addEventListener("DOMContentLoaded", function () {
  const donationTab = document.getElementById("donationTab");
  const historyTab = document.getElementById("historyTab");

  const donationSection = document.getElementById("donationSection");
  const historySection = document.getElementById("historySection");

  // Set up event listener for the donation tab
  donationTab.addEventListener("click", function () {
    donationTab.style.backgroundColor = "red";
    donationTab.style.color = "white";
    
    historyTab.style.backgroundColor = "white";
    historyTab.style.color = "#333";
    historyTab.style.border = "1px solid #d1d1d1";

    // Show donation section, hide history section
    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");
  });

  // Set up event listener for the history tab
  historyTab.addEventListener("click", function () {
    historyTab.style.backgroundColor = "green";
    historyTab.style.color = "white";
    
    donationTab.style.backgroundColor = "white";
    donationTab.style.color = "#333";
    donationTab.style.border = "1px solid #d1d1d1";

    // Show history section, hide donation section
    historySection.classList.remove("hidden");
    donationSection.classList.add("hidden");
  });
});


/* 
function colorSwitch(id){
    document.getElementById(id).classList.toggle("bg-[#B4F461]")
} */

// historyNewElement
function historyNewElement(inputValue, setTextId) {
  const newDiv = document.createElement("div");
  newDiv.classList.add(
    "w-full",
    "border",
    "border-black/15",
    "p-6",
    "rounded-xl",
    "my-5"
  );
  newDiv.innerHTML = `<h1 class="font-semibold"> ${inputValue} Taka is ${
    document.getElementById(setTextId).innerText
  } </h1>
        <p class="font-light text-sm text-black/80 mt-2"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>`;
  document.getElementById("historySection").appendChild(newDiv);
}




function checkIsAllDigit(value){
  let check = false;

  for ( let i of value ) {
      if ( isNaN(i)==false ) {
          check = true;
      }
      else{
          check = false
      }
  }
  return check
}




let newMyBalance = 5500;
let noakhaliTotalDonation = 0;
document.getElementById("donateNowButton1").addEventListener("click", (e) => {
  let noakhaliInputValue = getInputFromId("noakhaliInput");

  // console.log(typeof document.getElementById('noakhaliInput').value);
  

  if (isNaN(noakhaliInputValue) == true || noakhaliInputValue < 0 || checkIsAllDigit(document.getElementById('noakhaliInput').value)==false) {
    alert("Please enter valid amount");
    document.getElementById("noakhaliInput").value = "";
  } else {
    if (newMyBalance < noakhaliInputValue) {
      alert("insufficient balance");
      document.getElementById("noakhaliInput").value = "";
    } else {
      setTextValue(
        "noakhaliTotal",
        `${(noakhaliTotalDonation += noakhaliInputValue)} BDT`
      );

      newMyBalance = newMyBalance - noakhaliInputValue;
      document.getElementById("myBalance").innerText = `${newMyBalance} BDT`;
      document.getElementById("noakhaliInput").value = "";

      historyNewElement(noakhaliInputValue, "noyakhaliHeadText");
      //modal
      document
        .getElementById("donateNowButton1")
        .setAttribute("onclick", my_modal_1.showModal());
    }
  }
});

let feniTotalDonation = 0;
document.getElementById("donateNowButton2").addEventListener("click", (e) => {
  let feniInputValue = getInputFromId("feniInput");
  if (isNaN(feniInputValue) == true || feniInputValue < 0) {
    alert("Please enter valid amount");
    document.getElementById("feniInput").value = "";
  } else {
    if (newMyBalance < feniInputValue) {
      alert("insufficient balance");
      document.getElementById("feniInput").value = "";
    } else {
      setTextValue("feniTotal", `${(feniTotalDonation += feniInputValue)} BDT`);

      newMyBalance = newMyBalance - feniInputValue;
      document.getElementById("myBalance").innerText = `${newMyBalance} BDT`;
      document.getElementById("feniInput").value = "";

      historyNewElement(feniInputValue, "feniHeadText");
      //modal
      document
        .getElementById("donateNowButton1")
        .setAttribute("onclick", my_modal_1.showModal());
    }
  }
});

let quotaTotalDonation = 0;
document.getElementById("donateNowButton3").addEventListener("click", (e) => {
  let quotaInputValue = getInputFromId("quotaInput");
  if (isNaN(quotaInputValue) == true || quotaInputValue < 0) {
    alert("Please enter valid amount");
    document.getElementById("quotaInput").value = "";
  } else {
    if (newMyBalance < quotaInputValue) {
      alert("insufficient balance");
      document.getElementById("quotaInput").value = "";
    } else {
      setTextValue(
        "quotaTotal",
        `${(quotaTotalDonation += quotaInputValue)} BDT`
      );

      newMyBalance = newMyBalance - quotaInputValue;
      document.getElementById("myBalance").innerText = `${newMyBalance} BDT`;
      document.getElementById("quotaInput").value = "";

      historyNewElement(quotaInputValue, "quotaHeadText");
      //modal
      document
        .getElementById("donateNowButton1")
        .setAttribute("onclick", my_modal_1.showModal());
    }
  }
});

document.getElementById("blogButton").addEventListener("click", (e) => {
  window.location.assign("blog.html");
});

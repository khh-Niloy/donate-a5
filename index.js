function getInputFromId(id) {
  return parseFloat(document.getElementById(id).value);
}

function setTextValue(id, value) {
  return (document.getElementById(id).innerText = value);
}


// tab Switch
function tabSwitch(id) {
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

//tab color Switch
document.getElementById("donationTab").addEventListener("click", (e) => {
  tabSwitch("donationSection");

  document.getElementById("donationTab").style.backgroundColor = '#B4F461'
  document.getElementById("donationTab").style.border = '0px solid #0000004e'
  document.getElementById("historyTab").style.border = '1px solid #0000004e'
  document.getElementById("historyTab").style.backgroundColor = 'white'
});
document.getElementById("historyTab").addEventListener("click", (e) => {
  tabSwitch("historySection");

  document.getElementById("historyTab").style.backgroundColor =  '#B4F461'
  document.getElementById("historyTab").style.border = '0px solid #0000004e'
  document.getElementById("donationTab").style.backgroundColor = 'white'
  document.getElementById("donationTab").style.border = '1px solid #0000004e'
});


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
  newDiv.innerHTML =
  `<h1 class="font-semibold"> ${inputValue} Taka is ${document.getElementById(setTextId).innerText} </h1>
  <p class="font-light text-sm text-black/80 mt-2"> Date : ${Date(Date.now()).toString()}</p>`;
  document.getElementById("historySection").appendChild(newDiv);
}

// extra validation
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

  if (isNaN(noakhaliInputValue) == true || noakhaliInputValue < 0 || checkIsAllDigit(document.getElementById('noakhaliInput').value)==false) {
    alert("Please enter valid amount");
    document.getElementById("noakhaliInput").value = "";
  }
  else {
    if (newMyBalance < noakhaliInputValue) {
      alert("insufficient balance");
      document.getElementById("noakhaliInput").value = "";
    }
    else {
      setTextValue("noakhaliTotal",`${(noakhaliTotalDonation += noakhaliInputValue)} BDT`);
      newMyBalance = newMyBalance - noakhaliInputValue;
      document.getElementById("myBalance").innerText = `${newMyBalance} BDT`;
      document.getElementById("noakhaliInput").value = "";
      historyNewElement(noakhaliInputValue, "noyakhaliHeadText");
      //modal
      document.getElementById("donateNowButton1").setAttribute("onclick", my_modal_1.showModal());
    }
  }
});



let feniTotalDonation = 0;
document.getElementById("donateNowButton2").addEventListener("click", (e) => {
  let feniInputValue = getInputFromId("feniInput");

  if (isNaN(feniInputValue) == true || feniInputValue < 0 || checkIsAllDigit(document.getElementById('feniInput').value)==false) {
    alert("Please enter valid amount");
    document.getElementById("feniInput").value = "";
  }
  else
  {
    if (newMyBalance < feniInputValue) {
      alert("insufficient balance");
      document.getElementById("feniInput").value = "";
    }
    else {
      setTextValue("feniTotal", `${(feniTotalDonation += feniInputValue)} BDT`);
      newMyBalance = newMyBalance - feniInputValue;
      document.getElementById("myBalance").innerText = `${newMyBalance} BDT`;
      document.getElementById("feniInput").value = "";
      historyNewElement(feniInputValue, "feniHeadText");
      //modal
      document.getElementById("donateNowButton1").setAttribute("onclick", my_modal_2.showModal());
    }
  }
});




let quotaTotalDonation = 0;
document.getElementById("donateNowButton3").addEventListener("click", (e) => {
  let quotaInputValue = getInputFromId("quotaInput");

  if (isNaN(quotaInputValue) == true || quotaInputValue < 0 || checkIsAllDigit(document.getElementById('quotaInput').value)==false) {
    alert("Please enter valid amount");
    document.getElementById("quotaInput").value = "";
  }
  else
  {
    if (newMyBalance < quotaInputValue) {
      alert("insufficient balance");
      document.getElementById("quotaInput").value = "";
    }
    else {
      setTextValue("quotaTotal", `${(quotaTotalDonation += quotaInputValue)} BDT`);
      newMyBalance = newMyBalance - quotaInputValue;
      document.getElementById("myBalance").innerText = `${newMyBalance} BDT`;
      document.getElementById("quotaInput").value = "";
      historyNewElement(quotaInputValue, "quotaHeadText");
      //modal
      document.getElementById("donateNowButton1").setAttribute("onclick", my_modal_3.showModal());
    }
  }
});


// go to blog
document.getElementById("blogButton").addEventListener("click", (e) => {
  window.location.assign("blog.html");
});

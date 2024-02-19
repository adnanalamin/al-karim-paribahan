const bus = document.getElementsByClassName("btn-ticket");
let count = 0;
const perSeat = 550;
for (let buses of bus) {
  buses.addEventListener("click", function () {
    count = count + 1;

    if (count <= 4) {
      const seatInfo = document.getElementById("set-left");
      const seatInfoText = seatInfo.innerText;
      const seatInfoValue = parseInt(seatInfoText);
      const seatCount = seatInfoValue - 1;
      seatInfo.innerHTML = seatCount;

      const selectedSeat = document.getElementById('selected-seat');
      const selectedSeatText = selectedSeat . innerText;
      const showSelectedSeat = parseInt(selectedSeatText);
      const countSelectedSeat = showSelectedSeat + 1;
      selectedSeat.innerHTML = countSelectedSeat;

      

      const sitNamevalue = buses.innerText;

      const showSitInfo = document.getElementById("showInfo");
      const tr = document.createElement("tr");
      const sitName = document.createElement("td");
      sitName.innerText = sitNamevalue;
      const sitClass = document.createElement("td");
      sitClass.innerText = "Economy";
      const price = document.createElement("td");
      price.innerText = perSeat;

      tr.appendChild(sitName);
      tr.appendChild(sitClass);
      tr.appendChild(price);

      showSitInfo.appendChild(tr);

      if (buses.value !== "") {
        return;
      } else {
        buses.disabled = true;
      }

      const totalPrice = document.getElementById("total");
      const totalPriceValue = totalPrice.innerText;
      const finalPrice = parseInt(totalPriceValue);

      let totalAmount = finalPrice + perSeat;

      totalPrice.innerText = totalAmount;

      // Grand ToTal
      const grandTotal = document.getElementById('grand-total');
      const grandTotalText = grandTotal.innerText;
      let grandTotalValue = parseInt(grandTotalText);
      let grandTotalPrice = grandTotalValue + perSeat;
      grandTotal.innerText = grandTotalPrice;
      

      
      if (count == 4) {
        const btnActive = document.getElementById("copupon-btn");
        btnActive.classList.remove("btn-disabled");
      }

      enabalButton();
    } 
  });
}
function coupon() {
  const totalPrice = document.getElementById("total");
  const totalPriceValue = totalPrice.innerText;
  const finalPrice = parseInt(totalPriceValue);
  const cupon = document.getElementById("couponCode");
  const cuponCode = cupon.value;
  if (cuponCode === "NEW15") {
    const newPrice = (finalPrice * 15) / 100;
    

    // create new element
    const showSitInfo = document.getElementById("show-copupon-info");
      const discountPrice = document.createElement("p");
      discountPrice.innerText = "Total Discount";
      const discountPriceValue = document.createElement("p");
      discountPriceValue.innerText = newPrice;

      // grand total
      const grandTotal = document.getElementById('grand-total');
      const grandTotalText = grandTotal.innerText;
      let grandTotalValue = parseInt(grandTotalText);
      let grandTotalPrice = grandTotalValue - newPrice;
      grandTotal.innerText = grandTotalPrice;
      
      showSitInfo.appendChild(discountPrice);
      showSitInfo.appendChild(discountPriceValue);

      const btnActive = document.getElementById("copupon-active");
    btnActive.classList.add("hidden");

  }else if(cuponCode === "Couple 20"){
    const newPrice = (finalPrice * 20) / 100;

    // create new element
    const showSitInfo = document.getElementById("show-copupon-info");
      const discountPrice = document.createElement("p");
      discountPrice.innerText = "Total Discount";
      const discountPriceValue = document.createElement("p");
      discountPriceValue.innerText = newPrice;

      // grand total
      const grandTotal = document.getElementById('grand-total');
      const grandTotalText = grandTotal.innerText;
      let grandTotalValue = parseInt(grandTotalText);
      let grandTotalPrice = grandTotalValue - newPrice;
      grandTotal.innerText = grandTotalPrice;

      showSitInfo.appendChild(discountPrice);
      showSitInfo.appendChild(discountPriceValue);
    
    const btnActive = document.getElementById("copupon-active");
    btnActive.classList.add("hidden");
  }
}

function showModat() {
  const modalShow = document.getElementById("modal");
  modalShow.classList.remove("hidden");
}

function enabalButton() {
  const phoneNumber = document.getElementById("have-number");
  phoneNumber.addEventListener('input',function(){
    if (count >= 1 && phoneNumber.value > 0 ) {
      const submit = document.getElementById("submit-btn");
      submit.classList.remove("btn-disabled");
    }
  })
}

function continueBtn(){
window.location.href = 'index.html'
}

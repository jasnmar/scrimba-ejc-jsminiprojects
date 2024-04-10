import { menuArray } from "./data.js";

//Array that holds the current order
let itemsOrderedArray = []
//Global that holds the name of the person entered in the pay form
let payFormName = "";
//The submit payment modal (defined in HTML)
const payForm = document.getElementById("pay-modal");


setupPage()

function setupPage() {
  loadMenu();
  const payModal = document.getElementById("pay-modal");
  //Event listener on the submit payment form
  payForm.addEventListener("submit", function (e) {
    e.preventDefault();
    itemsOrderedArray = [];
    payModal.classList.add("hidden");
    payFormName = new FormData(payForm).get("personname");
    renderThankYou();
  });
  const pfCancelBtn = document.getElementById("pay-cancel-btn")
  pfCancelBtn.addEventListener("click", function(e) {
    e.preventDefault();
    payModal.classList.add('hidden')
    renderOrder()

  })

}

function payNow(e) {
  e.preventDefault()
  const payModal = document.getElementById('pay-modal')
  payModal.classList.add("hidden")
}

// Builds the main part of the menu
// I think this function would be much shorter had I 
// just used innerHTML and backticks, but I'm not sure
// I really love that format
function loadMenu() {
  //get the menu div, defined in HTML
  const menuDiv = document.getElementById("menu")
  //For every menu item
  menuArray.forEach(menuItem => {
    //Create a div for that itme
    const menuItemDiv = document.createElement('div')
      menuItemDiv.classList.add("menu-item")
      menuDiv.appendChild(menuItemDiv);
        //add the "image" for the menu item
        const emoji = document.createElement('p')
          emoji.textContent = menuItem.emoji
          emoji.classList.add('emoji')
          menuItemDiv.appendChild(emoji)
        //A div for the descriptive text and the add button
        const orderDiv = document.createElement('div')
          orderDiv.classList.add('order')
          menuItemDiv.appendChild(orderDiv)
        //A div for the descriptive text
        const infoDiv = document.createElement('div')
          //Name of the menu item
          const itemName = document.createElement('p')
          itemName.classList.add('itemname')
          itemName.textContent = menuItem.name
          infoDiv.appendChild(itemName)
          //Menu item ingrediants
          const ingredientsP = document.createElement('p')
          ingredientsP.classList.add("ingrediants")
          ingredientsP.textContent = menuItem.ingredients.join(", ")
          infoDiv.appendChild(ingredientsP)
          //Menu Item Price
          const priceP = document.createElement('p')
          priceP.classList.add('price')
          priceP.textContent = "$"+menuItem.price;
          infoDiv.appendChild(priceP)

        orderDiv.appendChild(infoDiv)
        //The add button
        const addToOrderBtn = document.createElement('button')
          addToOrderBtn.classList.add('addbtn')
          //Tack on the "id" of the menu item so that we know what
          //should be added to the order
          addToOrderBtn.dataset.id=menuItem.id
          //Event listener so that we can do something when the 
          //button is clicked.
          addToOrderBtn.addEventListener("click", addToOrder)
            const plusSpan = document.createElement('span')
            plusSpan.classList.add("plus")
            plusSpan.textContent = "+"
            addToOrderBtn.appendChild(plusSpan)
        orderDiv.appendChild(addToOrderBtn)

    });


}

// This is called by the + button event listener. It adds the item to the 
// order.
function addToOrder(event) {
    // Checks for either the button or the + text inside the button.
    const menuID = event.target.dataset.id || event.target.parentElement.dataset.id
    addItemToOrder(menuID)
}

//Takes the ID of a menu item and adds it to the current order
function addItemToOrder(itemID) {
  const itemToAdd = menuArray.find((menuItem) => {
    return menuItem.id == itemID
  })
  itemsOrderedArray.push(itemToAdd)
  renderOrder()
}

//Removes an item from the order, based on where
//in the order array the item is
function removeItemToOrder(arrayIndex) {
  itemsOrderedArray.splice(arrayIndex, 1)
  renderOrder()
}

//renders the current order portion of the site
function renderOrder() {
  const orderDiv = document.getElementById("currentorder")
  //Checks to see if there is anything in the current order
  //If not, just render a blank div
  if(itemsOrderedArray.length > 0) {
    const orderHeader = `<div class='orderheader'>Your Order</div>`
    let itemList = "<ul>"
    //iterate through the items ordered array and create
    //an li for each thing in the list
    for(let i=0; i<itemsOrderedArray.length; i++){
      const item = itemsOrderedArray[i]
      itemList += `
      <li>
        <div class="orderline">
          <div>
            ${item.name}
            <button class="removebtn" id=${i}>
              remove
            </button>
          </div>
          $${item.price}
        </div>
      </li>
       `
      const endList = `</ul>`
      //get the total of all items that have been added to the
      //order list
      const orderTotal = itemsOrderedArray.reduce((total, item) =>  {
        return total + item.price
      },0)
      //Construct the total HTML
      const totalHTML = `
      <div class="orderline total">
        <div>Total price:</div>
        <div>$${orderTotal}</div>
      </div>`
      //Submit button HTML
      const submitOrderBtnHtml = `
      <button id="order-btn" class="action-button full-width">
        Complete order
      </button>
      `
      // Put all the HTML together and add it to the page
      orderDiv.innerHTML = orderHeader + itemList + endList + totalHTML + submitOrderBtnHtml
      //Add event listeners to the remove buttons
      const removeBtns = document.querySelectorAll(".removebtn")
      removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener("click", function(event) {
          removeItemToOrder(event.target.id)
        })
      });
      //The order button at the bottom
      const orderBtn = document.getElementById("order-btn")
      orderBtn.addEventListener("click", completeOrder)
    }
  } else {
    //If there's nothing in the list just make the div blank
    orderDiv.innerHTML = ""
  }
}

//Fired by the complete order button at the bottom of the page
function completeOrder() {
  const payModal = document.getElementById("pay-modal")
  //The form is defined in HTML, this just removes the hidden 
  //class from the form.
  payModal.classList.remove("hidden")
  //Make sure the focus is on the pay form
  const payModalName = document.getElementById("pay-name")
  payModalName.focus()

}

//Renders the thank you message after an order is placed
function renderThankYou() {
  //The order list should be empty, so this clears the div
  renderOrder();
  const orderDiv = document.getElementById("currentorder");
  //New div in the current order location
  const tyDiv = document.createElement("div");
  tyDiv.classList.add("thank-you");
  const tyText = document.createElement("p");
  //String that includes the customer name from the pay form
  tyText.textContent = "Thanks " + payFormName + "! Your order is on its way!";
  tyDiv.appendChild(tyText);
  orderDiv.appendChild(tyDiv);
}
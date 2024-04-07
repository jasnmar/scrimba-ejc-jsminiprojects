import { menuArray } from "./data.js";

setupPage()

function setupPage() {
    loadMenu();

}

function loadMenu() {
  const menuDiv = document.getElementById("menu")
  menuArray.forEach(menuItem => {
    const menuItemDiv = document.createElement('div')
      menuItemDiv.classList.add("menuItem")
      menuDiv.appendChild(menuItemDiv);

        const emoji = document.createElement('p')
          emoji.textContent = menuItem.emoji
          emoji.classList.add('emoji')
          menuItemDiv.appendChild(emoji)
        const orderDiv = document.createElement('div')
          orderDiv.classList.add('order')
          menuItemDiv.appendChild(orderDiv)
        const infoDiv = document.createElement('div')
          const itemName = document.createElement('p')
          itemName.classList.add('itemname')
          itemName.textContent = menuItem.name
          infoDiv.appendChild(itemName)
                
          const ingredientsP = document.createElement('p')
          ingredientsP.classList.add("ingrediants")
          ingredientsP.textContent = menuItem.ingredients.join(", ")
          infoDiv.appendChild(ingredientsP)

          const priceP = document.createElement('p')
          priceP.classList.add('price')
          priceP.textContent = "$"+menuItem.price;
          infoDiv.appendChild(priceP)

        orderDiv.appendChild(infoDiv)
        const addToOrderBtn = document.createElement('button')
          addToOrderBtn.classList.add('addbtn')
          addToOrderBtn.dataset.id=menuItem.id
          addToOrderBtn.addEventListener("click", addToOrder)
            const plusSpan = document.createElement('span')
            plusSpan.classList.add("plus")
            plusSpan.textContent = "+"
            addToOrderBtn.appendChild(plusSpan)
        orderDiv.appendChild(addToOrderBtn)

    });


}

function addToOrder(event) {
    console.log(event.target)
    const myMenuID = event.target.dataset.id || event.target.parentElement.dataset.id
    console.log(myMenuID)
}

const itemsOrderedArray = []

function addItemToOrder(itemID) {

}
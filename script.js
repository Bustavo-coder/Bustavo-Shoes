
"use strict"

const navigation = document.querySelector(".navigation")
const navbar = document.querySelector(".navbar")
const cart = document.querySelector(".carti")
const counter = document.querySelector(".counter")
const value = document.querySelector(".value")
const button = document.querySelector(".button")
const modal = document.querySelector(".modal")
const product = document.querySelector(".product")
const empty = document.querySelector(".empty")
const Pdelete = document.querySelector(".delete")
const quantity = document.querySelector(".quantity")
const total = document.querySelector(".total")
const counterConatainer = document.querySelector(".counter-container");

const active = () => {
    navigation.classList.toggle("active")
}

navbar.addEventListener("click", active)

const showModal = function () {
    modal.classList.toggle("hidden")
}

// Hidde Modal
showModal()

// hidenocart and display product
const hideCart = () => {
    counter.textContent = value.value;
    if (counter.textContent > 0) {
        product.classList.toggle("hidden");
        empty.classList.add("hidden")
    } else {
        empty.classList.remove("hidden");
        product.classList.add("hidden")
    }
}

// cal total


// clicckin on cart 

cart.addEventListener("click", function () {
    showModal()
    hideCart()
    quantity.textContent = value.value
    const cal = 125 * quantity.textContent
    total.textContent = `$${cal}.000`

})

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        showModal()
        hideCart()

    }
})


// addingg button to add input value to the counter and displaying and removing cart 

button.addEventListener("click", function () {
    hideCart()    
})

// deleting cart
Pdelete.addEventListener("click", function () {
    counter.textContent = 0
    product.classList.add("hidden")
    empty.classList.remove("hidden")
    value.value = 0
})



import { createHeader, rel_cart, rel } from "../../modules/ui.js"
let arr = [
    {
        background: "linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)"
    },
    {
        background: "background: linear-gradient(84.37deg, #5F0A87 2.27%, #A4508B 92.26%)"
    },
    {
        background: "background: linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%)"
    },
    {
        background: "background: linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%)"
    }
]
let tbody = document.querySelector('tbody')
let carts = document.querySelector('.carts')
let header = document.querySelector('header')

rel(tbody)
rel_cart(arr, carts)
createHeader(header)



// let tbody = document.querySelector('tbody')
// function rel(place) {
//     for (let i = 0; i < 6; i++) {
//         place.innerHTML += `
//     <tr>
//         <td>1232312</td>
//         <td>VISA</td>
//         <td>Автомобиль</td>
//         <td>414,000,000</td>
//         <td>4 дня назад</td>
//     </tr>
//     `
//     }
// }
// rel(tbody)

// let carts = document.querySelector('.carts')
// function rel_cart(place) {
//     for (let i = 0; i < arr.length; i++) {
//         place.innerHTML += `
//         <div class="item_cart" style=" ${arr[i].background};">
//         <p class="visa">Visa</p>
//         <p class="rub">RUB</p>
//     </div>
//         `
//     }
// }
// rel_cart(carts)
let k = document.querySelector('.koshelki')
k.onclick = () => {
    location.assign("/pages/kosh/")
}
let nam = document.querySelector('.nam')
const loc = JSON.parse(localStorage.getItem('user'))
nam.innerHTML = loc.name
let email = document.querySelector('.email')
email.innerHTML = loc.email
// let header = document.querySelector('header')
// export const createHeader = (place) => {
//     place.innerHTML += `
//  <div class="box">
//     <div class="left">
//         <a href="#">Главная</a>
//         <a href="#">Мои кошельки</a>
//         <a href="#">Мои транзакции</a>
//     </div>
//     <div class="right">
//         <a href="#">${loc.email}</a>
//         <img src="/imgs/log-out (1) 1.png">
//     </div>
// </div>
// `
// }
// createHeader(header)

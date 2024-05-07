export const createHeader = (place) => {
    place.innerHTML += `
 <div class="box">
    <div class="left">
        <a href="#">Главная</a>
        <a href="#">Мои кошельки</a>
        <a href="#">Мои транзакции</a>
    </div>
    <div class="right">
        <a href="#">alexadams@google.com</a>
        <img src="/imgs/log-out (1) 1.png">
    </div>
</div>
`
}





export function rel_cart(arr ,place) {
    for (let i = 0; i < arr.length; i++) {
        place.innerHTML += `
        <div class="item_cart" style=" ${arr[i].background}">
        <p class="visa">${arr[i].name}</p>
        <p class="rub">${arr[i].val}</p>
    </div>
        `
    }
}



export function rel(place) {
    for (let i = 0; i < 6; i++) {
        place.innerHTML += `
    <tr>
        <td>1232312</td>
        <td>VISA</td>
        <td>Автомобиль</td>
        <td>414,000,000</td>
        <td>4 дня назад</td>
    </tr>
    `
    }
}

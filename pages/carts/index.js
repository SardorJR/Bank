import axios from 'axios';
import { rel_cart, createHeader } from '../../modules/ui.js';
let base = import.meta.env.VITE_BASE_URL
document.addEventListener('DOMContentLoaded', function () {
    let arr = [
        {
            background: "linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)"
        },
        {
            background: "linear-gradient(84.37deg, #5F0A87 2.27%, #A4508B 92.26%)"
        },
        {
            background: "linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%)"
        },
        {
            background: "linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%)"
        }
    ];

    let header = document.querySelector('header');
    let carts = document.querySelector('.cartss');

    if (header ) {
        createHeader(header);
        // rel_cart(arr, carts);
    } else {
        console.error("Header or .cartss element not found.");
    }




    axios.get(base + '/cards')
        .then(res => {
            rel_cart(res.data, carts)
        })
});



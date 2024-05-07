import axios from "axios"
let base = import.meta.env.VITE_BASE_URL
let form = document.forms.namedItem('valy')

form.onsubmit = (e) => {
    e.preventDefault()
    const fm = new FormData(e.target)
    const user = {}
    fm.forEach((value, key) => user[key] = value)
    console.log(user)

    axios.post(base + '/cards', user)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                location.assign('../pages/carts/index.html')
            }
        })
}









const select = document.querySelector('select')

axios.get('https://api.apilayer.com/fixer/symbols', {


    headers: {
        apikey: import.meta.env.VITE_API_KEY
    }
}
)
    .then(res => {
        const symbols = res.data.symbols
        for (let key in symbols) {
            const defSelected = key === "USD"
            const opt=new Option(`${key}:${symbols[key]}`,key,defSelected,defSelected)

            select.append(opt)
        }
    })


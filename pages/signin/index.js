import axios from "axios"
const base = import.meta.env.VITE_BASE_URL
const form = document.forms.namedItem('us')

form.onsubmit = (e) => {
 
  e.preventDefault()

  const fm = new FormData(e.target)


  const user = {}

  fm.forEach((value, key) => user[key] = value)

  console.log(user)

  const { password, email } = user

  if (!password || !email) return

  axios.get(base + "/users?email=" + email)
    .then(res => {
      if (res.data.length === 0) {
       openModal()
        return
      }
      const [data] = res.data
      if (data.password === password) {
       openModal2()
        delete data.password
        localStorage.setItem('user' , JSON.stringify(data))
        // location.assign('/pages/signup/index.html')
      }else{
        openModal()
      }
    })




  form.reset()
}

function openModal() {
  var modal = document.getElementById("myModal");
  var modalMessage = document.getElementById("modalMessage");

  modalMessage.textContent = 'Error';
  modal.style.display = "block";

  
  setTimeout(()=> {
    modal.style.display = "none";
  }, 2000);
}
function openModal2() {
  var modal = document.getElementById("myModall");
  var modalMessage = document.getElementById("modalMessagee");

  modalMessage.textContent = 'Success';
  modal.style.display = "block";

  
  setTimeout(()=> {
    modal.style.display = "none";
  
    location.assign('/pages/signup/index.html')
  }, 4000);
}


import axios from "axios"
const base = import.meta.env.VITE_BASE_URL
const form = document.forms.namedItem('users')

form.onsubmit = (e) => {
  e.preventDefault()

  const fm = new FormData(e.target)


  const user = {}

  fm.forEach((value, key) => user[key] = value)

  console.log(user)

  const { name, surname, password, email } = user

  if (!name || !surname || !password || !email) return

axios.get(base + "/users?email=" + email)
  .then(res=>{
    if(res.data.length>0){
     openModal()
      return
    }

    axios.post(base + '/users', user)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        openModal2()
        // location.assign('/pages/signin/index.html')
      }
    })
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
    location.assign('/pages/signin/index.html')
  }, 4000);
}



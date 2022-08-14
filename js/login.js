
const loginInPut=document.querySelector("#login input");
const loginForm=document.querySelector("#login");

const greeting=document.querySelector("#greeting");

function onLoginBtnClick(event){
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username=loginInPut.value;
  localStorage.setItem("username", username);
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove("hidden");
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
  }


const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginBtnClick);
} else {
  paintGreetings(savedUsername);
}
const toggle = document.querySelector("#toggle");
const senha = document.querySelector("#senha");

toggle.onclick = () => {
    senha.type =
        senha.type === "password" ? "text" : "password";
}
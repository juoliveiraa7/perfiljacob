const toggleTheme = document.getElementById("toggleTheme");

const roothtml = document.documentElement;

//função para alternar o tema
function changeTheme () {
    const correntTheme = roothtml.getAttribute("data-theme");

    correntTheme === "dark" ? roothtml.setAttribute("data-theme", "light") : roothtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

}

toggleTheme.addEventListener("click", changeTheme);
//fim da função mudar o tema
const toggleTheme = document.getElementById("toggleTheme");

const roothtml = document.documentElement;

const accordionHeaders = document.querySelectorAll(".accordion-header")

//função para alternar o tema
function changeTheme () {
    const correntTheme = roothtml.getAttribute("data-theme");

    correntTheme === "dark" ? roothtml.setAttribute("data-theme", "light") : roothtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

}

toggleTheme.addEventListener("click", changeTheme);
//fim da função mudar o tema

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})
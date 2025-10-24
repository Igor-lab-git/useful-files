//COOKIE
// document.cookie = "userName=Igor";
// document.cookie = "age=36";

// const setCookie = (name, value, option = {}) => {
//   let cookieBody =  document.cookie =`${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

//   const optionAsString = Object.entries(option)
//   .map(entry => entry.join("="))
//   .join("; ");

//   if(cookieBody) {
//     cookieBody += `; ${optionAsString}`;
//   }
//   document.cookie = cookieBody;
// }

// const deleteCookie = (name) => {
//     setCookie(name, "", {"max-age": -1})
// }

// setCookie("date of birth", "22 09 1989")
// console.log(document.cookie);

// const getCookie = (name) => {
//     for(let enrtyCokokie of document.cookie.split("; ")) {
//         const [cookieName, cookieVlue] = enrtyCokokie.split("=");

//         if(decodeURIComponent(cookieName) === name) {
//             return cookieVlue
//         }
        
//     }
// }

// deleteCookie("userName")
// console.log(getCookie("age"));
// console.log("userName: ",getCookie("userName"));
// console.log(getCookie("date of birth"));


//localStorage, sessionStorage

// sessionStorage.setItem("user", JSON.stringify({
//     id: 1,
//     name: "Igor",
//     isAdmin: true
// }))
// console.log(JSON.parse(sessionStorage.getItem("user")));
// console.log(sessionStorage.removeItem("userName"));
// sessionStorage.clear()
// console.log(sessionStorage);

class ThemeSwitcher {
    selectors = {
        switchThemeButton: "[data-js-change-theme]",
    }

    themes = {
        dark: "dark",
        light: "light",
    }

    stateClasses = {
        isDarkTheme: "is-dark-theme",
    }

    storageKey = "theme"

    constructor() {
        this.switchThemeButton = document.querySelector(this.selectors.switchThemeButton);
        this.setInitialTheme();
        this.bindeEvents();
    }

    get isDarkThemeCashe() {
        return localStorage.getItem(this.storageKey) === this.themes.dark;
    }

    setInitialTheme() {
        document.querySelector("html").classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCashe);
    }

    onClick = () => {
        localStorage.setItem (
            this.storageKey,
            this.isDarkThemeCashe ? this.themes.light : this.themes.dark
        )

        document.querySelector("html").classList.toggle(this.stateClasses.isDarkTheme);
    }

    bindeEvents() {
        this.switchThemeButton.addEventListener("click", this.onClick)
    }
}

new ThemeSwitcher();


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}


navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== Dictionary API ====================*/


const btn = document.querySelector(".btn")
const result = document.querySelector(".dataBody")


// button to search word when clicked

btn.addEventListener("click", () => {
    const inputs = document.getElementById("input")
    const countryName =  inputs.value
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`

    if(countryName){
        fetch(url).then((res) => res.json()).then((data) => {
            result.innerHTML =
                `
                <div class= "countryName-flag">
        <img src=${data[0].flags.svg} class="coutry-flag">
        <h2> Country Name: ${data[0].name.common} </h2>
        </div>
        <div class= "results">
      
        <h2> Capital: ${data[0].capital[0]} </h2>
        <h2> Continents: ${data[0].continents[0]} </h2>
        <h2> population: ${data[0].population} </h2>
        <h2> Timezone: ${data[0].timezones[0]} </h2>
        <h2> Languauge: ${Object.values(data[0].languages).toString().split(",").join(", ")} </h2>
        </div>
        `
        }).catch(()=>{
            if(countryName == 0){
                result.innerHTML =
                `<h3>The input field cannot be empty</h3>`
            }else{
                result.innerHTML =
                `<h3>please enter a valid country name</h3>`
            }
        })
    }else{
        alert("search input empty")
        return
    }
   
   
})


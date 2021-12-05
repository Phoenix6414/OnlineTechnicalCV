// Show Menue
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('navToggle','navMenu')

// remove menue - big screen 
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('navMenu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// scroll sections
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scrollTop', scrollActive)

//change themes
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Download PDF
// Initialize jsPDF Class
var doc = new jsPDF();
// takinding the html div class #cv
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
 
// id the button that does the dowload
$('#genPdf').click(function () {
    //setting the margins of the pages
    doc.fromHTML($('#cv').html(), 15, 15, {
        'width': 700,
        'elementHandlers': specialElementHandlers,        
    });
    //this does the actual saving XD
    doc.save('CV_WC.pdf');
});

// get GitHub
// const btnRepo = document.getElementById("btnRepo")
// btnRepo.addEventListener("click", getRepo)
// async function getRepo(){
//     const url = "Https://api.github.com/search/repositories?q=full_name:="
//     const response = await fetch(url)
//     const result = await response.json()

//     result.items.forEach(i=>{
//         const anchor = document.createElement("a")
//         anchor.href = i.html_url
//         anchor.textContent = i.full_name;
//         divResult.appendChild(anchor)
//         divResult.appendChild(document.createElement("br"))
//     })
    
// }
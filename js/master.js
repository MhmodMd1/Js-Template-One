// Check If There's Local Storage Color Option 
let mainColors = localStorage.getItem("color_option")

if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color" , localStorage.getItem("color_option"))

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active")

        // Add Active Class On Element With Data-Color === Local Storage Item
        if (element.dataset.color === mainColors) {

            // Add Active Class
            element.classList.add("active")
        }

    })
}

// Random Background Option 
let backgroundOption = true

// Variable To Control The Interval 
let backgroundInterval

// Check If There's Local Storage Random Background Item 
let backgroundLocalItem = localStorage.getItem("background_option")

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === 'true') {
        backgroundOption = true
    } else {
        backgroundOption = false
    }
    // Remove Active Class From All Spans 
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active")
    })
    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active")
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active")
    }
}
// Toggle Spin Class On Icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin")
    // Toggle Class Open On Main Settings Box 
    document.querySelector(".settings-box").classList.toggle("open")
}

// Switch Colors 
let colorsLi = document.querySelectorAll(".colors-list li")

// Loop On All List Items
colorsLi.forEach(li => {

    //Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root 
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

        // Set Color On Local Storage 
        localStorage.setItem("color_option" , e.target.dataset.color)



        handleActive(e)

    })
})

// Switch Random Backgrounds Option 
let randomBackEl = document.querySelectorAll(".random-backgrounds span")

// Loop On All Span
randomBackEl.forEach(span => {

    //Click On Every List Items
    span.addEventListener("click", (e) => {

        handleActive(e)

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true
            randomize()
            localStorage.setItem("background_option", true)
        } else {
            backgroundOption = false
            clearInterval(backgroundInterval)
            localStorage.setItem("background_option", false)
        }
    })
})

// Selet Landing Page Element 
let landingPage = document.querySelector(".landing-page")
// Get Array Of Imgs 
let imgsArray = ["01.jpg" ,"02.jpg" ,"03.jpg" ,"04.jpg" ,"05.jpg"]

// Function To Randomize Imgs
function randomize() {
    if (backgroundOption = true) {
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length)
            // Change Background Image Url 
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")'
        }, 5000)
    }
}

// Select Skills Selector 
let ourSkills = document.querySelector(".skills")

window.onscroll = function () {

    // Skills Offest Top 
    let skillsOffestTop = ourSkills.offestTop;

    // Skills Outer Height 
    let skillsOuterHeight = ourSkills.offestHeight;

    // Window Height 
    let windowHeight = this.innerHeight;

    // Window Scroll Top 
    let windowScrollTop = this.pageYOffset

    

    if (windowScrollTop > (skillsOffestTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
        console.log("hi")

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress

        })
    }
}


// Create Popup With The Image 
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        // Create Overlay ELement 
        let overlay = document.createElement("div")

        // Add Class To Overlay 
        overlay.className = 'popup-overlay'

        // Append Overlay To The Body 
        document.body.appendChild(overlay)

        // Create The Popup Box 
        let popupBox = document.createElement("div")

        // Add Class To The Popup Box 
        popupBox.className = 'popup-box'

        if (img.alt !== null) {

            // Create Heading 
            let imgHeading = document.createElement("h3")

            // Create Text For Heading 
            let imgText = document.createTextNode(img.alt)

            // Append The Text To The Heading 
            imgHeading.appendChild(imgText)

            // Append The Heading To The Popup Box 
            popupBox.appendChild(imgHeading)
        }

        // Create The Image 
        let popupImage = document.createElement("img")

        // Set Image Source 
        popupImage.src = img.src

        // Add Image To Popup Box 
        popupBox.appendChild(popupImage)

        // Add The Popup Box To Body
        document.body.appendChild(popupBox)

        // Create The Close Span 
        let closeButton = document.createElement("span")

        // Create Text To Close Button 
        let closeButtonText = document.createTextNode("X")

        // Append Text To Close Button 
        closeButton.appendChild(closeButtonText)

        // Add Class To Button 
        closeButton.className = "close-button"

        // Add Close Button To The Pupup Box 
        popupBox.appendChild(closeButton)
    })

})

// Close Popup 
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {
        // Remove The Current Popup 
        e.target.parentNode.remove()

        // Remove Overlay 
        document.querySelector(".popup-overlay").remove()
    }
})

// Select All Bullets 
const allBullets = document.querySelectorAll(".nav-bullets .bullet")


// Select All Links 
const allLinks = document.querySelectorAll(".links a")


function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
            
    
            e.preventDefault()
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
                
            })
    
        })
    })
}
scrollToSomewhere(allBullets)
scrollToSomewhere(allLinks)


function handleActive(ev) {

    // Remove Active Class From All Childerns
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active")

    })

    // Add Active Class On Self 
    ev.target.classList.add("active")

}

let bulletsSpan = document.querySelectorAll(".bullets-option span")

let bulletsContainer = document.querySelector(".nav-bullets")

let bulletLocalItem = localStorage.getItem("bullets_option")

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active")

    })

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block'

        document.querySelector(".bullets-option .yes").classList.add("active")

    } else {

        bulletsContainer.style.display = 'none'

        document.querySelector(".bullets-option .no").classList.add("active")
    }

}

bulletsSpan.forEach(span => {

    span.addEventListener('click', (e) => {

        if (span.dataset.display === "show") {

            bulletsContainer.style.display = 'block'

            localStorage.setItem('bullets_option' , 'block')

        } else {

            bulletsContainer.style.display = 'none'

            localStorage.setItem('bullets_option' , 'none')
        }

        handleActive(e  )

    })

})


// Reset Button 
document.querySelector(".reset-options").onclick = function () {

    localStorage.clear()





    window.location.reload()


}

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu")
let tLinks = document.querySelector(".links")

toggleBtn.onclick = function (e) {
    
    // Stop Propagation
    e.stopPropagation()

    // Toggle Menu "menu-active" On Button
    this.classList.toggle('menu-active')

    // Toggle Class "open" On Links
    tLinks.classList.toggle('open')

}

// Click Anywhery Outside Menu And Toggle Button 
document.addEventListener('click', (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check if Menu is Open    
        if (tLinks.classList.contains('open')) {

            // Toggle Menu "menu-active" On Button
            toggleBtn.classList.toggle('menu-active')

            // Toggle Class "open" On Links
            tLinks.classList.toggle('open')

        }


        // toggleBtn.classList.remove('menu-active')
        // tLinks.classList.remove('open')
    }

})

// Stop Propagation On Menu 
tLinks.onclick = function (e) {

    e.stopPropagation()

}
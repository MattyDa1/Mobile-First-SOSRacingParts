/*Navigationsbar inspiration fra --> https://www.youtube.com/watch?v=At4B7A4GOPg&ab_channel=WebDevSimplified*/
const DropDownMenu = document.getElementsByClassName('dropdownmenu') [0]
const Navbar_Links = document.getElementsByClassName('navbar_links') [0]

DropDownMenu.addEventListener('click', () => {
  Navbar_Links.classList.toggle('active')
  }
)
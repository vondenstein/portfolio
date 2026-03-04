const toggle = document.querySelector("[data-menu-toggle]")
const drawerLinks = document.querySelectorAll("[data-drawer-link]")
const body = document.body

let isOpen = false

function openMenu() {
  isOpen = true
  body.classList.remove("menu-closed")
  body.classList.add("menu-open")
  document.documentElement.style.overflow = "hidden"
}

function closeMenu() {
  isOpen = false
  body.classList.remove("menu-open")
  body.classList.add("menu-closed")
  document.documentElement.style.cssText = ""
}

toggle?.addEventListener("click", () => {
  if (isOpen) {
    closeMenu()
  } else {
    openMenu()
  }
})

drawerLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (!isOpen) return

    e.preventDefault()
    const href = (link as HTMLAnchorElement).href
    closeMenu()

    setTimeout(() => {
      window.location.href = href
    }, 700)
  })
})

const media = window.matchMedia("(max-width: 768px)")
media.addEventListener("change", e => {
  if (isOpen && !e.matches) {
    closeMenu()
  }
})

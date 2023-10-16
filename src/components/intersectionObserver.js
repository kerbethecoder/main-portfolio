const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("showElem")
    } else {
      entry.target.classList.remove("showElem")
    }
  })
})

export function observeHiddenElements(element) {
  element.forEach(el => observer.observe(el))
}

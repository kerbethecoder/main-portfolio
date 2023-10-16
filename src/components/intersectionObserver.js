// let observer

// if ("IntersectionObserver" in window) {
//   observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("showElem")
//       } else {
//         entry.target.classList.remove("showElem")
//       }
//     })
//   })
// } else {
//   import("intersection-observer").then(() => {
//     observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("showElem")
//         } else {
//           entry.target.classList.remove("showElem")
//         }
//       })
//     })
//   })
// }

// export function observeHiddenElements(element) {
//   element.forEach(el => observer.observe(el))
// }

let observer

if (typeof window !== "undefined" && "IntersectionObserver" in window) {
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showElem")
      } else {
        entry.target.classList.remove("showElem")
      }
    })
  })
}

export function observeHiddenElements(elements) {
  if (observer) {
    elements.forEach(el => observer.observe(el))
  }
}

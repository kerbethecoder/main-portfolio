let observer;

if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showElem');
      }
    });
  });
}

export function observeHiddenElements(elements) {
  if (observer) {
    elements.forEach((el) => observer.observe(el));
  }
}

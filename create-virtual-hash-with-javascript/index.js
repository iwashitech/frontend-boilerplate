const scrollToVirtualAnchor = () => {
  if (location.hash) {
    scrollTo(0, document.querySelector(`[data-id="${location.hash.replace('#anchor_', '')}"]`).offsetTop)
  }
};

window.addEventListener('load', () => {
  Array.from(document.querySelectorAll('[data-target]')).forEach((ele, i) => {
    ele.dataset.id = i;
  });

  document.querySelectorAll('ul a').forEach((ele, i) => {
    ele.addEventListener('click', (event) => {
      event.preventDefault();
      scrollTo(0, document.querySelector(`[data-id="${i}"]`).offsetTop)
      history.pushState(null, null, `#anchor_${i}`);
    })
  });
  
  scrollToVirtualAnchor();
});

window.addEventListener('hashchange', () => {
  scrollToVirtualAnchor();
});
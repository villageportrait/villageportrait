
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.slide-wrapper');
  const slides = Array.from(wrapper.children);
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  wrapper.insertBefore(lastClone, slides[0]);
  wrapper.appendChild(firstClone);

  const updatedSlides = Array.from(wrapper.children);
  let index = 1;

  function scrollToIndex(i) {
    const target = updatedSlides[i];
    if (!target) return;
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.transform = `translateX(-${target.offsetLeft}px)`;
  }

  scrollToIndex(index);

  // Preload first two real slides immediately
  const preload1 = updatedSlides[1]?.querySelector('img')?.src;
  const preload2 = updatedSlides[2]?.querySelector('img')?.src;
  if (preload1) new Image().src = preload1;
  if (preload2) new Image().src = preload2;

  document.querySelector('.next')?.addEventListener('click', () => {
    if (index >= updatedSlides.length - 1) return;
    index++;
    scrollToIndex(index);
  });

  document.querySelector('.prev')?.addEventListener('click', () => {
    if (index <= 0) return;
    index--;
    scrollToIndex(index);
  });

  wrapper.addEventListener('transitionend', () => {
    if (updatedSlides[index].isEqualNode(firstClone)) {
      wrapper.style.transition = 'none';
      index = 1;
      wrapper.style.transform = `translateX(-${updatedSlides[index].offsetLeft}px)`;
    }
    if (updatedSlides[index].isEqualNode(lastClone)) {
      wrapper.style.transition = 'none';
      index = updatedSlides.length - 2;
      wrapper.style.transform = `translateX(-${updatedSlides[index].offsetLeft}px)`;
    }
  });

  window.addEventListener('resize', () => {
    wrapper.style.transition = 'none';
    wrapper.style.transform = `translateX(-${updatedSlides[index].offsetLeft}px)`;
  });
});

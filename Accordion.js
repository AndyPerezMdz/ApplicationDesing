document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', () => {

        accordionItems.forEach(i => {
          const content = i.querySelector('.accordion-content');
          const currentHeader = i.querySelector('.accordion-header');
          if (i !== item) {
            content.style.maxHeight = null;
            currentHeader.classList.remove('active');
          }
        });
  
 
        const content = item.querySelector('.accordion-content');
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          header.classList.remove('active');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          header.classList.add('active');
        }
      });
    });
  });
  
const dropdownSelected = document.getElementById('dropdownSelected');
const dropdownOptions = document.getElementById('dropdownOptions');
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownSelected.addEventListener('click', () => {
  dropdownOptions.classList.toggle('open');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    dropdownItems.forEach(i => i.classList.remove('selected'));

    e.target.classList.add('selected');

    dropdownSelected.textContent = e.target.textContent;

    dropdownOptions.classList.remove('open');
  });
});

document.addEventListener('click', function(event) {
  if (!dropdownSelected.contains(event.target) && !dropdownOptions.contains(event.target)) {
    dropdownOptions.classList.remove('open');
  }
});
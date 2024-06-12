const toggleBtn = document.querySelector('.toggle-btn');
const togglebtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open')

    togglebtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
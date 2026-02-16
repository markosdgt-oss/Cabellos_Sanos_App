const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    dropdown.style.display = 'none';
  }
}
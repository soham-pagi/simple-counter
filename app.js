const header = document.getElementById('head');
const button = document.getElementById('click');

function editHeader() {
  header.innerHTML = parseInt(header.innerHTML) + 1;
}

button.addEventListener('click', editHeader);

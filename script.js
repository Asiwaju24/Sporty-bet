document.getElementById('qwerty').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});

function openSearchPopup() {
  var popup = document.getElementById("search-popup");
  popup.style.display = "block";
}

function closeSearchPopup() {
  var popup = document.getElementById("search-popup");
  popup.style.display = "none";
}
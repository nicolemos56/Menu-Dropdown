function minhafuncao(){
  const menudropdown = document.getElementById("idMenuDropdown");
  menudropdown.classList.toggle("show"); 
}



window.onclick = function(event) {
  if (!event.target.matches('.btndrop') && !event.target.closest('.menu-container')) { 
    var dropdowns = document.getElementsByClassName("menu-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove("show");
      }
    }
  }
}


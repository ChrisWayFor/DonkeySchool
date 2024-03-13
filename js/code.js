document.getElementById('languagebouton').addEventListener('click', function () {
    var flag1 = document.getElementById('flagfrance');
    var flag2 = document.getElementById('flagangleterre');

    if (flag1.classList.contains('activeflag')) {
        flag1.classList.remove('activeflag');
        flag1.classList.add('hiddenflag');
        flag2.classList.remove('hiddenflag');
        flag2.classList.add('activeflag');
    }
    else if (flag2.classList.contains('activeflag')) {
        flag2.classList.remove('activeflag');
        flag2.classList.add('hiddenflag');
        flag1.classList.remove('hiddenflag');
        flag1.classList.add('activeflag');
    }
});

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}



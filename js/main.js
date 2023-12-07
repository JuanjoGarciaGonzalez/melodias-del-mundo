document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('bars');
    var menu = document.querySelector('.responsive-menu');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});

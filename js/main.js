document.addEventListener('DOMContentLoaded', function () {
    // Change state menu hamburguer
    var checkbox = document.getElementById('bars');
    var menu = document.querySelector('.responsive-menu');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    // Change money value

    let moneyCheckbox = document.getElementById('moneyCheckbox');

    if(moneyCheckbox) {
        moneyCheckbox.addEventListener('change', changeMoney);
    }

    function changeMoney() {
        var moneyValueBasic = document.getElementById('card-money-basic');
        var moneyValueStandart = document.getElementById('card-money-standart');
        var moneyValuePremium = document.getElementById('card-money-premium');

        var monthText = document.getElementsByClassName('card-month');

        if(moneyCheckbox.checked) {
            moneyValueBasic.innerHTML = '49';
            moneyValueStandart.innerHTML = '99';
            moneyValuePremium.innerHTML = '129';
            Array.prototype.forEach.call(monthText, function(el) {
                el.innerHTML = 'YEAR';
            });
        }else {
            moneyValueBasic.innerHTML = '4.99';
            moneyValueStandart.innerHTML = '9.99';
            moneyValuePremium.innerHTML = '12.99';
            Array.prototype.forEach.call(monthText, function(el) {
                el.innerHTML = 'MONTH';
            });
        }
    }
});

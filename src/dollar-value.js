var PaypalBRL = {
  brl: function () {
    var value = document.querySelector('.balanceNumeral .vx_h2').textContent;

    value = value.replace('R$', '').trim();
    value = value.replace('.', '');
    value = value.replace(',', '.');

    return value;
  },

  dollar: function () {
    var value = document.querySelector('.currenciesList .currenciesEntry:last-child').textContent.replace('$', '').trim();

    value = value.replace('USD', '');
    value = value.replace('.', '');
    value = value.replace(',', '.');

    return value;
  },

  calc: function () {
    return (this.brl()/this.dollar()).toFixed(4);
  },

  output: function () {
    var label = document.querySelector('.balanceNumeral .numeralLabel');
    label.innerHTML = "1 USD = <strong>R$" + this.calc() + ' BRL</strong>';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  PaypalBRL.output();
}, false);

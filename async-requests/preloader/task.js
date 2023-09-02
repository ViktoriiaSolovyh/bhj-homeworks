var loader = document.getElementById('loader');
var items = document.getElementById('items');

loader.classList.add('loader_active');

var data = new XMLHttpRequest();
data.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
data.onreadystatechange = function() {

  if (data.readyState === 4 && data.status === 200) {

    var response = JSON.parse(data.responseText);

    var valutes = response.response.Valute;
    for (var key in valutes) {
      var valute = valutes[key];

      var code = document.createElement('div');
      code.className = 'item__code';
      code.textContent = valute.CharCode;

      var value = document.createElement('div');
      value.className = 'item__value';
      value.textContent = valute.Value;

      var currency = document.createElement('div');
      currency.className = 'item__currency';
      currency.textContent = 'руб.';

      var item = document.createElement('div');
      item.className = 'item';
      item.appendChild(code);
      item.appendChild(value);
      item.appendChild(currency);
      items.appendChild(item);
    }

    loader.classList.remove('loader_active');
  }
};
data.send();
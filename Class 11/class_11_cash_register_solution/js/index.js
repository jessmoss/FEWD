var total = 0;

function addValue() {
  // This is how we define multiple variables with only one `var` keyword.
  // Notice the commas between each variable.
  var entryElement = document.getElementById('newEntry'),
      entriesElement = document.getElementById('entries'),
      totalElement = document.getElementById('total');

  var entry = entryElement.value;
  entry = parseFloat(entry);
  var currency = currencyFormat(entry);

  var entriesHTML = entriesElement.innerHTML;
  entriesHTML = entriesHTML + '<div>' + currency + '</div>';

  entriesElement.innerHTML = entriesHTML;

  total = total + entry;

  totalElement.innerHTML = currencyFormat(total);

  entryElement.value = '';
}

function currencyFormat(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2); // `toFixed(2)` converts a number into a string, keeping 2 decimals
  currency = '$' + currency;
  return currency;
}

document.getElementById('entryBtn').onclick = addValue;
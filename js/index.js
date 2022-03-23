
function textHeader() {
  var textHeader = "<p><div class=\"java-table-title\"><span>Periodo</span><span>Capital</span><span>Interés</span><span>Deuda</span></div>"
  return textHeader;
}

function textConcating(texto, per, capital, tax, capNew) {
  var textConcat = texto + "<div class=\"java-table-content\"><span>" + per + "</span><span>" + capital + "</span><span>" + tax + "</span><span>" + capNew + "</span></div>";
  return textConcat
}

function sumTotals(A, cuotas, intere, amortiza) {
  var sumCuotas =  parseFloat(A[0]) + parseFloat(cuotas);
  var sumIntereses = parseFloat(A[1]) + parseFloat(intere);
  var sumAmortizacion = parseFloat(A[2]) + parseFloat(amortiza);
  var B = [sumCuotas, sumIntereses, sumAmortizacion]
  return B;
}


function interesSimple(cap, int, nCout) {
  var deuda = cap;
  // var totals = [0, 0, 0];
  var textMain = textHeader();
  for (var i = 0; i <= nCout; i ++) {
    if(i === 0) {
      textMain = textConcating(textMain, i, 0, 0, cap.toFixed(2));
    }
    else {
      var interes = cap * int / 100;
      deuda = deuda + interes;
      // totals = sumTotals(totals, cuota, interes, amort);
      textMain = textConcating(textMain, i,cap.toFixed(2), interes.toFixed(2), deuda.toFixed(2));
    }
  }
  textMain = textMain + "</p>";
  const textContainer = document.getElementById("js-print");
  textContainer.innerHTML = textMain; 
}

function interesCompuesto(cap, inte, nCuot) {
  var deuda = cap;
  var textMain = textHeader();
  for(var i = 0; i <= nCuot; i ++) {
    if(i === 0) {
      textMain = textConcating(textMain, i, 0, 0, cap.toFixed(2));   
    }
    else {
      var interes = cap * inte / 100;
      var deuda = cap + interes;
      // totals = sumTotals(totals, cuota, interes, amort);
      textMain = textConcating(textMain, i,cap.toFixed(2), interes.toFixed(2), deuda.toFixed(2));
      cap = deuda;
    }
  }
  textMain = textMain + "</p>";
  const textContainer = document.getElementById("js-print");
  textContainer.innerHTML = textMain; 
}

function onClickButtonCalculate() {
  const inputType = document.getElementById("type-select");
  const typeValue = inputType.value;
  const inputMoney = document.getElementById("money");
  const moneyValue = inputMoney.value;
  const inputCapital = document.getElementById("capital");
  const capitalValue = parseFloat(inputCapital.value);
  const inputInteres = document.getElementById("interes");
  const interesValue = parseFloat(inputInteres.value);
  const inputTiempo = document.getElementById("tiempo");
  const tiempoValue = parseFloat(inputTiempo.value);

  const textoss = document.getElementById("java-print-data");
  textoss.innerHTML = "<div class=\"java-data\"><h4>Tipo de interés: <span>" + typeValue + "</span><br>Capital: <span>" + capitalValue + "</span> <span>" + moneyValue+ "</span><br>Taza de interes: <span>" + interesValue + "</span> <span>%</span><br>Tiempo: <span>" + tiempoValue + "</span> <span></span></h4></div>";

  switch(typeValue) {
    case "Simple":
      interesSimple(capitalValue, interesValue, tiempoValue);
      break;
    case "Compuesto":
      interesCompuesto(capitalValue, interesValue, tiempoValue);
      break;
  }
}

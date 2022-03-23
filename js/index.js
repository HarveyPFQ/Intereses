
function textHeader() {
  var textHeader = "<p><div class=\"java-table-title\"><span>Periodo</span><span>Cuotas</span><span>Intereses</span><span>Amortizaciones</span><span>Saldo</span></div>"
  return textHeader;
}

function textConcating(texto, per, cuot, tax, amort, cap) {
  var textConcat = texto + "<div class=\"java-table-content\"><span>" + per + "</span><span>" + cuot + "</span><span>" + tax + "</span><span>" + amort + "</span><span>" + cap + "</span></div>";
  return textConcat
}

function sumTotals(A, cuotas, intere, amortiza) {
  var sumCuotas =  parseFloat(A[0]) + parseFloat(cuotas);
  var sumIntereses = parseFloat(A[1]) + parseFloat(intere);
  var sumAmortizacion = parseFloat(A[2]) + parseFloat(amortiza);
  var B = [sumCuotas, sumIntereses, sumAmortizacion]
  return B;
}


function amortizacionAmericana(cap, int, nCout) {
  var interes = cap * int / 100;
  var totals = [0, 0, 0];
  var textMain = textHeader();
  for (var i = 0; i <= nCout; i ++) {
    if(i === 0) {
      textMain = textConcating(textMain, i, 0, 0 , 0, cap.toFixed(2));
      console.log(textMain);
      console.log("********************");
      console.log(i);
      console.log("Cuota -> " + 0);
      console.log("Interes -> " + 0);
      console.log("Amortizacion -> " + 0);
      console.log("Capital -> " + cap);  
    }
    else if(i == nCout) {
      // cuota = parseFloat(cap) + parseFloat(interes);
      cuota = cap + interes;
      amort = cap;
      cap = cap - amort;
      // totals = sumTotals(totals, cuota.toFixed(2), interes.toFixed(2), amort.toFixed(2));
      totals = sumTotals(totals, cuota, interes, amort);
      textMain = textConcating(textMain, i,cuota.toFixed(2), interes.toFixed(2), amort.toFixed(2), cap.toFixed(2));
      console.log("********************");
      console.log(i);
      console.log("Cuota -> " + cuota);
      console.log("Interes -> " + interes);
      console.log("Amortizacion -> " + amort);
      console.log("Capital -> " + cap);
    }
    else {
      var cuota = interes;
      var amort = 0;
      var cap = cap - amort;
      totals = sumTotals(totals, cuota, interes, amort);
      textMain = textConcating(textMain, i,cuota.toFixed(2), interes.toFixed(2), amort.toFixed(2), cap.toFixed(2));
      console.log("********************");
      console.log(i);
      console.log("Cuota -> " + cuota);
      console.log("Interes -> " + interes);
      console.log("Amortizacion -> " + amort);
      console.log("Capital -> " + cap);
    }
  }
  textMain = textMain + "<div class=\"java-table-total\"><span>Total</span><span>" + totals[0].toFixed(2) + "</span><span>" + totals[1].toFixed(2) + "</span><span>" + totals[2].toFixed(2) + "</span><span></span></div>";
  const textContainer = document.getElementById("js-print");
  textContainer.innerHTML = textMain; 
}

function amortizacionFrancesa(cap, inte, nCuot) {
  var cuota = (cap * inte/100)/(1 - (1 + inte/100)**(-nCuot));
  var totals = [0, 0, 0];
  var textMain = textHeader();
  for(var i = 0; i <= nCuot; i ++) {
    if(i === 0) {
      textMain = textConcating(textMain, i, 0, 0 , 0, cap.toFixed(2));
      console.log("********************");
      console.log(i);
      console.log("Cuota -> " + 0);
      console.log("Interes -> " + 0);
      console.log("Amortizacion -> " + 0);
      console.log("Capital -> " + cap);   
    }
    else {
      var interes = cap * inte / 100;
      var amort = cuota - interes;
      var cap = cap - amort;
      totals = sumTotals(totals, cuota, interes, amort);
      textMain = textConcating(textMain, i,cuota.toFixed(2), interes.toFixed(2), amort.toFixed(2), cap.toFixed(2));
      console.log("********************");
      console.log(i);
      console.log("Cuota -> " + cuota);
      console.log("Interes -> " + interes);
      console.log("Amortizacion -> " + amort);
      console.log("Capital -> " + cap);
    }
  }
  textMain = textMain + "<div class=\"java-table-total\"><span>Total</span><span>" + totals[0].toFixed(2) + "</span><span>" + totals[1].toFixed(2) + "</span><span>" + totals[2].toFixed(2) + "</span><span></span></div>";
  const textContainer = document.getElementById("js-print");
  textContainer.innerHTML = textMain; 
}

function amortizacionAlemana(cap, int, nCout) {
  var amort = cap / nCout;
  var totals = [0, 0, 0];
  var textMain = textHeader();
  for(var i = 0; i <= nCout; i ++) {
    if (i === 0) {
      textMain = textConcating(textMain, i, 0, 0 , 0, cap.toFixed(2));
      console.log("********************");
      console.log(i);
      console.log("Cuota -> " + 0);
      console.log("Interes -> " + 0);
      console.log("Amortizacion -> " + 0);
      console.log("Capital -> " + cap);        
    }
    else {
      var interes = cap * int / 100;
      var cuota = amort + interes;
      var cap = cap - amort;
      totals = sumTotals(totals, cuota, interes, amort);
      textMain = textConcating(textMain, i,cuota.toFixed(2), interes.toFixed(2), amort.toFixed(2), cap.toFixed(2));
      console.log("********************");
      console.log(i);
      console.log("Cuota -> " + cuota);
      console.log("Interes -> " + interes);
      console.log("Amortizacion -> " + amort);
      console.log("Capital -> " + cap);
    }
  }
  textMain = textMain + "<div class=\"java-table-total\"><span>Total</span><span>" + totals[0].toFixed(2) + "</span><span>" + totals[1].toFixed(2) + "</span><span>" + totals[2].toFixed(2) + "</span><span></span></div>";
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
  textoss.innerHTML = "<div class=\"java-data\"><h4>Tipo de amortización: <span>" + typeValue + "</span><br>Capital: <span>" + capitalValue + "</span> <span>" + moneyValue+ "</span><br>Taza de interes: <span>" + interesValue + "</span> <span>%</span><br>Número de cuotas: <span>" + tiempoValue + "</span> <span>cuotas</span></h4></div>";

  switch(typeValue) {
    case "Americana":
      amortizacionAmericana(capitalValue, interesValue, tiempoValue);
      break;
    case "Francesa":
      amortizacionFrancesa(capitalValue, interesValue, tiempoValue);
      break;
    case "Alemana":
      amortizacionAlemana(capitalValue, interesValue,tiempoValue);
      break;
  }
}

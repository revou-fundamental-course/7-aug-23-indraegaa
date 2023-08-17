// Menghitung luas segitiga
function hitungLuasSegitiga() {
  let alas = document.getElementById("Alas").value;
  let tinggi = document.getElementById("Tinggi").value;

  let luas = 0.5 * alas * tinggi;

  document.getElementById("output").innerHTML = "Luas Segitiga = " + luas;
}

// Tombol Reset
function resetForm() {
  let inputAlas = document.getElementById("Alas");
  let inputTinggi = document.getElementById("Tinggi");
  let output = document.getElementById("output");

  inputAlas.value = "";
  inputTinggi.value = "";
  output.innerHTML = "";
}

// Menghitung Keliling Segitiga
function HitungKeliling() {
  let sudutsegitigaa = document.getElementById("sudutsegitigaa").value;
  let sudutsegitigab = document.getElementById("sudutsegitigab").value;
  let sudutsegitigac = document.getElementById("sudutsegitigaC").value;

  let keliling = parseInt(sudutsegitigaa) + parseInt(sudutsegitigab) + parseInt(sudutsegitigac);

  document.getElementById("results").innerHTML = Keliling;
}

function reset() {
  let inputSudutSegitigaA = document.getElementById("sudutsegitigaa");
  let inputSudutSegitigaB = document.getElementById("sudutsegitigab");
  let inputSudutSegitigaC = document.getElementById("sudutsegitigac");
  let results = document.getElementById("results");

  inputSudutSegitigaA.value = "";
  inputSudutSegitigaB.value = "";
  inputSudutSegitigaC.value = "";
  results.innerHTML = "";
}


function ulang() {
  let inputAlas2 = document.getElementById("alas2");
  let inputTall2 = document.getElementById("tall2");
  let outbut2 = document.getElementById("outbut2");

  inputAlas2.value = "";
  inputTall2.value = "";
  outbut2.innerHTML = "";
}

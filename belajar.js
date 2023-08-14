// -------------------------------------
// 📚 1. Pengenalan Variabel dan Tipe Data
// -------------------------------------
// console.log('Saya belajar JS');
// console.log(typeof('hello world'));

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Halo Galih!";

// let myVariable = null;
// console.log(myVariable);
// console.log(typeof(myVariable));

// let payung;
// console.log(payung);
// console.log(typeof(payung));

// let indonesia = false;
// console.log(indonesia);

// let angka = 1 <= 2;
// console.log(angka);
// console.log(typeof(indonesia), typeof(angka));

// let angka1 = 5;
// let angka2 = 8;
// console.log(angka1,angka2);

// let myVariable = "Bob";
// console.log(myVariable);
// myVariable = "Steve";
// console.log(myVariable);

//-----------------------------------
// 📚 2. VARIABLE, CONST, LET, VAR
//-----------------------------------
// var tempat = 'Surabaya'
// console.log(tempat);

// let nama = 'Bambang'
// console.log(nama);

// nama = "Galih"
// console.log(nama);

// const phi = 3.14
// console.log(phi);

// phi = 4
// console.log(phi);

// --------------------------------
// 📚 3. OPERATOR
// --------------------------------
// console.log(5+2);
// console.log('Galih'+'Yudha');
// console.log('50'+2);
// console.log(5+'20');

// console.log('50' * 2);
// console.log(5 * '20');
// console.log(10/2);

// NaN : Not a Number
// console.log('Galih'*'Yudha'); 
// console.log('Galih'-'a');
// console.log('Galih'/'a');

//Deklarasi Variabel, strict equality
//Disarankan gunakan === instead == untuk menghindari bug
// let laptop = 'HP';
// console.log(laptop);

// laptop = 'Lennovo';
// console.log(laptop);

// console.log(laptop == 'Lennovo');
// console.log(laptop == 'HP');

// console.log(laptop === 'Lennovo');
// console.log(laptop !== 'HP');

//----------------------------------
// 📚 4. CONDITIONAL
//----------------------------------
//   const kewarganegaraan = 'Indonesia';
//   if(kewarganegaraan === 'Indonesia'){
//     console.log('Warga Negara Indonesia')
//   } else {
//     console.log('Warga Negara Asing')
//   };
  
//   const kota = 'Semarang';
//   if(kota === 'Jakarta'){
//     console.log('DKI Jakarta')
//   } else if(kota === 'Bandung'){
//     console.log('Jawa Barat')
//   } else if(kota === 'Surabaya'){
//     console.log('Jawa Timur')
//   } else{
//     console.log('Tidak diketahui')
//   };

//-------------------------------------
// 📚 5. FUNGSI
//-------------------------------------
// namaLengkap('Galih', 'Yudha', 'Saputra');

// function namaLengkap(namaDepan, namaTengah, namaBelakang){
//   return console.log(namaDepan + ' ' + namaTengah + ' ' + namaBelakang)
// };

// namaPaspor('Galih', 'Saputra');

// function namaPaspor(namaDepan, namaBelakang){
//   return alert(namaDepan + ' ' + namaBelakang)
// };

// namaLengkap('Galih', 'Saputra', 'Yudha');
// namaPaspor('Galih', 'Yudha');

// // angka(15);

// const angka = function(number){
//   return console.log(number)
// };

// angka(5);
// angka(10);

//-------------------------------------------
// 📚 6. BUILT IN FEATURE JAVASCRIPT
//-------------------------------------------

// const aplikasi = 'zoom'

// console.log(aplikasi)
// console.log(aplikasi.toUpperCase())

// const alat = 'dRoNe';
// console.log(alat);
// console.log(alat.toLocaleLowerCase());
// console.log(alat.toUpperCase());

// let angka = 5
// const angkaString = String(angka)

// console.log(typeof(angka))
// console.log(typeof(angkaString))

// let orang = prompt('Masukkan nama anda', 'Harry Potter')
// console.log(orang)
// console.log(typeof(orang))

// let angka1 = Number(prompt('Masukkan angka pertama'))
// let angka2 = Number(prompt('Masukkan angka kedua'))

// console.log(angka1 + angka2)
// console.log(typeof(angka1), typeof(angka2))

// const koordinatX = prompt('Masukkan Koordinat X');
// const koordinatY = prompt('Masukkan Koordinat Y');
// console.log(koordinatX,',', koordinatY);

//----------------------------------------------------
// 📚 7. EVENT
//----------------------------------------------------
// document.querySelector("html").addEventListener("click", function () {
//   alert("Anda salah klik");
// });

// document.querySelector("h1").addEventListener("click", function () {
//   alert("Halo semuanya, apa kabar");
// });

// const myImage = document.querySelector("img");
// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "./google.png") {
//     myImage.setAttribute("src", "./geocourse.png");
//   } else {
//     myImage.setAttribute("src", "./google.png");
//   }
// };
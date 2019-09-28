function tampil() {
  var kalimat0 = "Saya ingin belajar bersama";
  var kalimat = kalimat0.split(" ")
  kalimat.forEach(function (item, index) {
    console.log("Item :", item,"Index ke", index);
  })

}
tampil()

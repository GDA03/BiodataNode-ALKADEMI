exports.nama = function () {return 'nama           : Gerald Dustin Albert'};
exports.tempatLahir = function () {return 'tempat lahir   : Jakarta'};
exports.tanggalLahir = function () {return 'tanggal lahir  : 26 Oktober 2003'};
exports.alamat = function () {return 'alamat         : Perum Cikopo Permai'};

var biodata = require('./BiodataNode.js')

biodata =
  this.nama() +
  "\n" +
  this.tempatLahir() +
  "\n" +
  this.tanggalLahir() +
  "\n" +
  this.alamat();

console.log(biodata)

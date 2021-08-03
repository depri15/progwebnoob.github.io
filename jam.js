function tampilJam(){
    var w = new Date();
    var j = w.getHours();
    var m = w.getMinutes();
    var d = w.getSeconds();

    j = (j < 10) ? "0" + j : j;
    m = (m < 10) ? "0" + m : m;
    d = (d < 10) ? "0" + d : d;

    var jam = j + ":" + m + ":" + d;

    document.getElementById('kontenjam').innerHTML = jam;
    setTimeout(tampilJam, 1000);
}
tampilJam();
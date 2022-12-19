let guru = document.getElementById("num-guru");
let tendik = document.getElementById("num-tendik");
let ptk = document.getElementById("num-ptk");
let pd = document.getElementById("num-pd");
let guru2 = document.getElementById("num-guru2");
let tendik2 = document.getElementById("num-tendik2");
let ptk2 = document.getElementById("num-ptk2");
let pd2 = document.getElementById("num-pd2");
let totalGuru = document.getElementById("total-guru");
let totalTendik = document.getElementById("total-tendik");
let totalPtk = document.getElementById("total-ptk");
let totalPd = document.getElementById("total-pd");
let thnAjaran = document.getElementById("tahun-ajaran");

function changeData(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  guru.innerHTML = a;
  guru2.innerHTML = b;
  totalGuru.innerHTML = c;
  tendik.innerHTML = d;
  tendik2.innerHTML = e;
  totalTendik.innerHTML = f;
  ptk.innerHTML = g;
  ptk2.innerHTML = h;
  totalPtk.innerHTML = i;
  pd.innerHTML = j;
  pd2.innerHTML = k;
  totalPd.innerHTML = l;
  thnAjaran.innerHTML = m;
}

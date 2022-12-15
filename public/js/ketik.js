var i = 0,
  text;
var j = 0,
  text2;

text = "Selamat Datang di Web Profile";
text2 = "TKIT Nurul Jannah";

function ketik() {
  if (i < text.length) {
    document.getElementById("text-ketik1").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik, 70);
  } else if ((i) => text.length) {
    if (j < text2.length) {
      document.getElementById("text-ketik2").innerHTML += text2.charAt(j);
      j++;
      setTimeout(ketik, 70);
    }
  }
}

ketik();

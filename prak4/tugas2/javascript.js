function light() {
  document.body.style.backgroundColor = "rgba(80, 139, 159, 0.872)";
  let all = document.getElementsByTagName("*");

  for (let i = 0, max = all.length; i < max; i++) {
    all[i].style.color = "#fff";
  }
}

function dark() {
  document.body.style.backgroundColor = "#2c2c2c";
  let all = document.getElementsByTagName("*");
  let h2 = document.getElementsByClassName("heading-style");

  for (let i = 0, max = all.length; i < max; i++) {
    all[i].style.color = "#fff";
    h2[i].style.color = "#fff";
  }
}

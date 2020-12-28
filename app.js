const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");

setInterval(updateClock, 1000)

function updateClock() {
  const date = new Date();
  let s = date.getSeconds() / 60
  let m = (date.getMinutes() + s) / 60
  let h = (date.getHours() + m) / 12

  sec.style.transform = "rotate(" + (s * 360) + "deg)"
  min.style.transform = "rotate(" + (m * 360) + "deg)"
  hour.style.transform = "rotate(" + (h * 360) + "deg)"
}

updateClock()
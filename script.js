let progress = document.getElementById("progressBar");

let totalHeigt = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeigt) * 100;
  progress.style.height = progressHeight + "%";
}
const buyBtn = document.getElementById('buyBtn');
const preBtn = document.getElementById('preBtn');
const videoBtn = document.getElementById('videoBtn');
let mode = true;
let mode2 = true;

if (buyBtn) {
  buyBtn.onclick = function () {
    alert('Pre order page coming soon');
  };
}

if (preBtn) {
  preBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

if (videoBtn) {
  videoBtn.onclick = function () {
    document.querySelector('.video-wrap').scrollIntoView({ behavior: 'smooth' });
  };
}

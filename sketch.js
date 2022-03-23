let beforeSummerImage;

function preload() {
  beforeSummerImage = loadImage('assets/adi.jpeg');
  afterSummerImage = loadImage('assets/adi2.jpg');
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(0, 0);
  // canvas.style('z-index', '-1');
}

function windowResized() {
  // resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  const nowMs = Date.now();
  const dstMs = new Date('March 25, 2022 02:00:00').getTime();
  const timeleft = dstMs - nowMs;

  if (timeleft < 0) {
    background(beforeSummerImage);
    push();
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textFont("monospace", 48);
    textWrap(WORD);
    rectMode(CENTER);
    text(msToTime(timeleft) + " until summer!", windowWidth / 2, 30, windowWidth);
    pop();
  } else {
    push();
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textFont("monospace", 48);
    textWrap(WORD);
    rectMode(CENTER);
    fill(199,21,133);
    text('SUMMERRRRR!!!', windowWidth / 2, 20, windowWidth);
    text('SUMMERRRRR!!!', windowWidth / 2, height - 60, windowWidth);
    pop();

    translate(width / 2, height / 2);
    rotate(radians(frameCount));
    imageMode(CENTER);
    image(afterSummerImage, 0, 0);
  }
}

function msToTime(timeleft) {
  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  // 492378471
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeleft % (1000 * 60)) / 1000);
  const ms = Math.floor(timeleft % 1000);

  return pad(days) + ":" + pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}

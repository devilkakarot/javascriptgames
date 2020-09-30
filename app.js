document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let doodleLeftSpace = 50;
  let doodlerBottomSpace = 250;
  let isGameOver = false;
  let PlatformCount = 5;
  let platforms = [];

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doodler.style.left = doodleLeftSpace + "px";
    doodler.style.bottom = doodlerBottomSpace + "px";
  }

  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      this.left = Math.random() * 315;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("platform");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createPlatforms() {
    for (let i = 0; i < PlatformCount; i++) {
      let platformGap = 600 / PlatformCount;
      let newPlatBottom = 100 + i * platformGap;
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);
    }
  }

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
      setInterval(movePlatforms(), 3000);
      //jump();
    }
  }
  start();
});

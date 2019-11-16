import anime from 'animejs'

function delay(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, t);
  });
}

const Animation = async () => {
  anime.timeline({ loop: false })
    .add({
      targets: '.ml8 .circle-white',
      scale: [0, 2],
      opacity: [1, 0.5],
      easing: "easeInOutExpo",
      rotateZ: 180,
      duration: 1000
    })
    .add({
      targets: '.ml8 .circle-white',
      scale: [2, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1000
    })
    .add({
      targets: '.ml8 .circle-container',
      scale: [0, 1],
      duration: 600,
      easing: "easeInOutExpo",
      offset: '-=1000'
    })
    .add({
      targets: '.ml8 .letters-left',
      scale: [0, 1],
      duration: 600,
      offset: '-=550'
    });

  await delay(2000);

  anime({
    targets: '.ml8 .circle-white',
    rotateZ: 0,
    duration: 8000,
    easing: "linear",
    loop: true,
  });

  anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
  });

  await delay(200);
};

export default Animation;

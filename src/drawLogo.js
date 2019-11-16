import anime from 'animejs'

const drawLogo = async () => {
  const logoPath = document.querySelector("#logo path");

  anime.timeline({ loop: false })
    .add({
      targets: logoPath,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      opacity: [0, 1],
      duration: 2000,
      begin: function (anim) {
        logoPath.setAttribute("stroke", "white");
      },
      complete: function (anim) {
        logoPath.setAttribute('fill', 'url(#logo-gradient-fill)');
        logoPath.setAttribute("stroke", "black");
      },
    })
    .add({
      targets: logoPath,
      duration: 1000,
      easing: "linear",
      complete: function (anim) {
        logoPath.setAttribute('fill', 'url(#logo-gradient-fill)');
        logoPath.setAttribute("stroke", "black");
      },
    });
};

export default drawLogo;
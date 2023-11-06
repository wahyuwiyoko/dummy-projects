const getRandomColor = () => Math.round(Math.random() * 255 + 1);
const setRandomColor = () => {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
};

document.getElementById("random-color").addEventListener("click", () => {
  document.body.style.backgroundColor = setRandomColor();
});

const getSlider = (slider) => document.getElementById(slider);

const changeBodyBackground = (slider) => {
  const rgbColor = `rgb(${slider[0].value}, ${slider[1].value}, ${slider[2].value})`;
  document.body.style.backgroundColor = rgbColor;
};

const sliders = [getSlider("red"), getSlider("green"), getSlider("blue")];

sliders.forEach((element) => element.addEventListener("input", () => {
  changeBodyBackground(sliders);
}));

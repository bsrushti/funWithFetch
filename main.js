let url = "https://official-joke-api.appspot.com/random_ten";

const getScore = function() {
  fetch(url)
    .then(out => {
      return out.json();
    })
    .then(data => {
      showData(data);
    });
};

const randomNumberGenerator = function() {
  return Math.floor(Math.random() * 10 + 1);
};

const showData = function(data) {
  let index = randomNumberGenerator();
  document.getElementById("setupDiv").innerText = data[index].setup;
  document.getElementById("hit").onclick = hit.bind(null, data, index);
};

const hit = function(data, index) {
  let punch = document.getElementById("punch");
  punch.innerText = data[index].punchline;
  punch.style.border = "3px solid green";
  punch.style.fontSize = "30px";
};

window.onload = getScore;

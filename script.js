//profile frop menu

let profile = document.querySelector("#profile");

document.addEventListener("click", (e) => {
  if (!profile.contains(e.target)) {
    profile.classList.remove("active");
  } else {
    profile.classList.toggle("active");
  }
});

//artcile trimming function

function paraLimit() {
  let articlePara = document.querySelectorAll("#article .card-text");

  articlePara.forEach((item) => {
    let paraText = item.innerText;
    let latestPara = paraText.slice(0, 91).trim();
    item.innerText = `${latestPara}...`;
  });
}

paraLimit();

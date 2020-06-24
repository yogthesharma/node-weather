const btn = document.querySelector("#resBtn");
btn.addEventListener("click", () => {
  //   alert();
  const inp = document.querySelector("#location").value;
  const res = document.querySelector("#resTag");
  const load = document.querySelector("#loadId");
  res.innerHTML = "Wait Data Is Loading";
  load.style.background = `url("https://loading.io/asset/384511")`;

  // fetching operation

  fetch(`http://localhost:3001/weather?weather=${inp}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        res.innerHTML = data.error;
      } else {
        res.innerHTML = data.data;
      }
    });
  //   alert("Yes its working");
});

console.log("Making Changes To See Git's behavior");

var resumeLink = document.querySelector("#resume-button-1");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/16xD4c0-ea6eBSpyIkeFk_MwQ44pjb9rq/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/u/0/uc?id=16xD4c0-ea6eBSpyIkeFk_MwQ44pjb9rq&export=download";
  link.download = "Hasbe-Alam-Resume";
  link.click();
});

var resumeLink = document.querySelector("#resume-button-2");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/16xD4c0-ea6eBSpyIkeFk_MwQ44pjb9rq/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/u/0/uc?id=16xD4c0-ea6eBSpyIkeFk_MwQ44pjb9rq&export=download";
  link.download = "Hasbe-Alam-Resume";
  link.click();
});
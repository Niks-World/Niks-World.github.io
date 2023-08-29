var resumeLink = document.querySelector("#resume-button-1");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1yHXIX5v7OTM4GDi4pu0Tr-MMG3LiTM7G/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1yHXIX5v7OTM4GDi4pu0Tr-MMG3LiTM7G";
  link.download = "Hasbe-Alam-Resume";
  link.click();
});

var resumeLink = document.querySelector("#resume-button-2");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1yHXIX5v7OTM4GDi4pu0Tr-MMG3LiTM7G/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1yHXIX5v7OTM4GDi4pu0Tr-MMG3LiTM7G";
  link.download = "Hasbe-Alam-Resume";
  link.click();
});
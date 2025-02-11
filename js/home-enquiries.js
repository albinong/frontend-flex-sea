document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedOption = urlParams.get("option"); 

  const selectElement = document.querySelector(".select-container");

  if (selectElement && selectedOption) {
    selectElement.value = selectedOption;
  }
});

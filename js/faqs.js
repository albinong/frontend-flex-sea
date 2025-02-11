function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const parent = element.parentElement;

  if (answer.style.display === "block") {
    answer.style.display = "none";
    parent.classList.remove("expanded");
  } else {
    answer.style.display = "block";
    parent.classList.add("expanded");
  }
}

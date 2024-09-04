const template = document.getElementById("template");

tippy("#share", {
  theme: "wizard",
  content: template.innerHTML,
  allowHTML: true,
  interactive: true,
  trigger: "click",
  appendTo: document.body,
  onHide(instance) {
    const shareButton = document.getElementById("share");
    const svgPath = document.querySelector("button svg path");

    shareButton.classList.remove("bg-[#6E8098]");
    shareButton.classList.add("bg-lgb");
    svgPath.setAttribute("fill", "#6E8098");
  },
});

document.addEventListener("click", (e) => {
  const group = document.getElementById("group");
  const shareButton = document.getElementById("share");
  const svgPath = document.querySelector("button svg path");

  const isClickOutside =
    !e.target.closest(".group.share") && !e.target.closest("#share");

  group.classList.toggle("share", !isClickOutside);

  if (isClickOutside) {
    shareButton.classList.remove("bg-[#6E8098]");
    shareButton.classList.add("bg-lgb");
    svgPath.setAttribute("fill", "#6E8098");
  } else {
    shareButton.classList.remove("bg-lgb");
    shareButton.classList.add("bg-[#6E8098]");
    svgPath.setAttribute("fill", "#ffffff");
  }
});

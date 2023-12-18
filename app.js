let childs = [];
function showLi(e) {
  var child = e.target.firstElementChild;
  if (child.style.display === "none") {
    child.style.display = "block";
    childs.push(child);
    if (childs.length > 1) {
      childs[0].style.display = "none";
      childs.splice(0, 1);
    }
  } else {
    child.style.display = "none";
    childs.splice(childs.indexOf(child), 1);
  }
}
function closseNav(event) {
  event.target.parentElement.parentElement.focus();
  if (event.target.parentElement.parentElement.matches(":focus") === true) {
    event.target.parentElement.parentElement.blur();
    childs[0].style.display = "none";
  }
}
function hide(event) {
  if (
    event.target.parentElement.querySelector("#show").style.display === "block"
  ) {
    event.target.parentElement.querySelector("#show").style.display = "none";
  }
  else {
    event.target.parentElement.querySelector("#show").style.display = "block";
  }
}
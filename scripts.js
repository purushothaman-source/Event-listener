let grandParent = document.querySelectorAll(".grand-parent");
let parent = document.querySelectorAll(".parent");
let child = document.querySelectorAll(".child");

// capture phase --
window.addEventListener(
  "click",
  e => {
    e.stopPropagation();
    console.log("window capture 1");
  },
  true
);
window.addEventListener(
  "click",
  e => {
    // e.stopPropagation();
    console.log("window capture 2");
  },
  true
);
document.addEventListener(
  "click",
  e => {
    // e.stopPropagation();
    console.log("document capture 1");
  },
  true
);
document.addEventListener(
  "click",
  e => {
    // e.stopPropagation();
    console.log("document capture 2");
  },
  true
);

grandParent[0].addEventListener(
  "click",
  () => {
    console.log("grandparent  capture");
  },
  true
);
parent[0].addEventListener(
  "click",
  e => {
    console.log("parent capture");
  },
  true
);
child[0].addEventListener(
  "click",
  e => {
    console.log("childparent capture");
  },
  true
);

// bubbling phase
window.addEventListener("click", () => {
  console.log("window bubble");
});
document.addEventListener("click", () => {
  console.log("document bubble");
});
grandParent[0].addEventListener("click", () => {
  console.log("grandparent  bubble");
});
parent[0].addEventListener("click", e => {
  console.log("parent bubble");
});
child[0].addEventListener("click", e => {
  console.log("childparent bubble");
});

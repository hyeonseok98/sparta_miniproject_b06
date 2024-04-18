/**
 * 스크롤 시 한 섹션씩 전환되는 로직
 */
const wrap = document.getElementsByClassName("content_wrapper")[0];

const DEFAULT_PAGENUMBER = 4;
const LAST_PAGENUMBER = DEFAULT_PAGENUMBER - 1;
let isAnimating = false;
let page = 0;

const handleScroll = (e) => {
  e.preventDefault();
  if (!isAnimating) {
    if (e.deltaY > 0) {
      page++;
    } else if (e.deltaY < 0) {
      page--;
    }

    if (page < 0) {
      page = 0;
    } else if (page > LAST_PAGENUMBER) {
      page = LAST_PAGENUMBER;
    }
    wrap.style.top = page * -100 + "dvh";
    wrap.style.transition = "top 0.5s ease";
    isAnimating = true;

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }
};

window.addEventListener("wheel", handleScroll, { passive: false });

/**
 * 윤기준 JS
 */
let teammateArr = [];
for (let i = 1; i <= 6; i++) {
  teammateArr.push(document.getElementById("teammate" + "0" + i.toString()));
}
const [TEAMMATE01, TEAMMATE02, TEAMMATE03, TEAMMATE04, TEAMMATE05, TEAMMATE06] = teammateArr;

let teammateModalArr = [];
for (let i = 1; i <= 6; i++) {
  teammateModalArr.push(document.getElementById("teammateModal" + "0" + i.toString()));
}
const [TEAMMATE01_MODAL, TEAMMATE02_MODAL, TEAMMATE03_MODAL, TEAMMATE04_MODAL, TEAMMATE05_MODAL, TEAMMATE06_MODAL] =
  teammateModalArr;

let teammateModalExitBtnArr = [];
for (let i = 1; i <= 6; i++) {
  teammateModalExitBtnArr.push(document.getElementById("modalExitBtn" + "0" + i.toString()));
}
const [
  TEAMMATE01_MODAL_EXIT_BTN,
  TEAMMATE02_MODAL_EXIT_BTN,
  TEAMMATE03_MODAL_EXIT_BTN,
  TEAMMATE04_MODAL_EXIT_BTN,
  TEAMMATE05_MODAL_EXIT_BTN,
  TEAMMATE06_MODAL_EXIT_BTN,
] = teammateModalExitBtnArr;

const showProfile01 = () => {
  TEAMMATE01_MODAL.style.display = "block";
  window.removeEventListener("wheel", handleScroll);
};
const showProfile02 = () => {
  TEAMMATE02_MODAL.style.display = "block";
  window.removeEventListener("wheel", handleScroll);
};
const showProfile03 = () => {
  TEAMMATE03_MODAL.style.display = "block";
  window.removeEventListener("wheel", handleScroll);
};
const showProfile04 = () => {
  TEAMMATE04_MODAL.style.display = "block";
  window.removeEventListener("wheel", handleScroll);
};
const showProfile05 = () => {
  TEAMMATE05_MODAL.style.display = "block";
  window.removeEventListener("wheel", handleScroll);
};
const showProfile06 = () => {
  TEAMMATE06_MODAL.style.display = "block";
  window.removeEventListener("wheel", handleScroll);
};

const exitModal01 = (event) => {
  let exitTargetModal = event.target.parentElement.parentElement;
  exitTargetModal.style.display = "none";
  window.addEventListener("wheel", handleScroll, { passive: false });
};
const exitModal02 = (event) => {
  let exitTargetModal = event.target.parentElement.parentElement;
  exitTargetModal.style.display = "none";
  window.addEventListener("wheel", handleScroll, { passive: false });
};
const exitModal03 = (event) => {
  let exitTargetModal = event.target.parentElement.parentElement;
  exitTargetModal.style.display = "none";
  window.addEventListener("wheel", handleScroll, { passive: false });
};
const exitModal04 = (event) => {
  let exitTargetModal = event.target.parentElement.parentElement;
  exitTargetModal.style.display = "none";
  window.addEventListener("wheel", handleScroll, { passive: false });
};
const exitModal05 = (event) => {
  let exitTargetModal = event.target.parentElement.parentElement;
  exitTargetModal.style.display = "none";
  window.addEventListener("wheel", handleScroll, { passive: false });
};
const exitModal06 = (event) => {
  let exitTargetModal = event.target.parentElement.parentElement;
  exitTargetModal.style.display = "none";
  window.addEventListener("wheel", handleScroll, { passive: false });
};

TEAMMATE01.addEventListener("click", showProfile01);
TEAMMATE02.addEventListener("click", showProfile02);
TEAMMATE03.addEventListener("click", showProfile03);
TEAMMATE04.addEventListener("click", showProfile04);
TEAMMATE05.addEventListener("click", showProfile05);
TEAMMATE06.addEventListener("click", showProfile06);

TEAMMATE01_MODAL_EXIT_BTN.addEventListener("click", exitModal01);
TEAMMATE02_MODAL_EXIT_BTN.addEventListener("click", exitModal02);
TEAMMATE03_MODAL_EXIT_BTN.addEventListener("click", exitModal03);
TEAMMATE04_MODAL_EXIT_BTN.addEventListener("click", exitModal04);
TEAMMATE05_MODAL_EXIT_BTN.addEventListener("click", exitModal05);
TEAMMATE06_MODAL_EXIT_BTN.addEventListener("click", exitModal06);

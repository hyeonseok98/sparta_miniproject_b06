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

/**
 * 스크롤 시 한 섹션씩 전환되는 로직
 */
const wrap = document.getElementsByClassName("content_wrapper")[0];

const DEFAULT_PAGENUMBER = 3; 
const LAST_PAGENUMBER = 3; //페이지 추가로 숫자 변경했습니다!
let page = 0;

window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
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
    console.log(e.deltaY);
    wrap.style.transition = "top 0.5s ease";
    wrap.style.top = page * -100 + "vh";
  },
  { passive: false },
);

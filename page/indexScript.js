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

/** Firebase 불러오기, 설정 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js" 

const firebaseConfig = {
  apiKey: "AIzaSyC55DiwDHYqn-UDSByfTGIlXOX0wxmKg9w",
  authDomain: "teamproject-bea46.firebaseapp.com",
  projectId: "teamproject-bea46",
  storageBucket: "teamproject-bea46.appspot.com",
  messagingSenderId: "144679276817",
  appId: "1:144679276817:web:6b776b3e6fdffa90eabcb0",
  measurementId: "G-Q4B1JB11YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

/** 응원의 말 Input, button */
const cheerBtn = document.getElementsByClassName("cheerMsgBtn")[0];
let cheerText = document.getElementById('cheerMsgInput');

/** Input창 클릭 시, 유저인지 아닌지에 따라 로그인 창 */
cheerText.addEventListener('click', ()=>{
  console.log("click");
  if(!auth.currentUser){
    console.log("로그인을 하시오.");
  }
})

/** 버튼 클릭 시 파이어 베이스에 등록 */
cheerBtn.addEventListener('click', () => {
  if(cheerText.value == ""){
    alert("응원글을 입력하세요.")
  }else{
    addDoc(collection(db, "Cheering message"),{
      //name: auth.currentUser.name,
      name: "테스트",
      comment: cheerText.value
    }).then(location.href="\cheerMsg.html")
  }
  
});
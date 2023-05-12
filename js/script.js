var scroll_button = document.getElementsByClassName("scroll_button")[0];
var map = document.getElementById('campus_map');

let startPoint = 0;
let move = 0;
var pre = 0;

//맵 중앙 정렬
var height = document.getElementsByClassName('container')[0].scrollHeight;
var width = document.getElementsByClassName('container')[0].scrollWidth;
document.getElementsByClassName('container')[0].scroll({left: 730, top: 700, behavior:'smooth'});


scroll_button.addEventListener("touchstart", (e) => {
    console.log("saved!!!")
    startPoint = e.touches[0].pageY; // 터치가 시작되는 위치 저장
  });

  scroll_button.addEventListener("touchmove", (e) => {
  
    let origin = parseInt(getComputedStyle(scroll_button).bottom.slice(0,-2));

    diff = parseInt(startPoint - e.touches[0].pageY);

    if( ((origin + (diff - pre)) > 0) && ((origin + (diff - pre)) < 290)){
        scroll_button.style.bottom = origin + (diff - pre) + "px";
        map.style.scale = 30+origin+"%";
    }

    pre = diff;

  });
  scroll_button.addEventListener("touchend", (e) => {
    pre = 0;
  });

  
var isUp = 0;
document.getElementsByClassName('up_sensor')[0].addEventListener("touchmove", (e) => {
    var bottom_sheet = document.getElementsByClassName('bottom_sheet')[0]
    bottom_sheet.style.height = 70 + "%"
    document.getElementsByClassName('up_sensor')[0].style.height = 70+"%";
    setTimeout(function() {
        document.getElementsByClassName('up_sensor')[0].style.display = "none";
      }, 1000);
    
});

  
var bottom_sheet = document.getElementsByClassName('bottom_sheet')[0];
let bottom_touch_start = 0;
let bottom_scroll_start;

bottom_sheet.addEventListener("touchstart", (e) => {    
    bottom_touch_start = e.touches[0].pageY; // 터치가 시작되는 위치 저장
    bottom_scroll_start = bottom_sheet.scrollTop //터치 시작 시 스크롤 위치 저장
});



bottom_sheet.addEventListener("touchmove", (e) => {
    if( ((bottom_touch_start - e.touches[0].pageY) < 0)  &&  (bottom_scroll_start <= 0)   ){
        //바텀시트 내리기
        bottom_sheet.style.height = 20+"%"
        document.getElementsByClassName('up_sensor')[0].style.display = "block";
        document.getElementsByClassName('up_sensor')[0].style.height = "20%";
    };
});
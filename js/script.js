var scroll_button = document.getElementsByClassName("scroll_button")[0];
var map = document.getElementById('campus_map');

let startPoint = 0;
let move = 0;
var pre = 0;

//맵 중앙 정렬
var height = document.getElementsByClassName('container')[0].scrollHeight;
var width = document.getElementsByClassName('container')[0].scrollWidth;
document.getElementsByClassName('container')[0].scroll({ left: 730, top: 700, behavior: 'smooth' });

var percent = document.getElementById('scroll_per');

scroll_button.addEventListener("touchstart", (e) => {
  //퍼센트 보이기
  percent.style.display = "flex";
  startPoint = e.touches[0].pageY; // 터치가 시작되는 위치 저장
});

scroll_button.addEventListener("touchmove", (e) => {

  let origin = parseInt(getComputedStyle(scroll_button).bottom.slice(0, -2));

  diff = parseInt(startPoint - e.touches[0].pageY);

  var scroll_bar = document.getElementsByClassName('scroll_bar')[0];
  let max_height = parseInt(getComputedStyle(scroll_bar).height);

  if (((origin + (diff - pre)) > 0) && ((origin + (diff - pre)) <= max_height)) {
    scroll_button.style.bottom = origin + (diff - pre) + "px";
    map.style.scale = 30 + origin + "%";
  }

  pre = diff;

  //퍼센트 적용
  var bottom_height = parseInt(getComputedStyle(scroll_button).bottom);
  percent.innerText = parseInt(bottom_height / parseInt(max_height) * 100) + "%";

});
scroll_button.addEventListener("touchend", (e) => {
  pre = 0;
  percent.style.display = "none";
});

var isUp = 0;
document.getElementsByClassName('up_sensor')[0].addEventListener("touchmove", (e) => {
  var bottom_sheet = document.getElementsByClassName('bottom_sheet')[0]
  bottom_sheet.style.height = 70 + "%"
  document.getElementsByClassName('up_sensor')[0].style.height = 70 + "%";
  setTimeout(function () {
    document.getElementsByClassName('up_sensor')[0].style.display = "none";
  }, 1000);

});

var handle_wrap = document.getElementsByClassName('bottom_sheet_handle_wrap')[0];
var bottom_sheet = document.getElementsByClassName('bottom_sheet')[0];
let bottom_touch_start = 0;
let bottom_scroll_start;

//맨 위에서 아래로 스크롤했을 경우
bottom_sheet.addEventListener("touchstart", (e) => {
  bottom_touch_start = e.touches[0].pageY; // 터치가 시작되는 위치 저장
  bottom_scroll_start = bottom_sheet.scrollTop //터치 시작 시 스크롤 위치 저장
});
bottom_sheet.addEventListener("touchmove", (e) => {
  if (((bottom_touch_start - e.touches[0].pageY) < 0) && (bottom_scroll_start <= 0)) {
    //바텀시트 내리기
    bottom_sheet.style.height = 10 + "%"
    document.getElementsByClassName('up_sensor')[0].style.display = "block";
    document.getElementsByClassName('up_sensor')[0].style.height = "10%";
  };
});


//맨 위 핸들을 아래로 당겼을 경우
handle_wrap.addEventListener("touchstart", (e) => {
  bottom_touch_start = e.touches[0].pageY; // 터치가 시작되는 위치 저장
});
handle_wrap.addEventListener("touchmove", (e) => {
  console.log("handle")
  if ((bottom_touch_start - e.touches[0].pageY) < 0) {
    //바텀시트 내리기
    bottom_sheet.style.height = 10 + "%"
    document.getElementsByClassName('up_sensor')[0].style.display = "block";
    document.getElementsByClassName('up_sensor')[0].style.height = "10%";
  };
});

//map_info
var width = parseInt(getComputedStyle(document.getElementById('map_info')).width);
var info_button = document.getElementsByClassName('info_button')[0];
var map_info = document.getElementsByClassName("map_info")[0];

info_button.addEventListener("click", (e) => {
  if (info_button.innerText == "<") {
    map_info.style.left = "-25%";
    map_info.style.right = "105%";
    info_button.innerText = ">";
  } else {
    map_info.style.left = "0";
    map_info.style.right = "70%";
    info_button.innerText = "<";

  }
});

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

  
// var isUp = 0;
// document.getElementsByClassName('up_sensor')[0].addEventListener("scroll", (e) => {
//     console.log("do")
//     var bottom_sheet = document.getElementsByClassName('bottom_sheet')[0]
//     var func1 = setInterval(function(){
//         var i =1;
//         if(i<50){
//             bottom_sheet.style.height = 20+ i + "%";
//             i++;
//         } else{
//           clearInterval(func1);
//         }
//          },5);
//     isUp = 1;
//     document.getElementsByClassName('up_sensor')[0].style.display = "none";
// });

  

document.getElementsByClassName('bottom_sheet')[0].addEventListener("scroll", (e) => {
    var bottom_sheet = document.getElementsByClassName('bottom_sheet')[0]
    var height = getComputedStyle(document.getElementsByClassName('bottom_sheet')[0]).height.slice(0,-2);
    //바텀시트 올라오기
    if (height < 200){
        var i=1;
        var func1 = setInterval(function(){
       if(i<50){
           bottom_sheet.style.height = 20+ i + "%";
           i++;
       } else{
         clearInterval(func1);
       }
        },5);
    }

    //바텀시트 내리기
    if(bottom_sheet.scrollTop == 0){
        var i = 1;
        var func1 = setInterval(function(){
            if(i<50){
                bottom_sheet.style.height = 70 - i + "%";
                i++;
            } else{
              clearInterval(func1);
            }
          },5);
    }

  });


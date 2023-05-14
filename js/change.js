function toggle(e) {
  var parent = e.parentNode.parentNode.parentNode.getElementsByClassName("dropdown-toggle")[0];
  var all = document.getElementsByClassName("bottom_box");
  var btn = document.getElementsByClassName("btn");
  var target = e.getAttribute("target");
  var lists = document.getElementsByClassName("list-group-item")
  //선택 취소일 경우
  if((parseInt(getComputedStyle(e).border) == 2)){
    //바텀시트 전체 항목 보이기
    for (i = 0; i < all.length; i++){
      all[i].style.display = "block";
    }
    //모든 버튼 초기화
    for (i = 0; i<btn.length; i++){
      btn[i].style.cssText = "background-color: rgba(219, 226, 233, 0.7); border: 1px solid transparent;";
    }
    for (i = 0; i<lists.length; i++){
      lists[i].style.cssText = " border: 1px solid rgba(0,0,0,0.125);";
    }
    //단과대 text
    parent.innerText = "단과대";
    //맵 이미지 바꾸기
    document.getElementById("campus_map").src = "/img/home/map.png";
    return
  }


  //단과대 선택 시 선택항목 바꾸기
  
  if(e.className == "list-group-item"){
    parent.innerText = e.innerText;
  }else {
    parent.innerText = "단과대";
  }
  

  //맵 이미지 바꾸기
  var target = e.getAttribute("target");
  // document.getElementById("campus_map").src = "/img/home/"+target+".png";

  //바텀시트 내용 바꾸기
  //모든 내용 지우기
  for (i = 0; i < all.length; i++){
    all[i].style.display = "none";
  }
  //타겟 내용 보이기
  var target = document.getElementsByClassName(target);
  for (i = 0; i < target.length; i++){
    target[i].style.display = "block";
  }
    
  //선택 css
  //모든 버튼 초기화
  for (i = 0; i<btn.length; i++){
    btn[i].style.cssText = "background-color: rgba(219, 226, 233, 0.7); border: 1px solid transparent;";
  }
  for (i = 0; i<lists.length; i++){
    lists[i].style.cssText = " border: 1px solid rgba(0,0,0,0.125);";
  }

  //선택 버튼 활성화
  if(e.className == "list-group-item"){
    parent.style.cssText = "border: 2px solid #4770df;";
    e.style.cssText = "border: 2px solid #4770df";
  }else {
    e.style.cssText = "border: 2px solid #4770df";
  }


}
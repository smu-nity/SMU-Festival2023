function toggleSection1() {
    document.getElementById("campus_map").src = "/img/home/tape.png";
    var div = document.getElementById('bottomSheet');
    div.innerHTML = `
    <div class="bottom_sheet_handle_wrap">
      <div class="bottom_sheet_handle"></div>
    </div>
    <div class="bottom_box" style="margin-top: 40px;">
      <div class="bottom_box_title">융공대</div>
      <div class="bottom_box_desc">융공대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">융공대</div>
      <div class="bottom_box_desc">융공대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>

    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    <div class="bottom_box">
      <div class="bottom_box_title">인사대</div>
      <div class="bottom_box_desc">인사대 설명입니다.</div>
    </div>
    `;
}

function toggleMain() {
    document.getElementById("campus_map").src = "/img/home/map.png";
}

// 위와 같은 형식으로 링크 추가할 것.
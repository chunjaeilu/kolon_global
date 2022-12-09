/* index.js */
$(function () {
  /* mobile GNB 토글기능 */
  $("#btn-gnb-toggle").on("click", function () {
    $("header .gnb").toggleClass("show");
  });

  /* 메인타이틀 이미지 전환 */
  let bgArr = [
    "./src/images/main-title-bg1.jpg",
    "./src/images/main-title-bg2.jpg",
    "./src/images/main-title-bg3.jpg",
    "./src/images/main-title-bg4.jpg",
  ];
  let bg_img_num = 0;
  setInterval(function () {
    bg_img_num++;

    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }
    $(".main-title .container").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });
  }, 5000);

  /* section2 호버 >> bg 전환 */
  let bgEl = [
    "src/images/section2-bg1.jpg",
    "src/images/section2-bg2.jpg",
    "src/images/section2-bg3.jpg",
    "src/images/section2-bg4.jpg",
  ];

  $(".section2 .bl-list > li").hover(function () {
    let num = $(this).index();
    $(".section2 .container").css({
      backgroundImage: `url(${bgEl[num]})`,
      transition: "1s",
    });
  });

  /* footer link-box 클릭 >> 목록 노출 */
  $("footer .link-box .link-depth1 > li").on("click", function () {
    $(this).children(".link-depth2").toggleClass("show");
  });
});

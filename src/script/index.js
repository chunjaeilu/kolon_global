/* index.js */
$(function () {
  /* :: tab, mob :: GNB 토글기능 */
  $("#btn-gnb-toggle").on("click", function () {
    $("header .gnb").toggleClass("show");
    $("header .gnb .depth2").removeClass("show");
  });

  /* :: tab, mob :: depth2 전환 효과 */
  $("header .gnb .depth1 > li > a").on("click", function (e) {
    e.preventDefault();
  });

  $("header .gnb .depth1 > li").on("click", function () {
    $("header .gnb .depth1 > li").not(this).removeClass("active");
    $(this).toggleClass("active");
  });

  /* 메인타이틀 이미지 전환 */
  let bgArr = [
    "./src/images/main-title-bg1.jpg",
    "./src/images/main-title-bg2.jpg",
    "./src/images/main-title-bg3.jpg",
    "./src/images/main-title-bg4.jpg",
  ];

  let val = 0; // progress-bar 초기값
  let bg_img_num = 0;
  const duration = 5000; // 인터벌(5초)

  const timer = setInterval(function () {
    val += 1; // progress-bar 증가값

    if (val > 1000) {
      val = 0;
      bg_img_num++;
      if (bg_img_num >= bgArr.length) {
        bg_img_num = 0;
      }
      $(".main-title .container").css({
        "background-image": `url(${bgArr[bg_img_num]})`,
      });
    }
    $(".main-title .title-text progress").val(val);
  }, duration / 1000); // 5초를 1/1000로 나누어 분기마다 val값을 1씩 증가시키고, val 값이 1000이 되면(5초가 지나면) 이미지를 바꿈

  /* :: web, tab :: section2 호버 >> bg 전환 */
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

  /* :: mob :: section2 슬라이더 */
  let mob_width = 100;
  $(".section2 .slide-btn button").on("click", function () {
    num = $(this).index();
    x = num * mob_width;
    $(".section2 .bl-list").css("transform", `translateX(${-x}vw)`);
    $(".section2 .slide-btn button").removeClass("active");
    $(this).addClass("active");
  });

  /* :: tab :: section3 슬라이더 */
  let xElTab = "0"; // 슬라이더 x축 좌표 초기값
  $(".section3 .btn-box.tab-only .news-prev").on("click", function () {
    if (xEl <= 0) return;
    xEl--;
    console.log(xEl);
    $(".section3 .news-list").css(
      "transform",
      `translateX(-${(xEl * 75) / 2}vw)`
    );
  });

  $(".section3 .btn-box.tab-only .news-next").on("click", function () {
    if (xEl >= 2) return;
    xEl++;
    console.log(xEl);
    $(".section3 .news-list").css(
      "transform",
      `translateX(-${(xEl * 75) / 2}vw)`
    );
  });

  /* :: mob :: section3 슬라이더 */
  let xEl = "0"; // 슬라이더 x축 좌표 초기값
  $(".section3 .btn-box.mob-only .news-prev").on("click", function () {
    if (xEl <= 0) return;
    xEl--;
    console.log(xEl);
    $(".section3 .news-list").css("transform", `translateX(-${xEl * 75}vw)`);
  });

  $(".section3 .btn-box.mob-only .news-next").on("click", function () {
    if (xEl >= 3) return;
    xEl++;
    console.log(xEl);
    $(".section3 .news-list").css("transform", `translateX(-${xEl * 75}vw)`);
  });

  /* footer link-box 클릭 >> 목록 노출 */
  $("footer .link-box .link-depth1 > li").on("click", function () {
    $(this).children(".link-depth2").toggleClass("show");
  });
});

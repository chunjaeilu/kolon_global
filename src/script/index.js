/* index.js */
$(function () {
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

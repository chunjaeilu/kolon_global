/* sub.js */
$(function () {
  /* mobile GNB 토글기능 */
  $("#btn-gnb-toggle").on("click", function () {
    $("header .gnb").toggleClass("show");
  });

  /* footer link-box 클릭 >> 목록 노출 */
  $("footer .link-box .link-depth1 > li").on("click", function () {
    $(this).children(".link-depth2").toggleClass("show");
  });
});

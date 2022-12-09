/* scroll.js */

$(function () {
  $(window).on("scroll", function () {
    console.log(scrollY);

    /* :::: sub1-1 :::: */
    if (scrollY >= 300) {
      $("#sub1-1 .section1 .merger-img").addClass("scale-sm");
    }
    if (scrollY >= 1000) {
      $("#sub1-1 .section2 h2").addClass("slide-up");
    }
    if (scrollY >= 1200) {
      $("#sub1-1 .section2 .text-box").eq(0).addClass("slide-left");
    }
    if (scrollY >= 1800) {
      $("#sub1-1 .section2 .text-box").eq(1).addClass("slide-right");
    }
    if (scrollY >= 2400) {
      $("#sub1-1 .section2 .text-box").eq(2).addClass("slide-left");
    }
    if (scrollY >= 2800) {
      $("#sub1-1 .section2 .text-box").eq(3).addClass("slide-right");
    }

    /* :::: sub1-1 모바일 :::: */
    if (scrollY >= 200) {
      $("#sub1-1 .section1 .merger-img").addClass("mob-scale-sm");
    }
    if (scrollY >= 650) {
      $("#sub1-1 .section2 h2").addClass("mob-slide-up");
    }
    if (scrollY >= 1100) {
      $("#sub1-1 .section2 .text-box").eq(0).addClass("mob-opacity");
    }
    if (scrollY >= 1700) {
      $("#sub1-1 .section2 .text-box").eq(1).addClass("mob-opacity");
    }
    if (scrollY >= 2200) {
      $("#sub1-1 .section2 .text-box").eq(2).addClass("mob-opacity");
    }
    if (scrollY >= 2900) {
      $("#sub1-1 .section2 .text-box").eq(3).addClass("mob-opacity");
    }

    /* :::: sub1-3 :::: */
    if (scrollY >= 400) {
      $("#sub1-3 .section1 .ph-list li").eq(0).addClass("slide-up");
      $("#sub1-3 .section1 .ph-list li")
        .eq(1)
        .css("animation", "slide-up 1s 0.2s ease forwards");
      $("#sub1-3 .section1 .ph-list li")
        .eq(2)
        .css("animation", "slide-up 1s 0.4s ease forwards");
    }
    if (scrollY >= 800) {
      $("#sub1-3 .section2 h2").addClass("slide-up");
    }
    if (scrollY >= 2000) {
      $("#sub1-3 .section2 .act-e .text-box").addClass("slide-up");
    }
    if (scrollY >= 2500) {
      $("#sub1-3 .section2 .act-s .text-box").addClass("slide-up");
    }
    if (scrollY >= 3000) {
      $("#sub1-3 .section2 .act-g .text-box").addClass("slide-up");
    }

    /* :::: sub1-3 모바일 :::: */
    if (scrollY >= 300) {
      $("#sub1-3 .section1 .ph-list li").eq(0).addClass("mob-slide-up");
      $("#sub1-3 .section1 .ph-list li")
        .eq(1)
        .css("animation", "slide-up 1s 0.2s ease forwards");
      $("#sub1-3 .section1 .ph-list li")
        .eq(2)
        .css("animation", "slide-up 1s 0.4s ease forwards");
    }
    if (scrollY >= 530) {
      $("#sub1-3 .section2 h2").addClass("mob-slide-up");
    }
    if (scrollY >= 1900) {
      $("#sub1-3 .section2 .act-e .text-box").eq(0).addClass("mob-slide-up");
    }
    if (scrollY >= 2200) {
      $("#sub1-3 .section2 .act-e .text-box").eq(1).addClass("mob-slide-up");
    }
    if (scrollY >= 2800) {
      $("#sub1-3 .section2 .act-s .text-box").eq(0).addClass("mob-slide-up");
    }
    if (scrollY >= 3100) {
      $("#sub1-3 .section2 .act-s .text-box").eq(1).addClass("mob-slide-up");
    }
    if (scrollY >= 3650) {
      $("#sub1-3 .section2 .act-g .text-box").eq(0).addClass("mob-slide-up");
    }
    if (scrollY >= 4150) {
      $("#sub1-3 .section2 .act-g .text-box").eq(1).addClass("mob-slide-up");
    }
  });
});

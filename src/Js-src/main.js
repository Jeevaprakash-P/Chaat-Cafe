$(document).ready(function () {
  if (window.innerWidth < 1023) {
    $(".bg-img").attr({ src: "../Images/Mobile Screen BackGroud Img.webp" }).css({width:"100%"})
    $(".View-button").attr({ class: "View-button btn btn-light" })
  }
 $("#HomeButton").click( ()=>{
  if (window.innerWidth < 500) {
    $(".bg-img").attr({ src: "../Images/Mobile Screen BackGroud Img.webp" }).css({width:"100%"})
    $(".View-button").attr({ class: "View-button btn btn-light" })
  }
 })
})  
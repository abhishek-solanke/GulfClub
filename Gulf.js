// alert("working");
// let crsr = document.querySelector(".cursor");
// let Bcrsr = document.querySelector(".cursorBlur");
// document.documentElement.addEventListener("mousemove", function (e) {
//   crsr.style.left = e.x - 10 + "px";
//   crsr.style.top = e.y - 5 + "px";

//   Bcrsr.style.left = e.x - 150 + "px";
//   Bcrsr.style.top = e.y - 150 + "px";
// });



gsap.to(".navbar", {
  backgroundColor: "black",
  duration: 1,
  // delay:2
  height: "130px",
  scrollTrigger: {
    trigger: ".navbar",
    scroll: "body",
    // markers:true,
    start: "top -8%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    // markers: true,
    // scroll:"body",
    start: " top -30%",
    end: "top -90%",
    scrub: 4,
  },
});

let allh4 = document.querySelectorAll(".navbar h4");
let h4s = Array.from(allh4);
h4s.forEach((na) => {
    na.addEventListener("mouseover",function(e){
        na.style.color="#95c11e";
    })
})
// 
h4s.forEach((na) => {  
    na.addEventListener("mouseout",function(e){
        na.style.color="white";
    })
})


gsap.from(".aboutUs, .aboutImages, .aboutContent",{
    y:120,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".aboutUs" ,
        scroller:"body" ,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards" ,
        scroller:"body" ,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".q1",{
    y:-40,
    x:-70,
    scrollTrigger:{
        trigger:".q1" ,
        scroller:"body" ,
        start:"top 70%",
        end:"top 40%",
        scrub:1
    }
})
gsap.from(".q2",{
    y:40,
    x:70,
    scrollTrigger:{
        trigger:".q2" ,
        scroller:"body" ,
        start:"top 70%",
        end:"top 40%",
        scrub:1
    }
})

gsap.from(".smallPhotos h1",{
    "-webkit-text-stroke": "1px green",
    y:40,
    x:20,
    x:-20,
    scrollTrigger:{
        trigger:".smallPhotos h1" ,
        scroller:"body" ,
        start:"top 70%",
        end:"top 40%",
        scrub:2  
    }
})

gsap.from(".photosDiv, .pics, .insta",{
    y:120,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".photosDiv" ,
        scroller:"body" ,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})
import{m as e,S as t}from"./vendor.7cd78426.js";/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())}),!1);const s=function(e={elId:String,mobile:Boolean,desktop:Boolean,breakPoint:Number,distance:Number}){let t=document.getElementById(e.elId);document.addEventListener("scroll",(function(){let s=e.mobile,n=e.desktop,i=e.breakpoint||1024,d=e.distance||300,a=Boolean;var l;s&&n?a=!0:n?a=window.innerWidth>=i:s&&(a=window.innerWidth<i),document.documentElement.scrollTop>d&&a?("none"==t.style.display||t.classList.contains("hidden"))&&(!function(e,t=String){e.style.display=t||"block",function t(){var s=parseFloat(e.style.opacity);(s+=.1)>1||(e.style.opacity=s,requestAnimationFrame(t))}()}(t,"inline-flex"),t.classList.remove("hidden")):"inline-flex"==t.style.display&&(l=t,function e(){(l.style.opacity-=.1)<0?l.style.display="none":requestAnimationFrame(e)}())}))};window.Alpine=e,e.start(),function(){let e=document.getElementById("navbar-side-panel"),t=document.getElementById("mobile-menu-overlay"),s=document.getElementById("mobile-nav-btn"),n=document.getElementById("mobile-menu-back");s.addEventListener("click",(function(){"0"==this.dataset.toggle?(e.classList.remove("hide"),t.style.display="block",this.dataset.toggle="1"):(e.classList.add("hide"),t.style.display="none",this.dataset.toggle="0")})),t.addEventListener("click",(function(){s.dataset.toggle="0",e.classList.add("hide"),this.style.display="none"})),n.addEventListener("click",(function(){s.dataset.toggle="0",e.classList.add("hide"),t.style.display="none"}))}(),s({elId:"mobile-contactus-btn",desktop:!1,mobile:!0,breakPoint:1024,distance:200}),new t("#hero-slider",{speed:300,effect:"fade",grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new t("#team-slider",{speed:200,grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:2,spaceBetween:24},768:{slidesPerView:3,spaceBetween:24},1024:{slidesPerView:3,spaceBetween:48},1280:{slidesPerView:3,spaceBetween:80},1536:{slidesPerView:3,spaceBetween:112}}}),new t("#works-slider",{speed:200,grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1024:{slidesPerView:2,spaceBetween:32},1280:{slidesPerView:3,spaceBetween:32}}}),new t("#blog-slider",{speed:200,slidesPerView:1.25,spaceBetween:12,centeredSlides:!0,centeredSlidesBounds:!0,grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:24,centeredSlides:!1,centeredSlidesBounds:!1},1024:{slidesPerView:2,spaceBetween:32,centeredSlides:!1,centeredSlidesBounds:!1},1280:{slidesPerView:3,spaceBetween:48,centeredSlides:!1,centeredSlidesBounds:!1}}}),new t("#testimonial-slider",{speed:400,slidesPerView:1,spaceBetween:16,centeredSlides:!0,centeredSlidesBounds:!0,centerInsufficientSlides:!0,grabCursor:!0,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:1.5,spaceBetween:32},1280:{slidesPerView:2,spaceBetween:48}}}),new t("#certificate-slider",{speed:200,slidesPerView:1.75,spaceBetween:12,centeredSlides:!0,centeredSlidesBounds:!0,grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:3,spaceBetween:24,centeredSlides:!1,centeredSlidesBounds:!1},1024:{slidesPerView:2,spaceBetween:32,centeredSlides:!1,centeredSlidesBounds:!1},1280:{slidesPerView:3,spaceBetween:48,centeredSlides:!1,centeredSlidesBounds:!1}}});

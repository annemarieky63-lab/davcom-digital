const button=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
button?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); } }); }, {threshold:.12});
document.querySelectorAll("section, .expertise-grid article, .project-case, .news article, .approach-list > div").forEach(el=>{el.classList.add("reveal"); revealObserver.observe(el);});

const lb=document.createElement("div");lb.className="lightbox";lb.innerHTML="<img alt=''>";document.body.appendChild(lb);
document.querySelectorAll(".gallery a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();const i=lb.querySelector("img");i.src=a.href;i.alt=a.querySelector("img").alt;lb.classList.add("open");}));
lb.addEventListener("click",()=>lb.classList.remove("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("open")});

const bar=document.querySelector(".progress"),hd=document.querySelector(".site-header");
addEventListener("scroll",()=>{const s=document.documentElement;bar.style.width=(scrollY/(s.scrollHeight-innerHeight)*100)+"%";hd.classList.toggle("scrolled",scrollY>30)},{passive:true});
document.querySelectorAll(".expertise-grid article,.news article,.approach-list > div,.flyer-grid a").forEach((el,i)=>{el.style.transitionDelay=((i%5)*.09)+"s"});
const md=document.createElement("div");md.className="modal";md.innerHTML='<div class="modal-box"><button class="modal-close" aria-label="Fermer">×</button><div class="modal-body"></div></div>';document.body.appendChild(md);
document.querySelectorAll(".read").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();md.querySelector(".modal-body").innerHTML=document.querySelector('#posts [data-post="'+a.dataset.post+'"]').innerHTML;md.classList.add("open");md.querySelector(".modal-box").scrollTop=0}));
md.addEventListener("click",e=>{if(e.target===md||e.target.classList.contains("modal-close"))md.classList.remove("open")});
addEventListener("keydown",e=>{if(e.key==="Escape")md.classList.remove("open")});
document.querySelectorAll(".toggle-case").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const card=btn.closest(".project-case"), grid=card.querySelector(".flyer-grid");
    const open=card.classList.toggle("open");
    btn.setAttribute("aria-expanded",open);
    if(open){ grid.hidden=false; }
    else { grid.addEventListener("transitionend",function h(){grid.hidden=true;grid.removeEventListener("transitionend",h)},{once:true}); }
  });
});

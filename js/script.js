document.addEventListener("DOMContentLoaded", function() {
   
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector("#nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });

    
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            burger.classList.remove("toggle");
        });
    });


const logo = document.getElementById("logo");
    let texts = ["CS", "CRM SYSTEM"];
    let index = 0;

    setInterval(() => {
        logo.style.opacity = 0; 
        setTimeout(() => {
            index = (index + 1) % texts.length; 
            logo.textContent = texts[index];
            logo.style.opacity = 1; 
        }, 500);
    }, 5000); 
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.querySelector(".card-inner").classList.toggle("flipped");
        });
    });
    const elements = document.querySelectorAll(".benefit");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(50px)";
        observer.observe(el);
    });
    const video = document.getElementById("bg-video");

    
    const videos = [""];
    let indexV = 0;

    setInterval(() => {
        indexV = (indexV + 1) % videos.length;
        video.classList.add("fade-out");
        
        setTimeout(() => {
            video.src = videos[indexV];
            video.load();
            video.play();
            video.classList.remove("fade-out");
        }, 1000); 
    }, 20000); 

});


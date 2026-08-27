import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import mobileHeroBg from "../../assets/hero-mobile.png"
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import preview1 from "../../assets/preview1.png";
import preview2 from "../../assets/preview2.png";
import preview3 from "../../assets/preview3.png";

const heroSlides = [
    { image: preview1, label: "Portfolio", title: "Personal brand website" },
    { image: preview2, label: "Entertainment", title: "Streaming experience" },
    { image: preview3, label: "Digital product", title: "Custom web interface" },
];

const Hero = () => {

    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const timer = window.setInterval(() => setActiveSlide((slide) => (slide + 1) % heroSlides.length), 5000);
        return () => window.clearInterval(timer);
    }, []);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".hero-slide-card");
        cards.forEach((card, index) => {
            const offset = (index - activeSlide + heroSlides.length) % heroSlides.length;
            gsap.to(card, {
                x: offset === 0 ? 0 : offset === 1 ? 34 : 68,
                y: offset === 0 ? 0 : offset === 1 ? 14 : 28,
                rotateY: offset === 0 ? 0 : offset === 1 ? -8 : -14,
                scale: offset === 0 ? 1 : offset === 1 ? 0.9 : 0.8,
                opacity: offset === 0 ? 1 : offset === 1 ? 0.55 : 0.2,
                zIndex: 3 - offset,
                duration: 1,
                ease: "power4.out",
            });
        });
    }, { scope: sliderRef, dependencies: [activeSlide] });


    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: "-5",
                stagger: 0.02,
                scale: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                    // markers: true
                }
            });
        };
    }, [isMobHero]);

    return (
        <section className="hero-section w-dvw md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <div className="responsive-mobile">
                    <div className="hero-img absolute inset-0 bg-[url('./assets/background1.png')] bg-no-repeat bg-cover bg-center z-0 md:block hidden" />
                    <div className="block lg:hidden mt-6 mb-6">
                        <img src={mobileHeroBg} alt="mobile bg" className="w-full rounded-[2rem] object-cover shadow-[0_-25px_45px_-10px_rgba(255,0,0,0.15)]" />
                    </div>
                    <video src={smoke} autoPlay loop muted playsInline className="absolute inset-0 md:w-full md:h-full object-cover z-10 pointer-events-none object-center opacity-50 mix-blend-hard-light md:top-0 top-[5%] h-[90%] rounded-[2rem] md:px-0"></video>
                </div>
                <div className="p-4 flex flex-col md:justify-center">
                    <div className="relative h-dvh">
                        <h1
                            className="absolute left-2 top-2 z-20 text-[#f4efe7] text-start text-6xl md:text-9xl font-bold tracking-wider"
                            style={{ textShadow: '2px 2px 4px #aaa' }}
                        >
                            Nash Studio
                        </h1>

                        <div className="absolute bottom-[8%] left-0 z-20 flex h-auto w-full flex-col md:flex-row md:items-end md:justify-between">
                            <h2
                                className="text-start lg:mt-0 md:text-[#f4efe7] text-[#b1a696] text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                <span>Closer to</span>
                                <span>Digital — Closer</span>
                                <span>to Growth</span>
                            </h2>

                            <p
                                className="md:w-[20%] w-[80%] text-[#f4efe7] text-[0.7rem] font-bold md:font-medium tracking-wide lg:text-end mt-2 text-justify"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                Transform your digital presence and scale your business with—Nash Studio.
                            </p>
                        </div>
                    </div>
                </div>
                <div ref={sliderRef} className="hero-project-slider absolute right-[8%] top-1/2 z-20 hidden h-52 w-64 -translate-y-1/2 md:block" aria-label="Project preview slider">
                    {heroSlides.map((slide, index) => <button key={slide.title} type="button" onClick={() => setActiveSlide(index)} className="hero-slide-card absolute inset-0 overflow-hidden rounded-2xl border border-white/50 bg-black text-left shadow-2xl">
                        <img src={slide.image} alt={slide.title} className="h-full w-full object-cover opacity-70" />
                        <span className="absolute left-4 top-4 text-[9px] uppercase tracking-[0.25em] text-white/80">{slide.label}</span>
                        <span className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">{slide.title}</span>
                    </button>)}
                    <div className="absolute -bottom-10 left-0 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/70"><span>{String(activeSlide + 1).padStart(2, "0")}</span><span className="h-px w-8 bg-[#FF6B00]" /><span>03</span></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

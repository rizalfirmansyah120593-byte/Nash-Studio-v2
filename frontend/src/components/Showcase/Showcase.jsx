import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import acImg1 from "../../assets/preview1.png";
import acImg2 from "../../assets/preview2.png";
import acImg3 from "../../assets/preview3.png";
import acImg4 from "../../assets/preview4.png";
import acImg5 from "../../assets/preview5.png";
import acImg6 from "../../assets/preview6.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        const totalWidth =
            imgConRef.current.scrollWidth - containerRef.current.offsetWidth;

        // ✅ Horizontal scroll animation (unchanged)
        gsap.to(imgConRef.current, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-10% 10%",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
                // invalidateOnRefresh: true,
                // markers: true,

                // onUpdate: () => {
                //     const currentScroll = window.scrollY;
                //     velocity = currentScroll - lastScroll;
                //     lastScroll = currentScroll;

                //     // ✅ Smooth limited movement (no gap, no break)
                //     const move = gsap.utils.clamp(
                //         -60,
                //         60,
                //         velocity * 2.2
                //     );

                //     images.forEach((img, index) => {
                //         gsap.to(img, {
                //             x: move * (index % 2 === 0 ? 1 : -1),
                //             duration: 0.4,
                //             ease: "power3.out",
                //             overwrite: "auto"
                //         });
                //     });
                // }
            }
        });
    }, { scope: containerRef });

    useGSAP(() => {
        const images = gsap.utils.toArray(".showcase-tilt-image");

        const handleMove = (event) => {
            const image = event.currentTarget;
            const bounds = image.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;

            gsap.to(image, {
                rotateY: x * 5,
                rotateX: y * -5,
                scale: 1.03,
                duration: 0.45,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        const handleLeave = (event) => {
            gsap.to(event.currentTarget, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.7,
                ease: "power3.out",
                overwrite: "auto",
            });
        };

        images.forEach((image) => {
            image.addEventListener("pointermove", handleMove);
            image.addEventListener("pointerleave", handleLeave);
        });

        return () => images.forEach((image) => {
            image.removeEventListener("pointermove", handleMove);
            image.removeEventListener("pointerleave", handleLeave);
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className='relative w-full h-dvh overflow-hidden'
        >
            <div
                ref={imgConRef}
                className="absolute top-0 left-0 h-full flex items-center justify-start gap-2 p-2 overflow-hidden"
            >
                {/* Image 1 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#f4efe7]">
                        <p className="showcase-display-button">Tampilkan</p>
                    </div>
                    <a href="https://rizal-firmansyah.vercel.app/" target="_blank" rel="noreferrer">
                    <img
                        src={acImg1}
                        alt="Activity 1"
                        className="showcase-tilt-image image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    </a>
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <div className="flex justify-center items-center">
                            <p className="text-[#f4efe7] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">01</p>
                            <p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">06</p>
                        </div>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#f4efe7]">
                        <p className="showcase-display-button">Tampilkan</p>
                    </div>
                    <a href="https://filmanesia.com/" target="_blank" rel="noreferrer">
                    <img
                        src={acImg2}
                        alt="Activity 1"
                        className="showcase-tilt-image image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    </a>
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <div className="flex justify-center items-center">
                            <p className="text-[#f4efe7] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">02</p>
                            <p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">06</p>
                        </div>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#f4efe7]">
                        <p className="showcase-display-button">Tampilkan</p>
                    </div>
                    <a href="https://anistreaming.com/" target="_blank" rel="noreferrer">
                    <img
                        src={acImg3}
                        alt="Activity 1"
                        className="showcase-tilt-image image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                    </a>
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start ">
                        <div className="flex justify-center items-center">
                            <p className="text-[#f4efe7] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                            <p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">06</p>
                        </div>
                    </div>
                </div>

                {/* Image 4 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-end items-start text-[#f4efe7]"><p className="showcase-display-button">Tampilkan</p></div>
                    <a href="https://luxe-cart-main.vercel.app/" target="_blank" rel="noreferrer"><img src={acImg4} alt="E-commerce website preview" className="showcase-tilt-image image-item w-full h-full object-cover rounded-[2.5rem]" /></a>
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start"><div className="flex justify-center items-center"><p className="text-[#f4efe7] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">04</p><p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">06</p></div></div>
                </div>

                {/* Image 5 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-end items-start text-[#f4efe7]"><p className="showcase-display-button">Tampilkan</p></div>
                    <a href="https://nova-game.netlify.app/" target="_blank" rel="noreferrer"><img src={acImg5} alt="Creative landing page preview" className="showcase-tilt-image image-item w-full h-full object-cover rounded-[2.5rem]" /></a>
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start"><div className="flex justify-center items-center"><p className="text-[#f4efe7] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">05</p><p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">06</p></div></div>
                </div>

                {/* Image 6 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-end items-start text-[#f4efe7]"><p className="showcase-display-button">Tampilkan</p></div>
                    <a href="https://beer-gsap-web.vercel.app/" target="_blank" rel="noreferrer"><img src={acImg6} alt="Custom web app preview" className="showcase-tilt-image image-item w-full h-full object-cover rounded-[2.5rem]" /></a>
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-start"><div className="flex justify-center items-center"><p className="text-[#f4efe7] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">06</p><p className="text-[#4e484e] border-[1px] rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">06</p></div></div>
                </div>

                {/* Extra space */}
                {/* <div className="flex-shrink-0 w-[2%]"></div> */}
            </div>
        </section>
    );
};

export default Showcase;

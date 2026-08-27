import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";

const Welcome = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
                // markers: true
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            });
        });

    });

    return (
        <div className='welcome-section w-full h-[120vh] text-[#2A2725]  md:px-7 px-6 '>
            <div className='flex flex-col gap-2 tracking-[-4] leading-2'>
                <div className="w-full md:w-[86%] md:text-[64px] text-[34px] welcome-line md:pt-20">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em]">
                                {text}
                                <span className="clip-text-welcome md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center md:p-4 md:mt-20 mt-10">
                <div className="welcome-ui-cards flex flex-row justify-center items-center gap-3">
                    <div className="welcome-ui-card welcome-ui-card-growth">
                        <div className="flex items-center justify-between text-[0.55rem] uppercase tracking-[0.2em] text-white/60"><span>Growth dashboard</span><span className="h-2 w-2 rounded-full bg-[#FF6B00]" /></div>
                        <div className="mt-8 text-3xl font-semibold text-white">+42%</div>
                        <p className="mt-1 text-[0.6rem] text-white/50">qualified leads this month</p>
                        <div className="mt-7 flex h-12 items-end gap-1"><i className="h-1/3" /><i className="h-2/5" /><i className="h-3/5" /><i className="h-1/2" /><i className="h-4/5" /><i className="h-full" /></div>
                    </div>
                    <div className="welcome-ui-card welcome-ui-card-preview">
                        <div className="flex items-center gap-1"><i /><i /><i /><span className="ml-2 text-[0.5rem] text-white/50">nash.studio</span></div>
                        <div className="mt-8 h-3 w-3/5 rounded bg-white/90" /><div className="mt-2 h-2 w-2/5 rounded bg-white/25" />
                        <div className="mt-7 flex items-center justify-between"><span className="text-[0.55rem] uppercase tracking-widest text-[#FF6B00]">Web design</span><span className="rounded-full bg-[#FF6B00] px-2 py-1 text-[0.5rem] text-black">Explore</span></div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-10">
                    <p className="md:text-[2rem] text-[1.3rem] text-[#b1a696] md:leading-[1.1] md:pr-24 font-normal leading-[26px] tracking-[-0.2px]">
                        <span>Kami membantu bisnis membangun website profesional yang cepat, responsif, dan kuat secara visual.</span><br />
                        <span>Dengan strategi web design, teknologi modern, dan SEO, Nash Studio menciptakan pengalaman digital yang meningkatkan kepercayaan dan konversi.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;

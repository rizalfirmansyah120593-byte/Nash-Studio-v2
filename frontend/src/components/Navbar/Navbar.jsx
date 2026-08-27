import { IoMdClose, IoMdMenu, IoMdArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const menuItems = [["Home", ".hero-section"], ["About Nash Studio", ".welcome-section"], ["Services", ".activities-section"], ["Portfolio", ".gallery-page4"], ["Testimonials", ".feedback-section"], ["Contact", ".footer-title"]];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const itemsRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { window.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    gsap.set(menuRef.current, { yPercent: 100 });
    gsap.to(menuRef.current, { yPercent: isOpen ? 0 : 100, duration: 0.8, ease: "power4.inOut" });
    if (isOpen) gsap.fromTo(itemsRef.current?.children, { y: 30 }, { y: 0, stagger: 0.08, delay: 0.2, duration: 0.65, ease: "power3.out" });
  }, [isOpen]);

  return <>
    <div ref={menuRef} style={{ zIndex: 99999 }} className="fixed bottom-0 left-1/2 h-[62vh] w-[min(88vw,28rem)] -translate-x-1/2 rounded-t-[2.5rem] border border-white/20 bg-[#0b0b0b] px-7 py-7 text-white shadow-[0_-20px_80px_rgba(255,107,0,0.08)] md:px-9 md:py-8">
      <button onClick={() => setIsOpen(false)} className="absolute right-7 top-7 border border-white/70 px-4 py-2 text-xs uppercase tracking-widest transition-colors hover:bg-white hover:text-black">Close</button>
      <p className="text-xs uppercase tracking-[0.3em] text-[#FF6B00]">Nash Studio / Navigation</p>
      <nav ref={itemsRef} className="relative z-10 mt-20 flex flex-col items-start gap-2 opacity-100 md:mt-24">
        {menuItems.map(([label, target], index) => <a key={label} href={target} onClick={(event) => { event.preventDefault(); document.querySelector(target)?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); }} className="menu-link flex items-baseline gap-3 text-3xl font-semibold text-white transition-colors hover:text-[#FF6B00] md:text-5xl"><small className="text-xs font-normal text-white/40">0{index + 1}</small>{label}</a>)}
      </nav>
    </div>
    <button onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close menu" : "Open menu"} className="fixed bottom-8 left-1/2 z-50 flex h-10 -translate-x-1/2 items-center gap-2 rounded-4xl bg-[#f4efe7] p-1 pl-4 text-[12px] text-[#2a2725]">
      <span>{isOpen ? "Close" : "Menu"}</span><span className="rounded-full bg-[#2a2725] p-2">{isOpen ? <IoMdClose className="text-[#FF6B00]" /> : <IoMdMenu className="text-[#b1a696]" />}</span>
    </button>
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Kembali ke atas" title="Kembali ke atas" className="fixed bottom-8 right-6 z-50 rounded-full border border-white bg-[#0b0b0b] p-3 text-[#FF6B00] transition hover:bg-[#FF6B00] hover:text-black">
      <IoMdArrowUp className="h-5 w-5" />
    </button>
  </>;
};

export default Navbar;

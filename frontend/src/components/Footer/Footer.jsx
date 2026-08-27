import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";
import { useState } from "react";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = `Halo Nash Studio, saya ${form.name}. Email: ${form.email}. ${form.message}`;
        window.open(`https://wa.me/6281293161515?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    };

    return (
        <section className='w-screen h-dvh px-6 mt-10'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>Siap mengembangkan bisnis Anda secara online?<br />Wujudkan website profesional dan sinematik bersama Nash Studio.<span></span></p>
            <form onSubmit={handleSubmit} className="mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
                <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Nama Anda" className="border-b border-white/50 bg-transparent px-1 py-3 text-white outline-none placeholder:text-[#b1a696] focus:border-[#FF6B00]" />
                <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="Email Anda" className="border-b border-white/50 bg-transparent px-1 py-3 text-white outline-none placeholder:text-[#b1a696] focus:border-[#FF6B00]" />
                <textarea required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Ceritakan kebutuhan website Anda" rows="3" className="border-b border-white/50 bg-transparent px-1 py-3 text-white outline-none placeholder:text-[#b1a696] focus:border-[#FF6B00] md:col-span-2" />
                <button type="submit" className="w-fit rounded-full border-2 border-[#FF6B00] bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-[#FF6B00]">Kirim Pesan via WhatsApp</button>
            </form>
            <div>
                <MarqueeText />
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaBehance className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaInstagram className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><CiLinkedin className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaDribbble className="text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] text-right">
                        Transform your digital presence<br />
                        and scale your business
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;

import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <div className="relative z-49">
            <div className="absolute right-6 top-[2vw] flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-4xl bg-[#f4efe7] px-3 py-1 text-[#2a2725]"><AnimateBtn btnName="WhatsApp" href="https://wa.me/6281293161515" /><MdArrowOutward className="bg-[#2a2725] text-[#b3a694] w-7 h-7 rounded-full p-1" /></div>
                <div className="flex items-center gap-2 rounded-4xl bg-[#f4efe7] px-3 py-1 text-[#2a2725]">
                    <AnimateBtn btnName="Blog" href="/capsule/blog" />
                    <MdArrowOutward className="bg-[#2a2725] text-[#b3a694] w-7 h-7 rounded-full p-1" />
                </div>
            </div>
        </div>
    )
}

export default ReserveBtn;

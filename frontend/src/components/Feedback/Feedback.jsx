const testimonials = [
    ["Website kami terlihat jauh lebih profesional dan mulai mendatangkan klien baru.", "Rina, Jakarta"], ["Nash Studio memahami visi brand kami dan menerjemahkannya menjadi website yang kuat.", "Dimas, Bandung"], ["Prosesnya rapi, komunikasinya jelas, dan hasil akhirnya melampaui ekspektasi.", "Sarah, Bali"], ["Website baru kami cepat, responsif, dan jauh lebih mudah ditemukan di Google.", "Andi, Surabaya"], ["Desain premium yang membuat bisnis kami terlihat lebih terpercaya.", "Maya, Yogyakarta"], ["Nash Studio memberikan solusi digital yang tepat untuk target bisnis kami.", "Fajar, Tangerang"], ["Dari konsep sampai launching, semuanya terasa profesional dan terarah.", "Nadia, Semarang"], ["Landing page kami sekarang lebih menarik dan menghasilkan lebih banyak leads.", "Arif, Bekasi"], ["Tim Nash Studio cepat merespons dan sangat terbuka terhadap revisi.", "Kevin, Jakarta"], ["Website kami akhirnya punya identitas visual yang benar-benar berbeda.", "Putri, Malang"], ["Performa website meningkat dan pelanggan lebih mudah menghubungi kami.", "Budi, Depok"], ["Hasil desainnya modern, elegan, dan sesuai karakter brand kami.", "Clara, Medan"], ["Kami mendapatkan website yang bukan hanya indah, tetapi juga menghasilkan.", "Yoga, Makassar"], ["Strategi SEO dan struktur kontennya membantu bisnis kami tampil lebih relevan.", "Lia, Bogor"], ["Nash Studio membuat proses pembuatan website terasa sederhana dan nyaman.", "Rafi, Solo"], ["Website baru kami meningkatkan kepercayaan calon pelanggan sejak kunjungan pertama.", "Tania, Denpasar"], ["Sangat puas dengan perpaduan desain, kecepatan, dan pengalaman pengguna.", "Gilang, Balikpapan"], ["Setiap detail dikerjakan dengan teliti dan hasilnya terasa sangat premium.", "Salsa, Palembang"], ["Kami kini memiliki website yang siap mendukung pertumbuhan bisnis jangka panjang.", "Reza, Bandung"], ["Partner digital terbaik untuk bisnis yang ingin tampil lebih unggul.", "Vina, Jakarta"],
];

const TestimonialCard = ({ testimonial }) => <article className="feedback-card"><p>“{testimonial[0]}”</p><span>{testimonial[1]}</span></article>;

const Feedback = () => {
    const rows = [testimonials.slice(0, 10), testimonials.slice(10)];
    return <section className="feedback-section w-full min-h-dvh overflow-hidden px-6 py-16 md:px-8">
        <div className="mb-10"><p className="text-[.7rem] font-bold uppercase tracking-[0.2em] text-[#eae5dd]">Testimoni Klien Nash Studio</p><h1 className="mt-4 max-w-4xl text-4xl leading-tight text-[#f4efe7] md:text-7xl">Website yang membuat bisnis tumbuh lebih cepat.</h1></div>
        {rows.map((row, rowIndex) => <div key={rowIndex} className={`feedback-marquee ${rowIndex ? "feedback-marquee-reverse mt-5" : "feedback-marquee-forward"}`}><div className="feedback-track">{[...row, ...row].map((item, index) => <TestimonialCard key={`${rowIndex}-${index}`} testimonial={item} />)}</div></div>)}
    </section>;
};

export default Feedback;

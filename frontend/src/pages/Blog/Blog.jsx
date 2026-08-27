import { useEffect } from "react";

const posts = [
    ["Cara Memilih Jasa Pembuatan Website Profesional untuk Bisnis", "Panduan praktis memilih partner web development yang mampu memahami target bisnis, membangun kepercayaan, dan menghasilkan konversi."],
    ["Mengapa Website Profesional Penting untuk Bisnis Indonesia", "Website yang kredibel membantu bisnis tampil lebih terpercaya, mudah ditemukan, dan siap melayani pelanggan sepanjang hari."],
    ["Landing Page High-Converting: Strategi Mendapatkan Lebih Banyak Leads", "Pelajari elemen penting landing page yang mengubah pengunjung menjadi calon pelanggan berkualitas."],
    ["SEO Website: Cara Meningkatkan Visibilitas di Google", "Struktur teknis, konten relevan, dan pengalaman pengguna adalah fondasi website SEO-friendly yang berkelanjutan."],
    ["Web Design Modern yang Meningkatkan Kepercayaan Pelanggan", "Desain premium bukan hanya soal tampilan, tetapi juga navigasi jelas, pesan yang kuat, dan pengalaman pengguna yang nyaman."],
    ["Website Responsif untuk Pengguna Mobile", "Pastikan bisnis Anda tetap mudah diakses di smartphone dengan website yang cepat, adaptif, dan nyaman digunakan."],
    ["Kecepatan Website dan Dampaknya pada Konversi", "Website cepat mengurangi bounce rate, meningkatkan pengalaman pengguna, dan membantu calon pelanggan mengambil keputusan."],
    ["Company Profile yang Efektif untuk Memenangkan Klien", "Tampilkan keunggulan, layanan, dan portofolio bisnis dalam company profile yang dirancang untuk membangun kredibilitas."],
    ["E-Commerce Website: Membangun Toko Online yang Menghasilkan", "Strategi katalog produk, checkout, dan optimasi pengalaman belanja untuk membantu toko online berkembang."],
    ["Mengapa Bisnis Membutuhkan Website Custom", "Website custom memberi fleksibilitas lebih besar untuk mengembangkan fitur, integrasi, dan alur kerja sesuai kebutuhan bisnis."],
];

const Blog = () => {
    useEffect(() => { document.title = "Blog Nash Studio | Web Development dan SEO"; }, []);

    return <main className="min-h-screen bg-[#181717] px-6 py-12 text-[#f4efe7] md:px-12 md:py-16">
        <header className="mb-14 flex items-end justify-between gap-6 border-b border-white/30 pb-8">
            <div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#FF6B00]">Nash Studio / Insights</p><h1 className="text-5xl font-semibold leading-none md:text-8xl">Web growth<br />journal.</h1></div>
            <a href="/capsule/" className="rounded-full border border-white px-4 py-2 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black">Kembali</a>
        </header>
        <section className="grid gap-px overflow-hidden border border-white/25 bg-white/25 md:grid-cols-2">
            {posts.map(([title, excerpt], index) => <article key={title} className="bg-[#181717] p-6 transition-colors hover:bg-[#FF6B00] hover:text-black md:p-8"><p className="mb-12 text-xs text-[#FF6B00] group-hover:text-black">0{index + 1}</p><h2 className="mb-5 max-w-lg text-2xl font-semibold leading-tight md:text-3xl">{title}</h2><p className="max-w-xl text-sm leading-relaxed text-[#b1a696]">{excerpt}</p><span className="mt-8 block text-xs uppercase tracking-widest">Baca insight →</span></article>)}
        </section>
    </main>;
};

export default Blog;

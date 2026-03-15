export default function AdminPage() {
  return (
    <div className="space-y-8">
      
      {/* Welcome Section */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-white">
          Selamat Datang di Admin Panel TorinHub 👋
        </h1>

        <p className="text-slate-400 mt-3 leading-relaxed max-w-2xl">
          Panel ini digunakan untuk mengelola seluruh konten yang ada di 
          <span className="text-white font-medium"> TorinHub</span>. 
          Melalui dashboard ini Anda dapat mengatur project, organisasi,
          artikel blog, serta berbagai eksperimen dan riset yang ada di LAB.
        </p>

        <p className="text-slate-400 mt-3 leading-relaxed max-w-2xl">
          Gunakan menu navigasi di samping untuk mulai mengelola konten
          dan memastikan seluruh informasi pada platform tetap up-to-date.
        </p>
      </div>


      {/* Quick Guide */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-white font-medium">Project</h3>
          <p className="text-sm text-slate-400 mt-2">
            Kelola daftar project yang ditampilkan di TorinHub termasuk
            detail, deskripsi, dan teknologi yang digunakan.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-white font-medium">Organisations</h3>
          <p className="text-sm text-slate-400 mt-2">
            Atur organisasi atau komunitas yang terhubung dengan TorinHub.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-white font-medium">LAB</h3>
          <p className="text-sm text-slate-400 mt-2">
            Tempat untuk menampilkan eksperimen, riset, atau prototype
            teknologi yang sedang dikembangkan.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-white font-medium">Blog</h3>
          <p className="text-sm text-slate-400 mt-2">
            Publikasikan artikel, tutorial, dan insight teknologi
            untuk dibagikan kepada komunitas.
          </p>
        </div>

      </div>


      {/* Tips Section */}
      <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-5">
        <h3 className="text-white font-medium">
          Tips Menggunakan Dashboard
        </h3>

        <ul className="text-sm text-slate-400 mt-3 space-y-2 list-disc list-inside">
          <li>Pastikan konten yang ditambahkan memiliki deskripsi yang jelas.</li>
          <li>Gunakan gambar atau thumbnail berkualitas untuk setiap project.</li>
          <li>Perbarui artikel blog secara berkala untuk menjaga aktivitas platform.</li>
          <li>Gunakan LAB untuk mendokumentasikan eksperimen atau inovasi baru.</li>
        </ul>
      </div>

    </div>
  );
}
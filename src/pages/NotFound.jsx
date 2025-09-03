export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-center px-6">
      
      {/* Angka 404 besar */}
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-200 tracking-widest animate-bounce">
        404
      </h1>

      {/* Garis dekorasi */}
      <div className="bg-primary h-1 w-40 rounded-full my-6"></div>

      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Halaman Tidak Ditemukan
      </h2>

      {/* Deskripsi */}
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        Sepertinya halaman yang kamu cari tidak tersedia. 
        Jangan khawatir, kamu bisa kembali ke beranda.
      </p>

      {/* Tombol */}
      <a
        href="/"
        className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
};

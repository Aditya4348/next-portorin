type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

// Membuat Maps Untuk Tempat Penyimpanan Rate Limit Di data memory
const store = new Map<string, RateLimitEntry>();

// Dealrasi variabel Yang menyimpan maximal request dan berapa Request dalam menit
const WINDOWS_SIZE = 60 * 1000; // 1 Menit
const REQUEST = 10;

export async function checkRateLimit(request: Request) {
  // Ambil Ip dari Header dan Masukan ke variabel
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

  // deklarasi waktu sekarang dan juga memasukan ip kedalam map store kemudian dimasukan kedalam Variabel
  const now = Date.now();
  const existing = store.get(ip);

  // Pengecekan Jika existing Belum ada atau expired
  if (!existing || now > existing.expiresAt) {
    // Buat Baru Rate Limiting
    store.set(ip, {
      count: 1,
      expiresAt: now + WINDOWS_SIZE,
    });

    return {
      rateLimited: false,
      remaining: REQUEST - 1,
    };
  }

    //tambah Jumlah request
    existing.count += 1;
    
    store.set(ip, existing);

    // Jika Melebihi Limit
    if(existing.count > REQUEST){
        return {
      rateLimited: true,
      remaining: 0,
    }
    }

    return {
    rateLimited: false,
    remaining: REQUEST - existing.count,
  }
}

export default checkRateLimit;

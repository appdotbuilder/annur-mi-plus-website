<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        News::create([
            'title' => 'Pembukaan Tahun Ajaran Baru 2024/2025',
            'excerpt' => 'MI Plus ANNur membuka tahun ajaran baru dengan semangat dan inovasi pembelajaran terbaru.',
            'content' => 'Alhamdulillah, pada tanggal 15 Juli 2024, MI Plus ANNur telah resmi membuka tahun ajaran baru 2024/2025. Dalam pembukaan ini, kami menyambut 150 siswa baru yang akan bergabung dengan keluarga besar MI Plus ANNur. 

Kepala Sekolah, Ustadz Ahmad Fauzi, M.Pd., menyampaikan bahwa tahun ini sekolah akan menerapkan kurikulum merdeka yang telah disesuaikan dengan nilai-nilai Islami. Beberapa program unggulan yang akan dilaksanakan antara lain:

1. Program Tahfidz Al-Quran
2. Pembelajaran berbasis teknologi
3. Kegiatan ekstrakurikuler yang beragam
4. Program pembinaan karakter Islami

Semoga dengan dimulainya tahun ajaran baru ini, siswa-siswi MI Plus ANNur dapat meraih prestasi yang gemilang dan menjadi generasi yang cerdas, beriman, dan bertakwa.',
            'is_published' => true,
            'published_at' => now()->subDays(5),
        ]);

        News::create([
            'title' => 'Lomba Tahfidz Tingkat Kecamatan Juara 1',
            'excerpt' => 'Alhamdulillah, siswa MI Plus ANNur meraih juara 1 dalam lomba tahfidz tingkat kecamatan.',
            'content' => 'Kabar gembira datang dari MI Plus ANNur! Pada lomba tahfidz Al-Quran tingkat kecamatan yang diselenggarakan pada tanggal 20 Agustus 2024, siswa kami berhasil meraih juara 1.

Ahmad Zaki, siswa kelas 5, berhasil menjadi juara 1 dalam kategori hafalan 5 juz. Prestasi ini tidak lepas dari bimbingan ustadz dan ustadzah yang dengan sabar membimbing para siswa dalam menghafal Al-Quran.

Program tahfidz di MI Plus ANNur memang menjadi salah satu program unggulan. Setiap harinya, siswa mendapat waktu khusus untuk menghafal dan muraja\'ah Al-Quran dengan metode yang menyenangkan dan mudah dipahami.

Semoga prestasi ini dapat memotivasi siswa-siswa lainnya untuk terus semangat dalam menghafal Al-Quran dan meraih prestasi yang lebih gemilang lagi.',
            'is_published' => true,
            'published_at' => now()->subDays(10),
        ]);

        News::create([
            'title' => 'Kegiatan Manasik Haji untuk Siswa Kelas 6',
            'excerpt' => 'Siswa kelas 6 mengikuti simulasi manasik haji untuk memahami rukun Islam yang kelima.',
            'content' => 'Dalam rangka memberikan pemahaman yang komprehensif tentang rukun Islam yang kelima, MI Plus ANNur mengadakan kegiatan manasik haji untuk siswa kelas 6 pada tanggal 25 Agustus 2024.

Kegiatan ini dilaksanakan di halaman sekolah yang telah diatur menyerupai tempat-tempat ibadah haji seperti Ka\'bah, Shafa dan Marwa, serta Jamaraat. Siswa-siswa dengan antusias mengikuti setiap simulasi ibadah haji mulai dari tawaf, sa\'i, hingga lempar jumrah.

Ustadz Mahmud, selaku pembimbing kegiatan, menjelaskan bahwa tujuan kegiatan ini adalah:
- Memperkenalkan rukun Islam yang kelima kepada siswa
- Memberikan gambaran nyata tentang ibadah haji
- Menanamkan kecintaan terhadap Baitullah
- Mempersiapkan mental spiritual siswa

Para siswa sangat antusias dan berharap suatu saat nanti bisa melaksanakan ibadah haji yang sesungguhnya ke tanah suci Makkah.',
            'is_published' => true,
            'published_at' => now()->subDays(3),
        ]);
    }
}
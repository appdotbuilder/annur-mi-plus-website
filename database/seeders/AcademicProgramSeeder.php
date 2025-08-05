<?php

namespace Database\Seeders;

use App\Models\AcademicProgram;
use Illuminate\Database\Seeder;

class AcademicProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AcademicProgram::create([
            'name' => 'Program Tahfidz Al-Quran',
            'description' => 'Program unggulan untuk menghafal Al-Quran dengan metode yang menyenangkan dan mudah dipahami anak-anak.',
            'curriculum_details' => 'Program tahfidz dilaksanakan setiap hari dengan target:
- Kelas 1-2: Hafalan Juz 30 dan surat-surat pendek
- Kelas 3-4: Hafalan 2-3 Juz dengan muraja\'ah rutin  
- Kelas 5-6: Hafalan 5-7 Juz dengan tajwid yang baik

Metode pembelajaran:
• Talaqqi (face to face dengan ustadz/ustadzah)
• Muraja\'ah harian dan mingguan
• Evaluasi berkala dengan sistem reward
• Wisuda tahfidz untuk siswa yang mencapai target',
            'grade_level' => 'Kelas 1-6',
            'is_active' => true,
        ]);

        AcademicProgram::create([
            'name' => 'Pembelajaran Berbasis Teknologi',
            'description' => 'Integrasi teknologi dalam pembelajaran untuk mempersiapkan siswa menghadapi era digital.',
            'curriculum_details' => 'Program teknologi pendidikan meliputi:
- Penggunaan tablet dan laptop dalam pembelajaran
- Aplikasi edukasi interaktif untuk semua mata pelajaran
- Coding dan robotika sederhana untuk kelas 4-6
- Digital literacy dan internet safety

Fasilitas yang tersedia:
• Lab komputer dengan 30 unit PC
• Proyektor dan smart board di setiap kelas
• Akses internet wifi di seluruh area sekolah
• Perpustakaan digital dengan ribuan e-book',
            'grade_level' => 'Kelas 1-6',
            'is_active' => true,
        ]);

        AcademicProgram::create([
            'name' => 'Program Bahasa Arab dan Inggris',
            'description' => 'Penguatan kemampuan bahasa asing sebagai bekal komunikasi global dan pemahaman Al-Quran.',
            'curriculum_details' => 'Program bilingual yang komprehensif:

Bahasa Arab:
- Dasar-dasar kosakata dan tata bahasa
- Praktik percakapan sehari-hari
- Membaca teks-teks sederhana
- Integrasi dengan pembelajaran Al-Quran

Bahasa Inggris:
- Speaking, listening, reading, writing
- English conversation club
- Drama dan storytelling dalam bahasa Inggris
- Persiapan ujian Cambridge Young Learners

Kegiatan pendukung:
• Arabic and English Day setiap minggu
• Lomba pidato dan puisi
• Pertukaran siswa virtual dengan sekolah luar negeri',
            'grade_level' => 'Kelas 1-6',
            'is_active' => true,
        ]);

        AcademicProgram::create([
            'name' => 'Program Sains dan Matematika',
            'description' => 'Pembelajaran sains dan matematika yang menyenangkan dengan pendekatan eksperimental dan praktis.',
            'curriculum_details' => 'Kurikulum sains dan matematika yang inovatif:

Matematika:
- Konsep dasar dengan pendekatan visual dan manipulatif
- Problem solving dan logical thinking
- Matematika dalam kehidupan sehari-hari
- Olimpiade matematika untuk siswa berbakat

Sains:
- Eksperimen sederhana dan aman
- Observasi alam dan lingkungan
- Project science fair tahunan
- Integrasi dengan ayat-ayat Al-Quran tentang alam

Fasilitas:
• Laboratorium sains mini dengan peralatan lengkap
• Taman sekolah untuk praktik botani
• Teleskop untuk pengamatan astronomi
• Perpustakaan sains dengan buku-buku referensi',
            'grade_level' => 'Kelas 1-6',
            'is_active' => true,
        ]);
    }
}
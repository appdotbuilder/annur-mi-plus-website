<?php

namespace Database\Seeders;

use App\Models\Teacher;
use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Teacher::create([
            'name' => 'Ustadz Ahmad Fauzi, M.Pd.',
            'position' => 'Kepala Sekolah',
            'subject' => 'Manajemen Pendidikan',
            'bio' => 'Ustadz Ahmad Fauzi adalah seorang pendidik berpengalaman dengan lebih dari 15 tahun dedikasi dalam dunia pendidikan Islam. Beliau memiliki visi untuk menjadikan MI Plus ANNur sebagai sekolah Islam terdepan yang mampu mencetak generasi Qurani yang cerdas dan berakhlak mulia.',
            'email' => 'fauzi@miplusannur.sch.id',
            'education_background' => 'S2 Pendidikan Islam UIN Jakarta, S1 Pendidikan Agama Islam',
            'years_experience' => 15,
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Ustadzah Siti Aisyah, S.Pd.I.',
            'position' => 'Guru Kelas',
            'subject' => 'Bahasa Indonesia & Al-Quran',
            'bio' => 'Ustadzah Siti Aisyah adalah guru yang sangat mencintai dunia literasi dan Al-Quran. Dengan metode pembelajaran yang kreatif dan menyenangkan, beliau berhasil membuat siswa-siswa gemar membaca dan menghafal Al-Quran. Prestasi siswa dalam lomba tahfidz dan storytelling tidak lepas dari bimbingan beliau.',
            'email' => 'aisyah@miplusannur.sch.id',
            'education_background' => 'S1 Pendidikan Agama Islam UIN Bandung',
            'years_experience' => 8,
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Ustadz Muhammad Rizki, S.Kom.',
            'position' => 'Guru Mata Pelajaran',
            'subject' => 'Matematika & Teknologi',
            'bio' => 'Ustadz Rizki adalah guru muda yang membawa inovasi teknologi dalam pembelajaran. Dengan latar belakang IT, beliau mampu membuat pembelajaran matematika menjadi lebih menarik melalui aplikasi dan game edukatif. Beliau juga mengajar coding sederhana untuk siswa kelas tinggi.',
            'email' => 'rizki@miplusannur.sch.id',
            'education_background' => 'S1 Teknik Informatika ITB, Sertifikat Pendidikan Profesi Guru',
            'years_experience' => 5,
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Ustadzah Fatimah Zahra, S.Pd.',
            'position' => 'Guru Kelas',
            'subject' => 'Bahasa Inggris & Sains',
            'bio' => 'Ustadzah Fatimah adalah guru yang enerjik dan kreatif dalam mengajar bahasa Inggris dan sains. Beliau sering menggunakan eksperimen sederhana dan permainan bahasa untuk membuat pembelajaran lebih menyenangkan. Siswa-siswa sangat menyukai cara mengajar beliau yang penuh semangat.',
            'email' => 'fatimah@miplusannur.sch.id',
            'education_background' => 'S1 Pendidikan Bahasa Inggris UPI, Sertifikat TESOL',
            'years_experience' => 6,
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Ustadz Abdullah Malik, Lc.',
            'position' => 'Guru Mata Pelajaran',
            'subject' => 'Bahasa Arab & Tahfidz',
            'bio' => 'Lulusan Al-Azhar Mesir ini memiliki keahlian khusus dalam pengajaran bahasa Arab dan bimbingan tahfidz. Dengan pengalaman belajar di tanah Arab, beliau membawa metode pembelajaran bahasa Arab yang autentik dan mudah dipahami siswa Indonesia.',
            'email' => 'abdullah@miplusannur.sch.id',
            'education_background' => 'Licentiate (Lc.) Al-Azhar University Cairo, Ijazah Tahfidz',
            'years_experience' => 10,
            'is_active' => true,
        ]);

        Teacher::create([
            'name' => 'Ustadzah Maryam Salsabila, S.Pd.',
            'position' => 'Guru Kelas',
            'subject' => 'PKN & IPS',
            'bio' => 'Ustadzah Maryam adalah guru yang peduli dengan pembentukan karakter dan kesadaran berbangsa siswa. Dengan pendekatan pembelajaran yang kontekstual, beliau mampu menghubungkan materi PKN dan IPS dengan kehidupan sehari-hari dan nilai-nilai Islam.',
            'email' => 'maryam@miplusannur.sch.id',
            'education_background' => 'S1 Pendidikan Pancasila dan Kewarganegaraan UNJ',
            'years_experience' => 7,
            'is_active' => true,
        ]);
    }
}
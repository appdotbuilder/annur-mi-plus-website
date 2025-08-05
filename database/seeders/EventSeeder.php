<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::create([
            'title' => 'Peringatan Maulid Nabi Muhammad SAW',
            'description' => 'Kegiatan peringatan Maulid Nabi Muhammad SAW dengan berbagai lomba dan ceramah agama. Acara dimulai pukul 08.00 WIB dengan pembacaan sholawat dan diakhiri dengan pembagian hadiah.',
            'event_date' => now()->addDays(15),
            'location' => 'Aula MI Plus ANNur',
            'status' => 'upcoming',
        ]);

        Event::create([
            'title' => 'Pameran Karya Siswa',
            'description' => 'Pameran hasil karya siswa dari berbagai bidang seperti kaligrafi, lukisan, kerajinan tangan, dan project sains. Orang tua dan masyarakat diundang untuk melihat kreativitas putra-putri kami.',
            'event_date' => now()->addDays(30),
            'location' => 'Ruang Pameran Sekolah',
            'status' => 'upcoming',
        ]);

        Event::create([
            'title' => 'Field Trip ke Museum',
            'description' => 'Kegiatan pembelajaran di luar kelas untuk siswa kelas 4-6. Kunjungan edukatif ke Museum Nasional untuk mempelajari sejarah dan budaya Indonesia.',
            'event_date' => now()->addDays(20),
            'location' => 'Museum Nasional Jakarta',
            'status' => 'upcoming',
        ]);

        Event::create([
            'title' => 'Hari Olahraga Nasional',
            'description' => 'Peringatan Hari Olahraga Nasional dengan berbagai lomba olahraga seperti lari, lompat jauh, dan permainan tradisional.',
            'event_date' => now()->subDays(20),
            'location' => 'Lapangan Sekolah',
            'status' => 'completed',
        ]);

        Event::create([
            'title' => 'Lomba Puisi dan Storytelling',
            'description' => 'Kompetisi puisi dan bercerita dalam bahasa Indonesia dan bahasa Inggris untuk mengembangkan kemampuan berbahasa siswa.',
            'event_date' => now()->subDays(35),
            'location' => 'Aula MI Plus ANNur',
            'status' => 'completed',
        ]);
    }
}
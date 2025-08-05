<?php

namespace Database\Seeders;

use App\Models\GalleryPhoto;
use Illuminate\Database\Seeder;

class GalleryPhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        GalleryPhoto::create([
            'title' => 'Kegiatan Sholat Berjamaah',
            'description' => 'Siswa-siswa MI Plus ANNur melaksanakan sholat berjamaah di musholla sekolah. Kegiatan ini rutin dilakukan setiap hari untuk membentuk karakter religius.',
            'image_path' => '/images/gallery/sholat-berjamaah.jpg',
            'category' => 'kegiatan-keagamaan',
            'taken_at' => now()->subDays(10),
            'is_featured' => true,
            'sort_order' => 1,
        ]);

        GalleryPhoto::create([
            'title' => 'Pembelajaran di Laboratorium Sains',
            'description' => 'Siswa kelas 5 sedang melakukan eksperimen sederhana tentang sifat-sifat air di laboratorium sains sekolah.',
            'image_path' => '/images/gallery/lab-sains.jpg',
            'category' => 'pembelajaran',
            'taken_at' => now()->subDays(15),
            'is_featured' => true,
            'sort_order' => 2,
        ]);

        GalleryPhoto::create([
            'title' => 'Lomba Kaligrafi Arab',
            'description' => 'Para siswa menunjukkan kemampuan menulis kaligrafi Arab dalam lomba tahunan sekolah. Karya-karya mereka sangat memukau.',
            'image_path' => '/images/gallery/kaligrafi.jpg',
            'category' => 'kompetisi',
            'taken_at' => now()->subDays(20),
            'is_featured' => true,
            'sort_order' => 3,
        ]);

        GalleryPhoto::create([
            'title' => 'Kegiatan Olahraga Pagi',
            'description' => 'Senam pagi dan olahraga bersama untuk menjaga kesehatan dan kebugaran siswa-siswa MI Plus ANNur.',
            'image_path' => '/images/gallery/olahraga.jpg',
            'category' => 'olahraga',
            'taken_at' => now()->subDays(5),
            'is_featured' => true,
            'sort_order' => 4,
        ]);

        GalleryPhoto::create([
            'title' => 'Perayaan Hari Kemerdekaan',
            'description' => 'Upacara bendera dan berbagai lomba dalam rangka memperingati Hari Kemerdekaan Indonesia ke-79.',
            'image_path' => '/images/gallery/kemerdekaan.jpg',
            'category' => 'perayaan',
            'taken_at' => now()->subDays(60),
            'is_featured' => true,
            'sort_order' => 5,
        ]);

        GalleryPhoto::create([
            'title' => 'Kelas Coding untuk Siswa',
            'description' => 'Siswa kelas 6 sedang belajar dasar-dasar programming dengan bantuan aplikasi visual yang mudah dipahami.',
            'image_path' => '/images/gallery/coding.jpg',
            'category' => 'teknologi',
            'taken_at' => now()->subDays(8),
            'is_featured' => true,
            'sort_order' => 6,
        ]);

        // Additional non-featured photos
        GalleryPhoto::create([
            'title' => 'Perpustakaan Sekolah',
            'description' => 'Fasilitas perpustakaan yang nyaman dengan koleksi buku yang lengkap untuk mendukung pembelajaran siswa.',
            'image_path' => '/images/gallery/perpustakaan.jpg',
            'category' => 'fasilitas',
            'taken_at' => now()->subDays(30),
            'is_featured' => false,
            'sort_order' => 7,
        ]);

        GalleryPhoto::create([
            'title' => 'Taman Bermain Anak',
            'description' => 'Area bermain yang aman dan menyenangkan untuk siswa kelas bawah saat jam istirahat.',
            'image_path' => '/images/gallery/playground.jpg',
            'category' => 'fasilitas',
            'taken_at' => now()->subDays(25),
            'is_featured' => false,
            'sort_order' => 8,
        ]);
    }
}
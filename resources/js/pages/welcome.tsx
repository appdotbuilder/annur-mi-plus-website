import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, GraduationCap, Users, Camera, Phone, MapPin, Mail, Clock } from 'lucide-react';

interface News {
    id: number;
    title: string;
    excerpt: string;
    published_at: string;
    [key: string]: unknown;
}

interface Event {
    id: number;
    title: string;
    description: string;
    event_date: string;
    location: string;
    status: string;
    [key: string]: unknown;
}

interface AcademicProgram {
    id: number;
    name: string;
    description: string;
    grade_level: string;
    [key: string]: unknown;
}

interface Teacher {
    id: number;
    name: string;
    position: string;
    subject: string;
    years_experience: number;
    [key: string]: unknown;
}

interface GalleryPhoto {
    id: number;
    title: string;
    description: string;
    image_path: string;
    category: string;
    [key: string]: unknown;
}

interface Props {
    news: News[];
    events: Event[];
    programs: AcademicProgram[];
    teachers: Teacher[];
    photos: GalleryPhoto[];
    [key: string]: unknown;
}

export default function Welcome({ news, events, programs, teachers, photos }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            🕌 MI Plus ANNur
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-green-100">
                            Sekolah Islam Terpadu - Membentuk Generasi Qurani yang Cerdas dan Berakhlak Mulia
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                                <a href="#programs" className="flex items-center gap-2">
                                    <GraduationCap className="h-5 w-5" />
                                    Lihat Program Akademik
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                                <a href="/pendaftaran" className="flex items-center gap-2">
                                    📝 Daftar Sekarang
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Overview */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">✨ Keunggulan MI Plus ANNur</h2>
                    <p className="text-gray-600 text-lg">
                        Fasilitas lengkap dan program pendidikan berkualitas untuk putra-putri Anda
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="text-center hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto mb-4 text-4xl">📖</div>
                            <CardTitle>Program Tahfidz</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Bimbingan menghafal Al-Quran dengan metode yang mudah dan menyenangkan
                            </p>
                        </CardContent>
                    </Card>
                    
                    <Card className="text-center hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto mb-4 text-4xl">💻</div>
                            <CardTitle>Teknologi Pendidikan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Pembelajaran modern dengan teknologi terdepan dan fasilitas lengkap
                            </p>
                        </CardContent>
                    </Card>
                    
                    <Card className="text-center hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto mb-4 text-4xl">🌍</div>
                            <CardTitle>Bahasa Internasional</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Program bahasa Arab dan Inggris untuk komunikasi global
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Latest News */}
            <div className="bg-gray-50 py-16" id="news">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">📰 Berita Terkini</h2>
                        <p className="text-gray-600">Informasi terbaru kegiatan dan prestasi sekolah</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <Card key={item.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <CalendarDays className="h-4 w-4" />
                                        {formatDate(item.published_at)}
                                    </div>
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="py-16" id="events">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">📅 Acara Mendatang</h2>
                        <p className="text-gray-600">Kegiatan dan acara sekolah yang akan datang</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.filter(event => event.status === 'upcoming').map((event) => (
                            <Card key={event.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                                            {event.status === 'upcoming' ? 'Akan Datang' : 'Selesai'}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <Clock className="h-4 w-4" />
                                            {formatDate(event.event_date)}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg">{event.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                                    {event.location && (
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <MapPin className="h-4 w-4" />
                                            {event.location}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Academic Programs */}
            <div className="bg-gray-50 py-16" id="programs">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">🎓 Program Akademik</h2>
                        <p className="text-gray-600">Kurikulum dan program pendidikan unggulan kami</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {programs.map((program) => (
                            <Card key={program.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="outline" className="text-green-600 border-green-600">
                                            {program.grade_level}
                                        </Badge>
                                    </div>
                                    <CardTitle>{program.name}</CardTitle>
                                    <CardDescription>{program.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Teachers */}
            <div className="py-16" id="teachers">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">👥 Profil Guru</h2>
                        <p className="text-gray-600">Tim pengajar berpengalaman dan berkualitas</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teachers.slice(0, 6).map((teacher) => (
                            <Card key={teacher.id} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto mb-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                                        👨‍🏫
                                    </div>
                                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                                    <CardDescription>{teacher.position}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <GraduationCap className="h-4 w-4 text-green-600" />
                                            <span>{teacher.subject}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <Users className="h-4 w-4 text-green-600" />
                                            <span>{teacher.years_experience} tahun pengalaman</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="bg-gray-50 py-16" id="gallery">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">📸 Galeri Foto</h2>
                        <p className="text-gray-600">Dokumentasi kegiatan dan fasilitas sekolah</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {photos.map((photo) => (
                            <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                                    <Camera className="h-12 w-12 text-green-400" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">{photo.title}</CardTitle>
                                    <CardDescription className="text-sm">
                                        {photo.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="py-16" id="contact">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">📞 Informasi Kontak</h2>
                        <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut</p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold mb-4">🏫 MI Plus ANNur</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-green-600 mt-1" />
                                        <div>
                                            <p className="font-medium">Alamat Sekolah</p>
                                            <p className="text-gray-600">
                                                Jl. Pendidikan No. 123<br />
                                                Kelurahan Sejahtera<br />
                                                Jakarta Selatan 12345
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-green-600 mt-1" />
                                        <div>
                                            <p className="font-medium">Telepon & WhatsApp</p>
                                            <p className="text-gray-600">
                                                (021) 1234-5678<br />
                                                +62 812-3456-7890
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-green-600 mt-1" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-gray-600">
                                                info@miplusannur.sch.id<br />
                                                admin@miplusannur.sch.id
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold mb-4">🕐 Jam Operasional</h3>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span>Senin - Jumat</span>
                                        <span className="text-gray-600">07:00 - 15:30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sabtu</span>
                                        <span className="text-gray-600">07:00 - 12:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Minggu</span>
                                        <span className="text-gray-600">Libur</span>
                                    </div>
                                </div>
                                
                                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">💡 Informasi Pendaftaran</h4>
                                    <p className="text-green-700 text-sm mb-4">
                                        Pendaftaran siswa baru untuk tahun ajaran 2024/2025 telah dibuka! 
                                        Daftar sekarang untuk mendapatkan tempat terbaik.
                                    </p>
                                    <Button className="w-full bg-green-600 hover:bg-green-700">
                                        <a href="/pendaftaran" className="flex items-center justify-center gap-2">
                                            📝 Formulir Pendaftaran Online
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-2">
                        © 2024 MI Plus ANNur. Semua hak cipta dilindungi.
                    </p>
                    <p className="text-green-200 text-sm">
                        "Dan sungguh telah Kami muliakan anak-anak Adam" - QS. Al-Isra: 70
                    </p>
                </div>
            </footer>
        </div>
    );
}
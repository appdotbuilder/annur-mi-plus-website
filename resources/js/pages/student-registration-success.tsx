import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Home, Phone, Mail, Clock, School } from 'lucide-react';

interface StudentRegistration {
    id: number;
    student_name: string;
    student_nik: string;
    parent_name: string;
    parent_phone: string;
    parent_email: string;
    desired_grade: string;
    status: string;
    submitted_at: string;
    [key: string]: unknown;
}

interface Props {
    registration: StudentRegistration;
    [key: string]: unknown;
}

export default function StudentRegistrationSuccess({ registration }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Header */}
            <div className="bg-green-600 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-200" />
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            ✅ Pendaftaran Berhasil!
                        </h1>
                        <p className="text-green-100 text-lg">
                            Terima kasih telah mendaftar di MI Plus ANNur
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Success Message */}
                    <Card className="border-green-200 bg-green-50">
                        <CardContent className="pt-6">
                            <div className="text-center space-y-4">
                                <div className="text-4xl">🎉</div>
                                <h2 className="text-2xl font-bold text-green-800">
                                    Pendaftaran Anda Telah Diterima!
                                </h2>
                                <p className="text-green-700">
                                    Formulir pendaftaran untuk <strong>{registration.student_name}</strong> telah berhasil dikirim. 
                                    Tim kami akan segera menghubungi Anda untuk proses selanjutnya.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Registration Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <School className="h-5 w-5 text-green-600" />
                                Detail Pendaftaran
                            </CardTitle>
                            <CardDescription>
                                Informasi pendaftaran yang telah dikirim
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Nomor Pendaftaran</label>
                                        <p className="text-lg font-mono font-bold text-green-600">
                                            REG-{registration.id.toString().padStart(4, '0')}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Nama Siswa</label>
                                        <p className="text-lg font-semibold">{registration.student_name}</p>
                                    </div>
                                    
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Kelas yang Diinginkan</label>
                                        <p className="text-lg">Kelas {registration.desired_grade}</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Status Pendaftaran</label>
                                        <div className="mt-1">
                                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                                {registration.status === 'pending' ? 'Menunggu Review' : registration.status}
                                            </Badge>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Tanggal Pendaftaran</label>
                                        <p className="text-lg">{formatDate(registration.submitted_at)}</p>
                                    </div>
                                    
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Nama Orang Tua</label>
                                        <p className="text-lg">{registration.parent_name}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Next Steps */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-blue-600" />
                                Langkah Selanjutnya
                            </CardTitle>
                            <CardDescription>
                                Apa yang perlu Anda lakukan setelah ini
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Tunggu Konfirmasi</h4>
                                        <p className="text-gray-600 text-sm">
                                            Tim kami akan menghubungi Anda dalam 2-3 hari kerja untuk konfirmasi dan jadwal tes seleksi.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Siapkan Dokumen</h4>
                                        <p className="text-gray-600 text-sm">
                                            Siapkan dokumen asli: Akta Kelahiran, Kartu Keluarga, Foto 3x4, dan Rapor terakhir (jika ada).
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Ikuti Proses Seleksi</h4>
                                        <p className="text-gray-600 text-sm">
                                            Hadiri tes wawancara dan observasi sesuai jadwal yang akan diberikan.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Pengumuman Hasil</h4>
                                        <p className="text-gray-600 text-sm">
                                            Hasil seleksi akan diumumkan dan dikirim melalui WhatsApp/email yang telah didaftarkan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card className="bg-gray-50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-green-600" />
                                Informasi Kontak
                            </CardTitle>
                            <CardDescription>
                                Hubungi kami jika ada pertanyaan lebih lanjut
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-4 w-4 text-green-600" />
                                        <div>
                                            <p className="font-medium">Telepon Sekolah</p>
                                            <p className="text-gray-600">(021) 1234-5678</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <div className="h-4 w-4 text-green-600 flex items-center justify-center text-sm">📱</div>
                                        <div>
                                            <p className="font-medium">WhatsApp</p>
                                            <p className="text-gray-600">+62 812-3456-7890</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-4 w-4 text-green-600" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-gray-600">info@miplusannur.sch.id</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-4 w-4 text-green-600" />
                                        <div>
                                            <p className="font-medium">Jam Operasional</p>
                                            <p className="text-gray-600">Senin - Jumat: 07:00 - 15:30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Important Note */}
                    <Card className="border-orange-200 bg-orange-50">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">⚠️</div>
                                <div>
                                    <h4 className="font-semibold text-orange-800 mb-2">Catatan Penting</h4>
                                    <ul className="text-orange-700 text-sm space-y-1">
                                        <li>• Simpan nomor pendaftaran <strong>REG-{registration.id.toString().padStart(4, '0')}</strong> untuk referensi</li>
                                        <li>• Pastikan nomor telepon {registration.parent_phone} aktif untuk dihubungi</li>
                                        <li>• Periksa email {registration.parent_email || 'yang didaftarkan'} secara berkala</li>
                                        <li>• Jika tidak ada kabar dalam 5 hari kerja, silakan hubungi kami</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            variant="outline" 
                            size="lg"
                            onClick={() => window.print()}
                        >
                            🖨️ Cetak Halaman
                        </Button>
                        <Button 
                            size="lg" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => window.location.href = '/'}
                        >
                            <Home className="h-4 w-4 mr-2" />
                            Kembali ke Beranda
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-2">
                        © 2024 MI Plus ANNur. Terima kasih atas kepercayaan Anda.
                    </p>
                    <p className="text-green-200 text-sm">
                        "Dan sungguh telah Kami muliakan anak-anak Adam" - QS. Al-Isra: 70
                    </p>
                </div>
            </footer>
        </div>
    );
}
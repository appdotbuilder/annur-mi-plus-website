import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { router } from '@inertiajs/react';
import { ArrowLeft, School, User, Users, GraduationCap } from 'lucide-react';

interface Props {
    errors?: Record<string, string>;
    [key: string]: unknown;
}

export default function StudentRegistration({ errors = {} }: Props) {
    const [formData, setFormData] = useState({
        student_name: '',
        student_nik: '',
        birth_date: '',
        birth_place: '',
        gender: '',
        address: '',
        previous_school: '',
        parent_name: '',
        parent_phone: '',
        parent_email: '',
        parent_occupation: '',
        desired_grade: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        router.post(route('student-registration.store'), formData, {
            onFinish: () => setIsSubmitting(false),
            preserveState: true,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Header */}
            <div className="bg-green-600 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-white hover:bg-green-700"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Kembali
                        </Button>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            📝 Pendaftaran Siswa Baru
                        </h1>
                        <p className="text-green-100 text-lg">
                            MI Plus ANNur - Tahun Ajaran 2024/2025
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <Card className="mb-8">
                        <CardHeader className="text-center">
                            <School className="h-12 w-12 text-green-600 mx-auto mb-4" />
                            <CardTitle className="text-2xl">Selamat Datang Calon Siswa MI Plus ANNur!</CardTitle>
                            <CardDescription className="text-lg">
                                Silakan lengkapi formulir pendaftaran di bawah ini dengan data yang benar dan akurat. 
                                Semua field yang bertanda (*) wajib diisi.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Student Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="h-5 w-5 text-green-600" />
                                    Data Siswa
                                </CardTitle>
                                <CardDescription>Informasi lengkap calon siswa</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="student_name">Nama Lengkap Siswa *</Label>
                                        <Input
                                            id="student_name"
                                            value={formData.student_name}
                                            onChange={(e) => handleInputChange('student_name', e.target.value)}
                                            placeholder="Contoh: Ahmad Zaki Mubarak"
                                            className={errors.student_name ? 'border-red-500' : ''}
                                        />
                                        {errors.student_name && (
                                            <p className="text-red-500 text-sm">{errors.student_name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="student_nik">NIK Siswa *</Label>
                                        <Input
                                            id="student_nik"
                                            value={formData.student_nik}
                                            onChange={(e) => handleInputChange('student_nik', e.target.value)}
                                            placeholder="16 digit NIK"
                                            maxLength={16}
                                            className={errors.student_nik ? 'border-red-500' : ''}
                                        />
                                        {errors.student_nik && (
                                            <p className="text-red-500 text-sm">{errors.student_nik}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="birth_place">Tempat Lahir *</Label>
                                        <Input
                                            id="birth_place"
                                            value={formData.birth_place}
                                            onChange={(e) => handleInputChange('birth_place', e.target.value)}
                                            placeholder="Contoh: Jakarta"
                                            className={errors.birth_place ? 'border-red-500' : ''}
                                        />
                                        {errors.birth_place && (
                                            <p className="text-red-500 text-sm">{errors.birth_place}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="birth_date">Tanggal Lahir *</Label>
                                        <Input
                                            id="birth_date"
                                            type="date"
                                            value={formData.birth_date}
                                            onChange={(e) => handleInputChange('birth_date', e.target.value)}
                                            className={errors.birth_date ? 'border-red-500' : ''}
                                        />
                                        {errors.birth_date && (
                                            <p className="text-red-500 text-sm">{errors.birth_date}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="gender">Jenis Kelamin *</Label>
                                        <Select onValueChange={(value) => handleInputChange('gender', value)}>
                                            <SelectTrigger className={errors.gender ? 'border-red-500' : ''}>
                                                <SelectValue placeholder="Pilih jenis kelamin" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="laki-laki">Laki-laki</SelectItem>
                                                <SelectItem value="perempuan">Perempuan</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.gender && (
                                            <p className="text-red-500 text-sm">{errors.gender}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="previous_school">Asal Sekolah (Opsional)</Label>
                                        <Input
                                            id="previous_school"
                                            value={formData.previous_school}
                                            onChange={(e) => handleInputChange('previous_school', e.target.value)}
                                            placeholder="Contoh: TK Islam Al-Ikhlas"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Alamat Lengkap *</Label>
                                    <Textarea
                                        id="address"
                                        value={formData.address}
                                        onChange={(e) => handleInputChange('address', e.target.value)}
                                        placeholder="Jl. Contoh No. 123, RT/RW 01/02, Kelurahan, Kecamatan, Kota, Kode Pos"
                                        rows={3}
                                        className={errors.address ? 'border-red-500' : ''}
                                    />
                                    {errors.address && (
                                        <p className="text-red-500 text-sm">{errors.address}</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Parent Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-green-600" />
                                    Data Orang Tua/Wali
                                </CardTitle>
                                <CardDescription>Informasi orang tua atau wali siswa</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="parent_name">Nama Orang Tua/Wali *</Label>
                                        <Input
                                            id="parent_name"
                                            value={formData.parent_name}
                                            onChange={(e) => handleInputChange('parent_name', e.target.value)}
                                            placeholder="Contoh: Bapak Ahmad Mubarak"
                                            className={errors.parent_name ? 'border-red-500' : ''}
                                        />
                                        {errors.parent_name && (
                                            <p className="text-red-500 text-sm">{errors.parent_name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="parent_occupation">Pekerjaan *</Label>
                                        <Input
                                            id="parent_occupation"
                                            value={formData.parent_occupation}
                                            onChange={(e) => handleInputChange('parent_occupation', e.target.value)}
                                            placeholder="Contoh: Pegawai Swasta"
                                            className={errors.parent_occupation ? 'border-red-500' : ''}
                                        />
                                        {errors.parent_occupation && (
                                            <p className="text-red-500 text-sm">{errors.parent_occupation}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="parent_phone">Nomor Telepon/WhatsApp *</Label>
                                        <Input
                                            id="parent_phone"
                                            value={formData.parent_phone}
                                            onChange={(e) => handleInputChange('parent_phone', e.target.value)}
                                            placeholder="Contoh: 0812-3456-7890"
                                            className={errors.parent_phone ? 'border-red-500' : ''}
                                        />
                                        {errors.parent_phone && (
                                            <p className="text-red-500 text-sm">{errors.parent_phone}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="parent_email">Email (Opsional)</Label>
                                        <Input
                                            id="parent_email"
                                            type="email"
                                            value={formData.parent_email}
                                            onChange={(e) => handleInputChange('parent_email', e.target.value)}
                                            placeholder="contoh@email.com"
                                            className={errors.parent_email ? 'border-red-500' : ''}
                                        />
                                        {errors.parent_email && (
                                            <p className="text-red-500 text-sm">{errors.parent_email}</p>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Academic Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <GraduationCap className="h-5 w-5 text-green-600" />
                                    Informasi Akademik
                                </CardTitle>
                                <CardDescription>Pilihan kelas dan program pendidikan</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Label htmlFor="desired_grade">Kelas yang Diinginkan *</Label>
                                    <Select onValueChange={(value) => handleInputChange('desired_grade', value)}>
                                        <SelectTrigger className={errors.desired_grade ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Pilih kelas" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Kelas 1</SelectItem>
                                            <SelectItem value="2">Kelas 2</SelectItem>
                                            <SelectItem value="3">Kelas 3</SelectItem>
                                            <SelectItem value="4">Kelas 4</SelectItem>
                                            <SelectItem value="5">Kelas 5</SelectItem>
                                            <SelectItem value="6">Kelas 6</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.desired_grade && (
                                        <p className="text-red-500 text-sm">{errors.desired_grade}</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Information Notice */}
                        <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3">
                                    <div className="text-2xl">ℹ️</div>
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-2">Informasi Penting</h4>
                                        <ul className="text-blue-700 text-sm space-y-1">
                                            <li>• Pastikan semua data yang diisi sudah benar</li>
                                            <li>• Tim sekolah akan menghubungi Anda dalam 2-3 hari kerja</li>
                                            <li>• Proses seleksi akan dilakukan setelah pendaftaran</li>
                                            <li>• Siapkan dokumen asli untuk verifikasi lebih lanjut</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                onClick={() => window.history.back()}
                                disabled={isSubmitting}
                            >
                                Batal
                            </Button>
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="bg-green-600 hover:bg-green-700"
                            >
                                {isSubmitting ? 'Mengirim...' : '📤 Kirim Pendaftaran'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
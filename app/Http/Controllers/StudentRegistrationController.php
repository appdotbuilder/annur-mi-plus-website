<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRegistrationRequest;
use App\Models\StudentRegistration;
use Inertia\Inertia;

class StudentRegistrationController extends Controller
{
    /**
     * Show the registration form.
     */
    public function create()
    {
        return Inertia::render('student-registration');
    }

    /**
     * Store a new student registration.
     */
    public function store(StoreStudentRegistrationRequest $request)
    {
        $registration = StudentRegistration::create($request->validated());

        return redirect()->route('student-registration.success', $registration)
            ->with('success', 'Pendaftaran berhasil dikirim. Kami akan menghubungi Anda segera.');
    }

    /**
     * Show the specified registration.
     */
    public function show(StudentRegistration $registration)
    {
        return Inertia::render('student-registration-success', [
            'registration' => $registration
        ]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AcademicProgram;
use App\Models\Event;
use App\Models\GalleryPhoto;
use App\Models\News;
use App\Models\Teacher;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     */
    public function index()
    {
        $latestNews = News::published()
            ->latest('published_at')
            ->take(3)
            ->get();

        $upcomingEvents = Event::upcoming()
            ->orderBy('event_date')
            ->take(3)
            ->get();

        $academicPrograms = AcademicProgram::active()
            ->orderBy('grade_level')
            ->get();

        $featuredTeachers = Teacher::active()
            ->take(4)
            ->get();

        $galleryPhotos = GalleryPhoto::featured()
            ->orderBy('sort_order')
            ->take(6)
            ->get();

        return Inertia::render('welcome', [
            'news' => $latestNews,
            'events' => $upcomingEvents,
            'programs' => $academicPrograms,
            'teachers' => $featuredTeachers,
            'photos' => $galleryPhotos,
        ]);
    }
}
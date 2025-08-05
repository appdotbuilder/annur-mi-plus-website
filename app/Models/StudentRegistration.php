<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\StudentRegistration
 *
 * @property int $id
 * @property string $student_name
 * @property string $student_nik
 * @property \Illuminate\Support\Carbon $birth_date
 * @property string $birth_place
 * @property string $gender
 * @property string $address
 * @property string|null $previous_school
 * @property string $parent_name
 * @property string $parent_phone
 * @property string|null $parent_email
 * @property string $parent_occupation
 * @property string $desired_grade
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon $submitted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration query()
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereStudentName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereStudentNik($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereBirthDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereBirthPlace($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration wherePreviousSchool($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereParentName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereParentPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereParentEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereParentOccupation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereDesiredGrade($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereSubmittedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration pending()

 * 
 * @mixin \Eloquent
 */
class StudentRegistration extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'student_name',
        'student_nik',
        'birth_date',
        'birth_place',
        'gender',
        'address',
        'previous_school',
        'parent_name',
        'parent_phone',
        'parent_email',
        'parent_occupation',
        'desired_grade',
        'status',
        'notes',
        'submitted_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'birth_date' => 'date',
        'submitted_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include pending registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
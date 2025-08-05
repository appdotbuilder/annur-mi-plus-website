<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AcademicProgram
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $curriculum_details
 * @property string $grade_level
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereCurriculumDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereGradeLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram active()

 * 
 * @mixin \Eloquent
 */
class AcademicProgram extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'curriculum_details',
        'grade_level',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active programs.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
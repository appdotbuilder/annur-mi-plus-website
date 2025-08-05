<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\GalleryPhoto
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string $image_path
 * @property string $category
 * @property \Illuminate\Support\Carbon|null $taken_at
 * @property bool $is_featured
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto query()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereImagePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereTakenAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryPhoto featured()

 * 
 * @mixin \Eloquent
 */
class GalleryPhoto extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'image_path',
        'category',
        'taken_at',
        'is_featured',
        'sort_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'taken_at' => 'datetime',
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include featured photos.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}
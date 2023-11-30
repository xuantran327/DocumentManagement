<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DispatchType extends Model
{
    use HasFactory;
    protected $table = 'loai_hinh_cong_van';
    protected $fillable = [
        'name',
        'ten_khong_dau'
    ];
    public function document() {
        return $this->hasMany(Document::class);
    }
}

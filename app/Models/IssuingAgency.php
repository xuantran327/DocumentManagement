<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IssuingAgency extends Model
{
    use HasFactory;
    protected $table = 'co_quan_ban_hanh';
    protected $fillable = [
        'name',
        'ten_khong_dau'
    ];
    public function document() {
        return $this->hasMany(Document::class);
    }
}

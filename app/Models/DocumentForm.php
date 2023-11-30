<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentForm extends Model
{
    use HasFactory;
    protected $table = 'hinh_thuc_van_ban';
    protected $fillable = [
        'name',
        'ten_khong_dau'
    ];
    public function document() {
        return $this->hasMany(Document::class);
    }
}

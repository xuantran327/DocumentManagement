<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Document extends Model
{
    use HasFactory;
    protected $table = 'cong_van';
    protected $fillable = [
        'so_hieu',
        'ngay_lap',
        'ngay_ky',
        'ngay_hieu_luc',
        'ngay_chuyen',
        'trich_yeu_noi_dung',
        'nguoi_ky',
        'ten_tep_dinh_kem',
        'con_hieu_luc',
        'ten_khong_dau'
    ];
    public function issuing_agency() {
        return $this->belongsTo(IssuingAgency::class, 'id_co_quan_ban_hanh', 'id');
    }
    public function document_form() {
        return $this->belongsTo(DocumentForm::class, 'id_hinh_thuc_van_ban', 'id');
    }
    public function field() {
        return $this->belongsTo(Field::class, 'id_linh_vuc', 'id');
    }
    public function dispatch_type() {
        return $this->belongsTo(DispatchType::class, 'id_loai_hinh_cong_van', 'id');
    }
    public function document_type() {
        return $this->belongsTo(DocumentType::class, 'id_loai_van_ban', 'id');
    }
}

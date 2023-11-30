<?php

namespace App\Http\Controllers\mobile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Document;

class DocumentController extends Controller
{
    public function getListNew()
    {
        $document = Document::orderBy('updated_at', 'desc')->skip(0)->take(5)->get();
        return response()->json($document);
    }
    public function getList()
    {
        $document = Document::orderBy('updated_at', 'desc')->get();
        return response()->json($document);
    }
    public function getSearch($search)
    {
        $document = Document::where('so_hieu', 'LIKE', '%' . $search . '%')->orwhere('trich_yeu_noi_dung', 'LIKE', '%' . $search . '%')->orderBy('updated_at', 'desc')->get();
        return response()->json($document);
    }
    public function getDetail($id)
    {
        $document_detail = Document::find($id);
        return response()->json([
            'id' => $document_detail->id,
            'updated_at' => $document_detail->updated_at,
            'so_hieu' => $document_detail->so_hieu,
            'trich_yeu_noi_dung' => $document_detail->trich_yeu_noi_dung,
            'nguoi_ky' => $document_detail->nguoi_ky,
            'ngay_lap' => $document_detail->ngay_lap,
            'ngay_ky' => $document_detail->ngay_ky,
            'ngay_hieu_luc' => $document_detail->ngay_hieu_luc,
            'ngay_chuyen' => $document_detail->ngay_chuyen,
            'con_hieu_luc' => $document_detail->con_hieu_luc,
            'co_quan_ban_hanh' => $document_detail->issuing_agency()->first()->name,
            'hinh_thuc_van_ban' => $document_detail->document_form()->first()->name,
            'linh_vuc' => $document_detail->field()->first()->name,
            'loai_van_ban' => $document_detail->document_type()->first()->name,
            'loai_hinh_cong_van' => $document_detail->dispatch_type()->first()->name,
            'ten_tep_dinh_kem' => $document_detail->ten_tep_dinh_kem,
            'thumbnail' => $document_detail->thumbnail,
        ]);
    }
}

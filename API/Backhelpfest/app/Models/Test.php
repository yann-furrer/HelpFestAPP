<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    public $timestamp = false;


    public $fillable = [
        "id",
        "bluetooth"

    ];

    use HasFactory;
}

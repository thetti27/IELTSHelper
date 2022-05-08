<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


public function StudentProfile()
{
return $this->hasOne(Profile:class,'student_id')
}

class StudentProfile extends Model
{
    use HasFactory;
}

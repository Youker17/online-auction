<?php


namespace App\Services;

use App\Models\V1\Photo;
use App\Models\V1\Photo as V1Photo;
use Illuminate\Http\Request;

class PhotoService {



    static public function store(Request $request, $user_id) {

        $photoSize = $request->file('photo')->getSize();

        if ($photoSize > 5 * 1024 * 1024) {
           return response()->json(['error' => 'Photo exceded 5mb maximum'], 400);
        }

        $photo = $request->file('photo');

        $photoName = time().'.'.$photo->extension();

        $photo->move(public_path('images'), $photoName);

        Photo::create([
            'name' => 'profile',
            'url' => 'images/'.$photoName,
            'user_id' => auth()->user()->id
        ]);

    }




}




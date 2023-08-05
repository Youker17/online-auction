<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'name' => $this->name ?? '',
            'photo_url' => $this->photo_url ?? '',
            'isVerified' => $this->isVerified,
            'isBlocked' => $this->isBlocked,
            'created_at' => $this->created_at,

        ];
    }
}

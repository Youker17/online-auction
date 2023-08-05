<?php

namespace App\Http\Controllers;

use App\Models\V1\Bid;
use App\Http\Requests\V1\StoreBidRequest;
use App\Http\Requests\V1\UpdateBidRequest;

class BidController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBidRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Bid $bid)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBidRequest $request, Bid $bid)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bid $bid)
    {
        //
    }
}

@extends('template')
@extends('header')

@section('content')

    <div class="block">
        <p>block block block</p>
    </div>
    
    <?php 
    $titles = [
        'title 1',
        'title 2',
        'title 3'
    ] ?>
    @foreach ($titles as $title)
    <div class="block">{{$title}}</div>
    @endforeach

@endsection
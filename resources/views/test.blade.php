@extends('template')

@section('content')
    <div class="js-parent">
        
    </div>

    <form action="form.php" class="choose-location">
        <div class="select__wrapper">
            <label for="country">Select your country</label>
            <select name="country" id="" class="js-country">
                <option value="default" selected>Select country</option>
            </select>
        </div>
        <div class="select__wrapper">
            <label for="state">Select your state</label>
            <select name="state" id="" class="js-state" disabled>
                <option value="default" selected>Select state</option>
            </select>
        </div>

        <div class="select__wrapper">
            <label for="city">Select your city</label>
            <select name="city" id="" class="js-city" disabled>
                <option value="default" selected>Select city</option>
            </select>
        </div>
    </form>
    <form action="#" id="js-form">
        <input type="text" name="first">
        <input type="text" name="second">
        <input type="text" name="third"> 
    </form>
    <button type="submit" class='js-submit-data' id="add_data">Add data</button>
    {{-- <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ46202b9LO6PRyI9LY2OKrAZOIgi-hroCVmdS7aPIR7PGG2Xf-IZvrjmZJI9gUhxbWDZkdXkyQPOnq/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> --}}
    
@endsection



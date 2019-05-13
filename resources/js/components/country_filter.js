$(function() {

    function checkIfDefault(select) {
        let result;
        if(select.val() === 'default') {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    }
    
    function changeOptions(optionParent, defValue) {
        let existingOptions = $('option', optionParent);
    
        existingOptions.each(function() {
            if($(this).val()!== defValue) {
                $(this).remove();
            }
        });
    }

    function removeDisabled(element) {
        if(checkIfDefault(element)) {
            element.parent().nextAll().find('select').attr('disabled', 'disabled');
        }

        else {
            element.parent().next().find('select').removeAttr('disabled');
        }
    }

    $.ajax({
        method: 'get',
        url: 'php/country.php',
        success: function(data) {
            let countries = JSON.parse(data);
            countries.forEach(function(country) {
                let option = new Option();
                $(option).val(country.tag);
                $(option).text(country.country_name);
                $('.js-country').append(option);
            });
        }
    });

    $('.js-country').on('change', function() {
        let country_code = $(this).val();

        changeOptions('.js-state', 'default');

        removeDisabled($(this));

        if($(this).val()!=='default') {
            $.ajax({
                method: 'post',
                url: 'php/states.php',
                data: {country_code: country_code},
                success: function(data) {
                    let states = JSON.parse(data);
                    states.forEach(function(state) {
                        let option = new Option();
                        $(option).val(state.code);
                        $(option).text(state.name);
                        $('.js-state').append(option);
                    });
                }
            })
        }
    });

    $('.js-state').on('change', function() {
        let state_code = $(this).val();

        changeOptions('.js-city', 'default');

        removeDisabled($(this));

        $.ajax({
            method: 'post',
            url: 'php/cities.php',
            data: {state_code: state_code},
            success: function(data) {
                let cities = JSON.parse(data);
                cities.forEach(function(city) {
                    let option = new Option();
                    $(option).val(city.code);
                    $(option).text(city.city);
                    $('.js-city').append(option);
                });
            }
        })
    });
});

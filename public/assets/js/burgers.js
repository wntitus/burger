$(function() {
    $('.devour-burger').on('click', function(event) {
        let id = $(this).data('id');



        $.ajax('/api/burgers/' + id, {
            type: 'PUT', 
            data: {
                devoured: true
            }
        }).then(function() {
            console.log('devoured burger ' + id)
            location.reload();
        })
    })

    $('.create-burger-form').on('submit', function(event) {
        event.preventDefault();

        let newBurger = $('#burgN').val().trim();

        $.ajax('/api/burgers/', {
            type: 'POST',
            data: {
                name: newBurger
            }
        }).then(function() {
            location.reload();
        })
    })
})
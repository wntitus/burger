// waiting for document to be fully loaded before we attach our click handlers
$(function() {
    // when the DEVOUR button is clicked next to a burger, we capture the specific ID of that burger and use the PUT method we created a route for in our controller that updates the devoured status for that specific burger only, and then the page is reloaded so handlebars can dynamically update our HTML
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

    // when the burger creation form is submitted, we take the user's input and store it in a variable, which is then passed through the POST route established in the burger controller and a new database entry is created and the page is reloaded for handlebars to update our HTML
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
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
})
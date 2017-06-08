$(document).ready(function() {
    var box = $('.box')
    var reset = $('#reset')
    var selectedColor = 'white'
    var red = $('#red')
    var green = $('#green')
    var blue = $('#blue')
    var yellow = $('#yellow')
    var white = $('#white')

    box.on('click', function() {
        $(this).addClass(selectedColor)
    })
    
    box.on('dblclick', function() {
        $(this).removeClass(selectedColor)
    })

    reset.on('click', function() {
        box.removeClass('red')
        box.removeClass('green')
        box.removeClass('blue')
        box.removeClass('yellow')
        box.removeClass('white')
    })

    red.on('click', function() {
        selectedColor = 'red'
    })
    green.on('click', function() {
        selectedColor = 'green'
    })
    blue.on('click', function() {
        selectedColor = 'blue'
    })
    yellow.on('click', function() {
        selectedColor = 'yellow'
    })
    white.on('click', function() {
        selectedColor = 'white'
    })
})
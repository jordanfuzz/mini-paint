$(document).ready(function() {
    var box = $('.box')
    var reset = $('#reset')
    var selectedColor = 'white'
    var red = $('#red')
    var green = $('#green')
    var blue = $('#blue')
    var yellow = $('#yellow')
    var white = $('#white')

    var drag = false

    box.on('mousedown',function() {
        drag = true
    })
    box.on('mouseover',function() {
        if(drag) {
            $(this).removeClass()
            $(this).addClass(selectedColor)
        }
    })
    box.on('mouseup',function() {
        drag = false
    })

    box.on('dblclick', function() {
        $(this).removeClass(selectedColor)
    })

    reset.on('click', function() {
        box.removeClass()

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
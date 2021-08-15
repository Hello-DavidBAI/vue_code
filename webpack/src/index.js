import $ from 'jquery'
import './css/index.css'

$(function() {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', 'pink')

})

class Person {
    static info = 'person info'
}
console.log(Person.info)
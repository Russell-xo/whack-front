import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


$(document).ready(function(){
    $('.menu').click(function(e) {
        e.stopPropagation()
        $('#main_nav').toggleClass('active')
    })
})
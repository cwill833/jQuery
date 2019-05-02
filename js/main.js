$(function(){
    $('#button').on('click', (evt)=>{
        let $inputV =  $('#skills').val();
        let format = 
        `<tr>
        <td><button id='box'>x</button>
        <td id='c'>${$inputV}</td>
        </tr>`
        console.log(format);
        $('tbody').append(format);
        $('#skills').val(' ');
    })
});
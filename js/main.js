$(function(){
    $('#button').on('click', ()=>{
        let $inputV =  $('#skills').val();
        let format = 
        `<tr>
            <td>${$inputV}<button id='box'>x</button></td>
        </tr>`
        $('tbody').append(format);
        $('#skills').val(' ');
    })

    $('table tbody').on('click', 'button', (evt)=>{
        console.log(evt.target)
        $(evt.target).closest('td').remove()
    })
});
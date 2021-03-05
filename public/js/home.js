$('#rangePwd').on('change', () => {
    $('#currentRange').text($('#rangePwd').val())
})

$('#formFire').submit(async function (e) {
    e.preventDefault();
    //    const { pwdLen, wAlp, wNum, wSpec } = req.body;
    data_req = {
        'pwdLen': $('#rangePwd').val(),
        'wAlp': Number($('#alphaChar').is(':checked')),
        'wNum': Number($('#numChar').is(':checked')),
        'wSpec': Number($('#specialChar').is(':checked'))
    }
    $.ajax(
        {
            url: '/password',
            type: 'post',
            accepts: 'application/json',
            data: data_req,
            success: (response) => {
                $('#pwdResult').val(response['pwd'])
            }
        }
    )
   
})
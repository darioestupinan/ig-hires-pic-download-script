function findNumber(code, phoneNumber, country) {

    phoneNumber = phoneNumber.replace(/[^\/\d]/g, '');
    $.ajax({
        url: 'https://www.zlookup.com/ajax/phone_lookup',
        method: "POST",
        data: { dialNumber: phoneNumber, dialCode: code, country: country },
        success: function (data) {
            console.log(data);
            if (data == 'found')
                //console.log(JSON.stringify(data));
                return data;
            else
                console.log('fail');
        }
    });
}
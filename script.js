$(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
});

var formElement=document.forms.INFO;
formElement.onsubmit=validateInfoForm;

function validateInfoForm() {
    var mailElement=formElement.elements.MAIL;
    var mailValue=mailElement.value;   

    if ( mailValue.length>30 ) {
        alert('Please enter email no longer than 30 symbols!');
        mailElement.focus();
        return false;
    }

    return true;
}

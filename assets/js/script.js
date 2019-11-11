// ======================================================
// This Template Is : 
// Created By  : Rendi Bayu Setiawan
// Facebook	: https://facebook.com/aikarey1
// Github		: https://github.com/aikarey
// ======================================================



// Login Form Placeholder
// floating labels
$('.login-form .form-control').on('focus', function(){
	// on input form focus
	// when the input form is focus
	// 1. Add class active for elemen with class placeholder
	// for uername input
	if ( $(this).data('target') == 'username')
	{
		$('#username').addClass('active');
	}else
	{
	// for password input
	$('#password').addClass('active');
	}

});

$('.login-form .form-control').on('blur', function(){
	// on input form blur
	// when the input form has blured ( user is'nt focus with the form )
	// 1. remove the active class from elemen with class placeholder
	$('.placeholder').removeClass('active');
});
// end of floating labels

// if the content of input form is changed
// 1. change the placeholder text into a value of the input

function changePlaceHolder( input )
{

$('[data-target=' + input + ']').on('change', function(){


$(this).on('focus', function(){
	var text = input == 'username' ? 'Username' : 'Password';
	$('.placeholder#' + input ).text(text);

});

$(this).on('blur', function()
{
$('.placeholder#'+ input).text( '' );
$(this).css('color', '#6c757d');
if( $(this).val() == '')
{
	var text = input == 'username' ? 'Username' : 'Password';
	$('.placeholder#' + input ).text(text);
}
});
});
}

// change placeholder for username
changePlaceHolder( 'username' );
// change placeholder for password
changePlaceHolder( 'password');

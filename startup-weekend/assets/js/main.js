$('.cd-form .cd-email').keyup(function(event){
	var emailInput = $(this),
		insertedEmail = emailInput.val(),
		atPosition = insertedEmail.indexOf("@");
    	dotPosition = insertedEmail.lastIndexOf(".");
    //check if user has inserted a "@" and a dot
    if (atPosition< 1 || dotPosition<atPosition+2 ) {
    	//if he hasn't..
    	//hide the submit button
    	$('.cd-form').removeClass('is-active').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    } else {
    	//if he has..
    	//show the submit button
    	$('.cd-form').addClass('is-active');
    }
});

$('.button').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
    
});
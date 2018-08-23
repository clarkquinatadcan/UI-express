function globalScripts() {
	console.log('hello world')
}

function accordions() {
	$('.accFaq-item-header').on('click', function() {
		var header = $(this);
		var headerStatus =  header.attr('data-open');
		var content = header.next();
		var subAcc = content.find('.accFaq');
		// if open pa 
		// nya naay accordion
		// i hide nako
		if(headerStatus == 'open') {
			if(subAcc.length > 0 ) {
				subAcc.find('.accFaq-item-header').each(function(){
					$(this).attr('data-open','hide');
				})
			}
		}

		console.log(headerStatus);
		header.attr('data-open', headerStatus == 'hide' ? 'open' : 'hide');
	});

	$('#openAccordions').on('click',function(){
		$('.accFaq-item-header').attr('data-open', 'open');
		$(this).addClass('hideAcc');
		$('#closeAccordions').removeClass('hideAcc');
	});

	$('#closeAccordions').on('click',function(){
		$('.accFaq-item-header').attr('data-open', 'hide');
		$(this).addClass('hideAcc');
		$('#openAccordions').removeClass('hideAcc');
	});
}

function homeScripts() {
}

function faqScripts() {
	accordions();
}

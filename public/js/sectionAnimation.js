function animateSection() {
	$('.anim').on('inview', function(event, isInView) {
		var element = $(this) ,
			chainAnimation = element.attr("data-chain-animate"),
			animEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			animation = ' animated '+ element.attr("data-anim");
		if(!element.hasClass('animDone')) {
			if(chainAnimation && chainAnimation == 'true') {
				var delay_increment = element.attr("data-chain-delay-increment");
				var delay = element.attr("data-delay");
				var duration = element.attr("data-duration");

				element.removeClass('anim');
				element.addClass('animDone');

				element.children('*').each(function(){
					delay = Number(delay) + Number(delay_increment);
					var animControl = {
						animationDuration : duration+'ms',
						animationDelay : delay+'ms'
					};

					if(!$(this).hasClass(animation)){
						$(this).css(animControl);
						$(this).addClass(animation).one(animEnd,function(){
							$(this).removeClass(animation);
							$(this).addClass('animDone');
						});
					}
				})
			} else {
				var delay = element.attr("data-delay");
				var duration = element.attr("data-duration");

				var animControl = {
					animationDuration : duration+'ms',
					animationDelay : delay+'ms'
				};

				

				if(!element.hasClass(animation)){
					element.css(animControl);
					element.addClass(animation).one(animEnd,function(){
						element.removeClass(animation);
						element.addClass('animDone');
					});
				}
			}
		}
	});
}
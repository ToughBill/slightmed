(function() {
	$('#plist li').hover(function(e){
		var srcElem = e.target ? e.target : e.srcElement;
		var $subitem = $(srcElem).find('.sub');
		if($subitem.length > 0){
			$subitem.css('left', $(srcElem).css('width'));
		}
	});
})();
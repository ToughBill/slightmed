(function() {
	$('#adminDiv a').click(function(e){
		var srcEle = e.srcElement ? e.srcElement : e.target;
		var data_m = srcEle.dataset.m;
		var data_c = srcEle.dataset.c;
		if(data_m !== undefined){
			$.ajax({
				data: {m: data_m, c: data_c},
				type: "post",
				url: "/admin/admin",
				success: ajaxSuccess,
				error: ajaxError
			});
		}
		
	});
})();

function ajaxSuccess(data){
	console.log(data);
	$('#detail').html(data);
}
function ajaxError(data){
	console.log(data);
}
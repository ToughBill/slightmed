(function() {
	$('#adminDiv a').click(function(e){
		var srcEle = e.srcElement ? e.srcElement : e.target;
		var data_info = srcEle.dataset.info;
		$.ajax({
			data: {info: data_info},
			type: "post",
			url: "/admin/admin",
			success: ajaxSuccess,
			error: ajaxError
		});
	});
})();

function ajaxSuccess(data){
	console.log(data);
	$('#detail').html(data);
}
function ajaxError(data){
	console.log(data);
}
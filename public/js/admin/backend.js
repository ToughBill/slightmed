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
	var resp = $.parseJSON(data);
	var ac = parseAction(resp.ac);
	if(ac.m == "1"){
		
	}
	else if(ac.m == "2"){
		Product.handleProductAction(ac, resp);
	}
	//$('#detail').html(data);
}
function ajaxError(data){
	console.log(data);
}

function parseAction(ac){
	var arr = ac.split(",");
	var ret = {};
	arr.forEach(function(ele, i){
		ret[ele.substring(0,1)] = ele.substring(1);
	});
	
	return ret;
}
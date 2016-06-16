var Product = (function(){
	var ac
	function handleProductAction(ac, param){
		if(ac.c == "1"){
			categoryManagement(ac, param);
		}
	}
	function categoryManagement(ac, param){
		$('#detail').html(param.temp);
		var columns = [{id: "id", name: "Id", field: "id", minWidth:30, width: 50},
		               {id: "cate", name: "Catetory", field: "category", width: 300, editable:true, editor:Slick.Editors.Text},
		               {id: "cateCode", name: "Catetory Code", field: "code", width: 100, editable:true, editor:Slick.Editors.Text}];
		var data = param.data.ptCate;
		data.push({id:"",category:""});
		$('#detail #ptCon').slickgrid({
		    columns: columns,
		    data: data,
		    slickGridOptions: {
		      enableCellNavigation: true,
		      enableColumnReorder: false,
		      forceFitColumns: true,
		      rowHeight: 35,
			  editable: true
		    }
		  });
		$('#detail #submit').click(handleSubmitClick);
	}
	
	function handleSubmitClick(e){
		var grid = $("#ptCon").data("slickgrid");
		grid.wrapperOptions.data.splice(grid.wrapperOptions.data.length - 1, 1);
		$.ajax({
			data: {ac:"1", data:JSON.stringify(grid.wrapperOptions.data)},
			type: "post",
			url: "/admin/category",
			success: ajaxSuccess,
			error: ajaxError
		});
	}
	
	return {
		handleProductAction: handleProductAction
	}
})();
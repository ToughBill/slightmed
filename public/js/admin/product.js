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
		               {id: "cate", name: "Catetory", field: "category", width: 300, editable:true, editor:Slick.Editors.TextEx},
		               {id: "cateCode", name: "Catetory Code", field: "code", width: 100, editable:true, editor:Slick.Editors.TextEx}];
		var data = param.data.ptCate;
		//data.push({id:"",category:""});
		$('#detail #ptCon').slickgrid({
		    columns: columns,
		    data: data,
		    slickGridOptions: {
		      enableCellNavigation: true,
		      enableColumnReorder: false,
		      forceFitColumns: false,
		      rowHeight: 35,
			  editable: true,
				multiSelect: true
		    }
		  });
		$('#detail #submit').click(handleSubmitClick);
		$('#detail #btAdd').click(handleAddClick);
		$('#detail #btDelete').click(handleADeleteClick);
	}
	
	function handleSubmitClick(e){
		var grid = $("#ptCon").data("slickgrid");
		//grid.wrapperOptions.data.splice(grid.wrapperOptions.data.length - 1, 1);
		var newData = grid.wrapperOptions.data;
		if(!newData[newData.length - 1].category || !newData[newData.length - 1].code){
			alert('the value of last line is none!');
			return;
		}
		$.ajax({
			data: {ac:"1", data:JSON.stringify(grid.wrapperOptions.data)},
			type: "post",
			url: "/admin/category",
			success: ajaxSuccess,
			error: ajaxError
		});
	}

	function handleAddClick(e) {
		var grid = $("#ptCon").data("slickgrid");
		grid.wrapperOptions.data.push({id:"",category:""});
		grid.underlyingGridObj.updateRowCount();
		grid.underlyingGridObj.render();
	}

	function handleADeleteClick(e) {

	}
	
	return {
		handleProductAction: handleProductAction
	}
})();
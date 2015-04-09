var date = new Date();

var init = function(){
	var mon_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		mon_array[date.getUTCMonth()];

	get_10pics();
}

var get_10pics = function() {
	var _url = 'https://api.data.gov/nasa/planetary/apod?date='+ date.getUTCFullYear() +'-'+ date.getUTCMonth() +'-'+ date.getUTCDate() +'&concept_tags=True&api_key=DEMO_KEY';
	$.ajax({
	    type : "Get",
	    url : _url,
	    dataType : "jsonp",
    	contentType: "application/json; charset=utf-8",
	    jsonp : 'jsonp',
	    async : false,
	    success : function(data){
	        console.log(data);},
	    error : function(httpReq,status,exception){
	        console.log(status+" "+exception);
	    }
	});
}

init();
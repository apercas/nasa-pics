var date = new Date();

var init = function(){
	var mon_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		mon_array[date.getUTCMonth()];

	get_10pics();
}

var get_10pics = function() {
	var _url = 'https://api.data.gov/nasa/planetary/apod?date=2015-04-10&concept_tags=True&api_key=qfZlUQz6uJMKuQxDAQiuSC5G4XZrMq7RaJpC8nH6';
	console.log('https://jsonp.afeld.me/?url=' + encodeURIComponent(_url))
	$.ajax({
	    type : "GET",
	    url : 'https://jsonp.afeld.me/?url=' + encodeURIComponent(_url),
        dataType: "jsonp",
        crossDomain: true,
        jsonpCallback: 'MyJSONPCallback',
        mimetype: "application/text",
    	contentType: "application/text; charset=utf-8",
	    async : false,
	    success : function(data){
	        console.log(data);},
	    error : function(httpReq,status,exception){
	        console.log(status+" "+exception);
	    }
	});
}

init();
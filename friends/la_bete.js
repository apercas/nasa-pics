var date = new Date();
var sect  = $('section');

var init = function(){
	get_10pics(sect);
}

var get_10pics = function() {
	var _url = 'https://api.data.gov/nasa/planetary/apod?date=' + date.getUTCFullYear() + '-' + date.getUTCMonth() + '-' + (date.getUTCDate()) +'&concept_tags=True&api_key=qfZlUQz6uJMKuQxDAQiuSC5G4XZrMq7RaJpC8nH6';
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
	    	if (!!data.url)
	        	print_picture(data);
	        else
	        	console.log('getting yesterday')//get_10pics();
	    },
	    error : function(httpReq,status,exception){
	        console.log(status+" "+exception);
	    }
	});
}

var print_picture = function(data) {
	sect.find('img').attr('src',data.url);
	sect.find('p').append(data.explanation);
	sect.find('time').attr('datetime', date).html(date.toLocaleString(0,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
}

init();
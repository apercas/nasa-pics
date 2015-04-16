var date = new Date();
var sect = $('section');
var diff = 0;

var init = function(){
	get_pic(sect);
}

var get_pic = function() {
	sect.find('img').fadeOut(function(){$('.loader').fadeToggle('slow')});
	var my_date = {
		'year' : date.getUTCFullYear(),
		'month' : date.getUTCMonth(),
		'day' : date.getUTCDate() - ~~diff
	}

	if (my_date.day === 0){
		my_date.day = 31;
		my_date.month = my_date.month-1; 
	}
	if (my_date.month - 1 === 0){
		my_date.month = 12;
		my_date.year = my_date.year-1; 
	}

	var _url = 'https://api.data.gov/nasa/planetary/apod?date=' + my_date.year + '-' + my_date.month + '-' + my_date.day +'&concept_tags=True&api_key=qfZlUQz6uJMKuQxDAQiuSC5G4XZrMq7RaJpC8nH6';
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
	        else{
	        	diff = diff+1;
	        	get_pic();
	        }
	    },
	    error : function(httpReq,status,exception){
	        console.log(status+" "+exception);
	    }
	});
}

var print_picture = function(data) {
	sect.find('img').attr('src',data.url).fadeIn(function(){$('.loader').fadeToggle('slow')});
	sect.find('h4').html(data.title);
	sect.find('time').attr('datetime', date).html(date.toLocaleString(0,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
}

$('navigation').on('click',function(){
	diff = diff+1;
	get_pic()
})

init();
$(function () {
        
		$(".demo2").bootstrapNews({
            newsPerPage: 4,
            autoplay: false,
			pauseOnHover: true,
			navigation: true,
            direction: 'up',
            newsTickerInterval: 2500,
            onToDo: function () {
                //console.log(this);
            }
        });

    });
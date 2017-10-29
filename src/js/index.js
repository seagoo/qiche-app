require.config({
 paths:{
       
       "jquery":"../../base/jquery-1.7.2.min"

 }


})


require(["jquery"], function ($) {
	function main(){
        var a = $('.div1')
        console.log(a)


	}

	main();
    

});
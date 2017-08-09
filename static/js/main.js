require.config({
	paths:{
		'jquery':'lib/jquery-1.9.0.min' , 
		'common':'script/common', 
	},
	shim:{
		'common':['jquery'],
	}
});
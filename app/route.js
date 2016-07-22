


app.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl: 'app/modules/home/home.html',
		controller: 'homeCtrl'
	})
	.otherwise({ redirectTo: '/home' })
	
}])
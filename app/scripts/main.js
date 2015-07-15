var app=angular.module('sac',['ui.bootstrap','ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            views: {
                navigation: {
                    templateUrl: 'headerPartial.html',
                    controller: 'HeaderController as HeaderCtrl'
                },
                page:{
                    templateUrl: 'partials/dashboardPartial.html',
                    controller: 'DashboardController as DashboardCtrl'
                },
                footer:{
                    templateUrl: 'footerPartial.html',
                    controller: 'FooterController as FooterCtrl'
                }
            }
        })
        .state('itemView', {
            url: '/itemView',
            views: {
                navigation: {
                    templateUrl: 'headerPartial.html',
                    controller: 'HeaderController as HeaderCtrl'
                },
                page:{
                    templateUrl: 'partials/itemViewPartial.html',
                    controller: 'ItemViewController as ItemViewCtrl'
                },
                footer:{
                    templateUrl: 'footerPartial.html',
                    controller: 'FooterController as FooterCtrl'
                }
            }
        })

}]);
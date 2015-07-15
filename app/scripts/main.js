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
        .state('department', {
            url: '/:department',
            views: {
                navigation: {
                    templateUrl: 'headerPartial.html',
                    controller: 'HeaderController as HeaderCtrl'
                },
                page:{
                    templateUrl: 'partials/departmentPartial.html',
                    controller: 'DepartmentController as DepartmentCtrl'
                },
                footer:{
                    templateUrl: 'footerPartial.html',
                    controller: 'FooterController as FooterCtrl'
                }
            }
        })
        .state('item', {
            url: '/:department/:item',
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
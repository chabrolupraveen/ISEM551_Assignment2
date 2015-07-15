/**
 * Created by pchabrolu on 7/14/2015.
 */
app.controller('SACController',['$scope',function($scope){

    $scope.departments = [
        {
            id:"electronics",
            name:"Electronics",
            items:[
                {
                    id:"carCharger",
                    imageUrl:"images/electronics/carCharger.jpg",
                    description:"All Purpose Car Charger",
                    name:"Car Charger"
                },
                {
                    id:"",
                    imageUrl:"",
                    description:"",
                    name:""
                },
                {
                    id:"",
                    imageUrl:"",
                    description:"",
                    name:""
                },
                {
                    id:"",
                    imageUrl:"",
                    description:"",
                    name:""
                }
            ]
        }

    ]

}]);

app.controller('HeaderController',['$scope',function($scope){

}]);

app.controller('FooterController',['$scope',function($scope){

}]);

app.controller('DashboardController',['$scope',function($scope){
    $scope.myInterval = 5000;
    $scope.slides = [
        {
            image: 'images/electronics.jpg',
            heading:'Shop Electronics',
            text: 'Shop your needed electronics from our E-SAC website'
        },
        {
            image: 'images/homeappliances.jpg',
            heading:'Shop Home Appliances',
            text: 'Shop your needed electronics from our E-SAC website'
        },
        {
            image: 'images/homedecorations.jpg',
            heading:'Shop Decoration Items',
            text: 'Shop your needed electronics from our E-SAC website'
        },
        {
            image: 'images/jewelry.jpg',
            heading:'Shop Jewelry',
            text: 'Shop your needed electronics from our E-SAC website'
        },
        {
            image: 'images/shoes.jpg',
            heading:'Shop Essentials',
            text: 'Shop your needed electronics from our E-SAC website'
        }
    ];


}]);

app.controller('ItemViewController',['$scope',function($scope){

}]);
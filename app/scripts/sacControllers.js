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
                    name:"Car Charger",
                    price:15.65
                },
                {
                    id:"headphones",
                    imageUrl:"images/electronics/headphones.jpg",
                    description:"Belkin and wilkins P5 high tech Headphones",
                    name:"Belkin and Wilkins Headphones",
                    price:169.59
                },
                {
                    id:"memoryCard",
                    imageUrl:"images/electronics/memoryCard.jpg",
                    description:"Sony MemoryCard 64GB",
                    name:"Sony MemoryCard",
                    price:35.65
                },
                {
                    id:"monocular",
                    imageUrl:"images/electronics/monocular.jpg",
                    description:"Monocular",
                    name:"Monocular",
                    price:98.56
                },
                {
                    id:"projector",
                    imageUrl:"images/electronics/projector.jpg",
                    description:"Opton Projector",
                    name:"Opton Projector",
                    price:239.65
                },
                {
                    id:"speakers",
                    imageUrl:"images/electronics/speakers.jpg",
                    description:"Blutooth Speakers with iphone connectivity",
                    name:"Speakers",
                    price:129.95
                },
                {
                    id:"surgeProtector",
                    imageUrl:"images/electronics/surgeProtector.jpg",
                    description:"Surge Protector with 3 port AC connectors and 2 USB connectors",
                    name:"Surge Protector",
                    price:42.63
                }
            ]
        },
        {
            id: "entertainment",
            name: "Entertainment",
            items: [
                {
                    id: "Projector",
                    imageUrl: "images/entertainment/projector.jpg",
                    description:"Opton Projector",
                    name:"Opton Projector",
                    price:239.65
                },
                {
                    id: "speakers",
                    imageUrl: "images/entertainment/speakers.jpg",
                    description:"Blutooth Speakers with iphone connectivity",
                    name:"Speakers",
                    price:129.95
                },
                {
                    id: "tvSamsung55",
                    imageUrl: "images/entertainment/tvSamsung55.jpg",
                    description:"Samsung TV 55' 4k 60Hz HDTV",
                    name:"Samsung TV 55'",
                    price:999.23
                },
                {
                    id: "tvSamsung60",
                    imageUrl: "images/entertainment/tvSamsung60.jpg",
                    description:"Samsung TV 60' 4k 120Hz HDTV",
                    name:"Samsung TV 60'",
                    price:1298.99
                },
                {
                    id: "tvVizio70",
                    imageUrl: "images/entertainment/tvVizio70.jpg",
                    description:"Blutooth Speakers with iphone connectivity",
                    name:"Vizio TV 70' Smart HDTV",
                    price:1325.65
                }
            ]
        },
        {
            id: "games",
            name: "Sports & Games",
            items: [
                {
                    id: "badmintonKit",
                    imageUrl: "images/games/badmintonKit.jpg",
                    description:"Badminton Kit",
                    name:"Badminton Kit",
                    price:123.56
                },
                {
                    id: "basketBall",
                    imageUrl: "images/games/basketBall.jpg",
                    description:"Basket Ball",
                    name:"Basket Ball",
                    price:12.65
                },
                {
                    id: "nflFootball",
                    imageUrl: "images/games/nflFootball.jpg",
                    description:"NFL Football",
                    name:"NFL Football",
                    price:98.23
                },
                {
                    id: "soccerBall",
                    imageUrl: "images/games/soccerBall.jpg",
                    description:"Soccer Ball",
                    name:"Soccer Ball",
                    price:89.99
                },
                {
                    id: "teeBall",
                    imageUrl: "images/games/teeBall.jpg",
                    description:"Tee Ball",
                    name:"Tee Ball",
                    price:23.48
                },
                {
                    id: "tennisRacket",
                    imageUrl: "images/games/tennisRacket.jpg",
                    description:"Tennis Racket Willson",
                    name:"Tennis Racket",
                    price:132.65
                }
            ]
        }
    ]
}]);

app.controller('HeaderController',['$scope',function($scope){}]);
app.controller('FooterController',['$scope',function($scope){}]);

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
            text: 'Shop your Home needs from our E-SAC website'
        },
        {
            image: 'images/homedecorations.jpg',
            heading:'Shop Decoration Items',
            text: 'Shop Decoration Items from our E-SAC website'
        },
        {
            image: 'images/jewelry.jpg',
            heading:'Shop Jewelry',
            text: 'Shop Jewelry from our E-SAC website'
        },
        {
            image: 'images/shoes.jpg',
            heading:'Shop Essentials',
            text: 'Shop your daily essentials from our E-SAC website'
        }
    ];


}]);

app.controller('DepartmentController',['$scope','$stateParams',function($scope,$stateParams){
    if($stateParams.department){
        angular.forEach($scope.departments,function(department){
            if(department.id === $stateParams.department){
                $scope.department = department;
            }
        });
    }

}]);

app.controller('ItemViewController',['$scope','$stateParams',function($scope,$stateParams){
    if($stateParams.department){
        angular.forEach($scope.departments,function(department){
            if(department.id === $stateParams.department){
                //$scope.department = department;
                angular.forEach(department.items,function(item){
                    if(item.id === $stateParams.item){
                        $scope.item = item;
                    }
                });
            }
        });
    }
}]);
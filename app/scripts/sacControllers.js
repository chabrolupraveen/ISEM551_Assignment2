/**
 * Created by pchabrolu on 7/14/2015.
 */
app.controller('SACController',['$scope',function($scope){

}]);

app.controller('HeaderController',['$scope',function($scope){

}]);

app.controller('FooterController',['$scope',function($scope){

}]);

app.controller('DashboardController',['$scope',function($scope){
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }

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
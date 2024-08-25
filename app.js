var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];
    $scope.selectedOptions = [];

    $scope.submitData = function() {
        try {
            var jsonData = JSON.parse($scope.jsonInput);
            $scope.errorMessage = null;
            $http.post('https://bfhl21bce8624-backend-5f0667d2ba5d.herokuapp.com/bfhl', jsonData)
                .then(function(response) {
                    $scope.responseData = response.data;
                    // Reset selected options after submission
                    $scope.selectedOptions = [];
                }, function(error) {
                    $scope.errorMessage = 'Error fetching data from backend.';
                });
        } catch (e) {
            $scope.errorMessage = 'Invalid JSON format.';
        }
    };

    $scope.renderResponse = function() {
        $scope.showAlphabets = $scope.selectedOptions.includes('Alphabets');
        $scope.showNumbers = $scope.selectedOptions.includes('Numbers');
        $scope.showHighestLowercaseAlphabet = $scope.selectedOptions.includes('Highest lowercase alphabet');
    };
}]);

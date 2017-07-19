angular.module("exemplo3").directive("fpfNavbar", fpfNavbar);

function fpfNavbar() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/fpfNavBar/fpfNavbar.html'
    }
}
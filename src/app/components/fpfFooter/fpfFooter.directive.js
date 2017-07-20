angular.module("exemplo3").directive("fpfFooter", fpfFooter);

function fpfFooter() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/fpfFooter/fpfFooter.html'
    }
}
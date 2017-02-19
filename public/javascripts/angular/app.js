(function () {
    angular.module('metodos', [], function($interpolateProvider){
    	$interpolateProvider.startSymbol('[[');
    	$interpolateProvider.endSymbol(']]');
    });
})();
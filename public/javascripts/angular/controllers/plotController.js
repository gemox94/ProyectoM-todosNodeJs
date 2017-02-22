(function() {

  function draw(equation, range) {
    try {
      functionPlot({
        target: '#plot',
        data: [{
          fn: equation,
          range: range == null ? [-5,5] : range,
          xAxis: range == null ? [-5,5] : range,
          yAxis: range == null ? [-5,5] : range,
          sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
          graphType: 'polyline'
        }]
      });
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  }

  angular.module('metodos')
    .controller('plotController', plotController);


  function plotController($scope, $location, plotService){
    $scope.plot = {};

    console.log($location.absUrl());

    if (!plotService.empty()) {
      $scope.plot = plotService.get();
      var range = [$scope.plot.initRange, $scope.plot.endRange];
      draw($scope.plot.equation, range);
      //plotService.remove();
    }else{
      console.log(plotService.get());
      console.log('Que mamadas!');
    }


    $scope.plot = function(){
      if($scope.plot.initRange == undefined || $scope.plot.endRange == undefined){
        var range = null;
      }else{
        var range = [$scope.plot.initRange, $scope.plot.endRange];
      }
      draw($scope.plot.equation, range);
    }

  }

})();

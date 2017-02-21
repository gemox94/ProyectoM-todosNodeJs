(function() {

  angular.module('metodos')
    .controller('steffensenController', steffensenController);

  function steffensenController($scope){


    $scope.calculate = function() {
      var formula = $scope.formule;
      var scope = {x: $scope.initialX};

      var func = math.parse(formula,scope);
      var funcCompiled = func.compile();

      var i = 0;

      var p0 = 0;
      var p1 = 0;
      var p2 = 0;

      $scope.results = [];

      do{
        p0 = scope.x;
        p1 = funcCompiled.eval(scope);
        scope.x = p1;

        p2 = funcCompiled.eval(scope);

        scope.x = scope.x - math.divide(math.square((p1 - scope.x)),(p2-(2*p1)+scope.x));

        $scope.results.push({
          p0: p0,
          p1: p1,
          p2: p2,
          p: scope.x
        });


        i++;
      }while(i<=Number($scope.maxIter) && scope.x -p0 >= math.eval($scope.tolerancia));

      console.log($scope.results);
    }

    $scope.clear_results = function(){
      $scope.results = [];
    }

  }

})();

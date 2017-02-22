(function(){

  angular.module('metodos')
    .factory('plotService', function(){
      var myPlot = undefined;
      var plot = {};
      plot.add = function(plot){
        myPlot = plot;
      }

      plot.remove = function(){
        myPlot = undefined;
      }

      plot.get = function(){
        return myPlot;
      }

      plot.empty = function(){
        return angular.equals(myPlot,undefined);
      }

      return plot;
    });

})();

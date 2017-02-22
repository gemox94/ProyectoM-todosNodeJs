(function(){

  angular.module('metodos')
    .factory('plotService', function(){
      var myPlot = undefined;
      var plot = {};
      plot.add = function(plot){
        myPlot = plot;
      }

      plot.remove = function(){
        myPlot = {};
      }

      plot.get = function(){
        return myPlot;
      }

      plot.empty = function(){
        return angular.equals(plotService.myPlot,{});
      }

      return plot;
    });

})();

(function(){
    angular.module('metodos')
        .controller('newtonPolinomioController', newtonPolinomioController);

    function newtonPolinomioController($scope) {
        $scope.calculate = function () {
            var coef1 = $scope.formule.match(/[0-9-.]+/g);
            var coef2 = [];
            var a = Number($scope.a);

            var result1 = [];
            var result2 = [];
            $scope.results = [];

            var i = 0;
            var j;
            var resulted_num = 0;
            do{
                for(j=0; j<coef1.length; j++){

                    if(j == 0){
                        result1.push(Number(coef1[j]));
                        coef2.push(Number(coef1[j]));
                    }else{
                        resulted_num = (Number(result1[j-1])*Number(a))+Number(coef1[j]);
                        result1.push(resulted_num);
                        if(j < (coef1.length-1)) {
                          coef2.push(resulted_num);
                        }
                    }
                }
                resulted_num = 0;
                for(j=0; j<coef2.length; j++){
                    if (j == 0){
                        result2.push(Number(coef2[j]));
                    }else{
                        resulted_num = (Number(result2[j-1])*Number(a))+Number(coef2[j]);
                        result2.push(resulted_num);
                    }
                }
                a = Number(a) - (Number(result1[result1.length-1])/Number(result2[result2.length-1]));
                $scope.results.push({
                    coef1   : coef1.toString(),
                    coef2   : coef2.toString(),
                    res1    : result1.toString(),
                    res2    : result2.toString(),
                    a       : a
                });
                coef2 = [];
                result1 = [];
                result2 = [];
                i++;
            }while(i<=Number($scope.maxIter) && math.abs(a) < math.eval($scope.tolerancia));
        };
    }
})();

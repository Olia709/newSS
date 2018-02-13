var app = angular.module("app", []);
app.controller('myCtrl', function () {
    var vm = this;
    vm.newstyle = [
        {
            header: "header1"
            , aside: "aside1"
            , main: "main1"
        }
        , {
            header: "header2"
            , aside: "aside2"
            , main: "main2"
        }
        , {
            header: "header3"
            , aside: "aside3"
            , main: "main3"
        }

    ];
    vm.clickStyle1 = function () {
        vm.bestStyle = vm.newstyle[0];
    };
    vm.clickStyle2 = function () {
        vm.bestStyle = vm.newstyle[1];
    };
    vm.clickStyle3 = function () {
        vm.bestStyle = vm.newstyle[2];
    }
})
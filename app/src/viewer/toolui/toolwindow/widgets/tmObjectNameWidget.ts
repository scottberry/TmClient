angular.module('tmaps.ui')
.directive('tmObjectNameWidget', () => {
    var template = 
        '<label>Object type: </label>' +
        '<select ng-model="objectNameWidget.selectedName">' +
          '<option value="{{::t}}" ng-repeat="t in objectNameWidget.mapObjectNames">' +
          '{{::t}}' +
          '</option>' +
        '</select>';
    return {
        restrict: 'E',
        template: template,
        controller: 'ObjectNameWidgetCtrl',
        controllerAs: 'objectNameWidget'
    };
});

class ObjectNameWidgetCtrl {

    static $inject = ['$scope'];

    mapObjectNames: string[] = [];
    selectedName: string;

    constructor($scope: any) {

        this.selectedName = $scope.viewer.experiment.mapObjectNames[0];
        this.mapObjectNames = $scope.$parent.viewer.experiment.mapObjectNames;
    }
}

angular.module('tmaps.ui').
controller('ObjectNameWidgetCtrl', ObjectNameWidgetCtrl);
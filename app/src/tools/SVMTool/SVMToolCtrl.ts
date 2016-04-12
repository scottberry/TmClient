interface SVMScope extends ToolWindowContentScope {
    svm: SVMToolCtrl;
    featureWidget: FeatureSelectionWidgetCtrl;
    objectNameWidget: ObjectNameWidgetCtrl;
    classSelectionWidget: ClassSelectionWidgetCtrl;
}

class SVMToolCtrl extends ToolCtrl {
    static $inject = ['$scope', 'viewer'];

    kernelOptions = ['rbf', 'linear'];
    kernel = 'rbf';

    constructor(public $scope: SVMScope,
                public viewer: AppInstance) {
        super();
    }

    doClassify() {
        // Build the request object
        var selectedFeatures = this.$scope.featureWidget.selectedFeatures;

        var trainingClasses = [];
        this.$scope.classSelectionWidget.classes.forEach((cls) => {
            trainingClasses.push({
                name: cls.name,
                object_ids: _(cls.selection.mapObjects).pluck('id'),
                color: cls.selection.color.toHex()
            });
        });

        this.sendRequest({
            chosen_object_type: this.$scope.objectNameWidget.selectedName,
            selected_features: selectedFeatures,
            kernel: 'rbf',
            training_classes: trainingClasses
        });
    }
}
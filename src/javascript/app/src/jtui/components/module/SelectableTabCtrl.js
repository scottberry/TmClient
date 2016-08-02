// angular.module('jtui.module')
// .controller('SelectableTabCtrl', ['$scope', function($scope) {

//     // Register this ctrl to the selection  box ctrl.
//     // This enables the selectionBox to track which tab is selected
//     // and which isn't.
//     $scope.selectionBox.addTab(this);

//     var self = this;

//     this.isPopupWindowOpen = false;
//     this.isSelected = false;
//     this.mouseover = false;

//     /**
//      * Make sure that all other windows are closed when a new one is opened.
//      * The other SelectableTabCtrl can be retrieved by the getter function on MultiSelectionBoxCtrl which is published on the scope as selectionBox.
//      */
//     this.showPopupWindow = function() {
//         if (this.isPopupWindowOpen) {
//             this.isPopupWindowOpen = false;
//         } else {
//             // Close all other additional settings windows
//             var otherTabs = $scope.selectionBox.getTabs();
//             otherTabs.forEach(function(tab) {
//                 if (tab !== self) {
//                     tab.closePopupWindow();
//                 }
//             });
//             this.isPopupWindowOpen = true;
//         }
//     };

//     /**
//      * Return the item that is represented by this tab.
//      */
//     this.getItem = function() {
//         return $scope.item;
//     };

//     /**
//      * Set the boolean flag to false such that the ng-show will hide the popup.
//      */
//     this.closePopupWindow = function() {
//         this.isPopupWindowOpen = false;
//     };

//     /**
//      * Send an event upwards the scope chain.
//      */
//     this.selectTab = function() {
//         $scope.selectionBox.checkIfShouldSelect(this);
//     };

//     /**
//      * Scope got destroyed by angular:
//      * Make sure that this tab doesn't stay in the selected items list.
//      */
//     $scope.$on('$destroy', function() {
//         $scope.selectionBox.removeTab(self);
//     });

// }]);

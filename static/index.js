var app = angular.module('BMEGApp', ['ngMaterial']);

app.controller('SideNavCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){    
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).open();
    };
    
    this.sections = [{
        'id' : 'AboutBMEG',
        'title' : 'About BMEG',
        'isSelected' : true
    }, {
        'id' : 'InTheNews',
        'title' : 'In The News',
        'isSelected' : false
    }, {
        'id' : 'DREAM',
        'title' : 'DREAM/SMC',
        'isSelected' : false
    }, {
        'id' : 'TCGALive',
        'title' : 'TCGA-Live', 
        'isSelected' : false
    }, {
        'id' : 'PCAWG',
        'title' : 'PCAWG',
        'isSelected' : false
    }];
    
    this.toggleSelectSection = function(section) {
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i] === section) {
                section.isSelected = !section.isSelected;
            } else {
                this.sections[i].isSelected = false;
            }
        }
    };

    
    this.isSectionSelected = function(section) {
        return section.isSelected;
    };
    
    this.defaultSectionSelection = function() {
        var selectedSectionIndex = null;
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i].isSelected) {
                selectedSectionIndex = i;
                continue;
            }
        }
        if (selectedSectionIndex == null) {
            this.sections[0].isSelected = true;
        }
    };

    this.isSectionNameSelected = function(id) {
        this.defaultSectionSelection();
        var selected = false;
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i].id === id) {
                selected = this.sections[i].isSelected;
            }
        }
        return selected;
    };
    
}]);

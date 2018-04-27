angular.module('ToDoApp', ['ToDoApp.controllers']);

angular.module('ToDoApp.controllers', []).controller('todoController', function ($scope) {
    $scope.objectIndex = '';
    $scope.taskList = [
        {
            Name: 'CSS coding',
            Status: 'DONE',
            Action: ''
        },
        {
            Name: 'HTML Coding',
            Status: 'Pending',
            Action: ''
        },
        {
            Name: 'Testing',
            Status: 'Pending',
            Action: ''
        }
    ];

    // search and update task
    $scope.edit = function (id) {
        $scope.objectIndex = id;
        $scope.taskObj = angular.copy($scope.taskList[id]);
        console.log($scope.objectIndex);
    }

    // search record using given id and delete it
    $scope.delete = function (id) {
        for (i in $scope.taskList) {
            if ($scope.taskList[i].id == id) {
                $scope.taskList.splice(i, 1);
                $scope.taskList = {};
            }
        }

    }

    $scope.save = function () {
        if ($scope.taskList[$scope.objectIndex] == null) {
            $scope.taskList.push($scope.taskObj);
        } else {
            $scope.taskList[$scope.objectIndex] = $scope.taskObj;
        }

        // clear the add record form
        $scope.taskObj = {};
        $scope.objectIndex = '';
    }


});
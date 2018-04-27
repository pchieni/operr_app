angular.module('ToDoApp', ['ToDoApp.controllers']);

                angular.module('ToDoApp.controllers', []).controller('todoController', function($scope) {
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

                                 $scope.edit = function(id) {
                                 // search and update task
                                    $scope.objectIndex = id;
                                                $scope.taskObj = angular.copy($scope.taskList[id]);
                                                console.log($scope.objectIndex);
                                }
                                 
                                 $scope.delete = function(id) {
                                     // search record with given id
										// and delete it
                                     for(i in $scope.taskList) {
                                                     if($scope.taskList[i].id == id) {
                                                                     $scope.taskList.splice(i,1);
                                                                     $scope.taskList = {};
                                                     }
                                     }

                     }

                                $scope.save = function() {
                                                console.log($scope.objectIndex);
                                                if($scope.taskList[$scope.objectIndex] == null) {
                                                              
                                                                $scope.taskList.push($scope.taskObj);
                                                } else {
                                                               
                                                                $scope.taskList[$scope.objectIndex] = $scope.taskObj;
                                                }

                                                // clear the add record form
                                                $scope.taskObj = {};
                                                $scope.objectIndex = '';
                                }

                                
                });
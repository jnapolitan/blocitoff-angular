(function () {
    function LandingCtrl($firebaseArray) {
        var ref = firebase.database().ref().child("todos");

        this.toDos = $firebaseArray(ref);

        this.addToDo = function(newTitle){
          this.toDos.$add({title: newTitle, done: false})
          this.newTodoTitle = ''
        }
    }

    angular
        .module('blocItOff')
        .controller('LandingCtrl', ['$firebaseArray', LandingCtrl]);
})();

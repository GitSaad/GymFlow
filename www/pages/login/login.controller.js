/**
 * Created by Ali on 2016-07-20.
 */

app.controller('LoginCtrl',function(AddUser){
    var vm = this;

    vm.auth = AddUser.createUser();

  vm.test = "test";

});

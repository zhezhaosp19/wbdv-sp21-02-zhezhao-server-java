function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/YOURNEUID/users';
    var self = this;

    function createUser(user) {
        // fetch()
    }
    function findAllUsers() {
        return fetch(self.url).then(function (response) {
            return response.json()
        })
    }
    function findUserById(userId) {

    }
    function updateUser(userId, user) {

    }
    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`, {method: 'DElETE'}).then(function (response) {
            return response.json()
        })
    }
}

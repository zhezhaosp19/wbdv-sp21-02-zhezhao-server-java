function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001518672/users';
    var self = this;

    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json()
        })
    }

    function findAllUsers() {
        return fetch(self.url).then(function (response) {
            /*
            return a promise
             */
            return response.json()
        })
    }

    function findUserById(userId) {

    }

    function updateUser(userId, user) {
        return fetch(`${self.url}/${userId}`,{
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`, {
            method: 'DElETE'
        }).then(function (response) {
            return response.json()
        })
    }
}

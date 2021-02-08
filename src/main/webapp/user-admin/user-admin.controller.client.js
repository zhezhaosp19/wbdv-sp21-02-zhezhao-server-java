var $tableRows
var $createIcon
var $updateIcon

var $usernameFld
var $passwordFld
var $firstnameFld
var $lastnameFld
var $roleFld

var userAdminService = new AdminUserServiceClient()


var users = [
    {username: "ada", firstname: "Ada", lastname: "Lovelace", role: "Faculty"}
]

function deleteUser(event) {
    alert("After remove, user information can't be resume.\n Do you want to remove the user?")
    var icon = $(event.target)
    var index = icon.attr("id")
    var id = users[index]._id
    userAdminService.deleteUser(id).then(function (status) {
        users.splice(index, 1)
        renderUsers(users)
    })
}

function createUser() {
    var newUser = {
        username: $usernameFld.val(),
        firstname: $firstnameFld.val(),
        lastname: $lastnameFld.val(),
        role: $roleFld.val()
    };

    userAdminService.createUser(newUser)
        .then(function (actualUser) {
            users.push(actualUser)
            renderUsers(users)
        })
}

function renderUsers(users) {
    $tableRows.empty()
    for(let i = 0; i < users.length; i++) {
        var user = users[i];
        $tableRows.append(`                
                <tr class="wbdv-template wbdv-user wbdv-hidden">
                    <td class="wbdv-username">${user.username}</td>
                    <td>&nbsp;</td>
                    <td class="wbdv-first-name">${user.firstname}</td>
                    <td class="wbdv-last-name">${user.lastname}</td>
                    <td class="wbdv-role">${user.role}</td>
                    <td class="wbdv-actions">
                        <span class="float-right">
                          <i id="${i}" class="fa-2x fa fa-times wbdv-remove-icon"></i>
                          <i class="fa-2x fa fa-pencil wbdv-edit-icon"></i>
                        </span>
                    </td>
                </tr>`)
    }
    $(".wbdv-remove-icon").click(deleteUser)

}

function main() {
    $tableRows = jQuery("#table-rows")
    $createIcon = $(".wbdv-create-icon")

    $usernameFld = $(".wbdv-username-fld")
    $firstnameFld = $(".wbdv-firstname-fld")
    $lastnameFld = $(".wbdv-lastname-fld")
    $roleFld = $(".wbdv-role-fld")

    $createIcon.click(createUser)

    users = userAdminService.findAllUsers().then(function (actualUsers) {
        users = actualUsers
        renderUsers(users)
    })

}
$(main)
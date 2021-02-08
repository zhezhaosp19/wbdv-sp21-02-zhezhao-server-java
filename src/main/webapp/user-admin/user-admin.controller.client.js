var $tableRows
var $createIcon
var $updateIcon

var $usernameFld
var $passwordFld
var $firstnameFld
var $lastnameFld
var $roleFld

// var userAdminService = new userAdminService()


var users = [
    {username: "ada", firstname: "Ada", lastname: "Lovelace", role: "Faculty"}
]

function renderUsers(users) {
    $tableRows.empty()
    for(var i = 0; i < users.length; i++) {
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
    $(".wbdv-remove-icon").click(function (event) {
        alert("After remove, user information can't be resume.\n Do you want to remove the user?")
        var icon = $(event.target)
        var id = icon.attr("id")
        console.log(id)
        users.splice(id, 1)
        renderUsers(users)
    })

}

function main() {
    $tableRows = jQuery("#table-rows")
    $createIcon = $(".wbdv-create-icon")

    $createIcon.click(function () {
        var newUser = {
            username: "1",
            firstname: "1",
            lastname: "1",
            role: "1"
        };
        users.push(newUser)
        renderUsers(users)
    })

    renderUsers(users)
}
$(main)
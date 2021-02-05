

// var useradminService = new useradminService()

let $tableRows = jQuery("#table-rows")

let users = [
    {username: "ada", firstname: "Ada", lastname: "Lovelace", role: "Faculty"}
]

function renderUsers(users) {
    $tableRows.empty()
    for(let i = 0; i < users.length; i++) {
        let user = users[i];
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
        let icon = $(event.target)
        let id = icon.attr("id")
        console.log(id)
        users.splice(id, 1)
        renderUsers(users)
    })

}


let createIcon = $(".wbdv-create-icon")
createIcon.click(function () {
    let newUser = {
        username: "1",
        firstname: "1",
        lastname: "1",
        role: "1"
    };
    users.push(newUser)
    renderUsers(users)
})
// function main() {

//
// }
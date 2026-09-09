const insert = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
        <table style="border: 1px solid rgb(161, 43, 43); text-align: center;">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>KeyName</th>
            </tr>
            <tr>
                <td>${(e.key === " ") ? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `
})

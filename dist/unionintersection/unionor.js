"use strict";
function UnionPalyer(player) {
    if (player.role === "admin") {
        return `Admin Access Granted. Permission: ${player.permissions.join(", ")}`;
    }
    else {
        return `Welcome, Uesr! Your E-mail is: ${player.email} `;
    }
}
const unionAdmin = { role: "admin", permissions: ["Read", "Wright", "Delete"] };
const unionUser = { role: "user", email: "ravindra.kumar@tui.co.uk" };
console.log(UnionPalyer(unionAdmin));
console.log(UnionPalyer(unionUser));

type UnAdmin = {
    role: "admin";
    permissions: string[];
};
type UniUser = {
    role: "user";
    email: string;
};

function UnionPalyer(player: UnAdmin | UniUser): string {
    if (player.role === "admin") {
        return `Admin Access Granted. Permission: ${player.permissions.join(", ")}`
    } else {
        return `Welcome, Uesr! Your E-mail is: ${player.email} `
    }
}

const unionAdmin: UnAdmin = { role: "admin", permissions: ["Read", "Wright", "Delete"] };
const unionUser: UniUser = { role: "user", email: "ravindra.kumar@tui.co.uk" };

console.log(UnionPalyer(unionAdmin));
console.log(UnionPalyer(unionUser));
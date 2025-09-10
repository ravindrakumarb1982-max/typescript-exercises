enum UserRole {
    EUSER = "admin",
    EUSERID = 23,
    EUSERNAME = "Ravindra Kumar",
};

const funEnumUser = UserRole.EUSER;

function functEuser(fuUser: UserRole): number | string {
    return fuUser;
}

console.log(functEuser(UserRole.EUSERNAME));
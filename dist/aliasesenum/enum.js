"use strict";
var UserRole;
(function (UserRole) {
    UserRole["EUSER"] = "admin";
    UserRole[UserRole["EUSERID"] = 23] = "EUSERID";
    UserRole["EUSERNAME"] = "Ravindra Kumar";
})(UserRole || (UserRole = {}));
;
const funEnumUser = UserRole.EUSER;
function functEuser(fuUser) {
    return fuUser;
}
console.log(functEuser(UserRole.EUSERNAME));

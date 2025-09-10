"use strict";
// Abstract class BasePage with an abstract function to provide the page name.
class BasePage {
}
// LoginPage extends BasePage and implements the required abstract method.
class LoginPage extends BasePage {
    getPageName() {
        return "Login Page";
    }
}
// Example usage:
const loginPage = new LoginPage();
console.log(loginPage.getPageName()); // Output: Login Page

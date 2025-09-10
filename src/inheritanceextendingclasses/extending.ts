// Abstract class BasePage with an abstract function to provide the page name.
abstract class BasePage {
    abstract getPageName(): string;
}

// LoginPage extends BasePage and implements the required abstract method.
class LoginPage extends BasePage {
    getPageName(): string {
        return "Login Page";
    }
}

// Example usage:
const loginPage = new LoginPage();
console.log(loginPage.getPageName()); // Output: Login Page

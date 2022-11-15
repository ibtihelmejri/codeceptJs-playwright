Feature('login');

Scenario('test something', ({ I }) => {
I.amOnPage('/signin');
I.see('Se connecter');
I.fillField("//input[@id='email']", "mejrijihen@gmail.com");
I.fillField("#password","Jihen123*");
I.click("//div[@class='mt-3']");
I.see("Gestion des utilisateurs");
I.dontSee("Se connecter")
});

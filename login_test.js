Feature('login');

Scenario('authentifacation user', ({ I }) => {
I.amOnPage('/signin');
I.see('Se connecter');
I.fillField("//input[@id='email']", "jean.dujardin@gmail.com");
I.fillField("#password","Jean123*");
I.click("//div[@class='mt-3']");
I.see("Gestion des utilisateurs");
I.dontSee("Se connecter")
});

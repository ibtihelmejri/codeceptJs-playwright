Feature('register');

Scenario('register account ', ({ I }) => {
I.amOnPage('/signup');
I.see('Créer un compte');
I.fillField("//input[@id='email']", "aline.ropert@gmail.com");
I.fillField("#password","Aline123*");
I.click("//div[@class='mt-3']");
});

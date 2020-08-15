Feature('');

Scenario('Check Element Screenshot', (I) => {
    I.amOnPage('https://github.com');
    I.saveElementScreenshot(`.input-label`,`test.png`);
});

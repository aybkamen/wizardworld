import WizardWorldSheet from "./module/sheets/WizardWorldSheet.js";

Hooks.once("init", function() {
    console.log("Wizard World | Initialising Wizard World System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("wizardworld", WizardWorldSheet, {makeDefault: true});
});
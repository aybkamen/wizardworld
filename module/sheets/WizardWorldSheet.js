export default class WizardWorldSheet extends ItemSheet {
    get template() {
        return `systems/wizardworld/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}
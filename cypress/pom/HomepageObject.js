class HomepageObject {
    objectRepositories = {
        inputMenu: ":nth-child(1) > :nth-child(1) > .dropdown-toggle",
        datePickerMenu: ":nth-child(1) > :nth-child(2) > .dropdown-toggle",
        tableMenu: ":nth-child(1) > :nth-child(3) > .dropdown-toggle",
        simpleFormDemo: "#navbar-brand-centered ul.nav.navbar-nav:first-child ul.dropdown-menu li:first-child a[href$='-form-demo.html']",
        singleInputFieldTitle: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)",
        messageField: "input#user-message",

        showMessageBtn: "#get-input button",
        messageFieldResult: "#display",
        twoFieldTitle: "div.col-md-6.text-left div.panel.panel-default > div.panel-heading",
        fieldA: "#value1",
        fieldB: "#value2",
        getTotalBtn: "#gettotal > .btn",
        fieldTwoTotalVal: "#displayvalue",

        //Select Dropdown 
        selectDropDownMenu: ".open > .dropdown-menu > :nth-child(4) > a",
        selectListDemoTitle: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)",
        selectListDemoDropdown: "#select-demo",
        selectListDemoDropdownValue: ".selected-value",
        multiListDemoTitle: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1)",
        multiListSelectField: "#multi-select",
        multiListGetFirstBtn: "#printMe",
        multiListGetAllSelectedBtn: "#printAll"

    }
    getInputMenu(){
        return cy.get(this.objectRepositories.inputMenu);
    }
    clickSimpleDemoForm(){
        return cy.get(this.objectRepositories.simpleFormDemo);
    }
    getSingleMessageFieldTitle(){
        return cy.get(this.objectRepositories.singleInputFieldTitle);
    }
    getSingleMessageField(){
        return cy.get(this.objectRepositories.messageField);
    }

    getShowMessageBtn(){
        return cy.get(this.objectRepositories.showMessageBtn);
    }
    getMessageFieldResult(){
        return cy.get(this.objectRepositories.messageFieldResult);
    }
    getFieldTwoTitle(){
        return cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1)');
        // return cy.get(this.objectRepositories.getFieldTwoTitle);
    }
    getFieldA(){
        return cy.get(this.objectRepositories.fieldA);
    }
    getFieldB(){
        return cy.get(this.objectRepositories.fieldB);
    }
    getTotalBtn(){
        return cy.get(this.objectRepositories.getTotalBtn);
    }
    getFieldTwoTotalResult(){
        return cy.get(this.objectRepositories.fieldTwoTotalVal);
    }


    //SELECT DROPDOWNLIST 
    getSelectDropdownList(){
        return cy.get(this.objectRepositories.selectDropDownMenu);
    }
    getSelectDemoListTitle(){
        return cy.get(this.objectRepositories.selectListDemoTitle);
    }
    getSelectDemoListDropdown(){
        return cy.get(this.objectRepositories.selectListDemoDropdown);
    }
    getSelectDemoListDropdownValue(){
        return cy.get(this.objectRepositories.selectListDemoDropdownValue);
    }
    getMultiListDemoSectionTitle(){
        return cy.get(this.objectRepositories.multiListDemoTitle);
    }
    getMultiListSelectDemoField(){
        return cy.get(this.objectRepositories.multiListSelectField);
    }
    getMultiListGetFirstBtn(){
        return cy.get(this.objectRepositories.multiListGetFirstBtn);
    }
    getMultiListGetAllSelectedBtn(){
        return cy.get(this.objectRepositories.multiListGetAllSelectedBtn);
    }



    
    
    getDatePickersMenu(){
        return cy.get(this.objectRepositories.datePickerMenu);
    }
    getTableMenu(){
        return cy.get(this.objectRepositories.tableMenu);
    }
}
export default HomepageObject;
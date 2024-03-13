class BootstrapModal{
    objectRepository = {
        bootstrapModalOption: ":nth-child(5) > ul > :nth-child(2) > a",
        bootstrapModalTitle: "div[class='col-md-6 text-left'] h2",
        singleModalExampleTitle: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",
        singleModalLaunchBtn: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)",
        singleModalTitle: "#myModal0 h4.modal-title",
        singleModalXBtn: "div[id='myModal0'] button[type='button']",
        singleModalText: "div[id='myModal0'] div[class='modal-body']",
        singleModalCloseButton: "div[id='myModal0'] a[class='btn']",
        singleModalSaveButton: "div[id='myModal0'] a[class='btn btn-primary']",

        multipleModalTitle: "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",
        multipleModalLaunchBtn: "a[href='#myModal']",
        multipleModalFirstModalTitle: "div[id='myModal'] h4[class='modal-title']",
        multipleModalFirstModalX: "div[id='myModal'] button[type='button']",
        multipleModalFirstModalLaunchBtn: "div[class='modal-body'] a[class='btn btn-primary']",
        multipleModalFirstModalCloseBtn: "div[id='myModal'] a[class='btn']",
        multipleModalSecondModalTitle: "div[id='myModal2'] h4[class='modal-title']",
        multipleModalSecondModalX: "div[id='myModal2'] button[type='button']",
        multipleModalSecondModalCloseBtn: "div[id='myModal2'] a[class='btn']"
    }
    getBootstrapModalOption(){
        return cy.get(this.objectRepository.bootstrapModalOption);
    }
    getBootstrapModalTitle(){
        return cy.get(this.objectRepository.bootstrapModalTitle);
    }
    
    getSingleModalExampleTitle(){
        return cy.get(this.objectRepository.singleModalExampleTitle)
    }
    
    getSingleModalLaunchBtn(){
        return cy.get(this.objectRepository.singleModalLaunchBtn)
    }
    
    getSingleModalTitle(){
        return cy.get(this.objectRepository.singleModalTitle)
    }
    
    getSingleModalXBtn(){
        return cy.get(this.objectRepository.singleModalXBtn)
    }
    
    getSingleModalText(){
        return cy.get(this.objectRepository.singleModalText)
    }
    
    getSingleModalCloseButton(){
        return cy.get(this.objectRepository.singleModalCloseButton)
    }
    
    getSingleModalSaveButton(){
        return cy.get(this.objectRepository.singleModalSaveButton)
    }

     
    getMultipleModalTitle(){
        return cy.get(this.objectRepository.multipleModalTitle)
    }
    
    getMultipleModalLaunchBtn(){
        return cy.get(this.objectRepository.multipleModalLaunchBtn)
    }
    
    getMultipleModalFirstModalTitle(){
        return cy.get(this.objectRepository.multipleModalFirstModalTitle)
    }
    
    getMultipleModalFirstModalX(){
        return cy.get(this.objectRepository.multipleModalFirstModalX)
    }
    
    getMultipleModalFirstModalLaunchBtn(){
        return cy.get(this.objectRepository.multipleModalFirstModalLaunchBtn)
    }
    
    getMultipleModalFirstModalCloseBtn(){
        return cy.get(this.objectRepository.multipleModalFirstModalCloseBtn)
    }
    
    getMultipleModalSecondModalTitle(){
        return cy.get(this.objectRepository.multipleModalSecondModalTitle)
    }
    
    getMultipleModalSecondModalX(){
        return cy.get(this.objectRepository.multipleModalSecondModalXvc)
    }
    getMultipleModalSecondModalCloseBtn(){
        return cy.get(this.objectRepository.multipleModalSecondModalCloseBtn)
    }
}
export default BootstrapModal;
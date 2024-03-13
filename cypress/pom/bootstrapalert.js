class BootstrapAlert{
    objectRepository = {
        bootstrapAlertLink: "ul#treemenu li:first-child li:nth-child(5) a[href='#']",
        bootstrapAlert: "ul#treemenu a[href*='messages-demo.html']",
        autoCloseableSuccessMsgBtn: "#autoclosable-btn-success",
        normalSuccessMsgBtn: "#normal-btn-success",
        autoCloseableWarningMsg: "#autoclosable-btn-warning",
        autoCloseableDangerMsg: "#autoclosable-btn-danger", //.alert.alert-danger.alert-autocloseable-danger
        normalDangerMsg: "#normal-btn-danger",
        autoCloseableInfoMsg: "#autoclosable-btn-info",
        normalInfoMsg: "#normal-btn-info",
        normalWarningMsg: "#normal-btn-warning",

        normalSuccessMsgX: "div[class='alert alert-success alert-normal-success'] button[type='button']",
        autoCloseableSucessMsgDisplay: ".alert.alert-success.alert-autocloseable-success",
        normalSuccessMsgDisplay: ".alert.alert-success.alert-normal-success",
        autoCloseableWarningMsgDisplay: ".alert.alert-warning.alert-autocloseable-warning",
        normalWarningMsgDisplay: ".alert.alert-warning.alert-normal-warning",
        normalWarningMsgX: "div[class='alert alert-warning alert-normal-warning'] button[type='button']",
        normalDangerMsgDisplay: "#.alert.alert-danger.alert-normal-danger",
        normalDangerMsgDisplayX: "div[class='alert alert-danger alert-normal-danger'] button[type='button']",

        autoCloseableInfoMsgDisplay: ".alert.alert-info.alert-autocloseable-info",
        normalInfoMsgDisplay: ".alert.alert-info.alert-normal-info",
        normalInfoMsgDisplayX: "div[class='alert alert-info alert-normal-info'] button[type='button']",

    }

    getBootstrapAlertLink(){
        // return cy.get(':nth-child(5) > [href="#"]');
        return cy.get(this.objectRepository.bootstrapAlertLink);
    }
    getBootstrapAlert(){
        return cy.get(this.objectRepository.bootstrapAlert);
    }
    
    getAutoCloseableSuccessMsgBtn(){
        return cy.get(this.objectRepository.autoCloseableSuccessMsgBtn);
    }
    
    
    getNormalSuccessMsgBtn(){
        return cy.get(this.objectRepository.normalSuccessMsgBtn);
    }
    
    getAutoCloseableWarningMsg(){
        return cy.get(this.objectRepository.autoCloseableWarningMsg);
    }
    
    getAutoCloseableDangerMsg(){
        return cy.get(this.objectRepository.autoCloseableDangerMsg);
    }
    
    getNormalDangerMsg(){
        return cy.get(this.objectRepository.normalDangerMsg);
    }
    
    getAutoCloseableInfoMsg(){
        return cy.get(this.objectRepository.autoCloseableInfoMsg);
    }
    
    getNormalInfoMsg(){
        return cy.get(this.objectRepository.normalInfoMsg);
    }
    
    getNormalWarningMsg(){
        return cy.get(this.objectRepository.normalWarningMsg);
    }
    
    getNormalSuccessMsgX(){
        return cy.get(this.objectRepository.normalSuccessMsgX);
    }
    
    getAutoCloseableSucessMsgDisplay(){
        return cy.get(this.objectRepository.autoCloseableSucessMsgDisplay);
    }
    
    getNormalSuccessMsgDisplay(){
        return cy.get(this.objectRepository.normalSuccessMsgDisplay);
    }
    
    getAutoCloseableWarningMsgDisplay(){
        return cy.get(this.objectRepository.autoCloseableWarningMsgDisplay);
    }
    
    getNormalWarningMsgDisplay(){
        return cy.get(this.objectRepository.normalWarningMsgDisplay);
    }
    
    getNormalWarningMsgX(){
        return cy.get(this.objectRepository.normalWarningMsgX);
    }
    
    getNormalDangerMsgDisplay(){
        return cy.get(this.objectRepository.normalDangerMsgDisplay);
    }
    
    getNormalDangerMsgDisplayX(){
        return cy.get(this.objectRepository.normalDangerMsgDisplayX);
    }
    
    getAutoCloseableInfoMsgDisplay(){
        return cy.get(this.objectRepository.autoCloseableInfoMsgDisplay);
    }
    
    getNormalInfoMsgDisplay(){
        return cy.get(this.objectRepository.normalInfoMsgDisplay);
    }
    
    getNormalInfoMsgDisplayX(){
        return cy.get(this.objectRepository.normalInfoMsgDisplayX);
    }
}

export default BootstrapAlert;
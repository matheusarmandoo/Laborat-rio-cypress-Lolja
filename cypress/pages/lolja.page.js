import Base from "./_base.page";
import {Login as log} from "./components/lolja.elements";
export class Lolja extends Base{

    static acessar_lolja(){
    cy.visit('/');
	cy.wait(8000);
	cy.get('#news-popup > .modal-body > .btn-floating > .fa').click();
	cy.get('.cc-ALLOW').click();
    }

    static login_lolja(){
        cy.get('.itens-rt > .login-logout-signin > .wrp-txt-account > .p-login').click();
        super.typeValue(log.IMP_USER, "matheus.armando.acc@gmail.com");
        super.typeValue(log.IMP_PASSWORD, "matheusCypress543");
        super.clickOnElement(log.BTN_LOGIN);
        cy.wait(5000);
       cy.get('.btn-close').click();
    }
    static valida_dados_usuario(){
        cy.get(log.VALID_NOME).should("contain", "Matheus Armando");
        cy.get(log.VALID_EMAIL).should("contain", "matheus.armando.acc@gmail.com");
        cy.get(log.VALID_NUMBER).should("contain", "81996622818");
    }
    static login_lolja_invalido(){
        cy.get('.itens-rt > .login-logout-signin > .wrp-txt-account > .p-login').click();
        super.typeValue(log.IMP_USER, "matheus.armando.acc@gmail.com");
        super.typeValue(log.IMP_PASSWORD, "543u5454");
        super.clickOnElement(log.BTN_LOGIN);
        cy.wait(5000);
    }
    static valida_dados_msgerro(){
    cy.get(log.MSG_ERRO_LOGIN).should('have.text', 'O email ou a senha estão errados. Por favor verifique.')
    .and('be.visible', 'O email ou a senha estão errados. Por favor verifique.');
    }

    static cadastro_lolja(){
        cy.get('.itens-rt > .login-logout-signin > .wrp-txt-account > .p-register').click();
        super.typeValue(log.IMP_CAD_NAME, "Matheus Armando");
        super.typeValue(log.IMP_CAD_EMAIL, "matheuscompras2@gmail.com");
        super.typeValue(log.IMP_CAD_SENHA, "matheusCypress543");
        super.typeValue(log.IMP_CAD_CONF_SENHA, "matheusCypress543");
        super.clickOnElement(log.BTN_CAD);
        cy.get('.js-account-validation-pending > .weight-strong').should('have.text', 'Você está a um passo de criar sua conta!')
        .and('be.visible', 'Você está a um passo de criar sua conta!');
    }
    static valida_msg_cad(){
        cy.get(log.MSG_SUCESS_CAD).should('have.text', 'Você está a um passo de criar sua conta!')
        .and('be.visible', 'Você está a um passo de criar sua conta!');

    }
   
  

}
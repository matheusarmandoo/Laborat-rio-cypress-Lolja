/// <reference types="cypress" />
import{Given, Then, When, Before} from 'cypress-cucumber-preprocessor/steps'
import {Lolja} from '../../pages/lolja.page'


Given(`que esteja na pagina home`, () => {
	Lolja.acessar_lolja();
});

When(`realizar login com dados validos`, () => {
	Lolja.login_lolja();
});

Then(`devera ser enviado a uma pagina com os meus dados de usuario`, () => {
	Lolja.valida_dados_usuario();
});


When(`realizar login com dados invalidos`, () => {
	Lolja.login_lolja_invalido();
});

Then(`devera aparecer uma mensagem de erro`, () => {
	Lolja.valida_dados_msgerro();
});


When(`realizar cadastro com dados validos`, () => {
	Lolja.cadastro_lolja();
});

Then(`devera ser enviado a uma pagina com a mensagem de email de verificacao`, () => {
	Lolja.valida_msg_cad();
});














import faker from 'faker'

export class Factory {

    static massa(type){
        switch (type){

            case 'valid':
                return {
                    "nome": faker.name.findName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrator": admin.toString(),
                }

            case 'invalid':
                return {
                    "nome": "Fulano da Silva",
                    "email": "beltrano@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
                    }       

             case 'empty':
                return {
                    "nome": "",
                    "email": "",
                    "password": "",
                    "administrador": ""
                            }     

            default:
                return{notFound:"theb user typ was not found, please verify!"}
        }

    }

}
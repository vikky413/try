import { BASE_URL,userName } from "./CrudEnv.js";

describe('Petstore APi', () => {

    // POST the Data on Petstore Api 

    it('Post Users Details - POST', () => {
        cy.request({
            method:'POST',
            url:BASE_URL + '/user',
            headers:{
                'Content-Type':'application/json'
            },
            body:
            {
                "id": 0,
                "username": userName,
                "firstName": "Ankul",
                "lastName": "Singh",
                "email": "string@gmail.com",
                "password": "string@123",
                "phone": "string",
                "userStatus": 0
            }

        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
       
    });


    // GET USERS DETAILS 

    it('Fetch  Users Details - GET', () => {
        cy.request({
            method:'GET',
            url:BASE_URL + '/user'+`/${userName}`,
            headers:{
                'Content-Type':'application/json'
            },
           
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    });
 

    // UPDATES USER DETAILS 

    it('Updates  Users Details - PUT', () => {
        cy.request({
            method:'PUT',
            url:BASE_URL + '/user'+`/${userName}`,
            headers:{
                'Content-Type':'application/json'
            },
            body:
            {
                "id": 0,
                "username": userName,
                "firstName": "Ankul12",
                "lastName": "Singh",
                "email": "stri1ng@gmail.com",
                "password": "stri1ng@123",
                "phone": "str1ing",
                "userStatus": 0
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    });


     // DELETE USER DETALIS 

    it('Delete Users Details - DELETE', () => {
        cy.request({
            method:'DELETE',
            url:BASE_URL + '/user'+`/${userName}`,
            headers:{
                'Content-Type':'application/json'
            },
           
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    });
 
 
 });
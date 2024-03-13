import conf from '../conf/conf'
import {Account , Client ,ID } from 'appwrite'

export class  AuthService {
     client =  new Client()
     Account

     constructor() {
        this.client.setEndpoint('https://cloud.appwrite.io/v1').setProject("65e17eb41a7e4ad2a90f")
        this.account = new Account(this.client)
                   }

     async createAccount({email , password , name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
             if(userAccount){ return this.login({email,password}) }
             else { return userAccount}
        } catch (error) {
            console.log(error)
        }
     }  
     
     async login ({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log(error)
        }
     }
     
     async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error ',error)
        }
        return null
     }

     async logout (){
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            console.log('Appwrite service :: Logout :: error ' ,error)
        }
     }
}

const  authservice = new AuthService()

export default authservice
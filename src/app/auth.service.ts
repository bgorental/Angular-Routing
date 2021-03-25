export class AuthService {
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject) => {setTimeout(() => {resolve(this.loggedIn)}, 100);});
        return promise;
    }

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }
}
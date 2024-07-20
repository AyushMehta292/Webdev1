class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ayush`
    }

    set password(value){
        this._password = value
    }
}

const ayush = new User("h@ayush.ai", "abc")
console.log(ayush.email, ayush.password);
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const cup = new Teacher("cup", "cup@teacher.com", "123")

cup.logMe()
const masalacup = new User("masalacup")

masalacup.logMe()

console.log(cup instanceof User);
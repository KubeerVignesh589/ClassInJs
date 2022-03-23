class AccessorProperty {

    #userName;
    #age;
    #password;
    //--------Set UserName
    set setUserName(value) {
        if (value == null || value == undefined) {
            console.error("The userName can't contain Null and Undefined values");
        } else {
            if (value.length >= 10) {
                console.error("The userName can't contain more than 30 characters");
            } else {
                this.#userName = value;
            }
        }
    }
    //---------Get UserName
    get getUserName(){
        return this.#userName;
    }

    //---------set age
    set setAge(age){
        if(age >=0 && age <=100){
            this.#age = age;
        }else{
            console.error("Enter value correct age");
        }
    }
    //-----------get age
    get getAge(){
        return this.#age;
    }


    //-----------set password
    set setPassword(password){
        if(password == null || password == undefined){
            console.error("The password should not contain any null and undefined values");
        }else{
            if(password >= 30){
                console.error("Password should not contain above 30 characters");
            }else{
                this.#password=password;
            }
        }
    }
    //-----------get password
    get getPassword(){
        return this.#password;
    }
}
// ------personal Details
let person = new AccessorProperty();
person.setUserName = "Vignesh";
console.log(person.getUserName);
person.setAge = 28;
console.log(person.getAge);
person.setPassword = "Hello";
console.log(person.getPassword);
const user = {
    name : "Abhishek",
    age : 23,
    welcome : function ages(){
        console.log(`My name is ${this.name} , and my age is ${this.age}`)
    }
}
user.welcome()
user.name = "Raghuveera"
user.welcome()
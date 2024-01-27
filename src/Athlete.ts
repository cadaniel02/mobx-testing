import { makeObservable, action, observable} from "mobx";

class Athlete {
    name: string
    age: number
    salary: number
    teamHistory: string[]

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.teamHistory = [];

        makeObservable(this, {
            name: true,
            age: true, 
            teamHistory: true,
            salary: true,
            wishHappyBirthday: action, 
            tradePlayer: action
        });
    }

    wishHappyBirthday(){
        this.age++;
    }

    tradePlayer(team: string){
        this.teamHistory.push(team);
    }
}

export default Athlete;
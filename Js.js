
class Human {
    constructor(name,gender){
     this.name = name;
     this.gender = gender
    }
}
class Flat{
    inhabitant = []

    addInhabitant(human){
        this.inhabitant.push(human)
    }
}
class House {
    constructor(maximumFlat){
        this.appart = [],
        this.maximumFlat =maximumFlat
    }
    addAppartments(app){
        if(this.appart.length < this.maximumFlat){
          this.appart.push(app)
        }
    }
}
const person1 = new Human('Kostya','man');
const person2 = new Human('Inha','woman');
const person3 = new Human('Ilarrion','man');

const appartment1 = new Flat();
const appartment2 = new Flat();
const appartment3 = new Flat();

appartment1.addInhabitant(person1);
appartment2.addInhabitant(person2)
appartment3.addInhabitant(person3)

const building = new House(5);

building.addAppartments(appartment1);
building.addAppartments(appartment2)
building.addAppartments(appartment3)

console.log(building)
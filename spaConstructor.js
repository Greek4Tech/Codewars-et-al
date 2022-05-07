class LetsMakeSpa {
    constructor (name, race, gender, category, resonableAccomods) {
        this._name = name
        this._race = race
        this._race = category   
        this._race = resonableAccomods  
        this._gender = gender
    }

    get name (){ 
        return this._name
    }

    get race (){ 
        return this._race
    }

    get category (){
        return this._categoryrace
    }

    get resonableAccomods () {
        return this.resonableAccomods
    }

    say() {
         console.log (`My name is ${this._name}, I identify as ${race} and I ${resonableAccomods} reasonable accomodations`)
    }

}
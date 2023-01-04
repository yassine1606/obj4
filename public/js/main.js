class Personnage{
    constructor(age,nom,ville){
    this.age = age;
    this.nom = nom;
    this.ville = ville;
    }
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom}`);
    }
}
let monPerso = new Personnage(23,'yasco','Bruxelles');
let monAutrePerso = new Personnage(14,'yo','liege');

monPerso.sePresenter();
monAutrePerso.sePresenter();




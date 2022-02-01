import k from "../main.mjs"

export default class MarketingPrinciplesManager {

    constructor({} = {}){
        this.principles = [
        "Une stratégie marketing commence par identifier la raison d'être du projet. Si vous n'êtes pas capable de formuler une prase du type 'Nous faisons X pour y, parce que Z', c'est le moment de vous y mettre.",
        "Il est pertinent de formuler la mission de son projet en mentionnant ce qu'il apporte, à qui il est destiné et pourquoi il a été développé.",
        "L'e-marque n'existe que sur le net, et permet ainsi de se départir de l'image initiale de la marque pour mieux servir les objectifs du projet. L'e-marque peut être très utile en E-commerce. ",
        "Un socionaute est un consommateur qui souhaite rêver. Il veut bénéficier d'expertise, et s'offrir quelque chose qui lui permette de représenter ses valeurs et d'exprimer qui il veut être.",
        "Les socionautes sont plus intéressés par les personnes que par les entreprises. Une présence digitale forte, c'est une représentation humaine de la marque, donc des personnes représentant la marque qui s'adressent aux clients avec leurs comptes personnels."
    ],
    this.principles2 = []         
    }

     getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      }

    transformSpecialChars(){
      //console.log("principes sans modif",this.principles)
      let p = "mélé";
      console.log(p.replace("é","a"));
      console.log(p.replaceAll("é","a"));
      
    this.principles2 = this.principles.map(principle => principle.replaceAll("è","e").replaceAll("é","e").replaceAll("ê", "e").replaceAll("à", "a").replaceAll("â","a").replaceAll('ù','u').replaceAll('ç','c'))
    this.principles2 = this.principles2.map(principle => principle.toUpperCase())

    }  
    pickupRandomPrinciple() {
        let n = this.getRandomIntInclusive(0, this.principles.length - 1)
        console.log('n',n)
        console.log(this.principles)
        console.log('principe',this.principles2)

        return (this.principles2[n])
    }


    addText(t, s){
        add([
          text(t, {
            size: s, 
            font: 'sinko',
            width: width(),
            transform: (idx, ch) => ({
              pos: vec2(0, wave(-1, 1, time() * 1.5 + idx * 0.5)),
              scale: wave(1, 1.05, time() * 2 + idx)*k.height()/640,
              // angle: wave(-9, 9, time() * 3 + idx),
            }),
          }),
          origin("center"),
          pos(width()/2, height()/2),
          z(100)
        ])
      }
}

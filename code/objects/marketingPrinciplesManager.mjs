import k from "../main.mjs"

export default class MarketingPrinciplesManager {

    constructor({} = {}){
        this.principles = [
        "Une stratégie marketing commence par identifier la raison d'être du projet. Si vous n'êtes pas capable de formuler une prase du type 'Nous faisons X pour y, parce que Z', c'est le moment de vous y mettre.",
        'Il est pertinent de formuler la mission de son projet en mentionnant ce qu\'il apporte, à qui il est destiné et pourquoi il a été développé.',
        "Lorsqu'on développe un produit, vaut-il mieux penser au succès du client, ou à sa satisfaction ? Les deux vont de paire, seulement le succès apporte davantage de valeur ajoutée. Orienter davantage ses efforts sur le succès client, c'est mettre en place une relation davantage respectueuse de ses besoins que de ses attentes. C'est une forme d'investissement à plus long terme.",
        "L'e-marque n'existe que sur le net, et permet ainsi de se départir de l'image initiale de la marque pour mieux servir les objectifs du projet. L'e-marque peut être très utile en E-commerce. On peut aussi simplement extendre la marque, déjà présente sur les marchés traditionnels, en ajoutant des canneaux de communication web, qui portent généralement le nom de la marque. ",
        "\"Si le socionaute reste un consommateur souhaitant rêver, il hait la publicité intrusive, et veut acheter de l'expertise ou s'offrir un spplément d'âme. *Marc Fanelli-Isla*\"",
        "Les socionautes sont plus intéressés par les personnes que par les entreprises. Une présence digitale forte, c'est une représentation humaine de la marque, et donc une implication de comptes personnels.",
    ]                  
    }

     getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      }

    pickupRandomPrinciple() {
        let n = this.getRandomIntInclusive(0, this.principles.length - 1)
        console.log('n',n)
        console.log(this.principles)

        console.log(this.principles[n])
        return this.principles[n]
    }


    addText(t, s){
        add([
          text(t, {
            size: s, 
            font: 'sinko',
            width: width(),
            transform: (idx, ch) => ({
              pos: vec2(0, wave(-1, 1, time() * 1.5 + idx * 0.5)),
              scale: wave(1, 1.2, time() * 2 + idx),
              // angle: wave(-9, 9, time() * 3 + idx),
            }),
          }),
          origin("center"),
          pos(width()/2, height()/2),
          z(100)
        ])
      }
}


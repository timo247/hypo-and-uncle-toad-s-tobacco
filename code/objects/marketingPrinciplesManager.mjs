import k from "../main.mjs"

export default class marketingPrinciplesManager {

    constructor(){
        this.pickupRandomPrinciple() = this.pickupRandomPrinciple.bind(this);
        this.principles = ['Aujourd\'hui, il est nécessaire d\'être présent sur les réseaux sociaux.',
        "Une stratégie marketing commence par identifier la raison d'être du projet",
        'Il est pertinent de formuler la mission de son projet en mentionnant ce qu\'il apporte, à qui il est destiné et pourquoi il a été développé.',
        "Lorsqu'on développe un produit, vaut-il mieux penser au succès du client, ou à sa satisfaction ? Les deux vont de paire, seulement le succès apporte davantage de valeur ajoutée. Orienter davantage ses efforts sur le succès client, c'est mettre en place une relation davantage respectueuse de ses besoins que de ses attentes. C'est une forme d'investissement à plus long terme.",
        "Click and Mortar ou e-marque, qu'est ce qui convient le mieux à votre projet ? L'e-marque n'existe que sur le net, et permet ainsi de se départir de l'image initiale de l'image initiale de la marque pour mieux servir les objectifs du projet. L'e-marque peut être très utile en E-commerce. Pour du click and mortar, on extend la marque, déjà présente sur les marchés en ajoutant des canneaux de communication web, qui portent généralement le nom de la marque. "]                    
    }

    pickupRandomPrinciple() {
        n = randi(0, this.principles.length - 1)
        return this.principles[n]
    }
}


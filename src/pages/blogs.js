import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

const questions = {
    basic: [
        {
            "question": "Qu'est-ce qu'un produit structuré ?",
            "options": [
                "Un produit financier coté en bourse",
                "Un produit complexe alliant performance et protection du capital",
                "Un produit réservé aux investisseurs institutionnels",
                "Un produit sans risque garanti par l'État"
            ],
            "answer": "Un produit complexe alliant performance et protection du capital",
            "explanation": "Les produits structurés sont des instruments financiers non côtés, complexes, qui combinent recherche de performance et protection du capital."
        },
        {
            "question": "Qui crée les produits structurés ?",
            "options": [
                "Les entreprises cotées en bourse",
                "Les banques et compagnies d'assurance",
                "Les fonds de pension",
                "Les gouvernements"
            ],
            "answer": "Les banques et compagnies d'assurance",
            "explanation": "Les produits structurés sont créés par les banques ou les compagnies d'assurance."
        },
        {
            "question": "Sur quoi repose la performance d'un produit structuré ?",
            "options": [
                "Sur les taux d'intérêt directeurs",
                "Sur un sous-jacent (action, indice, etc.)",
                "Sur la politique monétaire",
                "Sur les résultats de l'émetteur"
            ],
            "answer": "Sur un sous-jacent (action, indice, etc.)",
            "explanation": "La performance dépend de l'évolution d'un sous-jacent qui peut être une action, un panier d'actions ou un indice boursier."
        },
        {
            "question": "Quels sont les supports permettant d'investir dans des produits structurés ?",
            "options": [
                "Uniquement un compte titres",
                "Assurance vie, PEA, compte titres ou plan d'épargne retraite",
                "Uniquement un PEA",
                "Un compte courant bancaire"
            ],
            "answer": "Assurance vie, PEA, compte titres ou plan d'épargne retraite",
            "explanation": "Il est possible d'investir via une assurance vie, un PEA, un compte titres ou un plan d'épargne retraite."
        },
        {
            "question": "Quel est l'objectif principal des produits structurés ?",
            "options": [
                "Garantir un rendement fixe",
                "Obtenir un rendement optimum en garantissant tout ou partie du capital",
                "Éviter toute fiscalité",
                "Spéculer à court terme"
            ],
            "answer": "Obtenir un rendement optimum en garantissant tout ou partie du capital",
            "explanation": "Les produits structurés ont pour objectif d'obtenir un rendement optimum en garantissant le capital investi (en totalité ou en partie)."
        },
        {
            "question": "Quelle est la forme réglementaire courante des produits structurés ?",
            "options": [
                "Fonds commun de placement (FCP)",
                "Société anonyme",
                "Fonds monétaire",
                "ETF"
            ],
            "answer": "Fonds commun de placement (FCP)",
            "explanation": "Réglementairement, ces véhicules d'investissement prennent souvent la forme d'un Fonds commun de placement (FCP)."
        },
        {
            "question": "Quels frais sont associés aux produits structurés ?",
            "options": [
                "Uniquement des frais de gestion",
                "Frais d'entrée, frais de cession et frais de gestion",
                "Aucun frais",
                "Uniquement des frais de sortie"
            ],
            "answer": "Frais d'entrée, frais de cession et frais de gestion",
            "explanation": "La souscription entraîne des frais d'entrée (1 à 3%), des frais de cession en cas de revente et des frais de gestion annuels (environ 2%)."
        },
        {
            "question": "Comment est déterminé le rendement d'un produit structuré ?",
            "options": [
                "Par les performances passées de l'émetteur",
                "Selon une formule mathématique connue lors de la souscription",
                "Par décision discrétionnaire de l'émetteur",
                "En fonction des taux d'intérêt du marché"
            ],
            "answer": "Selon une formule mathématique connue lors de la souscription",
            "explanation": "Le rendement du produit est défini selon une formule mathématique connue lors de la souscription."
        },
        {
            "question": "Qu'est-ce qu'une barrière de protection dans un produit structuré ?",
            "options": [
                "Une limite empêchant toute perte en capital",
                "Un seuil limitant la perte en capital en contrepartie d'un gain bridé",
                "Une garantie de performance minimale",
                "Un plafond de rendement"
            ],
            "answer": "Un seuil limitant la perte en capital en contrepartie d'un gain bridé",
            "explanation": "Certains produits ont une barrière de protection limitant la perte en capital. En contrepartie de cette protection partielle, le potentiel de gain est bridé."
        },
        {
            "question": "Quelle est la durée typique d'un produit structuré ?",
            "options": [
                "1 an maximum",
                "Entre 2 et 10 ans",
                "Plus de 20 ans",
                "Variable sans durée fixe"
            ],
            "answer": "Entre 2 et 10 ans",
            "explanation": "Dans tous les cas, le capital est restitué à l'investisseur au terme d'une période fixée dès le départ (entre 2 et 10 ans)."
        },
        {
            "question": "Quels sont les composants typiques d'un produit structuré ?",
            "options": [
                "Actions uniquement",
                "Obligations de premier rang, obligations risquées et swaps",
                "Matières premières et devises",
                "Immobilier et obligations"
            ],
            "answer": "Obligations de premier rang, obligations risquées et swaps",
            "explanation": "Beaucoup de produits structurés se composent d'une obligation de premier rang, d'obligations plus risquées et de swaps."
        },
        {
            "question": "Qu'est-ce que le sous-jacent d'un produit structuré ?",
            "options": [
                "La devise de référence du produit",
                "L'actif financier (action, indice) dont dépend la performance",
                "L'émetteur du produit",
                "La garantie du capital"
            ],
            "answer": "L'actif financier (action, indice) dont dépend la performance",
            "explanation": "Le sous-jacent définit l'indice que va suivre le produit structuré (action, obligation, indice boursier)."
        },
        {
            "question": "Qu'est-ce qu'un coupon dans un produit structuré ?",
            "options": [
                "Une réduction sur les frais de gestion",
                "Le rendement du produit versé périodiquement",
                "Un bonus de souscription",
                "Une pénalité en cas de sortie anticipée"
            ],
            "answer": "Le rendement du produit versé périodiquement",
            "explanation": "Les coupons représentent le rendement d'un produit structuré, versé mensuellement, trimestriellement, annuellement ou à terme."
        },
        {
            "question": "Qu'est-ce qu'une date de constatation ?",
            "options": [
                "La date de souscription du produit",
                "Une date fixée périodiquement pour évaluer la performance",
                "La date de publication des résultats de l'émetteur",
                "La date de paiement des impôts"
            ],
            "answer": "Une date fixée périodiquement pour évaluer la performance",
            "explanation": "Plusieurs dates durant la vie du produit sont fixées périodiquement pour constater l'évolution et la performance du produit."
        },
        {
            "question": "Que se passe-t-il si le sous-jacent dépasse son niveau initial à une date de constatation ?",
            "options": [
                "Le produit est automatiquement clôturé avec remboursement du capital et des coupons",
                "Le produit est prolongé automatiquement",
                "Les frais de gestion sont réduits",
                "Le sous-jacent est changé"
            ],
            "answer": "Le produit est automatiquement clôturé avec remboursement du capital et des coupons",
            "explanation": "Si le sous-jacent surperforme à une date de constatation, le fonds est automatiquement rappelé et l'investisseur récupère son capital plus les coupons."
        },
        {
            "question": "Quelle est la différence entre produits à capital garanti et protégé ?",
            "options": [
                "Aucune différence, les termes sont synonymes",
                "Les produits à capital garanti protègent intégralement le capital, les protégés partiellement",
                "Les produits à capital protégé offrent un rendement plus élevé",
                "Seuls les produits à capital garanti sont éligibles au PEA"
            ],
            "answer": "Les produits à capital garanti protègent intégralement le capital, les protégés partiellement",
            "explanation": "Les fonds à capital garanti assurent de récupérer la mise nette à l'échéance, tandis que les fonds à capital protégé garantissent tout ou partie du capital."
        },
        {
            "question": "Quel est le principal risque des produits structurés ?",
            "options": [
                "Risque de change",
                "Risque de liquidité et risque de défaut de l'émetteur",
                "Risque politique",
                "Risque inflationniste"
            ],
            "answer": "Risque de liquidité et risque de défaut de l'émetteur",
            "explanation": "Les principaux risques sont la liquidité (difficulté de sortie anticipée) et le défaut de l'émetteur (faillite de la banque ou compagnie d'assurance émettrice)."
        },
        {
            "question": "Qu'est-ce que le DICI ?",
            "options": [
                "Un indice boursier",
                "Le Document d'Information Clé de l'Investisseur",
                "Un type de produit structuré",
                "Une autorité de régulation"
            ],
            "answer": "Le Document d'Information Clé de l'Investisseur",
            "explanation": "Le DICI contient toutes les informations nécessaires à l'analyse du fonds et doit être remis à l'investisseur."
        },
        {
            "question": "Que se passe-t-il si l'indice sous-jacent chute de 50% avec une barrière de protection à 30% ?",
            "options": [
                "L'investisseur récupère 70% de son capital",
                "L'investisseur récupère 50% de son capital",
                "L'investisseur récupère 100% de son capital",
                "L'investisseur perd tout son capital"
            ],
            "answer": "L'investisseur récupère 50% de son capital",
            "explanation": "Si l'indice est en dessous de la barrière de protection (ici -50% vs -30%), l'investisseur subit une perte équivalente à la baisse de l'indice."
        },
        {
            "question": "Quelle est la fiscalité des produits structurés ?",
            "options": [
                "Toujours imposée au taux forfaitaire de 30%",
                "Dépend du support utilisé (PEA, assurance vie, etc.)",
                "Exonérée d'impôts",
                "Imposée uniquement sur les plus-values"
            ],
            "answer": "Dépend du support utilisé (PEA, assurance vie, etc.)",
            "explanation": "La fiscalité dépend du support (PEA, assurance-vie ou compte-titres) et suit la fiscalité spécifique de ce support."
        },
        {
            "question": "Qu'est-ce qu'un produit Autocallable ?",
            "options": [
                "Un produit remboursé automatiquement si certains seuils sont atteints",
                "Un produit sans date d'échéance",
                "Un produit à capital non garanti",
                "Un produit réservé aux professionnels"
            ],
            "answer": "Un produit remboursé automatiquement si certains seuils sont atteints",
            "explanation": "Les Autocalls remboursent de façon anticipée si certains seuils de performance du sous-jacent sont atteints à des dates de constatation."
        },
        {
            "question": "Pourquoi investir dans des produits structurés selon le document ?",
            "options": [
                "Pour garantir un rendement fixe supérieur au marché",
                "Pour ajuster le couple rendement/risque et diversifier son allocation",
                "Pour éviter toute fiscalité",
                "Pour spéculer à très court terme"
            ],
            "answer": "Pour ajuster le couple rendement/risque et diversifier son allocation",
            "explanation": "L'investissement permet d'ajuster rendement et risque selon ses objectifs et de diversifier son allocation avec des scénarios connus à l'avance."
        },
        {
            "question": "Quel est l'avantage fiscal des produits structurés détenus en assurance vie ?",
            "options": [
                "Exonération totale d'impôts",
                "Fiscalité avantageuse après 8 ans de détention",
                "Imposition uniquement sur les coupons",
                "Aucun avantage particulier"
            ],
            "answer": "Fiscalité avantageuse après 8 ans de détention",
            "explanation": "Détenus via une assurance vie, ils bénéficient de la fiscalité avantageuse de ce support après 8 ans de détention."
        },
        {
            "question": "Que se passe-t-il à l'échéance d'un produit à capital garanti si le sous-jacent a performé ?",
            "options": [
                "L'investisseur récupère uniquement son capital initial",
                "L'investisseur récupère son capital majoré du rendement prévu",
                "Le produit est automatiquement reconduit",
                "L'investisseur perd une partie de son capital"
            ],
            "answer": "L'investisseur récupère son capital majoré du rendement prévu",
            "explanation": "Si le sous-jacent égale ou dépasse le niveau de constatation initial à l'échéance, l'investisseur perçoit son capital initial majoré du gain prévu."
        },
        {
            "question": "Quelle est la particularité des produits à effet de levier ?",
            "options": [
                "Ils offrent une exposition supérieure à 100% au sous-jacent",
                "Ils garantissent un rendement minimum",
                "Ils sont sans risque",
                "Ils sont réservés aux investisseurs prudents"
            ],
            "answer": "Ils offrent une exposition supérieure à 100% au sous-jacent",
            "explanation": "Les produits à effet de levier permettent d'avoir une exposition du capital supérieure à 100%."
        },
        {
            "question": "Quel conseil le document donne-t-il avant de souscrire à un produit structuré ?",
            "options": [
                "Investir tout son capital dans un seul produit",
                "Se rapprocher d'un organisme spécialisé et bien analyser le DICI",
                "Ignorer les frais associés",
                "Choisir uniquement des produits à très long terme"
            ],
            "answer": "Se rapprocher d'un organisme spécialisé et bien analyser le DICI",
            "explanation": "Il est recommandé de se rapprocher d'un organisme spécialisé et d'analyser soigneusement le DICI avant de souscrire."
        },
        {
            "question": "Quelle est la principale caractéristique des produits de participation ?",
            "options": [
                "Ils sont investis à 100% sur un même sous-jacent",
                "Ils garantissent le capital à 100%",
                "Ils offrent un rendement fixe",
                "Ils sont sans risque"
            ],
            "answer": "Ils sont investis à 100% sur un même sous-jacent",
            "explanation": "Les produits de participation sont investis 100% sur un même sous-jacent et participent à sa hausse comme à sa baisse."
        },
        {
            "question": "Que signifie le terme 'strike' dans un produit structuré ?",
            "options": [
                "Le niveau initial de référence du sous-jacent",
                "La date d'échéance du produit",
                "Le taux du coupon",
                "Le montant des frais de gestion"
            ],
            "answer": "Le niveau initial de référence du sous-jacent",
            "explanation": "Le strike est le niveau initial de l'actif sous-jacent au moment du démarrage du produit."
        },
        {
            "question": "Quelle est la durée minimale typique d'un produit structuré ?",
            "options": [
                "1 mois",
                "6 mois",
                "2 ans",
                "5 ans"
            ],
            "answer": "2 ans",
            "explanation": "La durée typique d'un produit structuré est généralement entre 2 et 10 ans."
        },
        {
            "question": "Quel est l'inconvénient majeur d'une sortie anticipée d'un produit structuré ?",
            "options": [
                "Des pénalités et un risque de perte en capital",
                "Une imposition plus favorable",
                "Un remboursement du capital garanti",
                "Une conversion automatique en actions"
            ],
            "answer": "Des pénalités et un risque de perte en capital",
            "explanation": "Une sortie anticipée entraîne des pénalités et peut conduire à une perte en capital, les fonds étant prévus pour aller jusqu'à l'échéance."
        },
        {
            "question": "Quelle est la composition typique d'un produit structuré autocallable ?",
            "options": [
                "Une obligation zéro-coupon et une option",
                "Un panier d'actions uniquement",
                "Des devises étrangères",
                "Des matières premières"
            ],
            "answer": "Une obligation zéro-coupon et une option",
            "explanation": "Un autocallable combine typiquement une obligation zéro-coupon (pour la protection du capital) et une option (pour la performance)."
        },
        {
            "question": "Quelle est la principale différence entre un produit structuré et un fonds traditionnel ?",
            "options": [
                "Les produits structurés sont toujours plus risqués",
                "Les produits structurés combinent plusieurs instruments financiers avec une formule de rendement prédéfinie",
                "Les fonds traditionnels offrent une meilleure performance",
                "Il n'y a pas de différence"
            ],
            "answer": "Les produits structurés combinent plusieurs instruments financiers avec une formule de rendement prédéfinie",
            "explanation": "Les produits structurés sont des combinaisons complexes d'instruments financiers avec une formule mathématique définissant le rendement, contrairement aux fonds traditionnels."
        }
    ],
    moyen: [
        {
            "question": "Que garantit un produit à capital garanti à l'échéance ?",
            "options": [
                "Un rendement minimum de 5%",
                "Le capital investi net de frais",
                "Une performance supérieure au marché",
                "Aucune garantie"
            ],
            "answer": "Le capital investi net de frais",
            "explanation": "Les fonds à capital garanti assurent à l'épargnant de récupérer sa mise nette de frais à l'échéance."
        },
        {
            "question": "Quel type de produit structuré convient à un investisseur prudent ?",
            "options": [
                "Produit à effet de levier",
                "Produit à capital garanti",
                "Produit de participation",
                "Produit spéculatif"
            ],
            "answer": "Produit à capital garanti",
            "explanation": "Les produits à capital garanti, avec leur protection intégrale du capital, conviennent aux investisseurs prudents."
        },
        {
            "question": "Quel est l'avantage des produits structurés dans un contexte de marché volatile ?",
            "options": [
                "Ils éliminent tout risque",
                "La barrière de protection peut limiter les pertes",
                "Ils offrent des rendements garantis très élevés",
                "Ils permettent de spéculer sur la volatilité"
            ],
            "answer": "La barrière de protection peut limiter les pertes",
            "explanation": "Dans un contexte volatile, la barrière de protection des produits structurés peut sécuriser l'investisseur en limitant les risques de perte."
        },
        {
            "question": "Quelle est la particularité des produits 'autocali' ?",
            "options": [
                "Ils remboursent automatiquement le capital et une plus-value si le sous-jacent est positif à une date précise",
                "Ils n'ont pas de date d'échéance",
                "Ils sont garantis par l'État",
                "Ils offrent un rendement fixe quel que soit le marché"
            ],
            "answer": "Ils remboursent automatiquement le capital et une plus-value si le sous-jacent est positif à une date précise",
            "explanation": "Les produits 'autocali' remboursent par anticipation le capital majoré d'une plus-value si la performance du sous-jacent est positive ou nulle à une date précise."
        },
        {
            "question": "Quel est le risque principal si l'émetteur d'un produit structuré fait faillite ?",
            "options": [
                "Le produit devient plus performant",
                "L'investisseur peut perdre tout ou partie de son capital",
                "Le produit est automatiquement transféré à un autre émetteur",
                "Aucun risque, le capital est garanti par l'État"
            ],
            "answer": "L'investisseur peut perdre tout ou partie de son capital",
            "explanation": "En cas de défaut de l'émetteur (banque ou compagnie d'assurance), l'investisseur peut subir une perte totale ou partielle de son capital."
        },
        {
            "question": "Quelle est la meilleure stratégie avec les produits structurés selon le document ?",
            "options": [
                "Concentrer tout son portefeuille sur un seul produit",
                "Les utiliser comme outil de diversification",
                "Les éviter complètement",
                "Les utiliser uniquement pour du très court terme"
            ],
            "answer": "Les utiliser comme outil de diversification",
            "explanation": "Le document recommande d'intégrer les produits structurés comme outil de diversification dans une allocation d'actifs plus large."
        },
        {
            "question": "Que signifie FCP dans le contexte des produits structurés ?",
            "options": [
                "Fonds Commun de Placement",
                "Fonds de Capital Protection",
                "Fonds Coté en Bourse",
                "Fonds à Coupon Protégé"
            ],
            "answer": "Fonds Commun de Placement",
            "explanation": "FCP signifie Fonds Commun de Placement, une forme réglementaire courante pour les produits structurés."
        },
        {
            "question": "Quelle est la fréquence typique des dates de constatation ?",
            "options": [
                "Quotidienne",
                "Hebdomadaire",
                "Annuelle",
                "Tous les 5 ans"
            ],
            "answer": "Annuelle",
            "explanation": "Les dates de constatation sont généralement fixées annuellement pour évaluer la performance du produit."
        },
        {
            "question": "Quel type de produit structuré est le plus risqué ?",
            "options": [
                "Produit à capital garanti",
                "Produit à effet de levier",
                "Produit à capital protégé",
                "Produit de rendement"
            ],
            "answer": "Produit à effet de levier",
            "explanation": "Les produits à effet de levier, avec leur exposition supérieure à 100%, présentent le risque le plus élevé."
        },
        {
            "question": "Que se passe-t-il si le sous-jacent d'un produit à capital protégé chute de 15% (avec une protection à 10%) ?",
            "options": [
                "L'investisseur récupère 100% de son capital",
                "L'investisseur récupère 90% de son capital",
                "L'investisseur récupère 85% de son capital",
                "L'investisseur perd tout son capital"
            ],
            "answer": "L'investisseur récupère 85% de son capital",
            "explanation": "Avec une protection à 10%, une chute de 15% entraîne une perte de 5% (15%-10%), donc restitution de 85% du capital."
        },
        {
            "question": "Quelle est la caractéristique principale d'un swap dans un produit structuré ?",
            "options": [
                "C'est un emprunt obligataire",
                "C'est un contrat d'échange de flux financiers entre parties",
                "C'est une action privilégiée",
                "C'est une garantie de capital"
            ],
            "answer": "C'est un contrat d'échange de flux financiers entre parties",
            "explanation": "Un swap est un contrat permettant d'échanger différentes classes d'actifs (taux, devises) pour se couvrir contre les aléas de marché."
        },
        {
            "question": "Pourquoi les produits structurés sont-ils considérés comme complexes ?",
            "options": [
                "Parce qu'ils utilisent des formules mathématiques et combinent plusieurs instruments financiers",
                "Parce qu'ils sont réservés aux mathématiciens",
                "Parce qu'ils ne sont pas réglementés",
                "Parce qu'ils nécessitent un capital minimum très élevé"
            ],
            "answer": "Parce qu'ils utilisent des formules mathématiques et combinent plusieurs instruments financiers",
            "explanation": "Leur complexité vient des formules mathématiques et algorithmes utilisés, ainsi que de la combinaison de différents instruments financiers."
        },
        {
            "question": "Quelle est la première étape pour créer un produit structuré selon les exemples du document ?",
            "options": [
                "Choisir un sous-jacent",
                "Déterminer la durée",
                "Fixer les dates de constatation",
                "Calculer les frais de gestion"
            ],
            "answer": "Choisir un sous-jacent",
            "explanation": "La création commence par le choix d'un sous-jacent (action, indice) dont dépendra la performance du produit."
        },
        {
            "question": "Quelle est la particularité d'un coupon conditionnel dans un produit autocallable ?",
            "options": [
                "Il est versé uniquement si le sous-jacent dépasse un certain niveau à une date de constatation",
                "Il est versé mensuellement quel que soit le marché",
                "Il est calculé sur la performance de l'émetteur",
                "Il est garanti par l'État"
            ],
            "answer": "Il est versé uniquement si le sous-jacent dépasse un certain niveau à une date de constatation",
            "explanation": "Dans un autocallable, le coupon conditionnel est versé seulement si le sous-jacent atteint un certain niveau à une date prédéfinie."
        },
        {
            "question": "Quel pourcentage du capital est garanti dans un produit à capital protégé à 90% ?",
            "options": [
                "100%",
                "90%",
                "50%",
                "Aucun pourcentage n'est garanti"
            ],
            "answer": "90%",
            "explanation": "Un produit à capital protégé à 90% garantit que l'investisseur récupérera au moins 90% de son capital à l'échéance."
        },
        {
            "question": "Que conseille l'AMF concernant les produits structurés ?",
            "options": [
                "D'acheter sans lire les documents",
                "De ne pas acheter de produits dont on ne comprend pas le fonctionnement",
                "De concentrer ses investissements sur un seul produit",
                "D'ignorer les frais de gestion"
            ],
            "answer": "De ne pas acheter de produits dont on ne comprend pas le fonctionnement",
            "explanation": "L'AMF (Autorité des Marchés Financiers) déconseille d'acheter un placement dont on ne comprend pas la logique de fonctionnement."
        },
        {
            "question": "Quelle est la principale raison de la complexité des produits structurés ?",
            "options": [
                "Leur fiscalité complexe",
                "La combinaison de plusieurs instruments financiers et formules mathématiques",
                "Leur durée de vie très longue",
                "Leur caractère spéculatif"
            ],
            "answer": "La combinaison de plusieurs instruments financiers et formules mathématiques",
            "explanation": "La complexité vient de la combinaison d'instruments (obligations, swaps, options) et de formules mathématiques définissant le rendement."
        },
        {
            "question": "Quel est l'avantage des produits structurés par rapport aux produits traditionnels ?",
            "options": [
                "Ils offrent des scénarios de performance et risque prédéfinis",
                "Ils sont toujours plus performants",
                "Ils ne comportent aucun risque",
                "Ils sont plus simples à comprendre"
            ],
            "answer": "Ils offrent des scénarios de performance et risque prédéfinis",
            "explanation": "L'avantage principal est la possibilité d'avoir des scénarios de performance et de risque définis à l'avance, adaptés aux objectifs de l'investisseur."
        },
        {
            "question": "Que se passe-t-il si un produit structuré atteint son niveau de remboursement anticipé à la 3ème année ?",
            "options": [
                "Il est automatiquement clôturé avec paiement du capital et des coupons accumulés",
                "Il continue jusqu'à l'échéance initiale",
                "Les frais de gestion sont doublés",
                "Le sous-jacent est changé"
            ],
            "answer": "Il est automatiquement clôturé avec paiement du capital et des coupons accumulés",
            "explanation": "Si le niveau de remboursement anticipé est atteint, le produit se clôture et l'investisseur récupère son capital plus les coupons."
        },
        {
            "question": "Quelle est la différence entre un produit structuré et une obligation classique ?",
            "options": [
                "L'obligation classique a toujours un rendement plus élevé",
                "Le produit structuré combine plusieurs instruments avec une performance liée à un sous-jacent",
                "Il n'y a pas de différence",
                "Les obligations classiques sont plus risquées"
            ],
            "answer": "Le produit structuré combine plusieurs instruments avec une performance liée à un sous-jacent",
            "explanation": "Contrairement à une obligation classique, un produit structuré combine plusieurs instruments et sa performance dépend d'un sous-jacent."
        },
        {
            "question": "Pourquoi les produits structurés sont-ils adaptés aux objectifs à moyen/long terme ?",
            "options": [
                "Parce qu'ils sont conçus pour des durées de 2 à 10 ans",
                "Parce qu'ils offrent des rendements garantis très élevés",
                "Parce qu'ils peuvent être revendus sans pénalité à tout moment",
                "Parce qu'ils ne comportent aucun risque"
            ],
            "answer": "Parce qu'ils sont conçus pour des durées de 2 à 10 ans",
            "explanation": "Les produits structurés sont conçus pour des horizons de placement à moyen/long terme (typiquement 2 à 10 ans)."
        },
        {
            "question": "Quel est le principal élément à vérifier avant d'investir dans un produit structuré ?",
            "options": [
                "La couleur du document de souscription",
                "La solidité financière de l'émetteur",
                "Le nom du produit",
                "La devise de libellé"
            ],
            "answer": "La solidité financière de l'émetteur",
            "explanation": "La solidité de l'émetteur (banque ou assureur) est cruciale en raison du risque de défaut."
        },
        {
            "question": "Que signifie 'capital garanti sous réserve de survie de l'émetteur' ?",
            "options": [
                "Que la garantie est valable seulement si l'émetteur ne fait pas faillite",
                "Que le capital est garanti par l'État",
                "Que la garantie est valable 20 ans",
                "Que le capital est garanti à 200%"
            ],
            "answer": "Que la garantie est valable seulement si l'émetteur ne fait pas faillite",
            "explanation": "Cette mention signifie que la garantie du capital dépend de la solvabilité de l'émetteur jusqu'à l'échéance."
        },
        {
            "question": "Quelle est la bonne attitude face aux produits structurés selon le document ?",
            "options": [
                "Investir sans se poser de questions",
                "Comprendre le produit et diversifier ses investissements",
                "Mettre tout son capital dans un seul produit",
                "Ignorer les documents d'information"
            ],
            "answer": "Comprendre le produit et diversifier ses investissements",
            "explanation": "Le document recommande de bien comprendre le produit et de ne pas mettre tous ses œufs dans le même panier."
        }
    ],
    avance: [
        {
            "question": "Quelle est la principale raison pour laquelle les produits structurés ne sont pas cotés en bourse ?",
            "options": [
                "Parce qu'ils sont trop risqués pour le marché public",
                "Parce qu'ils sont émis sur mesure par les banques et compagnies d'assurance",
                "Parce que la réglementation l'interdit",
                "Parce qu'ils ont une durée de vie trop courte"
            ],
            "answer": "Parce qu'ils sont émis sur mesure par les banques et compagnies d'assurance",
            "explanation": "Les produits structurés sont des instruments financiers non côtés car ils sont créés sur mesure par les émetteurs (banques/assureurs) pour répondre à des besoins spécifiques."
        },
        {
            "question": "Que se passe-t-il si un produit structuré atteint sa date d'échéance sans avoir déclenché de remboursement anticipé ?",
            "options": [
                "Il est automatiquement reconduit pour la même durée",
                "L'investisseur récupère son capital selon les conditions initiales (garanti ou non)",
                "Le produit est converti en actions de l'émetteur",
                "L'investisseur perd tout son capital"
            ],
            "answer": "L'investisseur récupère son capital selon les conditions initiales (garanti ou non)",
            "explanation": "À l'échéance, le capital est restitué selon les termes du contrat : garanti totalement, partiellement, ou avec une perte si la barrière de protection est franchie."
        },
        {
            "question": "Pourquoi les produits structurés incluent-ils souvent des swaps ?",
            "options": [
                "Pour éviter toute fiscalité",
                "Pour échanger des flux financiers et couvrir des risques de marché",
                "Pour garantir un rendement fixe",
                "Pour réduire les frais de gestion"
            ],
            "answer": "Pour échanger des flux financiers et couvrir des risques de marché",
            "explanation": "Les swaps permettent aux émetteurs d'échanger des classes d'actifs (taux, devises) pour se couvrir contre les aléas de marché et structurer le produit."
        },
        {
            "question": "Quel est l'inconvénient d'un produit à capital garanti par rapport à un produit à capital protégé ?",
            "options": [
                "Le rendement est généralement plus faible",
                "Le capital n'est jamais garanti",
                "La durée est plus courte",
                "Il ne peut pas être détenu en assurance vie"
            ],
            "answer": "Le rendement est généralement plus faible",
            "explanation": "La garantie intégrale du capital se fait souvent au détriment du rendement, qui est plus limité que pour les produits à capital protégé."
        },
        {
            "question": "Quelle est la particularité d'un produit structuré 'à effet mémoire' ?",
            "options": [
                "Il mémorise la meilleure performance atteinte pendant sa durée",
                "Il ne peut pas être vendu avant l'échéance",
                "Il offre un rendement fixe garanti",
                "Il ignore les baisses du sous-jacent"
            ],
            "answer": "Il mémorise la meilleure performance atteinte pendant sa durée",
            "explanation": "Les produits 'à effet mémoire' retiennent la meilleure performance du sous-jacent sur une période pour calculer le rendement final, même si le sous-jacent baisse ensuite."
        },
        {
            "question": "Pourquoi un investisseur choisirait-il un produit de participation plutôt qu'un produit à capital garanti ?",
            "options": [
                "Pour éviter tout risque",
                "Pour bénéficier pleinement de la hausse du sous-jacent, quitte à subir sa baisse",
                "Pour obtenir un rendement fixe",
                "Pour réduire les frais de gestion"
            ],
            "answer": "Pour bénéficier pleinement de la hausse du sous-jacent, quitte à subir sa baisse",
            "explanation": "Les produits de participation, investis à 100% sur un sous-jacent, conviennent aux investisseurs dynamiques prêts à assumer le risque pour un potentiel de gain non bridé."
        },
        {
            "question": "Que signifie le terme 'autocall' dans un produit structuré ?",
            "options": [
                "Une clause de remboursement automatique si un seuil est atteint",
                "Un appel de marge obligatoire",
                "Un rendement indexé sur l'inflation",
                "Une garantie de capital illimitée"
            ],
            "answer": "Une clause de remboursement automatique si un seuil est atteint",
            "explanation": "'Autocall' désigne le mécanisme de remboursement automatique du produit si le sous-jacent atteint un certain niveau à une date de constatation."
        },
        {
            "question": "Quel est le risque spécifique aux produits à effet de levier ?",
            "options": [
                "Ils amplifient les pertes comme les gains",
                "Ils ne versent jamais de coupons",
                "Ils sont illiquides",
                "Ils imposent un capital minimum élevé"
            ],
            "answer": "Ils amplifient les pertes comme les gains",
            "explanation": "L'effet de levier expose l'investisseur à des pertes potentielles plus importantes, proportionnelles à l'exposition supérieure à 100%."
        },
        {
            "question": "Pourquoi les produits structurés sont-ils souvent comparés à des 'options exotiques' ?",
            "options": [
                "Parce qu'ils sont émis dans des pays étrangers",
                "Parce qu'ils combinent des options avec des caractéristiques complexes (barrières, coupons conditionnels...)",
                "Parce qu'ils ont une fiscalité particulière",
                "Parce qu'ils sont réservés aux investisseurs avertis"
            ],
            "answer": "Parce qu'ils combinent des options avec des caractéristiques complexes (barrières, coupons conditionnels...)",
            "explanation": "Ils intègrent des options dites 'exotiques' (barrières, remboursements anticipés) qui les rendent plus complexes que les options classiques."
        },
        {
            "question": "Quelle est la différence entre un coupon fixe et un coupon conditionnel ?",
            "options": [
                "Le coupon fixe est versé uniquement si le sous-jacent baisse",
                "Le coupon conditionnel dépend de la performance du sous-jacent à une date donnée",
                "Le coupon fixe est plus élevé",
                "Il n'y a pas de différence"
            ],
            "answer": "Le coupon conditionnel dépend de la performance du sous-jacent à une date donnée",
            "explanation": "Un coupon conditionnel n'est versé que si le sous-jacent atteint un certain niveau, contrairement au coupon fixe qui est payé quel que soit le marché."
        },
        {
            "question": "Que se passe-t-il si un produit structuré est détenu dans un PEA et que l'investisseur clôture son PEA avant l'échéance ?",
            "options": [
                "Le produit est transféré automatiquement vers un compte titres",
                "Le produit est liquidé avec une pénalité fiscale",
                "Le produit continue jusqu'à son échéance",
                "Le capital est garanti à 100%"
            ],
            "answer": "Le produit est liquidé avec une pénalité fiscale",
            "explanation": "La clôture anticipée d'un PEA entraîne la liquidation des actifs (dont les produits structurés) et une perte des avantages fiscaux."
        },
        {
            "question": "Quel est l'avantage d'un produit structuré en assurance vie par rapport à un compte titres ?",
            "options": [
                "Une fiscalité plus avantageuse à long terme",
                "Un rendement garanti plus élevé",
                "Une absence totale de frais",
                "Une liquidité immédiate"
            ],
            "answer": "Une fiscalité plus avantageuse à long terme",
            "explanation": "En assurance vie, après 8 ans, les gains bénéficient d'une fiscalité avantageuse (abattement annuel et taux réduit), contrairement au compte titres."
        },
        {
            "question": "Pourquoi les produits structurés sont-ils souvent critiqués ?",
            "options": [
                "Parce qu'ils sont trop simples à comprendre",
                "Parce que leur complexité peut masquer des risques ou des frais élevés",
                "Parce qu'ils offrent des rendements toujours inférieurs au marché",
                "Parce qu'ils sont réservés aux institutions"
            ],
            "answer": "Parce que leur complexité peut masquer des risques ou des frais élevés",
            "explanation": "La complexité des formules et des termes peut rendre difficile l'évaluation des risques réels ou des coûts cachés pour l'investisseur non averti."
        },
        {
            "question": "Quelle est la conséquence d'une sortie anticipée d'un produit structuré avant une date de constatation ?",
            "options": [
                "L'investisseur perd le droit aux coupons déjà accumulés",
                "Le capital est garanti à 100%",
                "Le produit est converti en actions",
                "Les frais de gestion sont remboursés"
            ],
            "answer": "L'investisseur perd le droit aux coupons déjà accumulés",
            "explanation": "Une sortie anticipée peut entraîner la perte des coupons non encore versés et une restitution du capital aux conditions de marché (potentiellement avec une décote)."
        },
        {
            "question": "Quel type de sous-jacent est le moins volatile pour un produit à capital garanti ?",
            "options": [
                "Un indice large (ex : EuroStoxx 50)",
                "Une action individuelle",
                "Une cryptomonnaie",
                "Une matière première"
            ],
            "answer": "Un indice large (ex : EuroStoxx 50)",
            "explanation": "Les produits à capital garanti reposent souvent sur des sous-jacents peu volatils (indices larges) pour limiter le risque de franchissement de la barrière."
        },
        {
            "question": "Que signifie 'knock-in' dans un produit structuré ?",
            "options": [
                "Une clause activant une option si le sous-jacent franchit un seuil",
                "Un remboursement automatique du capital",
                "Une pénalité en cas de sortie anticipée",
                "Un coupon garanti"
            ],
            "answer": "Une clause activant une option si le sous-jacent franchit un seuil",
            "explanation": "Une clause 'knock-in' active un mécanisme (ex : protection du capital) seulement si le sous-jacent atteint un certain niveau pendant la durée du produit."
        },
        {
            "question": "Pourquoi un investisseur pourrait préférer un produit à coupon conditionnel plutôt qu'un produit à coupon fixe ?",
            "options": [
                "Pour obtenir un rendement potentiellement plus élevé si le sous-jacent performe",
                "Pour éviter tout risque de marché",
                "Pour garantir un coupon mensuel",
                "Pour réduire les frais d'entrée"
            ],
            "answer": "Pour obtenir un rendement potentiellement plus élevé si le sous-jacent performe",
            "explanation": "Les coupons conditionnels offrent des rendements plus élevés que les coupons fixes lorsque le sous-jacent atteint les seuils définis, en contrepartie d'un risque de non-paiement."
        },
        {
            "question": "Quelle est la particularité d'un produit 'airbag' ?",
            "options": [
                "Il garantit le capital même en cas de faillite de l'émetteur",
                "Il offre une protection partielle du capital avec un effet de levier sur la performance positive",
                "Il ne comporte aucun frais",
                "Il est réservé aux professionnels"
            ],
            "answer": "Il offre une protection partielle du capital avec un effet de levier sur la performance positive",
            "explanation": "Un produit 'airbag' combine une protection partielle du capital (ex : -20%) avec une participation amplifiée à la hausse du sous-jacent (ex : 200%)."
        },
        {
            "question": "Que vérifie l'AMF dans les documents des produits structurés ?",
            "options": [
                "Que les risques sont clairement expliqués, surtout si la garantie est inférieure à 90%",
                "Que les rendements sont garantis par l'État",
                "Que les produits sont réservés aux investisseurs avertis",
                "Que les frais de gestion ne dépassent pas 1%"
            ],
            "answer": "Que les risques sont clairement expliqués, surtout si la garantie est inférieure à 90%",
            "explanation": "L'AMF impose une transparence sur les risques, particulièrement lorsque la garantie du capital est inférieure à 90%, pour protéger les investisseurs."
        },
        {
            "question": "Quel est l'intérêt d'un produit structuré pour un investisseur en phase de retraite ?",
            "options": [
                "La possibilité de protéger son capital tout en participant à une hausse limitée des marchés",
                "Un effet de levier pour maximiser les gains",
                "Une liquidité immédiate",
                "Une absence totale de risque"
            ],
            "answer": "La possibilité de protéger son capital tout en participant à une hausse limitée des marchés",
            "explanation": "Les produits à capital garanti ou protégé conviennent aux retraités cherchant à limiter les risques tout en bénéficiant d'un rendement potentiel."
        }

    ]
    
};


const Timer = ({ timeLeft }) => (
    <p className="timer">⏳ Temps restant : <span>{timeLeft}s</span></p>
);

const QuestionCard = ({ question, options, onAnswerClick, timeLeft }) => (
    <div className="question-card">
        <h3>💡 {question}</h3>
        <Timer timeLeft={timeLeft} />
        <div className="options-container">
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onAnswerClick(option)}
                    className="option-button"
                >
                    {index + 1}. {option}
                </button>
            ))}
        </div>
    </div>
);

const Results = ({ scores }) => {
    const totalScore = scores.basic + scores.moyen + scores.avance;
    return (
        <div className="results">
            <h3>🎯 Score final : {totalScore} / {Object.values(questions).flat().length}</h3>
            <p>✅ Niveau Basique : {scores.basic}</p>
            <p>✅ Niveau Moyen : {scores.moyen}</p>
            <p>✅ Niveau Avancé : {scores.avance}</p>
            {totalScore > 20 ? (
                <h3 className="success">🚀 Excellent travail ! Vous maîtrisez bien Les CONCEPTS DELTA 1 !</h3>
            ) : (
                <p className="fail">📚 Révisez encore un peu pour bien comprendre les concepts, ou retourse sur les GRECS !</p>
            )}
        </div>
    );
};

const Blogs = () => {
    const [level, setLevel] = useState("basic");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({ basic: 0, moyen: 0, avance: 0 });
    const [timeLeft, setTimeLeft] = useState(20);
    const [showResult, setShowResult] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            handleNextQuestion();
        }
    }, [timeLeft]);

    const handleAnswerClick = (option) => {
        const currentQuestions = questions[level];
        if (option === currentQuestions[currentQuestion].answer) {
            setScores((prevScores) => ({ ...prevScores, [level]: prevScores[level] + 1 }));
            setMessage("✅ Correct !");
        } else {
            setMessage(`❌ Incorrect ! La bonne réponse était : ${currentQuestions[currentQuestion].answer}\n ℹ️ Indice : ${currentQuestions[currentQuestion].explanation}`);
        }
        setTimeout(handleNextQuestion, 2000);
    };

    const handleNextQuestion = () => {
        const currentQuestions = questions[level];
        if (currentQuestion + 1 < currentQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(20);
            setMessage("");
        } else {
            if (level === "basic") setLevel("moyen");
            else if (level === "moyen") setLevel("avance");
            else setShowResult(true);
            setCurrentQuestion(0);
            setTimeLeft(20);
        }
    };

    return (
        <div className="qcm-container">
            {showResult ? (
                <Results scores={scores} />
            ) : (
                <div>
                    <h4 className="title">💡 Bienvenue au QCM DELTA 1 !</h4>
                    <h4 className="subtitle">🔹 Niveau : {level.toUpperCase()}</h4>
                    <QuestionCard
                        question={questions[level][currentQuestion].question}
                        options={questions[level][currentQuestion].options}
                        onAnswerClick={handleAnswerClick}
                        timeLeft={timeLeft}
                    />
                    {message && <p className="message">{message}</p>}
                </div>
            )}
        </div>
    );
};


export default Blogs;
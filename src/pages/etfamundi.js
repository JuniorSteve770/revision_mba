import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

import "./QCMStyles.css";

const questions = {
    basic: [
        {
            "question": "Le produit CMS Spread Note est principalement sensible à :",
            "options": [
                "La courbe des taux forward FX",
                "L'écart entre deux CMS de durées différentes",
                "La volatilité implicite des actions sous-jacentes",
                "La performance d’un indice pondéré de taux souverains"
            ],
            "answer": "L'écart entre deux CMS de durées différentes",
            "explanation": "Le CMS Spread Note tire sa valeur de la différence entre deux taux swap (ex. 10Y - 2Y), permettant de parier sur la pente de la courbe des taux."
        },
        {
            "question": "Quel élément a le plus d’impact sur le pricing d’un Dual Currency Note à maturité ?",
            "options": [
                "La corrélation entre les taux des deux pays",
                "Le niveau de participation action",
                "La probabilité de franchissement de barrière",
                "La variation du taux de change par rapport au strike"
            ],
            "answer": "La variation du taux de change par rapport au strike",
            "explanation": "Le remboursement se fait dans la devise défavorable si le taux de change franchit un certain niveau, ce qui influence fortement le pricing."
        },
        {
            "question": "La caractéristique commune entre un Snowball et un Phoenix est :",
            "options": [
                "La protection intégrale du capital",
                "Le remboursement automatique mensuel",
                "L’accumulation de coupons avec effet mémoire",
                "Une barrière désactivante en fin de période"
            ],
            "answer": "L’accumulation de coupons avec effet mémoire",
            "explanation": "Les deux produits peuvent accumuler des coupons conditionnels non versés grâce à un mécanisme de mémoire."
        },
        {
            "question": "Un produit de type Range Accrual est défini par :",
            "options": [
                "Un gain fixe si l’actif reste au-dessus de la barrière",
                "Un coupon accumulé selon le temps passé dans un intervalle de taux",
                "Un effet de cliquet automatique basé sur le spread FX",
                "Une participation fixe plafonnée avec call émetteur"
            ],
            "answer": "Un coupon accumulé selon le temps passé dans un intervalle de taux",
            "explanation": "Le Range Accrual Note offre un coupon qui s'accroît selon le pourcentage de temps pendant lequel le taux reste dans une plage définie."
        },
        {
            "question": "Lequel de ces produits présente à la fois un risque de change et une non-garantie du capital ?",
            "options": [
                "Capital Protected Note",
                "Digital Option",
                "Dual Currency Note",
                "Callable Bond"
            ],
            "answer": "Dual Currency Note",
            "explanation": "Le DCN combine un risque de conversion en devise étrangère et un risque de perte partielle du capital en cas de mouvement défavorable du FX."
        },
        {
            "question": "Dans une option Knock-Out, quel est le risque principal pour un investisseur long ?",
            "options": [
                "Perte maximale égale au strike",
                "Payoff réduit à zéro si la barrière est touchée",
                "Volatilité implicite annulée par la barrière",
                "Taux d'intérêt négatifs sur le sous-jacent"
            ],
            "answer": "Payoff réduit à zéro si la barrière est touchée",
            "explanation": "Une option Knock-Out cesse d’exister si le sous-jacent touche une certaine barrière, annulant ainsi le gain potentiel."
        },
        {
            "question": "Quelle est la principale différence entre un Autocall et un Phoenix ?",
            "options": [
                "Le Phoenix a une garantie de capital, l’Autocall non",
                "Le Phoenix propose un effet mémoire sur les coupons, l’Autocall non",
                "L’Autocall est basé sur le taux d’intérêt, le Phoenix sur les actions",
                "L’Autocall n’a pas de date d’observation"
            ],
            "answer": "Le Phoenix propose un effet mémoire sur les coupons, l’Autocall non",
            "explanation": "Le Phoenix mémorise les coupons non versés et peut les payer ultérieurement si les conditions sont remplies."
        },
        {
            "question": "Quel produit combine une protection du capital à l’échéance avec une participation limitée à un sous-jacent ?",
            "options": [
                "Reverse Convertible",
                "Snowball",
                "Capital Protected Note",
                "Digital Option"
            ],
            "answer": "Capital Protected Note",
            "explanation": "Les CPN garantissent le capital tout en permettant une participation partielle à un actif, souvent avec cap."
        },
        {
            "question": "Le produit qui présente un risque de remboursement dans une autre devise est :",
            "options": [
                "Range Accrual Note",
                "Dual Currency Note",
                "Phoenix",
                "Callable Bond"
            ],
            "answer": "Dual Currency Note",
            "explanation": "Le DCN inclut un risque de change, car il peut être remboursé dans une devise alternative."
        },
        {
            "question": "Parmi ces produits, lequel est particulièrement sensible à l’environnement de taux et non à l’évolution d’un actif action ?",
            "options": [
                "Phoenix",
                "Snowball",
                "CMS Spread Note",
                "Equity Linked Note"
            ],
            "answer": "CMS Spread Note",
            "explanation": "Le CMS Spread est basé sur l’écart entre deux taux (ex : CMS 10Y - CMS 2Y)."
        },
        {
            "question": "Quel produit a une structure de coupons qui peut générer des pertes accumulées plutôt que des gains ?",
            "options": [
                "Snowball",
                "Digital Option",
                "Snowblow",
                "Phoenix"
            ],
            "answer": "Snowblow",
            "explanation": "Le Snowblow est un produit 'inverse' du Snowball, accumulant des pénalités si les conditions sont mauvaises."
        },
        {
            "question": "Quel produit permet de gagner un coupon fixe uniquement si un niveau de marché est atteint à l’échéance ?",
            "options": [
                "Capital Protected Note",
                "Callable Bond",
                "Digital Option",
                "Range Accrual"
            ],
            "answer": "Digital Option",
            "explanation": "Les Digital Options fonctionnent comme des paris binaires : gain fixe si une condition est remplie, sinon zéro."
        },
        {
            "question": "Le pricing d’une Callable Bond est généralement fait à l’aide de :",
            "options": [
                "Monte Carlo",
                "Modèle taux + arbre binomial",
                "Formule fermée",
                "Interpolation linéaire"
            ],
            "answer": "Modèle taux + arbre binomial",
            "explanation": "L’arbre permet de modéliser le call anticipé de l’émetteur, avec l’évolution de la courbe des taux."
        },
        {
            "question": "Le produit Equity Linked Note (ELN) est généralement structuré avec :",
            "options": [
                "Participation, cap, barrière",
                "Coupon fixe, obligation convertible",
                "Capital garanti, participation intégrale",
                "Barrière désactivante, coupon memory"
            ],
            "answer": "Participation, cap, barrière",
            "explanation": "L’ELN permet de capter une partie de la performance action tout en limitant le risque grâce à une barrière."
        }
    ],
        
    //  toute la partie venant de deepseek est en dessous mais la partie du haut est aussi importante 
    moyen: [
        {
            "question": "Quel produit dépend du temps passé par un taux d’intérêt dans une certaine plage ?",
            "options": [
                "Digital Option",
                "CMS Spread Note",
                "Range Accrual Note",
                "Autocall"
            ],
            "answer": "Range Accrual Note",
            "explanation": "Les Range Accrual paient un coupon proportionnel au temps pendant lequel le taux reste dans une plage."
        },
        {
            "question": "Quel est l’élément clé qui empêche l’usage d’une formule fermée pour pricer un Snowball ?",
            "options": [
                "Son indexation sur plusieurs actions",
                "La dépendance aux trajectoires (path-dependent)",
                "Le caractère américain de l’option",
                "La présence d’un cap sur les coupons"
            ],
            "answer": "La dépendance aux trajectoires (path-dependent)",
            "explanation": "Le Snowball cumule les coupons selon un historique de marché, ce qui impose un modèle basé sur simulation (Monte Carlo)."
        },
        {
            "question": "Pourquoi un produit comme le Phoenix nécessite-t-il l'utilisation de la méthode Monte Carlo pour son pricing ?",
            "options": [
                "Parce qu'il contient une barrière désactivante continue",
                "Parce que ses coupons sont conditionnels et cumulatifs sur plusieurs dates d’observation",
                "Parce qu'il est indexé sur plusieurs devises",
                "Parce que le produit est une simple obligation avec coupon fixe"
            ],
            "answer": "Parce que ses coupons sont conditionnels et cumulatifs sur plusieurs dates d’observation",
            "explanation": "Le Phoenix est path-dependent avec effet mémoire sur les coupons, ce qui le rend difficile à modéliser analytiquement ou avec un arbre simple."
        },
        {
            "question": "Quelle différence fondamentale justifie l’usage d’un arbre binomial plutôt qu’un modèle fermé pour pricer une Reverse Convertible ?",
            "options": [
                "Parce que l’arbre permet de gérer des flux fixes",
                "Parce que la Reverse Convertible a des caractéristiques continues",
                "Parce que l’arbre modélise mieux la barrière et les paiements conditionnels",
                "Parce que la formule fermée est trop précise"
            ],
            "answer": "Parce que l’arbre modélise mieux la barrière et les paiements conditionnels",
            "explanation": "La Reverse Convertible implique des barrières et des remboursements conditionnels, ce qui se modélise bien avec des arbres (scénarios discrets)."
        },
        {
            "question": "Quel produit dans le tableau implique le risque de remboursement dans une devise différente de celle de souscription ?",
            "options": [
                "Capital Protected Note",
                "Phoenix",
                "Dual Currency Note (DCN)",
                "Range Accrual Note"
            ],
            "answer": "Dual Currency Note (DCN)",
            "explanation": "Le DCN combine un coupon fixe avec la possibilité de remboursement dans une devise alternative, ce qui implique un risque FX."
        },
        {
            "question": "Pourquoi le pricing d’un produit Snowball n’est-il pas adapté à une méthode par formule fermée ?",
            "options": [
                "Parce que les Snowballs sont toujours en devise",
                "Parce qu’ils impliquent des courbes de taux non plates",
                "Parce que leurs coupons sont périodiques, conditionnels et s’accumulent dans le temps",
                "Parce qu’ils n’ont pas de barrière"
            ],
            "answer": "Parce que leurs coupons sont périodiques, conditionnels et s’accumulent dans le temps",
            "explanation": "Les Snowballs sont des produits fortement path-dependent. Leur modélisation nécessite des scénarios complexes sur plusieurs dates."
        },
        {
            "question": "Quelle est la principale justification pour utiliser un modèle PDE pour pricer une Callable Bond ?",
            "options": [
                "La bond est exprimée en devise étrangère",
                "La formule fermée ne gère pas le call anticipé",
                "Le flux est aléatoire à chaque instant",
                "Il n’existe pas d’autre méthode"
            ],
            "answer": "La formule fermée ne gère pas le call anticipé",
            "explanation": "Les obligations callables impliquent des droits de rappel anticipé. Les modèles PDE permettent de gérer les conditions de call à tout moment du temps."
        },
        {
            "question": "Quelle méthode de pricing est la plus adaptée pour un produit de type Range Accrual sur des taux ?",
            "options": [
                "Formule fermée (Black-Scholes)",
                "Monte Carlo temporel",
                "Interpolation linéaire",
                "Décomposition analytique"
            ],
            "answer": "Monte Carlo temporel",
            "explanation": "Le Range Accrual dépend du temps passé dans un intervalle donné, ce qui est naturellement modélisé par des trajectoires temporelles."
        },
        {
            "question": "Quel produit peut être structuré comme une combinaison de cap, participation, barrière et capital garanti ?",
            "options": [
                "Autocall",
                "Capital Protected Note",
                "Callable Bond",
                "Digital Option"
            ],
            "answer": "Capital Protected Note",
            "explanation": "Les CPN sont souvent composées d’un zéro coupon (pour le capital garanti) + une option (pour la participation plafonnée)."
        },
        {
            "question": "Quel critère justifie que l’Equity Linked Note soit pricé via une combinaison de Monte Carlo et formule analytique ?",
            "options": [
                "Il est uniquement en devise étrangère",
                "La participation est conditionnelle avec cap, ce qui nécessite simulation + calcul direct",
                "Il a une barrière continue à surveiller",
                "Les flux sont fixes à toutes les dates"
            ],
            "answer": "La participation est conditionnelle avec cap, ce qui nécessite simulation + calcul direct",
            "explanation": "Les ELN sont souvent hybrides : une partie analytique (option classique) et une partie plus complexe à simuler (participation plafonnée, barrière)."
        },
        {
            "question": "Quel produit dans le tableau est explicitement sensible à l'écartement de la courbe des taux ?",
            "options": [
                "Dual Currency Note",
                "Range Accrual Note",
                "CMS Spread Note",
                "Snowball"
            ],
            "answer": "CMS Spread Note",
            "explanation": "Les CMS Spread Notes paient un coupon indexé sur l’écart entre deux taux (ex : CMS 10Y – CMS 2Y)."
        },
        {
            "question": "Pourquoi le produit Digital Option est l’un des rares à pouvoir être pricé avec précision par formule fermée ?",
            "options": [
                "Il n’a aucune barrière",
                "Il est basé sur une probabilité binaire avec barrière fixe à maturité",
                "Il est toujours adossé à un actif obligataire",
                "Il ne génère aucun flux conditionnel"
            ],
            "answer": "Il est basé sur une probabilité binaire avec barrière fixe à maturité",
            "explanation": "Les Digital Options sont des options binaires, et il existe des formules fermées précises pour ce type de payoff."
        }
    ],
    avance: [
        
        {
            "question": "Dans un produit Autocall avec une barrière de protection européenne à 60%, quelle hypothèse de marché rendrait l'utilisation de la méthode Monte Carlo plus pertinente que celle de l’arbre binomial ?",
            "options": [
                "La volatilité implicite est très faible",
                "Le produit contient plusieurs sous-jacents avec corrélation",
                "Le sous-jacent suit une loi uniforme",
                "Le taux sans risque est nul"
            ],
            "answer": "Le produit contient plusieurs sous-jacents avec corrélation",
            "explanation": "Le Monte Carlo permet de simuler facilement plusieurs actifs corrélés, ce qui est difficile avec un arbre."
        },
        {
            "question": "Quel impact majeur a une barrière discrète vs continue sur la méthode de pricing d'une Barrier Option ?",
            "options": [
                "La barrière continue exige l’utilisation de PDE ou d’un ajustement analytique",
                "La barrière discrète n’affecte pas le pricing",
                "La barrière continue rend le produit inéligible à la modélisation par LexiFi",
                "La barrière discrète impose un recalcul des taux forward"
            ],
            "answer": "La barrière continue exige l’utilisation de PDE ou d’un ajustement analytique",
            "explanation": "Les barrières continues nécessitent un suivi constant, ce qui est difficile à simuler sans PDE ou corrections."
        },
        {
            "question": "Pourquoi la méthode de grille + interpolation est peu adaptée à un produit comme le Phoenix ?",
            "options": [
                "Parce qu’elle introduit des biais statistiques non corrigibles",
                "Parce que le Phoenix est fortement path-dependent avec des variables non discrétisables facilement",
                "Parce qu’elle ne permet pas d’utiliser plusieurs sous-jacents",
                "Parce qu’elle ne fonctionne que pour les produits à capital garanti"
            ],
            "answer": "Parce que le Phoenix est fortement path-dependent avec des variables non discrétisables facilement",
            "explanation": "Le Phoenix dépend du chemin complet de l’indice (effet mémoire), ce qui rend une grille trop rigide."
        },
        {
            "question": "Pourquoi un produit Snowblow serait plus risqué en environnement de forte volatilité que son équivalent Snowball ?",
            "options": [
                "Parce que les Snowblow ont des coupons inversés (pénalités au lieu de gains)",
                "Parce qu’ils n’ont pas de protection du capital",
                "Parce qu’ils ont une devise alternative",
                "Parce qu’ils n’ont pas de dates d’observation définies"
            ],
            "answer": "Parce que les Snowblow ont des coupons inversés (pénalités au lieu de gains)",
            "explanation": "Contrairement au Snowball qui accumule les gains, le Snowblow accumule les pertes dès que les conditions sont défavorables."
        },
        {
            "question": "Dans un ELN avec cap à 120% et barrière à 70%, que modifie l'ajout d'une participation de 80% dans le payoff ?",
            "options": [
                "Le produit devient éligible au pricing par arbre",
                "Le payoff devient non linéaire et doit être partiellement simulé",
                "Le cap disparaît",
                "La barrière devient implicite"
            ],
            "answer": "Le payoff devient non linéaire et doit être partiellement simulé",
            "explanation": "Une participation <100% sur une borne capée implique une transformation non linéaire du payoff, souvent modélisée par simulation."
        },
        {
            "question": "Quel ajustement est nécessaire dans une simulation Monte Carlo pour évaluer une Digital Option avec une barrière très proche du spot ?",
            "options": [
                "Augmenter le nombre de trajectoires et réduire le pas de temps",
                "Changer la devise de référence",
                "Appliquer une couverture gamma constante",
                "Utiliser une formule fermée de secours"
            ],
            "answer": "Augmenter le nombre de trajectoires et réduire le pas de temps",
            "explanation": "Une barrière proche du spot nécessite plus de précision : il faut plus de granularité dans les scénarios simulés."
        },
        {
            "question": "Pourquoi une Callable Bond peut nécessiter une résolution backward dans un arbre binomial ?",
            "options": [
                "Parce que l'option de call dépend du futur comportement du taux d’intérêt",
                "Parce qu’elle contient un effet mémoire sur les coupons",
                "Parce qu’elle est indexée sur une volatilité implicite",
                "Parce qu’elle n’a pas de date d’échéance"
            ],
            "answer": "Parce que l'option de call dépend du futur comportement du taux d’intérêt",
            "explanation": "Le prix optimal de call dépend de la valeur future du titre, ce qui nécessite une résolution backward dans l’arbre."
        },
        {
            "question": "Quel serait le principal défi de modélisation d’un CMS Spread Note avec une participation indexée sur un facteur externe ?",
            "options": [
                "La volatilité des spreads est inconnue",
                "Les CMS sont discontinus",
                "L’indice externe pourrait être non stochastique",
                "Le payoff devient multidimensionnel avec dépendances croisées"
            ],
            "answer": "Le payoff devient multidimensionnel avec dépendances croisées",
            "explanation": "L’ajout d’un facteur externe crée une dépendance double qui rend le pricing beaucoup plus complexe."
        },
        {
            "question": "Quel impact sur le pricing d’un DCN (Dual Currency Note) aurait une forte corrélation négative entre taux et devise ?",
            "options": [
                "Le produit devient non valorisable",
                "Le risque de change est annulé",
                "Le pricing doit intégrer un ajustement croisé entre taux et FX",
                "La participation est neutralisée"
            ],
            "answer": "Le pricing doit intégrer un ajustement croisé entre taux et FX",
            "explanation": "La corrélation taux/FX modifie la probabilité de remboursement dans la mauvaise devise. Cela nécessite un ajustement dans le modèle Garman-Kohlhagen."
        },
        {
            "question": "Pourquoi un produit comme la Range Accrual est sensible à la discrétisation temporelle lors d’un pricing Monte Carlo ?",
            "options": [
                "Car il repose sur une observation continue du taux à l’intérieur d’une plage",
                "Car les taux sont toujours volatils",
                "Car il est obligatoirement en devise",
                "Car il n’a pas de payoff défini à maturité"
            ],
            "answer": "Car il repose sur une observation continue du taux à l’intérieur d’une plage",
            "explanation": "Plus la discrétisation est grossière, plus on risque de rater les moments où le taux est dans le range. Cela fausse l’accrual réel."
        },
        {
            "question": "Quelle est la principale raison pour laquelle la méthode de Monte Carlo est préférée pour le pricing d’un Autocall ?",
            "options": [
                "Elle permet de simuler des taux d’intérêt négatifs",
                "Elle est analytique et rapide pour les produits linéaires",
                "Elle permet de capturer les dépendances complexes entre plusieurs dates d'observation et barrières",
                "Elle garantit la convexité du prix du produit"
            ],
            "answer": "Elle permet de capturer les dépendances complexes entre plusieurs dates d'observation et barrières",
            "explanation": "Les Autocalls incluent des mécanismes conditionnels multiples (dates d'observation, coupons, barrière de protection), rendant Monte Carlo adapté à la simulation de scénarios complexes."
        },
        {
            "question": "Dans le cadre du pricing d’un Callable Bond, pourquoi l’arbre binomial est-il particulièrement adapté ?",
            "options": [
                "Parce qu’il est le plus précis pour les produits FX",
                "Parce qu’il permet de modéliser la décision de rappel à chaque nœud en fonction des taux futurs",
                "Parce qu’il simule des centaines de chemins de taux avec corrélations",
                "Parce qu’il ne nécessite pas d’hypothèse de volatilité implicite"
            ],
            "answer": "Parce qu’il permet de modéliser la décision de rappel à chaque nœud en fonction des taux futurs",
            "explanation": "L’arbre binomial permet de simuler les décisions optimales de rappel à chaque nœud, ce qui est essentiel pour le pricing d’un Callable Bond."
        },
        {
            "question": "Le modèle de Garman-Kohlhagen est une extension du modèle Black-Scholes pour :",
            "options": [
                "Les options sur taux d’intérêt",
                "Les options sur indices à dividendes fixes",
                "Les dérivés sur FX avec différentiel de taux d’intérêt",
                "Les caplets et floorlets sur CMS"
            ],
            "answer": "Les dérivés sur FX avec différentiel de taux d’intérêt",
            "explanation": "Garman-Kohlhagen adapte le Black-Scholes aux marchés de change en intégrant les taux domestiques et étrangers pour le pricing des options FX."
        },
        {
            "question": "Pourquoi utilise-t-on une interpolation dans le pricing d’un CMS Spread Note ?",
            "options": [
                "Pour estimer la volatilité locale à chaque maturité",
                "Pour construire une courbe de taux zéro-coupon",
                "Pour déduire le prix du swap spread entre deux CMS qui n’ont pas de cotation directe",
                "Pour calibrer le modèle de volatilité stochastique"
            ],
            "answer": "Pour déduire le prix du swap spread entre deux CMS qui n’ont pas de cotation directe",
            "explanation": "Les CMS Spread nécessitent d'interpoler entre les taux swap disponibles pour obtenir les composantes du spread (ex : 10Y-2Y)."
        },
        {
            "question": "Qu’est-ce qui différencie une approche Monte Carlo temporelle d’un Monte Carlo standard ?",
            "options": [
                "Le Monte Carlo temporel utilise des courbes de taux implicites alors que le standard non",
                "Le Monte Carlo temporel évalue les produits à dates continues, ce qui est crucial pour les accruals",
                "Il est utilisé uniquement pour des produits obligataires",
                "Il repose sur une approximation analytique de Black-Scholes"
            ],
            "answer": "Le Monte Carlo temporel évalue les produits à dates continues, ce qui est crucial pour les accruals",
            "explanation": "Les produits comme les Range Accrual Notes nécessitent de mesurer la durée exacte passée dans une plage, ce qui nécessite une simulation fine dans le temps."
        },
        {
            "question": "Pourquoi Black-Scholes est insuffisant pour pricer une Digital Option avec barrière excentrée dans le temps ?",
            "options": [
                "Il ne permet pas de modéliser les coupons fixes",
                "Il suppose une activation immédiate des options",
                "Il ne prend pas en compte la probabilité conditionnelle de toucher une barrière à une date future",
                "Il est seulement valable pour les produits sur taux"
            ],
            "answer": "Il ne prend pas en compte la probabilité conditionnelle de toucher une barrière à une date future",
            "explanation": "Le modèle Black-Scholes est adapté aux produits européens standards ; les barrières impliquent des probabilités conditionnelles dans le temps, mieux gérées par Monte Carlo ou arbres."
        },
        {
            "question": "Dans le modèle de Merton pour le pricing d’options, quelle hypothèse clé différencie ce modèle du Black-Scholes standard ?",
            "options": [
                "La volatilité est stochastique",
                "Les taux d’intérêt sont aléatoires",
                "Les sauts de prix sont intégrés dans le processus de diffusion",
                "Le sous-jacent suit un processus d'Ornstein-Uhlenbeck"
            ],
            "answer": "Les sauts de prix sont intégrés dans le processus de diffusion",
            "explanation": "Le modèle de Merton (1976) étend Black-Scholes avec des sauts de type Poisson :\n\n**dS/S = (μ - λk)dt + σ dW + J dN**\n\noù *N(t)* est un processus de Poisson, *J* est le facteur de saut, et *λk* est la compensation du drift. Très utile pour les actifs à changements brusques (crashes, événements macroéco)."
        },
        {
            "question": "Quelle est la subtilité principale à maîtriser lorsqu’on implémente le modèle de Heston pour le pricing d’une option ?",
            "options": [
                "Corriger la dérive du sous-jacent avec le facteur de saut",
                "Ne jamais corréler le bruit du sous-jacent avec celui de la variance",
                "Respecter la condition de Feller pour assurer la positivité de la variance",
                "Utiliser uniquement des arbres binomiaux pour l’implémentation"
            ],
            "answer": "Respecter la condition de Feller pour assurer la positivité de la variance",
            "explanation": "Le modèle de Heston introduit une variance stochastique avec le système :\n\n**dS = μS dt + √v S dW₁**\n**dv = κ(θ - v) dt + σ√v dW₂**\n\nLa condition de Feller : **2κθ > σ²** permet d’assurer que *v(t)* reste strictement positif. Ne pas la respecter peut rendre les simulations instables ou non réalistes."
        },
        {
            "question": "Quel est le piège classique lors de l'utilisation du modèle de Garman-Kohlhagen pour le pricing d’options de change (FX) ?",
            "options": [
                "Oublier d’utiliser la courbe de taux domestique dans la dérive",
                "Utiliser des volatilités de taux au lieu de FX",
                "Négliger le taux étranger dans la valeur actualisée",
                "Supposer une corrélation constante entre spot et forward"
            ],
            "answer": "Négliger le taux étranger dans la valeur actualisée",
            "explanation": "Le modèle GK est :\n\n**C = S e^{-r_f T} N(d₁) - K e^{-r_d T} N(d₂)**\n\nIl inclut à la fois le taux domestique *r_d* et le taux étranger *r_f*. Oublier d’actualiser le spot avec *r_f* revient à sous-estimer la prime de change."
        },
        {
            "question": "Pourquoi utilise-t-on parfois une méthode de Monte Carlo sous changement de numéraire ?",
            "options": [
                "Pour faciliter le calibrage aux CDS",
                "Pour éviter les biais de discrétisation dans les arbres",
                "Pour réduire la variance du simulateur dans un cadre multi-actif",
                "Pour générer une grille de volatilité implicite ajustée"
            ],
            "answer": "Pour réduire la variance du simulateur dans un cadre multi-actif",
            "explanation": "Changer de numéraire (ex : sous-jacent, zero-coupon) permet de mieux adapter la mesure de probabilité à l’actif de référence, ce qui réduit la variance de Monte Carlo et améliore la convergence."
        },
        {
            "question": "Dans un arbre binomial pour option américaine, pourquoi doit-on vérifier la valeur intrinsèque à chaque nœud ?",
            "options": [
                "Pour intégrer les dividendes dans le modèle",
                "Pour appliquer l’hypothèse de martingale",
                "Pour déterminer si l’exercice anticipé est optimal",
                "Pour garantir la symétrie de l’arbre"
            ],
            "answer": "Pour déterminer si l’exercice anticipé est optimal",
            "explanation": "Dans une option américaine, le porteur peut exercer à tout moment. À chaque nœud, on compare la valeur intrinsèque à la valeur actualisée du futur :\n**max(V_futur actualisé, valeur intrinsèque)**."
        }
    ]
};

const Timer = ({ timeLeft }) => (
    <p className="timer">⏳ Temps restant : <span>{timeLeft}s</span></p>
);

const QuestionCard = ({ question, options, onAnswerClick, timeLeft }) => (
    <div className="question-card">
        <h2>💡 {question}</h2>
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
            <h2>🎯 Score final : {totalScore} / {Object.values(questions).flat().length}</h2>
            <p>✅ Niveau Basique : {scores.basic}</p>
            <p>✅ Niveau Moyen : {scores.moyen}</p>
            <p>✅ Niveau Avancé : {scores.avance}</p>
            {totalScore > 3 ? (
                <p className="success">🚀 Excellent travail ! Vous maîtrisez bien les Concepts OOP !</p>
            ) : (
                <p className="fail">📚 Révisez encore un peu pour bien comprendre les concepts !</p>
            )}
        </div>
    );
};

const SignUp = () => {
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
                    <h4 className="subtitle"> 💡ETF --- 🔹 Niveau : {level.toUpperCase()}</h4>
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

export default SignUp;
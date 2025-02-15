import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

const questions = {
    basic: [
        {
            question: "Qu'est-ce qu'un repurchase agreement (repo) ?",
            options: [
                "Un prêt non garanti à court terme",
                "Une vente de titres avec engagement de les racheter à un prix plus élevé",
                "Une option d'achat sur des titres",
                "Un swap de taux d'intérêt"
            ],
            answer: "Une vente de titres avec engagement de les racheter à un prix plus élevé",
            explanation: "Un repo est une vente de titres avec engagement de rachat à un prix plus élevé."
        },
        {
            question: "Quel est le rôle du collatéral dans un repo ?",
            options: [
                "Il sert à garantir le remboursement du prêt",
                "Il augmente le risque de contrepartie",
                "Il est optionnel dans les transactions repo",
                "Il est utilisé pour spéculer sur les marchés"
            ],
            answer: "Il sert à garantir le remboursement du prêt",
            explanation: "Le collatéral sert à réduire le risque de contrepartie en garantissant le remboursement."
        },
        {
            question: "Qui est le 'cash taker' dans une transaction repo ?",
            options: [
                "La partie qui fournit les titres et reçoit du cash",
                "La partie qui fournit du cash et reçoit les titres",
                "La banque centrale",
                "Un intermédiaire financier"
            ],
            answer: "La partie qui fournit les titres et reçoit du cash",
            explanation: "Le cash taker est la partie qui échange des titres contre du cash."
        },
        {
            question: "Pourquoi les repos sont-ils classés comme des produits Delta 1 ?",
            options: [
                "Parce qu'ils ont un effet de levier non linéaire",
                "Parce qu'ils suivent linéairement la valeur des actifs sous-jacents",
                "Parce qu'ils sont utilisés uniquement pour les options",
                "Parce qu'ils sont sans risque"
            ],
            answer: "Parce qu'ils suivent linéairement la valeur des actifs sous-jacents",
            explanation: "Les repos sont des produits Delta 1 car leur valeur évolue directement avec celle des actifs sous-jacents."
        },
        {
            question: "Quel est l'objectif principal d'un repo pour une banque ?",
            options: [
                "Spéculer sur les marchés",
                "Gérer sa trésorerie à court terme",
                "Investir à long terme",
                "Émettre des obligations"
            ],
            answer: "Gérer sa trésorerie à court terme",
            explanation: "Les banques utilisent les repos principalement pour la gestion de liquidité."
        },

        {
            question: "Comment calcule-t-on le montant total à rembourser dans un repo ?",
            options: [
                "Montant emprunté × (1 + Taux repo × Jours/360)",
                "Montant emprunté × Taux repo",
                "Montant emprunté + (Taux repo × Jours)",
                "Montant emprunté / (1 + Taux repo)"
            ],
            answer: "Montant emprunté × (1 + Taux repo × Jours/360)",
            explanation: "Cette formule prend en compte l'intérêt calculé sur la durée du repo."
        },
        {
            question: "Quel est le risque principal pour le 'cash provider' dans un repo ?",
            options: [
                "Le risque de taux d'intérêt",
                "Le risque de contrepartie",
                "Le risque de change",
                "Le risque de liquidité"
            ],
            answer: "Le risque de contrepartie",
            explanation: "Le risque de contrepartie est le principal risque pour le prêteur de cash."
        },
        {
            question: "Quel est l'avantage d'un repo tripartite par rapport à un repo standard ?",
            options: [
                "Il est moins sécurisé",
                "Une tierce partie gère le collatéral et les flux financiers",
                "Il est plus risqué pour les deux parties",
                "Il n'implique pas de collatéral"
            ],
            answer: "Une tierce partie gère le collatéral et les flux financiers",
            explanation: "Un repo tripartite améliore la sécurité des transactions."
        },
        {
            question: "Comment les banques centrales utilisent-elles les repos ?",
            options: [
                "Pour spéculer sur les marchés",
                "Pour gérer la liquidité du marché monétaire",
                "Pour émettre des obligations",
                "Pour financer des projets à long terme"
            ],
            answer: "Pour gérer la liquidité du marché monétaire",
            explanation: "Les banques centrales utilisent les repos pour ajuster la liquidité du marché monétaire."
        },
        {
            question: "Quel est l'impact d'une baisse de la valeur des titres sous-jacents pendant la durée d'un repo ?",
            options: [
                "Le cash provider doit fournir un appel de marge",
                "Le cash taker doit fournir un appel de marge",
                "Le repo est annulé automatiquement",
                "Aucun impact, car le repo est sans risque"
            ],
            answer: "Le cash taker doit fournir un appel de marge",
            explanation: "Si la valeur du collatéral baisse, le cash taker doit fournir un appel de marge."
        },
        {
            question: "Quel est l'objectif d'un reverse repo pour une institution financière ?",
            options: [
                "Emprunter des titres pour vendre à découvert",
                "Prêter du cash en échange de titres",
                "Spéculer sur les taux d'intérêt",
                "Investir à long terme"
            ],
            answer: "Prêter du cash en échange de titres",
            explanation: "Un reverse repo permet à une institution de prêter du cash en échange de titres."
        },
        {
            question: "Quel est le rôle des repos dans l'arbitrage sur les taux d'intérêt ?",
            options: [
                "Ils permettent de profiter d'écarts entre les rendements des obligations et les taux repo",
                "Ils augmentent le risque de contrepartie",
                "Ils sont utilisés uniquement pour les swaps de taux d'intérêt",
                "Ils n'ont aucun lien avec l'arbitrage"
            ],
            answer: "Ils permettent de profiter d'écarts entre les rendements des obligations et les taux repo",
            explanation: "Les repos permettent de profiter des écarts de taux grâce à leur structure de financement à court terme."
        },
        {
            question: "Quel est l'impact des repos sur les ratios réglementaires des banques (Bâle III) ?",
            options: [
                "Ils augmentent les exigences de capital",
                "Ils réduisent les exigences de capital en optimisant le bilan",
                "Ils n'ont aucun impact sur les ratios",
                "Ils augmentent le risque de liquidité"
            ],
            answer: "Ils réduisent les exigences de capital en optimisant le bilan",
            explanation: "Les repos permettent aux banques d'optimiser leur bilan et de réduire leurs exigences de capital."
        },
        {
            question: "Quel est le principal avantage d'un repo par rapport à un prêt traditionnel ?",
            options: [
                "Il est plus risqué",
                "Il est collatéralisé, réduisant ainsi le risque de défaut",
                "Il n'implique pas de taux d'intérêt",
                "Il est utilisé uniquement pour les particuliers"
            ],
            answer: "Il est collatéralisé, réduisant ainsi le risque de défaut",
            explanation: "Le repo est sécurisé par des titres, ce qui réduit le risque de défaut."
        }
    ],
    moyen: [
        {
            question: "Quel est l'objectif d'un repo ouvert (open repo) ?",
            options: [
                "Il a une durée fixe et ne peut pas être prolongé",
                "Il n'a pas de date d'échéance fixe et peut être prolongé indéfiniment",
                "Il est utilisé uniquement pour les opérations de banques centrales",
                "Il est sans collatéral"
            ],
            answer: "Il n'a pas de date d'échéance fixe et peut être prolongé indéfiniment",
            explanation: "Un repo ouvert permet aux parties de reconduire l'accord tant qu'elles le souhaitent."
        },
        {
            question: "Quelle est la principale différence entre un repo et un prêt-emprunt de titres ?",
            options: [
                "Le repo est utilisé pour lever du financement, tandis que le prêt-emprunt de titres est utilisé pour emprunter des titres.",
                "Le repo est toujours plus risqué que le prêt-emprunt de titres.",
                "Le repo n'implique pas de collatéral, contrairement au prêt-emprunt de titres.",
                "Le prêt-emprunt de titres est utilisé uniquement par les banques centrales."
            ],
            answer: "Le repo est utilisé pour lever du financement, tandis que le prêt-emprunt de titres est utilisé pour emprunter des titres.",
            explanation: "Le repo est une opération de financement à court terme, tandis que le prêt-emprunt de titres sert à emprunter des titres pour des opérations de marché."
        },
        {
            question: "Quel est l'objectif principal d'un prêt-emprunt de titres ?",
            options: [
                "Lever du financement à court terme.",
                "Emprunter des titres pour du short-selling ou honorer des obligations de livraison.",
                "Spéculer sur les taux d'intérêt.",
                "Optimiser les ratios réglementaires des banques."
            ],
            answer: "Emprunter des titres pour du short-selling ou honorer des obligations de livraison.",
            explanation: "Le prêt-emprunt de titres est principalement utilisé pour emprunter des titres, notamment pour des stratégies de vente à découvert."
        },
        {
            question: "Comment le prix d'un repo est-il déterminé ?",
            options: [
                "Par le taux de prêt de titres (securities lending fee).",
                "Par le taux repo, qui dépend de l'offre et de la demande sur le marché monétaire.",
                "Par la valeur nominale des titres sous-jacents.",
                "Par le taux interbancaire uniquement."
            ],
            answer: "Par le taux repo, qui dépend de l'offre et de la demande sur le marché monétaire.",
            explanation: "Le taux repo est influencé par les conditions du marché monétaire et les taux sans risque."
        },
        {
            question: "Quel type d'arbitrage est possible avec un repo ?",
            options: [
                "Arbitrage entre le coût d'emprunt du titre et la valeur de son utilisation.",
                "Arbitrage entre le taux repo et les taux de marché (ex. emprunter via repo si le taux est inférieur au taux interbancaire).",
                "Arbitrage sur les spreads de crédit.",
                "Arbitrage sur les devises étrangères."
            ],
            answer: "Arbitrage entre le taux repo et les taux de marché (ex. emprunter via repo si le taux est inférieur au taux interbancaire).",
            explanation: "Les acteurs peuvent profiter des écarts entre le taux repo et d'autres taux de marché pour réaliser des arbitrages."
        },
        {
            question: "Quel est le principal avantage d'un prêt-emprunt de titres par rapport à un repo ?",
            options: [
                "Il permet de lever du financement à court terme.",
                "Il permet d'emprunter des titres pour des stratégies de marché comme le short-selling.",
                "Il est toujours moins risqué qu'un repo.",
                "Il n'implique pas de collatéral."
            ],
            answer: "Il permet d'emprunter des titres pour des stratégies de marché comme le short-selling.",
            explanation: "Le prêt-emprunt de titres est conçu pour permettre l'emprunt de titres, notamment pour des opérations de vente à découvert."
        },
        {
            question: "Quel est le rôle du collatéral dans un prêt-emprunt de titres ?",
            options: [
                "Il garantit le remboursement du prêt.",
                "Il sert de garantie pour l'emprunt de titres.",
                "Il est optionnel dans cette transaction.",
                "Il est utilisé pour spéculer sur les marchés."
            ],
            answer: "Il sert de garantie pour l'emprunt de titres.",
            explanation: "Dans un prêt-emprunt de titres, le collatéral est fourni par l'emprunteur pour garantir le retour des titres prêtés."
        },
        {
            question: "Quel est l'objectif principal d'un repo pour une institution financière ?",
            options: [
                "Emprunter des titres pour du short-selling.",
                "Lever du financement à court terme en utilisant des titres comme garantie.",
                "Optimiser les ratios de liquidité.",
                "Spéculer sur les taux d'intérêt."
            ],
            answer: "Lever du financement à court terme en utilisant des titres comme garantie.",
            explanation: "Le repo est principalement utilisé pour obtenir du financement à court terme en échange de titres."
        },
        {
            question: "Quel est le principal risque pour le prêteur dans un prêt-emprunt de titres ?",
            options: [
                "Le risque de taux d'intérêt.",
                "Le risque de contrepartie (défaut de l'emprunteur).",
                "Le risque de change.",
                "Le risque de liquidité."
            ],
            answer: "Le risque de contrepartie (défaut de l'emprunteur).",
            explanation: "Le prêteur de titres est exposé au risque que l'emprunteur ne restitue pas les titres ou ne fournisse pas le collatéral convenu."
        },
        {
            question: "Quel est l'avantage d'un repo par rapport à un prêt traditionnel ?",
            options: [
                "Il est plus risqué.",
                "Il est collatéralisé, réduisant ainsi le risque de défaut.",
                "Il n'implique pas de taux d'intérêt.",
                "Il est utilisé uniquement pour les particuliers."
            ],
            answer: "Il est collatéralisé, réduisant ainsi le risque de défaut.",
            explanation: "Le repo est sécurisé par des titres, ce qui réduit le risque de défaut par rapport à un prêt non garanti."
        },
        {
            question: "Quel est l'objectif d'un repo ouvert (open repo) ?",
            options: [
                "Il a une durée fixe et ne peut pas être prolongé.",
                "Il n'a pas de date d'échéance fixe et peut être prolongé indéfiniment.",
                "Il est utilisé uniquement pour les opérations de banques centrales.",
                "Il est sans collatéral."
            ],
            answer: "Il n'a pas de date d'échéance fixe et peut être prolongé indéfiniment.",
            explanation: "Un repo ouvert permet aux parties de reconduire l'accord tant qu'elles le souhaitent."
        },

        {
            question: "Un repo de 5 millions d'euros est conclu pour 14 jours avec un taux repo de 1,5 %. Quel est le montant total à rembourser ?",
            options: [
                "5 000 000 €",
                "5 029 166,67 €",
                "5 100 000 €",
                "5 150 000 €"
            ],
            answer: "5 029 166,67 €",
            explanation: "Montant total = 5 000 000 × (1 + 0,015 × 14/360) = 5 029 166,67 €."
        },
        {
            question: "Si un repo de 15 millions d'euros est conclu pour 60 jours avec un taux repo de 1,8 %, quel est le montant total à rembourser à l'échéance ?",
            options: [
                "15 045 000,00 €",
                "15 150 000,00 €",
                "15 180 000,00 €",
                "15 270 000,00 €"
            ],
            answer: "15 045 000,00 €",
            explanation: "Montant total = 15 000 000 × (1 + 0,018 × 60 / 360) = 15 045 000,00 €."
        },

        {
            question: "Quelle formule permet de calculer les intérêts dans un repo ?",
            options: [
                "Montant emprunté × Taux repo × (Jours / 360)",
                "Montant emprunté × (1 + Taux repo)",
                "Montant emprunté + (Taux repo × Jours)",
                "Montant emprunté / (1 + Taux repo)"
            ],
            answer: "Montant emprunté × Taux repo × (Jours / 360)",
            explanation: "Cette formule calcule les intérêts en fonction du montant emprunté, du taux repo et de la durée."
        },
        {
            question: "Qu'est-ce qu'une opération de repo (repurchase agreement) ?",
            options: [
                "Une vente définitive d'obligations",
                "Une opération de financement court-terme avec engagement de rachat",
                "Un prêt sans garantie",
                "Une transaction d'actions sur le marché secondaire"
            ],
            answer: "Une opération de financement court-terme avec engagement de rachat",
            explanation: "Le repo est une opération de financement à court terme où les titres sont vendus avec engagement de rachat."
        },
        {
            question: "Que représente le repo rate dans une transaction de repo ?",
            options: [
                "Le rendement du bond sous-jacent",
                "Le taux d'intérêt appliqué au prêt garanti",
                "La différence entre le prix sale et le prix propre",
                "Le taux d'inflation du marché"
            ],
            answer: "Le taux d'intérêt appliqué au prêt garanti",
            explanation: "Le repo rate est le taux d'intérêt appliqué dans une transaction repo."
        },
        {
            question: "Quelle est la formule correcte pour calculer le Term Money ?",
            options: [
                "Nominal × (Settlement Price / 100)",
                "Nominal × (Market Price / 100)",
                "Nominal × (Clean Price / 100)",
                "Nominal × (Repo Rate / 100)"
            ],
            answer: "Nominal × (Settlement Price / 100)",
            explanation: "Le Term Money est calculé à partir du prix de règlement et du nominal du titre."
        },
        {
            question: "Comment calcule-t-on les intérêts du repo (repo interest) ?",
            options: [
                "Term Money × (Repo Rate / 100) × (Days / 365)",
                "Term Money × (Repo Rate / 100) × (Days / 360)",
                "Settlement Price × Face Value × (Repo Rate / 100) × (Days / 360)",
                "Face Value × (Repo Rate / 100) × (Days / 360)"
            ],
            answer: "Term Money × (Repo Rate / 100) × (Days / 360)",
            explanation: "Les intérêts du repo sont calculés en fonction du Term Money, du repo rate et de la durée du repo en jours."
        },
        {
            question: "Quelle formule est utilisée pour calculer le Wired Amount ?",
            options: [
                "Term Money + Repo Interest",
                "Term Money - Repo Interest",
                "Settlement Price × Nominal",
                "Repo Interest × (360 / Days)"
            ],
            answer: "Term Money + Repo Interest",
            explanation: "Le Wired Amount est la somme du Term Money et des intérêts du repo."
        },
        {
            question: "Si le Face Amount est de 50M EUR, le Settlement Price est de 102.50, et l'Accrued Interest au settlement est de 1.25, quel est le Term Money ?",
            options: [
                "50,000,000 EUR",
                "51,250,000 EUR",
                "51,875,000 EUR",
                "52,000,000 EUR"
            ],
            answer: "51,875,000 EUR",
            explanation: "Le Term Money est calculé avec la formule : (50,000,000 × 102.5 / 100) + (50,000,000 × 1.25 / 100) = 51,875,000 EUR."
        },
        {
            question: "Un trader fait un repo sur 40 jours avec un Term Money de 75,000,000 EUR et un Repo Rate de 4.75%. Quel est le Repo Interest ?",
            options: [
                "375,000 EUR",
                "395,833 EUR",
                "400,000 EUR",
                "412,500 EUR"
            ],
            answer: "395,833 EUR",
            explanation: "Le Repo Interest est calculé avec la formule : 75,000,000 × (4.75 / 100) × (40 / 360) = 395,833 EUR."
        }
    ],
    avance: [
        {
            question: "Un trader doit rembourser un Wired Amount de 120,500,000 EUR après un repo de 60 jours, avec un Repo Interest de 500,000 EUR. Quel était le Term Money ?",
            options: [
                "119,000,000 EUR",
                "120,000,000 EUR",
                "120,250,000 EUR",
                "120,500,000 EUR"
            ],
            answer: "120,000,000 EUR",
            explanation: "Le Term Money est calculé comme suit : 120,500,000 - 500,000 = 120,000,000 EUR."
        },
        {
            question: "Quel est l’objectif du ratio LCR ?",
            options: [
                "Garantir un financement stable à long terme.",
                "Assurer que les banques disposent de suffisamment d’actifs liquides pour couvrir les sorties nettes de trésorerie sur 30 jours.",
                "Réduire les besoins en collatéral dans les opérations de repo.",
                "Optimiser le rendement du portefeuille obligataire."
            ],
            answer: "Assurer que les banques disposent de suffisamment d’actifs liquides pour couvrir les sorties nettes de trésorerie sur 30 jours.",
            explanation: "Le LCR garantit que les banques maintiennent des actifs liquides pour gérer leurs besoins de trésorerie."
        },
        {
            question: "Si une banque a un LCR inférieur à 100%, que peut-elle faire pour l’améliorer ?",
            options: [
                "Réduire le volume de ses prêts.",
                "Convertir des actifs illiquides en actifs de haute qualité liquides (HQLA).",
                "Augmenter son exposition au marché des actions.",
                "Accroître ses dettes court terme."
            ],
            answer: "Convertir des actifs illiquides en actifs de haute qualité liquides (HQLA).",
            explanation: "Les banques peuvent améliorer leur LCR en augmentant leurs actifs liquides de haute qualité."
        },
        {
            question: "Quelle est la différence principale entre LCR et NSFR ?",
            options: [
                "LCR est un ratio de court terme et NSFR un ratio de long terme.",
                "LCR est basé sur les actifs, NSFR sur les passifs.",
                "LCR est calculé sur 90 jours tandis que NSFR est sur 1 an.",
                "Il n’y a aucune différence."
            ],
            answer: "LCR est un ratio de court terme et NSFR un ratio de long terme.",
            explanation: "Le LCR se concentre sur la liquidité à court terme (30 jours), tandis que le NSFR vise à garantir un financement stable à long terme."
        },
        {
            question: "Dans une opération de repo tripartite, qui gère le collatéral ?",
            options: [
                "L’acheteur.",
                "L’agent tripartite (ex: LCH, Eurex).",
                "Le prêteur.",
                "La banque centrale."
            ],
            answer: "L’agent tripartite (ex: LCH, Eurex).",
            explanation: "L’agent tripartite gère le collatéral pour les deux parties, réduisant les risques opérationnels."
        },
        {
            question: "Quelle est la fonction d’un haircut appliqué sur un collatéral en repo ?",
            options: [
                "Assurer un rendement minimum sur la transaction.",
                "Protéger contre le risque de défaut de l’emprunteur.",
                "Réduire les besoins en liquidité du prêteur.",
                "Optimiser le levier financier de la transaction."
            ],
            answer: "Protéger contre le risque de défaut de l’emprunteur.",
            explanation: "Le haircut réduit la valeur du collatéral pour couvrir les risques de marché et de crédit."
        },
        {
            question: "Quelle est la principale raison pour laquelle une banque effectue un repo ?",
            options: [
                "Acheter des titres en vue d’une prise de position long terme.",
                "Obtenir du financement en utilisant ses titres comme collatéral.",
                "Éviter les obligations réglementaires liées au NSFR.",
                "Profiter d’un arbitrage fiscal."
            ],
            answer: "Obtenir du financement en utilisant ses titres comme collatéral.",
            explanation: "Les repos permettent aux banques de lever des fonds à court terme en utilisant leurs titres comme garantie."
        },
        {
            question: "Quel contrat juridique encadre le securities lending ?",
            options: [
                "GMRA (Global Master Repo Agreement).",
                "OSLA / GMSLA (Global Master Securities Lending Agreement).",
                "Basel III Framework.",
                "Dodd-Frank Act."
            ],
            answer: "OSLA / GMSLA (Global Master Securities Lending Agreement).",
            explanation: "Le GMSLA est le contrat standard pour les opérations de prêt de titres."
        },
        {
            question: "Dans une opération de securities lending, qui est typiquement le prêteur ?",
            options: [
                "Un hedge fund.",
                "Une banque d’investissement.",
                "Un fonds de pension.",
                "Un market maker."
            ],
            answer: "Un fonds de pension.",
            explanation: "Les fonds de pension sont souvent prêteurs de titres en raison de leurs portefeuilles stables et de long terme."
        },
        {
            question: "Un LCR structurellement élevé permet à une banque de :",
            options: [
                "Financer des actifs moins liquides sans impact sur le ratio.",
                "Augmenter son levier financier sans restriction.",
                "Pratiquer du repo avec du collatéral de moindre qualité à un coût plus faible.",
                "Effectuer des transactions de repo sur des maturités plus longues."
            ],
            answer: "Financer des actifs moins liquides sans impact sur le ratio.",
            explanation: "Un LCR élevé signifie que la banque dispose d’actifs liquides suffisants, lui permettant de financer des actifs moins liquides sans nuire à son ratio de liquidité."
        },
        {
            question: "Pourquoi une banque avec un LCR bas devra-t-elle payer un premium plus élevé sur ses opérations de repo ?",
            options: [
                "Parce qu’elle est perçue comme plus risquée et doit offrir un collatéral de meilleure qualité.",
                "Parce que les banques centrales imposent des pénalités aux établissements avec un faible LCR.",
                "Parce qu’elle ne peut pas utiliser de collatéral pour ses opérations de repo.",
                "Parce qu’elle doit lever plus de capital sur les marchés obligataires."
            ],
            answer: "Parce qu’elle est perçue comme plus risquée et doit offrir un collatéral de meilleure qualité.",
            explanation: "Une banque avec un faible LCR devra fournir du collatéral de haute qualité (HQLA) ou payer un coût de financement plus élevé, car les prêteurs perçoivent un risque plus important."
        },
        {
            question: "Quelle action impactera directement à la baisse le NSFR d’une banque ?",
            options: [
                "Une augmentation du volume de financements stables.",
                "Une substitution de financements à court terme par des financements à long terme.",
                "Une croissance rapide des actifs pondérés en risque financés par des dettes à court terme.",
                "Une réduction des actifs pondérés en risque."
            ],
            answer: "Une croissance rapide des actifs pondérés en risque financés par des dettes à court terme.",
            explanation: "Le NSFR mesure la stabilité du financement bancaire sur un horizon d’un an. Un financement court terme accru face à des actifs illiquides dégradera ce ratio."
        },
        {
            question: "Lors d'une crise de liquidité, quelle stratégie peut permettre à une banque de respecter son LCR ?",
            options: [
                "Effectuer des ventes d’actifs non liquides pour lever du cash.",
                "Augmenter son exposition aux produits dérivés.",
                "Accroître son levier en empruntant à court terme.",
                "Remplacer ses actifs HQLA par des titres à haut rendement."
            ],
            answer: "Effectuer des ventes d’actifs non liquides pour lever du cash.",
            xplanation: "Vendre des actifs non liquides pour acquérir des actifs HQLA permet d’augmenter le numérateur du ratio LCR et de respecter les exigences réglementaires."
        },
        {
            question: "Comment un haircut affecte-t-il le financement d’une transaction repo ?",
            options: [
                "Il diminue la valeur de financement accordée par rapport à la valeur nominale du collatéral.",
                "Il augmente la valeur de financement du collatéral.",
                "Il n’a d’impact que sur la qualité du collatéral et non sur le financement.",
                "Il réduit l’exposition au risque de contrepartie pour l’emprunteur."
            ],
            answer: "Il diminue la valeur de financement accordée par rapport à la valeur nominale du collatéral.",
            explanation: "Un haircut réduit la valeur du financement accordé par rapport à la valeur de marché du collatéral afin de couvrir le risque de baisse de prix du titre sous-jacent."
        },
        {
            question: "Une contrepartie effectue un repo avec un haircut de 5% sur un nominal de 50M€. Quel montant recevra-t-elle en cash ?",
            options: [
                "52,500,000 €",
                "47,500,000 €",
                "50,000,000 €",
                "49,000,000 €"
            ],
            answer: "47,500,000 €",
            explanation: "Montant financé = Nominal × (1 - Haircut) = 50,000,000 × (1 - 0.05) = 47,500,000 €."
        },
        {
            question: "Lors d’une transaction repo tripartite, quel est l’avantage principal de l’agent tripartite ?",
            options: [
                "Il garantit que la transaction est exécutée au meilleur prix du marché.",
                "Il fournit une compensation en cas de défaut de l’une des parties.",
                "Il gère et optimise la gestion du collatéral, réduisant ainsi les coûts administratifs pour les parties.",
                "Il impose des exigences réglementaires plus strictes aux participants."
            ],
            answer: "Il gère et optimise la gestion du collatéral, réduisant ainsi les coûts administratifs pour les parties.",
            explanation: "L’agent tripartite gère le collatéral et permet aux contreparties de bénéficier d’une administration simplifiée et d’une réduction des coûts opérationnels."
        },
        {
            question: "Quelle est la principale différence entre une opération de repo et un prêt de titres (securities lending) ?",
            options: [
                "Dans un repo, il y a un engagement de rachat du collatéral, ce qui n’est pas le cas dans un prêt de titres.",
                "Le repo ne nécessite pas de collatéral, contrairement au lending.",
                "Les repos sont uniquement réglementés par les banques centrales.",
                "Un repo ne peut être exécuté qu’entre banques commerciales."
            ],
            answer: "Dans un repo, il y a un engagement de rachat du collatéral, ce qui n’est pas le cas dans un prêt de titres.",
            explanation: "Un repo est une vente temporaire avec rachat obligatoire, tandis qu’un prêt de titres permet à l’emprunteur de restituer un titre équivalent à la fin du contrat."
        },
        {
            question: "Pourquoi un prime broker joue-t-il un rôle clé dans le securities lending ?",
            options: [
                "Il centralise la gestion des collatéraux et optimise le coût du financement.",
                "Il impose des restrictions réglementaires aux hedge funds.",
                "Il empêche les opérations de short selling.",
                "Il garantit les transactions auprès des autorités de régulation."
            ],
            answer: "Il centralise la gestion des collatéraux et optimise le coût du financement.",
            explanation: "Un prime broker facilite le financement des hedge funds en leur prêtant des titres et en gérant les collatéraux de manière efficace."
        },
        {
            question: "Lors d’une opération de securities lending, quel est l’intérêt d’un rebate pour le prêteur ?",
            options: [
                "Il représente une commission payée à l’agent de règlement.",
                "Il constitue une rémunération versée au prêteur en échange du prêt des titres.",
                "Il est une taxe réglementaire imposée aux transactions de lending.",
                "Il est un paiement effectué par l’emprunteur pour couvrir le risque de défaut."
            ],
            answer: "Il constitue une rémunération versée au prêteur en échange du prêt des titres.",
            explanation: "Le rebate est une forme de rémunération que le prêteur reçoit en échange du prêt des titres, notamment lorsque le collatéral fourni est du cash."
        },
        {
            question: "Comment un investisseur peut-il arbitrer entre le repo et le securities lending pour optimiser son rendement ?",
            options: [
                "En choisissant le lending lorsqu’il veut récupérer des titres et le repo lorsqu’il a besoin de cash.",
                "En combinant les deux pour maximiser son levier et optimiser son portefeuille d'actifs.",
                "En n’utilisant que le repo, car il est plus liquide que le lending.",
                "En évitant les opérations de repo, car elles sont toujours plus coûteuses."
            ],
            answer: "En combinant les deux pour maximiser son levier et optimiser son portefeuille d'actifs.",
            explanation: "Un investisseur peut utiliser le lending pour maximiser son portefeuille de titres et le repo pour obtenir du financement, combinant ainsi rendement et gestion de liquidité."
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
                    <h3 className="title">💡 Bienvenue au QCM DELTA 1 !</h3>
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
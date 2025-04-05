import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

import "./QCMStyles.css";

const questions = {
    basic: [
        {
            "question": "Quel indice est fréquemment répliqué par un ETF ?",
            "options": ["FTSE 250", "MSCI World", "DAX 30", "Nikkei 225"],
            "answer": "MSCI World",
            "explanation": "L'indice MSCI World est souvent utilisé pour représenter les marchés développés à l'échelle mondiale."
        },
        {
            "question": "Quelle caractéristique décrit le mieux un ETF ?",
            "options": ["Instrument non coté en bourse", "Instrument à rendement garanti", "Instrument passif répliquant un indice", "Instrument exclusivement obligataire"],
            "answer": "Instrument passif répliquant un indice",
            "explanation": "Les ETF sont des instruments passifs qui visent à reproduire la performance d’un indice."
        },
        {
            "question": "Quelle est la fréquence de cotation d’un ETF ?",
            "options": ["Une fois par semaine", "Une fois par jour", "En continu comme une action", "Tous les trimestres"],
            "answer": "En continu comme une action",
            "explanation": "Les ETF sont négociés en bourse tout au long de la journée de marché, comme les actions."
        },
        {
            "question": "Quel est l’un des frais généralement faibles dans un ETF ?",
            "options": ["Commission de performance", "Frais de gestion", "Frais d'entrée", "Frais de sortie"],
            "answer": "Frais de gestion",
            "explanation": "Les frais de gestion des ETF sont généralement faibles comparés aux fonds actifs."
        },
        {
            "question": "Quel type d’ETF réinvestit les dividendes ?",
            "options": ["Distributif", "Synthétique", "Capitalisant", "Fonds obligataire"],
            "answer": "Capitalisant",
            "explanation": "Un ETF capitalisant réinvestit automatiquement les dividendes reçus dans le fonds."
        },
        {
            "question": "Quel type d’ETF amplifie les variations de l’indice suivi ?",
            "options": ["ETF inverse", "ETF à levier", "ETF capitalisant", "ETF distribuant"],
            "answer": "ETF à levier",
            "explanation": "Les ETF à levier multiplient les performances journalières de l’indice, par exemple x2 ou x3."
        },
        {
            "question": "Quel est le principal risque lié à un ETF synthétique ?",
            "options": ["Risque de marché", "Risque de change", "Risque de contrepartie", "Risque de taux"],
            "answer": "Risque de contrepartie",
            "explanation": "Les ETF synthétiques reposent sur un contrat avec une contrepartie qui peut faire défaut."
        },
        {
            "question": "Un ETF est considéré comme liquide car :",
            "options": ["Il peut être vendu uniquement à la fin de la journée", "Il se revend rapidement sur les marchés", "Il est garanti par l'État", "Il a un rendement fixe"],
            "answer": "Il se revend rapidement sur les marchés",
            "explanation": "Les ETF sont cotés en continu et peuvent être achetés ou vendus à tout moment durant les heures de marché."
        },
        {
            "question": "Quelle stratégie d'investissement est associée aux ETF à long terme ?",
            "options": ["Scalping", "Day trading", "Buy and Hold", "Short selling"],
            "answer": "Buy and Hold",
            "explanation": "Le Buy and Hold consiste à conserver l’ETF sur une longue période pour profiter de la croissance du marché."
        },
        {
            "question": "Quel critère est important pour évaluer la performance d’un ETF ?",
            "options": ["Le spread bid/ask", "Le code ISIN", "La devise de cotation", "Le marché sur lequel il est coté"],
            "answer": "Le spread bid/ask",
            "explanation": "Un spread étroit permet de réduire le coût de transaction et reflète une bonne liquidité."
        },
        {
            "question": "Quel fournisseur propose la gamme iShares ?",
            "options": ["Lyxor", "Vanguard", "Amundi", "BlackRock"],
            "answer": "BlackRock",
            "explanation": "iShares est la marque d’ETF de BlackRock, un des leaders mondiaux de la gestion d’actifs."
        },
        {
            "question": "Quel ETF est conçu pour profiter d'une baisse du marché ?",
            "options": ["ETF sectoriel", "ETF à levier", "ETF inverse", "ETF capitalisant"],
            "answer": "ETF inverse",
            "explanation": "Un ETF inverse réplique la performance inverse de l’indice, idéal pour les stratégies de couverture."
        },
        {
            "question": "Quelle est l’utilité d’un ETF thématique ?",
            "options": ["Suivre la performance des devises", "Miser sur une tendance sectorielle", "Couvrir un portefeuille obligataire", "Réduire les frais de gestion"],
            "answer": "Miser sur une tendance sectorielle",
            "explanation": "Les ETF thématiques ciblent des secteurs ou tendances spécifiques comme l’IA ou l’énergie verte."
        },
        {
            "question": "Quelle est la méthode de réplication d’un ETF qui détient physiquement les actifs ?",
            "options": ["Réplication synthétique", "Réplication directe", "Réplication structurelle", "Réplication inverse"],
            "answer": "Réplication directe",
            "explanation": "La réplication directe (physique) implique l'achat réel des titres composant l’indice."
        },
        {
            "question": "Un ETF capitalisant :",
            "options": ["Distribue régulièrement des dividendes", "Ne verse pas de dividendes", "Investit uniquement en obligations", "Exige un capital élevé"],
            "answer": "Ne verse pas de dividendes",
            "explanation": "Les ETF capitalisants réinvestissent les dividendes au lieu de les verser aux investisseurs."
        },
        {
            "question": "Quel est un inconvénient potentiel d’un ETF peu échangé ?",
            "options": ["Frais de gestion élevés", "Tracking error réduit", "Risque de liquidité", "Surperformance de l’indice"],
            "answer": "Risque de liquidité",
            "explanation": "Un ETF peu échangé peut être plus difficile à vendre sans impact sur le prix."
        },
        {
            "question": "Quel indicateur mesure la fidélité d’un ETF à son indice ?",
            "options": ["Sharpe ratio", "Beta", "Tracking error", "Alpha"],
            "answer": "Tracking error",
            "explanation": "La tracking error mesure l'écart entre la performance de l’ETF et celle de son indice."
        },
        {
            "question": "Un ETF distribuant convient particulièrement à :",
            "options": ["Un investisseur cherchant des revenus réguliers", "Un investisseur à long terme", "Une entreprise", "Un trader à haute fréquence"],
            "answer": "Un investisseur cherchant des revenus réguliers",
            "explanation": "Un ETF distribuant reverse les dividendes, ce qui attire les investisseurs orientés revenu."
        },
        {
            "question": "Quelle combinaison décrit le portefeuille 60/40 ?",
            "options": ["60 % actions, 40 % obligations", "60 % cash, 40 % immobilier", "60 % ETF, 40 % fonds classiques", "60 % Europe, 40 % US"],
            "answer": "60 % actions, 40 % obligations",
            "explanation": "La stratégie 60/40 est un classique en gestion de portefeuille équilibrée."
        },
        {
            "question": "Quel est l’avantage principal des ETF face aux fonds classiques ?",
            "options": ["Frais d’entrée élevés", "Rendement garanti", "Cotation continue", "Distribution obligatoire"],
            "answer": "Cotation continue",
            "explanation": "Les ETF se négocient en continu contrairement aux fonds classiques qui ne s’achètent qu’une fois par jour."
        },
        {
            "question": "Un ETF peut-il suivre un indice obligataire ?",
            "options": ["Oui", "Non", "Uniquement en réplication synthétique", "Seulement aux USA"],
            "answer": "Oui",
            "explanation": "Il existe des ETF qui répliquent des indices d’obligations (souveraines, corporate, etc.)."
        },
        {
            "question": "Quel est le rôle d’un ETF dans une stratégie de couverture ?",
            "options": ["Augmenter l'exposition", "Remplacer les fonds actifs", "Réduire le risque", "Optimiser la fiscalité"],
            "answer": "Réduire le risque",
            "explanation": "Certains ETF comme les ETF inverses sont utilisés pour couvrir un portefeuille contre la baisse du marché."
        },
        {
            "question": "Quel critère permet de juger de la popularité d’un ETF ?",
            "options": ["Nom du fournisseur", "Date de création", "Volume quotidien", "Type d'indice"],
            "answer": "Volume quotidien",
            "explanation": "Un volume élevé reflète une forte liquidité et un intérêt du marché."
        },
        {
            "question": "Quel ETF réplique la performance de l’indice CAC 40 ?",
            "options": ["Amundi MSCI World", "Xtrackers Emerging", "Lyxor CAC 40", "Vanguard Europe"],
            "answer": "Lyxor CAC 40",
            "explanation": "L’ETF Lyxor CAC 40 suit l’indice phare de la Bourse de Paris."
        },
        {
            "question": "Pourquoi un investisseur choisirait-il un ETF synthétique ?",
            "options": ["Meilleure transparence", "Moins de frais", "Répliquer un indice difficile d’accès", "Distribution automatique"],
            "answer": "Répliquer un indice difficile d’accès",
            "explanation": "Les ETF synthétiques sont utiles lorsque l’indice contient des titres illiquides ou inaccessibles."
        },
        {
            "question": "Quelle société gère les ETF Vanguard ?",
            "options": ["Amundi", "BlackRock", "Vanguard Group", "Lyxor"],
            "answer": "Vanguard Group",
            "explanation": "Vanguard est l’un des plus grands fournisseurs mondiaux d’ETF et de fonds indiciels."
        },
        {
            "question": "Quel type d’ETF est recommandé pour diversifier rapidement ?",
            "options": ["ETF sectoriel", "ETF à levier", "ETF World", "ETF inverse"],
            "answer": "ETF World",
            "explanation": "Un ETF mondial comme MSCI World permet une diversification géographique globale immédiate."
        },
        {
            "question": "Comment appelle-t-on la différence entre prix acheteur et vendeur d’un ETF ?",
            "options": ["Tracking error", "Spread", "Rendement", "Beta"],
            "answer": "Spread",
            "explanation": "Le spread représente la différence entre les prix d’achat et de vente sur le marché."
        },
        {
            "question": "Quel ETF est le plus adapté à un investisseur souhaitant miser sur l’intelligence artificielle ?",
            "options": ["ETF inverse CAC 40", "ETF thématique IA", "ETF obligataire euro", "ETF dividende"],
            "answer": "ETF thématique IA",
            "explanation": "Un ETF thématique IA regroupe des entreprises du secteur de l’intelligence artificielle."
        },
        {
            "question": "Que signifie TER dans le contexte des ETF ?",
            "options": ["Taux d’Équilibre de Risque", "Taux d’Exposition Résiduelle", "Total Expense Ratio", "Taux Effectif Recalculé"],
            "answer": "Total Expense Ratio",
            "explanation": "Le TER est le ratio de frais total prélevé chaque année sur l’actif de l’ETF."
        }, 
        {
            "question": "Quel est l'objectif principal d'un ETF ?",
            "options": [
                "Battre systématiquement la performance de son indice de référence",
                "Répliquer passivement la performance d'un indice ou d'un actif",
                "Proposer une gestion active avec rotation sectorielle",
                "Garantir un rendement fixe comme une obligation"
            ],
            "answer": "Répliquer passivement la performance d'un indice ou d'un actif",
            "explanation": "Les ETF sont conçus pour suivre un indice ou un actif, pas pour le surperformer."
        },
        {
            "question": "Quelle est la principale différence entre un ETF physique et synthétique ?",
            "options": [
                "L'ETF physique utilise des dérivés, l'ETF synthétique détient les actifs",
                "L'ETF physique détient les actifs, l'ETF synthétique utilise des swaps",
                "Les ETF synthétiques ont toujours des frais plus élevés",
                "Les ETF physiques ne répliquent que les indices obligataires"
            ],
            "answer": "L'ETF physique détient les actifs, l'ETF synthétique utilise des swaps",
            "explanation": "La réplication physique implique la détention directe des actifs, tandis que la synthétique utilise des produits dérivés."
        },
        {
            "question": "Quel est un avantage principal d’un ETF ?",
            "options": [
                "Liquidité limitée",
                "Frais élevés",
                "Accessibilité",
                "Performance garantie"
            ],
            "answer": "Accessibilité",
            "explanation": "Les ETF sont accessibles avec un petit capital et peuvent être achetés/vendus en continu."
        },
        {
            "question": "Parmi les éléments suivants, lequel est un type d'ETF ?",
            "options": [
                "ETF garanti",
                "ETF bancaire",
                "ETF inversé",
                "ETF spéculatif"
            ],
            "answer": "ETF inversé",
            "explanation": "L’ETF inversé réplique la baisse de l’indice sous-jacent, il est utile en couverture."
        },
        {
            "question": "Quel est le risque principal d’un ETF synthétique ?",
            "options": [
                "Risque de change",
                "Risque de contrepartie",
                "Risque politique",
                "Risque fiscal"
            ],
            "answer": "Risque de contrepartie",
            "explanation": "L’ETF synthétique dépend de la solidité de la contrepartie dans le contrat de swap."
        },
        {
            "question": "Quelle est la stratégie ‘Buy and Hold’ avec un ETF ?",
            "options": [
                "Vente rapide après achat",
                "Achat et conservation à long terme",
                "Utilisation pour hedging",
                "Achat à crédit"
            ],
            "answer": "Achat et conservation à long terme",
            "explanation": "La stratégie 'Buy and Hold' consiste à conserver l'ETF pour bénéficier de la performance sur le long terme."
        },
        {
            "question": "Quel fournisseur d’ETF est bien connu ?",
            "options": [
                "Morgan Stanley",
                "BlackRock (iShares)",
                "Banque de France",
                "BPI"
            ],
            "answer": "BlackRock (iShares)",
            "explanation": "BlackRock via sa filiale iShares est l’un des plus grands émetteurs d’ETF dans le monde."
        },
        {
            "question": "Quel ETF suit l’indice CAC 40 ?",
            "options": [
                "Xtrackers MSCI",
                "Amundi MSCI World",
                "Lyxor CAC 40",
                "iShares S&P 500"
            ],
            "answer": "Lyxor CAC 40",
            "explanation": "L’ETF Lyxor CAC 40 réplique la performance de l’indice CAC 40 français."
        }
    ],
        
    //  toute la partie venant de deepseek est en dessous
    moyen: [
        {
            "question": "Quel est l'objectif principal d'un ETF ?",
            "options": [
                "Battre systématiquement la performance de son indice de référence",
                "Répliquer passivement la performance d'un indice ou d'un actif",
                "Proposer une gestion active avec rotation sectorielle",
                "Garantir un rendement fixe comme une obligation"
            ],
            "answer": "Répliquer passivement la performance d'un indice ou d'un actif",
            "explanation": "Les ETF sont conçus pour suivre un indice ou un actif, pas pour le surperformer."
        },
        {
            "question": "Quelle est la principale différence entre un ETF physique et synthétique ?",
            "options": [
                "L'ETF physique utilise des dérivés, l'ETF synthétique détient les actifs",
                "L'ETF physique détient les actifs, l'ETF synthétique utilise des swaps",
                "Les ETF synthétiques ont toujours des frais plus élevés",
                "Les ETF physiques ne répliquent que les indices obligataires"
            ],
            "answer": "L'ETF physique détient les actifs, l'ETF synthétique utilise des swaps",
            "explanation": "La réplication physique implique la détention directe des actifs, tandis que la synthétique utilise des produits dérivés."
        },
        {
            "question": "Qu'est-ce que le 'tracking error' d'un ETF ?",
            "options": [
                "L'écart entre la performance de l'ETF et celle de son indice de référence",
                "La différence entre le prix d'achat et de vente de l'ETF",
                "L'erreur de calcul des dividendes distribués",
                "Le délai de règlement des transactions sur ETF"
            ],
            "answer": "L'écart entre la performance de l'ETF et celle de son indice de référence",
            "explanation": "Le tracking error mesure la précision avec laquelle l'ETF suit son indice."
        },
        {
            "question": "Pourquoi les ETF sont-ils considérés comme plus transparents que les fonds mutuels ?",
            "options": [
                "Ils publient quotidiennement leur composition complète",
                "Ils révèlent leurs stratégies de trading algorithmique",
                "Ils fournissent les noms de tous leurs investisseurs",
                "Ils publient en temps réel leurs ordres sur le marché"
            ],
            "answer": "Ils publient quotidiennement leur composition complète",
            "explanation": "La plupart des ETF divulguent leur portefeuille quotidiennement, contrairement aux fonds mutuels."
        },
        {
            "question": "Comment un ETF leveraged 3x maintient-il son effet de levier quotidien ?",
            "options": [
                "En réinvestissant les gains chaque jour via des contrats à terme",
                "En empruntant directement 3 fois son actif net",
                "En utilisant un mix de swaps et d'options exotiques",
                "En appliquant un effet de levier constant sur 1 mois"
            ],
            "answer": "En réinvestissant les gains chaque jour via des contrats à terme",
            "explanation": "Les ETF leveraged recalculent quotidiennement leur exposition, ce qui peut entraîner des écarts importants par rapport à la performance attendue sur le long terme."
        },
        {
            "question": "Quel mécanisme permet aux ETF de maintenir leur parité avec la valeur liquidative ?",
            "options": [
                "Le processus de création/rachat par les teneurs de marché",
                "L'intervention directe de la SEC ou de l'AMF",
                "La synchronisation automatique avec le marché au comptant",
                "L'arbitrage algorithmique haute fréquence obligatoire"
            ],
            "answer": "Le processus de création/rachat par les teneurs de marché",
            "explanation": "Les Authorized Participants créent ou rachètent des blocs d'ETF pour maintenir l'alignement prix/NAV."
        },
        {
            "question": "Dans un ETF obligataire, quel est le principal défi lié au réinvestissement des coupons ?",
            "options": [
                "Le risque de change sur les obligations libellées en devises étrangères",
                "La nécessité de répliquer exactement la duration de l'indice",
                "La gestion des appels anticipés (call risk) sur les corporate bonds",
                "L'impact des taux négatifs sur les obligations souveraines"
            ],
            "answer": "La nécessité de répliquer exactement la duration de l'indice",
            "explanation": "Les flux de coupons doivent être réinvestis en respectant la duration et la convexité de l'indice."
        },
        {
            "question": "Pourquoi les ETF sur matières premières utilisent-ils majoritairement des contrats à terme ?",
            "options": [
                "Pour éviter les coûts de stockage physique",
                "Pour bénéficier d'un effet de levier réglementaire",
                "Car c'est la seule méthode autorisée par la CFTC",
                "Pour contourner les limites de position sur le marché spot"
            ],
            "answer": "Pour éviter les coûts de stockage physique",
            "explanation": "L'utilisation de contrats à terme élimine les coûts logistiques liés au stockage des matières premières physiques."
        }
    ],
    avance: [
        
        {
            "question": "Quel est l'impact du 'contango' sur un ETF pétrolier utilisant des futures ?",
            "options": [
                "Une érosion de la performance lorsque les contrats longs sont plus chers",
                "Une amplification des gains en cas de hausse des prix spot",
                "Une neutralisation automatique par le mécanisme de création/rachat",
                "Une conversion obligatoire en ETF physique après 3 mois"
            ],
            "answer": "Une érosion de la performance lorsque les contrats longs sont plus chers",
            "explanation": "Le contango force un coût de report lorsque les contrats à échéance lointaine sont plus chers que ceux à courte échéance."
        },
        {
            "question": "Comment un ETF inverse -1x sur le S&P 500 génère-t-il son rendement quotidien ?",
            "options": [
                "En vendant à découvert des futures sur l'indice",
                "En achetant des put options ATM quotidiennement",
                "En utilisant des swaps avec des banques contreparties",
                "En répliquant exactement le portefeuille de l'indice en positions courtes"
            ],
            "answer": "En utilisant des swaps avec des banques contreparties",
            "explanation": "La majorité des ETF inversés utilisent des swaps pour obtenir l'exposition inverse, avec un recalibrage quotidien."
        },
        {
            "question": "Quel risque spécifique affecte les ETF synthétiques en période de stress de marché ?",
            "options": [
                "Le risque de contrepartie sur les swaps",
                "Le risque de change sur le panier de substitution",
                "Le risque de liquidité sur l'indice de référence",
                "Le risque de taux sur les obligations de collateral"
            ],
            "answer": "Le risque de contrepartie sur les swaps",
            "explanation": "En cas de défaillance de la contrepartie au swap, l'ETF pourrait ne pas répliquer correctement l'indice."
        },
        {
            "question": "Pourquoi les ETF smart beta sur facteurs présentent-ils souvent un turnover élevé ?",
            "options": [
                "A cause du rééquilibrage fréquent pour maintenir l'exposition au facteur",
                "En raison des arbitrages fréquents par les teneurs de marché",
                "A cause des appels de marge sur les positions en derivatives",
                "En raison des rotations sectoriales imposées par la régulation"
            ],
            "answer": "A cause du rééquilibrage fréquent pour maintenir l'exposition au facteur",
            "explanation": "Les stratégies factorielles nécessitent des rééquilibrages réguliers qui génèrent des coûts de transaction."
        },
        {
            "question": "Quelle technique permet aux ETF obligataires de gérer les échéances multiples ?",
            "options": [
                "Le sampling optimisé sur les obligations les plus liquides",
                "Le lissage des coupons via des swaps de taux",
                "La réplication synthétique totale avec un seul contrat",
                "L'utilisation exclusive de zéro-coupons"
            ],
            "answer": "Le sampling optimisé sur les obligations les plus liquides",
            "explanation": "Les ETF utilisent souvent un échantillon représentatif pour éviter de détenir toutes les lignes illiquides."
        },
        {
            "question": "Comment les ETF thématiques sur l'IA diffèrent-ils structurellement des ETF sectoriels classiques ?",
            "options": [
                "Ils utilisent des algorithmes de machine learning pour sélectionner les titres",
                "Leur univers d'investissement traverse plusieurs secteurs GICS",
                "Ils répliquent des indices construits par des fonds quantitatifs",
                "Ils combinent positions longues et courtes dans le même ETF"
            ],
            "answer": "Leur univers d'investissement traverse plusieurs secteurs GICS",
            "explanation": "Les ETF thématiques ciblent des tendances qui couvrent généralement plusieurs secteurs traditionnels."
        },
        {
            "question": "Quel est l'avantage principal d'un ETF à capitalisation versus distributif pour un investisseur non-résident ?",
            "options": [
                "Eviter la retenue à la source sur les dividendes",
                "Bénéficier d'un effet de levier fiscal",
                "Réduire le tracking error grâce au réinvestissement interne",
                "Accéder à des produits dérivés plus sophistiqués"
            ],
            "answer": "Eviter la retenue à la source sur les dividendes",
            "explanation": "Les ETF capitalisants réinvestissent les dividendes sans distribution, évitant ainsi les retenues fiscales."
        },
        {
            "question": "Pourquoi les ETF Bitcoin en Europe utilisent-ils majoritairement la réplication synthétique ?",
            "options": [
                "Pour contourner l'interdiction réglementaire de détention directe",
                "A cause des coûts élevés de stockage physique sécurisé",
                "Pour bénéficier d'un traitement fiscal plus favorable",
                "A cause de l'illiquidité des marchés spot de crypto"
            ],
            "answer": "Pour contourner l'interdiction réglementaire de détention directe",
            "explanation": "La régulation européenne interdit aux OPCVM de détenir directement des cryptos, d'où l'usage de swaps."
        },
        {
            "question": "Quel mécanisme protège les investisseurs dans un ETF synthétique full collateralized ?",
            "options": [
                "Le collatéral est détenu par un tiers indépendant",
                "Les swaps sont garantis par la banque centrale",
                "Le panier de substitution est négociable en continu",
                "La contrepartie reverse un spread fixe quotidien"
            ],
            "answer": "Le collatéral est détenu par un tiers indépendant",
            "explanation": "Le collatéral (généralement des obligations) est séquestré pour couvrir 100% de l'exposition."
        },
        {
            "question": "Comment les ETF à gestion active contournent-ils l'obligation de transparence quotidienne ?",
            "options": [
                "En utilisant des compartiments opaques sous forme de fonds à compartiments",
                "En ne publiant que les 10 principales positions",
                "En ayant une dérogation spécifique de l'ESMA",
                "En se classant comme fonds privés plutôt qu'OPCVM"
            ],
            "answer": "En ne publiant que les 10 principales positions",
            "explanation": "Les ETF actifs bénéficient souvent de règles de divulgation allégées par rapport aux ETF passifs."
        },
        {
            "question": "Quelle innovation récente permet aux ETF de répliquer des stratégies alternatives ?",
            "options": [
                "L'utilisation de swaps sur indices customisés",
                "L'intégration de positions en private equity",
                "La réplication physique de contrats OTC non standardisés",
                "Le pairing avec des hedge funds via des feeder funds"
            ],
            "answer": "L'utilisation de swaps sur indices customisés",
            "explanation": "Les fournisseurs créent des indices sur-mesure répliqués via swaps pour des stratégies complexes."
        },
        {
            "question": "Pourquoi les ETF ESG appliquent-ils souvent des filtres controversés sur les secteurs ?",
            "options": [
                "Pour respecter les critères d'exclusion stricts des investisseurs institutionnels",
                "A cause des limitations techniques des plateformes de trading",
                "Pour éviter le surcoût des analyses fondamentales",
                "En raison des obligations légales de diversification"
            ],
            "answer": "Pour respecter les critères d'exclusion stricts des investisseurs institutionnels",
            "explanation": "Les exclusions sectorielles (armes, tabac, etc.) répondent aux chartes ESG des grands investisseurs."
        },
        {
            "question": "Quel est l'impact du mécanisme de création/rachat sur la liquidité secondaire d'un ETF ?",
            "options": [
                "Il permet aux teneurs de marché d'arbitrer les écarts prix/NAV",
                "Il force une liquidité minimale réglementaire",
                "Il génère des frais de transaction supplémentaires",
                "Il limite la participation des investisseurs particuliers"
            ],
            "answer": "Il permet aux teneurs de marché d'arbitrer les écarts prix/NAV",
            "explanation": "Ce mécanisme assure que le prix de l'ETF reste proche de sa valeur liquidative intrinsèque."
        },
        {
            "question": "Comment les ETF ultra-short obligataires gèrent-ils le risque de taux ?",
            "options": [
                "En limitant la duration du portefeuille à moins de 1 an",
                "En utilisant exclusivement des floater notes",
                "En couvrant avec des swaps de taux pay-fixed",
                "En diversifiant sur plusieurs devises"
            ],
            "answer": "En limitant la duration du portefeuille à moins de 1 an",
            "explanation": "Une duration très courte minimise la sensibilité aux variations de taux."
        },
        {
            "question": "Quelle particularité distingue les ETF multi-actifs des fonds traditionnels ?",
            "options": [
                "Ils peuvent ajuster dynamiquement leur allocation sans création/rachat",
                "Ils sont obligatoirement synthétiques",
                "Ils combinent des ETF physiques et des dérivés",
                "Ils répliquent des indices alternatifs pondérés par la volatilité"
            ],
            "answer": "Ils peuvent ajuster dynamiquement leur allocation sans création/rachat",
            "explanation": "Ces ETF utilisent des mécanismes innovants pour modifier leur exposition sans processus de création/rachat."
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
import React, { useState, useEffect } from "react";
import "./contact.css";

const slides = [
    { question: "Quelle est la formule du Dirty Price ?", answer: "Dirty Price = Clean Price + Accrued Interest"},
    { question: "Comment calcule-t-on les Intérêts Courus (Accrued Interest) ?",answer: "Accrued Interest = (Coupon × Nominal × Jours écoulés) / Nombre total de jours dans l’année"},
    { question: "Quelle est la formule du Term Money dans un repo ?",answer: "Term Money = (Face Amount × Settlement Price / 100) + (Face Amount × Accrued Interest / 100)"},
    {question: "Comment calcule-t-on le Repo Interest ?", answer: "Repo Interest = Term Money × Repo Rate × (Nombre de jours / 360)"  },
    { question: "Comment calcule-t-on le Wired Amount dans un repo ?",answer: "Wired Amount = Term Money + Repo Interest"},
    { question: "Comment un haircut affecte-t-il le montant financé d’un repo ?", answer: "Montant financé = Nominal × (1 - Haircut)"},
    { question: "Quelle est la formule du ratio de liquidité à court terme (LCR) ?",answer: "LCR = (Encours d'actifs liquides de haute qualité / Sorties nettes de trésorerie sur les 30 jours suivants) × 100" },
    { question: "Quelle est la formule du ratio de liquidité à long terme (NSFR) ?", answer: "NSFR = (Montant de financement stable disponible / Montant de financement stable exigé) × 100" },
    { question: "Pourquoi un haircut est appliqué dans une transaction repo ?", answer: "Un haircut réduit la valeur du financement accordé par rapport à la valeur nominale du collatéral afin de couvrir le risque de variation des prix du titre sous-jacent."},
    { question: "Comment un investisseur peut-il arbitrer entre le repo et le securities lending ?", answer: "En combinant les deux pour maximiser son levier et optimiser son portefeuille d’actifs : le lending permet de maximiser l’utilisation des titres, tandis que le repo optimise le financement."},
    { question: "Qu'est-ce qu'un repo ?", answer: "Un repo (ou 'pension livrée') est une transaction où une partie vend un actif (généralement des titres à revenu fixe) à une autre partie avec l'engagement de le racheter à un prix différent à une date future. Il s'agit d'une forme de prêt sécurisé, où l'actif sert de garantie." },
    { question: "À quoi sert un repo ?", answer: "Le repo permet :\n\n- D'investir de l'argent de manière sécurisée.\n- D'emprunter de l'argent à un taux avantageux.\n- D'améliorer le rendement des investissements en titres.\n- De couvrir des positions courtes." },
    { question: "Quel est le rôle du repo sur les marchés financiers ?", answer: "Le repo est essentiel pour :\n\n- Fournir des financements à court terme.\n- Stabiliser le marché monétaire.\n- Faciliter les opérations des banques centrales.\n- Financer les investisseurs à effet de levier.\n- Couvrir les émissions de dette." },
    { question: "Quelle est la taille du marché des repos ?", answer: "Le marché des repos est énorme, avec des encours estimés à plus de 15 000 milliards d'euros au niveau mondial. En Europe, il représente environ 7 000 milliards d'euros." },
    { question: "Qui sont les principaux utilisateurs du marché des repos ?", answer: "Les principaux utilisateurs sont :\n\n- Les intermédiaires de marché (banques d'investissement).\n- Les investisseurs en quête de placements sécurisés (fonds monétaires, banques centrales).\n- Les fonds spéculatifs et autres investisseurs institutionnels." },
    { question: "Quels types d'actifs sont utilisés comme garantie dans les repos ?", answer: "Les actifs les plus couramment utilisés sont :\n\n- Les obligations d'État.\n- Les obligations d'agences supranationales.\n- Les obligations d'entreprises.\n- Les actions (moins fréquentes)." },
    { question: "Quelles sont les échéances typiques des repos ?", answer: "Les repos sont généralement à court terme, avec une majorité de transactions à un jour ou à moins d'un mois. Cependant, il existe aussi des repos à plus long terme (1 à 3 mois)." },
    { question: "Qu'est-ce que le 'General Collateral' (GC) ?", answer: "Le GC est un panier de titres qui peuvent être substitués les uns aux autres dans une transaction repo, car ils ont des caractéristiques similaires. Le taux GC est le taux moyen pour ces titres." },
    { question: "Qu'est-ce qu'un 'spécial' sur le marché des repos ?", answer: "Un 'spécial' est un titre qui est très demandé sur le marché des repos, ce qui fait que son taux de repo est inférieur au taux GC. Cela reflète une pénurie temporaire de ce titre." },
    { question: "Qu'est-ce que la 'réhypothèque' de garantie ?", answer: "La réhypothèque est la réutilisation de la garantie reçue dans une transaction repo. Cela permet au prêteur de réutiliser les titres pour d'autres transactions." },
    { question: "Quelle est la différence entre une transaction de rachat et un buy/sell-back ?", answer: "Une transaction de rachat est documentée et permet des appels de marge.\nUn buy/sell-back peut être non documenté et ne permet pas d'appels de marge." },
    { question: "Qu'est-ce qu'un repo ouvert ?", answer: "Un repo ouvert n'a pas de date d'échéance fixe et peut être résilié à tout moment par l'une des parties." },
    { question: "Quelle est la différence entre un repo et un prêt de titres ?", answer: "Le repo est principalement utilisé pour emprunter ou prêter de l'argent.\nLe prêt de titres est utilisé pour emprunter ou prêter des titres." },
    { question: "Le repo en Europe est-il le même qu'aux États-Unis ?", answer: "Non, il y a des différences juridiques et structurelles. En Europe, le repo implique un transfert de propriété, tandis qu'aux États-Unis, il repose sur un gage." },
    { question: "Le repo est-il sans risque ?", answer: "Non, le repo réduit les risques de crédit et de liquidité, mais il n'est pas sans risque. La gestion prudente des contreparties et des garanties est essentielle." },
    { question: "Le repo encourage-t-il les prêts à des contreparties risquées ?", answer: "Non, le repo ne supprime pas le risque de contrepartie. Il est utilisé pour réduire le risque, pas pour justifier des prêts à des contreparties risquées." },
    { question: "Qui réglemente le marché des repos ?", answer: "Le marché des repos est réglementé par diverses autorités, notamment les banques centrales et les régulateurs financiers, en fonction des juridictions." },
    { question: "Pourquoi est-il important de documenter les repos ?", answer: "La documentation est cruciale pour garantir les droits des parties en cas de défaut et pour permettre la compensation des obligations." },
    { question: "Qu'est-ce que le GMRA ?", answer: "Le GMRA (Global Master Repurchase Agreement) est un contrat standard utilisé pour les transactions de repo, publié par l'ICMA." },
    { question: "Comment les parties s'assurent-elles d'avoir suffisamment de garanties ?", answer: "Les parties sélectionnent des garanties de haute qualité, appliquent des 'haircuts' (déductions) et procèdent à des appels de marge fréquents." },
    { question: "Qu'est-ce qu'un 'haircut' ?", answer: "Un 'haircut' est une déduction appliquée à la valeur de marché de la garantie pour tenir compte des risques de liquidité et de crédit." },
    { question: "Qui reçoit les coupons ou dividendes sur les titres utilisés comme garantie ?", answer: "L'acheteur reçoit les coupons ou dividendes, mais il doit compenser le vendeur pour ces paiements." },
    { question: "Qui peut exercer les droits de vote sur les actions utilisées comme garantie ?", answer: "L'acheteur, en tant que propriétaire légal des titres, peut exercer les droits de vote, mais il n'est pas obligé de suivre les souhaits du vendeur." },
    { question: "Qu'est-ce qu'un repo tripartite ?", answer: "Un repo tripartite implique un agent tiers qui gère la sélection et la gestion des garanties, ainsi que les paiements et les livraisons." },
    { question: "Que se passe-t-il si une partie ne livre pas les garanties ?", answer: "En cas de défaut de livraison, les parties peuvent résilier la transaction ou négocier une solution. Des pénalités peuvent s'appliquer." },
    { question: "Que se passe-t-il en cas de défaut dans un repo ?", answer: "En cas de défaut, les obligations sont compensées, et les garanties sont liquidées pour couvrir les pertes." },
    { question: "Que fait une CCP (chambre de compensation) dans un repo ?", answer: "Une CCP agit comme intermédiaire entre les parties, garantissant les transactions et nettoie les obligations pour réduire les risques." },
    { question: "Que se passe-t-il avec les repos lorsque les taux d'intérêt deviennent négatifs ?", answer: "Les taux de repo peuvent devenir négatifs, ce qui signifie que l'acheteur paie effectivement des intérêts au vendeur." },
    { question: "Quelle a été la réponse réglementaire à la crise financière de 2008 sur le marché des repos ?", answer: "Les régulateurs ont renforcé la transparence, introduit des ratios de liquidité et de levier, et encouragé la compensation centralisée." },
    { question: "Qu'est-ce que la vente à découvert et quel est le rôle du repo ?", answer: "La vente à découvert consiste à vendre un titre que l'on ne possède pas, en l'empruntant via un repo ou un prêt de titres." },
    { question: "Les repos permettent-ils un effet de levier infini ?", answer: "En théorie, oui, mais en pratique, les limites de crédit et les régulations empêchent un effet de levier infini." },
    { question: "Les changements de haircuts exacerbent-ils la procyclicité ?", answer: "Oui, les changements de haircuts peuvent amplifier les cycles économiques en augmentant ou en réduisant la liquidité disponible." },
    { question: "Les banques qui prêtent via des repos reçoivent-elles un traitement préférentiel ?", answer: "Non, les banques ne reçoivent pas de traitement préférentiel. Les garanties sont simplement utilisées pour réduire les risques." },
    { question: "Le repo 'encombre'-t-il les actifs d'un emprunteur ?", answer: "Non, le repo ne réduit pas la disponibilité des actifs pour les autres créanciers, car les actifs restent au bilan de l'emprunteur." },
    { question: "Une 'ruée sur les repos' a-t-elle causé la crise financière de 2007 ?", answer: "Non, bien que les repos aient joué un rôle, la crise a été causée par une combinaison de facteurs, notamment les subprimes et la défaillance des marchés de crédit." },
    { question: "Le repo est-il une forme de 'shadow banking' ?", answer: "Le repo est principalement utilisé par des entités régulées, mais il peut être utilisé dans le cadre du 'shadow banking' par des entités non régulées." },
    { question: "Le repo est-il utilisé pour retirer des actifs du bilan ?", answer: "Non, les actifs vendus dans un repo restent au bilan du vendeur, car il s'engage à les racheter." },
    { question: "Un taux de repo pourrait-il remplacer le LIBOR ou l'EURIBOR ?", answer: "Oui, les taux de repo, en particulier le taux GC, sont considérés comme des alternatives potentielles aux indices de taux interbancaires." },
    { question: "Comment MiFID II et MiFIR s'appliquent-ils au marché des repos ?", answer: "MiFID II et MiFIR imposent des obligations de transparence et de reporting, mais les repos sont partiellement exemptés de certaines règles." },
    { question: "Comment cartographier le marché interbancaire des repos en Europe ?", answer: "Le marché des repos en Europe peut être cartographié en fonction des étapes de la transaction : négociation, compensation, gestion des garanties et règlement." }
];

const Contact = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slide-container">
            <h3>Question {currentSlide + 1} / {slides.length}: {slides[currentSlide].question}</h3>
            <p>{slides[currentSlide].answer}</p>
        </div>
    );
};

export default Contact;
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
        }
    ],
    moyen: [
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
        },
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
        }
    ],
    avance: [
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
                <p className="success">🚀 Excellent travail ! Vous maîtrisez bien Les CONCEPTS DELTA 1 !</p>
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
                    <h1 className="title">💡 Bienvenue au QCM DELTA 1 !</h1>
                    <h3 className="subtitle">🔹 Niveau : {level.toUpperCase()}</h3>
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
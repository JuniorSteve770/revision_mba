import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

import "./QCMStyles.css";

const questions = {
    basic: [
        
        
            {
                "question": "Quel est le rôle principal d’un FX Market Making Trader ?",
                "options": [
                    "Exécuter uniquement des ordres d’achat",
                    "Fournir de la liquidité en offrant des prix d’achat et de vente",
                    "Suivre les performances des hedge funds",
                    "Fixer les taux de change officiels"
                ],
                "answer": "Fournir de la liquidité en offrant des prix d’achat et de vente",
                "explanation": "Un market maker offre continuellement des prix bid/ask pour assurer la liquidité du marché."
            },
            {
                "question": "Quelle est la principale différence entre le spot FX et le forward FX ?",
                "options": [
                    "Spot FX est réglé immédiatement, Forward FX est réglé à l’échéance",
                    "Forward FX est utilisé uniquement pour les devises émergentes",
                    "Spot FX est réglé sous 2 jours ouvrés, Forward FX à une date future définie",
                    "Forward FX ne permet pas de couvrir le risque de change"
                ],
                "answer": "Spot FX est réglé sous 2 jours ouvrés, Forward FX à une date future définie",
                "explanation": "Les transactions Spot FX sont réglées rapidement, alors que les Forward FX sont des contrats à terme."
            },
            {
                "question": "Quel est l’objectif principal d’un FX Swap ?",
                "options": [
                    "Spéculer sur l’évolution des taux",
                    "Convertir une devise en une autre pour une durée déterminée",
                    "Optimiser la gestion de trésorerie et des liquidités",
                    "Réaliser des arbitrages sur les taux d’intérêt"
                ],
                "answer": "Optimiser la gestion de trésorerie et des liquidités",
                "explanation": "Un FX Swap permet d’échanger deux devises avec une revente à terme, souvent utilisée pour la gestion de trésorerie."
            },
            {
                "question": "Que signifie 'NDF' dans le marché Forex ?",
                "options": [
                    "New Dynamic Forex",
                    "National Deposit Fund",
                    "Non-Deliverable Forward",
                    "Net Dollar Flow"
                ],
                "answer": "Non-Deliverable Forward",
                "explanation": "Les NDF (Non-Deliverable Forwards) sont des contrats à terme réglés en cash sur des devises non convertibles."
            },
            {
                "question": "À quoi sert un ordre Take Profit en trading FX ?",
                "options": [
                    "Limiter les pertes",
                    "Automatiser l’exécution d’un ordre",
                    "Clôturer une position lorsqu’un prix cible est atteint",
                    "Convertir un swap en NDF"
                ],
                "answer": "Clôturer une position lorsqu’un prix cible est atteint",
                "explanation": "Un Take Profit ferme une position lorsque le prix atteint un niveau prédéfini."
            },
            {
                "question": "Que signifie un ordre If Done en gestion d’ordres ?",
                "options": [
                    "Un ordre conditionnel qui devient actif après l’exécution d’un autre ordre",
                    "Un ordre qui expire immédiatement s’il n’est pas exécuté",
                    "Un ordre exécuté manuellement par le trader",
                    "Une stratégie utilisée uniquement pour les swaps"
                ],
                "answer": "Un ordre conditionnel qui devient actif après l’exécution d’un autre ordre",
                "explanation": "Un If Done Order devient actif uniquement après l’exécution d’un premier ordre."
            },
            {
                "question": "Pourquoi le slippage est-il un problème en trading électronique ?",
                "options": [
                    "Il empêche l’exécution des ordres",
                    "Il cause un écart entre le prix demandé et le prix exécuté",
                    "Il empêche l’accès aux plateformes de trading",
                    "Il est uniquement lié au trading manuel"
                ],
                "answer": "Il cause un écart entre le prix demandé et le prix exécuté",
                "explanation": "Le slippage est une différence entre le prix voulu et le prix exécuté, souvent dû à la volatilité ou à la latence."
            },
            {
                "question": "Quelle est la principale plateforme utilisée en trading FX électronique ?",
                "options": [
                    "MetaTrader 4",
                    "EBS, Reuters, Currenex, FXall",
                    "Bloomberg Terminal",
                    "Coinbase"
                ],
                "answer": "EBS, Reuters, Currenex, FXall",
                "explanation": "Les traders institutionnels utilisent EBS, Reuters, Currenex, FXall pour exécuter des ordres."
            },
            {
                "question": "Quelle est la fonction principale du protocole FIX en trading électronique ?",
                "options": [
                    "Automatiser la tarification",
                    "Suivre les performances des traders",
                    "Standardiser l’échange d’ordres et de confirmations de trading",
                    "Remplacer les contrats à terme"
                ],
                "answer": "Standardiser l’échange d’ordres et de confirmations de trading",
                "explanation": "FIX (Financial Information Exchange) permet d'échanger des ordres et confirmations entre participants du marché."
            },
            {
                "question": "Quel est l’objectif d’un algorithme de hedging en trading FX ?",
                "options": [
                    "Augmenter la volatilité",
                    "Réduire les coûts de transaction",
                    "Couvrir les expositions aux fluctuations des devises",
                    "Augmenter les profits"
                ],
                "answer": "Couvrir les expositions aux fluctuations des devises",
                "explanation": "Le hedging réduit l’exposition au risque de change en compensant les positions ouvertes."
            }
        
    ],
    moyen: [ 
        
            {
                "question": "Qu'est-ce que le Straight Through Processing (STP) et pourquoi est-il crucial dans le trading électronique ?",
                "options": [
                    "Un processus manuel de validation des transactions",
                    "Une méthode de trading automatisée sans intervention humaine",
                    "Un protocole de communication interbancaire",
                    "Une stratégie de gestion du risque"
                ],
                "answer": "Une méthode de trading automatisée sans intervention humaine",
                "explanation": "Le STP permet le traitement automatique des transactions sans intervention humaine, réduisant ainsi les erreurs et améliorant l'efficacité opérationnelle."
            },
            {
                "question": "Comment fonctionne un cycle de vie d’une transaction Forex du Front Office au Back Office ?",
                "options": [
                    "La transaction est confirmée et clôturée immédiatement",
                    "Elle passe par les étapes du Front Office, Middle Office et Back Office",
                    "Elle est validée uniquement par le département de compliance",
                    "Elle ne nécessite pas de validation après l’exécution"
                ],
                "answer": "Elle passe par les étapes du Front Office, Middle Office et Back Office",
                "explanation": "Une transaction suit plusieurs étapes : exécution au Front Office, contrôle des risques au Middle Office, et règlement au Back Office."
            },
            {
                "question": "Quels sont les principaux défis rencontrés dans l’intégration des plateformes de trading FX et Fixed Income ?",
                "options": [
                    "Interopérabilité entre OMS, EMS et systèmes de règlement",
                    "Absence de connectivité entre les banques",
                    "Difficulté à obtenir les taux de marché en temps réel",
                    "Trop de régulations bloquent le trading électronique"
                ],
                "answer": "Interopérabilité entre OMS, EMS et systèmes de règlement",
                "explanation": "Les défis incluent l’intégration entre les plateformes de gestion des ordres (OMS), d'exécution (EMS) et les systèmes de règlement."
            },
            {
                "question": "Quelles différences y a-t-il entre le protocole FIX et les APIs propriétaires dans le trading électronique ?",
                "options": [
                    "FIX est un protocole standardisé, les APIs sont spécifiques à chaque plateforme",
                    "FIX est plus lent que les APIs",
                    "Les APIs sont utilisées uniquement pour les actions",
                    "FIX est interdit en trading haute fréquence"
                ],
                "answer": "FIX est un protocole standardisé, les APIs sont spécifiques à chaque plateforme",
                "explanation": "FIX est un standard d'échange d'ordres utilisé dans l'industrie, tandis que les APIs sont propres à chaque fournisseur de liquidité."
            },
            {
                "question": "Quels sont les principaux types de messages FIX utilisés en trading FX et Fixed Income ?",
                "options": [
                    "35=D (Nouvel ordre), 35=8 (Exécution), 35=9 (Annulation), 35=AI (Allocation)",
                    "35=A (Acceptation de l’ordre), 35=B (Rejet de l’ordre), 35=C (Modification de l’ordre)",
                    "35=1 (Demande de cotation), 35=2 (Ordre en attente), 35=3 (Ordre clôturé)",
                    "35=G (Trade annulé), 35=H (Trade révisé), 35=I (Trade exécuté)"
                ],
                "answer": "35=D (Nouvel ordre), 35=8 (Exécution), 35=9 (Annulation), 35=AI (Allocation)",
                "explanation": "Le protocole FIX utilise des messages spécifiques pour exécuter, modifier et confirmer les transactions."
            },
            {
                "question": "Comment fonctionne le Netting des transactions en FX et en obligations (FI) ?",
                "options": [
                    "Il regroupe plusieurs transactions pour minimiser le règlement en cash",
                    "Il accélère l’exécution des ordres de marché",
                    "Il garantit un prix d'exécution unique pour tous les ordres",
                    "Il empêche la contrepartie d’annuler une transaction"
                ],
                "answer": "Il regroupe plusieurs transactions pour minimiser le règlement en cash",
                "explanation": "Le Netting permet de réduire les flux de règlement en consolidant les transactions opposées."
            },
            {
                "question": "Quels sont les principaux risques opérationnels dans un processus STP et comment les gérer ?",
                "options": [
                    "Rejets de transactions, erreurs de mapping, latence des systèmes",
                    "Manque de régulation, absence de trading électronique",
                    "Fluctuations du marché, impact des taux d’intérêt",
                    "Manque de liquidité, interdiction des swaps de devises"
                ],
                "answer": "Rejets de transactions, erreurs de mapping, latence des systèmes",
                "explanation": "Les risques STP incluent les erreurs de transmission, les erreurs de pricing et les pannes informatiques."
            },
            {
                "question": "Quelle est la différence entre une exécution voice trading et une exécution électronique (algo trading) ?",
                "options": [
                    "Le voice trading est manuel, l’algo trading est automatisé",
                    "Le voice trading est plus rapide que l’algo trading",
                    "L’algo trading est réservé aux banques centrales",
                    "Le voice trading est utilisé uniquement pour les options"
                ],
                "answer": "Le voice trading est manuel, l’algo trading est automatisé",
                "explanation": "Le voice trading implique une exécution manuelle par téléphone, tandis que l'algo trading est entièrement automatisé."
            },
            {
                "question": "Comment gérer les échecs de règlement (Settlement Fails) dans un environnement STP ?",
                "options": [
                    "Vérification automatique, workflows de correction rapide, pénalités pour fails répétés",
                    "Suppression automatique des transactions concernées",
                    "Réexécution immédiate des ordres sans vérification",
                    "Attente du règlement manuel par les contreparties"
                ],
                "answer": "Vérification automatique, workflows de correction rapide, pénalités pour fails répétés",
                "explanation": "Les échecs de règlement sont gérés via des processus automatiques de vérification et de correction."
            },
            {
                "question": "Quels sont les principaux KPI à suivre pour mesurer l’efficacité d’un système STP ?",
                "options": [
                    "Taux de STP, latence d’exécution, taux d’erreur",
                    "Volume des transactions, nombre de traders, cours du marché",
                    "Nombre d’ordres annulés, montant des commissions",
                    "Temps d’attente des ordres en file d’attente"
                ],
                "answer": "Taux de STP, latence d’exécution, taux d’erreur",
                "explanation": "Les principaux KPI incluent le taux d'automatisation des transactions, la rapidité d'exécution et le nombre d'erreurs."
            }
       
        
            ],
    avance: [
        {
            "question": "Qu'est-ce que le Yield-to-Maturity (YTM) ?",
            "options": [
                "Le taux d'intérêt appliqué aux obligations de court terme",
                "Le taux d'actualisation qui égalise la valeur actuelle des flux futurs à son prix de marché",
                "Le taux de rendement moyen des actions d’une entreprise",
                "Le taux de refinancement appliqué par la banque centrale"
            ],
            "answer": "Le taux d'actualisation qui égalise la valeur actuelle des flux futurs à son prix de marché",
            "explanation": "Le YTM représente le taux auquel les flux futurs d’une obligation sont actualisés pour obtenir son prix de marché."
        },
        {
            "question": "Comment est calculé le prix d’une obligation zéro-coupon ?",
            "options": [
                "En multipliant le taux d'intérêt par la valeur faciale",
                "En divisant la valeur faciale par (1 + r)^T",
                "En soustrayant les coupons au rendement annuel",
                "En appliquant un taux d’actualisation progressif"
            ],
            "answer": "En divisant la valeur faciale par (1 + r)^T",
            "explanation": "Le prix d’une obligation zéro-coupon est calculé en actualisant la valeur faciale à sa date d’échéance."
        },
        {
            "question": "Quelle est la formule du Yield-to-Maturity (YTM) pour une obligation zéro-coupon ?",
            "options": [
                "r = (P / F)^(1/T) - 1",
                "r = (F / P)^(1/T) - 1",
                "r = (C + (F - P) / T) / ((F + P) / 2)",
                "r = (C / P) * (1 - 1/(1 + r)^T)"
            ],
            "answer": "r = (F / P)^(1/T) - 1",
            "explanation": "Le YTM d’une obligation zéro-coupon est calculé en prenant la racine T-ième du rapport entre la valeur faciale et le prix actuel, puis en soustrayant 1."
        },
        {
            "question": "Pourquoi une obligation zéro-coupon est-elle plus sensible aux variations de taux d’intérêt ?",
            "options": [
                "Car elle ne paie aucun coupon avant l’échéance",
                "Car elle suit directement l’inflation",
                "Car elle est moins liquide que les obligations à taux fixe",
                "Car son rendement est fixé par la banque centrale"
            ],
            "answer": "Car elle ne paie aucun coupon avant l’échéance",
            "explanation": "Les obligations zéro-coupon sont plus sensibles aux variations de taux car tout leur rendement est généré à l’échéance."
        },
        {
            "question": "Comment est déterminé le prix d’une obligation à taux fixe ?",
            "options": [
                "En actualisant la somme des coupons et la valeur faciale",
                "En appliquant un taux de rendement constant sur la durée",
                "En soustrayant le coupon annuel de la valeur faciale",
                "En prenant la moyenne des prix du marché"
            ],
            "answer": "En actualisant la somme des coupons et la valeur faciale",
            "explanation": "Le prix d’une obligation à taux fixe est obtenu en actualisant les flux futurs de coupons et la valeur faciale avec le YTM."
        },
        {
            "question": "Quelle est l’approximation du YTM pour une obligation à taux fixe si son prix est proche de la valeur faciale ?",
            "options": [
                "r ≈ (C + (F - P) / T) / ((F + P) / 2)",
                "r ≈ (F / P)^(1/T) - 1",
                "r ≈ C / P",
                "r ≈ (C * T) / F"
            ],
            "answer": "r ≈ (C + (F - P) / T) / ((F + P) / 2)",
            "explanation": "L’approximation du YTM d’une obligation à taux fixe suppose que le prix est proche de la valeur faciale, ce qui permet d’éviter un calcul itératif."
        },
        {
            "question": "Quel est le principal facteur influençant le prix d’une obligation à taux variable ?",
            "options": [
                "Les prévisions de dividendes",
                "Les variations du taux de référence (ex : LIBOR, SOFR)",
                "La fréquence de paiement des coupons",
                "Le volume d’échange sur le marché secondaire"
            ],
            "answer": "Les variations du taux de référence (ex : LIBOR, SOFR)",
            "explanation": "Les obligations à taux variable ajustent leurs paiements de coupons en fonction d’un taux de référence, ce qui stabilise leur prix."
        },
        {
            "question": "Pourquoi le prix d’une obligation à taux variable est-il généralement proche de sa valeur faciale ?",
            "options": [
                "Car son coupon s’ajuste en fonction des taux du marché",
                "Car elle est moins liquide",
                "Car elle est remboursée par anticipation",
                "Car son YTM est toujours fixe"
            ],
            "answer": "Car son coupon s’ajuste en fonction des taux du marché",
            "explanation": "Les coupons des obligations à taux variable s'ajustent régulièrement, ce qui évite une forte fluctuation de leur prix."
        },
        {
            "question": "Qu’est-ce que la courbe zéro-coupon (Courbe ZC) ?",
            "options": [
                "Une courbe qui représente les rendements des obligations sans paiement de coupon",
                "Une courbe qui montre les taux d’intérêt appliqués aux crédits immobiliers",
                "Un graphique qui suit la liquidité des obligations sur le marché",
                "Une courbe qui représente l’évolution des taux directeurs"
            ],
            "answer": "Une courbe qui représente les rendements des obligations sans paiement de coupon",
            "explanation": "La courbe ZC est dérivée des prix des obligations zéro-coupon et permet d’actualiser les flux futurs."
        },
        {
            "question": "Quelle méthode est la plus utilisée pour extraire les taux zéro-coupon à partir des obligations cotées ?",
            "options": [
                "Le bootstrap",
                "L’interpolation linéaire",
                "L’analyse fondamentale",
                "Le ratio de Sharpe"
            ],
            "answer": "Le bootstrap",
            "explanation": "La méthode du bootstrap permet d’extraire les taux zéro-coupon de manière séquentielle à partir des prix des obligations."
        },
        {
            "question": "Pourquoi la courbe zéro-coupon est-elle importante en gestion de portefeuille ?",
            "options": [
                "Elle permet de calculer les valeurs actuelles des flux futurs",
                "Elle aide à estimer le rendement des actions",
                "Elle est utilisée pour la tarification des options",
                "Elle sert à déterminer le taux de dividende d’une entreprise"
            ],
            "answer": "Elle permet de calculer les valeurs actuelles des flux futurs",
            "explanation": "La courbe zéro-coupon est essentielle pour l’évaluation des obligations et l’actualisation des cashflows futurs."
        },
        {
            "question": "Quel modèle est souvent utilisé pour lisser la courbe zéro-coupon ?",
            "options": [
                "Le modèle de Nelson-Siegel",
                "Le modèle Black-Scholes",
                "Le modèle de Garman-Kohlhagen",
                "Le modèle CAPM"
            ],
            "answer": "Le modèle de Nelson-Siegel",
            "explanation": "Le modèle de Nelson-Siegel est couramment utilisé pour obtenir une courbe lisse des taux zéro-coupon."
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
                    <h1 className="title">💡 OOP 4 All !</h1>
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

export default SignUp;
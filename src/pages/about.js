import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

import "./QCMStyles.css";

const questions = {
    basic: [
        { question: "Quelle option a un Delta proche de 1 ?", options: ["Call ITM", "Call OTM", "Put ATM", "Put OTM"], answer: "Call ITM", explanation: "Delta proche de 1 pour ITM" },
        { question: "Le Gamma est le plus élevé lorsque l’option est :", options: ["ITM", "ATM", "OTM", "Indépendant de la moneyness"], answer: "ATM", explanation: "Gamma max pour ATM" },
        { question: "Le Vega est le plus élevé lorsque l'option est :", options: ["ITM", "ATM", "OTM", "Indépendant de la moneyness"], answer: "ATM", explanation: "Vega max pour ATM" },
        { question: "Une option ATM a un Delta proche de :", options: ["0", "1", "0.5", "-0.5"], answer: "0.5", explanation: "Delta ATM est proche de 0.5" },
        { question: "Le Theta d'une option augmente lorsque :", options: ["L'échéance est proche", "La volatilité baisse", "Le taux d'intérêt monte", "Aucune de ces réponses"], answer: "L'échéance est proche", explanation: "Theta devient plus fort à l'approche de l'échéance" },
    ],
    moyen: [
        { question: "Une option avec un Theta très négatif est :", options: ["Un Call ITM", "Un Put OTM", "Un Call ATM", "Une option qui expire dans 2 ans"], answer: "Un Call ATM", explanation: "Theta max pour ATM" },
        { question: "Si la volatilité implicite augmente, quelle option est la plus affectée ?", options: ["Call ITM", "Put ATM", "Call ATM", "Put ITM"], answer: "Call ATM", explanation: "Vega max pour ATM" },
        { question: "Un trader veut hedger un portefeuille Delta neutre, il doit :", options: ["Acheter du sous-jacent", "Vendre des options ITM", "Acheter des options OTM", "Vendre du sous-jacent"], answer: "Acheter du sous-jacent", explanation: "Delta neutre se hedge en achetant du sous-jacent" },
        { question: "Si un Call ITM voit son prix augmenter après une hausse des taux d'intérêt, quel Grec est responsable ?", options: ["Gamma", "Vega", "Theta", "Rho"], answer: "Rho", explanation: "Hausse des taux → Call monte" },
        { question: "Une option OTM a un Delta :", options: ["Proche de 1", "Proche de -1", "Proche de 0", "Toujours 0.5"], answer: "Proche de 0", explanation: "OTM = Delta faible" },
    ],
    avance: [
        { question: "Une hausse des taux d’intérêt profite principalement :", options: ["Aux Calls ITM", "Aux Puts ITM", "Aux Calls ATM", "Aux Puts ATM"], answer: "Aux Calls ITM", explanation: "Rho positif pour Call" },
        { question: "Quel Grec mesure la variation du Delta par rapport au sous-jacent ?", options: ["Vega", "Theta", "Gamma", "Rho"], answer: "Gamma", explanation: "Gamma mesure la vitesse du Delta" },
        { question: "Le Gamma d’une option est maximal lorsque :", options: ["L’option est ATM", "L’option est ITM", "L’option est OTM", "Le sous-jacent ne bouge pas"], answer: "L’option est ATM", explanation: "Gamma est maximal ATM" },
        { question: "Si la volatilité implicite baisse, que se passe-t-il sur un Call ATM ?", options: ["Le prix monte", "Le prix baisse", "Le Theta augmente", "Le Delta augmente"], answer: "Le prix baisse", explanation: "Vega impacte Call ATM" },
        { question: "Si un trader veut minimiser la perte due à l’érosion temporelle, il doit acheter :", options: ["Une option OTM", "Une option ATM", "Une option ITM", "Peu importe la moneyness"], answer: "Une option ITM", explanation: "Theta faible pour ITM" },
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
                <p className="success">🚀 Excellent travail ! Vous maîtrisez bien les Grecs des options !</p>
            ) : (
                <p className="fail">📚 Révisez encore un peu pour bien comprendre les concepts !</p>
            )}
        </div>
    );
};

const About = () => {
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
                    <h1 className="title">💡 Bienvenue au QCM sur les Grecs des options !</h1>
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

export default About;

import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

import "./QCMStyles.css";

const questions = {
    basic: [
        {
            "question": "Qu'est-ce qu'une API en programmation ?",
            "options": [
                "Un protocole réseau sécurisé",
                "Un système d'exploitation",
                "Une interface permettant à deux logiciels de communiquer entre eux",
                "Un langage de programmation orienté objet"
            ],
            "answer": "Une interface permettant à deux logiciels de communiquer entre eux",
            "explanation": "Une API est une interface logicielle qui permet à différentes applications de communiquer entre elles selon un protocole défini."
        },
        {
            "question": "Quelle est la définition exacte d'un endpoint dans une API ?",
            "options": [
                "Une méthode HTTP comme GET ou POST",
                "L'adresse URL d'une ressource spécifique dans une API",
                "Une clé d'authentification",
                "Une base de données exposée"
            ],
            "answer": "L'adresse URL d'une ressource spécifique dans une API",
            "explanation": "Un endpoint est une URL unique qui donne accès à une ressource ou action spécifique d'une API."
        },
        {
            "question": "Quel est l'objectif principal d'une API ?",
            "options": [
                "Augmenter la vitesse des serveurs",
                "Servir des pages HTML",
                "Exposer des fonctionnalités ou données à des clients/applications",
                "Créer des animations web"
            ],
            "answer": "Exposer des fonctionnalités ou données à des clients/applications",
            "explanation": "Une API expose des services/données que d'autres logiciels peuvent consommer."
        },
        {
            "question": "Parmi ces éléments, lequel caractérise une API REST ?",
            "options": [
                "Communication en temps réel via sockets",
                "Utilise XML comme unique format",
                "Stateless et basé sur les ressources via HTTP",
                "Requiert un schéma de base rigide"
            ],
            "answer": "Stateless et basé sur les ressources via HTTP",
            "explanation": "REST repose sur des ressources, des verbes HTTP, et ne conserve pas d'état entre deux requêtes."
        },
        {
            "question": "Quelle est la principale différence entre REST et GraphQL ?",
            "options": [
                "REST est un format, GraphQL est un protocole réseau",
                "GraphQL permet de demander exactement les champs nécessaires",
                "REST est bidirectionnel, GraphQL ne l'est pas",
                "GraphQL ne fonctionne que sur serveur local"
            ],
            "answer": "GraphQL permet de demander exactement les champs nécessaires",
            "explanation": "GraphQL permet de ne récupérer que ce dont on a besoin, évitant les requêtes trop lourdes."
        },
        {
            "question": "Quelle est une caractéristique clé d'une API SOAP ?",
            "options": [
                "Utilise exclusivement JSON",
                "Fonctionne uniquement avec JavaScript",
                "Basée sur XML avec des messages structurés",
                "Repose sur des WebSockets"
            ],
            "answer": "Basée sur XML avec des messages structurés",
            "explanation": "SOAP est un protocole basé sur XML, très formel et structuré."
        },
        {
            "question": "Qu'est-ce qu'un Webhook dans le contexte des API ?",
            "options": [
                "Un tunnel réseau pour accéder à une API interne",
                "Une API REST sécurisée",
                "Un appel automatique vers une URL lorsqu’un événement survient",
                "Un module de logging distant"
            ],
            "answer": "Un appel automatique vers une URL lorsqu’un événement survient",
            "explanation": "Un webhook est déclenché automatiquement par un événement, comme un nouveau paiement ou un message reçu."
        },
        {
            "question": "En quoi gRPC se distingue-t-il d’une API REST classique ?",
            "options": [
                "Il utilise uniquement XML",
                "Il est plus lent mais plus sécurisé",
                "Il fonctionne avec Protobuf et des appels directs (RPC)",
                "Il repose uniquement sur WebSockets"
            ],
            "answer": "Il fonctionne avec Protobuf et des appels directs (RPC)",
            "explanation": "gRPC utilise le protocole Protobuf et des appels de type Remote Procedure Call, plus rapides."
        },
        {
            "question": "À quoi sert un token JWT dans une API ?",
            "options": [
                "Il crypte les données de la base de données",
                "Il permet l’authentification et l’autorisation d’un utilisateur",
                "Il génère une documentation automatique",
                "Il vérifie l’adresse IP du client"
            ],
            "answer": "Il permet l’authentification et l’autorisation d’un utilisateur",
            "explanation": "Un JWT est un token signé qui contient des informations d'identité et de permissions de l'utilisateur."
        },
        {
            "question": "Quelle caractéristique fait des WebSockets un bon choix pour un chat en ligne ?",
            "options": [
                "Utilisation de messages XML en série",
                "Requêtes HTTP indépendantes",
                "Connexion persistante bidirectionnelle",
                "Compression automatique des images"
            ],
            "answer": "Connexion persistante bidirectionnelle",
            "explanation": "WebSockets maintiennent une connexion ouverte pour envoyer/recevoir des messages sans réinitialiser la communication."
        },
        {
            "question": "Quelle est la principale caractéristique d'une API REST ?",
            "options": [
                "Utilise le protocole FTP",
                "Utilise XML exclusivement",
                "Fonctionne avec des méthodes HTTP comme GET, POST, PUT, DELETE",
                "Requiert une authentification OAuth obligatoire"
            ],
            "answer": "Fonctionne avec des méthodes HTTP comme GET, POST, PUT, DELETE",
            "explanation": "Les API REST utilisent des méthodes HTTP standards pour interagir avec les ressources."
        },
        {
            "question": "Qu'est-ce qui distingue principalement SOAP de REST ?",
            "options": [
                "SOAP utilise XML, REST peut utiliser JSON",
                "REST est plus sécurisé que SOAP",
                "SOAP est uniquement utilisé en Java",
                "REST nécessite une interface graphique"
            ],
            "answer": "SOAP utilise XML, REST peut utiliser JSON",
            "explanation": "SOAP utilise exclusivement XML, tandis que REST accepte JSON, XML ou d'autres formats."
        },
        {
            "question": "Quelle est une particularité de GraphQL ?",
            "options": [
                "Repose uniquement sur le format XML",
                "Permet de requêter uniquement les données nécessaires",
                "N'utilise pas d'URL",
                "Ne supporte pas l’authentification"
            ],
            "answer": "Permet de requêter uniquement les données nécessaires",
            "explanation": "GraphQL permet des requêtes ciblées pour éviter le sur- ou sous-chargement de données."
        },
        {
            "question": "Quelle API est la plus adaptée à une communication en temps réel ?",
            "options": [
                "REST",
                "GraphQL",
                "SOAP",
                "WebSockets"
            ],
            "answer": "WebSockets",
            "explanation": "WebSockets permettent des connexions persistantes et des échanges en temps réel."
        },
        {
            "question": "Quel est le rôle principal d’un endpoint dans une API ?",
            "options": [
                "Fournir le token d'authentification",
                "Afficher les logs serveur",
                "Définir une ressource cible pour une requête",
                "Gérer la pagination"
            ],
            "answer": "Définir une ressource cible pour une requête",
            "explanation": "Un endpoint est une URL qui correspond à une ressource dans l’API."
        },
        {
            "question": "Quelle réponse HTTP indique que la requête est correcte mais sans contenu à retourner ?",
            "options": [
                "200 OK",
                "201 Created",
                "204 No Content",
                "400 Bad Request"
            ],
            "answer": "204 No Content",
            "explanation": "204 est utilisé quand l'opération réussit mais qu'il n'y a rien à retourner."
        },
        {
            "question": "Quel facteur distingue une API REST d'une API gRPC ?",
            "options": [
                "REST est basé sur Protobuf",
                "gRPC utilise des appels HTTP simples",
                "gRPC utilise Protobuf pour des échanges plus rapides",
                "REST fonctionne uniquement avec WebSockets"
            ],
            "answer": "gRPC utilise Protobuf pour des échanges plus rapides",
            "explanation": "gRPC utilise Protobuf, ce qui réduit la taille des messages et accélère les échanges."
        },
        {
            "question": "Qu’est-ce qu’un token JWT ?",
            "options": [
                "Un format XML pour les échanges API",
                "Un format de compression de fichiers",
                "Un moyen sécurisé d'authentifier les utilisateurs",
                "Un fichier contenant la documentation Swagger"
            ],
            "answer": "Un moyen sécurisé d'authentifier les utilisateurs",
            "explanation": "Un JWT est un jeton encodé utilisé pour authentifier et autoriser les utilisateurs."
        },
        {
            "question": "Pourquoi utiliser les Webhooks ?",
            "options": [
                "Pour interroger une API toutes les heures",
                "Pour recevoir automatiquement des notifications d'événements",
                "Pour encoder les réponses HTTP",
                "Pour documenter une API"
            ],
            "answer": "Pour recevoir automatiquement des notifications d'événements",
            "explanation": "Les Webhooks permettent de recevoir des mises à jour en temps réel lorsqu'un événement se produit."
        },
        {
            "question": "Quel format est le plus souvent utilisé avec les API REST modernes ?",
            "options": [
                "XML",
                "CSV",
                "JSON",
                "YAML"
            ],
            "answer": "JSON",
            "explanation": "Le format JSON est léger, lisible et donc largement préféré pour les APIs REST."
        }
    ],
        
    //  toute la partie venant de deepseek est en dessous mais la partie du haut est aussi importante 
    moyen: [
        {
            "question": "Quel est le principal avantage de GraphQL par rapport à REST ?",
            "options": [
                "Moins sécurisé mais plus rapide",
                "Permet des requêtes ciblées et évite la surcharge de données",
                "Utilise uniquement le format XML",
                "Ne nécessite pas de serveur"
            ],
            "answer": "Permet des requêtes ciblées et évite la surcharge de données",
            "explanation": "GraphQL permet de ne récupérer que les données demandées, évitant le surfetching."
        },
        {
            "question": "Quel type d'API permet une communication bidirectionnelle en temps réel ?",
            "options": [
                "REST",
                "SOAP",
                "GraphQL",
                "WebSockets"
            ],
            "answer": "WebSockets",
            "explanation": "WebSockets permet des communications bidirectionnelles entre client et serveur en temps réel."
        },
        {
            "question": "Quel code HTTP est renvoyé lorsqu’une ressource demandée n’existe pas ?",
            "options": [
                "200",
                "403",
                "404",
                "500"
            ],
            "answer": "404",
            "explanation": "404 est utilisé pour indiquer qu'une ressource est introuvable."
        },
        {
            "question": "Quel élément d’une requête HTTP contient les métadonnées comme l’Authorization ?",
            "options": [
                "Body",
                "Query string",
                "Header",
                "Endpoint"
            ],
            "answer": "Header",
            "explanation": "Les headers contiennent les informations comme les types de contenu et les tokens."
        },
        {
            "question": "Quelle méthode HTTP est utilisée pour créer une nouvelle ressource ?",
            "options": [
                "GET",
                "PUT",
                "DELETE",
                "POST"
            ],
            "answer": "POST",
            "explanation": "POST est utilisée pour envoyer des données à l'API pour créer une ressource."
        },
        {
            "question": "Quel outil est couramment utilisé pour tester des APIs manuellement ?",
            "options": [
                "Swagger",
                "Postman",
                "Docker",
                "FastAPI"
            ],
            "answer": "Postman",
            "explanation": "Postman permet de tester, documenter et automatiser des appels d’API."
        },
        {
            "question": "Pourquoi versionne-t-on une API ?",
            "options": [
                "Pour la rendre plus rapide",
                "Pour ne pas casser les applications existantes",
                "Pour supprimer les anciennes routes",
                "Pour réduire le besoin d'authentification"
            ],
            "answer": "Pour ne pas casser les applications existantes",
            "explanation": "Le versioning permet de faire évoluer l’API sans casser les applications qui utilisent les anciennes versions."
        },
        {
            "question": "Qu'est-ce que le champ 'Content-Type' dans une requête HTTP ?",
            "options": [
                "Le chemin vers l’API",
                "La version de l'API",
                "Le type de données envoyées ou reçues",
                "Un identifiant d'utilisateur"
            ],
            "answer": "Le type de données envoyées ou reçues",
            "explanation": "Content-Type indique le format de la donnée, comme application/json."
        },
        {
            "question": "Qu'est-ce qu'un webhook ?",
            "options": [
                "Une méthode de chiffrement",
                "Une réponse HTML automatique",
                "Une notification envoyée à un serveur lorsqu’un événement survient",
                "Un token de sécurité"
            ],
            "answer": "Une notification envoyée à un serveur lorsqu’un événement survient",
            "explanation": "Les webhooks permettent aux services d’envoyer des notifications automatiquement à un autre système."
        },
        {
            "question": "Quel protocole est utilisé pour sécuriser les échanges API ?",
            "options": [
                "FTP",
                "SSH",
                "HTTPS",
                "UDP"
            ],
            "answer": "HTTPS",
            "explanation": "HTTPS assure la sécurité des échanges API par chiffrement SSL/TLS."
        },
        {
            "question": "QCM API classique #11",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #12",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #13",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #14",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #15",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        }
    ],
    avance: [
        
        {
            "question": "QCM API classique #16",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #17",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #18",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #19",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "QCM API classique #20",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Option B",
            "explanation": "Ceci est une explication générique pour un QCM classique."
        },
        {
            "question": "Que renvoie ce code Flask si l’ID passé est 42 ?",
            "options": [
                "{\"user_id\": 42, \"name\": \"Alice\"}",
                "{\"user_id\": \"42\", \"name\": \"Alice\"}",
                "Erreur 404",
                "Aucune réponse"
            ],
            "answer": "{\"user_id\": \"42\", \"name\": \"Alice\"}",
            "explanation": "Les paramètres de route sont toujours de type string par défaut.",
            "code": "from flask import Flask, jsonify\napp = Flask(__name__)\n\n@app.route('/users/<id>')\ndef get_user(id):\n    return jsonify({\"user_id\": id, \"name\": \"Alice\"})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 2)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 3)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 4)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 5)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 6)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 7)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 8)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 9)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
        },
        {
            "question": "Que fait cette API Flask ? (extrait 10)",
            "options": [
                "Crée un utilisateur",
                "Supprime un utilisateur",
                "Retourne un utilisateur",
                "Fait une redirection"
            ],
            "answer": "Retourne un utilisateur",
            "explanation": "La méthode GET renvoie un utilisateur avec un ID passé en paramètre.",
            "code": "@app.route('/user/{id}', methods=['GET'])\ndef get_user<built-in function id>():\n    return jsonify({'id': id, 'name': 'User<built-in function id>'})"
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
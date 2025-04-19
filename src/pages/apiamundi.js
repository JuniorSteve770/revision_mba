import React, { useState, useEffect } from "react";
import "./QCMStyles.css";

import "./QCMStyles.css";

const questions = {
    basic: [
        {
            "question": "Quelle est la stratégie utilisée pour construire un Produit Structuré à Capital Protégé ?",
            "options": [
                "Achat d'une obligation zéro-coupon et vente d'un Call",
                "Achat d'une obligation zéro-coupon, achat d'un Call et vente d'un Put Down & In",
                "Achat d'une obligation classique et vente d'un Put",
                "Achat d'un Put et vente d'un Call"
            ],
            "answer": "Achat d'une obligation zéro-coupon, achat d'un Call et vente d'un Put Down & In",
            "explanation": "Le produit combine une protection du capital via le zéro-coupon, un potentiel de hausse via le Call acheté, et finance cette performance par la vente du Put Down & In."
        },
        {
            "question": "Avec un taux d'intérêt à 2,50% sur 3 ans, quelle est la valeur actuelle du zéro-coupon permettant de protéger 100% du capital à maturité ?",
            "options": [
                "92,86%",
                "97,50%",
                "100%",
                "107,14%"
            ],
            "answer": "92,86%",
            "explanation": "Calculée par la formule 100/(1+2,50%)^3 = 92,86%, cette valeur actualisée permet de garantir 100% du capital à échéance."
        },
        {
            "question": "Que représente les 7,14% du nominal non investis dans le zéro-coupon ?",
            "options": [
                "La marge de l'émetteur",
                "Le montant alloué à l'achat d'options pour la performance",
                "Les frais de gestion annuels",
                "Le coupon annuel versé à l'investisseur"
            ],
            "answer": "Le montant alloué à l'achat d'options pour la performance",
            "explanation": "Ce reliquat finance les options (Call acheté et Put vendu) qui déterminent la performance potentielle du produit."
        },
        {
            "question": "Quel est le remboursement total si le CAC 40 monte de 25% à maturité ?",
            "options": [
                "100%",
                "125%",
                "92,86%",
                "75%"
            ],
            "answer": "125%",
            "explanation": "L'investisseur reçoit 100% du zéro-coupon + 25% du Call exercé, le Put n'étant pas activé (100% + (25%-0%) = 125%)."
        },
        {
            "question": "Pourquoi le Put Down & In n'est-il pas activé si le CAC 40 baisse de 25% ?",
            "options": [
                "Parce que le Call est exercé",
                "Parce que la baisse est inférieure à la barrière de 60%",
                "Parce que le zéro-coupon compense la perte",
                "Parce que l'investisseur a vendu un Call"
            ],
            "answer": "Parce que la baisse est inférieure à la barrière de 60%",
            "explanation": "Le Put Down & In ne s'active que si le sous-jacent franchit la barrière (ici -40% nécessaire pour atteindre 60% du niveau initial)."
        },
        {
            "question": "Quel est le remboursement total si le CAC 40 baisse de 49% à maturité ?",
            "options": [
                "100%",
                "51%",
                "49%",
                "0%"
            ],
            "answer": "51%",
            "explanation": "Le Put Down & In activé entraîne une perte de 49% (100% - 49%), car le sous-jacent clôture à 51% (en dessous de la barrière)."
        },
        {
            "question": "Quand le Put Down & In est-il activé ?",
            "options": [
                "Si le sous-jacent dépasse son prix d'exercice",
                "Si le sous-jacent clôture en hausse à maturité",
                "Si le sous-jacent franchit la barrière de 60% à la baisse",
                "Si le Call est exercé"
            ],
            "answer": "Si le sous-jacent franchit la barrière de 60% à la baisse",
            "explanation": "Une option barrière Down & In s'active uniquement si le sous-jacent atteint ou dépasse le niveau de barrière spécifié (ici 60%)."
        },
        {
            "question": "Dans quel cas l'investisseur subit-il une perte en capital ?",
            "options": [
                "Si le CAC 40 stagne",
                "Si le CAC 40 baisse de 25%",
                "Si le CAC 40 baisse de plus de 40%",
                "Si les taux d'intérêt augmentent"
            ],
            "answer": "Si le CAC 40 baisse de plus de 40%",
            "explanation": "Une baisse au-delà de 40% active le Put Down & In, mettant le capital partiellement en risque (barrière à 60%)."
        },
        {
            "question": "Que permet de choisir ce type de produit structuré ?",
            "options": [
                "Un rendement fixe sans risque",
                "Un couple rendement/risque ajusté selon l'aversion au risque",
                "Une protection totale contre les baisses de marché",
                "Une performance garantie supérieure aux taux du marché"
            ],
            "answer": "Un couple rendement/risque ajusté selon l'aversion au risque",
            "explanation": "L'investisseur peut moduler l'exposition au risque (barrière) et le potentiel de rendement via la sélection des options."
        },
        {
            "question": "Quelle est la fonction du Call acheté dans ce produit ?",
            "options": [
                "Protéger le capital en cas de baisse",
                "Offrir un potentiel de hausse à maturité",
                "Générer des coupons annuels",
                "Réduire le coût du Put vendu"
            ],
            "answer": "Offrir un potentiel de hausse à maturité",
            "explanation": "Le Call acheté permet de capter la hausse du sous-jacent si celui-ci clôture au-dessus du prix d'exercice à maturité."
        }
    ],
        
    //  toute la partie venant de deepseek est en dessous mais la partie du haut est aussi importante 
    moyen: [
        {
            "question": "Dans un scénario favorable (CAC 40 +25%), pourquoi l'investisseur ne paie-t-il pas de performance sur le Put Down & In ?",
            "options": [
                "Parce que le Put a été racheté avant maturité",
                "Parce que la barrière de 60% n'a pas été atteinte",
                "Parce que le Call annule les obligations du Put",
                "Parce que le zéro-coupon couvre cette obligation"
            ],
            "answer": "Parce que la barrière de 60% n'a pas été atteinte",
            "explanation": "Le Put Down & In ne s'active que si le sous-jacent franchit la barrière à la baisse. Une hausse de 25% maintient le sous-jacent bien au-dessus de ce seuil."
        },
        {
            "question": "Dans un scénario défavorable (CAC 40 -49%), quelle est la valeur intrinsèque du Put Down & In à maturité ?",
            "options": [
                "0% (non activé)",
                "25%",
                "49%",
                "60%"
            ],
            "answer": "49%",
            "explanation": "Le Put est activé (car le sous-jacent a franchi la barrière de 60%) et sa valeur intrinsèque est de 49% (100% - 51% de niveau final)."
        },
        {
            "question": "Que se passe-t-il si le CAC 40 termine à exactement 60% à maturité (scénario critique) ?",
            "options": [
                "Le Put Down & In est partiellement activé",
                "Le Put Down & In est activé avec une valeur intrinsèque nulle",
                "Le Call reste dans la monnaie",
                "Le capital est intégralement protégé"
            ],
            "answer": "Le Put Down & In est activé avec une valeur intrinsèque nulle",
            "explanation": "La barrière est atteinte (donc activation), mais la valeur intrinsèque est nulle (100% - 60% = 40%, mais le strike du Put est à 100%, donc max(100%-60%,0)=0)."
        },
        {
            "question": "Dans un scénario intermédiaire (CAC 40 -30%), quelle est la performance totale ?",
            "options": [
                "100% (capital protégé)",
                "70% (perte de 30%)",
                "130% (gain de 30%)",
                "92.86% (valeur du zéro-coupon)"
            ],
            "answer": "100% (capital protégé)",
            "explanation": "Le Call n'est pas exercé (sous-jacent < strike) et le Put n'est pas activé (-30% > barrière de -40%). Seul le zéro-coupon est remboursé."
        },
        {
            "question": "Quel est le pire scénario possible pour l'investisseur ?",
            "options": [
                "CAC 40 à -40% (barrière exactement atteinte)",
                "CAC 40 à 0% (sous-jacent ruiné)",
                "CAC 40 à +10% (performance faible)",
                "CAC 40 à -25% (scénario médian)"
            ],
            "answer": "CAC 40 à 0% (sous-jacent ruiné)",
            "explanation": "Le Put Down & In serait activé avec une valeur intrinsèque de 100%, entraînant un remboursement de 0% (100% - 100%)."
        },
        {
            "question": "Dans un scénario favorable extrême (CAC 40 +100%), quelle serait la performance totale ?",
            "options": [
                "200%",
                "100% (plafonnée)",
                "192.86%",
                "107.14%"
            ],
            "answer": "200%",
            "explanation": "Le Call rapporterait +100% (non plafonné dans cet exemple), et le Put ne serait pas activé : 100% (zéro-coupon) + (100% - 0%) = 200%."
        },
        {
            "question": "Si le CAC 40 termine à 59% (juste sous la barrière), quelle est la perte ?",
            "options": [
                "0% (capital protégé)",
                "41% (100% - 59%)",
                "11% (60% - 49%)",
                "100% (perte totale)"
            ],
            "answer": "41% (100% - 59%)",
            "explanation": "Le Put Down & In est activé (59% < 60%) et sa valeur intrinsèque est de 41%, réduisant le remboursement à 59%."
        },
        {
            "question": "Quelle condition annulerait totalement la protection du capital ?",
            "options": [
                "Une hausse du taux d'intérêt",
                "Une baisse du sous-jacent en dessous de la barrière à tout moment avant échéance",
                "Une baisse du sous-jacent sous la barrière uniquement à maturité",
                "Un dividende exceptionnel versé par le sous-jacent"
            ],
            "answer": "Une baisse du sous-jacent en dessous de la barrière à tout moment avant échéance",
            "explanation": "Certains produits activent la barrière en observation continue : si le sous-jacent passe sous 60% ne serait-ce qu'un jour, le Put est activé définitivement."
        },
        {
            "question": "Dans un Phoenix à effet mémoire, que se passe-t-il si le sous-jacent est sous la barrière de coupon pendant 3 trimestres, puis repasse au-dessus à la 4e observation ?",
            "options": [
              "Un seul coupon est payé pour le dernier trimestre",
              "Tous les coupons manqués sont définitivement perdus",
              "Les 4 coupons sont payés d'un coup grâce à l'effet mémoire",
              "Le produit est rappelé automatiquement"
            ],
            "answer": "Les 4 coupons sont payés d'un coup grâce à l'effet mémoire",
            "explanation": "L'effet mémoire permet de récupérer rétroactivement les coupons non versés dès que la condition est de nouveau remplie."
          },
          {
            "question": "Dans un Phoenix avec barrière de capital à 60% et barrière de coupon à 80%, que se passe-t-il si le sous-jacent termine à 58% à l’échéance ?",
            "options": [
              "Capital 100% remboursé, pas de coupon",
              "Capital remboursé à 58%, aucun coupon",
              "Effet mémoire activé + remboursement au pair",
              "Tous les coupons sont versés mais le capital est partiellement remboursé"
            ],
            "answer": "Capital remboursé à 58%, aucun coupon",
            "explanation": "Le sous-jacent est sous la barrière de capital (60%), donc perte en capital. Aucun coupon ne peut être payé si la barrière de coupon n’est jamais franchie."
          },
          {
            "question": "Quel scénario est optimal pour un investisseur dans un Phoenix à effet mémoire ?",
            "options": [
              "Sous-jacent reste toujours sous la barrière",
              "Sous-jacent dépasse la barrière de coupon tardivement",
              "Sous-jacent dépasse la barrière de coupon régulièrement",
              "Sous-jacent dépasse la barrière de capital mais pas celle des coupons"
            ],
            "answer": "Sous-jacent dépasse la barrière de coupon régulièrement",
            "explanation": "Un franchissement régulier permet de recevoir les coupons à chaque date, sans attendre l'effet mémoire, ce qui maximise les rendements dans le temps."
          },
          {
            "question": "Quelle affirmation décrit correctement le mécanisme d’un Phoenix avec effet mémoire ?",
            "options": [
              "Les coupons sont payés même en dessous de la barrière",
              "Les coupons manqués sont récupérés si la condition est remplie ultérieurement",
              "Le produit ne verse jamais de coupon si un trimestre est manqué",
              "L’effet mémoire s’applique aussi au remboursement du capital"
            ],
            "answer": "Les coupons manqués sont récupérés si la condition est remplie ultérieurement",
            "explanation": "C’est le principe même de l’effet mémoire : les coupons manqués peuvent être versés rétroactivement si la condition est remplie plus tard."
          },
          {
            "question": "Dans un Phoenix Autocall Memory, que se passe-t-il si le sous-jacent est au-dessus de la barrière de rappel anticipé à la 2e année ?",
            "options": [
              "Le produit continue jusqu’à l’échéance",
              "Le capital est remboursé mais aucun coupon n’est payé",
              "Le produit est rappelé avec remboursement + tous les coupons dus (via effet mémoire)",
              "Un bonus supplémentaire est versé en plus du capital"
            ],
            "answer": "Le produit est rappelé avec remboursement + tous les coupons dus (via effet mémoire)",
            "explanation": "Le dépassement de la barrière de rappel déclenche le remboursement anticipé. Tous les coupons non versés jusqu’ici sont payés grâce à l’effet mémoire."
          }
    ],
    avance: [
        
        {
            "question": "Quelle est la composante essentielle d'un produit de participation pour offrir une exposition à la hausse du sous-jacent ?",
            "options": [
                "Un Put vendu",
                "Un Call acheté",
                "Une obligation à coupon",
                "Un Swap de taux"
            ],
            "answer": "Un Call acheté",
            "explanation": "Le Call acheté permet de capter la hausse du sous-jacent. C'est le cœur de la 'composante performance'."
        },
        {
            "question": "Pourquoi un investisseur pourrait-il vendre un Put Down & In dans un produit de participation ?",
            "options": [
                "Pour éliminer tout risque de baisse",
                "Pour financer l'achat d'un Call et augmenter la participation",
                "Pour garantir un rendement fixe",
                "Pour éviter l'activation de la barrière"
            ],
            "answer": "Pour financer l'achat d'un Call et augmenter la participation",
            "explanation": "La prime perçue grâce à la vente du Put permet d'acheter plus de Calls, augmentant ainsi le levier sur la hausse."
        },
        {
            "question": "Dans l'exemple du produit sur Société Générale (taux à 2%), pourquoi l'investisseur ne peut-il pas acheter 100% du Call sans vendre de Put ?",
            "options": [
                "Parce que le Call est trop cher (15%) comparé aux 7,62% disponibles",
                "Parce que le zéro-coupon coûte plus que le nominal",
                "Parce que la barrière du Put est trop élevée",
                "Parce que les taux d'intérêt sont négatifs"
            ],
            "answer": "Parce que le Call est trop cher (15%) comparé aux 7,62% disponibles",
            "explanation": "Le reliquat après achat du zéro-coupon (7,62%) est insuffisant pour couvrir le coût du Call (15%)."
        },
        {
            "question": "Si l'investisseur choisit une participation à 130,8% avec vente d'un Put Down & In 75%, que se passe-t-il si Société Générale chute de 30% ?",
            "options": [
                "Perte limitée à 5% grâce à la barrière",
                "Perte de 30% (Put activé et exercé)",
                "Gain de 30% (Call dans la monnaie)",
                "Capital garanti à 100% (barrière non atteinte)"
            ],
            "answer": "Perte de 30% (Put activé et exercé)",
            "explanation": "Une baisse de 30% franchit la barrière de 75% (car 100% - 30% = 70% < 75%). Le Put est activé, entraînant une perte équivalente à la baisse."
        },
        {
            "question": "Comment calcule-t-on le niveau de participation (130,8%) dans l'exemple Société Générale ?",
            "options": [
                "(Prime du Call / Prime du Put) × 100",
                "(Montant disponible + Prime du Put) / Prime du Call",
                "(Valeur du zéro-coupon) / (Prime du Call)",
                "(Barrière du Put) / (Niveau initial)"
            ],
            "answer": "(Montant disponible + Prime du Put) / Prime du Call",
            "explanation": "Participation = (7,62% + 12%) / 15% = 130,8%. La prime du Put vendu augmente le budget alloué au Call."
        },
        {
            "question": "Quel est l'avantage d'une participation >100% dans un produit de participation ?",
            "options": [
                "Immuniser le portefeuille contre les baisses",
                "Amplifier les gains en cas de hausse du sous-jacent",
                "Garantir un coupon annuel",
                "Éviter l'activation de la barrière"
            ],
            "answer": "Amplifier les gains en cas de hausse du sous-jacent",
            "explanation": "Une participation à 130,8% signifie que si le sous-jacent monte de 10%, l'investisseur gagne 13,08%."
        },
        {
            "question": "Pourquoi la barrière du Put Down & In est-elle fixée à 75% dans l'exemple ?",
            "options": [
                "Pour correspondre au strike du Call",
                "Pour limiter le risque à une baisse maximale de 25%",
                "Pour garantir un rendement minimum",
                "Pour optimiser la fiscalité"
            ],
            "answer": "Pour limiter le risque à une baisse maximale de 25%",
            "explanation": "Une barrière à 75% signifie que le Put ne s'active que si le sous-jacent perd plus de 25% (100% - 75%)."
        },
        {
            "question": "Que se passe-t-il si Société Générale termine à 76% (juste au-dessus de la barrière) ?",
            "options": [
                "Le Put est activé mais sans perte",
                "Le Call rapporte 24%",
                "Capital garanti à 100% + participation à la hausse",
                "Perte partielle de 24%"
            ],
            "answer": "Capital garanti à 100% + participation à la hausse",
            "explanation": "Le Put n'est pas activé (76% > 75%), donc le capital est protégé. Le Call ne rapporte rien (sous-jacent < strike à 100%)."
        },
        {
            "question": "Quel compromis fondamental illustre ce type de produit ?",
            "options": [
                "Rendement immédiat vs. Rendement différé",
                "Participation à la hausse vs. Risque limité à la baisse",
                "Liquidité vs. Volatilité",
                "Diversification vs. Concentration"
            ],
            "answer": "Participation à la hausse vs. Risque limité à la baisse",
            "explanation": "L'investisseur accepte un risque contrôlé (via la barrière) pour obtenir un levier sur la hausse."
        },
        {
            "question": "Si les taux d'intérêt passent de 2% à 3%, comment évolue le budget disponible pour le Call ?",
            "options": [
                "Il augmente (car le zéro-coupon coûte moins cher)",
                "Il diminue (car le Call devient plus cher)",
                "Il reste identique (le Put compense)",
                "Il est annulé (le produit devient inefficace)"
            ],
            "answer": "Il augmente (car le zéro-coupon coûte moins cher)",
            "explanation": "Un taux plus élevé réduit le coût du zéro-coupon (ex : 100/(1+3%)⁴ ≈ 88,85%), libérant plus de budget (11,15% vs 7,62%)."
        },
        {
            "question": "Pourquoi la performance d’un produit structuré peut-elle être inférieure à celle de l’action en cas de forte hausse du sous-jacent ?",
            "options": [
              "Parce que le produit plafonne la participation à la hausse",
              "Parce que le produit donne accès aux dividendes",
              "Parce que le produit est indexé sur une obligation à taux fixe",
              "Parce que le produit est exercé automatiquement à l’échéance"
            ],
            "answer": "Parce que le produit plafonne la participation à la hausse",
            "explanation": "Dans les produits de participation, l’investisseur peut bénéficier d’une partie de la hausse seulement, contrairement à un investissement direct dans l’action."
          },
          {
            "question": "Quel est l’impact principal de l’absence de dividendes dans un produit structuré par rapport à un achat d’action en direct ?",
            "options": [
              "Le rendement global du produit structuré est augmenté",
              "L’investisseur est exposé à plus de volatilité",
              "Le produit structuré offre un revenu plus élevé à court terme",
              "Le rendement global est potentiellement inférieur en cas de stagnation du sous-jacent"
            ],
            "answer": "Le rendement global est potentiellement inférieur en cas de stagnation du sous-jacent",
            "explanation": "Contrairement à l’investissement en action, le produit structuré ne donne pas droit aux dividendes, ce qui peut réduire le rendement global en l’absence de hausse."
          },
          {
            "question": "Dans un Reverse Convertible avec barrière à 80 %, que se passe-t-il si l’action perd 27 % à l’échéance ?",
            "options": [
              "L’investisseur récupère 100 % du capital et le coupon",
              "Le Put est activé, et l’investisseur perd 27 % de son capital mais garde le coupon",
              "L’investisseur perd 100 % du capital",
              "Le Put est désactivé et aucun coupon n’est versé"
            ],
            "answer": "Le Put est activé, et l’investisseur perd 27 % de son capital mais garde le coupon",
            "explanation": "Si l’action clôture sous la barrière, le Put vendu s’active, ce qui entraîne une perte égale à la baisse de l’action, tout en conservant le coupon inconditionnel."
          },
          {
            "question": "Comment est financé le coupon inconditionnel dans un produit structuré de type Reverse Convertible ?",
            "options": [
              "Par la performance du Call vendu",
              "Par les dividendes du sous-jacent",
              "Par le Zero Coupon et la vente d’un Put Down and In",
              "Par l’effet mémoire sur les coupons"
            ],
            "answer": "Par le Zero Coupon et la vente d’un Put Down and In",
            "explanation": "Le coupon est financé par la décote du Zero Coupon (lié aux taux d’intérêt) et la vente d’un Put qui expose l’investisseur à une perte conditionnelle."
          },
          {
            "question": "Quel est le risque principal que l’on oublie souvent dans un produit structuré même si le sous-jacent évolue favorablement ?",
            "options": [
              "La volatilité implicite",
              "Le risque de change",
              "Le risque émetteur",
              "Le risque de liquidité de l’action"
            ],
            "answer": "Le risque émetteur",
            "explanation": "Même si le sous-jacent évolue bien, un défaut de l’émetteur du produit structuré peut empêcher le remboursement du capital et des coupons."
          },
          {
            "question": "Pourquoi la performance d’un produit structuré peut-elle être inférieure à celle de l’action en cas de forte hausse du sous-jacent ?",
            "options": [
              "Parce que le produit plafonne la participation à la hausse",
              "Parce que le produit donne accès aux dividendes",
              "Parce que le produit est indexé sur une obligation à taux fixe",
              "Parce que le produit est exercé automatiquement à l’échéance"
            ],
            "answer": "Parce que le produit plafonne la participation à la hausse",
            "explanation": "Dans les produits de participation, l’investisseur peut bénéficier d’une partie de la hausse seulement, contrairement à un investissement direct dans l’action."
          },
          {
            "question": "Quel est l’impact principal de l’absence de dividendes dans un produit structuré par rapport à un achat d’action en direct ?",
            "options": [
              "Le rendement global du produit structuré est augmenté",
              "L’investisseur est exposé à plus de volatilité",
              "Le produit structuré offre un revenu plus élevé à court terme",
              "Le rendement global est potentiellement inférieur en cas de stagnation du sous-jacent"
            ],
            "answer": "Le rendement global est potentiellement inférieur en cas de stagnation du sous-jacent",
            "explanation": "Contrairement à l’investissement en action, le produit structuré ne donne pas droit aux dividendes, ce qui peut réduire le rendement global en l’absence de hausse."
          },
          {
            "question": "Dans un Reverse Convertible avec barrière à 80 %, que se passe-t-il si l’action perd 27 % à l’échéance ?",
            "options": [
              "L’investisseur récupère 100 % du capital et le coupon",
              "Le Put est activé, et l’investisseur perd 27 % de son capital mais garde le coupon",
              "L’investisseur perd 100 % du capital",
              "Le Put est désactivé et aucun coupon n’est versé"
            ],
            "answer": "Le Put est activé, et l’investisseur perd 27 % de son capital mais garde le coupon",
            "explanation": "Si l’action clôture sous la barrière, le Put vendu s’active, ce qui entraîne une perte égale à la baisse de l’action, tout en conservant le coupon inconditionnel."
          },
          {
            "question": "Comment est financé le coupon inconditionnel dans un produit structuré de type Reverse Convertible ?",
            "options": [
              "Par la performance du Call vendu",
              "Par les dividendes du sous-jacent",
              "Par le Zero Coupon et la vente d’un Put Down and In",
              "Par l’effet mémoire sur les coupons"
            ],
            "answer": "Par le Zero Coupon et la vente d’un Put Down and In",
            "explanation": "Le coupon est financé par la décote du Zero Coupon (lié aux taux d’intérêt) et la vente d’un Put qui expose l’investisseur à une perte conditionnelle."
          },
          {
            "question": "Quel est le risque principal que l’on oublie souvent dans un produit structuré même si le sous-jacent évolue favorablement ?",
            "options": [
              "La volatilité implicite",
              "Le risque de change",
              "Le risque émetteur",
              "Le risque de liquidité de l’action"
            ],
            "answer": "Le risque émetteur",
            "explanation": "Même si le sous-jacent évolue bien, un défaut de l’émetteur du produit structuré peut empêcher le remboursement du capital et des coupons."
          },
          {
            "question": "Quel est le principe de base d’un produit Autocall ?",
            "options": [
              "Un remboursement progressif avec effet de levier",
              "Un remboursement automatique possible à des dates d’observation si une condition de marché est remplie",
              "Un remboursement à échéance avec participation à la hausse",
              "Un coupon garanti quelles que soient les performances"
            ],
            "answer": "Un remboursement automatique possible à des dates d’observation si une condition de marché est remplie",
            "explanation": "Le mécanisme d’Autocall permet le remboursement anticipé du capital + coupon si le sous-jacent est au-dessus du niveau initial à une date d'observation prédéfinie."
          },
          {
            "question": "Comment est calculé le coupon dans un produit Autocall avec coupon incrémental ?",
            "options": [
              "C’est un taux fixe annuel versé chaque année",
              "C’est un taux variable indexé sur les taux d’intérêt",
              "C’est un coupon cumulé selon le nombre de périodes écoulées sans rappel",
              "C’est un coupon payé à chaque franchissement de barrière"
            ],
            "answer": "C’est un coupon cumulé selon le nombre de périodes écoulées sans rappel",
            "explanation": "Le coupon incrémental est égal à : Coupon x nombre de périodes écoulées depuis le lancement, si le produit est rappelé à une date donnée."
          },
          {
            "question": "Quel est le scénario favorable à l’échéance si aucun rappel anticipé n’a eu lieu ?",
            "options": [
              "Le sous-jacent est au-dessus de son niveau initial",
              "Le sous-jacent est sous la barrière",
              "Le sous-jacent est inférieur à son niveau initial mais supérieur à la barrière",
              "Le produit est automatiquement reconduit"
            ],
            "answer": "Le sous-jacent est au-dessus de son niveau initial",
            "explanation": "Dans ce cas, le capital est remboursé à 100 % + le coupon cumulé (incrémental)."
          },
          {
            "question": "Que se passe-t-il si, à l’échéance, le sous-jacent clôture sous la barrière de protection du capital ?",
            "options": [
              "Le capital est remboursé en totalité",
              "Le capital est partiellement remboursé selon la performance du sous-jacent",
              "Le coupon est doublé",
              "Le produit est prolongé de 5 ans"
            ],
            "answer": "Le capital est partiellement remboursé selon la performance du sous-jacent",
            "explanation": "Si la barrière est franchie à la baisse, la protection est perdue et la perte est égale à celle du sous-jacent (sauf cas de protection totale explicite)."
          },
          {
            "question": "Pourquoi peut-on dire que le rendement d’un Autocall est plafonné ?",
            "options": [
              "Parce que le produit ne verse jamais de coupon au-delà d’un certain montant",
              "Parce que l’investisseur ne peut pas gagner plus que le coupon défini, même en cas de forte hausse du sous-jacent",
              "Parce qu’il est indexé sur un taux fixe",
              "Parce qu’il ne peut être activé que par l’émetteur"
            ],
            "answer": "Parce que l’investisseur ne peut pas gagner plus que le coupon défini, même en cas de forte hausse du sous-jacent",
            "explanation": "Le produit est conçu pour fournir un gain prédéfini plafonné, l’investisseur ne bénéficie pas de toute la hausse éventuelle du marché."
          },
          {
            "question": "Quel est le risque majeur oublié par les investisseurs dans un Autocall ?",
            "options": [
              "Le risque de change",
              "Le risque de défaut de l’émetteur (risque de crédit)",
              "La fiscalité",
              "Le risque de liquidité du sous-jacent"
            ],
            "answer": "Le risque de défaut de l’émetteur (risque de crédit)",
            "explanation": "L’investisseur est exposé à la solvabilité de l’émetteur du produit structuré, contrairement à un achat d’action directe."
          },
          {
            "question": "Comment un Autocall est-il pricé par la banque émettrice ?",
            "options": [
              "En fonction du taux d’intérêt du marché uniquement",
              "En fonction de la volatilité historique uniquement",
              "En fonction des probabilités de rappel à chaque observation et des paramètres de marché",
              "En fonction des dividendes versés par l’émetteur"
            ],
            "answer": "En fonction des probabilités de rappel à chaque observation et des paramètres de marché",
            "explanation": "Le pricing intègre des scénarios pondérés par des probabilités de rappel, qui varient selon la volatilité, les taux, les niveaux de marché, etc."
          },
          {
            "question": "Dans l’exemple présenté, quelle est la probabilité estimée par la banque pour un rappel dès la première observation ?",
            "options": [
              "11 %",
              "5 %",
              "0.3 %",
              "42 %"
            ],
            "answer": "42 %",
            "explanation": "Le modèle estime à 42 % la probabilité que le sous-jacent soit au-dessus de son niveau initial à la première observation."
          },
          {
            "question": "À quoi correspond une observation annuelle dans un Autocall ?",
            "options": [
              "À un moment où l’investisseur peut racheter son produit",
              "À un point de vérification pour déclencher un rappel anticipé",
              "À une date de paiement automatique du coupon",
              "À une date où le produit expire"
            ],
            "answer": "À un point de vérification pour déclencher un rappel anticipé",
            "explanation": "Une observation est une date prédéfinie pour vérifier si la condition de rappel (niveau du sous-jacent ≥ niveau initial) est remplie."
          },
          {
            "question": "Que signifie un coupon de 9 % par an avec observation annuelle dans un Autocall à 10 ans ?",
            "options": [
              "Le coupon est payé chaque année",
              "Le produit verse 90 % à l’échéance",
              "Le coupon cumule chaque année écoulée sans rappel et est versé en cas de déclenchement",
              "Le capital est protégé jusqu’à 90 % de perte"
            ],
            "answer": "Le coupon cumule chaque année écoulée sans rappel et est versé en cas de déclenchement",
            "explanation": "Si le rappel a lieu à l’année 3 par exemple, le coupon versé sera 3 x 9 % = 27 %."
          },
          {
            "question": "Qu’est-ce qu’une barrière américaine dans un produit structuré ?",
            "options": [
              "Une barrière qui s’active à l’échéance uniquement",
              "Une barrière dont le seuil est exprimé en dollars",
              "Une barrière qui s’active à tout moment durant la vie du produit",
              "Une barrière qui protège le capital quelle que soit la performance"
            ],
            "answer": "Une barrière qui s’active à tout moment durant la vie du produit",
            "explanation": "La barrière américaine est active en continu. Si elle est franchie une seule fois, elle peut affecter le remboursement à l’échéance."
          },
          {
            "question": "Comment fonctionne une barrière européenne dans un Autocall ?",
            "options": [
              "Elle s’active dès qu’elle est franchie une seule fois",
              "Elle est observée uniquement à la date d’échéance",
              "Elle est recalculée chaque jour selon la volatilité",
              "Elle est activée si le coupon n’est pas payé"
            ],
            "answer": "Elle est observée uniquement à la date d’échéance",
            "explanation": "Contrairement à une barrière américaine, une barrière européenne est évaluée uniquement à l’échéance du produit."
          },
          {
            "question": "Dans un produit Autocall Worst-of sur 3 actions, que signifie ‘Worst-of’ ?",
            "options": [
              "Le produit est déclenché si une des actions dépasse la barrière",
              "Le niveau de référence est calculé comme la moyenne des performances",
              "La performance la plus faible parmi les 3 sous-jacents est utilisée pour déterminer le remboursement",
              "Le sous-jacent qui chute le plus est retiré du contrat"
            ],
            "answer": "La performance la plus faible parmi les 3 sous-jacents est utilisée pour déterminer le remboursement",
            "explanation": "Dans un Worst-of, le sous-jacent le plus défavorable détermine le sort du produit à chaque date d’observation."
          },
          {
            "question": "Quel est le rôle de l’effet cliquet dans un produit structuré ?",
            "options": [
              "Il verrouille des coupons dès qu’un niveau est franchi",
              "Il permet de prolonger la durée du produit",
              "Il garantit un rappel automatique dès que la barrière est atteinte",
              "Il supprime le risque de perte en capital"
            ],
            "answer": "Il verrouille des coupons dès qu’un niveau est franchi",
            "explanation": "L’effet cliquet (ou ‘locking’) permet de garantir certains gains intermédiaires, même si le sous-jacent baisse ensuite."
          },
          {
            "question": "Dans un Autocall Worst-of avec effet mémoire, que se passe-t-il si le Worst-of reste sous la barrière de coupon pendant 2 périodes, puis la dépasse ?",
            "options": [
              "Le produit est annulé sans remboursement",
              "Seul le dernier coupon est versé",
              "Tous les coupons des périodes précédentes sont versés d’un coup",
              "Le produit passe en mode cliquet"
            ],
            "answer": "Tous les coupons des périodes précédentes sont versés d’un coup",
            "explanation": "L’effet mémoire permet de rattraper rétroactivement les coupons non payés si la condition est remplie à une date ultérieure."
          },
          {
            "question": "Pourquoi les produits Worst-of sont-ils plus risqués que les produits mono-sous-jacent ?",
            "options": [
              "Parce qu’ils ont des coupons plus faibles",
              "Parce que le pire sous-jacent détermine le payoff, augmentant la probabilité de perte",
              "Parce qu’ils sont émis par des banques étrangères",
              "Parce qu’ils offrent une barrière de protection inconditionnelle"
            ],
            "answer": "Parce que le pire sous-jacent détermine le payoff, augmentant la probabilité de perte",
            "explanation": "La logique Worst-of augmente le risque car une seule mauvaise performance peut compromettre l’ensemble du produit."
          },
          {
            "question": "Quelle est la différence entre une observation discrète et continue dans les produits structurés ?",
            "options": [
              "Continue = évaluation permanente, Discrète = évaluation à des dates fixes",
              "Discrète = tous les jours, Continue = une seule fois",
              "Discrète = seulement en cas de coupon, Continue = seulement en cas de perte",
              "Il n’y a aucune différence"
            ],
            "answer": "Continue = évaluation permanente, Discrète = évaluation à des dates fixes",
            "explanation": "Une barrière observée de façon continue peut être franchie à tout moment, ce qui augmente le risque de perte par rapport à une barrière discrète."
          },
          {
            "question": "Quel élément augmente mécaniquement la valeur (et le coût) d’un Autocall ?",
            "options": [
              "Un sous-jacent très peu volatil",
              "Un taux de rappel très élevé",
              "Une barrière de protection très basse",
              "Des coupons conditionnels faibles"
            ],
            "answer": "Un taux de rappel très élevé",
            "explanation": "Plus la probabilité de rappel est élevée, plus le produit verse rapidement les coupons : cela augmente la valeur à payer (ou diminue la marge de la banque)."
          }
    ]
};

const Timer = ({ timeLeft }) => (
    <p className="timer">⏳ Temps restant : <span>{timeLeft}s</span></p>
);

const QuestionCard = ({ question, options, onAnswerClick, timeLeft }) => (
    <div className="question-card">
        <h4>💡 {question}</h4>
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
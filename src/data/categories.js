export const categories = [
    {
        name: 'Communication',
        definition: '"La communication, en lien avec la préparation mentale, peut être définie comme la capacité d’un individu à transmettre et recevoir efficacement des informations, des pensées, des émotions ou des instructions, de manière à optimiser sa performance dans des situations spécifiques, qu’il s’agisse de compétition, d’entraînement ou de moments de haute pression.\n' +
            '\n' +
            'Dans le cadre de la préparation mentale, la communication joue un rôle clé dans plusieurs domaines :\n' +
            '\n' +
            'Communication interne (dialogue interne) : La manière dont une personne se parle à elle-même influence son état mental et ses performances. Un dialogue interne positif (ex : affirmations, auto-motivation) est essentiel pour maintenir la confiance et la concentration.\n' +
            '\n' +
            'Communication avec les autres : Dans un contexte sportif ou professionnel, la capacité à communiquer clairement avec ses coéquipiers, entraîneurs, ou collègues est cruciale. Une bonne communication améliore la compréhension des objectifs, la coordination, et aide à gérer les pressions externes.\n' +
            '\n' +
            'Expression des émotions et besoins : Être capable de communiquer ses émotions, ses besoins ou ses limites de manière efficace (sans frustration ou colère) contribue à un état mental plus stable et prépare mieux l’individu à faire face aux défis.\n' +
            '\n' +
            'En résumé, dans la préparation mentale, la communication est un outil stratégique qui permet d’aligner son état psychologique avec ses objectifs de performance, en s’appuyant sur un dialogue interne constructif et des échanges clairs avec les autres."',
        role:'L\'évaluation de la communication est essentielle pour les athlètes, en entreprise ou pour les étudiants, car elle joue un rôle crucial dans le travail d\'équipe, la compréhension des stratégies  et la gestion des relations avec les entraîneurs, son maanager et ses coéquipiers, collègues ou partenaires. Une communication efficace peut renforcer la cohésion d’équipe et améliorer la performance individuelle et collective',
        questions: [
            { text: 'Je suis à l\'aise pour exprimer mes idées ou mes préoccupations à mes coéquipiers.', response: null },
            { text: 'J\'écoute attentivement mes coéquipiers lorsqu\'ils s\'expriment.', response: null },
            { text: 'Lorsque je reçois des critiques, je suis capable de les accepter sans me sentir attaqué(e).', response: null },
            { text: 'Je m’efforce de donner des feedbacks constructifs à mes coéquipiers pour les aider à progresser.', response: null },
            { text: 'Je suis capable de poser des questions pour clarifier des instructions ou des stratégies.', response: null },
            { text: 'Je trouve difficile de parler en public ou devant un groupe, même si c\'est important pour l\'équipe.', response: null },
            { text: 'Je suis capable de discuter ouvertement des conflits ou des désaccords avec mes coéquipiers ou entraîneurs.', response: null },
            { text: 'J\'utilise un langage positif et motivant lors des échanges avec mes coéquipiers.', response: null },
            { text: 'Je fais des efforts pour comprendre le point de vue des autres, même lorsque je ne suis pas d\'accord.', response: null },
            { text: 'Je me sens parfois mal compris(e) par mes coéquipiers ou entraîneurs, ce qui me frustre.', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication modéré",
                ScoreDefinition: "L’athlète communique de manière intermittente. Il/elle est capable de s’exprimer et d’écouter, mais peut avoir des difficultés dans certaines situations, comme la prise de parole en public ou la gestion des conflits. Un travail supplémentaire est nécessaire pour renforcer cette compétence.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication élevé",
                ScoreDefinition: "L’athlète a une bonne capacité de communication. Il/elle s'exprime clairement, écoute attentivement et gère les critiques et les conflits de manière constructive. Ce niveau favorise un bon climat d'équipe et des relations positives.",
            }
        ]
    },
    {
        name: 'Concentration',
        definition: '"La concentration, en lien avec la préparation mentale, se définit comme la capacité d\'un individu à diriger et maintenir son attention sur une tâche ou un objectif spécifique, tout en bloquant les distractions internes et externes, afin d\'optimiser sa performance dans des situations de haute exigence, comme des compétitions, des entraînements ou des moments sous pression.\n' +
            '\n' +
            'Dans le cadre de la préparation mentale, la concentration est un élément central, influençant directement la qualité de la performance. Voici les aspects clés :\n' +
            '\n' +
            '- Focus sélectif : La capacité à choisir consciemment où diriger son attention (ex : sur la tâche immédiate plutôt que sur le résultat final) est essentielle pour éviter la dispersion mentale et maintenir une performance optimale.\n' +
            '- Blocage des distractions : La concentration permet de filtrer les distractions (qu’elles soient physiques, émotionnelles ou mentales) qui peuvent interférer avec la tâche en cours. Cela inclut la gestion des pensées anxiogènes ou des facteurs de stress externes.\n' +
            '- Endurance cognitive : La concentration doit être soutenue sur une durée prolongée, particulièrement dans des activités qui nécessitent un engagement mental constant (ex : compétition sportive ou examen). La préparation mentale aide à développer cette endurance mentale.\n' +
            ' - Réajustement après une distraction : En préparation mentale, il est important de développer la capacité à réorienter rapidement son attention après une distraction ou une erreur, sans que cela n’impacte négativement la performance.\n' +
            '\n' +
            'En résumé, la concentration est la capacité à garder son attention focalisée sur les éléments les plus importants dans l’instant, en maîtrisant les distractions. C’est une compétence cruciale dans la préparation mentale, permettant de maximiser l’efficacité mentale et physique dans des contextes de performance élevée."',
        role:'La concentration est une compétence mentale cruciale pour les athlètes, car elle leur permet de se focaliser sur la tâche à accomplir, de gérer les distractions et de performer à leur meilleur niveau. Évaluer la concentration d\'un athlète en fonction de son attention sur le passé, le présent et le futur peut offrir des perspectives précieuses sur son état d\'esprit et ses performances.',
        questions: [
            { text: 'Je ressasse souvent des erreurs que j’ai commises lors des compétitions précédentes.', response: null },
            { text: 'Je me sens parfois submergé(e) par des souvenirs de mes performances passées, ce qui affecte ma concentration actuelle.', response: null },
            { text: 'Je prends souvent trop de temps à réfléchir à mes performances passées, ce qui m\'empêche de me concentrer sur le moment présent.', response: null },
            { text: 'Pendant l’entraînement ou la compétition, je me sens pleinement engagé(e) et concentré(e) sur ce que je fais.', response: null },
            { text: 'Je suis capable de bloquer les distractions extérieures lorsque je suis en action.', response: null },
            { text: 'Je fais régulièrement des exercices de respiration ou de méditation pour renforcer ma concentration sur le moment présent.', response: null },
            { text: 'Je me préoccupe souvent de mes performances futures, ce qui me distrait de mes entraînements actuels.', response: null },
            { text: 'Je fixe des objectifs clairs et précis pour l\'avenir, ce qui m\'aide à me concentrer davantage.', response: null },
            { text: 'J\'ai tendance à m\'inquiéter de ce qui pourrait mal se passer lors des prochaines compétitions.', response: null },
            { text: 'Je planifie des stratégies pour aborder les prochaines compétitions, ce qui me permet de rester concentré(e) sur mon entraînement.', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Activation',
        definition: '"\n' +
            'L\'activation, en lien avec la préparation mentale, se réfère à la capacité d’un individu à réguler son niveau d’énergie physique et mentale en fonction des exigences d’une situation donnée. Cela implique d\'atteindre un état optimal d’éveil et de mobilisation de ses ressources internes, sans être sous-activé (manque d’énergie) ni sur-activé (excès de tension ou d\'anxiété), afin d\'optimiser la performance.\n' +
            '\n' +
            'Dans le cadre de la préparation mentale, l’activation est cruciale pour adapter son état à la tâche à accomplir :\n' +
            '\n' +
            'Gestion de l’énergie : L’activation consiste à trouver le juste équilibre entre calme et énergie. Elle implique de mobiliser l’énergie nécessaire pour une performance optimale sans être submergé par l’excitation ou la nervosité, ni être trop relâché, ce qui pourrait entraîner un manque de concentration.\n' +
            '\n' +
            'Ajustement en fonction du contexte : Différentes situations exigent différents niveaux d\'activation. Par exemple, une compétition sportive intense peut nécessiter un haut niveau d\'activation pour mobiliser toute la force et l’endurance nécessaires. En revanche, des situations requérant de la précision (comme un tir à l\'arc ou une prise de parole) peuvent exiger un niveau d\'activation plus modéré pour maintenir la concentration et le contrôle.\n' +
            '\n' +
            'Techniques de régulation : En préparation mentale, des techniques spécifiques sont utilisées pour augmenter ou diminuer l\'activation selon les besoins. Cela inclut la respiration contrôlée, la visualisation, les affirmations positives, ou encore des routines pré-compétition qui permettent de monter en puissance ou de se calmer.\n' +
            '\n' +
            'Éviter l’excès de stress : Une activation excessive peut entraîner du stress, de l’anxiété, ou un blocage, ce qui nuit à la performance. Le but est d’apprendre à reconnaître ses signes d’excès d’activation (tensions musculaires, pensées confuses) et de ramener son état mental et physique à un niveau optimal.\n' +
            '\n' +
            'En résumé :\n' +
            'L\'activation en préparation mentale est la capacité à ajuster son niveau d’énergie en fonction des besoins de la situation, pour atteindre un état de performance optimal. Elle implique une gestion fine de son état d’éveil, en mobilisant l’énergie nécessaire sans tomber dans l’excès de tension ou la sous-activation, pour rester efficace et concentré."',
        role:'',
        questions: [
            { text: 'Te sens-tu énergique et prêt(e) à donner le meilleur de toi-même avant la compétition ?', response: null },
            { text: 'Ressens-tu une légère tension ou excitation avant l’effort physique ?', response: null },
            { text: 'As-tu l\'impression d\'être concentré(e) sur ce que tu dois accomplir aujourd\'hui ?', response: null },
            { text: 'Te sens-tu calme et confiant(e) quant à ta capacité à gérer l’effort à venir ?', response: null },
            { text: 'Est-ce que tu ressens de la nervosité ou de l’anxiété avant de commencer ?', response: null },
            { text: 'Ton corps est-il réactif et prêt à bouger rapidement, sans fatigue excessive ?', response: null },
            { text: 'Te sens-tu mentalement éveillé(e) et clair(e) dans ta réflexion avant la compétition ?', response: null },
            { text: 'Ressens-tu que ton rythme cardiaque est légèrement accéléré, sans te sentir trop essoufflé(e) ?', response: null },
            { text: 'Te sens-tu impatient(e) ou excité(e) à l\'idée de commencer ?', response: null },
            { text: 'Ressens-tu un bon équilibre entre l\'envie d\'agir et le contrôle de tes émotions ?', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Stress',
        definition: '"Le stress et l\'anxiété, en lien avec la préparation mentale, sont des réactions psychologiques et physiologiques que les individus éprouvent face à des situations perçues comme exigeantes, menaçantes ou incertaines. Ces deux émotions, bien que similaires, ont des nuances distinctes. Le stress est souvent une réponse directe à une situation spécifique (examen, compétition), tandis que l\'anxiété est une inquiétude plus diffuse, parfois liée à l’anticipation d’événements futurs ou d’incertitudes.\n' +
            'Dans le cadre de la préparation mentale, la gestion du stress et de l’anxiété est essentielle pour permettre aux individus de maintenir leur concentration, leur calme, et leur efficacité dans les moments critiques."',
        role:'la gestion du stress est essentielle pour permettre aux individus de maintenir leur concentration, leur calme, et leur efficacité dans les moments critiques.',
        questions: [
            { text: 'Avant une compétition ou un entraînement important, je ressens une montée de tension physique (accélération du rythme cardiaque, transpiration, etc.).', response: null },
            { text: 'Je ressens souvent une pression intense à devoir bien performer, et cela affecte ma concentration.', response: null },
            { text: 'Je me sens sous pression quand les attentes de mon entraîneur ou de mes coéquipiers sont élevées.', response: null },
            { text: 'Juste avant de commencer une compétition, je ressens un niveau de tension que j\'ai du mal à gérer.', response: null },
            { text: 'Pendant un match ou une compétition difficile, je ressens une fatigue ou une perte d’énergie à cause de la pression.', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Anxiété',
        definition: '"Le stress et l\'anxiété, en lien avec la préparation mentale, sont des réactions psychologiques et physiologiques que les individus éprouvent face à des situations perçues comme exigeantes, menaçantes ou incertaines. Ces deux émotions, bien que similaires, ont des nuances distinctes. Le stress est souvent une réponse directe à une situation spécifique (examen, compétition), tandis que l\'anxiété est une inquiétude plus diffuse, parfois liée à l’anticipation d’événements futurs ou d’incertitudes.\n' +
            'Dans le cadre de la préparation mentale, la gestion du stress et de l’anxiété est essentielle pour permettre aux individus de maintenir leur concentration, leur calme, et leur efficacité dans les moments critiques."',
        role:'la gestion de l’anxiété est essentielle pour permettre aux individus de maintenir leur concentration, leur calme, et leur efficacité dans les moments critiques.',
        questions: [
            { text: 'L\'anxiété est une inquiétude plus générale et durable, souvent liée à des pensées anticipatoires ou à des peurs de résultats négatifs.', response: null },
            { text: 'Je me fais souvent du souci à l’avance pour des compétitions ou des situations sportives qui ne se dérouleront que dans plusieurs jours.', response: null },
            { text: 'Même lorsque je ne suis pas en compétition, j’ai tendance à m\'inquiéter de ma performance future.', response: null },
            { text: 'J\'ai souvent peur de décevoir les autres ou de ne pas être à la hauteur, même si la compétition n’a pas encore commencé.', response: null },
            { text: 'Il m\'arrive fréquemment de repenser aux erreurs que j\'ai faites dans le passé et d\'avoir peur de les reproduire.', response: null },
            { text: 'En général, je me sens souvent anxieux(se) à propos de ma carrière sportive, même sans compétition imminente.', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Confiance',
        definition: 'La confiance, dans le cadre de la préparation mentale, est la conviction en ses propres capacités à réussir et à faire face aux défis. Elle se construit grâce à une préparation rigoureuse, des outils comme la visualisation et les affirmations positives, et à travers la gestion des échecs de manière constructive. La confiance est un facteur clé qui influence directement la performance, l’engagement, et la capacité à persévérer face aux obstacles. Une bonne préparation mentale vise à développer cette confiance en soi pour que l\'individu aborde chaque situation avec assurance et calme.',
        role:'La confiance en soi est un facteur déterminant dans la performance. Elle permet  de s\'engager pleinement dans ses compétences, de prendre des décisions rapidement et de mieux gérer les situations stressantes. ',
        questions: [
            { text: 'J\'ai souvent des doutes sur mes capacités à cause d\'échecs ou de mauvaises performances passées.', response: null },
            { text: 'Je me remémore fréquemment mes réussites passées pour me donner du courage lors des compétitions.', response: null },
            { text: 'Les erreurs que j\'ai commises par le passé me font souvent perdre confiance en moi dans des situations similaires.', response: null },
            { text: 'Je me sens sûr(e) de mes compétences pendant les entraînements ou les compétitions.', response: null },
            { text: 'Je me concentre pleinement sur ce que je fais sans douter de mes capacités.', response: null },
            { text: 'Lorsque je rencontre des difficultés pendant une compétition, je me fais confiance pour m’adapter et réagir efficacement.', response: null },
            { text: 'Je suis confiant(e) quant à mes chances de réussir mes futures compétitions.', response: null },
            { text: 'Je m\'inquiète fréquemment de ne pas être à la hauteur lors des prochains événements sportifs.', response: null },
            { text: 'Je crois en mes capacités à atteindre mes objectifs à long terme dans ma carrière sportive.', response: null },
            { text: 'Je me prépare mentalement à réussir mes compétitions à venir et cela renforce ma confiance.', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Motivation',
        definition: 'La motivation, dans le cadre de la préparation mentale, est la force qui pousse un individu à rester engagé, à persévérer et à maintenir ses efforts vers l\'atteinte de ses objectifs. Elle peut être nourrie par des sources internes (intrinsèques) ou externes (extrinsèques) et est soutenue par des techniques comme la fixation d’objectifs, la visualisation, et les affirmations positives. Une bonne préparation mentale vise à renforcer cette motivation, à la raviver en cas de baisse de régime, et à l\'utiliser pour surmonter les obstacles et atteindre la performance optimale.',
        role:'La motivation est un élément fondamental de la réussite sportive. Elle permet de maintenir l’effort et l’engagement malgré les difficultés, qu’il s’agisse de motivation intrinsèque (liée au plaisir de la pratique) ou extrinsèque (liée à des récompenses externes). ',
        questions: [
            { text: 'Mes expériences passées en sport (échecs) influencent mon niveau de motivation actuel.', response: null },
            { text: 'Lorsque je repense à mes anciens objectifs atteints, cela me motive pour en fixer de nouveaux.', response: null },
            { text: 'Les moments où j’ai abandonné ou échoué par le passé affectent ma motivation aujourd\'hui.', response: null },
            { text: 'Je me sens motivé(e) chaque jour pour m’entraîner et donner le meilleur de moi-même.', response: null },
            { text: 'Je reste motivé(e) même lorsque je rencontre des difficultés pendant mes entraînements ou compétitions.', response: null },
            { text: 'Je trouve du plaisir et de la satisfaction dans chaque session d\'entraînement, indépendamment des résultats.', response: null },
            { text: 'Je suis motivé(e) à l’idée d’atteindre mes objectifs futurs et de repousser mes limites.', response: null },
            { text: 'Je me sens démotivé(e) lorsque je pense aux efforts nécessaires pour réussir à long terme.', response: null },
            { text: 'Je me fixe des objectifs précis et ambitieux pour maintenir ma motivation dans mon sport.', response: null },
            { text: 'Je suis parfois découragé(e) par mes échecs passés, ce qui nuit à ma motivation actuelle.', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Emotions',
        definition: 'La motivation, dans le cadre de la préparation mentale, est la force qui pousse un individu à rester engagé, à persévérer et à maintenir ses efforts vers l\'atteinte de ses objectifs. Elle peut être nourrie par des sources internes (intrinsèques) ou externes (extrinsèques) et est soutenue par des techniques comme la fixation d’objectifs, la visualisation, et les affirmations positives. Une bonne préparation mentale vise à renforcer cette motivation, à la raviver en cas de baisse de régime, et à l\'utiliser pour surmonter les obstacles et atteindre la performance optimale.',
        role:'Les émotions, en lien avec la préparation mentale, se réfèrent à l\'ensemble des réactions affectives qu\'une personne éprouve face à des événements, des situations ou des défis. Elles jouent un rôle crucial dans la performance, car elles peuvent à la fois être des catalyseurs de succès ou des obstacles à surmonter. En préparation mentale, la gestion des émotions est essentielle pour rester performant, calme et concentré dans les moments décisifs.\n' +
            '',
        questions: [
            { text: 'Ressens-tu régulièrement de la frustration ou de la colère pendant tes entraînements ou tes compétitions ?', response: null },
            { text: 'As-tu du mal à te concentrer lorsque tu es stressé(e) par un enjeu important ?', response: null },
            { text: 'Quand tu fais face à un échec ou à une mauvaise performance, ressens-tu des difficultés à retrouver ton calme rapidement ?', response: null },
            { text: 'Pendant une compétition, ressens-tu des moments où tes émotions prennent le dessus et affectent négativement ta performance ?', response: null },
            { text: 'As-tu tendance à ressasser les erreurs que tu fais pendant une compétition, ce qui perturbe la suite de ta performance ?', response: null },
            { text: 'Quand tu es sous pression, as-tu des pensées négatives qui viennent perturber ta confiance en toi ?', response: null },
            { text: 'As-tu du mal à gérer tes émotions (stress, anxiété, frustration) avant une compétition importante ?', response: null },
            { text: 'Ton humeur hors du terrain affecte-t-elle souvent tes performances sportives ?', response: null },
            { text: 'Quand tu es en situation d’échec ou de difficulté, as-tu du mal à adapter ton comportement pour rester positif et combatif ?   ', response: null },
            { text: 'As-tu l’impression que tes émotions influencent la qualité de tes relations avec tes coéquipiers ou entraîneurs lors des compétitions ?', response: null },
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Estime de sois',
        definition: 'L\'estime de soi, en préparation mentale, est la perception de sa propre valeur et de ses compétences. Elle influence directement la capacité à prendre des risques, à s’engager pleinement, et à persévérer face aux défis. Une estime de soi élevée favorise la résilience et permet de mieux gérer les échecs, tandis qu\'une estime de soi faible peut entraîner des comportements d’auto-sabotage ou de retrait. La préparation mentale vise à renforcer l\'estime de soi grâce à des techniques telles que les affirmations positives, la visualisation des succès passés, et la mise en place de routines régulières. Une bonne estime de soi est essentielle pour maximiser les performances et aborder chaque situation avec assurance et optimisme.',
        role:'L\'estime de soi est un élément essentiel de la performance sportive, car elle influence la confiance de l\'athlète en ses capacités, sa motivation, et sa persévérance.',
        questions: [
            { text: 'Je me sens généralement compétent(e) dans mon sport.', response: null },
            { text: 'J’ai confiance en mes capacités à surmonter les défis que je rencontre dans mon sport.', response: null },
            { text: 'Je me sens fier(ère) de mes accomplissements, même si ce sont de petites victoires.', response: null },
            { text: 'Je me compare souvent aux autres et je me sens inférieur(e) ou moins capable.', response: null },
            { text: 'J’accepte mes erreurs et mes échecs, et je les utilise pour progresser.', response: null },
            { text: 'Je pense que je mérite le respect et la reconnaissance de mes coéquipiers et/ou de mon entraîneur.', response: null },
            { text: 'Je suis capable de maintenir un bon niveau de confiance, même après une mauvaise performance.', response: null },
            { text: 'Je me sens à la hauteur des attentes que je me fixe dans mon sport.', response: null },
            { text: 'Je crois que je peux accomplir de grandes choses dans mon sport si je continue à m’entraîner et à m\'améliorer.', response: null },
            { text: 'J\'ai souvent l\'impression que je ne mérite pas les compliments ou les réussites que j\'obtiens dans mon sport.', response: null }
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
    {
        name: 'Energie',
        definition:'L\'énergie, en lien avec la préparation mentale, fait référence à la mobilisation des ressources physiques et mentales nécessaires pour atteindre des performances optimales. Elle concerne la capacité d’un individu à maintenir un niveau de vitalité suffisant pour faire face aux défis, tout en gérant efficacement ses réserves d’énergie pour éviter l’épuisement. Une bonne gestion de l’énergie est essentielle pour maximiser la performance, la concentration, et la persévérance, que ce soit dans le sport, le travail, ou les activités quotidiennes',
        role:'L\'énergie, dans le cadre de la préparation mentale, représente la capacité à mobiliser et réguler ses ressources mentales et physiques de manière optimale pour répondre aux exigences de la tâche. Elle inclut la gestion de l’énergie mentale (concentration, attention), l’énergie physique (effort et endurance), et la récupération après des périodes de stress ou d’effort intense. La préparation mentale vise à maintenir un niveau d\'énergie adapté aux besoins de la situation, à éviter l’épuisement, et à permettre à l\'individu de mobiliser ses forces au bon moment, pour atteindre une performance optimale.',
        questions: [
            { text: 'J\'ai l\'impression que mes performances passées ont parfois été limitées par un manque d\'énergie.', response: null },
            { text: 'Lorsque je repense à des moments où j\'étais en pleine forme, cela m\'aide à me motiver et à générer de l\'énergie.', response: null },
            { text: 'Je me suis souvent senti(e) épuisé(e) après des compétitions ou des entraînements intenses.', response: null },
            { text: 'Je me sens énergique et plein(e) de vitalité pendant mes entraînements actuels.', response: null },
            { text: 'J\'ai souvent besoin de faire des pauses ou de réduire l’intensité des exercices à cause d’un manque d’énergie.', response: null },
            { text: 'Je parviens à maintenir un bon niveau d’énergie tout au long de la journée, même en dehors des entraînements.', response: null },
            { text: 'Je me sens confiant(e) quant à ma capacité à maintenir un bon niveau d’énergie dans les compétitions à venir.', response: null },
            { text: 'Je m\'inquiète souvent de ne pas avoir assez d’énergie pour atteindre mes objectifs sportifs à long terme.', response: null },
            { text: 'J\'ai mis en place des stratégies pour gérer mon énergie et éviter l\'épuisement à l’avenir.', response: null },
            { text: 'Je planifie mes périodes de récupération pour maintenir un bon niveau d\'énergie sur le long terme.', response: null }
        ],
        "Scores": [
            {
                min: 0,
                max: 20,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 21,
                max: 35,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            },
            {
                min: 36,
                max: 50,
                ScoreLabel: "Niveau de communication faible",
                ScoreDefinition: "L’athlète a des difficultés à communiquer efficacement dans son environnement sportif.",
            }
        ]
    },
];



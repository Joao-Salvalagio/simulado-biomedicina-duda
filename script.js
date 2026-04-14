// Banco de Dados de Conteúdos e Laboratórios
const conteudos = {
    "modulo1": {
        titulo: "Módulo 1: Introdução, Fase Pré-Analítica e Microbiota",
        resumo: `
            <h3>Resumo Teórico - Introdução à Microbiologia Clínica</h3>
            <p><strong>Raciocínio Microbiológico:</strong> Síndrome Clínica $\\rightarrow$ Provável Agente $\\rightarrow$ Amostra Correta $\\rightarrow$ Teste Ideal $\\rightarrow$ Interpretação.</p>
            <p><strong>Microbiota Normal:</strong> Barreira de proteção por competição e produção de substâncias (ex: bacteriocinas). O desequilíbrio (disbiose) provocado por antibióticos ou quebra de barreiras naturais abre portas a infeções oportunistas.</p>
            <p><strong>Sítios Estéreis vs Colonizados:</strong> Sangue, LCR e fluidos de cavidades fechadas são estéreis. Trato GI, vagina e pele são colonizados. Amostras de sítios estéreis com crescimento indicam quase sempre infeção verdadeira.</p>
            <p><strong>Meios de Cultura e Testes Iniciais:</strong> 
                <br>- <em>Exame Direto (Gram):</em> Rápido e barato. Define a forma (cocos, bacilos) e a parede (Gram+ roxo, Gram- rosa), orientando a terapia empírica.
                <br>- <em>Meios:</em> Sangue (enriquecido/diferencial de hemólise), Chocolate (fastidiosos como Haemophilus e Neisseria), MacConkey (seletivo para Gram negativos / diferencial para lactose).
            </p>
        `,
        dissertativas: [
            { pergunta: "Explique a diferença técnica e biológica entre a microbiota residente e a microbiota transitória.", padraoOuro: "A residente consiste em microrganismos fixos que se restabelecem rapidamente (ex: Staphylococcus epidermidis na pele). A transitória habita temporariamente, vinda do ambiente, não se estabelecendo permanentemente." },
            { pergunta: "Diferencie esterilização de desinfeção.", padraoOuro: "Esterilização destrói todos os microrganismos, incluindo esporos bacterianos (ex: Autoclave). Desinfeção reduz o número de patogénos a um nível seguro, mas não elimina necessariamente esporos." },
            { pergunta: "Cite 3 exemplos de sítios anatómicos estéreis e 3 normalmente colonizados.", padraoOuro: "Estéreis: Sangue, LCR e Líquido Pleural/Sinovial. Colonizados: Intestino, Pele e Vagina." },
            { pergunta: "Qual a função de um 'meio de transporte' (como Stuart ou Amies) no envio de amostras?", padraoOuro: "Preservar a viabilidade dos microrganismos sem permitir multiplicação excessiva durante o transporte (evitando que bactérias de crescimento rápido mascarem as exigentes) e evitando o ressecamento celular." },
            { pergunta: "Por que o LCR (Líquido Cefalorraquidiano) nunca deve ser refrigerado?", padraoOuro: "Patogénos causadores de meningite, como Neisseria meningitidis e Haemophilus influenzae, são fastidiosos e altamente sensíveis a choques térmicos pelo frio, morrendo rapidamente sob refrigeração." }
        ],
        casos: [
            { pergunta: "Paciente, 45 anos, internado na UTI por trauma grave. Enfermeiro colhe secreção de uma ferida cirúrgica purulenta utilizando um swab seco de algodão e envia ao laboratório 5 horas após a colheita, sem refrigeração. \n1. Indique a conduta do laboratório em relação a esta amostra.\n2. Justifique a sua decisão com base nos erros da fase pré-analítica.\n3. Descreva o procedimento correto de colheita.", padraoOuro: "1. A amostra deve ser REJEITADA. \n2. Swabs secos ressecam a amostra, destruindo bactérias frágeis. Além disso, o tempo máximo de transporte para swab seco é muito inferior a 5 horas, havendo proliferação de contaminantes e morte dos patogénos verdadeiros. \n3. A colheita ideal de feridas purulentas profundas é por aspiração com seringa/agulha (evitando a flora da pele superficial) ou, no mínimo, usando swab com meio de transporte (Stuart/Amies)." },
            { pergunta: "Paciente chega à urgência com rigidez na nuca, febre e fotofobia (sintomas de meningite). O médico realiza punção lombar (LCR) e, por atraso no envio, a amostra é guardada no frigorífico (4ºC) durante a noite. \n1. Qual o impacto desta ação nos patogénos suspeitos?\n2. Como o técnico do laboratório deve proceder ao receber o LCR e quais os meios primários para sementeira?", padraoOuro: "1. A refrigeração destruirá agentes fastidiosos como N. meningitidis e H. influenzae, causando falsos negativos graves. \n2. O LCR é uma amostra nobre e de urgência (processamento imediato). Deve ser centrifugado; o sedimento é usado para o Gram e semeado obrigatoriamente em Ágar Sangue e Ágar Chocolate incubados em microaerofilia (jarra com CO2)." }
        ],
        objetivas: [
            { pergunta: "A função do Lugol na coloração de Gram é atuar como:", opcoes: ["A) Corante primário, fixando-se no núcleo.", "B) Mordente, formando um complexo insolúvel com o cristal violeta na parede celular.", "C) Descorante, removendo a cor das bactérias Gram-negativas.", "D) Corante de contraste."], correta: 1 },
            { pergunta: "Numa suspeita de septicemia, a recomendação clássica para a colheita de hemoculturas num doente adulto é:", opcoes: ["A) Apenas um frasco aeróbio colhido do acesso central.", "B) 2 a 3 pares (aeróbio/anaeróbio) de locais de punção venosa periférica distintos.", "C) Sangue arterial colhido exclusivamente no pico febril.", "D) 10 mL de sangue num tubo com anticoagulante EDTA (tampa roxa)."], correta: 1 },
            { pergunta: "Sítio anatómico que, em condições de saúde normal, DEVE ser totalmente estéril:", opcoes: ["A) Trato Gastrointestinal inferior.", "B) Vagina da mulher em idade reprodutiva.", "C) Orofaringe.", "D) Líquido Cefalorraquidiano (LCR)."], correta: 3 }
        ],
        lab: {
            inicioId: "passo1",
            etapas: {
                "passo1": {
                    icone: "🧊",
                    texto: "BIP BIP! Chegou uma amostra de Líquido Cefalorraquidiano (LCR) no laboratório. O rótulo indica que ficou no frigorífico (4ºC) a noite toda pela enfermagem. Qual a sua conduta na triagem?",
                    opcoes: [
                        { texto: "Aceitar a amostra e semear rapidamente", proximo: "erro_lcr" },
                        { texto: "Rejeitar a amostra e solicitar nova colheita com urgência", proximo: "passo2" }
                    ]
                },
                "erro_lcr": {
                    icone: "❌",
                    texto: "ERRO GRAVE! O LCR nunca deve ser refrigerado. Patógenos de meningite (como N. meningitidis e H. influenzae) são altamente sensíveis ao frio e morrem. Você geraria um laudo Falso-Negativo!",
                    opcoes: [{ texto: "Tentar Novamente", proximo: "passo1" }]
                },
                "passo2": {
                    icone: "✅",
                    texto: "CORRETO! Você pediu nova colheita. A nova amostra chegou à temperatura ambiente. Você vai iniciar o Gram. Qual é o primeiro reagente aplicado na lâmina?",
                    opcoes: [
                        { texto: "Fucsina", proximo: "erro_gram1" },
                        { texto: "Cristal Violeta", proximo: "passo3" },
                        { texto: "Lugol", proximo: "erro_gram1" }
                    ]
                },
                "erro_gram1": {
                    icone: "❌",
                    texto: "Incorreto! A coloração de Gram tem uma ordem estrita (Cristal Violeta -> Lugol -> Álcool -> Fucsina).",
                    opcoes: [{ texto: "Voltar à bancada", proximo: "passo2" }]
                },
                "passo3": {
                    icone: "💧",
                    texto: "Muito bem. Após o Cristal Violeta e o Lugol, você descolora com Álcool-Acetona e aplica o corante de contraste Fucsina. Ao microscópio, você vê bactérias redondas em cachos de cor ROXA. Qual o laudo?",
                    opcoes: [
                        { texto: "Bacilos Gram-Negativos", proximo: "erro_laudo" },
                        { texto: "Cocos Gram-Positivos em cachos", proximo: "vitoria" }
                    ]
                },
                "erro_laudo": {
                    icone: "❌",
                    texto: "Bactérias roxas são Gram-Positivas! E as redondas são Cocos.",
                    opcoes: [{ texto: "Olhar novamente", proximo: "passo3" }]
                },
                "vitoria": {
                    icone: "🏆",
                    texto: "PARABÉNS! Triagem e Gram impecáveis. Pode liberar o resultado preliminar para o médico!",
                    opcoes: [{ texto: "Reiniciar Laboratório", proximo: "fim" }]
                }
            }
        }
    },

    "modulo2": {
        titulo: "Módulo 2: Infeções do Trato Urinário (ITU)",
        resumo: `
            <h3>Resumo Teórico - Fisiopatologia e Diagnóstico de ITU</h3>
            <p><strong>Diferenciação Clínica e Laboratorial:</strong>
                <br><em>- Cistite:</em> Infeção baixa. O EAS mostra Piúria (muitos leucócitos) e Nitrito Positivo.
                <br><em>- Pielonefrite:</em> Infeção alta. O EAS mostra, além de leucócitos, <strong>Cilindros Leucocitários</strong> (patognomónico de origem renal).
            </p>
            <p><strong>Agentes Especiais:</strong> *Proteus mirabilis* produz enzima Urease $\\rightarrow$ pH da urina > 8,0 $\\rightarrow$ cálculos coraliformes. *Staphylococcus saprophyticus* é Gram Positivo, causa cistite, mas gera EAS com Nitrito Negativo.</p>
            <p><strong>Urocultura:</strong> Usa-se alça calibrada (1 µL ou 10 µL). Meios: Ágar CLED (não seletivo, inibe o véu do *Proteus*) e Ágar MacConkey.</p>
        `,
        dissertativas: [
            { pergunta: "Diferencie clinicamente Cistite de Pielonefrite e aponte um marcador microscópico laboratorial (EAS) decisivo para esta diferenciação.", padraoOuro: "Cistite é infeção na bexiga, com sintomas locais. Pielonefrite atinge os rins, cursando com febre alta e dor lombar. O marcador definitivo no sedimento para Pielonefrite são os Cilindros Leucocitários." },
            { pergunta: "Explique a fisiopatologia da formação de cálculos renais coraliformes associados à infeção por Proteus mirabilis.", padraoOuro: "O P. mirabilis possui a enzima urease que converte ureia em amónia. Isto torna a urina extremamente alcalina (pH > 8.0), precipitando sais e formando cálculos de estruvita." },
            { pergunta: "No exame de Tira Reativa (EAS), o paciente apresenta 'Nitrito Positivo'. O que significa e por que infeções por Enterococcus dão nitrito negativo?", padraoOuro: "O Nitrito positivo indica presença de enterobactérias produtoras de nitrato-redutase. Enterococcus e Staphylococcus (Gram+) não possuem esta enzima, resultando em nitrito negativo mesmo com infeção." },
            { pergunta: "Por que os laboratórios utilizam rotineiramente o Ágar CLED para semear urinas, ao invés do Ágar Sangue?", padraoOuro: "O CLED suporta uropatógenos e a sua carência de eletrólitos inibe o fenómeno de 'swarming' (crescimento invasivo em véu) do Proteus, permitindo a contagem das colónias." }
        ],
        casos: [
            { pergunta: "Paciente, 76 anos, dor lombar severa, calafrios e febre. Sinal de Giordano positivo. EAS revela urina turva, nitrito positivo e Cilindros Leucocitários.\n1. Justifique a presença dos Cilindros Leucocitários.\n2. Qual o provável agente etiológico sendo Gram-negativo?", padraoOuro: "1. Cilindros leucocitários são formados nos túbulos renais devido a inflamação, comprovando Pielonefrite. \n2. BGN e nitrito + em mulher da comunidade aponta fortemente para Escherichia coli." },
            { pergunta: "Num hospital, uma urina de jato médio é esquecida na bancada a 25ºC desde as 09:00h até às 16:30h. Na cultura, crescimento massivo de 4 tipos distintos de colónias (>100.000 UFC/mL).\n1. Confirma infeção múltipla grave?\n2. Que erro ocorreu?", padraoOuro: "1. Não. 3 ou mais tipos de colónias indicam contaminação. \n2. O erro foi o tempo à temperatura ambiente, permitindo que bactérias contaminantes se multiplicassem. O laboratório deve rejeitar e pedir nova colheita." }
        ],
        objetivas: [
            { pergunta: "O marcador laboratorial patognomónico da ocorrência de uma Pielonefrite no EAS é a presença de:", opcoes: ["A) Hemácias dismórficas.", "B) Cristais de oxalato de cálcio.", "C) Cilindros Leucocitários.", "D) Células epiteliais pavimentosas."], correta: 2 },
            { pergunta: "O meio ideal para a sementeira de urina, que inibe o crescimento invasivo em 'véu' do Proteus é:", opcoes: ["A) Ágar MacConkey", "B) Caldo Selenito", "C) Ágar CLED", "D) Ágar Sangue"], correta: 2 },
            { pergunta: "Doente internada. Laboratório usa alça calibrada de 10 µL (0,01 mL). Após incubação, contam-se 15 colónias. Qual a contagem final?", opcoes: ["A) 150 UFC/mL", "B) 1.500 UFC/mL", "C) 15.000 UFC/mL", "D) 150.000 UFC/mL"], correta: 1 }
        ],
        lab: {
            inicioId: "passo1",
            etapas: {
                "passo1": {
                    icone: "🧫",
                    texto: "Chegou uma urina de jato médio. Você vai iniciar a Urocultura quantitativa. Que instrumento de sementeira você deve utilizar para inocular a placa?",
                    opcoes: [
                        { texto: "Zaragatoa (Swab) estéril", proximo: "erro_alca" },
                        { texto: "Alça Calibrada de 1 µL", proximo: "passo2" }
                    ]
                },
                "erro_alca": {
                    icone: "❌",
                    texto: "O Swab não absorve um volume exato de urina! Para contar UFC/mL, você precisa inocular um volume precisamente medido (1 µL ou 10 µL).",
                    opcoes: [{ texto: "Voltar", proximo: "passo1" }]
                },
                "passo2": {
                    icone: "🧪",
                    texto: "Você pegou a alça calibrada de 1 µL. O médico desconfia de uma infeção por Proteus mirabilis. Em que meio de cultura você vai semear para impedir que o 'véu' do Proteus tape a placa toda?",
                    opcoes: [
                        { texto: "Ágar Sangue", proximo: "erro_meio" },
                        { texto: "Ágar CLED", proximo: "passo3" }
                    ]
                },
                "erro_meio": {
                    icone: "❌",
                    texto: "No Ágar Sangue o Proteus faz 'Swarming' (crescimento em véu), tapando tudo. O Ágar CLED é deficiente em eletrólitos e inibe esse véu!",
                    opcoes: [{ texto: "Escolher outro meio", proximo: "passo2" }]
                },
                "passo3": {
                    icone: "🧮",
                    texto: "Muito bem! Após 24h na estufa, você conta exatamente 60 colónias na placa de CLED. Lembrando que você usou a alça de 1 µL (fator de multiplicação de 1.000), qual será a contagem no laudo?",
                    opcoes: [
                        { texto: "600 UFC/mL", proximo: "erro_conta" },
                        { texto: "60.000 UFC/mL", proximo: "vitoria" }
                    ]
                },
                "erro_conta": {
                    icone: "❌",
                    texto: "Matemática incorreta. 60 colónias x Fator da alça (1.000) não dá 600.",
                    opcoes: [{ texto: "Calcular novamente", proximo: "passo3" }]
                },
                "vitoria": {
                    icone: "🏆",
                    texto: "PERFEITO! 60 x 1.000 = 60.000 UFC/mL. De acordo com os novos critérios, numa doente sintomática, isto configura uma ITU verdadeira. Bom trabalho!",
                    opcoes: [{ texto: "Reiniciar Laboratório", proximo: "fim" }]
                }
            }
        }
    },

    "modulo3": {
        titulo: "Módulo 3: Infeções do Trato Gastrointestinal",
        resumo: `
            <h3>Resumo Teórico - Diarreias e Coprocultura</h3>
            <p><strong>Clínica:</strong> Diarreia Toxigénica (sem leucócitos fecais) vs Disenteria/Invasiva (com muco, sangue e <strong>Leucócitos presentes</strong>).</p>
            <p><strong>Fluxograma da Coprocultura:</strong>
                <br>- Semeia-se primeiro num <strong>Caldo de Enriquecimento</strong> (Selenito) para inibir coliformes e potenciar *Salmonella/Shigella*.
                <br>- Isola-se no <strong>Ágar SS</strong>: Ambas não fermentam lactose (incolores). *Salmonella* produz H2S (centro negro), *Shigella* não (totalmente incolor).
            </p>
            <p><strong>EHEC:</strong> *E. coli* O157:H7 (carne mal cozinhada) produz Toxina Shiga, causando Síndrome Hemolítico-Urémica (SHU).</p>
        `,
        dissertativas: [
            { pergunta: "Por que motivo a coloração de Gram não é utilizada rotineiramente para identificar patógenos na coprocultura?", padraoOuro: "Fezes humanas possuem biliões de bactérias Gram-negativas da microbiota normal. O Gram não consegue diferenciar a E. coli inofensiva de uma Salmonella patogénica." },
            { pergunta: "Explique a função do Caldo Selenito no protocolo laboratorial de fezes.", padraoOuro: "O caldo selenito inibe temporariamente os coliformes fecais normais e favorece a multiplicação vigorosa de Salmonella e Shigella, enriquecendo a amostra." },
            { pergunta: "Descreva o aspeto macroscópico da Salmonella e da Shigella no Ágar SS e a prova que as distingue.", padraoOuro: "Ambas formam colónias incolores (não fermentam lactose). A Salmonella produz H2S, gerando colónias com 'CENTRO NEGRO'. A Shigella não produz H2S (totalmente incolor)." }
        ],
        casos: [
            { pergunta: "Criança com diarreia sanguinolenta severa. Comeu hambúrgueres há 3 dias. Análises: anemia, baixa de plaquetas e falência renal. Qual o agente e a complicação?", padraoOuro: "Agente: E. coli Enterohemorrágica (EHEC). Complicação: Síndrome Hemolítico-Urémica (SHU), mediada pela Toxina Shiga." },
            { pergunta: "Doente idoso, após 3 semanas de Clindamicina, tem diarreia aquosa fétida. Colonoscopia: placas branco-amareladas (pseudomembranas). Qual o patógeno e porquê?", padraoOuro: "Clostridioides difficile. O antibiótico eliminou a flora saudável (disbiose severa), permitindo que os esporos do C. difficile germinassem e libertassem toxinas." }
        ],
        objetivas: [
            { pergunta: "Na triagem visual do Ágar SS (Salmonella-Shigella), que caraterística distingue a Salmonella da Shigella?", opcoes: ["A) Salmonella fermenta lactose, criando colónias rosadas.", "B) Shigella hidrolisa a ureia no Ágar SS.", "C) Salmonella produz Gás Sulfídrico (H2S), que precipita conferindo um 'Centro Negro' à colónia.", "D) Shigella cresce com halo verde."], correta: 2 },
            { pergunta: "A bactéria do Helicobacter pylori sobrevive no ácido gástrico graças à produção de:", opcoes: ["A) Uma cápsula espessa.", "B) Toxina Shiga.", "C) Uma potente enzima Urease, que alcaliniza o meio ao seu redor.", "D) Endosporos."], correta: 2 },
            { pergunta: "Qual bactéria associada a laticínios não pasteurizados tem capacidade de transpor a barreira placentária, sendo fatal para fetos?", opcoes: ["A) Listeria monocytogenes", "B) Vibrio cholerae", "C) E. coli EPEC", "D) Campylobacter jejuni"], correta: 0 }
        ],
        lab: {
            inicioId: "passo1",
            etapas: {
                "passo1": {
                    icone: "💩",
                    texto: "Recebeu uma amostra de fezes de um paciente com suspeita de Salmonella. As fezes normais estão cheias de E. coli não-patogénica que pode mascarar o crescimento do patógeno. O que você faz primeiro?",
                    opcoes: [
                        { texto: "Fazer logo um Gram para tentar achar a Salmonella", proximo: "erro_gram_fezes" },
                        { texto: "Inocular num Caldo de Enriquecimento (Selenito)", proximo: "passo2" }
                    ]
                },
                "erro_gram_fezes": {
                    icone: "❌",
                    texto: "Incorreto! Gram de fezes não diferencia Salmonella de E. coli normal (ambas são Bacilos Gram-Negativos). O Gram na copro serve apenas para ver leucócitos.",
                    opcoes: [{ texto: "Voltar à bancada", proximo: "passo1" }]
                },
                "passo2": {
                    icone: "🧪",
                    texto: "Muito bem, o Caldo Selenito vai inibir a flora normal e fazer a Salmonella crescer. Após 24h, você vai passar (repicar) esse caldo para uma placa de Ágar SS. No dia seguinte, que tipo de colónia você procura se for realmente Salmonella?",
                    opcoes: [
                        { texto: "Colónias rosadas, grandes e mucosas", proximo: "erro_ss" },
                        { texto: "Colónias incolores (pálidas) com um PONTO NEGRO no centro", proximo: "vitoria" }
                    ]
                },
                "erro_ss": {
                    icone: "❌",
                    texto: "Colónias rosadas no meio SS indicam bactérias que fermentam a lactose (como a flora normal E. coli). Salmonella e Shigella NÃO fermentam lactose (ficam incolores).",
                    opcoes: [{ texto: "Reavaliar a placa", proximo: "passo2" }]
                },
                "vitoria": {
                    icone: "🏆",
                    texto: "PERFEITO! O centro negro é o Gás Sulfídrico (H2S), que é a marca registada da Salmonella e a distingue da Shigella. Pode seguir para o antibiograma!",
                    opcoes: [{ texto: "Reiniciar Laboratório", proximo: "fim" }]
                }
            }
        }
    },

    "modulo4": {
        titulo: "Módulo 4: Infeções Sexualmente Transmissíveis (IST)",
        resumo: `
            <h3>Resumo Teórico - Diagnóstico Laboratorial de ISTs</h3>
            <p><strong>Neisseria gonorrhoeae:</strong> Gram com <strong>Diplococos Gram-negativos intracelulares</strong> (grão de café). Cultura de eleição: <strong>Ágar Thayer-Martin</strong> em atmosfera com CO2.</p>
            <p><strong>Sífilis (Treponema pallidum):</strong>
                <br>- <em>Testes Não Treponémicos (VDRL):</em> Monitoriza tratamento (títulos devem cair). Cuidado com o <strong>Efeito Pró-Zona</strong> (Falso negativo por excesso de anticorpos; tem de diluir).
                <br>- <em>Testes Treponémicos (Rápidos):</em> Confirmam a doença, mas mantêm-se Positivos para o resto da vida (Cicatriz Serológica).
            </p>
            <p><strong>Vaginose Bacteriana:</strong> Critérios de Amsel incluem 'Clue Cells' (Células pista) e Teste das Aminas (KOH) positivo.</p>
        `,
        dissertativas: [
            { pergunta: "Qual a diferença laboratorial principal entre o Cancro Duro (Sífilis) e o Cancro Mole?", padraoOuro: "O T. pallidum não cora no Gram nem se cultiva in vitro. O Cancro Mole (H. ducreyi) pode ser observado no Gram como bacilos negativos em cadeias (formato de 'trilhos de comboio')." },
            { pergunta: "Descreva a morfologia microscópica observada no Gram de secreção uretral num doente com Gonorreia.", padraoOuro: "Identificam-se numerosos Leucócitos (PMN) contendo no citoplasma Diplococos Gram-negativos em forma de grão de café." },
            { pergunta: "O que é o 'Efeito Pró-zona' no teste VDRL e qual a solução?", padraoOuro: "O Efeito Pró-zona ocorre por um excesso extremo de anticorpos que inibe a aglutinação, gerando um falso-negativo. A solução é diluir o soro sucessivamente até a aglutinação ocorrer." }
        ],
        casos: [
            { pergunta: "Doente assintomático faz VDRL de rotina e o resultado é Reagente título 1:2. Um Teste Treponémico dá NÃO REAGENTE. Tem sífilis?", padraoOuro: "NÃO. Um teste treponémico negativo exclui sífilis. O VDRL baixo é um Falso-Positivo Biológico, comum em doenças autoimunes, gravidez ou inflamações crónicas." },
            { pergunta: "Uma mulher com queixa de odor fétido genital faz esfregaço. A citologia a fresco revela 'Clue Cells' e o teste de KOH libertou forte odor a peixe. Diagnóstico?", padraoOuro: "Vaginose Bacteriana. A presença de Clue Cells e o Whiff Test (Aminas) positivo preenchem os critérios de Amsel, marcando a disbiose por Gardnerella vaginalis." }
        ],
        objetivas: [
            { pergunta: "O meio de cultura seletivo e enriquecido indispensável na rotina para o isolamento da Neisseria gonorrhoeae é:", opcoes: ["A) Ágar MacConkey", "B) Ágar Thayer-Martin", "C) Caldo Selenito", "D) Ágar SS"], correta: 1 },
            { pergunta: "O fenómeno em que o VDRL de um paciente com sífilis aguda pode dar Falso-Negativo devido à enorme concentração de anticorpos chama-se:", opcoes: ["A) Cicatriz Serológica", "B) Reação Cruzada", "C) Efeito Pró-zona", "D) Falso Positivo Biológico"], correta: 2 },
            { pergunta: "As 'Clue Cells' observadas no exame a fresco de corrimento vaginal são o achado laboratorial de:", opcoes: ["A) Candidíase Vulvovaginal", "B) Vaginose Bacteriana (Gardnerella)", "C) Gonorreia", "D) Tricomoníase"], correta: 1 }
        ],
        lab: {
            inicioId: "passo1",
            etapas: {
                "passo1": {
                    icone: "🩸",
                    texto: "O hospital enviou um soro para testagem de VDRL. O paciente tem úlceras generalizadas suspeitas de Sífilis Secundária muito aguda. Ao pingar a amostra pura e o antigénio na placa, a leitura ao microscópio é NÃO REAGENTE (sem grumos). O que você faz?",
                    opcoes: [
                        { texto: "Libertar o laudo como Negativo e descartar Sífilis", proximo: "erro_vdrl" },
                        { texto: "Desconfiar do Efeito Pró-zona e diluir o soro do paciente", proximo: "passo2" }
                    ]
                },
                "erro_vdrl": {
                    icone: "❌",
                    texto: "Erro! Num paciente com clínica secundária exuberante, um VDRL negativo no soro puro é quase sempre um Falso-Negativo por Efeito Pró-Zona (excesso de anticorpos bloqueando a reação).",
                    opcoes: [{ texto: "Voltar à bancada", proximo: "passo1" }]
                },
                "passo2": {
                    icone: "🧪",
                    texto: "Excelente raciocínio. Você começou a diluir o soro em soro fisiológico (1:2, 1:4, 1:8, 1:16). Na diluição 1:32, começam a aparecer claramente grumos de aglutinação no microscópio! Como você emite este laudo?",
                    opcoes: [
                        { texto: "VDRL Reagente Título 1:32", proximo: "vitoria" },
                        { texto: "VDRL Inconclusivo", proximo: "erro_laudo2" }
                    ]
                },
                "erro_laudo2": {
                    icone: "❌",
                    texto: "Não é inconclusivo. A diluição permitiu a reação, confirmando a infeção altíssima.",
                    opcoes: [{ texto: "Tentar Novamente", proximo: "passo2" }]
                },
                "vitoria": {
                    icone: "🏆",
                    texto: "EXATAMENTE! Você contornou o Efeito Pró-zona, emitiu o laudo com o título correto (1:32) e o médico agora pode tratar o doente com a Penicilina correta. Excelente trabalho de bancada!",
                    opcoes: [{ texto: "Reiniciar Laboratório", proximo: "fim" }]
                }
            }
        }
    },

    "modulo5": {
        titulo: "Módulo 5: Infeções do Trato Respiratório",
        resumo: `
            <h3>Resumo Teórico - Infeções Respiratórias, Escarro e BAAR</h3>
            <p><strong>Qualidade do Escarro (Murray-Washington):</strong> Avalia-se no Gram se o escarro é profundo ou saliva.
                <br>- <strong>Saliva (REJEITAR):</strong> $> 25$ Cél. Epiteliais e $< 10$ Leucócitos PMN.
                <br>- <strong>Escarro (ACEITAR):</strong> $< 10$ Cél. Epiteliais e $> 25$ Leucócitos.
            </p>
            <p><strong>Hemólises:</strong>
                <br><em>- Alfa-hemólise (Verde/Parcial):</em> *S. pneumoniae*. Sensível à Optoquina.
                <br><em>- Beta-hemólise (Transparente/Total):</em> *S. pyogenes* (Amigdalite). Sensível à Bacitracina.
            </p>
            <p><strong>Micobactérias:</strong> Têm parede rica em ácidos micólicos. Usa-se a coloração de <strong>Ziehl-Neelsen</strong> (fucsina aquecida para penetrar), resultando em Bacilos Álcool-Ácido Resistentes (BAAR) rosas. O meio de cultura lento é o Löwenstein-Jensen (rico em ovos e com verde malaquita para inibir as bactérias da boca).</p>
        `,
        dissertativas: [
            { pergunta: "Qual é a base laboratorial do Critério de Murray-Washington na avaliação do escarro expectorado e por que ele é exigido?", padraoOuro: "Baseia-se na quantificação celular pelo Gram. Exige predominância de Leucócitos ($>25$/campo) e poucas Células Epiteliais da boca ($<10$/campo). Se tiver muitas epiteliais, é saliva contaminada e deve ser rejeitada." },
            { pergunta: "Qual a função do aquecimento (emissão de vapores) na coloração de Ziehl-Neelsen para as micobactérias?", padraoOuro: "As micobactérias possuem uma parede espessa de ácidos micólicos (cera) impermeável. O calor derrete temporariamente esses lipídios, permitindo que o corante Fucsina penetre e tinja o bacilo (BAAR)." },
            { pergunta: "Justifique de que forma atua quimicamente o Meio de Löwenstein-Jensen nas sementeiras demoradas da Tuberculose.", padraoOuro: "A cultura do M. tuberculosis demora semanas. O meio LJ incorpora Verde Malaquita, que inibe ativamente o crescimento rápido das bactérias contaminantes orais do escarro, impedindo que estas 'engulam' a placa." }
        ],
        casos: [
            { pergunta: "Paciente, 19 anos, tosse seca, sem febre alta. Gram do escarro não detetou bactérias e a cultura falhou aos 2 dias. O médico suspeita de Pneumonia Atípica. Qual o agente e por que falhou no Gram e cultura rotineira?", padraoOuro: "Agente: Mycoplasma pneumoniae. Falha no laboratório tradicional porque esta bactéria não possui Parede Celular (logo, não cora no Gram e é resistente a penicilinas) e é muito exigente em cultura, necessitando de diagnóstico molecular (PCR)." },
            { pergunta: "Idoso tosse expetoração ferruginosa. O Gram da amostra revelou abundantes PMN e Diplococos Gram-Positivos em lança. O ágar sangue mostrou hemólise esverdeada. Qual a prova de disco-difusão usada para confirmar a estirpe?", padraoOuro: "A prova de confirmação de ouro para o Streptococcus pneumoniae (hemólise alfa/verde) é o teste de sensibilidade ao disco de Optoquina, que formará um halo inibitório destruindo a bactéria." }
        ],
        objetivas: [
            { pergunta: "No critério de Murray-Washington, um escarro de boa qualidade vindo do fundo dos pulmões deve apresentar obrigatoriamente na leitura ótica:", opcoes: ["A) Uma massiva quantidade de células epiteliais escamosas da boca.", "B) Ausência total de qualquer célula ou leucócito.", "C) Mais de 25 Leucócitos PMN (inflamação) e menos de 10 células epiteliais por campo.", "D) Presença exclusiva de macrófagos hialinos mortos."], correta: 2 },
            { pergunta: "A coloração de Ziehl-Neelsen, essencial no rastreio da Tuberculose, utiliza calor para tingir o bacilo. Este bacilo corado resiste ativamente à descoloração subsequente, que é feita com:", opcoes: ["A) Álcool a 70% simples.", "B) Solução de Álcool-Ácido.", "C) Apenas água destilada.", "D) Solução de Lugol concentrado."], correta: 1 },
            { pergunta: "Qual agente é o temível causador de amigdalites purulentas pediátricas com elevado risco de febre reumática, e que in vitro apresenta Lise Beta Transparente inibida por disco de Bacitracina?", opcoes: ["A) Haemophilus influenzae", "B) Streptococcus pneumoniae", "C) Streptococcus pyogenes (EGA)", "D) Corynebacterium diphtheriae"], correta: 2 }
        ],
        lab: {
            inicioId: "passo1",
            etapas: {
                "passo1": {
                    icone: "🤧",
                    texto: "Chegou um frasco com expetoração à bacteriologia. O paciente tem suspeita de Pneumonia Lobar. Você faz o Gram e avalia a qualidade (Critério de Murray-Washington). Você observa: 35 Células Epiteliais Pavimentosas e apenas 2 Leucócitos por campo. Qual a sua ação?",
                    opcoes: [
                        { texto: "Validar e semear, é um ótimo escarro", proximo: "erro_escarro" },
                        { texto: "Rejeitar a amostra, é apenas saliva (cuspo)", proximo: "passo2" }
                    ]
                },
                "erro_escarro": {
                    icone: "❌",
                    texto: "ERRO. Muitas células epiteliais e poucos leucócitos indicam que o paciente apenas 'cuspiu' saliva da boca. A cultura vai crescer apenas flora oral normal e atrapalhar o médico.",
                    opcoes: [{ texto: "Voltar ao Microscópio", proximo: "passo1" }]
                },
                "passo2": {
                    icone: "🔬",
                    texto: "Muito bem! Foi solicitada nova colheita. A nova amostra tem 40 Leucócitos e raras células epiteliais. É purulenta e válida. Ao semear no Ágar Sangue e colocar na estufa com CO2, você repara no dia seguinte que as colónias estão rodeadas por um halo VERDE (Hemólise Alfa). O que você testa agora para confirmar o patógeno respiratório idoso clássico?",
                    opcoes: [
                        { texto: "Disco de Optoquina", proximo: "vitoria" },
                        { texto: "Disco de Bacitracina", proximo: "erro_disco" }
                    ]
                },
                "erro_disco": {
                    icone: "❌",
                    texto: "O disco de Bacitracina testa o *S. pyogenes* (que faz Beta-hemólise transparente em amigdalites). Nós temos Alfa-hemólise (verde) suspeita de *S. pneumoniae*.",
                    opcoes: [{ texto: "Escolher outro disco", proximo: "passo2" }]
                },
                "vitoria": {
                    icone: "🏆",
                    texto: "SUCESSO! O disco de Optoquina gerou um halo inibitório enorme. Diagnóstico: Streptococcus pneumoniae confirmado! Salvou mais uma vida com excelente técnica de bancada.",
                    opcoes: [{ texto: "Reiniciar Laboratório", proximo: "fim" }]
                }
            }
        }
    }
};

// ==========================================
// Lógica Principal de Navegação
// ==========================================
let topicoAtual = '';
let labAtualDados = null;

window.onload = () => {
    const modulesContainer = document.getElementById('modules-container');
    for (const key in conteudos) {
        const btn = document.createElement('button');
        btn.className = 'module-btn';
        btn.innerText = conteudos[key].titulo;
        btn.onclick = () => loadModule(key);
        modulesContainer.appendChild(btn);
    }
};

function loadModule(key) {
    topicoAtual = key;
    const data = conteudos[key];

    document.getElementById('topic-title').innerText = data.titulo;
    document.getElementById('resumo-text').innerHTML = data.resumo;

    renderTextCards(data.dissertativas, 'dissertativas-container');
    renderTextCards(data.casos, 'casos-container');
    renderObjetivas(data.objetivas);

    // Preparar o Laboratório se existir
    const labContainer = document.getElementById('lab-container');
    if (data.lab) {
        labAtualDados = data.lab;
        iniciarLab(data.lab.inicioId);
    } else {
        labContainer.innerHTML = `<div class="lab-step"><div class="lab-icon">🚧</div><div class="lab-text">Este laboratório virtual ainda está a ser construído para este módulo.</div></div>`;
    }

    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('study-screen').classList.add('active');
    showTab('resumo');
}

function goHome() {
    document.getElementById('study-screen').classList.remove('active');
    document.getElementById('menu-screen').classList.add('active');
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(`tab-${tabId}`).classList.add('active');
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => btn.getAttribute('onclick').includes(tabId));
    if(activeBtn) activeBtn.classList.add('active');
}

function renderTextCards(lista, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if(!lista || lista.length === 0) return;

    lista.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'card-content';
        div.innerHTML = `
            <h3>Questão ${index + 1}</h3>
            <p>${item.pergunta}</p>
            <textarea placeholder="Elabore o seu raciocínio clínico e laboratorial aqui..."></textarea>
            <button class="btn-action" onclick="toggleFeedback(this)">Ver Correção Padrão Ouro</button>
            <div class="feedback-area">
                <p><strong>Raciocínio Padrão Ouro:</strong><br>${item.padraoOuro}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function toggleFeedback(btn) {
    const feedback = btn.nextElementSibling;
    feedback.classList.toggle('visible');
    btn.innerText = feedback.classList.contains('visible') ? "Ocultar Correção Padrão Ouro" : "Ver Correção Padrão Ouro";
}

function renderObjetivas(questoes) {
    const container = document.getElementById('objetivas-container');
    container.innerHTML = '';

    if(!questoes || questoes.length === 0) return;

    questoes.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'card-content';
        let html = `<h3>Questão ${index + 1}</h3><p>${q.pergunta}</p><div class="options-grid">`;
        q.opcoes.forEach((opcao, i) => {
            html += `<button class="option-btn" onclick="checkAnswer(this, ${i}, ${q.correta})">${opcao}</button>`;
        });
        html += `</div>`;
        div.innerHTML = html;
        container.appendChild(div);
    });

    document.getElementById('objetivas-actions').innerHTML = `<button class="btn-restart" onclick="resetObjetivas()">🔄 Reiniciar Questões</button>`;
}

function checkAnswer(btn, selecionada, correta) {
    const container = btn.parentElement;
    const botoes = container.querySelectorAll('.option-btn');
    botoes.forEach((b, i) => {
        b.disabled = true;
        if (i === correta) b.classList.add('correct');
    });
    if (selecionada !== correta) btn.classList.add('wrong');
}

function resetObjetivas() {
    const botoes = document.getElementById('objetivas-container').querySelectorAll('.option-btn');
    botoes.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'wrong');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// MOTOR DO LABORATÓRIO VIRTUAL
// ==========================================
function iniciarLab(idEtapa) {
    if (idEtapa === "fim") {
        iniciarLab(labAtualDados.inicioId);
        return;
    }

    const etapa = labAtualDados.etapas[idEtapa];
    const container = document.getElementById('lab-container');

    let html = `
        <div class="lab-step">
            <div class="lab-icon">${etapa.icone}</div>
            <div class="lab-text">${etapa.texto}</div>
            <div class="lab-options">
    `;

    etapa.opcoes.forEach(opcao => {
        html += `<button class="lab-btn" onclick="iniciarLab('${opcao.proximo}')">${opcao.texto}</button>`;
    });

    html += `</div></div>`;

    container.style.opacity = 0;
    setTimeout(() => {
        container.innerHTML = html;
        container.style.opacity = 1;
    }, 200);
}
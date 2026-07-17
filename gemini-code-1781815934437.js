<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diagnóstico: Líder de Alta Performance</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <!-- Google Fonts (Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col justify-between">

    <!-- HEADER / BRANDING -->
    <header class="py-6 px-8 border-b border-slate-200 bg-white shadow-xs">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <span class="text-sm font-bold tracking-wider text-indigo-600 uppercase">Alta Performance</span>
            <span class="text-xs text-slate-400 font-medium">Baseado em Daniel Goleman (HBR)</span>
        </div>
    </header>

    <!-- MAIN CONTENT CONTAINER -->
    <main class="flex-grow flex items-center justify-center p-4 md:p-8">
        
        <!-- SECTION 1: HERO / LANDING PAGE -->
        <div id="hero-section" class="max-w-3xl text-center space-y-8 fade-in">
            <div class="space-y-4">
                <span class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Autodiagnóstico Executivo</span>
                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Descubra os seus <span class="text-indigo-600">Estilos Predominantes</span> de Liderança
                </h1>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto font-normal">
                    Não existe um estilo de liderança certo. Existem seis, e líderes de alta performance trocam de marcha conforme o momento e a pessoa. Descubra quais você mais usa e quais deixou na gaveta.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 inline-block text-left max-w-md mx-auto">
                <h3 class="text-sm font-semibold text-slate-900 mb-2">Como funciona?</h3>
                <ul class="text-sm text-slate-600 space-y-2">
                    <li class="flex items-center">✨ 18 afirmações rápidas</li>
                    <li class="flex items-center">⏱️ Leva menos de 3 minutos</li>
                    <li class="flex items-center">📊 Dashboard completo de resultados instantâneo</li>
                </ul>
            </div>

            <div>
                <button onclick="startQuiz()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-200 transition-all cursor-pointer transform hover:-translate-y-0.5">
                    Começar Diagnóstico Gratuito →
                </button>
            </div>
        </div>

        <!-- SECTION 2: TYPEFORM CONVERSATIONAL QUIZ -->
        <div id="quiz-section" class="hidden w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 relative">
            <!-- Progress Bar -->
            <div class="absolute top-0 left-0 w-full h-1.5 bg-slate-100 rounded-t-2xl overflow-hidden">
                <div id="progress-bar" class="h-full bg-indigo-600 transition-all duration-300" style="width: 0%"></div>
            </div>

            <!-- Counter -->
            <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
                Questão <span id="current-question-num">1</span> de 18
            </div>

            <!-- Question Statement -->
            <div class="min-h-[100px] mb-8">
                <h2 id="question-text" class="text-xl md:text-2xl font-semibold text-slate-900 leading-snug">
                    Carregando pergunta...
                </h2>
            </div>

            <!-- Score Options (1 to 5) -->
            <div class="space-y-3">
                <p class="text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">Dê uma nota de 1 a 5 para o quanto combina com você:</p>
                <div class="grid grid-cols-5 gap-2 md:gap-3">
                    <button onclick="submitAnswer(1)" class="group border-2 border-slate-200 hover:border-indigo-500 rounded-xl p-4 text-center transition-all cursor-pointer hover:bg-indigo-50/30">
                        <span class="block text-lg font-bold text-slate-700 group-hover:text-indigo-600">1</span>
                        <span class="hidden md:block text-[10px] text-slate-400 mt-1 leading-tight">Nada a ver</span>
                    </button>
                    <button onclick="submitAnswer(2)" class="group border-2 border-slate-200 hover:border-indigo-500 rounded-xl p-4 text-center transition-all cursor-pointer hover:bg-indigo-50/30">
                        <span class="block text-lg font-bold text-slate-700 group-hover:text-indigo-600">2</span>
                        <span class="hidden md:block text-[10px] text-slate-400 mt-1 leading-tight">Pouco</span>
                    </button>
                    <button onclick="submitAnswer(3)" class="group border-2 border-slate-200 hover:border-indigo-500 rounded-xl p-4 text-center transition-all cursor-pointer hover:bg-indigo-50/30">
                        <span class="block text-lg font-bold text-slate-700 group-hover:text-indigo-600">3</span>
                        <span class="hidden md:block text-[10px] text-slate-400 mt-1 leading-tight">Às vezes</span>
                    </button>
                    <button onclick="submitAnswer(4)" class="group border-2 border-slate-200 hover:border-indigo-500 rounded-xl p-4 text-center transition-all cursor-pointer hover:bg-indigo-50/30">
                        <span class="block text-lg font-bold text-slate-700 group-hover:text-indigo-600">4</span>
                        <span class="hidden md:block text-[10px] text-slate-400 mt-1 leading-tight">Muito</span>
                    </button>
                    <button onclick="submitAnswer(5)" class="group border-2 border-slate-200 hover:border-indigo-500 rounded-xl p-4 text-center transition-all cursor-pointer hover:bg-indigo-50/30">
                        <span class="block text-lg font-bold text-slate-700 group-hover:text-indigo-600">5</span>
                        <span class="hidden md:block text-[10px] text-slate-400 mt-1 leading-tight">Totalmente</span>
                    </button>
                </div>
            </div>

            <!-- Keyboard shortcut hint -->
            <div class="mt-8 text-right text-xs text-slate-400 font-medium">
                💡 Dica: Você também pode usar as teclas <span class="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-mono text-slate-600">1</span> a <span class="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-mono text-slate-600">5</span> do teclado.
            </div>
        </div>

        <!-- SECTION 3: LOADING TRANSITION -->
        <div id="loading-section" class="hidden text-center space-y-4">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p class="text-slate-600 font-medium">Processando suas respostas e gerando seu mapa de inteligência emocional...</p>
        </div>

        <!-- SECTION 4: INTERACTIVE RESULTS DASHBOARD -->
        <div id="results-section" class="hidden w-full max-w-4xl space-y-8 fade-in my-8">
            <div class="text-center space-y-2">
                <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">Seu Perfil de Liderança Completo</h2>
                <p class="text-slate-500">Mapeamento analítico baseado no seu autodiagnóstico.</p>
            </div>

            <!-- PRIMARY & SECONDARY CARDS (TOP ROLES) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Predominante -->
                <div class="bg-radial from-indigo-600 to-indigo-800 text-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
                    <span class="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">1º Lugar</span>
                    <p class="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-1">Estilo Predominante</p>
                    <h3 id="res-predominante-name" class="text-2xl font-bold mb-3">Estilo</h3>
                    <blockquote id="res-predominante-phrase" class="text-indigo-100 italic text-sm bg-black/10 p-3 rounded-xl border-l-4 border-white/50">"Frase"</blockquote>
                </div>
                <!-- Segundo Mais Usado -->
                <div class="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm relative">
                    <span class="absolute top-4 right-4 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">2º Lugar</span>
                    <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Segundo Mais Usado</p>
                    <h3 id="res-secundario-name" class="text-2xl font-bold text-slate-900 mb-3">Estilo</h3>
                    <blockquote id="res-secundario-phrase" class="text-slate-600 italic text-sm bg-slate-50 p-3 rounded-xl border-l-4 border-indigo-500">"Frase"</blockquote>
                </div>
            </div>

            <!-- BLIND SPOTS / LESS USED CARDS -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-orange-50 border border-orange-200 p-5 rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="text-orange-800 text-xs font-bold uppercase tracking-wider block mb-1">Estilo Menos Usado (Seu Ponto Cego)</span>
                        <h4 id="res-menos-name" class="text-lg font-bold text-orange-950">Estilo</h4>
                    </div>
                </div>
                <div class="bg-amber-50 border border-amber-200 p-5 rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="text-amber-800 text-xs font-bold uppercase tracking-wider block mb-1">Segundo Menos Usado</span>
                        <h4 id="res-segundo-menos-name" class="text-lg font-bold text-amber-950">Estilo</h4>
                    </div>
                </div>
            </div>

            <!-- DETAILED BREAKDOWN TABLE -->
            <div class="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
                <div class="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 class="font-bold text-slate-900 text-sm uppercase tracking-wider">Detalhamento dos 6 Estilos</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm">
                        <thead>
                            <tr class="border-b border-slate-200 bg-slate-100/50 text-slate-500 font-medium">
                                <th class="p-4">Estilo de Liderança</th>
                                <th class="p-4">Pontuação (3 a 15)</th>
                                <th class="p-4">Nível de Uso</th>
                                <th class="p-4 hidden md:table-cell">Aparência na Prática</th>
                            </tr>
                        </thead>
                        <tbody id="results-table-body" class="divide-y divide-slate-100 text-slate-700">
                            <!-- Rows generated dynamically via JS -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- THE BIG QUESTION (A PERGUNTA QUE IMPORTA) -->
            <div class="bg-indigo-50 border border-indigo-100 p-6 md:p-8 rounded-2xl text-center space-y-3">
                <h3 class="text-base font-bold text-indigo-900 uppercase tracking-wide">💡 A pergunta que realmente importa para a sua carreira:</h3>
                <p class="text-indigo-950 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                    "Existe hoje, no seu time, uma situação onde justamente o estilo que você <span class="underline decoration-indigo-500 font-bold">menos usa</span> seria a melhor escolha? É aí que está o seu próximo nível de liderança."
                </p>
                <div class="pt-2">
                    <button onclick="window.print()" class="text-xs text-indigo-600 font-semibold underline cursor-pointer hover:text-indigo-800">Salvar ou Imprimir este Diagnóstico</button>
                </div>
            </div>

        </div>
    </main>

    <!-- FOOTER -->
    <footer class="py-4 border-t border-slate-200 bg-white text-center text-xs text-slate-400 font-medium">
        &copy; 2026 Líder de Alta Performance. Todos os direitos reservados.
    </footer>

    <!-- LOGIC & ENGINE APPLICATION -->
    <script>
        // Database mapped perfectly from the Excel file
        const questions = [
            { id: 1, text: "Eu conecto o trabalho do dia a dia a uma visão maior de onde estamos indo.", code: "VIS" },
            { id: 2, text: "Quando o time se desentende, minha prioridade é restaurar a harmonia e o vínculo.", code: "AGR" },
            { id: 3, text: "Antes de decidir algo que afeta o time, eu busco a opinião das pessoas.", code: "DEM" },
            { id: 4, text: "Eu invisto tempo desenvolvendo cada pessoa para onde ela quer chegar.", code: "CON" },
            { id: 5, text: "Eu puxo o ritmo pelo meu próprio exemplo e espero o mesmo padrão de todos.", code: "RIT" },
            { id: 6, text: "Em momento de crise, eu assumo o comando e digo exatamente o que fazer.", code: "CMD" },
            { id: 7, text: "Eu pinto um quadro claro e inspirador do futuro para mobilizar o time.", code: "VIS" },
            { id: 8, text: "Eu me preocupo genuinamente com o bem-estar emocional das pessoas do time.", code: "AGR" },
            { id: 9, text: "Eu construo decisões por consenso, dando voz a quem será afetado.", code: "DEM" },
            { id: 10, text: "Eu dou feedback voltado para o crescimento de longo prazo da pessoa.", code: "CON" },
            { id: 11, text: "Eu tenho padrões altíssimos e fico impaciente quando o resultado não vem rápido.", code: "RIT" },
            { id: 12, text: "Quando preciso, eu sou direto e não abro espaço para questionamento.", code: "CMD" },
            { id: 13, text: "Eu explico o porquê das coisas para que cada um entenda o sentido do que faz.", code: "VIS" },
            { id: 14, text: "Eu celebro as pessoas e crio um ambiente acolhedor no time.", code: "AGR" },
            { id: 15, text: "Eu acredito que as melhores ideias surgem da participação de todos.", code: "DEM" },
            { id: 16, text: "Eu ajo como mentor, ajudando a pessoa a descobrir a própria resposta.", code: "CON" },
            { id: 17, text: "Eu prefiro fazer eu mesmo a depender de alguém que entrega abaixo do esperado.", code: "RIT" },
            { id: 18, text: "Eu tomo decisões rápidas e firmes, mesmo sem agradar todo mundo.", code: "CMD" }
        ];

        let stylesData = {
            "VIS": { name: "Visionário", phrase: "Mobiliza o time rumo a uma visão. Diz: venha comigo.", score: 0, order: 1 },
            "AGR": { name: "Agregador", phrase: "Cria laços e harmonia. Diz: as pessoas vêm primeiro.", score: 0, order: 2 },
            "DEM": { name: "Democrático", phrase: "Constrói por consenso. Diz: o que você acha?", score: 0, order: 3 },
            "CON": { name: "Conselheiro", phrase: "Desenvolve gente para o futuro. Diz: experimente assim.", score: 0, order: 4 },
            "RIT": { name: "Marcador de Ritmo", phrase: "Puxa pelo exemplo e alta exigência. Diz: faça como eu, agora.", score: 0, order: 5 },
            "CMD": { name: "Comandante", phrase: "Comando direto. Diz: faça o que eu digo.", score: 0, order: 6 }
        };

        let currentQuestionIndex = 0;
        let isQuizActive = false;

        function startQuiz() {
            document.getElementById('hero-section').classList.add('hidden');
            document.getElementById('quiz-section').classList.remove('hidden');
            document.getElementById('quiz-section').classList.add('fade-in');
            isQuizActive = true;
            showQuestion();
        }

        function showQuestion() {
            if (currentQuestionIndex < questions.length) {
                const q = questions[currentQuestionIndex];
                document.getElementById('current-question-num').innerText = currentQuestionIndex + 1;
                document.getElementById('question-text').innerText = q.text;
                
                // Update Progress Bar smoothly
                const progress = ((currentQuestionIndex) / questions.length) * 100;
                document.getElementById('progress-bar').style.width = `${progress}%`;
            } else {
                finishQuiz();
            }
        }

        function submitAnswer(score) {
            const currentQuestion = questions[currentQuestionIndex];
            stylesData[currentQuestion.code].score += score;
            
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                // Final progress push before calculation
                document.getElementById('progress-bar').style.width = `100%`;
                finishQuiz();
            }
        }

        // Keyboard triggers standard for typeform engine
        window.addEventListener('keydown', function(e) {
            if (!isQuizActive) return;
            if (['1', '2', '3', '4', '5'].includes(e.key)) {
                submitAnswer(parseInt(e.key));
            }
        });

        function finishQuiz() {
            isQuizActive = false;
            document.getElementById('quiz-section').classList.add('hidden');
            document.getElementById('loading-section').classList.remove('hidden');

            setTimeout(() => {
                document.getElementById('loading-section').classList.add('hidden');
                calculateAndShowResults();
            }, 1200); // Aesthetic processing pause
        }

        function calculateAndShowResults() {
            // Transform object into list to sort
            let stylesArray = Object.keys(stylesData).map(code => {
                return {
                    code: code,
                    name: stylesData[code].name,
                    phrase: stylesData[code].phrase,
                    score: stylesData[code].score,
                    // Tie breaker perfectly aligned with Excel `=C6+ROW()/100000` rule
                    tieBreaker: stylesData[code].score + (stylesData[code].order / 100000)
                };
            });

            // Sort by the calculated tieBreaker criteria
            // For highest rankings (descending)
            let sortedHighest = [...stylesArray].sort((a, b) => b.tieBreaker - a.tieBreaker);
            // For lowest rankings (ascending)
            let sortedLowest = [...stylesArray].sort((a, b) => a.tieBreaker - b.tieBreaker);

            const predominant = sortedHighest[0];
            const secondary = sortedHighest[1];
            const leastUsed = sortedLowest[0];
            const secondLeastUsed = sortedLowest[1];

            // Render Overview Panels
            document.getElementById('res-predominante-name').innerText = predominant.name;
            document.getElementById('res-predominante-phrase').innerText = `"${predominant.phrase}"`;
            
            document.getElementById('res-secundario-name').innerText = secondary.name;
            document.getElementById('res-secundario-phrase').innerText = `"${secondary.phrase}"`;

            document.getElementById('res-menos-name').innerText = `${leastUsed.name} (${leastUsed.score} pontos)`;
            document.getElementById('res-segundo-menos-name').innerText = `${secondLeastUsed.name} (${secondLeastUsed.score} pontos)`;

            // Render Detailed Table rows
            const tbody = document.getElementById('results-table-body');
            tbody.innerHTML = ''; // reset

            // Ordering rows back to natural layout presentation
            stylesArray.sort((a, b) => a.order - b.order);

            stylesArray.forEach(style => {
                let badgeClass = '';
                let statusText = '';
                
                // Matches the strict sheet logical tests: =IF(C6>=12,"Forte",IF(C6>=8,"Médio","Baixo"))
                if (style.score >= 12) {
                    statusText = 'Forte';
                    badgeClass = 'bg-emerald-50 text-emerald-700 border border-emerald-200';
                } else if (style.score >= 8) {
                    statusText = 'Médio';
                    badgeClass = 'bg-amber-50 text-amber-700 border border-amber-200';
                } else {
                    statusText = 'Baixo';
                    badgeClass = 'bg-slate-100 text-slate-600 border border-slate-200';
                }

                const row = `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="p-4 font-semibold text-slate-900">${style.name}</td>
                        <td class="p-4 font-mono font-medium">${style.score} / 15</td>
                        <td class="p-4">
                            <span class="px-2.5 py-1 rounded-full text-xs font-bold ${badgeClass}">${statusText}</span>
                        </td>
                        <td class="p-4 text-slate-500 text-xs hidden md:table-cell italic">${style.phrase}</td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });

            // Reveal Dashboard
            document.getElementById('results-section').classList.remove('hidden');
            document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>
</html>

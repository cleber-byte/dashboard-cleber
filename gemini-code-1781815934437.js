<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PCI Comercial - Dashboard de Vendas</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght=300;400;500;600;700&display=swap" rel="stylesheet">
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    body { font-family: 'Inter', sans-serif; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen selection:bg-amber-500 selection:text-slate-950">

  <!-- TOP BAR / HEADER -->
  <header class="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="bg-amber-600 text-white p-2 rounded-lg font-bold text-xl tracking-wider">🦅</div>
        <div>
          <h1 class="text-lg font-bold tracking-tight text-white">PCI Comercial</h1>
          <p class="text-xs text-slate-400">Painel Operacional — Segunda-Feira, 20 de Julho de 2026</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span class="w-2 h-2 mr-2 bg-emerald-400 rounded-full animate-ping"></span>
          Foco Agora: Enviar Link Zoom para Bruna Fernandes (09:30h) 🎯
        </span>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

    <!-- KPI CARDS CONTAINER -->
    <section class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <!-- Vendas Fechadas -->
      <div class="bg-slate-900 border border-emerald-500 rounded-xl p-5 flex items-center justify-between border-l-4 border-l-emerald-500">
        <div>
          <p class="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Vendas Ganhas (Julho)</p>
          <h3 class="text-3xl font-extrabold mt-1 text-white">3 JC30</h3>
        </div>
        <div class="p-3 bg-emerald-950/50 rounded-lg text-emerald-400"><i class="fa-solid fa-circle-check text-2xl"></i></div>
      </div>
      <!-- Contato Inicial -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between border-l-4 border-l-blue-500">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contato Inicial</p>
          <h3 class="text-3xl font-bold mt-1 text-white">7 Leads</h3>
        </div>
        <div class="p-3 bg-blue-950/50 rounded-lg text-blue-400"><i class="fa-solid fa-comments text-xl"></i></div>
      </div>
      <!-- Em Atendimento -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between border-l-4 border-l-indigo-500">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Em Atendimento</p>
          <h3 class="text-3xl font-bold mt-1 text-indigo-400">8 Leads</h3>
        </div>
        <div class="p-3 bg-indigo-950/50 rounded-lg text-indigo-400"><i class="fa-solid fa-user-tie text-xl"></i></div>
      </div>
      <!-- Faturamento Pendente -->
      <div class="bg-slate-900 border border-amber-500/30 rounded-xl p-5 flex items-center justify-between border-l-4 border-l-amber-500">
        <div>
          <p class="text-xs font-semibold text-amber-400 uppercase tracking-wider">Faturamento Hoje</p>
          <h3 class="text-xl font-bold mt-1 text-white">Willer Borges 💰</h3>
        </div>
        <div class="p-3 bg-amber-950/50 rounded-lg text-amber-500"><i class="fa-solid fa-money-bill-wave text-xl"></i></div>
      </div>
    </section>

    <!-- MAIN TWO COLUMN LAYOUT -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- LEFT COLUMN: RADAR ATIVO -->
      <div class="lg:col-span-1 space-y-6">
        
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <h2 class="text-md font-bold text-amber-500 flex items-center gap-2">
            <i class="fa-solid fa-satellite-dish animate-pulse"></i> Radar de Acompanhamento Crítico
          </h2>
          <div class="space-y-3">
            
            <!-- WILLER BORGES -->
            <div class="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500 text-[11px] border-l-4 border-l-emerald-500">
              <div class="flex justify-between font-bold text-white">
                <span>Willer Borges (Lopes Class)</span>
                <span class="text-emerald-400 font-bold">HOJE: FATURAMENTO 💳</span>
              </div>
              <p class="text-slate-300 mt-1">Dia do acerto de 12x R$ 3.146,69 no boleto. Acionar para pegar dados finais e rodar contrato.</p>
            </div>

            <!-- BRUNA FERNANDES (EM REUNIÃO AGORA) -->
            <div class="p-3 bg-amber-500/10 rounded-lg border border-amber-500 text-[11px] border-l-4 border-l-amber-500">
              <div class="flex justify-between font-bold text-white">
                <span>Bruna Fernandes (Gerente)</span>
                <span class="text-amber-400 font-bold">09:30h ⏰</span>
              </div>
              <p class="text-slate-300 mt-1">Gargalo: falta de rotina de prospecção no Imoview. Sala do Zoom pronta para o diagnóstico do PCI.</p>
            </div>

            <!-- MIRIAM (AGUARDANDO TERÇA) -->
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] border-l-2 border-l-blue-400">
              <div class="flex justify-between font-bold text-white">
                <span>Miriam (Lino Imóveis)</span>
                <span class="text-blue-400">Resposta Terça-Feira ⏳</span>
              </div>
              <p class="text-slate-400 mt-1">Ficou de dar o veredito da diretoria amanhã (21/07). Manter em compasso de espera.</p>
            </div>

            <!-- CLÁUDIA ROCHA (NO SHOW) -->
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] border-l-2 border-l-rose-500">
              <div class="flex justify-between font-bold text-white">
                <span class="text-slate-300">Cláudia Rocha</span>
                <span class="bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded text-[9px] font-bold">NO SHOW 🛑</span>
              </div>
              <p class="text-slate-400 mt-1">Faltou ao Meet agendado. Entrar em contato mais tarde para tentar remarcação estratégica.</p>
            </div>
          </div>
        </div>

        <!-- RADAR FUTURO / PIPELINE -->
        <div class="bg-indigo-950/20 border border-indigo-900/50 rounded-xl p-6 text-xs space-y-2">
          <h3 class="font-bold text-indigo-400 flex items-center gap-1.5">
            <i class="fa-solid fa-calendar-days"></i> Pipeline de Lembretes
          </h3>
          <p class="text-slate-300"><b>• Arthur Francesco:</b> Proposta enviada para a Class Imóveis. Validar recebimento.</p>
          <p class="text-slate-300"><b>• Carlos Galvão:</b> Mapeado para abordagem inicial.</p>
          <p class="text-slate-300"><b>• Pós-Venda Willer:</b> Agendado retorno técnico no Google Tasks para o dia <b>05/08</b>.</p>
        </div>
      </div>

      <!-- RIGHT COLUMN: MEETS & AUDITADOS -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- FLUXO COMERCIAL / STATUS -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h2 class="text-md font-bold text-slate-300 flex items-center gap-2">
                <i class="fa-solid fa-arrow-right-arrows-left"></i> Histórico Recente de Ocorrências
              </h2>
              <p class="text-xs text-slate-400 mt-0.5">Movimentações processadas no funil</p>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="border-b border-slate-800 text-slate-400 font-medium">
                  <th class="py-2.5 px-2">Lead</th>
                  <th class="py-2.5 px-2">Ação Executada</th>
                  <th class="py-2.5 px-2">Destino no Funil</th>
                  <th class="py-2.5 px-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 text-[11px] text-slate-300">
                <!-- LUCIANA (DECLINOU) -->
                <tr class="hover:bg-slate-800/10 text-slate-400">
                  <td class="py-3 px-2 font-semibold text-slate-400">Luciana</td>
                  <td class="py-3 px-2">Participou da reunião de apresentação do PCI</td>
                  <td class="py-3 px-2">Movida para Histórico / Arquivados</td>
                  <td class="py-3 px-2 text-right"><span class="bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-bold">Declinou</span></td>
                </tr>
                <!-- CLAUDIA ROCHA -->
                <tr class="hover:bg-slate-800/10">
                  <td class="py-3 px-2 font-semibold">Cláudia Rocha</td>
                  <td class="py-3 px-2">Sala aberta, aguardado tolerância de 15 min</td>
                  <td class="py-3 px-2">Movida para Alertas de Reagendamento</td>
                  <td class="py-3 px-2 text-right"><span class="bg-rose-950/40 text-rose-400 px-2 py-0.5 rounded font-bold">Faltou</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- CONTRATOS ATIVOS DE JULHO -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 class="text-md font-bold text-slate-300 mb-4 flex items-center gap-2">
            <i class="fa-solid fa-award"></i> Tração de Vendas - Julho
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <tbody class="divide-y divide-slate-800/60 text-[11px] text-slate-400">
                <tr>
                  <td class="py-2.5 px-2 font-semibold text-white">Rafael Ennes (Karioca Imóveis)</td>
                  <td class="py-2.5 px-2">JC30</td>
                  <td class="py-2.5 px-2 text-right text-emerald-400 font-bold">Ativado</td>
                </tr>
                <tr>
                  <td class="py-2.5 px-2 font-semibold text-white">Rodrigo Bueno (ImoBueno)</td>
                  <td class="py-2.5 px-2">JC30</td>
                  <td class="py-2.5 px-2 text-right text-emerald-400 font-bold">Ativado</td>
                </tr>
                <tr>
                  <td class="py-2.5 px-2 font-semibold text-white">Tatiane (Particular)</td>
                  <td class="py-2.5 px-2">JC30</td>
                  <td class="py-2.5 px-2 text-right text-emerald-400 font-bold">Ativado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </section>
  </main>

</body>
</html>

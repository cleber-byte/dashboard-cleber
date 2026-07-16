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
          <p class="text-xs text-slate-400">Painel Operacional — Quinta-Feira, 16 de Julho de 2026</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <span class="w-2 h-2 mr-2 bg-amber-400 rounded-full animate-ping"></span>
          Foco do Dia: Apresentação Guilherme (11:00) & Meet Miriam (14:00) 🎯
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
      <!-- Reuniões do Dia -->
      <div class="bg-slate-900 border border-amber-500 rounded-xl p-5 flex items-center justify-between border-l-4 border-l-amber-500">
        <div>
          <p class="text-xs font-semibold text-amber-400 uppercase tracking-wider">Meets Hoje</p>
          <h3 class="text-2xl font-bold mt-1 text-white">2 Confirmados</h3>
        </div>
        <div class="p-3 bg-amber-950/50 rounded-lg text-amber-500"><i class="fa-solid fa-calendar-day text-xl"></i></div>
      </div>
      <!-- Contatos Ativos -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Atendimentos no Funil</p>
          <h3 class="text-2xl font-bold mt-1 text-indigo-400">15</h3>
        </div>
        <div class="p-3 bg-slate-800 rounded-lg text-indigo-400"><i class="fa-solid fa-users text-xl"></i></div>
      </div>
      <!-- Follow-up Pendente -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ligações Hoje</p>
          <h3 class="text-2xl font-bold mt-1 text-blue-400">1 (Isabel)</h3>
        </div>
        <div class="p-3 bg-slate-800 rounded-lg text-blue-400"><i class="fa-solid fa-headset text-xl"></i></div>
      </div>
    </section>

    <!-- MAIN TWO COLUMN LAYOUT -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- LEFT COLUMN: RADAR & PENDING TASKS -->
      <div class="lg:col-span-1 space-y-6">
        
        <!-- RADAR DE ACESSOS E COMPROMISSOS -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <h2 class="text-md font-bold text-amber-500 flex items-center gap-2">
            <i class="fa-solid fa-satellite-dish animate-pulse"></i> Radar Ativo de Leads e Propostas
          </h2>
          <div class="space-y-3">
            
            <!-- WILLER BORGES (Destaque Quente) -->
            <div class="p-3 bg-emerald-950/10 rounded-lg border border-emerald-500 text-[11px] border-l-4 border-l-emerald-500">
              <div class="flex justify-between font-bold text-white">
                <span>Willer Borges (Lopes Class)</span>
                <span class="text-emerald-400 font-bold">Prog. 20/07 ⏳</span>
              </div>
              <p class="text-slate-300 mt-1">Acordo de 12x R$ 3.146,69 no boleto fechado via e-mail. Aguardando envio dos dados para emissão do contrato na segunda.</p>
            </div>

            <!-- ARTHUR FRANCESCO -->
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] border-l-2 border-l-amber-500">
              <div class="flex justify-between font-bold text-white">
                <span>Arthur Francesco (Class Imóveis)</span>
                <span class="text-amber-400 font-bold">Proposta Enviada ✉️</span>
              </div>
              <p class="text-slate-400 mt-1">E-mail com proposta do PCI enviado para: <i>imoveisclassgoiania@gmail.com</i>. Realizar follow-up de recebimento.</p>
            </div>

            <!-- CARLOS GALVÃO -->
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] border-l-2 border-l-indigo-500">
              <div class="flex justify-between font-bold text-white">
                <span>Carlos Galvão</span>
                <span class="text-indigo-400 font-bold">Novo no Radar 🛰️</span>
              </div>
              <p class="text-slate-400 mt-1">Lead inserido no radar de negociação. Preparar abordagem de diagnóstico operacional do PCI.</p>
            </div>

            <!-- VANDERSON -->
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] border-l-2 border-l-slate-700">
              <div class="flex justify-between font-bold text-white">
                <span>Vanderson</span>
                <span class="text-slate-400">Boleto Enviado</span>
              </div>
              <p class="text-slate-400 mt-1">Aguardando assinatura do contrato e pagamento do 1º boleto da condição especial.</p>
            </div>

            <!-- ALEX ROCHA -->
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] border-l-2 border-l-slate-700">
              <div class="flex justify-between font-bold text-white">
                <span>Alex Rocha (Prime)</span>
                <span class="text-slate-400">Aguardando Retorno</span>
              </div>
              <p class="text-slate-400 mt-1">Verificar se respondeu à mensagem de alinhamento de Onboarding enviado para Agosto.</p>
            </div>
          </div>
        </div>

        <!-- ACOMPANHAMENTO FUTURO -->
        <div class="bg-indigo-950/20 border border-indigo-900/50 rounded-xl p-6 text-xs space-y-3">
          <h3 class="font-bold text-indigo-400 flex items-center gap-1.5">
            <i class="fa-solid fa-calendar-days"></i> Radar Próximos Dias (Fim de Semana)
          </h3>
          <div class="space-y-3 text-slate-300">
            <!-- TAREFA SANDRO -->
            <div class="p-2.5 bg-slate-900/60 rounded border border-amber-500/30 text-[11px] border-l-2 border-l-amber-500">
              <p class="font-bold text-white flex justify-between">
                <span>📞 Ligar para Sandro</span>
                <span class="text-amber-400">Amanhã (Sexta) 11:00</span>
              </p>
              <p class="text-slate-400 mt-1 text-[10px]">Indicação do <b>Marcos Toyama</b>. Ligar para apresentar e posicionar o PCI.</p>
            </div>
            <p><b>• Biank Imóveis:</b> Retomar contato amanhã (Sexta) para tentar agendar Meet.</p>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: MEETS & CLOSED SALES -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- AGENDA DE REUNIÕES (HOJE) -->
        <div class="bg-slate-900 border border-amber-500/30 rounded-xl p-6">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h2 class="text-md font-bold text-amber-500 flex items-center gap-2">
                <i class="fa-solid fa-video"></i> Cronograma de Meets (Hoje - Quinta-Feira)
              </h2>
              <p class="text-xs text-slate-400 mt-0.5">Sessões confirmadas na sala do Zoom</p>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="border-b border-slate-800 text-slate-400 font-medium">
                  <th class="py-2.5 px-2">Lead / Imobiliária</th>
                  <th class="py-2.5 px-2">Horário</th>
                  <th class="py-2.5 px-2">Estratégia do Papo</th>
                  <th class="py-2.5 px-2 text-right">Ação</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 text-[11px]">
                <!-- MEET GUILHERME -->
                <tr class="bg-amber-950/20 hover:bg-amber-950/30">
                  <td class="py-3 px-2 font-bold text-white flex items-center gap-1.5">
                    <span class="text-amber-500">🔥</span> Guilherme <br><span class="text-[10px] text-slate-400 font-normal">Apresentação + Start</span>
                  </td>
                  <td class="py-3 px-2 text-amber-400 font-extrabold text-xs">11:00h</td>
                  <td class="py-3 px-2 text-slate-200">Apresentar o escopo completo do PCI e formalizar o início do projeto.</td>
                  <td class="py-3 px-2 text-right"><span class="bg-amber-500 text-slate-950 font-bold px-2 py-1 rounded text-[10px] animate-pulse">Entrar na Sala 🔗</span></td>
                </tr>
                <!-- MEET MIRIAM -->
                <tr class="hover:bg-slate-800/20 text-slate-300">
                  <td class="py-3 px-2 font-semibold">Miriam & Marido <br><span class="text-[10px] text-slate-400 font-normal">Lino Imóveis Vale</span></td>
                  <td class="py-3 px-2 font-bold">14:00h</td>
                  <td class="py-3 px-2 text-slate-400">Diagnóstico técnico do CRM e Integração de Leads. <br><span class="text-[9px] text-indigo-400 font-bold">Cleber + Diretor de Operações</span></td>
                  <td class="py-3 px-2 text-right"><span class="bg-indigo-950/60 text-indigo-400 px-2 py-1 rounded text-[10px] border border-indigo-500/20">Link Enviado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- GALERIA DE CONTRATOS ATIVOS -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h2 class="text-md font-bold text-slate-300 flex items-center gap-2">
                <i class="fa-solid fa-award"></i> Contratos Ativos de Julho
              </h2>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <tbody class="divide-y divide-slate-800/60 text-[11px] text-slate-400">
                <!-- RAFAEL ENNES -->
                <tr class="hover:bg-slate-800/20">
                  <td class="py-2.5 px-2 font-semibold text-white">Rafael Ennes (Karioca Imóveis)</td>
                  <td class="py-2.5 px-2">JC30</td>
                  <td class="py-2.5 px-2 text-right text-emerald-400 font-bold">Ativado</td>
                </tr>
                <!-- RODRIGO BUENO -->
                <tr class="hover:bg-slate-800/20">
                  <td class="py-2.5 px-2 font-semibold text-white">Rodrigo Bueno (ImoBueno)</td>
                  <td class="py-2.5 px-2">JC30</td>
                  <td class="py-2.5 px-2 text-right text-emerald-400 font-bold">Ativado</td>
                </tr>
                <!-- TATIANE -->
                <tr class="hover:bg-slate-800/20">
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

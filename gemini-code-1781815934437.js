"use client";
import React, { useState } from 'react';

export default function Dashboard() {
  // Seus dados reais de atendimento integrados
  const [leads] = useState([
    { id: 1, nome: "Guilherme Zaggia", produto: "PCI", status: "Ganho", origem: "Campanha JOKER", dias: 0 },
    { id: 2, nome: "Rodrigo", produto: "Líder", status: "Ganho", origem: "Planilha Pedro", dias: 0 },
    { id: 3, nome: "Bethania", produto: "Líder", status: "Ganho", origem: "Planilha Pedro", dias: 0 },
    { id: 4, nome: "Shimilly", produto: "PCI", status: "Ganho", origem: "Mapeamento Interno", dias: 0 },
    { id: 5, nome: "Ricardo", produto: "PCI", status: "Atendimento", origem: "Site (Londrina)", dias: 0 },
    { id: 6, nome: "Luiz", produto: "Líder", status: "Atendimento", origem: "Base Ativa", dias: 1 },
    { id: 7, nome: "Luciana", produto: "PCI", status: "Atendimento", origem: "Aula Especial", dias: 1 },
    { id: 8, nome: "Gilmara", produto: "Líder", status: "Atendimento", origem: "Formulário Interesse", dias: 1 },
    { id: 9, nome: "Milena", produto: "Líder", status: "Atendimento", origem: "Formulário Interesse", dias: 2 },
    { id: 10, nome: "Jan Guimaraes", produto: "PCI", status: "Contato Inicial", origem: "Mapear", dias: 0 },
    { id: 11, nome: "Fabiano", produto: "Líder", status: "Contato Inicial", origem: "Mapear", dias: 0 },
    { id: 12, nome: "Isaque Seixas", produto: "Líder", status: "Contato Inicial", origem: "Mapear", dias: 1 },
    { id: 13, nome: "Laira Stephane", produto: "Líder", status: "Contato Inicial", origem: "Landing Page", dias: 1 },
  ]);

  // Contadores Inteligentes
  const totalLeads = leads.length;
  const totalGanhos = leads.filter(l => l.status === "Ganho").length;
  const totalAtendimento = leads.filter(l => l.status === "Atendimento").length;
  const totalInicial = leads.filter(l => l.status === "Contato Inicial").length;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      {/* Cabeçalho de Elite */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            SISTEMA DE CADÊNCIA OPERACIONAL
          </h1>
          <p className="text-gray-400 mt-1 text-sm">Performance de Atendimento — Consultor Cleber Michel</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg mt-4 md:mt-0">
          <span className="text-xs text-gray-500 block uppercase">Atualizado em</span>
          <span className="text-sm font-semibold text-orange-400">18 de Junho, 2026</span>
        </div>
      </div>

      {/* QUADRO DE MEDIDORES (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl">
          <p className="text-xs text-gray-400 uppercase font-medium">Total em Carteira</p>
          <p className="text-3xl font-bold mt-2 text-white">{totalLeads} <span className="text-sm font-normal text-gray-500">leads</span></p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl border-l-4 border-l-emerald-500">
          <p className="text-xs text-emerald-400 uppercase font-medium">Ganhos Pagos</p>
          <p className="text-3xl font-bold mt-2 text-emerald-400">{totalGanhos} <span className="text-sm font-normal text-gray-500">fechados</span></p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl border-l-4 border-l-amber-500">
          <p className="text-xs text-amber-400 uppercase font-medium">Em Atendimento Ativo</p>
          <p className="text-3xl font-bold mt-2 text-amber-400">{totalAtendimento} <span className="text-sm font-normal text-gray-500">no funil</span></p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl border-l-4 border-l-blue-500">
          <p className="text-xs text-blue-400 uppercase font-medium">Contato Inicial (Triagem)</p>
          <p className="text-3xl font-bold mt-2 text-blue-400">{totalInicial} <span className="text-sm font-normal text-gray-500">novos</span></p>
        </div>
      </div>

      {/* SEÇÃO DE ANÁLISE DE ORIGEM (Pedido do Diretor) */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-bold mb-4 text-gray-200">Distribuição Operacional por Origem do Lead</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300 font-medium">Planilha Pedro / Comercial</span>
              <span className="text-orange-400 font-bold">3 Atendimentos</span>
            </div>
            <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[45%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300 font-medium">Campanha JOKER</span>
              <span className="text-orange-400 font-bold">1 Atendimento (PCI Ganho)</span>
            </div>
            <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[20%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300 font-medium">Inbound Site / Landing Page / Redes</span>
              <span className="text-orange-400 font-bold">5 Atendimentos</span>
            </div>
            <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[65%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ESTEIRA VIVA DE ATENDIMENTOS */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-lg font-bold text-gray-200">Painel de Controle de Leads e Cadência</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-950 text-gray-400 text-xs uppercase font-semibold border-b border-gray-800">
                <th className="p-4">Nome do Lead</th>
                <th className="p-4">Produto</th>
                <th className="p-4">Origem do Lead</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Dias Sem Contato</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-900/50 transition-colors">
                  <td className="p-4 font-semibold text-white">{lead.nome}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${lead.produto === 'PCI' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-cyan-950 text-cyan-300 border border-cyan-800'}`}>
                      {lead.produto}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300 font-medium">{lead.origem}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      lead.status === 'Ganho' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                      lead.status === 'Atendimento' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                      'bg-blue-950 text-blue-400 border border-blue-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-center font-bold text-gray-400">{lead.dias}d</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
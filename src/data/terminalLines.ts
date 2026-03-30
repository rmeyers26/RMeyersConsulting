import type { TerminalScenario } from '@/types'

export const terminalScenarios: TerminalScenario[] = [
  {
    id: 'data-reentry',
    problem: '"We re-enter the same data in 3 systems every day."',
    steps: [
      '✓ Syncing Salesforce + Airtable + Slack',
      '✓ Eliminating duplicate entry',
      '✓ Saving ~10 hrs/week per rep',
    ],
    result: 'Data re-entry eliminated. Systems in sync.',
  },
  {
    id: 'manual-reporting',
    problem: '"Weekly reports take 8 hours to pull together."',
    steps: [
      '✓ Live dashboard built on your existing data',
      '✓ Reports auto-generate every Monday 8am',
      '✓ 8 hrs/week → 30 min review',
    ],
    result: 'Reporting automated. Time back in your hands.',
  },
  {
    id: 'disconnected-tools',
    problem: '"Nothing talks to anything else."',
    steps: [
      '✓ Mapping 4 disconnected systems',
      '✓ Building unified data pipeline',
      '✓ One source of truth, zero manual syncing',
    ],
    result: 'Systems connected. Zero manual syncing.',
  },
]

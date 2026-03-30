import type { WinCard } from '@/types'

export const recentWins: WinCard[] = [
  {
    icon: '📊',
    category: 'Reporting Automation',
    headline: 'Weekly reports eliminated',
    stat: '8 hrs',
    statLabel: '→ 30 min',
    detail: 'Manual report generation automated for a 12-person ops team. Data pulls, formatting, and distribution now happen automatically every Monday at 8am.',
  },
  {
    icon: '🔗',
    category: 'System Integration',
    headline: '4 tools unified into one flow',
    stat: '4',
    statLabel: 'systems connected',
    detail: 'CRM, project management, invoicing, and Slack connected via a custom pipeline. Zero manual syncing, one source of truth for the whole team.',
  },
  {
    icon: '👥',
    category: 'Internal Tool',
    headline: 'Dashboard replaced spreadsheets',
    stat: '15+',
    statLabel: 'daily users',
    detail: 'Custom operations dashboard built for a field services team. Replaced a 40-tab Google Sheet with real-time visibility into jobs, crews, and billing.',
  },
  {
    icon: '⚡',
    category: 'Workflow Automation',
    headline: 'Onboarding fully automated',
    stat: '94%',
    statLabel: 'manual work gone',
    detail: '15-step client onboarding process automated end-to-end. Workspace creation, access provisioning, welcome emails, and kickoff scheduling — all triggered by a single form submission.',
  },
]

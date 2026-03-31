import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web-apps',
    icon: '⬡',
    title: 'Web Applications',
    tagline: 'Custom portals built for your team',
    description:
      'Full-stack web apps tailored to your workflows — not generic SaaS that almost fits. We build tools your team actually wants to use.',
    deliverables: ['Custom UI/UX design', 'Authentication & roles', 'Database design', 'Hosting & deployment'],
    codeSnippet: `// Custom web app example
export async function getTeamDashboard(userId: string) {
  const data = await db.query(\`
    SELECT projects.*, metrics.*
    FROM projects
    JOIN metrics ON metrics.project_id = projects.id
    WHERE projects.team_id = $1
    ORDER BY updated_at DESC
  \`, [userId])
  return data.rows
}`,
    language: 'typescript',
    accentColor: 'cyan',
    bucket: 'build',
  },
  {
    id: 'internal-tools',
    icon: '⬡',
    title: 'Internal Tools & Dashboards',
    tagline: 'Dashboards that replace spreadsheets',
    description:
      'Admin panels, reporting dashboards, and internal apps that give your team real-time visibility — without the complexity of enterprise software.',
    deliverables: ['Data visualization', 'Role-based access', 'CSV/PDF exports', 'Real-time updates'],
    codeSnippet: `// Auto-refresh dashboard
const Dashboard = () => {
  const { data } = useSWR('/api/metrics', fetcher, {
    refreshInterval: 30_000, // every 30s
  })

  return <MetricsGrid data={data} />
}`,
    language: 'typescript',
    accentColor: 'cyan',
    bucket: 'build',
  },
  {
    id: 'databases-forms',
    icon: '⬡',
    title: 'Databases & Forms',
    tagline: 'Clean data structure from day one',
    description:
      'Properly designed databases and smart forms that collect the right data, validate it cleanly, and feed it into the right places automatically.',
    deliverables: ['Schema design', 'Form validation', 'Supabase / PostgreSQL', 'Data migration'],
    codeSnippet: `-- Clean schema design
CREATE TABLE submissions (
  id          uuid DEFAULT gen_random_uuid(),
  form_id     uuid REFERENCES forms(id),
  data        jsonb NOT NULL,
  submitted_at timestamptz DEFAULT now(),

  CONSTRAINT valid_data CHECK (
    jsonb_typeof(data) = 'object'
  )
);`,
    language: 'sql',
    accentColor: 'green',
    bucket: 'data',
  },
  {
    id: 'system-integrations',
    icon: '⬡',
    title: 'System Integrations & APIs',
    tagline: 'Connect your tools seamlessly',
    description:
      'Connect your CRM, project management, communication tools, and data sources so information flows automatically — no more copy-paste between systems.',
    deliverables: ['API design & development', 'Webhook setup', 'Third-party integrations', 'Error handling & retries'],
    codeSnippet: `// Bidirectional sync
webhookRouter.post('/crm/deal-closed', async (req) => {
  const deal = DealSchema.parse(req.body)

  await Promise.all([
    sheets.appendRow(deal.toSheetRow()),
    slack.post('#wins', deal.toSlackMsg()),
    email.send(deal.owner, deal.summary()),
  ])
})`,
    language: 'typescript',
    accentColor: 'green',
    bucket: 'data',
  },
  {
    id: 'workflow-automation',
    icon: '⬡',
    title: 'Workflow Automation',
    tagline: 'Turn manual steps into automatic ones',
    description:
      'Identify repetitive manual tasks — data entry, approvals, notifications, file handling — and build reliable automations that run without supervision.',
    deliverables: ['Process mapping', 'Trigger-based workflows', 'Error notifications', 'Audit logs'],
    codeSnippet: `// Automated onboarding flow
const onboard = workflow('new-client', [
  step('create-workspace', createWorkspace),
  step('send-welcome',    sendWelcomeEmail),
  step('setup-access',   provisionAccess),
  step('notify-team',    notifySlack),
  step('schedule-call',  bookKickoffCall),
], { retries: 3, timeout: '10m' })`,
    language: 'typescript',
    accentColor: 'purple',
    bucket: 'automate',
  },
  {
    id: 'cloud-hosting',
    icon: '⬡',
    title: 'Cloud Services & Hosting',
    tagline: 'Reliable infrastructure without the headache',
    description:
      'Set up and manage cloud infrastructure on AWS, GCP, or Vercel — from simple app hosting to scalable multi-service architectures.',
    deliverables: ['Cloud setup & config', 'CI/CD pipelines', 'Monitoring & alerts', 'Cost optimization'],
    codeSnippet: `# Automated deployment pipeline
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - run: vercel deploy --prod`,
    language: 'yaml',
    accentColor: 'purple',
    bucket: 'automate',
  },
  {
    id: 'rapid-prototyping',
    icon: '⬡',
    title: 'Rapid Prototyping',
    tagline: 'Test ideas before fully committing',
    description:
      'Turn an idea into a working, testable prototype in days — not months. Validate assumptions with real users before investing in a full build.',
    deliverables: ['Working prototype', 'User testing setup', 'Feedback collection', 'Build vs. buy analysis'],
    codeSnippet: `// Prototype-to-production path
const prototype = await scaffold({
  stack: 'next+supabase',
  features: ['auth', 'crud', 'realtime'],
  timeline: '3 days',
  goal: 'validate core workflow',
})

// Ship → collect feedback → decide`,
    language: 'typescript',
    accentColor: 'cyan',
    bucket: 'automate',
  },
  {
    id: 'technical-consulting',
    icon: '⬡',
    title: 'Technical Consulting',
    tagline: 'Expert guidance without the guesswork',
    description:
      'Architecture reviews, technology selection, process audits, and strategic planning — honest technical advice from someone who will also build the solution.',
    deliverables: ['System audit report', 'Tech stack recommendations', 'Implementation roadmap', 'Vendor evaluations'],
    codeSnippet: `// Architecture assessment
const audit = {
  current:  analyzeStack(existingSystems),
  gaps:     findBottlenecks(workflows),
  options:  evaluateAlternatives(constraints),

  recommendation: {
    approach: 'incremental migration',
    timeline: '8 weeks',
    roi:      '~60% reduction in manual work',
  }
}`,
    language: 'typescript',
    accentColor: 'green',
    bucket: 'build',
  },
]

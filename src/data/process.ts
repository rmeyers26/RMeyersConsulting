import type { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Map your workflows in 1–2 sessions',
    description:
      'We start by learning how your team actually works — not how the org chart says it should. We map workflows, identify bottlenecks, and define exactly what success looks like.',
    deliverable: 'Workflow map + problem statement document',
    duration: '3–5 days',
  },
  {
    number: '02',
    title: 'Architect',
    subtitle: 'Design systems that match your operations',
    description:
      'We design the full technical solution before writing a single line of code. This means no surprises mid-build, no scope creep, and a system you understand before we build it.',
    deliverable: 'Technical spec + system diagram',
    duration: '3–7 days',
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Rapid iteration, working demos weekly',
    description:
      "We build in short cycles and show you working software every week — not a big reveal at the end. You see progress, give feedback, and we adjust. The final product won't surprise you.",
    deliverable: 'Working software in weekly increments',
    duration: '2–6 weeks',
  },
  {
    number: '04',
    title: 'Integrate',
    subtitle: 'Connect everything without disruption',
    description:
      'We deploy your new system into your existing tools and workflows carefully — with testing, rollback plans, and minimal disruption to your team during the transition.',
    deliverable: 'Deployed, connected, tested system',
    duration: '3–7 days',
  },
  {
    number: '05',
    title: 'Support',
    subtitle: 'Documentation, training, and ongoing partnership',
    description:
      "We don't disappear after launch. Every project includes documentation, team training, and a support period — and we're available for ongoing work as your needs evolve.",
    deliverable: 'Docs, training sessions, support plan',
    duration: 'Ongoing',
  },
]

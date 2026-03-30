export interface Service {
  id: string
  icon: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
  codeSnippet: string
  language: string
  accentColor: 'cyan' | 'green' | 'purple'
  bucket: 'build' | 'data' | 'automate'
}

export interface ProcessStep {
  number: string
  title: string
  subtitle: string
  description: string
  deliverable: string
  duration: string
}

export interface TechItem {
  name: string
  category: string
}

export interface TerminalScenario {
  id: string
  problem: string
  steps: string[]
  result: string
}

export interface WinCard {
  icon: string
  category: string
  headline: string
  stat: string
  statLabel: string
  detail: string
}

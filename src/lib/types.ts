export interface NavItem {
  label: string
  href: string
  disabled?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
}

export type Theme = "light" | "dark" | "system"

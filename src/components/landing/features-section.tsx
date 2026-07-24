import { Zap, Shield, Palette } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description: "React Server Components, Streaming, Server Actions를 활용한 최신 아키텍처"
  },
  {
    icon: Palette,
    title: "TailwindCSS v4 + shadcn/ui",
    description: "CSS 기반 설정과 복사-붙여넣기 방식의 커스터마이징 가능한 UI 컴포넌트"
  },
  {
    icon: Shield,
    title: "TypeScript + ESLint",
    description: "타입 안전성과 코드 품질을 보장하는 완전한 TypeScript 설정"
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto py-20 px-4">
      <h2 className="text-center text-3xl font-bold mb-12">주요 기능</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

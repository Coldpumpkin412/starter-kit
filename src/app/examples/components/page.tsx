import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ExampleShowcase } from "@/components/examples/example-showcase"

export default function ComponentsExamplePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Back Link */}
      <Link
        href="/examples"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        예제 목록
      </Link>

      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">컴포넌트 쇼케이스</h1>
        <p className="text-lg text-muted-foreground">
          Button, Badge, Avatar, Card 등 주요 UI 컴포넌트의 다양한 사용법을 확인해보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">UI/UX</Badge>
          <Badge variant="secondary">인터랙티브</Badge>
        </div>
      </div>

      {/* Button Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">Button 컴포넌트</h2>

        <ExampleShowcase
          title="Variant 목록"
          description="6가지 variant로 다양한 의미와 용도를 나타냅니다"
          code={`import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="크기 (Size)"
          description="4가지 크기로 다양한 레이아웃에 대응합니다"
          code={`import { Button } from "@/components/ui/button"

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">XS</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="상태 (State)"
          description="disabled 상태와 로딩 상태를 표현합니다"
          code={`import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ButtonStates() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button disabled>Disabled</Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        로딩 중...
      </Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap gap-2">
            <Button disabled>Disabled</Button>
            <Button disabled>로딩 중...</Button>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Badge Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">Badge 컴포넌트</h2>

        <ExampleShowcase
          title="Variant 목록"
          description="6가지 스타일로 다양한 상태를 표현합니다"
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="link">Link</Badge>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Avatar Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">Avatar 컴포넌트</h2>

        <ExampleShowcase
          title="크기 (Size)"
          description="3가지 크기: sm, default, lg"
          code={`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}`}
        >
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="Avatar Group"
          description="여러 아바타를 겹쳐서 표시합니다"
          code={`import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"

export function AvatarGroupExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/next-js.png" />
        <AvatarFallback>NJ</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}`}
        >
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VL</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/next-js.png" />
              <AvatarFallback>NJ</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Card Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">Card 컴포넌트</h2>

        <ExampleShowcase
          title="기본 구조"
          description="CardHeader, CardContent, CardFooter로 구성됩니다"
          code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardExample() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드 본문 영역입니다.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">액션</Button>
      </CardFooter>
    </Card>
  )
}`}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>카드 제목</CardTitle>
              <CardDescription>카드 설명</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">카드 본문 영역입니다.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">액션</Button>
            </CardFooter>
          </Card>
        </ExampleShowcase>
      </div>
    </div>
  )
}

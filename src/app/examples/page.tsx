import { ExampleShowcase } from "@/components/examples/example-showcase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { MoreVertical } from "lucide-react"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">예제</h1>
        <p className="text-lg text-muted-foreground">
          StarterKit의 모든 기능을 탐색해보세요. 각 예제의 "예제보기" 버튼을 클릭하면 소스코드를 확인할 수 있습니다.
        </p>
      </div>

      <div className="space-y-6">
        {/* Button Examples */}
        <ExampleShowcase
          title="Button 컴포넌트"
          description="다양한 variant와 size를 지원합니다"
          code={`import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="space-y-4">
      {/* Variants */}
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">XS</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}`}
        >
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">Variants</p>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <Separator />

            <div>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">Sizes</p>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="xs">XS</Button>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </ExampleShowcase>

        {/* Card Examples */}
        <ExampleShowcase
          title="Card 컴포넌트"
          description="CardHeader, CardTitle, CardContent, CardFooter를 조합하여 사용합니다"
          code={`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardExample() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명 텍스트</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>카드 본문 영역입니다. 다양한 컨텐츠를 담을 수 있습니다.</p>
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
              <CardDescription>카드 설명 텍스트</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">카드 본문 영역입니다. 다양한 컨텐츠를 담을 수 있습니다.</p>
            </CardContent>
          </Card>
        </ExampleShowcase>

        {/* Badge Examples */}
        <ExampleShowcase
          title="Badge 컴포넌트"
          description="다양한 variant와 스타일로 태그를 표시합니다"
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeExample() {
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

        {/* Avatar Examples */}
        <ExampleShowcase
          title="Avatar 컴포넌트"
          description="프로필 이미지와 폴백 텍스트를 표시합니다"
          code={`import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"

export function AvatarExample() {
  return (
    <div className="space-y-4">
      {/* Single Avatar */}
      <div className="flex gap-4">
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

      {/* Avatar Group */}
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
    </div>
  )
}`}
        >
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">Sizes</p>
              <div className="flex gap-4">
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
            </div>

            <Separator />

            <div>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">Avatar Group</p>
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
            </div>
          </div>
        </ExampleShowcase>

        {/* Dropdown Menu Examples */}
        <ExampleShowcase
          title="Dropdown Menu"
          description="드롭다운 메뉴 컴포넌트"
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>수정</DropdownMenuItem>
        <DropdownMenuItem>삭제</DropdownMenuItem>
        <DropdownMenuItem>다운로드</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>수정</DropdownMenuItem>
                <DropdownMenuItem>삭제</DropdownMenuItem>
                <DropdownMenuItem>다운로드</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ExampleShowcase>

        {/* Theme Toggle Example */}
        <ExampleShowcase
          title="다크모드 토글"
          description="useTheme 훅을 사용하여 테마를 전환합니다"
          code={`"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export function ThemeExample() {
  const { theme } = useTheme()

  return (
    <div className="space-y-4">
      <p>현재 테마: <strong>{theme}</strong></p>
      <ThemeToggle />
    </div>
  )
}`}
        >
          <div className="space-y-4">
            <ThemeToggle />
          </div>
        </ExampleShowcase>
      </div>
    </div>
  )
}

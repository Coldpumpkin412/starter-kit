import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <h1 className="text-2xl font-bold">
            <CardTitle>로그인</CardTitle>
          </h1>
          <CardDescription>이메일과 비밀번호로 로그인하세요</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">이메일</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium">비밀번호</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <Button type="submit" className="w-full">이메일로 로그인</Button>
          </form>
          <Button variant="outline" className="w-full">GitHub으로 로그인</Button>
        </CardContent>
      </Card>
    </div>
  )
}

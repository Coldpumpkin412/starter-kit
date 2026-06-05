import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">로그인</CardTitle>
          <CardDescription>이메일과 비밀번호로 로그인하세요</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button className="w-full">이메일로 로그인</Button>
          <Button variant="outline" className="w-full">GitHub으로 로그인</Button>
          <p className="text-center text-sm text-muted-foreground">
            계정이 없으신가요?{" "}
            <Link href="/" className="underline underline-offset-4 hover:text-primary">
              회원가입
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

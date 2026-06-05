import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, DollarSign, Activity } from "lucide-react"

const stats = [
  { title: "총 사용자", value: "2,350", icon: Users, change: "+20.1%" },
  { title: "월 매출", value: "₩12.4M", icon: DollarSign, change: "+15.3%" },
  { title: "활성 세션", value: "1,234", icon: Activity, change: "+8.2%" },
  { title: "성장률", value: "24.5%", icon: TrendingUp, change: "+4.6%" },
]

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">대시보드</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                전월 대비 <span className="text-green-600">{stat.change}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

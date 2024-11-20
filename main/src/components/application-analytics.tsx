"use client"

import { DriversLicenseApplication } from "@/models/DriversLicenseModel"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import {
  useGetApplicationMonthlyData,
  useGetApplicationStatusData,
} from "@/hooks/useReport"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data
// const monthlyData = [
//   { name: "Jan", total: 150, approved: 100, rejected: 30, pending: 20 },
//   { name: "Feb", total: 200, approved: 130, rejected: 40, pending: 30 },
//   { name: "Mar", total: 180, approved: 110, rejected: 50, pending: 20 },
//   { name: "Apr", total: 220, approved: 140, rejected: 60, pending: 20 },
//   { name: "May", total: 250, approved: 160, rejected: 70, pending: 20 },
//   { name: "Jun", total: 300, approved: 200, rejected: 80, pending: 20 },
// ]

// const statusData = [
//   { name: "Approved", value: 600 },
//   { name: "Rejected", value: 150 },
//   { name: "Pending", value: 250 },
// ]

const COLORS = ["#10B981", "#EF4444", "#F59E0B"]

export function ApplicationAnalytics() {
  const { data: monthlyData } = useGetApplicationMonthlyData(
    "drivers_license_applications"
  )
  const { data: statusData } = useGetApplicationStatusData(
    "drivers_license_applications"
  )
  console.log("Monthly Data: ", monthlyData)
  console.log("Status Data: ", statusData)

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">
        Application Analytics Dashboard
      </h1>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Total Applications</CardTitle>
                <CardDescription>Monthly application totals</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] p-0 pr-2">
                <ChartContainer
                  config={{
                    total: { label: "Total", color: "hsl(var(--primary))" },
                  }}
                  className="p-0"
                >
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                    className="p-0"
                  >
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="total" fill="var(--color-total)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
                <CardDescription>Current status distribution</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {statusData?.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Approval Rate</CardTitle>
                <CardDescription>Monthly approval rate trend</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer
                  config={{
                    rate: {
                      label: "Approval Rate",
                      color: "hsl(var(--primary))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey={(data) =>
                          ((data.approved / data.total) * 100).toFixed(2)
                        }
                        stroke="var(--color-rate)"
                        name="Approval Rate"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Application Trends</CardTitle>
              <CardDescription>
                Monthly breakdown of application statuses
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ChartContainer
                config={{
                  approved: { label: "Approved", color: "hsl(var(--success))" },
                  rejected: {
                    label: "Rejected",
                    color: "hsl(var(--destructive))",
                  },
                  pending: { label: "Pending", color: "hsl(var(--warning))" },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar
                      dataKey="approved"
                      stackId="a"
                      fill="var(--color-approved)"
                    />
                    <Bar
                      dataKey="rejected"
                      stackId="a"
                      fill="var(--color-rejected)"
                    />
                    <Bar
                      dataKey="pending"
                      stackId="a"
                      fill="var(--color-pending)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

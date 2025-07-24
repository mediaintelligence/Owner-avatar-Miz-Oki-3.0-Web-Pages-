"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            See Your Data Come{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">Alive</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience real-time intelligence with our intuitive dashboard designed for modern decision-makers
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 backdrop-blur-md border border-white/10">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-[#00D4FF]/20 data-[state=active]:text-[#00D4FF]"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="sentiment"
                className="data-[state=active]:bg-[#00D4FF]/20 data-[state=active]:text-[#00D4FF]"
              >
                Sentiment Analysis
              </TabsTrigger>
              <TabsTrigger
                value="alerts"
                className="data-[state=active]:bg-[#00D4FF]/20 data-[state=active]:text-[#00D4FF]"
              >
                AI Alerts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-300">Total Mentions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">2.4M</div>
                    <div className="flex items-center text-sm text-green-400">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +12.5%
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-300">Sentiment Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">87%</div>
                    <div className="flex items-center text-sm text-green-400">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +5.2%
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-300">Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">45.2M</div>
                    <div className="flex items-center text-sm text-red-400">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      -2.1%
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-300">AI Confidence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">94%</div>
                    <div className="flex items-center text-sm text-[#00D4FF]">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      High
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Trending Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { topic: "Product Launch Campaign", mentions: "45.2K", sentiment: "positive", change: "+23%" },
                      { topic: "Industry Partnership", mentions: "32.1K", sentiment: "positive", change: "+18%" },
                      { topic: "Market Expansion", mentions: "28.7K", sentiment: "neutral", change: "+12%" },
                      { topic: "Competitor Analysis", mentions: "19.3K", sentiment: "neutral", change: "+8%" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant="outline"
                            className={`${
                              item.sentiment === "positive"
                                ? "border-green-400 text-green-400"
                                : item.sentiment === "negative"
                                  ? "border-red-400 text-red-400"
                                  : "border-gray-400 text-gray-400"
                            }`}
                          >
                            {item.sentiment}
                          </Badge>
                          <span className="text-white font-medium">{item.topic}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-300">{item.mentions} mentions</span>
                          <span className="text-green-400">{item.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sentiment" className="mt-8">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Real-Time Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">72%</div>
                      <div className="text-gray-300">Positive</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-400 mb-2">23%</div>
                      <div className="text-gray-300">Neutral</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div className="bg-gray-400 h-2 rounded-full" style={{ width: "23%" }}></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-400 mb-2">5%</div>
                      <div className="text-gray-300">Negative</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div className="bg-red-400 h-2 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Recent Mentions</h4>
                    {[
                      {
                        text: "Amazing product launch! The innovation is incredible.",
                        sentiment: "positive",
                        source: "Twitter",
                        time: "2m ago",
                      },
                      {
                        text: "Looking forward to seeing how this develops in the market.",
                        sentiment: "neutral",
                        source: "LinkedIn",
                        time: "5m ago",
                      },
                      {
                        text: "Impressive technology stack and user experience.",
                        sentiment: "positive",
                        source: "Reddit",
                        time: "8m ago",
                      },
                    ].map((mention, index) => (
                      <div key={index} className="p-3 bg-white/5 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <Badge
                            variant="outline"
                            className={`${
                              mention.sentiment === "positive"
                                ? "border-green-400 text-green-400"
                                : mention.sentiment === "negative"
                                  ? "border-red-400 text-red-400"
                                  : "border-gray-400 text-gray-400"
                            }`}
                          >
                            {mention.sentiment}
                          </Badge>
                          <div className="text-xs text-gray-400">
                            {mention.source} • {mention.time}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">{mention.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alerts" className="mt-8">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">AI-Powered Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "critical",
                        title: "Viral Mention Detected",
                        description: "A mention about your product is gaining rapid traction on social media",
                        time: "5 minutes ago",
                        action: "View Details",
                      },
                      {
                        type: "warning",
                        title: "Sentiment Shift Alert",
                        description: "Negative sentiment increased by 15% in the last hour",
                        time: "12 minutes ago",
                        action: "Investigate",
                      },
                      {
                        type: "info",
                        title: "Competitor Activity",
                        description: "Your main competitor launched a new marketing campaign",
                        time: "1 hour ago",
                        action: "Analyze",
                      },
                      {
                        type: "success",
                        title: "Positive Trend",
                        description: "Brand sentiment reached a 30-day high",
                        time: "2 hours ago",
                        action: "Share Report",
                      },
                    ].map((alert, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border-l-4 border-l-[#00D4FF]"
                      >
                        <div className="flex-shrink-0">
                          {alert.type === "critical" && <AlertTriangle className="h-5 w-5 text-red-400" />}
                          {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-400" />}
                          {alert.type === "info" && <TrendingUp className="h-5 w-5 text-blue-400" />}
                          {alert.type === "success" && <CheckCircle className="h-5 w-5 text-green-400" />}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-white font-semibold mb-1">{alert.title}</h4>
                          <p className="text-gray-300 text-sm mb-2">{alert.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">{alert.time}</span>
                            <button className="text-[#00D4FF] text-sm hover:underline">{alert.action}</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

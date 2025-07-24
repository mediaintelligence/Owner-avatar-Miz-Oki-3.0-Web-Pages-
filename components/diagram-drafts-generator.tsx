"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Eye, RefreshCw } from "lucide-react"

interface DiagramDraft {
  id: string
  name: string
  type: "flowchart" | "architecture" | "network" | "timeline" | "matrix"
  mermaidCode: string
  description: string
  colorScheme: "brand" | "monochrome" | "semantic" | "custom"
}

const diagramTemplates: DiagramDraft[] = [
  {
    id: "bgi-flywheel-draft",
    name: "BGI Flywheel Draft",
    type: "flowchart",
    colorScheme: "brand",
    description: "Business General Intelligence continuous feedback loop",
    mermaidCode: `graph TD
    A["Data Sensing<br/>📡 Multi-source Ingestion"] --> B["Reasoning Engine<br/>🧠 AI Analysis"]
    B --> C["Decision Matrix<br/>⚡ Autonomous Choices"]
    C --> D["Action Execution<br/>🎯 Automated Response"]
    D --> E["Learning Loop<br/>📚 Continuous Improvement"]
    E --> A
    
    style A fill:#00D4FF,stroke:#1B365D,stroke-width:3px,color:#fff
    style B fill:#A47864,stroke:#1B365D,stroke-width:3px,color:#fff
    style C fill:#00D4FF,stroke:#1B365D,stroke-width:3px,color:#fff
    style D fill:#A47864,stroke:#1B365D,stroke-width:3px,color:#fff
    style E fill:#10B981,stroke:#1B365D,stroke-width:3px,color:#fff`,
  },
  {
    id: "zero-trust-mesh-draft",
    name: "Zero-Trust Mesh Draft",
    type: "network",
    colorScheme: "semantic",
    description: "Security architecture with distributed verification points",
    mermaidCode: `graph TB
    subgraph "External Layer"
        U1["👤 User"] --> GW["🛡️ Gateway"]
        U2["📱 Mobile"] --> GW
        U3["💻 Desktop"] --> GW
    end
    
    subgraph "Verification Layer"
        GW --> AUTH["🔐 Authentication"]
        AUTH --> AUTHZ["✅ Authorization"]
        AUTHZ --> POL["📋 Policy Engine"]
    end
    
    subgraph "Service Mesh"
        POL --> SVC1["🔧 Service A"]
        POL --> SVC2["📊 Service B"]
        POL --> SVC3["💾 Service C"]
        SVC1 -.-> SVC2
        SVC2 -.-> SVC3
    end
    
    subgraph "Data Layer"
        SVC1 --> DB1["🗄️ Database"]
        SVC2 --> DB2["📈 Analytics"]
        SVC3 --> DB3["🔒 Vault"]
    end
    
    style GW fill:#EF4444,stroke:#1B365D,stroke-width:2px,color:#fff
    style AUTH fill:#10B981,stroke:#1B365D,stroke-width:2px,color:#fff
    style AUTHZ fill:#10B981,stroke:#1B365D,stroke-width:2px,color:#fff
    style POL fill:#F59E0B,stroke:#1B365D,stroke-width:2px,color:#fff`,
  },
  {
    id: "e-shkg-stack-draft",
    name: "E-SHKG Stack Draft",
    type: "architecture",
    colorScheme: "brand",
    description: "Enterprise Semantic Hybrid Knowledge Graph layers",
    mermaidCode: `graph TB
    subgraph "Presentation Layer"
        UI["🖥️ Dashboard UI"]
        API["🔌 REST API"]
        WS["⚡ WebSocket"]
    end
    
    subgraph "Intelligence Layer"
        NLP["🧠 NLP Engine"]
        ML["🤖 ML Models"]
        KG["🕸️ Knowledge Graph"]
    end
    
    subgraph "Processing Layer"
        STREAM["🌊 Stream Processing"]
        BATCH["📦 Batch Processing"]
        SEMANTIC["🔍 Semantic Analysis"]
    end
    
    subgraph "Data Layer"
        STRUCT["📊 Structured Data"]
        UNSTRUCT["📄 Unstructured Data"]
        GRAPH["🕸️ Graph Database"]
        VECTOR["🎯 Vector Store"]
    end
    
    UI --> NLP
    API --> ML
    WS --> KG
    
    NLP --> STREAM
    ML --> BATCH
    KG --> SEMANTIC
    
    STREAM --> STRUCT
    BATCH --> UNSTRUCT
    SEMANTIC --> GRAPH
    SEMANTIC --> VECTOR
    
    style UI fill:#00D4FF,stroke:#1B365D,stroke-width:2px,color:#fff
    style NLP fill:#A47864,stroke:#1B365D,stroke-width:2px,color:#fff
    style STREAM fill:#00D4FF,stroke:#1B365D,stroke-width:2px,color:#fff
    style STRUCT fill:#A47864,stroke:#1B365D,stroke-width:2px,color:#fff`,
  },
]

export function DiagramDraftsGenerator() {
  const [selectedDiagram, setSelectedDiagram] = useState<DiagramDraft>(diagramTemplates[0])
  const [customCode, setCustomCode] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const generateDiagram = () => {
    // In a real implementation, this would generate the actual diagram
    console.log("Generating diagram with code:", isEditing ? customCode : selectedDiagram.mermaidCode)
  }

  const exportDiagram = (format: "svg" | "png") => {
    // In a real implementation, this would export the diagram
    console.log(`Exporting diagram as ${format}`)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Diagram{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Draft Generator
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive diagram creation tool with brand-compliant templates and real-time preview
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Diagram Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {diagramTemplates.map((template) => (
                  <div
                    key={template.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedDiagram.id === template.id
                        ? "bg-[#00D4FF]/20 border border-[#00D4FF]/30"
                        : "bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                    onClick={() => {
                      setSelectedDiagram(template)
                      setCustomCode(template.mermaidCode)
                      setIsEditing(false)
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{template.name}</h4>
                      <Badge className="bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30">{template.type}</Badge>
                    </div>
                    <p className="text-gray-300 text-xs">{template.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Customization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Color Scheme</label>
                  <Select defaultValue="brand">
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brand">Brand Colors</SelectItem>
                      <SelectItem value="monochrome">Monochrome</SelectItem>
                      <SelectItem value="semantic">Semantic</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Export Format</label>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                      onClick={() => exportDiagram("svg")}
                    >
                      SVG
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                      onClick={() => exportDiagram("png")}
                    >
                      PNG
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Code Editor */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Mermaid Code</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? "Preview" : "Edit"}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white"
                      onClick={generateDiagram}
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Generate
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea
                    value={customCode || selectedDiagram.mermaidCode}
                    onChange={(e) => setCustomCode(e.target.value)}
                    className="min-h-[400px] bg-gray-900 border-white/10 text-white font-mono text-sm"
                    placeholder="Enter Mermaid diagram code..."
                  />
                ) : (
                  <pre className="bg-gray-900 p-4 rounded-lg text-gray-300 text-sm overflow-auto max-h-[400px] border border-white/10">
                    <code>{customCode || selectedDiagram.mermaidCode}</code>
                  </pre>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Live Preview</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Fullscreen
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-white rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔄</div>
                    <div className="text-gray-600 font-medium">{selectedDiagram.name}</div>
                    <div className="text-gray-500 text-sm mt-2">Mermaid Preview</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {selectedDiagram.type} • {selectedDiagram.colorScheme}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 border-white/10">
              <CardContent className="p-4">
                <h4 className="text-white font-semibold mb-2">Quick Tips</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Use brand colors: #1B365D, #00D4FF, #A47864</li>
                  <li>• Include emojis for visual clarity</li>
                  <li>• Keep text concise and readable</li>
                  <li>• Test at different sizes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

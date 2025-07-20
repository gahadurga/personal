"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Code, BookOpen, Video, Archive } from "lucide-react"

export default function DownloadsPage() {
  const downloadCategories = [
    {
      title: "Programming Resources",
      icon: Code,
      items: [
        {
          name: "QBASIC Programming Guide",
          description: "Complete guide to QBASIC programming with examples and exercises",
          type: "PDF",
          size: "2.5 MB",
          downloads: 1250,
          icon: FileText,
        },
        {
          name: "C Programming Examples",
          description: "Collection of C programming examples and solutions",
          type: "ZIP",
          size: "5.2 MB",
          downloads: 980,
          icon: Archive,
        },
        {
          name: "Python Basics Handbook",
          description: "Beginner-friendly Python programming handbook",
          type: "PDF",
          size: "3.8 MB",
          downloads: 2100,
          icon: FileText,
        },
        {
          name: "JavaScript ES6+ Cheat Sheet",
          description: "Quick reference for modern JavaScript features",
          type: "PDF",
          size: "1.2 MB",
          downloads: 1800,
          icon: FileText,
        },
      ],
    },
    {
      title: "Educational Materials",
      icon: BookOpen,
      items: [
        {
          name: "Computer Science Curriculum",
          description: "Secondary level computer science teaching curriculum",
          type: "PDF",
          size: "4.1 MB",
          downloads: 650,
          icon: FileText,
        },
        {
          name: "Programming Logic Worksheets",
          description: "Printable worksheets for teaching programming concepts",
          type: "ZIP",
          size: "8.5 MB",
          downloads: 890,
          icon: Archive,
        },
        {
          name: "Algorithm Visualization Slides",
          description: "PowerPoint slides for teaching algorithms",
          type: "PPTX",
          size: "12.3 MB",
          downloads: 420,
          icon: FileText,
        },
      ],
    },
    {
      title: "Web Development",
      icon: Code,
      items: [
        {
          name: "MERN Stack Starter Template",
          description: "Complete MERN stack project template with authentication",
          type: "ZIP",
          size: "15.7 MB",
          downloads: 750,
          icon: Archive,
        },
        {
          name: "React Components Library",
          description: "Reusable React components with documentation",
          type: "ZIP",
          size: "6.8 MB",
          downloads: 1100,
          icon: Archive,
        },
        {
          name: "CSS Grid & Flexbox Guide",
          description: "Comprehensive guide to modern CSS layout techniques",
          type: "PDF",
          size: "2.9 MB",
          downloads: 1350,
          icon: FileText,
        },
      ],
    },
    {
      title: "Video Tutorials",
      icon: Video,
      items: [
        {
          name: "Introduction to Programming",
          description: "Video series covering programming fundamentals",
          type: "MP4",
          size: "250 MB",
          downloads: 320,
          icon: Video,
        },
        {
          name: "MERN Stack Development",
          description: "Complete MERN stack development tutorial series",
          type: "MP4",
          size: "1.2 GB",
          downloads: 180,
          icon: Video,
        },
      ],
    },
  ]

  const handleDownload = (fileName: string) => {
    // In a real application, this would trigger the actual download
    alert(`Downloading ${fileName}...`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Downloads</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free resources, templates, and educational materials for students, teachers, and fellow developers. All
            downloads are available at no cost.
          </p>
        </div>

        {/* Download Categories */}
        <div className="space-y-12">
          {downloadCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CategoryIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon
                    return (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                <ItemIcon className="h-4 w-4 text-gray-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h3>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {item.type}
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>Size: {item.size}</span>
                            <span>{item.downloads} downloads</span>
                          </div>

                          <Button
                            onClick={() => handleDownload(item.name)}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            size="sm"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Usage Guidelines */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Use</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Free for educational and non-commercial use</li>
                <li>• Can be used in classrooms and training programs</li>
                <li>• Attribution appreciated but not required</li>
                <li>• Modify and adapt to your needs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Commercial Use</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Contact me for commercial licensing</li>
                <li>• Custom materials available on request</li>
                <li>• Bulk downloads for institutions</li>
                <li>• Training and consultation services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Custom Resources */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Resources?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Looking for specific educational materials, custom code examples, or tailored programming resources? I can
            create custom content for your needs.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="/contact">Request Custom Resources</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

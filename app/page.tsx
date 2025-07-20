import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, GraduationCap, BookOpen, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Teacher",
      description: "Secondary Level educator with passion for technology",
    },
    {
      icon: Code,
      title: "MERN Full Stack Developer",
      description: "MongoDB, Express.js, React, Node.js expertise",
    },
    {
      icon: BookOpen,
      title: "Programming Languages",
      description: "QBASIC, C, Python, JavaScript proficiency",
    },
    {
      icon: Award,
      title: "Web Technologies",
      description: "HTML, CSS, JavaScript, and modern frameworks",
    },
  ]

  const skills = ["QBASIC", "C Programming", "Python", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/durga.jpg"
                alt="Durga Gaha - Computer Science Teacher and MERN Stack Developer"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Durga Gaha</span>
              <span className="block text-3xl md:text-4xl mt-2">Computer Science Teacher & MERN Stack Developer</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm a passionate educator and full-stack developer with expertise in multiple programming languages and
              modern web technologies. I'm dedicated to bridging the gap between education and technology, helping
              students learn programming while building innovative web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/skills">
                  View My Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600">A glimpse of my programming and development expertise</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-gray-600">Combining education and technology to make an impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need educational content, web development, or technical consultation, I'm here to help bring
            your ideas to life.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

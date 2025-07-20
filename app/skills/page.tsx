import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Cpu, GraduationCap, Wrench } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "QBASIC", level: 90, description: "Classic programming fundamentals" },
        { name: "C Programming", level: 85, description: "System programming and algorithms" },
        { name: "Python", level: 88, description: "Data analysis, automation, and web development" },
        { name: "JavaScript", level: 92, description: "Modern web development and ES6+" },
      ],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 95, description: "Semantic markup and accessibility" },
        { name: "CSS3", level: 90, description: "Responsive design and animations" },
        { name: "React.js", level: 88, description: "Component-based UI development" },
        { name: "Next.js", level: 82, description: "Full-stack React framework" },
      ],
    },
    {
      icon: Database,
      title: "MERN Stack",
      skills: [
        { name: "MongoDB", level: 85, description: "NoSQL database design and queries" },
        { name: "Express.js", level: 87, description: "RESTful API development" },
        { name: "React.js", level: 88, description: "Frontend application development" },
        { name: "Node.js", level: 86, description: "Server-side JavaScript runtime" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85, description: "Version control and collaboration" },
        { name: "VS Code", level: 90, description: "Development environment" },
        { name: "Postman", level: 80, description: "API testing and documentation" },
        { name: "npm/yarn", level: 85, description: "Package management" },
      ],
    },
    {
      icon: GraduationCap,
      title: "Teaching & Education",
      skills: [
        { name: "Curriculum Development", level: 92, description: "Computer Science curriculum design" },
        { name: "Student Assessment", level: 88, description: "Evaluation and feedback methods" },
        { name: "Educational Technology", level: 85, description: "Digital learning tools" },
        { name: "Programming Instruction", level: 90, description: "Teaching coding concepts" },
      ],
    },
    {
      icon: Cpu,
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 85, description: "Arrays, linked lists, trees, graphs" },
        { name: "Algorithms", level: 82, description: "Sorting, searching, optimization" },
        { name: "Object-Oriented Programming", level: 88, description: "OOP principles and design patterns" },
        { name: "Database Design", level: 80, description: "Relational and NoSQL databases" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my programming languages, web technologies, and educational expertise developed
            through years of teaching and development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <Card key={categoryIndex} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <Badge variant="secondary">{skill.level}%</Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Secondary Level Computer Science Teaching</li>
                <li>• Programming Fundamentals Instruction</li>
                <li>• Digital Literacy and Technology Integration</li>
                <li>• Student Project Mentoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Full-Stack Web Application Development</li>
                <li>• RESTful API Design and Implementation</li>
                <li>• Database Design and Optimization</li>
                <li>• Responsive Web Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

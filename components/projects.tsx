"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "FileVault - Secure File Sharing Platform",
      description: "Designed a responsive dashboard with file search, preview, starred items, and shareable secure links.",
      image: "/FileVault.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "JWT"],
      github: "https://github.com/trailblazer072/File-sharing-app",
      demo: "",
      live: "https://file-sharing-app-px2e.vercel.app/",
      inProduction: true
    },
    {
      title: "Shapify - Collaborative Whiteboard",
      description: "Developed a real-time collaborative whiteboard application with features like freehand drawing, shape creation, text editing, and undo/redo functionality.",
      image: "/Shapify.png",
      tags: ["TypeScript", "NextJs", "WebSockets", "Prisma ORM", "PostgreSQL"],
      github: "https://github.com/trailblazer072/Shapify---Collaborative-Real-Time-Whiteboard",
      demo: "",
      live: "https://ai-trading-insight-tool.vercel.app/",
      inProduction: true
    },
    // {
    //   title: "PlayPlan – Your AI-content Planner",
    //   description: "AI-powered Content Planner for users to paln their content posting",
    //   image: "/Swing.jpg",
    //   tags: ["TypeScript", "NextJS","React", "Node.js", "AI", "Clerk"],
    //   github: "https://github.com/DakshBaxi/AI-content-planner",
    //   demo: "",
    //   live:"https://ai-content-planner.vercel.app/",
    //   inProduction:true
    // },
    {
      title: "Beiyo - Hostel Management",
      description: "Scalable Hostel Management for a $1M Startup",
      image: "/Beiyo.jpg",
      tags: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
      github: "",
      demo: "",
      live: "https://beiyo.in/",
      inProduction: true
    },
    // {
    //   title: "Swing – Instagram DM Automation",
    //   description: "AI-powered Instagram DM automation tool for businesses to engage with customers efficiently.",
    //   image: "/Swing.jpg",
    //   tags: ["TypeScript", "NextJS","React", "Node.js", "AI", "Clerk"],
    //   github: "https://github.com/DakshBaxi/Swing-DM-automation",
    //   demo: "",
    //   live:"",
    //   inProduction:false
    // }

    // {
    //   title: "E-Commerce Platform",
    //   description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Next.js", "TypeScript", "Stripe", "MongoDB", "AWS"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
    // {
    //   title: "AI Content Generator",
    //   description: "A tool that uses AI to generate marketing content, blog posts, and social media captions.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Python", "React", "OpenAI", "FastAPI", "Docker"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-16 md:py-24">

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {projects.map((project, index) => (

            <motion.div key={index} variants={item} className="w-full max-w-sm">
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 relative pt-0">
                {project.inProduction === false && (
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-white opacity-60 text-black">In Progress</Badge>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">

                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="leading-normal">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 ">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {
                    project.github !== "" && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> Code
                        </Link>
                      </Button>
                    )
                  }
                  {project.demo !== "" && (<Button asChild size="sm">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </Link>
                  </Button>)}
                  {project.live !== "" && (<Button asChild size="sm">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Live
                    </Link>
                  </Button>)}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

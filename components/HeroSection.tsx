import React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        <div className="flex-1">
          <p className="text-purple-600 font-medium mb-2">I Am A CREATIVE</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">UI/UX DESIGNER</h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Hi there, I'm a talented UI/UX designer experienced in the significance of creating unique and engaging
            graphics for business.
          </p>
          <div className="flex space-x-4 mb-8">
            <Button className="bg-purple-600 hover:bg-purple-700">Hire Me</Button>
            <Button variant="outline" className="bg-white text-purple-600 border-purple-600 hover:bg-purple-50">
              View Portfolio
            </Button>
          </div>
          <div className="flex space-x-4">
            <Github className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
            <Twitter className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
            <Instagram className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=350"
              alt="Designer portrait"
              className="rounded-full w-80 h-80 object-cover shadow-2xl"
            />
            <div className="absolute top-6 right-6">
              <Button className="bg-purple-600 hover:bg-purple-700">Hire Me</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
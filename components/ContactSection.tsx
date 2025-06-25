import React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 h-screen flex items-center bg-gradient-to-r from-purple-900 to-purple-800 text-white pt-16 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white dark:text-primary-foreground">Contact Me</h2>
            <p className="text-purple-200 mb-8 dark:text-gray-400">
              I would love if you reached out to me. Even if it's just to say "Hey!". Don't hesitate, drop me a line
              and I'll get back to you ASAP.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-300 dark:text-primary" />
                <span>Chennai,Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-300 dark:text-primary" />
                <span>syed.a@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-300 dark:text-primary" />
                <span>9876543210</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Github className="w-6 h-6 text-purple-300 hover:text-white cursor-pointer dark:text-gray-400 dark:hover:text-primary" />
              <Linkedin className="w-6 h-6 text-purple-300 hover:text-white cursor-pointer dark:text-gray-400 dark:hover:text-primary" />
              <Twitter className="w-6 h-6 text-purple-300 hover:text-white cursor-pointer dark:text-gray-400 dark:hover:text-primary" />
              <Instagram className="w-6 h-6 text-purple-300 hover:text-white cursor-pointer dark:text-gray-400 dark:hover:text-primary" />
            </div>
          </div>

          <div className="space-y-4">
            <Input
              placeholder="Full Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
            />
            <Input
              placeholder="Email Address"
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
            />
            <Input
              placeholder="Phone Number"
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-primary dark:hover:bg-primary/90">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "akshaykumarkkl003.com",
      href: "mailto:alex.chen@email.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9496154335",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kasaragod, Kerala, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Let's Collaborate!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to work on new projects and connect with fellow developers. Whether you have a project in
            mind or just want to chat about tech, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif font-semibold text-2xl text-foreground mb-6">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently open to new opportunities and interesting projects. Let's discuss how we can work together
                to create something amazing!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <info.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.title}</p>
                    <a href={info.href} className="text-muted-foreground hover:text-purple-600 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground">Response time: Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

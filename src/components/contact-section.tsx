"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Toaster, toast } from 'sonner'
import { useRef } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const res = await fetch('https://formspree.io/f/mldowrpv', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
    if (res.ok) {
      toast.success('Your message has been sent!')
      if (nameRef.current) nameRef.current.value = ''
      if (emailRef.current) emailRef.current.value = ''
      if (messageRef.current) messageRef.current.value = ''
    } else {
      toast.error('Something went wrong. Please try again.')
    }
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
              <form
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div>
                  <Input
                    ref={nameRef}
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    ref={emailRef}
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    ref={messageRef}
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  size="lg"
                >
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
      <Toaster position="top-right" richColors />
    </section>
  )
}

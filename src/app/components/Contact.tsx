"use client"

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Loader2 } from "lucide-react"
import { useState, useTransition } from "react"

// replace it with your actions.
import { saySomething } from "@/actions/emailSubRelated"
import { Button } from "@/components/ui/button"

type FormType = {
  firstName: string
  lastName?: string
  email: string
  message: string
}

export default function Contact() {
  const [pending, startTransition] = useTransition()
  // const { toast } = useToast()

  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForms({ ...forms, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      saySomething({
        firstName: forms.firstName,
        lastName: forms.lastName,
        email: forms.email,
        message: forms.message,
      })
        .then((res) => {
          setForms({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          })
        })
        .catch((err) => {
          console.error(err)
        })
    })
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-100 text-center mt-20">
        Contact Us 
      </h1>
        <section className="bg-black text-gray-100 custom-screen-lg mx-auto md:-mt-30 z-20">
      <div className="relative bg-gray-900 backdrop-blur-3xl z-10 max-w-4xl mx-auto space-y-4">
        <Card className="relative mt-20 py-10 z-20 backdrop-blur-3xl bg-black border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-100">Contact Us</CardTitle>
            <CardDescription className="text-gray-400">
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 z-20" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-gray-200">
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    value={forms.firstName}
                    onChange={handleChange}
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                    className="bg-black text-gray-100 border-gray-600 focus:border-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-gray-200">
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    value={forms.lastName}
                    onChange={handleChange}
                    name="lastName"
                    placeholder="Enter your last name"
                    className="bg-black text-gray-100 border-gray-600 focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  value={forms.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  type="email"
                  required
                  className="bg-black text-gray-100 border-gray-600 focus:border-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-200">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  value={forms.message}
                  className="bg-black text-gray-100 border-gray-600 focus:border-gray-500"
                  onChange={handleChange}
                  name="message"
                  maxLength={200}
                  placeholder="Enter your message"
                />
              </div>
              <Button
                disabled={pending}
                variant="default"
                className="inline-flex rounded-3xl text-xl hover:bg-gray-200 text-center group items-center w-full justify-center bg-white text-black border-gray-600 border-[1px]  transition-colors sm:w-auto py-6 px-10"
              >
                Submit
                {pending ? (
                  <Loader2 className="animate-spin ml-3 w-4 h-4 flex items-center" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
    </div>
    
  )
}


'use client'



import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Footerdemo from "../components/Footer"
import Navbar from "../components/Navbar"

const mentors = [
  {
    id: 1,
    name: "Chaitra Suresh",
    image: "/mentor1.webp",
    role: "Senior Data Engineer",
    specialty: "Data Engineering Mentorship for Entry-Level Roles and Technical Interview Prep",
    duration: "45 min",
    available: true,
  },
  {
    id: 2,
    name: "V U Bushra",
    image: "/mentor2.webp",
    role: "Software Architect",
    specialty: "Software Engineering Mentorship and System Design Interview Preparation",
    duration: "45 min",
    available: true,
  },
  {
    id: 3,
    name: "Neha Nadiger",
    image: "/mentor3.webp",
    role: "Product Manager",
    specialty: "Product Management Mentorship for Entry-level roles and PM Interview Prep",
    duration: "30 min",
    available: true,
  },
  {
    id: 4,
    name: "Aditya D",
    image: "/mentor4.webp",
    role: "Senior Frontend Engineer",
    specialty: "Frontend Development Mentorship and Technical Interview Preparation",
    duration: "45 min",
    available: true,
  },
]

export default function MentorGrid() {
  return (
    <div>
    <Navbar />
    <div className="bg-black min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Expert Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-zinc-400 text-sm">{mentor.role}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={mentor.available ? "bg-emerald-500/10 text-emerald-500" : "bg-zinc-500/10 text-zinc-500"}
                  >
                    {mentor.available ? "Available" : "Unavailable"}
                  </Badge>
                </div>
                <p className="text-zinc-300 text-sm mb-4">{mentor.specialty}</p>
                <div className="flex items-center text-zinc-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {mentor.duration} session
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button className="w-full bg-white text-black hover:bg-zinc-200" disabled={!mentor.available}>
                  Book Now
                </Button>
                <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <Footerdemo />
    </div>

  )
}


"use client"
import React from "react"
import Navbar from "../components/Navbar"
import Footerdemo from "../components/Footer"

const Page = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold mb-6 text-center">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            Welcome to <strong className="text-yellow-400">HIVE Resource Hub</strong> – your trusted partner on the
            journey to a successful career. We are a community-focused platform dedicated to empowering job seekers by
            providing essential resources, guidance, and support throughout their job search.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
          <p className="text-lg mb-6">
            Our mission is to connect job seekers with the tools, mentorship, and resources they need to succeed.
            Whether you're just starting your job search or looking to make a career change, HIVE is here to support you
            every step of the way.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">What We Offer</h2>
          <ul className="list-disc pl-6 mb-6 space-y-4">
            <li>
              <strong className="font-semibold text-yellow-400">1:1 Mentorship:</strong> Get personalized advice from
              experienced professionals who can help you refine your job search strategies, improve your application
              materials, and boost your confidence.
            </li>
            <li>
              <strong className="font-semibold text-yellow-400">IRLs & Webinars:</strong> Stay ahead of industry trends
              and job search techniques with our in-person meetups and online webinars hosted by industry leaders and
              experts.
            </li>
            <li>
              <strong className="font-semibold text-yellow-400">Free Job Search Resources:</strong> Access essential
              materials like resume templates, cover letter guides, interview prep resources, and job search strategies
              to make a strong impression on employers.
            </li>
            <li>
              <strong className="font-semibold text-yellow-400">Community Engagement:</strong> Join a vibrant community
              of like-minded individuals who are also on their job search journey. Exchange tips, share experiences, and
              build a network that supports your career growth.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
          <p className="text-lg mb-6">
            At HIVE, we believe that every job seeker deserves the opportunity to succeed. Our vision is to create a
            world where individuals have the support and resources they need to build meaningful careers and lead
            fulfilling lives.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Join Us Today</h2>
          <p className="text-lg mb-6">
            Are you ready to take the next step in your career journey? Join{" "}
            <strong className="text-yellow-400">HIVE Resource Hub</strong> and be a part of a growing community
            dedicated to helping you succeed. Together, we'll unlock the opportunities that lie ahead.
          </p>
        </div>
      </div>
      <Footerdemo />
    </div>

  )
}

export default Page


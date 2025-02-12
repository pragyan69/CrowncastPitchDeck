"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, TrendingUp, Users, BarChart4, ArrowRight, CheckCircle, Clock, DollarSign, Phone } from "lucide-react"
import PlatformFeatures from "./platform-features"

const MotionCard = motion(Card)

export default function PitchDeck() {
  const marketingSuiteRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLElement>(null)
  const [showPhoneNumber, setShowPhoneNumber] = useState(false)

  const scrollToMarketingSuite = () => {
    marketingSuiteRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A051E]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        <div className="container px-4 mx-auto text-center z-10">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CrowncastLogo-bivnjH6lBUYuSExirbW2EC13xa2o3d.png"
              alt="Crowncast"
              width={120}
              height={120}
              className="mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-[#4B7BF7] to-[#A573FF] text-transparent bg-clip-text">
              Crowncast
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-[#4B7BF7] to-[#A573FF] text-transparent bg-clip-text mb-6">
              Transform Your Brand Growth
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              The all-in-one platform for influencer marketing, affiliate programs, and brand growth
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <Button
              size="lg"
              className="bg-[#4B7BF7] hover:bg-blue-600 text-lg px-8 my-4 py-6 rounded-full"
              onClick={scrollToMarketingSuite}
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Marketing Suite Section */}
      <section ref={marketingSuiteRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Top Ways to Scale your brand
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Creator Collaborations",
                cost: "₹15,000/month",
                time: "80-100 hours",
                icon: Users,
                points: [
                  "Research & identify relevant creators",
                  "Negotiate partnership terms",
                  "Handle contracts and payments",
                  "Track promotional performance",
                ],
              },
              {
                title: "Referral Programs",
                cost: "₹12,000/month",
                time: "60-80 hours",
                icon: Target,
                points: [
                  "Set up tracking infrastructure",
                  "Recruit and verify affiliates",
                  "Process commission payments",
                  "Monitor campaign metrics",
                ],
              },
              {
                title: "Campaign Management",
                cost: "₹8,000/month",
                time: "40-50 hours",
                icon: BarChart4,
                points: [
                  "Design promotional mechanics",
                  "Create campaign materials",
                  "Monitor participant engagement",
                  "Handle prize distribution",
                ],
              },
              {
                title: "Performance Tracking",
                cost: "₹10,000/month",
                time: "30-40 hours",
                icon: TrendingUp,
                points: [
                  "Set up analytics tools",
                  "Generate performance reports",
                  "Calculate ROI per channel",
                  "Optimize campaign strategy",
                ],
              },
            ].map((item, index) => (
              <MotionCard key={index} variants={item} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <item.icon className="h-16 w-16 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">{item.title}</h3>
                  <div className="space-y-4 text-gray-400 mb-6">
                    <p className="flex items-center text-lg">
                      <DollarSign className="h-5 w-5 mr-2" />
                      {item.cost}
                    </p>
                    <p className="flex items-center text-lg">
                      <Clock className="h-5 w-5 mr-2" />
                      {item.time}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </MotionCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          >
            The Crowncast Advantage
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Traditional Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Creator Collaborations", cost: "₹15,000" },
                    { name: "Referral Programs", cost: "₹12,000" },
                    { name: "Campaign Management", cost: "₹8,000" },
                    { name: "Performance Tracking", cost: "₹10,000" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-gray-400">{item.cost}/month</span>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-white">Total Cost</span>
                      <span className="text-xl font-semibold text-red-400">₹45,000/month</span>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Time Investment</span>
                      <span className="text-gray-400">210-270 hours/month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-blue-600 border-blue-500 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Crowncast Solution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-white">₹1,999</span>
                    <span className="text-xl text-blue-200">/month</span>
                  </div>
                  <p className="text-center text-blue-100">All-in-One Platform</p>
                  <ul className="space-y-2">
                    {[
                      "Creator Collaborations",
                      "Referral Programs",
                      "Campaign Management",
                      "Performance Tracking",
                      "Automated Workflows",
                      "Real-time Analytics",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-blue-200" />
                        <span className="text-blue-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 mt-4 border-t border-blue-500">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Time Investment</span>
                      <span className="text-blue-200">Minimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-2xl text-gray-300 mb-6">
              Save over <span className="text-green-400 font-bold">₹43,000 per month</span> and countless hours with
              Crowncast's all-in-one solution!
            </p>
            {/* <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 rounded-full"
              onClick={scrollToResults}
            >
              See Our Results <ArrowRight className="ml-2" />
            </Button> */}

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto animate-pulse"
              onClick={() => setShowPhoneNumber(!showPhoneNumber)}
            >
              {showPhoneNumber ? (
                <span className="flex items-center">
                  <Phone className="mr-2 h-6 w-6" />
                  9650790184
                </span>
              ) : (
                <>
                  Book a Call <ArrowRight className="ml-2 h-6 w-6" />
                </>
              )}
            </Button>

          </motion.div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section ref={resultsRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          >
            Proven Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
          >
            Real numbers from brands using Crowncast
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { metric: "40%", label: "Average Growth in Sales", sublabel: "Month over Month" },
              { metric: "3x", label: "Return on Investment", sublabel: "Compared to Traditional Methods" },
              { metric: "200+", label: "New Customers Monthly", sublabel: "Per Brand Average" },
              { metric: "95%", label: "Cost Reduction", sublabel: "In Marketing Operations" },
            ].map((item, index) => (
              <MotionCard
                key={index}
                variants={item}
                className="bg-gray-800 border-gray-700 hover:bg-gray-700/50 transition-all duration-500 ease-out"
              >
                <CardContent className="p-8 text-center">
                  <p className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
                    {item.metric}
                  </p>
                  <p className="text-xl font-semibold text-gray-200 mb-2">{item.label}</p>
                  <p className="text-gray-400">{item.sublabel}</p>
                </CardContent>
              </MotionCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Crowncast Platform Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            The Crowncast Platform
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <MotionCard variants={item} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Brand Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2011.33.37%E2%80%AFAM-Eh0E7xvRTR36jBQNOnVGXiVZHOLnQQ.png"
                  alt="Brand Dashboard"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </CardContent>
            </MotionCard>
          </motion.div>
        </div>
      </section>

      {/* Everything You Need for ₹1,999/month Section */}
      <PlatformFeatures />

      {/* Crowncast Other Features Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Crowncast Other Features
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-12"
          >
            <MotionCard variants={item} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2011.33.56%E2%80%AFAM-SZKZt4j6xsS8OINklUqAz6Y87iPq1t.png"
                  alt="Analytics Dashboard"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </CardContent>
            </MotionCard>
            <MotionCard variants={item} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Creator Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2011.34.02%E2%80%AFAM-caHKb3X2aORaOegUf8N1RNVZgWCBH2.png"
                  alt="Creator Performance"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </CardContent>
            </MotionCard>
            <MotionCard variants={item} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Coupon Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2011.34.21%E2%80%AFAM-uSup2FPWxzt14qVr5CdLSmb01zKRio.png"
                  alt="Coupon Management"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </CardContent>
            </MotionCard>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Marketing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Join thousands of brands growing with Crowncast
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto animate-pulse"
              onClick={() => setShowPhoneNumber(!showPhoneNumber)}
            >
              {showPhoneNumber ? (
                <span className="flex items-center">
                  <Phone className="mr-2 h-6 w-6" />
                  9650790184
                </span>
              ) : (
                <>
                  Book a Call <ArrowRight className="ml-2 h-6 w-6" />
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


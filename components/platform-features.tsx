"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, TrendingUp, Users, DollarSign, BarChart4, Sparkles, CheckCircle, ArrowRight } from "lucide-react"

const MotionCard = motion(Card)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function PlatformFeatures() {
  const features = [
    {
      title: "Automated Campaigns",
      icon: Zap,
      benefits: ["Save 40+ hours per month", "Eliminate manual tracking", "Reduce human error"],
      implementation: [
        "AI-powered campaign creation",
        "Automated post scheduling",
        "Smart budget allocation",
        "Performance optimization",
      ],
    },
    {
      title: "Real-time Tracking",
      icon: TrendingUp,
      benefits: ["Live performance metrics", "Instant ROI calculation", "Real-time alerts"],
      implementation: [
        "Advanced analytics dashboard",
        "Custom report generation",
        "Multi-channel tracking",
        "Conversion attribution",
      ],
    },
    {
      title: "Verified Network",
      icon: Users,
      benefits: ["Pre-vetted creators", "Fraud prevention", "Quality assurance"],
      implementation: [
        "Identity verification",
        "Performance history check",
        "Engagement analysis",
        "Authenticity scoring",
      ],
    },
    {
      title: "Instant Payments",
      icon: DollarSign,
      benefits: ["Automated settlements", "Multiple payment options", "Zero delays"],
      implementation: [
        "Secure payment gateway",
        "Multi-currency support",
        "Automated reconciliation",
        "Smart contract integration",
      ],
    },
    {
      title: "Deep Analytics",
      icon: BarChart4,
      benefits: ["Custom insights", "Predictive analysis", "Competitor tracking"],
      implementation: [
        "Machine learning algorithms",
        "Data visualization",
        "Trend analysis",
        "Performance forecasting",
      ],
    },
    {
      title: "24/7 Support",
      icon: Sparkles,
      benefits: ["Instant response", "Expert guidance", "Priority resolution"],
      implementation: [
        "Dedicated support team",
        "Multi-channel assistance",
        "Knowledge base access",
        "Priority ticketing",
      ],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Everything You Need for ₹1,999/month
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A complete suite of tools to automate and scale your marketing efforts
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <MotionCard
              key={index}
              variants={item}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-2xl font-light text-gray-100">{feature.title}</h3>
                </div>

                <div className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Key Benefits</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">How We Do It</h4>
                    <ul className="space-y-2">
                      {feature.implementation.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-light">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


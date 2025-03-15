import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { SpeakerCard } from "../speaker-card";

export default function Speakers() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-sm font-medium tracking-wider uppercase text-blue-300 mb-4">
            Speakers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Learn from the Best
          </h2>
          <p className="text-gray-400 text-lg">
            Industry leaders, innovators, and visionaries sharing their insights
            and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SpeakerCard
            name="Alex Johnson"
            role="AI Research Lead, TechCorp"
            image="/placeholder.svg?height=400&width=400"
            topic="The Future of Generative AI"
          />
          <SpeakerCard
            name="Samantha Lee"
            role="CTO, FutureTech"
            image="/placeholder.svg?height=400&width=400"
            topic="Quantum Computing Applications"
          />
          <SpeakerCard
            name="Michael Chen"
            role="Founder, InnovateLabs"
            image="/placeholder.svg?height=400&width=400"
            topic="Building Tech Startups"
          />
          <SpeakerCard
            name="Priya Sharma"
            role="Robotics Engineer, RoboInc"
            image="/placeholder.svg?height=400&width=400"
            topic="Advances in Humanoid Robotics"
          />
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
          >
            View All Speakers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

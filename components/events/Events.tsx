import { ArrowRight } from "lucide-react";
import { EventCard } from "./event-card";
import { Button } from "../ui/button";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "BGMI Tournament",
      description:
        "Drop in, loot up, and fight for survival in this high-stakes BGMI tournament.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
      isExclusive: true,
    },
    {
      id: 2,
      title: "Striker Arena",
      description: "Showcase your skills and dominate the PES tournament.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
      isExclusive: true,
    },
    {
      id: 3,
      title: "Science Quiz",
      description:
        "A fun and challenging quiz to test young minds on science and innovation.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Only for School Students",
      isFeatured: true,
    },
    {
      id: 4,
      title: "Model Wars",
      description:
        "Showcase your innovative technical models and compete for the ultimate title.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 5,
      title: "Code Mania",
      description:
        "Test your coding skills against the best minds and solve challenging problems.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 6,
      title: "Quizzly Bears",
      description:
        "Battle it out in this ultimate tech trivia showdown and prove your knowledge.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 7,
      title: "Idea Spark",
      description:
        "Pitch your groundbreaking ideas and turn them into reality with expert feedback.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 8,
      title: "GrandMaster's Cup",
      description:
        "Outthink and outplay your opponents in this battle of strategy and skill.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 9,
      title: "Verbal Combat",
      description:
        "Engage in intense debates and make your arguments heard in a battle of words.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 10,
      title: "Pool Masters",
      description:
        "Line up your shots, strategize, and become the Pool Master of INGENIUM.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 11,
      title: "Beyond The Frames",
      description:
        "Capture stunning moments and showcase your photography skills to the world.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
    {
      id: 12,
      title: "Mysterious Hunt",
      description:
        "Solve riddles, uncover clues, and embark on a thrilling treasure hunt adventure.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8th & 9th April",
      category: "Competition",
    },
  ];

  return (
    <>
      <div className="flex justify-center mx-auto ">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-sm font-medium tracking-wider uppercase text-purple-300 mb-4">
              Featured Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Discover What&apos;s Happening
            </h2>
            <p className="text-gray-400 text-lg">
              From model wars to coding battles, tech quizzes to gaming
              showdowns,
            </p>
            <p className="text-gray-400 text-lg">
              <span className="text-white">INGENIUM</span> offers something for
              everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

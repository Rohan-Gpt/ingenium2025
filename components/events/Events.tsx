import { ArrowRight } from "lucide-react";
import { EventCard } from "./event-card";
import { Button } from "../ui/button";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "BGMI Warzone",
      description:
        "Drop in, loot up, and fight for survival in this high-stakes BGMI tournament.",
      image: "/bgmi.png",
      date: "8th & 9th April",
      category: "Competition",
      isExclusive: true,
      price: "₹250",
      link: "https://forms.gle/T5jVmbz85vkV4vsw6",
    },
    {
      id: 2,
      title: "Striker Arena",
      description: "Showcase your skills and dominate the PES tournament.",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹301",
      isExclusive: true,
      link: "https://forms.gle/6xMWit1RLFrCPszt8",
    },
    {
      id: 3,
      title: "Science Quiz",
      description:
        "A fun and challenging quiz to test young minds on science and innovation.",
      image: "/science-quiz.png?height=400&width=600&crop=faces&fit=crop",
      date: "8th & 9th April",
      category: "Only for School Students",
      price: "FREE",
      isFeatured: true,
      link: "https://forms.gle/k9pKrmf7Fcbf782m8",
    },
    {
      id: 4,
      title: "Model Wars",
      description:
        "Showcase your innovative technical models and compete for the ultimate title.",
      image: "/modelwars.png?height=400&width=600&crop=faces&fit=crop",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹100",
      rules: [
        "Participants may present a ppt on their own device if they feel the need for better explanation of the Technical Model.",
        "The team leader from each group will have to register with proper details and no entries will be allowed without registration. .",
        "Proper uniform and ID card is mandatory for all team members. ",
        "Judge’s Decision will be final decision.",
      ],
      link: "https://forms.gle/J8dpXQH8xEfGZMYq6",
    },
    {
      id: 5,
      title: "Code Mania",
      description:
        "Test your coding skills against the best minds and solve challenging problems.",
      image: "/codemania.png?height=400&width=600&crop=faces&fit=crop",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      link: "https://forms.gle/s9PoM7smQJ1e6HP4A",
    },
    {
      id: 6,
      title: "Quizly Bears",
      description:
        "Battle it out in this ultimate tech trivia showdown and prove your knowledge.",
      image: "/quizlybears.png?height=400&width=600&crop=faces&fit=crop",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      link: "https://forms.gle/k9pKrmf7Fcbf782m8",
    },
    {
      id: 7,
      title: "Potter Brains",
      description:
        "Pitch your groundbreaking ideas and turn them into reality with expert feedback.",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹100",
      rules: [
        "Participants have to make a poster or ppt based on their ideas.",

        "The INNOVATIVE IDEA has to be of science or technical domain.",
        "A ppt may be required for your poster if it needs further explanation according to the judges.",
        "Proper uniform and ID card is mandatory for all team members.",
        "Team leader have to register on behalf of the whole group. Registration will be done on both online and offline mode.",
        "Judge’s Decision will be final decision.",
      ],
      link: "https://forms.gle/e4HTc7dHR6Cc1M5y7",
    },
    {
      id: 8,
      title: "GrandMaster's Cup",
      description:
        "Outthink and outplay your opponents in this battle of strategy and skill.",
      image: "/GrandMasters-cup.png?height=400&width=600&gravity=top",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      link: "https://forms.gle/Sf2bW1kqqJ4cR9Ne7",
    },
    {
      id: 9,
      title: "Verbal Combat",
      description:
        "Engage in intense debates and make your arguments heard in a battle of words.",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹100",
      link: "https://forms.gle/yvcaQ3tiXqW8EcxJ8",
    },
    {
      id: 10,
      title: "Pool Masters",
      description:
        "Line up your shots, strategize, and become the Pool Master of INGENIUM.",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      link: "https://forms.gle/CUL7EpdSYa66jhwh7",
    },
    {
      id: 11,
      title: "Beyond The Frames",
      description:
        "Capture stunning moments and showcase your photography skills to the world.",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      rules: [
        "No team participation. Students must register individually.",
        "Photographs that have been digitally altered beyond standard optimization (removal of dust, cropping, reasonable adjustments to exposure, colour and contrast, etc.) will be disqualified.",
        "The photograph must be original and no watermark of any kind should be on the photograph.",
        "There is no restriction on the device used.",
        "No vulgarity, community issues, political issues, religious issues will be entertained and would lead to direct disqualification.",
        "Judge’s Decision will be final decision.",
      ],
      link: "https://forms.gle/htxS1VU69h1x39JR8",
    },
    {
      id: 12,
      title: "Mysterious Hunt",
      description:
        "Solve riddles, uncover clues, and embark on a thrilling treasure hunt adventure.",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹200",
      link: "https://forms.gle/ufAxYt9CWpHidLwt9",
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
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full py-4 text-lg"
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

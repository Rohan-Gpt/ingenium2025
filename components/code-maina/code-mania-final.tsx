import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Calendar,
  Clock,
  Users,
  Code,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function CodeManiaFinal() {
  return (
    <section className="flex flex-col justify-center mx-auto w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="container px-4 md:px-6 flex flex-col justify-center mx-auto ">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="px-3 py-1 text-sm font-medium bg-yellow-500 text-black">
            FINAL ROUND
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            CODE MANIA
            <span className="text-yellow-500"> CHAMPIONSHIP</span>
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl">
            The ultimate test of coding skills, problem-solving, and algorithmic
            thinking
          </p>
        </div>

        <Card className="bg-zinc-800 border-zinc-700 text-white mb-12">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">Event Details</CardTitle>
            <CardDescription className="text-zinc-400">
              Mark your calendar for the final showdown
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-zinc-900/50">
              <Calendar className="h-8 w-8 text-yellow-500" />
              <h3 className="font-medium">Date</h3>
              <p className="text-zinc-400">April 8, 2025</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-zinc-900/50">
              <Clock className="h-8 w-8 text-yellow-500" />
              <h3 className="font-medium">Time</h3>
              <p className="text-zinc-400">2:30 PM - 4:00 PM IST</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-zinc-900/50">
              <Code className="h-8 w-8 text-yellow-500" />
              <h3 className="font-medium">Platform</h3>
              <p className="text-zinc-400">HackerRank</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-zinc-900/50">
              <Users className="h-8 w-8 text-yellow-500" />
              <h3 className="font-medium">Participants</h3>
              <p className="text-zinc-400">Top 20 Qualifiers</p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="format" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
            <TabsTrigger value="format">Competition Format</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
          </TabsList>
          <TabsContent
            value="format"
            className="p-6 bg-zinc-800 rounded-b-lg mt-2 space-y-4"
          >
            <h3 className="text-xl font-bold">Competition Format</h3>
            <ul className="space-y-2 list-disc pl-5 text-zinc-300">
              <li>4-hour coding challenge on HackerRank platform</li>
              <li>5 algorithmic problems of increasing difficulty</li>
              <li>
                Problems will test data structures, algorithms, and optimization
              </li>
              <li>Supported languages: Python, Java, C++, JavaScript</li>
              <li>Real-time leaderboard updates during the competition</li>
            </ul>
          </TabsContent>
          <TabsContent
            value="rules"
            className="p-6 bg-zinc-800 rounded-b-lg mt-2 space-y-4"
          >
            <h3 className="text-xl font-bold">Competition Rules</h3>
            <ul className="space-y-2 list-disc pl-5 text-zinc-300">
              <li>Participants must solve problems independently</li>
              <li>Internet access is restricted to documentation only</li>
              <li>Solutions are evaluated on correctness and efficiency</li>
              <li>Plagiarism will result in immediate disqualification</li>
              <li>HackerRank's automated proctoring system will be enabled</li>
            </ul>
          </TabsContent>
          <TabsContent
            value="prizes"
            className="p-6 bg-zinc-800 rounded-b-lg mt-2 space-y-4"
          ></TabsContent>
        </Tabs>

        <div className="bg-zinc-800 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">How to Participate</h3>
          <ol className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="flex items-center justify-center rounded-full bg-yellow-500 text-black w-6 h-6 text-sm font-bold mr-3 mt-0.5">
                1
              </span>
              <div>
                <p className="font-medium">Log in to your HackerRank account</p>
                <p className="text-zinc-400 text-sm">
                  Use the same account you used during the qualification rounds
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center rounded-full bg-yellow-500 text-black w-6 h-6 text-sm font-bold mr-3 mt-0.5">
                2
              </span>
              <div>
                <p className="font-medium">
                  Navigate to the CODE MANIA Championship contest
                </p>
                <p className="text-zinc-400 text-sm">
                  A direct link will be emailed to all finalists 24 hours before
                  the event
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center rounded-full bg-yellow-500 text-black w-6 h-6 text-sm font-bold mr-3 mt-0.5">
                3
              </span>
              <div>
                <p className="font-medium">
                  Join the contest 15 minutes before start time
                </p>
                <p className="text-zinc-400 text-sm">
                  This allows time to review rules and test your environment
                </p>
              </div>
            </li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit HackerRank
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
            >
              Preparation Resources
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Prove Your Skills?
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
            The CODE MANIA Championship is where legends are made. Are you ready
            to join the ranks of coding excellence?
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3 text-lg font-medium text-black shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Prepare for the Finals
          </Link>
        </div>
      </div>
    </section>
  );
}

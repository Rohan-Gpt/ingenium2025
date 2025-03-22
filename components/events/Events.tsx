import { EventCard } from "./event-card";

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
      objectPosition: "center",
    },
    {
      id: 2,
      title: "Striker Arena",
      description: "Showcase your skills and dominate the PES tournament.",
      image: "/striker-arena.png",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹80",
      isExclusive: true,
      link: "https://forms.gle/6xMWit1RLFrCPszt8",
      rules: [
        "MATCH TIME: GROUP STAGE 6 MINS (NO ET + PK); KNOCKOUT STAGE - 8 MINS (ET + PK ON); FINAL - 10 MINS (ET+PK ON) ",
        "TOURNAMENT TYPE: 1v1",
        "ALL CARDS ARE ALLOWED.",
        "DURING MATCH IF ANYONE USES FOUL LANGUAGES THE INDIVIDUAL WILL BE SHOWN YELLOW CARD. 2 YELLOW CARD MEANS RED CARD WHICH WILL RESULT IN SUSPENSION FOR 1 MATCH.",
        "EXTERNAL ACCESSORIES LIKE JOYSTICK OR TRIGGER ARE NOT ALLOWED. ",
        "IF ANYONE FACES LAG ISSUES OR NETWORK ISSUES DURING THE MATCH AND GETS DISCONNECTED THEN A REMATCH WITH REMAINING TIME WOULD BE ARRANGED KEEPING THE PREVIOUS SCORE IN RECORD. ",
        "THE REGISTRATION FEE IS NON-REFUNDABLE. ",
        "NO ONLINE PARTICIPATION IS ALLOWED. THIS IS A LAN TOURNAMENT. ",
        "IPADS OR ANY SORT OF TABLETS ARE ALLOWED. ",
        "ALL TEAMS AND PARTICIPANTS MUST ARRIVE AT TIME. IF ANY TEAM WILL NOT REPORT AT REPORTING TIME/MATCH TIME THEN OPPONENT TEAM WILL GET A WALKOVER. ",
        "TOTAL NUMBER OF MATCHES IN A KNOCKOUT ROUND: SINGLE LEG",
        "NUMBER OF SUB INTERVALS: 3",
        "NUMBER OF SUBS: 6",
        "CONDITION (HOME & AWAY): RANDOM",
        "INJURIES: ON ",
        "DECISION OF EVENT HEADS WILL BE FINAL DECISION",
      ],
      objectPosition: "bottom",
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
      link: "https://forms.gle/UJqdRVbb5rqpZ7y8A",
      rules: [
        "Participation is strictly individual; Team participation is not allowed.",
        "Topics: Physics, Chemistry, Biology, Earth Science, Space, and Inventions.",
        "Rounds: General Science, Visual, Rapid Fire (will be told before the event by the official)",
        "Questions: MCQs, True/False, Fill in the blanks, and Image based.",
        "Fair Play: No external help, gadgets, or discussions during the quiz.",
      ],
      objectPosition: "centre",
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
        "For each group there should be a maximum of 4 participants and minimum of 1 participant",
        "Participants may present a ppt on their own device if they feel the need for better explanation of the Technical Model.",
        "The team leader from each group will have to register with proper details and no entries will be allowed without registration. .",
        "Proper uniform and ID card is mandatory for all team members. ",
        "Judge’s Decision will be final decision.",
      ],
      link: "https://forms.gle/J8dpXQH8xEfGZMYq6",
      objectPosition: "center",
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
      rules: [
        "The coding competition will consist of two rounds: coding MCQ round and DSA round",
        "Participants must compete individually",
        "All participants must join the designated platform(platform not disclosed) on time.",
        "Any form of cheating or plagiarism will lead to immediate disqualification.",
        "Programming Languages: all Programming languages are allowed.",
        " In case of a tie, participants with the lesser execution time in the DSA Coding Round will rank higher.",
        "The decision of the judging panel will be final and binding.",
      ],
      link: "https://forms.gle/s9PoM7smQJ1e6HP4A",
      objectPosition: "center",
    },
    {
      id: 6,
      title: "Quizly Bears",
      description:
        "Battle it out in this ultimate tech trivia showdown and prove your knowledge.",
      image:
        "/quizlybears.png?height=400&width=600&crop=faces&fit=crop&gravity=top",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      rules: [
        "Participation is strictly individual; Team participation is not allowed.",
        "The quiz will be conducted offline. Questions will be displayed on the screen or asked by the event coordinators.",
        "There will be two rounds, both conducted in pen-and-paper mode.",
        "The First Round will be open to all the registered participants.",
        "The Second Round will be conducted for the top 10 participants from the first round.",
        "All questions will be multiple-choice (MCQ).",
        "Participants should focus on: Science, Technology, Pop Culture & Weird Physics,Internet Memes & Digital Trends",
        "Use of mobile phones, smartwatches, or any electronic devices during the quiz is strictly prohibited.",
        "Any form of cheating or misconduct will lead to immediate disqualification",
        " In case of a tie in the final round, a rapid-fire tiebreaker will be conducted.",
      ],
      link: "https://forms.gle/k9pKrmf7Fcbf782m8",
      objectPosition: "center",
    },
    {
      id: 7,
      title: "Idea Spark",
      description:
        "Pitch your groundbreaking ideas and turn them into reality with expert feedback.",
      image: "/ideaspark.png",
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
      objectPosition: "bottom",
    },
    {
      id: 8,
      title: "GrandMaster's Cup",
      description:
        "Outthink and outplay your opponents in this battle of strategy and skill.",
      image: "/GrandMasters-cup.png",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      rules: [
        " The tournament will follow standard FIDE chess rules.",
        "The tournament will be conducted in a knockout format.",
        " The first illegal move results in a warning. A second illegal move leads to a forfeit.",
        "If a player touches a piece, they must move it if a legal move is possible.",
        "Players are responsible for recognizing check/checkmate; no verbal announcements are required.",
        "No Mutual agreement between players(Either win or lose)",
        "The decision of the event coordinators will be final.",
      ],
      link: "https://forms.gle/Sf2bW1kqqJ4cR9Ne7",
      objectPosition: "top",
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
      objectPosition: "bottom",
    },
    {
      id: 10,
      title: "Pool Masters",
      description:
        "Line up your shots, strategize, and become the Pool Master of INGENIUM.",
      image: "/pool-masters.png?height=400&width=600&crop=faces&fit=crop",
      date: "8th & 9th April",
      category: "Competition",
      price: "₹50",
      link: "https://forms.gle/CUL7EpdSYa66jhwh7",
      rules: [
        "Participation is strictly individual; Team participation is not allowed.",
        "The event will be conducted as a knockout tournament.",
        " Any attempt to manipulate the process or cheating will result in immediate disqualification.",
        "Organisers reserve the right to make necessary adjustments in real time to ensure the event runs smoothly.",
        "The decision of the event coordinators will be final.",
      ],
      objectPosition: "center",
    },
    {
      id: 11,
      title: "Beyond The Frames",
      description:
        "Capture stunning moments and showcase your photography skills to the world.",
      image: "/beyond-the-frames.png?height=400&width=600&crop=faces&fit=crop",
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
      objectPosition: "center",
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
      rules: [
        "Each team should consist maximum of 4.",
        " There are three rounds in the Adventurous Challenge.Each round provides mysterious clues that guide you to the destination.",
        " Teams must overcome exhilarating games and solve hints to advance to the next game location during this challenge.",
        "Teams have a total of 15 minutes,with 5 minutes of allocated to each round.Teams are free to manage their time during the rounds,but the full game must be finished in the alloted amount of time.",
        "The use of mobile phones,smart watches and any other electronic communication devices is strictly forbidden.",
        "Any attempt to cheat will lead to immediate disqualification.",
        "Winning depends on finishing the game within the set timeframe.",
        "The overall winner will be determined by the quickest time.",
      ],
      objectPosition: "bottom",
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
        </div>
      </div>
    </>
  );
}

import type { Slang } from '@/lib/types';

// Helper to create slugs
const createSlug = (term: string) => term.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

const slangsData: Omit<Slang, 'id' | 'slug'>[] = [
  {
    term: "Japa",
    meaning: "To flee, escape, or emigrate, usually from Nigeria in search of better opportunities.",
    example: "My guy don japa go Canada last month.",
    tags: ["emigration", "travel"]
  },
  {
    term: "Sapa",
    meaning: "A state of extreme brokenness or poverty.",
    example: "Sapa hold me this month, I no get shishi.",
    tags: ["poverty", "money"]
  },
  {
    term: "Wahala",
    meaning: "Trouble, problem, or stress.",
    example: "No go find wahala for where you no know.",
    tags: ["trouble", "problem"]
  },
  {
    term: "Gbe body e",
    meaning: "A phrase encouraging someone to get up and dance or be lively.",
    example: "When the beat drop, you gats gbe body e!",
    tags: ["dance", "encouragement"]
  },
  {
    term: "E Choke",
    meaning: "An expression of being overwhelmed, surprised, or impressed by something. It can be both positive or negative.",
    example: "The party was so lit, e choke!",
    tags: ["surprise", "slang"]
  },
  {
    term: "Shege",
    meaning: "A Hausa word often used to express seeing or experiencing something terrible or suffering.",
    example: "Omo, I see shege for this exam.",
    tags: ["suffering", "hausa"]
  },
  {
    term: "Oshey",
    meaning: "A term used to praise or hail someone, similar to 'well done' or 'thank you'.",
    example: "Oshey! You too sabi this work.",
    tags: ["praise", "yoruba"]
  },
  {
    term: "Maga",
    meaning: "A person who is easily fooled or scammed; a sucker.",
    example: "That guy think say he fit play me, he no know say I no be him maga.",
    tags: ["scam", "fool"]
  },
  {
    term: "Agbero",
    meaning: "Street tout, usually collects illegal levies.",
    example: "Agbero stop the bus for road money.",
    tags: ["street", "tout"]
  },
  {
    term: "Aje",
    meaning: "Lucky person / wealthy person.",
    example: "That guy be aje, money dey follow am.",
    tags: ["wealth", "luck"]
  },
  {
    term: "Ashawo",
    meaning: "Prostitute.",
    example: "Dem say the babe be ashawo, I no sure.",
    tags: ["prostitution"]
  },
  {
    term: "Baba",
    meaning: "Respectful term for an older man / expert.",
    example: "Baba know this work well.",
    tags: ["respect", "elder"]
  },
  {
    term: "Backyard",
    meaning: "Poor or undeveloped area.",
    example: "He grow for backyard before he make am.",
    tags: ["poverty", "area"]
  },
  {
    term: "Baller",
    meaning: "Rich person.",
    example: "Since he hammer, he don turn baller.",
    tags: ["wealth", "rich"]
  },
  {
    term: "Cashout",
    meaning: "To make money suddenly.",
    example: "The boy cashout from crypto.",
    tags: ["money", "crypto"]
  },
  {
    term: "Chop",
    meaning: "Eat or collect money.",
    example: "I never chop today.",
    tags: ["eat", "money"]
  },
  {
    term: "Cruise",
    meaning: "Joke / fun / unserious behavior.",
    example: "Relax, na cruise I dey cruise.",
    tags: ["fun", "joke"]
  },
  {
    term: "Dey",
    meaning: "To be / to stay.",
    example: "I dey house.",
    tags: ["verb"]
  },
  {
    term: "Dey play",
    meaning: "Acting unserious.",
    example: "If you dey play, life go show you shege.",
    tags: ["unserious", "play"]
  },
  {
    term: "Doro",
    meaning: "Hard / strong.",
    example: "The exam too doro.",
    tags: ["hard", "strong"]
  },
  {
    term: "E no pure",
    meaning: "Something is suspicious.",
    example: "This deal no pure.",
    tags: ["suspicious", "doubt"]
  },
  {
    term: "Fade",
    meaning: "Leave quietly.",
    example: "Make we fade before wahala start.",
    tags: ["leave", "exit"]
  },
  {
    term: "Flex",
    meaning: "Enjoy / spend money.",
    example: "We dey flex for weekend.",
    tags: ["enjoyment", "money"]
  },
  {
    term: "Form",
    meaning: "Pretend.",
    example: "No form big boy.",
    tags: ["pretend"]
  },
  {
    term: "Gbege",
    meaning: "Trouble.",
    example: "If police come now, gbege go burst.",
    tags: ["trouble", "problem"]
  },
  {
    term: "Ginger",
    meaning: "Motivate.",
    example: "That music ginger me.",
    tags: ["motivation", "energy"]
  },
  {
    term: "Grace",
    meaning: "Luck / favor.",
    example: "Na grace dey make am win.",
    tags: ["luck", "favor"]
  },
  {
    term: "Hammer",
    meaning: "Make money / succeed.",
    example: "Everybody dey pray to hammer.",
    tags: ["success", "money"]
  },
  {
    term: "High",
    meaning: "Drunk or drugged.",
    example: "The guy high die.",
    tags: ["drunk", "intoxicated"]
  },
  {
    term: "I hail",
    meaning: "I respect / I greet.",
    example: "I hail your hustle.",
    tags: ["respect", "greeting"]
  },
  {
    term: "I sharp",
    meaning: "I understand.",
    example: "No worry, I sharp.",
    tags: ["understanding"]
  },
  {
    term: "Jagaban",
    meaning: "Big man / political boss.",
    example: "That man be jagaban for the area.",
    tags: ["politics", "respect"]
  },
  {
    term: "Kolo",
    meaning: "Mad / crazy.",
    example: "This guy don kolo.",
    tags: ["crazy", "mad"]
  },
  {
    term: "Kpatakpata",
    meaning: "Completely.",
    example: "Rain soak me kpatakpata.",
    tags: ["completely"]
  },
  {
    term: "Las Las",
    meaning: "At the end of the day.",
    example: "Las las, everybody go chop.",
    tags: ["finally", "eventually"]
  },
  {
    term: "Level",
    meaning: "Status / standard.",
    example: "Your level don change.",
    tags: ["status", "lifestyle"]
  },
  {
    term: "Make am",
    meaning: "Succeed.",
    example: "He struggle before he make am.",
    tags: ["success", "achieve"]
  },
  {
    term: "Money miss road",
    meaning: "Money wasted.",
    example: "That bet na money miss road.",
    tags: ["money", "waste"]
  },
  {
    term: "Na wa",
    meaning: "Expression of surprise.",
    example: "Na wa for this country.",
    tags: ["surprise", "shock"]
  },
  {
    term: "No wahala",
    meaning: "No problem.",
    example: "No wahala, I go come.",
    tags: ["agreement", "ok"]
  },
  {
    term: "Odogwu",
    meaning: "Big man / boss.",
    example: "Odogwu don arrive.",
    tags: ["respect", "boss"]
  },
  {
    term: "Omo",
    meaning: "Expression of shock.",
    example: "Omo! This thing serious.",
    tags: ["shock", "exclamation"]
  },
  {
    term: "Para",
    meaning: "Angry.",
    example: "The man para well well.",
    tags: ["angry", "annoyed"]
  },
  {
    term: "Pepper dem",
    meaning: "Show off success.",
    example: "He buy car just to pepper dem.",
    tags: ["show-off", "success"]
  },
  {
    term: "Quick one",
    meaning: "Something fast.",
    example: "Make we do quick one.",
    tags: ["fast", "quick"]
  },
  {
    term: "Run am",
    meaning: "Do it / start.",
    example: "DJ, run am!",
    tags: ["action", "start"]
  },
  {
    term: "Runs",
    meaning: "Hustle / illegal deals.",
    example: "She dey do runs.",
    tags: ["hustle", "illegal"]
  },
  {
    term: "Sharp sharp",
    meaning: "Quickly.",
    example: "Come sharp sharp.",
    tags: ["fast", "quickly"]
  },
  {
    term: "Talk true",
    meaning: "Be honest.",
    example: "Talk true, you like am?",
    tags: ["honesty", "truth"]
  },
  {
    term: "Tear eye",
    meaning: "Suffer.",
    example: "I don tear eye for this Lagos.",
    tags: ["suffering", "hardship"]
  },
  {
    term: "Una",
    meaning: "You people.",
    example: "Una ready?",
    tags: ["pronoun", "group"]
  },
  {
    term: "Vibes",
    meaning: "Enjoyment / mood.",
    example: "The party get vibes.",
    tags: ["enjoyment", "mood"]
  },
  {
    term: "Who dash monkey banana",
    meaning: "Surprise gift.",
    example: "Who dash monkey banana? You buy car!",
    tags: ["surprise", "gift"]
  },
  {
    term: "Yahoo",
    meaning: "Internet scam.",
    example: "Police arrest yahoo boys.",
    tags: ["scam", "internet"]
  }
];

export const slangs: Slang[] = slangsData.map((slang, index) => ({
  ...slang,
  id: index + 1,
  slug: createSlug(slang.term)
}));

export function getSlangs(): Slang[] {
  return slangs;
}

export function getSlangBySlug(slug: string): Slang | undefined {
  return slangs.find(s => s.slug === slug);
}

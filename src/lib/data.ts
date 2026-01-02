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

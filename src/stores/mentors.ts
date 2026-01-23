import { defineStore } from 'pinia'

export type MentorItem = {
  id: number
  name: string
  role: string
  tasks: number
  rating: string
  reviews: number
  image: string
  bio: string
  isFollowed: boolean
  location: string
  website: string
}

const mockMentors: MentorItem[] = [
  {
    id: 101,
    name: 'Jessica Jane',
    role: 'Web Developer',
    bio: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web Technologies.",
    tasks: 40,
    rating: '4,9',
    reviews: 750,
    isFollowed: false,
    image: 'https://i.pravatar.cc/100?img=1',
    website: '[URL]',
    location: 'Cambridge, MA',
  },
  {
    id: 102,
    name: 'Alex Stanton',
    role: 'UI / UX Designer',
    bio: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI / UX Design.",
    tasks: 60,
    rating: '4,1',
    reviews: 970,
    isFollowed: true,
    image: 'https://i.pravatar.cc/100?img=2',
    website: '[URL]',
    location: 'Oxford, UK',
  },
  {
    id: 103,
    name: 'Marcus Lee',
    role: 'Data Scientist',
    bio: 'Experienced professional specializing in machine learning models and big data analysis.',
    tasks: 120,
    rating: '4',
    reviews: 1500,
    isFollowed: true,
    image: 'https://i.pravatar.cc/100?img=3',
    website: '[URL]',
    location: 'Seattle, WA',
  },
  {
    id: 104,
    name: 'Sarah Chen',
    role: 'Mobile App Developer',
    bio: 'Focused on building high-performance native and cross-platform mobile applications using Flutter and Swift.',
    tasks: 85,
    rating: '5',
    reviews: 1120,
    isFollowed: false,
    image: 'https://i.pravatar.cc/100?img=4',
    website: '[URL]',
    location: 'Tokyo, Japan',
  },
  {
    id: 105,
    name: 'Robert Davies',
    role: 'DevOps Engineer',
    bio: 'Expertise in cloud infrastructure (AWS/Azure) and CI/CD pipelines for scalable deployments.',
    tasks: 35,
    rating: '4,1',
    reviews: 650,
    isFollowed: true,
    image: 'https://i.pravatar.cc/100?img=5',
    website: '[URL]',
    location: 'London, UK',
  },
  {
    id: 106,
    name: 'Emily Watson',
    role: 'Product Manager',
    bio: 'Driving product strategy from conception to launch, focusing on user experience and market fit.',
    tasks: 95,
    rating: '4,9',
    reviews: 1300,
    isFollowed: true,
    image: 'https://i.pravatar.cc/100?img=6',
    website: '[URL]',
    location: 'New York, NY',
  },
  {
    id: 107,
    name: 'Daniel Kim',
    role: 'Cybersecurity Expert',
    bio: 'Penetration tester and ethical hacker, securing web applications and corporate networks.',
    tasks: 25,
    rating: '4,4',
    reviews: 510,
    isFollowed: false,
    image: 'https://i.pravatar.cc/100?img=7',
    website: '[URL]',
    location: 'Seoul, S. Korea',
  },
  {
    id: 108,
    name: 'Olivia Rodriguez',
    role: 'Technical Writer',
    bio: 'Creating clear and concise documentation, user guides, and API references for software products.',
    tasks: 70,
    rating: '4,5',
    reviews: 890,
    isFollowed: false,
    image: 'https://i.pravatar.cc/100?img=8',
    website: '[URL]',
    location: 'Madrid, Spain',
  },
  {
    id: 109,
    name: 'Noah Miller',
    role: 'Backend Developer',
    bio: 'Specializing in scalable microservices using Go and Java, with strong database optimization skills.',
    tasks: 150,
    rating: '2,9',
    reviews: 1750,
    isFollowed: true,
    image: 'https://i.pravatar.cc/100?img=9',
    website: '[URL]',
    location: 'Berlin, Germany',
  },
  {
    id: 110,
    name: 'Chloe Dupont',
    role: 'Motion Graphic Artist',
    bio: 'Creating compelling visual stories and animations for marketing and application interfaces.',
    tasks: 55,
    rating: '4,1',
    reviews: 720,
    isFollowed: false,
    image: 'https://i.pravatar.cc/100?img=10',
    website: '[URL]',
    location: 'Paris, France',
  },
  {
    id: 111,
    name: 'Ben Carter',
    role: 'AI Researcher',
    bio: 'Focusing on natural language processing and developing conversational AI systems. Ph.D. from MIT.',
    tasks: 42,
    rating: '3,9',
    reviews: 999,
    isFollowed: true,
    image: 'https://i.pravatar.cc/100?img=11',
    website: '[URL]',
    location: 'Boston, MA',
  },
  {
    id: 112,
    name: 'Fatima Hussain',
    role: 'QA Engineer',
    bio: 'Ensuring software quality through automated testing and performance analysis. Experienced with Selenium and Cypress.',
    tasks: 78,
    rating: '4,5',
    reviews: 600,
    isFollowed: false,
    image: 'https://i.pravatar.cc/100?img=12',
    website: '[URL]',
    location: 'Dubai, UAE',
  },
]

export const useMentorsStore = defineStore('mentors', {
  state: () => ({
    mentors: [...mockMentors],
  }),
  actions: {
    toggleFollow(mentorId: number) {
      const mentor = this.mentors.find((item) => item.id === mentorId)
      if (mentor) {
        mentor.isFollowed = !mentor.isFollowed
      }
    },
  },
})

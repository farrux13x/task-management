import { defineStore } from 'pinia'

export type TaskItem = {
  id: number
  title: string
  category: string
  description: string
  duration: string
  progress: number
  status: string
  image: string
}

const mockTasks: TaskItem[] = [
  {
    id: 1,
    title: "Creating Awesome Mobile Apps",
    category: "UI UX Design",
    description: "Follow the video tutorial above. Understand how to use each tool in the Figma application.",
    duration: "1 Hour",
    progress: 90,
    status: "Active",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Intro to Vue 3 Composition API",
    category: "Frontend Development",
    description: "Learn how to use setup(), ref(), and reactive() to manage state.",
    duration: "2 Hours",
    progress: 30,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Advanced Python for Data Science",
    category: "Data Analysis",
    description: "Master NumPy, Pandas, and Matplotlib for data manipulation and visualization.",
    duration: "4 Hours",
    progress: 75,
    status: "Active",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "NodeJS Backend Development",
    category: "Backend Development",
    description: "Build a RESTful API using Express and connect it to a MongoDB database.",
    duration: "3 Hours",
    progress: 10,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Fundamentals of Cloud Computing",
    category: "DevOps",
    description: "Explore the basics of AWS and deploy your first serverless application.",
    duration: "2.5 Hours",
    progress: 100,
    status: "Completed",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "React Native for Cross-Platform Apps",
    category: "Mobile Development",
    description: "Develop a single codebase for both iOS and Android applications.",
    duration: "5 Hours",
    progress: 50,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Mastering CSS Grid and Flexbox",
    category: "Frontend Development",
    description: "Create complex and responsive layouts with modern CSS techniques.",
    duration: "1.5 Hours",
    progress: 85,
    status: "Active",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Ethical Hacking: Web Penetration Testing",
    category: "Cybersecurity",
    description: "Learn to identify and exploit common web vulnerabilities like XSS and SQL Injection.",
    duration: "6 Hours",
    progress: 20,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Introduction to Game Design with Unity",
    category: "Game Development",
    description: "Understand the core principles of game design and build a simple 2D game.",
    duration: "3.5 Hours",
    progress: 45,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Figma Prototyping and Handoff",
    category: "UI UX Design",
    description: "Turn static designs into interactive prototypes and prepare assets for developers.",
    duration: "1 Hour",
    progress: 60,
    status: "Active",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "SQL Deep Dive: Joins and Subqueries",
    category: "Database Management",
    description: "Practice complex queries to extract meaningful data from relational databases.",
    duration: "2 Hours",
    progress: 15,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Machine Learning with Scikit-learn",
    category: "Data Analysis",
    description: "Implement various ML algorithms like classification and regression.",
    duration: "4.5 Hours",
    progress: 95,
    status: "Active",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"
  }
]

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [...mockTasks],
  }),
})

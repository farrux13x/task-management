export function useOverviewPage() {
  const monthlyMentors = [
    {
      name: 'Curious George',
      role: 'UI UX Design',
      tasks: 40,
      rating: '4,7',
      reviews: 750,
      image: 'https://i.pravatar.cc/100?img=52',
      isFollowed: false,
    },
    {
      name: 'Abraham Lincoln',
      role: '3D Design',
      tasks: 32,
      rating: '4,9',
      reviews: 510,
      image: 'https://i.pravatar.cc/100?img=58',
      isFollowed: true,
    },
  ]

  return {
    monthlyMentors,
  }
}

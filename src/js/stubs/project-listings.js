import { AuthenticatedUser } from './authenticated-user-stub'

const specs = ['electrician', 'CPA', 'general contractor', 'construction']
const descriptions = [
  'description 1',
  'description 2',
  'description 3',
  'description 4'
]
const statuses = ['open', 'completed', 'cancelled']

const listing = () => ({
  specialization: specs[Math.floor(Math.random() * specs.length)],
  startDate: new Date(),
  endDate: new Date(),
  price: Math.random() * Math.floor(Math.random() * 5),
  description: descriptions[Math.floor(Math.random() * descriptions.length)],
  issuer: AuthenticatedUser,
  status: statuses[Math.floor(Math.random() * statuses.length)]
})

export const ProjectListings = [listing(), listing(), listing(), listing()]

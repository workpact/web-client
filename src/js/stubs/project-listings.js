import { AuthenticatedUser } from './authenticated-user-stub'

const specs = ['electrician', 'plumber', 'general', 'mechanic', 'carpenter']
const descriptions = [
  'description 1',
  'description 2',
  'description 3',
  'description 4'
]
const statuses = ['open', 'completed', 'cancelled']

const listing = () => {
  const startDate = new Date()
  const endDate = new Date()
  startDate.setDate(Math.floor(Math.random() * 30))
  endDate.setDate(startDate.getDate() + Math.random() * 12)

  return {
    specialization: specs[Math.floor(Math.random() * specs.length)],
    startDate,
    endDate,
    price: Math.random() * Math.floor(Math.random() * 5),
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    issuer: AuthenticatedUser,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }
}

export const ProjectListings = [listing(), listing(), listing(), listing()]

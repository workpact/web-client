import PropTypes from 'prop-types'

export const UserType = {
  account: PropTypes.shape(AccountType).isRequired,
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.shape(ProfileType)
}

export const AccountType = {
  id: PropTypes.string.isRequired,
  ethBalance: PropTypes.string.isRequired
}

export const ProfileType = {
  averageRating: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ),
  status: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  completedContracts: PropTypes.arrayOf(PropTypes.string),
  contestedContracts: PropTypes.arrayOf(PropTypes.string),
  tips: PropTypes.arrayOf(PropTypes.shape(TipType))
}

export const TipType = {
  amount: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}

export const ListingType = {
  specialization: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  issuer: PropTypes.shape(UserType).isRequired,
  status: PropTypes.string.isRequired
}

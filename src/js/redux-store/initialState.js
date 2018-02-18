const initialState = {
  alerts: [],
  forms: {},
  modal: {
    modalContents: null,
    modalTriggerId: ''
  },
  presentation: {
    freezeContent: false,
    width: null,
    height: null
  },
  user: {
    id: '',
    loaded: false,
    notifications: [],
    username: '',
    walletAddress: ''
  },
  listings: []
}

export default initialState

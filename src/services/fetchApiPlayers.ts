import axios from 'axios'

const ApiUrl = process.env.REACT_APP_API_URL ?? ''
const ApiKey = process.env.REACT_APP_API_KEY ?? ''

const messageError = (error: any) => ({
  message: 'Error fetching players',
  error,
  data: null,
})

export const fetchApiPlayers = async (page: number | string = 1): Promise<any> => {
  try {
    const { data } = await axios.get(`${ApiUrl}/players?page=${page}`)
    return data
  } catch (error) {
    return messageError(error)
  }
}

export const fetchApiPlayer = async (id: number | string): Promise<any> => {
  try {
    const response = await axios.get(`${ApiUrl}/players/${id}`)
    return response
  } catch (error) {
    return messageError(error)
  }
}

export const fetchApiTeam = async (name: string, page: number | string = 1) => {
  try {
    const { data } = await axios.post(
      `${ApiUrl}/team`,
      { name, page },
      {
        headers: {
          Authorization: ApiKey,
        },
      }
    )
    return data
  } catch (error) {
    return messageError(error)
  }
}

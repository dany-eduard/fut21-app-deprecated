import PlayerCard from 'components/PlayerCards'
import { Box } from '@mui/system'
import { Button, LinearProgress } from '@mui/material'
import { fetchApiPlayers } from 'services/fetchApiPlayers'
import { useEffect, useState } from 'react'

const Jugadores = () => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [players, setPlayers] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const { data } = await fetchApiPlayers(page)
      setPlayers((p: any) => [...p, ...data])
      setLoading(false)
    })()
  }, [page])

  return (
    <>
      <PlayerCard list={players} />
      {loading && (
        <Box marginBottom={3} marginTop={3}>
          <LinearProgress />
        </Box>
      )}
      <Box display="flex" marginTop={2} alignItems="center" justifyContent="center">
        <Button
          disabled={loading}
          onClick={() => setPage(page + 1)}
          size="small"
          fullWidth
          sx={{ boxShadow: 5, height: 70, backgroundColor: '#c8e4fb' }}
        >
          Mostrar más
        </Button>
      </Box>
    </>
  )
}

export default Jugadores

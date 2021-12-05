import PlayerCard from 'components/PlayerCards'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { fetchApiPlayers } from 'services/fetchApiPlayers'
import { useEffect, useState } from 'react'

const Jugadores = () => {
  const [page, setPage] = useState(1)
  const [players, setPlayers] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      const { data } = await fetchApiPlayers(page)
      setPlayers((p: any) => [...p, ...data])
    })()
  }, [page])

  return (
    <>
      <PlayerCard list={players} />
      <Box
        display="flex"
        width="100%"
        height={70}
        marginTop={2}
        bgcolor="#c8e4fb"
        alignItems="center"
        justifyContent="center"
      >
        <Button onClick={() => setPage(page + 1)} size="small">
          Mostrar más
        </Button>
      </Box>
    </>
  )
}

export default Jugadores

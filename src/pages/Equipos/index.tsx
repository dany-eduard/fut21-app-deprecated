import { Box } from '@mui/system'
import { Button, Grid, LinearProgress, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { fetchApiTeam } from 'services/fetchApiPlayers'
import PlayerCard from '../../components/PlayerCards'

const index = () => {
  const [loading, setLoading] = useState(false)
  const [teamName, setTeamName] = useState<string | undefined>(undefined)
  const [players, setPlayers] = useState<any>([])
  const [page, setPage] = useState(1)
  const [totalPagesApi, setTotalPages] = useState(1)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTeamName(e.target.value)

  const handlePaginator = (num: number) => {
    if (page + num > 0 && page + num <= totalPagesApi) {
      setPage(page + num)
      window.scrollTo(0, 85)
    }
  }

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      if (teamName) {
        const { totalPages, data } = await fetchApiTeam(teamName, page)
        if (data && totalPages) {
          setPlayers(data)
          setTotalPages(totalPages)
        } else setPlayers([])
      }
      setLoading(false)
    })()
    return () => {}
  }, [teamName, page])

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" marginTop={2} marginBottom={3}>
        <TextField
          fullWidth
          label="Equipo"
          id="input-text-equipo"
          size="small"
          value={teamName}
          onChange={handleChange}
          sx={{
            width: {
              xs: 500,
              sm: 400,
              md: 500,
              lg: 600,
              pb: 3,
            },
            mx: 'auto',
          }}
        />
      </Box>
      {loading && <LinearProgress />}

      {!teamName ? (
        <Typography>Realiza una búsqueda por nombre de equipo.</Typography>
      ) : (
        !loading &&
        teamName &&
        players.length === 0 && <Typography>No se encontraron jugadores en el equipo {teamName}.</Typography>
      )}

      <PlayerCard list={players} />
      {players.length > 0 && (
        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={1} padding={3}>
          <Grid item>
            {page > 1 && (
              <Button onClick={() => handlePaginator(-1)} size="small">
                Pagina anterior
              </Button>
            )}
          </Grid>
          <Grid item>
            {page < totalPagesApi && (
              <Button onClick={() => handlePaginator(+1)} size="small">
                Pagina siguiente
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default index

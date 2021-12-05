// import { Box } from '@mui/system'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { fetchApiTeam } from 'services/fetchApiPlayers'
import PlayerCard from '../../components/PlayerCards'

const index = () => {
  const [page, setPage] = useState(1)
  const [teamName, setTeamName] = useState<string | undefined>(undefined)
  const [players, setPlayers] = useState<any>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTeamName(e.target.value)

  useEffect(() => {
    ;(async () => {
      if (teamName) {
        const { data } = await fetchApiTeam(teamName, page)
        if (data) setPlayers(data)
        else setPlayers([])
      }
    })()
    return () => {}
  }, [teamName, page])

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        sx={{
          mx: 'auto',
          width: 500,
          pb: 3,
        }}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Equipo"
            id="input-text-equipo"
            size="small"
            value={teamName}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {players.length <= 0 && <Typography>No se encontraron jugadores.</Typography>}
      <PlayerCard list={players} />
      {players.length > 0 && (
        <>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Button onClick={() => setPage(page - 1)} size="small">
                Pagina anterior
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => setPage(page + 1)} size="small">
                Pagina siguiente
              </Button>
            </Grid>
          </Grid>

          {/* <Box
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
          </Box> */}
        </>
      )}
    </>
  )
}

export default index

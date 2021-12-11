import { Grid } from '@mui/material'
import BasicCard from '../BasicCard'

type PlayerCardProps = {
  list: Array<any>
}

const PlayerCard = (props: PlayerCardProps) => {
  const { list } = props

  return (
    <Grid id="cards-container" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {list.map((item) => (
        <Grid item xs={2} sm={4} md={4} key={`${item.id}-${Math.floor(Math.random() * 99999) + 1}`}>
          <BasicCard label={item.equipo} title={item.nombre} description={item.posicion} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PlayerCard

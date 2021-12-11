import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

type BasicCardProps = {
  label?: string
  title: string
  description: string
}

const BasicCard = (props: BasicCardProps) => {
  const { label, title, description } = props

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalles</Button>
      </CardActions>
    </Card>
  )
}

BasicCard.defaultProps = {
  label: '',
}

export default BasicCard

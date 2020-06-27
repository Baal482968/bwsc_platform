import React from 'react'

import {
  Button,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import coffee from './coffee.jpg'
import grinder from './grinder.png'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.color.navDrawerBackgroundColor,
  },
}))

export const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={coffee}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="primary">
                  Coffee
                </Typography>
                <Typography variant="body2" color="secondary" component="p">
                  Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as "beans") are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={grinder}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="primary">
                  Fellow Grinder
                </Typography>
                <Typography variant="body2" color="secondary" component="p">
                  Ode is a powerful and precise home grinder with café capabilities. When grinders try to tackle both brewed coffee and espresso, they become a master of none.                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
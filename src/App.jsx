import React from 'react';
import {
    Typography, AppBar, Card, CardActions,
    CardContent, CardMedia, CssBaseline,
    Grid, Toolbar, Container, Button,
} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles';

function App() {
    const classes = useStyles();


    return <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera className={classes.button} />
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth='sm' style={{}} >
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Photoes Album
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </Typography>
                    <div className={classes.buttonContainer} >
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item >
                                <Button variant='contained' color='primary' >
                                    See my photoes
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button variant='outlined' color='primary' >
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {
                        [1, 2, 3, 4, 5, 6].map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card} >
                                    <CardMedia
                                        className={classes.media}
                                        image='https://source.unsplash.com/random'
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5'>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is media card. This section use to describe media
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>
                                            View
                                        </Button>
                                        <Button size='small' color='primary'>
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </main>
        <footer className={classes.footer} >
            <Typography variant='h6' align='center' gutterBottom >
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                Something that explain footer
            </Typography>
        </footer>
    </>
}

export default App;

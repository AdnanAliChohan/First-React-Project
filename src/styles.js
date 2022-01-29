import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.background.palette,
        padding: theme.spacing(8, 0, 6)
    },
    button: {
        marginRight: '20px'
    },
    buttonContainer: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    footer:{
        background: theme.palette.background.palette,
        padding: '56px 0'
    }

}))

export default useStyles;
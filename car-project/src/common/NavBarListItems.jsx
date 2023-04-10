import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TuneIcon from '@mui/icons-material/Tune';

export const NavBarListItems = [
    {
        id: 1,
        label : "Login",
        icon: <LoginIcon/>,
        route: 'login',
    },
    {
        id: 2,
        label : "Favorite",
        icon: <FavoriteIcon/>,
        route: '',
    },
    {
        id: 3,
        label : "Filters",
        icon: <TuneIcon/>,
        route: '',
    },
]
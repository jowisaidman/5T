import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from '../screens/Search'

const SearchcreenStacks = createStackNavigator({
    Restaurants: {
        screen: SearchScreen,
        navigationOptions: () => ({
            title: 'Buscar Restaurante'
        })
    }
});

export default SearchcreenStacks;
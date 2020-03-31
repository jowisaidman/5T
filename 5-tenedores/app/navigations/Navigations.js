import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RestaurantsScreenStacks from './RestaurantsStack';
import TopListScreenStack from './TopListStack';
import SearchScreenStack from './SearchStack';
import AccountScreenStack from './AccountStack';

const NavigationStacks = createBottomTabNavigator({
    Restaurants: {
        screen: RestaurantsScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: 'Restaurantes',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type='material-community'
                    name='compass-outline'
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    TopList: {
        screen: TopListScreenStack,
        navigationOptions: () => ({
            tabBarLabel: 'Ranking',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type='material-community'
                    name='star-outline'
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Search: {
        screen: SearchScreenStack,
        navigationOptions: () => ({
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type='material-community'
                    name='magnify'
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Account: {
        screen: AccountScreenStack,
        navigationOptions: () => ({
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type='material-community'
                    name='home-outline'
                    size={22}
                    color={tintColor}
                />
            )
        })
    }
    
},
{
    initialRouteName: 'Restaurants',
    order: ['Restaurants','TopList','Search','Account'],
    tabBarOptions: {
        inactiveTintColor: '#646464',
        activeTintColor: '#00a680'
    }
}

);

export default createAppContainer(NavigationStacks);
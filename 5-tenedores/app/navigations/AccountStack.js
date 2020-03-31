import { createStackNavigator } from 'react-navigation-stack';
import MyAccountScreen from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';

const AccountScreenStacks = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: 'Mi Cuenta'
        })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: 'Login'
        })
    }
});

export default AccountScreenStacks;
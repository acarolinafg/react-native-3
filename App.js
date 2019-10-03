import { createStackNavigator, createAppContainer } from 'react-navigation';

import Acceleration from './src/screens/Acceleration';
import Profile from './src/screens/Profile';

const AplicationStack = createStackNavigator(
	{
		Acceleration: Acceleration,
		Profile: Profile,
	},
	{
		initialRouteName: 'Acceleration',
		headerMode: 'none',
	}
);

export default createAppContainer(AplicationStack);

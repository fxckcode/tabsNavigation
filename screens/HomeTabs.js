import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const HomeTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='home' color={color} size={30} />
            ),
            tabBarBadge: 10
        }} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='brightness-5' color={color} size={30} />
            ),
            headerShown: false
        }} />
    </Tab.Navigator>
  )
}

export default HomeTabs
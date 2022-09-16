import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
// import components
import Header from './components/Header';
// import screens //
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';

import {SafeAreaProvider} from 'react-native-safe-area-context';
// navigation imports //
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// bottom tab navigator container function//
function ExpenseOverview() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Recent Expenses" component={RecentExpenses} />
      <BottomTab.Screen name="All Expenses" component={AllExpenses} />
    </BottomTab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        {/* <SafeAreaView> */}
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        {/* <Header /> */}
        <Stack.Navigator>
          <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
        {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
// });

export default App;

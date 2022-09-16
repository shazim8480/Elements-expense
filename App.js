import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
// import components
import Header from './components/Header';
// import screens //
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar />
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
        </ScrollView> */}
        <NavigationContainer>
          <Stack.Navigator>
            {/* expense overview component will load as default */}
            <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} />
            {/* manage expense component is kept different from the other expense comps */}
            <Stack.Screen name="ManageExpense" component={ManageExpense} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
// });

export default App;

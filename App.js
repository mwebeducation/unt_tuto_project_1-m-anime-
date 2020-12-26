import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/routes/MainNav';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from './src/screen/SplashScreen/SplashScreen';

const App = () => {
  const [splash, setSplash] = React.useState(true);
  React.useEffect(() => {
    setTimeout((_) => setSplash(false), 3500);
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer>
        {splash ? <SplashScreen /> : <MainNavigation />}
        {/* <SplashScreen /> */}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

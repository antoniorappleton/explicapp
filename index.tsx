// explicapp/index.tsx
import { AppRegistry } from 'react-native';
import App from './App'; // Certifique-se de que este caminho está correto e que App é exportado corretamente
import { name as appName } from './app.json'; // Nome do aplicativo no app.json

AppRegistry.registerComponent(appName, () => App);

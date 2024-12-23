import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Listado de Tareas</Text>
      <FlatList data={["Tarea1","Tarea2","Tarea3","Tarea4","Tarea5"]}></FlatList>
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

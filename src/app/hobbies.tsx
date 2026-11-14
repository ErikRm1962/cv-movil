import { ScrollView, StyleSheet, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.seccion}>
        <TarjetaHobby
          nombre="Videojuegos"
          nombreIcono="game-controller-outline"
          detalle="minecraft es mi videojuego favorito, me gusta jugarlo y crear mundos y estructuras dentro del juego. "
        />
        <TarjetaHobby
          nombre="Fútbol"
          nombreIcono="football-outline"
          detalle="fútbol es mi deporte favorito, me gusta jugarlo y seguir los partidos de la liga local e internacional."
        />
        <TarjetaHobby
          nombre="Programación"
          nombreIcono="code-slash-outline"
          detalle="actualmente estoy aprendiendo a programar en React Native y JavaScript, y me interesa el desarrollo de aplicaciones móviles y web."
        />
      </View>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  seccion: { backgroundColor: "#fff", padding: 16, borderRadius: 12, elevation: 1 },
});
import { ScrollView, StyleSheet, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.seccion}>
        <TarjetaHobby
          nombre="Videojuegos"
          nombreIcono="game-controller-outline"
          detalle="[COMPLETAR: detalle del pasatiempo]"
        />
        <TarjetaHobby
          nombre="Fútbol"
          nombreIcono="football-outline"
          detalle="[COMPLETAR: detalle del pasatiempo]"
        />
        <TarjetaHobby
          nombre="Programación"
          nombreIcono="code-slash-outline"
          detalle="[COMPLETAR: detalle del pasatiempo]"
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
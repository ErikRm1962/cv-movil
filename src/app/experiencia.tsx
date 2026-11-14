import { ScrollView, StyleSheet, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.seccion}>
        <TarjetaExperiencia
          cargo="[COMPLETAR: cargo]"
          empresa="[COMPLETAR: empresa]"
          periodo="[COMPLETAR: periodo]"
          descripcion="[COMPLETAR: funciones realizadas]"
        />
        <TarjetaExperiencia
          cargo="Aprendiz de desarrollo de software"
          empresa="SENA - CGMLTI"
          periodo="2026 - actualidad"
          descripcion="Proyectos académicos de bases de datos, desarrollo backend con Express y FastAPI, y aplicaciones móviles con React Native."
        />
      </View>
    </ScrollView>
  );
};

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  seccion: { backgroundColor: "#fff", padding: 16, borderRadius: 12, elevation: 1 },
});
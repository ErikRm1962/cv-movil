import { ScrollView, StyleSheet, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const Estudios = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.seccion}>
        <TarjetaEstudio
          titulo="Bachiller"
          institucion="Miguel Antonio Caro"
          anio={0}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Técnico"
          institucion="Tecnico  Sena en el colegio"
          anio={0}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA"
          anio={2026}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  seccion: { backgroundColor: "#fff", padding: 16, borderRadius: 12, elevation: 1 },
});
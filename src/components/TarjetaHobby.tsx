import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  detalle: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
};

const TarjetaHobby = ({ nombre, detalle, nombreIcono }: Props) => {
  return (
    <Pressable style={estilos.tarjeta} onPress={() => Alert.alert(nombre, detalle)}>
      <Ionicons name={nombreIcono} size={28} color="#2563eb" />
      <View style={estilos.info}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.ayuda}>Toca para ver más</Text>
      </View>
    </Pressable>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    gap: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  ayuda: { fontSize: 12, color: "#888" },
});
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const App = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.loginText}>Login</Text>

      <Image source={require('./src/assets/logo2.png')} style={styles.logo}></Image>

      <TextInput placeholder="Celular, username, ou email" placeholderTextColor={"white"} style={styles.loginInput}></TextInput>
      <TextInput secureTextEntry={true} placeholder="Senha" placeholderTextColor={"white"} style={styles.loginInput}></TextInput>

      <Text style={styles.vwText}>Ao entrar com sua conta, você declara estar de acordo com nossos <Text style={styles.spanText}>Termos de Serviço</Text> & <Text style={styles.spanText}>Politica de Privacidade</Text> e declara ter mais de 16 anos de idade.</Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>


      <TouchableOpacity>
      <Text style={styles.itunes}>Restaurar Compras de iTunes</Text>
      </TouchableOpacity>
      <View style={styles.esqueceuSenha}>
        
        <Text style={styles.esqueceuText}>Esqueceu a senha?</Text>
        <Text style={styles.tracinho}> | </Text>
          <TouchableOpacity>
            <Text style={styles.criarContaButton}>Cadastre-se</Text>
          </TouchableOpacity>
        
        
      </View>





    </View>
  )
};

export default App;
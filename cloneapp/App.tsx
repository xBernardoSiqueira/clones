import React from "react";
import { View,Text,Image,TextInput,TouchableOpacity} from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';


const App = () => {
    return (
      
    <View style={styles.container}>
        
        <Image source={require('./src/assets/logo.png')} style={styles.logo}></Image>
        
        <TextInput placeholder="Celular, username, ou email" style={styles.imput}></TextInput>
        <TextInput secureTextEntry={true} placeholder="Senha" style={styles.imput}></TextInput>
    <View style={styles.perdeuContainer}>
      <TouchableOpacity>
        <Text style={styles.perdeuText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
    
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.facebookButton}>
      <FontAwesome5 name="facebook" size={24} color="#399fff" />
      <Text style={styles.facebookText}>Continuar com o Facebook </Text>
    </TouchableOpacity>

     <View style={styles.divisor}>
        <View style={styles.divisorLinha}></View>
        <Text style={styles.divisorOU}>OU</Text>
        <View style={styles.divisorLinha}></View>
     </View>

    
      <View style={styles.cadastroContainer}>
        <Text style={styles.cadastroText}>Não possui uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.cadastroButton}>Cadastre-se</Text>
          </TouchableOpacity>
        
        
      </View>

    </View>

)
};

export default App;
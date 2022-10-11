import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      height: height,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
  
    scroll: {
        height: "100%",
    },

    image: {
        height: "10%",
    },

    content: {
        width: "100%",
        marginTop: 50,
        padding: 16,
    },

    input: {
        width: "100%",
        height: 60,
        borderWidth: 1,
        marginTop: 18,
        borderRadius: 10,
        borderColor: "#BDBDBD",
        padding: 8,
        fontWeight: "bold",
    },

    textButton: {
        color: "#ffffff",
        fontWeight: "bold",
    },

    text: {
        width: "100%",
        marginTop: 12,
        textAlign: "right",
    },

    button: {
        height: 45,
        marginTop: 30,
        backgroundColor: "#027890",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10, 
    }
  });
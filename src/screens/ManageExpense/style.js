import { Platform, StyleSheet } from "react-native";
import { GLOBAL_COLORS } from "../../constants/constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL_COLORS.colors.primary700,
        height: '100%'
    },
    subContainer:{
        ...Platform.select({
            ios:{
                marginTop:-60,
            },
        }),
    },
    backContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    arrow: {
        color: '#fff',
        fontWeight: 'bold'
    },
    back: {
        marginLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        ...Platform.select({
            ios:{
                // marginTop:-40
            },
            android:{
                marginTop: 8
            }
        })
    },
    cancelButton: {
        backgroundColor: GLOBAL_COLORS.colors.primary400,
        borderRadius: 10
    },
    deleteContainer: {
        padding: 16,
        marginTop: 16,
        alignItems: "center",
        borderTopWidth: 2,
        borderTopColor: GLOBAL_COLORS.colors.primary200
    },
    modalContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000',
        ...Platform.select({
            ios:{
                marginVertical:10,
            },
            android:{
                marginVertical:5
            }
        }),
    },
    txtInput:{
        ...Platform.select({
            ios:{
                marginVertical:10
            },
            android:{
                margin:-5
            }
        }),
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    okButton: {
        backgroundColor: GLOBAL_COLORS.colors.primary100,
        borderRadius: 10,
        marginHorizontal:10,
        width:'26%'
    },
    
})
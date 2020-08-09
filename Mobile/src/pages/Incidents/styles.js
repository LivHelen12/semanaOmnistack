import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 60,
        marginRight: 40
 
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
        marginLeft: 80

    },
    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
        marginTop: -25,
        color: '#13131a',
        fontWeight: 'bold',
        marginLeft: 15
        
    },

    description: {
        fontSize: 16,
        lineHeight: 15,
        color:'#737380',
        marginLeft: 15

    },

    incidentList: {
        marginTop: 20
    },

    incident: {
        marginLeft: 10,
        padding: 16,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color:'#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color:'#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'

    },

    detailsButtonText: {
        color:'#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },



});
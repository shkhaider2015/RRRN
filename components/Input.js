import React from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';

const MaptoState = state => {
    return{
        value : state.value
    }
}

class Output extends React.Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <Text>Value : {this.props.value} </Text>
            </View>
        );
    }
}

export default connect(MaptoState)(Output);
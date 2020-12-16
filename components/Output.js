import React from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';

const MaptoState = state => {
    return{
        counter : state.counter.value,
        multiple : state.multiple.anotherValue
    }
}

class Output extends React.Component {
    render() {
        console.log("Value : ", this.props)
        return (
            <View>
                <Text>Increment/Decrement Value : {this.props.counter} </Text>
                <Text>Multiple of 5 Value : {this.props.multiple} </Text>
            </View>
        );
    }
}

export default connect(MaptoState)(Output);
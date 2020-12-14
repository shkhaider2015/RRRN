import React from 'react';
import { View, Text, Button } from "react-native";
import { connect } from 'react-redux';


class Input extends React.Component {

    handlePress = ()=>
    {
        this.props.dispatch({
            type : "INCREMENT"
        })

    }
    render() {
        console.log(this.props)
        return (
            <View>
                <Button onPress={() => this.handlePress()} title="Increment" />
            </View>
        );
    }
}

export default connect(null)(Input);
import React, { Component } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as destinationActions from "../../actions/destination";
import * as durationActions from "../../actions/duration";
import * as distanceActions from "../../actions/distance";
import * as clickedActions from "../../actions/clicked";

class Reset extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (this.props.clicked) {
            this.props.actions.destinationActions.setDestination(null),
              this.props.actions.durationActions.setDuration(null),
              this.props.actions.distanceActions.setDistance(null),
              this.props.actions.clickedActions.setClicked(false)
          } else { this.props.navigate() }
        }}
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <Icon name="arrow-left" color="#fff" size={25} />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  destination: state.destination,
  clicked: state.clicked
})

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      destinationActions:
        bindActionCreators(destinationActions, dispatch),
      durationActions:
        bindActionCreators(durationActions, dispatch),
      distanceActions:
        bindActionCreators(distanceActions, dispatch),
      clickedActions:
        bindActionCreators(clickedActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
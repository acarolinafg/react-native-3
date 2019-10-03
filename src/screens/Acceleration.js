import React from 'react';
import moment from "moment";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  FlatList,
  TouchableOpacity,
  Modal
 } from 'react-native';

import AccelerationItem from '../components/AccelerationItem';

const accelerations = [{
  "slug": "reactnative-online-1",
  "name": "React Native",
  "is_disabled": false,
  "subscription_start_at": "2019-07-08T00:00:00-03:00",
  "subscription_finish_at": "2019-07-28T23:59:59-03:00",
  "start_at": "2019-08-17T00:00:00-03:00",
  "finish_at": "2019-11-03T00:00:00-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "7800FF",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-19T00:00:00-03:00",
  "start_at": "2019-08-19T00:00:00-03:00",
  "finish_at": "2019-10-23T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-20T00:00:00-03:00",
  "start_at": "2019-08-20T00:00:00-03:00",
  "finish_at": "2019-10-24T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-23T00:00:00-03:00",
  "start_at": "2019-09-23T00:00:00-03:00",
  "finish_at": "2019-11-27T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-24T00:00:00-03:00",
  "start_at": "2019-09-24T00:00:00-03:00",
  "finish_at": "2019-11-28T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "python-online-1",
  "name": "Python Women",
  "is_disabled": false,
  "subscription_start_at": "2019-07-22T00:00:00-03:00",
  "subscription_finish_at": "2019-08-11T23:59:59-03:00",
  "start_at": "2019-08-24T00:00:00-03:00",
  "finish_at": "2019-11-02T23:59:59-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "212133",
  "company_count": 1
}]

export default class Acceleration extends React.Component{
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
    detailsItems: null;
  }

  _showModal(item) {
    this.setState({ modalVisible: true });
    this.setState({ detailsItems: item });
  }

  _hideModal() {
    this.setState({ modalVisible: false });
    this.setState({ detailsItems: null });
  }

  render(){
    const navigation = this.props.navigation;
    const modal = this.state.modalVisible ? (
      <Modal
        style={styles.modalContainer}
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={this._hideModal}
      >
        {this.modal()}
      </Modal>
    ) : null;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={{uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png'}}
          />
          <TouchableOpacity 
            onPress={() => navigation.navigate("Profile")}
            className={"user-image-btn"}
          >
            <Image
              style={styles.profileImage}
              source={{ uri:"https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm" }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Acelerações</Text>
        <FlatList
          data={accelerations}
          keyExtractor={item => item.slug}
          renderItem={({item, index}) =>(
            <TouchableOpacity
              onPress={() => {this._showModal(item);}}
              className="acceleration-item-btn"
            >
              <AccelerationItem item={item} />
            </TouchableOpacity>
          )}
        />

        {modal}

      </View>
    );
  }

  modal(){
    const item = this.state.detailsItems;
    return(
      <View>
        <Image
          style={styles.modalImage}
          source={{
            uri: item.banner_url
              ? item.banner_url
              : "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
          }}
        />
        <View>
          <Text style={styles.modalTitle}>{item.name}</Text>
          <Text style={styles.modalText}>Local: {item.location}</Text>
          <Text style={styles.modalText}>
            Inscrição + desafio enviado até {moment(item.subscription_finish_at).format("DD/MM/YYYY")}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.modalBtn}
          onPress={this._hideModal}
          className="close-modal-btn"
        >
          <Text>FECHAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomColor: '#7800ff',
      borderBottomWidth: 2,
      padding: 16,
      paddingTop: 55
    },
    headerImage: {
      height: 45,
      width: 250
    },
    title: {
      color: '#7800ff',
      fontSize: 30,
      padding: 16
    },
    profileImage: {
      borderRadius: 22,
      height: 45,
      width: 45
    },
    modalContainer:{
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#FFF",
      padding: 10
    },
    modalImage: {
      height: 200,
      width: 340,
      margin: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    modalTitle:{
      fontSize: 22,
      color: "#7800ff",
      marginLeft: 30,
      paddingTop: 5
    },
    modalText:{
      marginLeft: 30,
      paddingTop: 10,
      textAlign: "left"
    },
    modalBtn:{
      backgroundColor: "#fff",
      borderColor: "#7800ff",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginLeft: 30,
      paddingTop: 10,
      width: 300,
      height: 50
    }
});

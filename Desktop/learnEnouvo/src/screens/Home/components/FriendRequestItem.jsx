import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../../utils/constans';

const FriendRequestItem = ({data, onDelete, array}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onDeleteRequest = id => {
    onDelete(id, array);
    setModalVisible(false);
  };
  return (
    <View style={styles.wrapper}>
      <Image source={data.image} style={styles.image} />
      <View style={styles.right}>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Text style={styles.name}>{data.name}</Text>
            {data.follow ? (
              <Text style={styles.follow}>
                {data.follow ? `Followed by ${data.follow}` : ''}
              </Text>
            ) : (
              ''
            )}
          </View>
          <Text style={styles.time}>{data.time}</Text>
        </View>
        <View style={styles.bottom}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Do you really want to delete this friend request {data.id}?
                </Text>
                <View style={styles.btnControlModal}>
                  <TouchableOpacity
                    style={[styles.btn, styles.buttonClose]}
                    onPress={() => {
                      onDeleteRequest(data.id);
                    }}>
                    <Text style={[styles.textStyle, {color: COLORS.black}]}>
                      Sure
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btn, styles.buttonOk]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            style={[styles.btn, styles.btnConfirm]}
            onPress={() => {}}>
            <Text style={{color: COLORS.white, fontWeight: '500'}}>
              Confirm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnDelete]}
            onPress={() => setModalVisible(true)}>
            <Text style={{color: COLORS.black, fontWeight: '500'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FriendRequestItem;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  right: {
    width: '75%',
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  name: {
    fontWeight: '600',
    color: COLORS.black,
    fontSize: 17,
  },
  time: {
    color: COLORS.blackLess,
    fontWeight: '400',
  },
  follow: {
    color: COLORS.blackLess,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  btnConfirm: {
    backgroundColor: COLORS.bgPrimary,
  },
  btnDelete: {
    backgroundColor: COLORS.bgDisable,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOk: {
    backgroundColor: COLORS.bgPrimary,
  },
  buttonClose: {
    backgroundColor: COLORS.bgDisable,
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.black,
    fontSize: 16,
  },
  btnControlModal: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
  },
});

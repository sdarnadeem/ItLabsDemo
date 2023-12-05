import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 1.5,
    // justifyContent: 'space-between',
  },

  topContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
  },

  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    rowGap: 10,
    marginVertical: 20,
  },

  title: {
    color: 'rgba(2, 6, 23, 0.85)',
    fontFamily: 'Abel',
    fontSize: 20,
    paddingBottom: 5,
    lineHeight: 20 * 1.5,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 30,
    position: 'relative',
  },
  subTitle: {
    color: 'rgba(2, 6, 23, 0.70)',
    fontFamily: 'Abel',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14 * 1.4 /* 27.2px */,
  },
  profileEditContainer: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 8,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'rgba(2, 6, 23, 0.12)',
    backgroundColor: '#F8FAFC',
  },
  editText: {
    color: 'rgba(2, 6, 23, 0.85)',
    fontFamily: 'Abel',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14 * 1.3,
  },
  profilePic: {width: 140, height: 140},
  emptyView: {
    flex: 1,
    flexShrink: 3,
  },

  crossIcon: {
    padding: 10,
    backgroundColor: '#F1F5F9',
    borderRadius: 200,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    borderColor: '#1898A0',
    borderRadius: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  buttonText: {
    color: '#1898A0',
  },

  bottomSheetTitle: {
    color: 'rgba(2, 6, 23, 0.85)',
    fontFamily: 'Abel',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 30,
  },

  bottomSheetItem: {
    color: 'rgba(2, 6, 23, 0.85)',
    fontFamily: 'Abel',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 27.2,
  },

  bottomSheetDeleteItem: {
    color: '#DC2626',
    fontFamily: 'Abel',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 27.2,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  image: {
    // width: '48%',
    // height: 150,
    // marginBottom: 5,
  },
});

export default styles;

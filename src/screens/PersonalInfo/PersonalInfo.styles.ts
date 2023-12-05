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
    justifyContent: 'flex-end',
  },

  bottomContainer: {rowGap: 10, flex: 1},

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
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 8,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'rgba(2, 6, 23, 0.12)',
    backgroundColor: '#F8FAFC',
    position: 'absolute',
    bottom: -12,
  },
  editText: {
    color: 'rgba(2, 6, 23, 0.85)',
    fontFamily: 'Abel',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14 * 1.3,
  },
  profilePic: {width: 140, height: 140, borderRadius: 200},
  emptyView: {
    flex: 1,
    flexShrink: 3,
  },
});

export default styles;

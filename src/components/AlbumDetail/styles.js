import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  titleText: {
    fontSize: 18
  },
  artistText: {
    fontSize: 14
  },
  albumCover: {
    flex: 1,
    width: null,
    height: 300
  }
});

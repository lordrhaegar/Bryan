// Module Title: SWE6206: Emerging Technologies
// Assessment Title: Emerging Technologies based Industry Solutions
// StudentID: 2333176
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

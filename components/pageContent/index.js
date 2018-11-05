import AddHtml from './addHtml';
import CallOutWithImage from './callOutWithImage';
import FullWidthImage from './fullWidthImage';
import HeroBanner from './heroBanner';
import ImageWithText from './imageWithText';
import NavBoxesRow from './navBoxRow';
import PageHeader from './pageHeader';
import PullQuote from './pullQuote';
import RichText from './richText';
import TextBlock from './textBlock';
import Video from './video';
import VideoBackground from './videoBackground';

export default {
  TextWithImageConfig: { // this name is important
    component: ImageWithText,
  },
  TextBlockConfig: { // this name is important
    component: TextBlock,
  },
  HeroBannerConfig: {
    component: HeroBanner,
  },
  CallOutWithImageConfig: {
    component: CallOutWithImage,
  },
  NavBoxesRowConfig: {
    component: NavBoxesRow,
  },
  AddHtmlConfig: {
    component: AddHtml,
  },
  FullWidthImageConfig: {
    component: FullWidthImage,
  },
  PageHeaderConfig: {
    component: PageHeader,
  },
  PullQuoteConfig: {
    component: PullQuote,
  },
  RichTextConfig: {
    component: RichText,
  },
  VideoConfig: {
    component: Video,
  },
  VideoBackgroundConfig: {
    component: VideoBackground,
  },
};

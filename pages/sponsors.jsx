import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageLayout from '../components/mainLayout/pageLayout';
import SubNavNoLink from '../components/mainLayout/subNavNoLink';
import SubHeader from '../components/mainLayout/subHeader';
import ImageWithText from '../components/pageContent/imageWithText';
import SponsorList from '../components/pageContent/sponsorList';
import './sponsors.scss';

const Sponsors = ({ sponsors }) => {
  const presentingSponsor = sponsors.find(sponsor => sponsor.level === 'presenting');
  const officialSponsors = sponsors.filter(sponsor => sponsor.level === 'official');
  const industrySponsors = sponsors.filter(sponsor => sponsor.level === 'industry');
  const supportingSponsors = sponsors.filter(sponsor => sponsor.level === 'supporting');
  const partnersSponsors = sponsors.filter(sponsor => sponsor.level === 'partners');
  const subNavLinks = [
    presentingSponsor ? 'Presenting' : null,
    officialSponsors.length !== 0 ? 'Official' : null,
    industrySponsors.length !== 0 ? 'Industry' : null,
    supportingSponsors.length !== 0 ? 'Supporting' : null,
    partnersSponsors.length !== 0 ? 'Partners' : null,
  ];
  return (
    <PageLayout>
      <SubNavNoLink titles={subNavLinks} />
      <SubHeader title="Sponsors" />
      { presentingSponsor && (
        <ImageWithText
          id="Presenting"
          preTitle="Presenting Sponsor"
          title={presentingSponsor.name}
          subtitle={presentingSponsor.website}
          image={presentingSponsor.imageUrl}
          content={presentingSponsor.description}
        />
      )
      }
      {
        officialSponsors.length !== 0 &&
        <SponsorList sponsors={officialSponsors} sponsorHeader="Official" blue medium />
      }
      {
        industrySponsors.length !== 0 &&
        <SponsorList sponsors={industrySponsors} sponsorHeader="Industry" orange small />
      }
      {
        supportingSponsors.length !== 0 &&
        <SponsorList sponsors={supportingSponsors} sponsorHeader="Supporting" red small />
      }
      {
        partnersSponsors.length !== 0 &&
        <SponsorList sponsors={partnersSponsors} sponsorHeader="Partners" green small />
      }
    </PageLayout>
  );
};

Sponsors.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.shape({})),
};

Sponsors.defaultProps = {
  sponsors: [],
};

export default connect(
  state => ({
    sponsors: state.sponsors.list._list,
  }),
)(Sponsors);

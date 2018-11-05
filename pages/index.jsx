import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import PageContent from '../components/pageContent';
import HomeLayout from '../components/mainLayout/homeLayout';
import '../styling/style.scss';

const Index = ({ pages }) => {
  const foundPage = pages.length !== 0 ? pages.filter(page => page.slug === 'home') : null;
  return (
    <>
      {
        foundPage &&
        <section>
          <Head>
            <title>{foundPage.metaTitle ? foundPage.metaTitle : 'SF Beer Week 2019'}</title>
            <meta property="og:image" content={foundPage.metaImage} />
            <meta property="og:description" content={foundPage.metaDescription} />
            <meta property="og:title" content={foundPage.metaDescription} />
          </Head>
          <HomeLayout pages={pages}>
            {
              foundPage && !foundPage.hidden && foundPage[0].sections.map((section, i) => {
                const { component, ...sectionProps } = section;
                const Section = PageContent[component];
                const SectionComponent = Section && Section.component;
                if (!SectionComponent) return null;

                return (
                  <SectionComponent
                    key={`Section${i + 1}`}
                    {...sectionProps}
                  />
                );
              })
            }
          </HomeLayout>
        </section>
      }
    </>
  );
};

Index.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  pages: [],
};

export default connect(
  state => ({
    pages: state.pages.list._list,
  }),
)(Index);

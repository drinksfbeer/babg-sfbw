import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import PageContent from '../components/pageContent';
import SubNav from '../components/mainLayout/subNav/subNav';
import SubHeader from '../components/mainLayout/subHeader/subHeader';
import PageLayout from '../components/mainLayout/pageLayout/pageLayout';

const PageBuilderContainer = ({ pages, router }) => {
  // Get url path
  const { asPath } = router;
  const param = asPath.split('/');
  // Store list of sub navs
  const navLinks = [];
  // Get the necessary pages
  const foundPages = pages.length !== 0 ? pages.filter(page => page.headerTitle.toLowerCase() === param[1]) : null;
  // Push sub navs to array
  foundPages.forEach((page) => { if (!page.hidden) navLinks.push(page.name); });
  // Find the current page with url param and page slug
  let currentPage = foundPages.length !== 0 ? foundPages.find(page => page.slug === param[2]) : null;
  // if subpage not supplied but correct main page added render first subpage
  if (foundPages.length !== 0 && !currentPage) {
    [currentPage] = foundPages;
    router.push(`/${currentPage.headerTitle.toLowerCase()}/${currentPage.slug}`);
  }
  // Throw home page if nothing found
  if (foundPages.length === 0 || !currentPage || currentPage.hidden) {
    router.push('/');
  }
  if (!currentPage) return null;

  return (
    <>
      <Head>
        <title>{currentPage.metaTitle ? currentPage.metaTitle : 'SF Beer Week 2019'}</title>
        <meta property="og:image" content={currentPage.metaImage} />
        <meta property="og:description" content={currentPage.metaDescription} />
        <meta property="og:title" content={currentPage.metaDescription} />
      </Head>
      <PageLayout pages={pages}>
        {
          currentPage && !currentPage.hidden &&
          <SubNav mainPage={currentPage.headerTitle} subPages={navLinks} />
        }
        {
          currentPage && !currentPage.hidden &&
          <SubHeader title={currentPage.name} />
        }
        {
          currentPage && !currentPage.hidden && currentPage.sections.map((section, i) => {
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
      </PageLayout>
    </>
  );
};

PageBuilderContainer.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({})),
  router: PropTypes.shape({}),
};

PageBuilderContainer.defaultProps = {
  pages: [],
  router: {},
};

export default connect(
  state => ({
    pages: state.pages.list._list,
  }),
  null,
  null,
  { pure: false },
)(withRouter(PageBuilderContainer));

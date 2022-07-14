import { Component } from 'react';
import { withRouter } from 'react-router';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import PageContext from 'context';
import PropTypes from 'prop-types';

class BasicTemplate extends Component {
  state = {
    pageType: '',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate() {
    this.setCurrentPage();
  }

  setCurrentPage() {
    const pageTypes = ['torebki', 'kocyki', 'pluszaki', 'chusty', 'ubrania', 'category'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
  }

  render() {
    const { pageType } = this.state;
    const { children } = this.props;
    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

BasicTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(BasicTemplate);

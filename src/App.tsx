import React, { FC } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled from 'styled-components';

import {Colors} from './styledHelpers/Colors';
import {FlexColumn, FlexRow} from './styledHelpers/Components';

import TopBar from './components/TopBar/TopBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Footer from './components/Footer/Footer';

import HomePage from 'pages/HomePage/HomePage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import PublicationsPage from 'pages/PublicationsPage/PublicationsPage';
import EntitiesPage from 'pages/EntitiesPage/EntitiesPage';
import Page404 from 'pages/Page404/Page404';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${Colors.Background};
`;

const Container = styled.div`
  display: flex;
  padding: 2em;
  gap: 1em;
`;

const Content = styled.main`
display: flex;
flex-basis: 100%;
`;


const App: FC = () => {
    return (
      <Router>
        <Wrapper>
          <FlexColumn>
            <TopBar />
            <Container>
              <LeftMenu />
              <Switch>
                <Content>
                  <Route exact path="/Profile">
                    <ProfilePage />
                  </Route>
                  <Route exact path="/RealEstateContracts">
                    <Page404 />
                  </Route>
                  <Route exact path="/GroupNorms">
                    <Page404 />
                  </Route>
                  <Route exact path="/Corporate">
                    <Page404 />
                  </Route>
                  <Route exact path="/SupplierContract">
                    <Page404 />
                  </Route>
                  <Route exact path="/ClientContract">
                    <Page404 />
                  </Route>
                  <Route exact path="/Administration">
                    <Page404 />
                  </Route>
                  <Route exact path="/EntitiesPage">
                    <EntitiesPage />
                  </Route>
                  <Route exact path="/people">
                  <Page404 />
                </Route>
                <Route exact path="/privacy">
                  <Page404 />
                </Route>
                <Route exact path="/logout">
                  <Page404 />
                </Route>
                <Route exact path="/network">
                  <Page404 />
                </Route>
                <Route exact path="/comments">
                  <Page404 />
                </Route>
                <Route exact path="/notifications">
                  <Page404 />
                </Route>
                <Route exact path="/ecosystem">
                  <Page404 />
                </Route>
                <Route exact path="/publications">
                  <PublicationsPage />
                </Route>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                </Content>
              </Switch>
            </Container>
            <Footer />
          </FlexColumn>
        </Wrapper>
      </Router>
      );
  }

export default App;


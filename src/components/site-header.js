import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';

export default class SiteHeader extends Component {
    render() {
        return(
            <Layout fixedHeader>
                <Header title={<span><span style={{ color: '#ddd' }}>Weeping Jeremiah / </span><strong>Resume</strong></span>}>
                </Header>
                <Drawer title="Sections">
                    <Navigation>
                    <a href="#">Work</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}
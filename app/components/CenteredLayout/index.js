/**
*
* CenteredLayout
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
/* import { FormattedMessage } from 'react-intl';
import messages from './messages'; */

function CenteredLayout(props) {
  return (
    <Row style={{ minHeight: '100vh' }} type="flex" align="middle" justify="center">
      <Col>
        {{ ...props.children }}
      </Col>
    </Row>
  );
}

CenteredLayout.propTypes = {
  children: PropTypes.any,
};

export default CenteredLayout;

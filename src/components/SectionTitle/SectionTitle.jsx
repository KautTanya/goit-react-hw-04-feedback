import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

export const SectionTitle = ({title, children}) => {
    return(
        <section>
        <Title>{title}</Title>
        {children}
        </section>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };
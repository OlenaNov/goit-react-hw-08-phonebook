import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #7d3cff;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;
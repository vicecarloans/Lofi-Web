import styled from 'styled-components'
import { Layout, Typography } from 'antd'
const {Text} = Typography

const { Footer } = Layout;

export const AboutText = styled(Text)`
    margin-right: 15px;
    &:hover {
        color: #fff;
    }
`;

export const CustomFooter = styled(Footer)`
  text-align: right;
`;

export const AboutLink = styled.a`

`;
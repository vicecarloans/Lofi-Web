import styled from "styled-components"
import { Space, Button, Divider } from 'antd'

export const UploadDiv = styled.div`
    min-width: 100%;
    height: 80vh;
`;

export const UploadSpace = styled(Space)`
    height: 100%;
    width: 100%;
    justify-content: center;
`;

export const UploadButton = styled(Button)`
    width: 500px;
    height: 50px;
    font-size: 18px;
`;

export const UploadDivider = styled(Divider)`
    height: 200px;
`;
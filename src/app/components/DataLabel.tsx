import { styled } from "@mui/material/styles";
import { COLORS } from "../constants";

const ContentContainer = styled('div')`
    display: flex;
    height: 17px;
    align-items: center;
`;

export default function DataLabel({
    label,
    children
}: React.PropsWithChildren<{ label: string }>) {
    return (
        <ContentContainer style={children ? { gap: 1 } : undefined}>
            <div style={{ 
                color: COLORS.green,
                fontSize: 14,
                fontWeight: '400',
            }}>{label}</div>
            {children}
        </ContentContainer>
    )
}
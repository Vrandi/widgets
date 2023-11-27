import type { WidgetData } from "../types";
import { styled } from "@mui/material/styles";
import LogoSignature  from '../../../assets/greenspark.svg'
import Logo from '../../../assets/Subtract.svg' 
import { COLORS } from "../constants";

const isLightColorSelected = (colorKey?: string) => {
    return colorKey === 'white' || colorKey === 'beige';
}

const HeaderContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.01);
`;

const HeaderContentContainer = styled('div')`
    display: inline-flex;
    padding: 10.297px 13.895px 10.297px 11.91px;
    justify-content: center;
    align-items: center;
    gap: 11.91px;
    background: ${({ color }: { color: string }) => COLORS[color]};
    border-radius: 6px;
`;

const ContentContainer = styled('div')`
    align-self: stretch;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
`;

const ImageContainer = styled(ContentContainer)`
    align-items: center;
`;

const DescriptionContainer = styled(ContentContainer)`
    align-items: flex-start;
    width: 144px;
`;

const Typography = styled('div')`
    color: ${({ color }) => color };
    line-height: normal;
`;

const Title = styled(Typography)`
    font-size: 12.406px;
`;

const SubTitle = styled(Typography)`
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
`;

export default function WidgetHeader({
    selectedColor,
    action,
    amount,
    type
}: Partial<WidgetData>) {
    let contentColor = isLightColorSelected(selectedColor) ? COLORS.green : '#F9F9F9';
    return (
        <HeaderContainer>
            <HeaderContentContainer color={selectedColor as string}>
                <ImageContainer>
                    <Logo color={contentColor} />
                    <LogoSignature color={contentColor} />
                </ImageContainer>
                <DescriptionContainer>
                    <Title color={contentColor}>
                        This product {action}
                    </Title>
                    <SubTitle color={contentColor}>
                        {`${amount} ${type}`}
                    </SubTitle>
                </DescriptionContainer>
            </HeaderContentContainer>
        </HeaderContainer>
    )
}
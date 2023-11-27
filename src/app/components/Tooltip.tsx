import TooltipSvg from '../../../assets/TooltipSvg.svg';
import { styled } from "@mui/material/styles";
import { Fragment } from 'react';
import { Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import { COLORS  } from '../constants';

const Container = styled('div')`
    display: flex;
    width: 12px;
    height: 12px;
    justify-content: center;
    align-items: center;
`; 

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        borderRadius: 4,
        backgroundColor: '#FFF',
        boxShadow: '0px 0.8px 3px rgba(0, 0, 0, 0.01)',
        display: 'inline-flex',
        padding: '24px 16px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        width: '216px'
    },
  }));

export default function WidgetTooltip() {
    return (
        <Container>
            <HtmlTooltip disableFocusListener disableTouchListener TransitionProps={{ timeout: 300 }}
                title={
                    <Fragment>
                        <div style={{ textAlign: 'center', color: COLORS.black, fontSize: 14, fontWeight: 400 }}>
                            This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.
                        </div>
                        <div onClick={() => console.log('View Public Profile')} style={{ textAlign: 'center', color: COLORS.green, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                            View Public Profile
                        </div>
                    </Fragment>
                }
            >
                <div>
                    <TooltipSvg />
                </div>
            </HtmlTooltip>
        </Container>
    );
}
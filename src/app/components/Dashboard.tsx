import { styled } from "@mui/material/styles";
import Widget from "./Widget";
import { useWidgets } from '../WidgetsContext';
import { Grid } from "@mui/material";

const Box = styled(Grid)`
    align-items: flex-start;
    display: inline-flex;
`;

const Container = styled(Box)`
    padding: 36px;
    background: #F9F9F9;
    box-shadow: 0px 0.77px 3px 0px rgba(0, 0, 0, 0.01), 0px 3.4px 6.2px 0px rgba(0, 0, 0, 0.02), 0px 8.4px 12.35px 0px rgba(0, 0, 0, 0.03), 0px 16px 24px 0px rgba(0, 0, 0, 0.03), 0px 27px 44.5px 0px rgba(0, 0, 0, 0.04), 0px 42px 76px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
`;

const Title = styled('div')`
    text-align: center;
    color: #212121;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
`;

const Line = styled('div')`
    width: 100%;
    border: 2px #B0B0B0 solid
`;

export default function Dashboard() {
    const widgets = useWidgets()
    
    return (
        <Container sx={{width: { xs: '331px', md: '852px'}, height: { xs: '697px', md: '419px' }}}>
            <Box style={{ flexDirection: 'column', width: '100%', height: '100%' }}>
                <Box style={{ paddingBottom: 12, width: '100%' }} sx={{ alignItems: { xs: 'center' }}}>
                    <Title>Per Product widgets</Title>
                </Box>
                <Box style={{ paddingBottom: 20, width: '100%' }}>
                    <Line />
                </Box>
                <Box style={{ justifyContent: 'space-between', width: '100%', height: '100%' }}
                     sx={{ flexDirection: { xs: "column", md: "row"}, alignItems: { xs: 'center', md: 'flex-start' }}} >
                    {widgets.length && widgets.map(widget => (<Widget key={widget.id} {...widget} />))}
                </Box>
            </Box>
        </Container>
    );
}
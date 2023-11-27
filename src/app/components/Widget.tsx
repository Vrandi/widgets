import { styled } from "@mui/material/styles";
import type { WidgetData } from "../types";
import WidgetHeader from "./Header";
import Link from "./Link";
import BadgeColourSelector from "./BadgeColourSelector";
import ActiveToggler from "./ActiveToggler";
import { Grid } from "@mui/material";

const Box = styled('div')`
    display: flex;
    height: 167px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 220px;
`;

export default function Widget(props: WidgetData) {
    return (
        <Box>
            <WidgetHeader {...props}/>
            <Link id={props.id} linked={props.linked}/>
            <BadgeColourSelector id={props.id} selectedColor={props.selectedColor} />
            <ActiveToggler id={props.id} active={props.active} />
        </Box>
    )
}
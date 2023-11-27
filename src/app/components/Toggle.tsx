import { styled } from "@mui/material/styles";
import Switch from '@mui/material/Switch';
import { COLORS } from "../constants";

const Toggle = styled(Switch)(({ theme }) => ({
    width: 46,
    height: 23.2,
    padding: 0,
    overflow: 'visible',
    '& .MuiSwitch-switchBase': {
      padding: 0,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(22px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: COLORS.green,
          opacity: 1
        },
        '& + .MuiSwitch-thumb': {
            border: `0.68px ${COLORS.green} solid`
        }
      },
    },
    '& .MuiSwitch-thumb': {
        color: '#F9F9F9',
        border: '0.68px #F2EBDB solid',
        width: 23,
        height: 23,
        boxShadow: '0px 0px 1.37px rgba(0, 0, 0, 0.35)'
    },
    '& .MuiSwitch-track': {
        background: '#F9F9F9',
        border: '0.68px #AFC6BD solid',
        borderRadius: 26 / 2,
        boxShadow: '0px 1px 6.8px rgba(0, 0, 0, 0.15) inset',
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
  }));

  export default Toggle;

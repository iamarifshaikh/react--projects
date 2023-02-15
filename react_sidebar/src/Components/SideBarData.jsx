import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export const SideBarData = [
    {
    title: "Home",
    icon: <HomeRoundedIcon />,
    path:"/home",
    },
    {
    title: "About",
    icon: <InfoRoundedIcon/>,
    path:"/about",
    },
    {
    title: "Skills",
    icon: <BoltRoundedIcon />,
    path:"/skills",
    },
    {
    title: "Projects",
    icon: <DataObjectRoundedIcon />,
    path:"/projects",
    },
    {
    title: "Contact",
    icon: <SendRoundedIcon />,
    path:"/contact",
    }
]
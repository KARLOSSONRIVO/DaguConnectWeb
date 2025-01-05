import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentsIcon from '@mui/icons-material/Payments';
import MessageIcon from '@mui/icons-material/Message';
export const SidebarData = [
    {
        title: "Dashboard",
        icon:<DashboardIcon/>,
        link: "/dashboard",
    },

    {
        title: "User Management",
        icon:<ManageAccountsIcon/>,
        link: "/user-management",
    },
    {
        title: "Bookings",
        icon:<BookmarksIcon/>,
        link: "/bookings",
    },
    
    {
        title: "Ratings",
        icon:<ReviewsIcon/>,
        link: "/ratings",
    },
    
    {
        title: "Payments",
        icon:<PaymentsIcon/>,
        link: "/payments",
    },
    
    {
        title: "Messages",
        icon:<MessageIcon/>,
        link: "/messages",
    },
    
]
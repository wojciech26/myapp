import homeIcon from 'assets/icons/house2.svg'
import publicationsIcon from 'assets/icons/publications.svg'
import peopleIcon from 'assets/icons/people.svg'
import entitiesIcon from 'assets/icons/entities.svg'
import administrationIcon from 'assets/icons/administration.svg'

import contractIcon from 'assets/icons/comments.svg'
import corporateIcon from 'assets/icons/comments.svg'
import groupNormsIcon from 'assets/icons/network.svg'
import humberta from 'assets/humberta.png'
import privacyIcon from 'assets/icons/privacy.svg'
import settingsIcon from 'assets/icons/settings.svg'
import logoutIcon from 'assets/icons/logout.svg'

interface INavigationItems {
    title?: string,
    items: {
        title: string,
        path: string,
        icon: string,
    }[]
}

const navigationItems: INavigationItems[] = [
    {
    title: "Platform",
    items: [
        {
            title: 'Home',
            path: '/',
            icon: homeIcon,
        },
        {
            title: 'Publications',
            path: '/publications',
            icon: publicationsIcon,
        },
        {
            title: 'People',
            path: '/people',
            icon: peopleIcon,
        },
        {
            title: 'Entities',
            path: '/entities',
            icon: entitiesIcon,
        },
        {
            title: 'Administration',
            path: '/administration',
            icon: administrationIcon,
        }
    ]
    },
    {
        title: "Workspaces",
        items: [
            {
                title: 'Client contract',
                path: '/clientContract',
                icon: contractIcon,
            },
            {
                title: 'Supplier contract',
                path: '/supplierContract',
                icon: contractIcon,
            },
            {
                title: 'Corporate',
                path: '/corporate',
                icon: corporateIcon,
            },
            {
                title: 'Group Norms',
                path: '/groupNorms',
                icon: groupNormsIcon,
            },
            {
                title: 'Real estate contracts',
                path: '/realestateContracts',
                icon: contractIcon,
            }
        ]
    },
    {
        title: "Account",
        items: [
            {
                title: "Humberta Swift",
                path: '/profile',
                icon: humberta,
            },
            {
                title: 'Privacy',
                path: '/privacy',
                icon: privacyIcon,
            },
            {
                title: 'Profile',
                path: '/profile',
                icon: settingsIcon,
            }
        ]
    },
    {
        items: [
            {
                title: 'Logout',
                path: '/logout',
                icon: logoutIcon
            }
        ]
    }
]

export default navigationItems;
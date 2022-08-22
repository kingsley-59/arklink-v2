import { FaBook, FaChartPie, FaLightbulb, FaTicketAlt, FaUsers, FaUserTie } from 'react-icons/fa';

export const menuData = [
    {
        title: 'Overview',
        icon: <FaChartPie style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Tickets',
        icon: <FaTicketAlt style={{ marginRight: '0.5rem' }} />,
        active: true
    },
    {
        title: 'Ideas',
        icon: <FaLightbulb style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Contacts',
        icon: <FaUsers style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Agents',
        icon: <FaUserTie style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Articles',
        icon: <FaBook style={{ marginRight: '0.5rem' }} />,
    }
]

export const tableTitles = ["Ticket details", "Customer name", "Date", "Priority"]

export const data=[
    [
      "Contact Email not Linked",
      "Tom Cruise",
      "May 26, 2019",
      "High"
    ],
    [
      "Adding Images to Featured Posts",
      "Matt Damon",
      "May 26, 2019",
      "low"
    ],
    [
      "When will I be charged this month?",
      "Robert Downey",
      "May 26, 2019",
      "High"
    ],
    [
      "Payment not going through",
      "Christian Bale",
      "May 25, 2019",
      "Normal"
    ],
    [
      "Unable to add replies",
      "Henry Cavil",
      "May 26, 2019",
      "High"
    ],
  ]
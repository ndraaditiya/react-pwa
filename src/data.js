import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const data =
  [
    {
      project: [
        {
          id: 1,
          versi: 'Web App',
          software: 'React, Express, Material-UI',
          title: 'Sistem Informasi Manajemen Aset',
          picture: 'project1.jpeg',
          url: 'https://youtu.be/IxVrBHSOTY4'
        },
        {
          id: 2,
          versi: 'Web App',
          software: 'React, React-Redux, JWT, Material-UI, Express, Google OAuth, MongoDB',
          title: "ruangsosial \n (Social Media App)",
          picture: 'project6.jpg',
          url: 'https://ruangsosial.netlify.app/'
        },
        {
          id: 3,
          versi: 'Web App',
          software: 'Next, GraphQL, Hygraph, Tailwind',
          title: 'Web Blog',
          picture: 'project7.jpg',
          url: 'https://next-blog-git-main-ndraaditiya.vercel.app/'
        },
        {
          id: 4,
          versi: 'Android App',
          software: 'React Native, Express, Expo',
          title: 'ruangbaca',
          picture: 'project2.jpg',
          url: 'https://youtu.be/dmO0oKgnLu4'
        },
        {
          id: 5,
          versi: 'Android App',
          software: 'Flutter, NESWAPI',
          title: 'ruangbaca',
          picture: 'project3.jpg',
          url: 'https://youtu.be/3_3-JujT30A'
        },
        {
          id: 6,
          versi: 'Desktop App',
          software: 'VB.Net, SQL Server',
          title: 'Decision Support System',
          picture: 'project4.jpg',
          url: 'https://youtu.be/A2h4n4ye_Zo'
        }
      ],
      book: [
        {
          id: 1,
          title: 'Tentang Kita yang Erat namun tak Terikat',
          base: 'Novel',
          picture: 'book1.jpg',
          url: 'https://www.wattpad.com/story/227677204-tentang-kita-yang-erat-namun-tak-terikat'
        },
        {
          id: 2,
          title: 'Terangkai Kala Arunika Menampakkan Kirananya',
          base: 'Sajak',
          picture: 'book2.jpg',
          url: 'https://www.wattpad.com/story/243317521-terangkai-kala-arunika-menampakkan-kirananya'
        }
      ],
      youtube: [
        {
          id: 1,
          title: 'Andra Aditiya',
          caption: 'This is my YouTube Channel',
          picture: 'youtube1.jpg',
          url: 'https://www.youtube.com/channel/UCUbpXnPEpFJ0I7OloQ4BX1A'
        }
      ],
      contactDetails: [
        {
          id: 1,
          caption: 'ndraaditiya',
          title: 'Go to Instagram',
          icon: <InstagramIcon className="icon-home" />,
          url: 'https://www.instagram.com/ndraaditiya/',
        },
        {
          id: 2,
          caption: 'ndraaditiya',
          title: 'Go to GitHub',
          icon: <GitHubIcon className="icon-home" />,
          url: 'https://github.com/ndraaditiya'
        },
        {
          id: 3,
          caption: 'ndraaditiya@gmail.com',
          title: 'Email to me',
          icon: <EmailIcon className="icon-home" />,
          url: 'mailto:ndraaditiya@gmail.com'
        }
      ]
    }
  ]

export { data }
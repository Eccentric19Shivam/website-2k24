import React from 'react'
// import { team } from 'src/constants/index'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TeamMember = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="w-1/3 m-auto">
      <Slider {...settings}>
        {team.map((item) => (
          <div className='bg-white h-[450px] text-black rounded-xl'>
            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
              <img src={item.imageUrl} alt='' className='h-44 w-44 rounded-full'/>
            </div>

            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <h3 className='text-xl font-semibold'>{item.name}</h3>
              <h4 className='text-lg'>{item.title.primary}</h4>
              <p>{item.title.secondary}</p>
              <a href={item.link} className="bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl">Contact</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}



export const team = [
  {
    id: "0",
    name: "Dr. Vikram Verma",
    title: {
      primary: "Our faculty incharge",
      secondary:" "
    },
    imageUrl:"https://portfolios.nith.ac.in/uploads/member_details/167.jpg",
    link: "https://portfolios.nith.ac.in/index.php?/nith/dr-vikram-verma354",
  },
  {
    id: "1",
    name: "Priyanshu Sagar",
    title: {
      primary: "Core Coordinator",
      secondary: "Third Year"
    },
    imageUrl: "src/assets/team/priyanshu3rd.jpg",
    link: "https://www.linkedin.com/in/priyanshu-sagar-76b645228/"
  },
  {
    id: "2",
    name: "Shubham Aggarwal",
    title: {
      primary: "Former Core Coordinator",
      secondary: "Final Year"
    },
    imageUrl: "src/assets/team/shubham4th.jpg",
    link: "https://www.instagram.com/ishubu68"
  },
  {
    id: "3",
    name: "Anshika Chakravorty ",
    title: {
      primary: "Former Core Coordinator",
      secondary: "Final Year"
    },
    imageUrl: "src/assets/team/anshika4th.jpg",
    link: "https://www.linkedin.com/in/anshika-c-208549230/",
  },
  {
    id: "4",
    name: "Shruti Dhiman ",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "src/assets/team/shruti4th.jpg",
    link: "https://www.instagram.com/shrutii_159"
  },
  {
    id: "5",
    name: "Anvi Bakhsyan",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "https://iili.io/JkmULFV.jpg",
    link: "https://www.linkedin.com/in/anvi-bakhsyan"
  },
  {
    id: "6",
    name: "Jatothu Navya",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "https://iili.io/JkmrqgV.jpg",
    link: "https://www.linkedin.com/in/jatothu-navya-689b78231/"
  },
  {
    id: "7",
    name: "Sarthak Rajput",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "src/assets/team/sarthak4th.jpg",
    link: "https://www.instagram.com/sarthak_raj_put/"
  },
  {
    id: "8",
    name: "Manish Bajdoliya",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "src/assets/team/manish4th.jpg",
    link: "https://www.linkedin.com/in/manish-bajdoliya-4104711b5/"
  },
  {
    id: "9",
    name: "Tanya Mithaniya",
    title: {
      primary: "Coordinator",
      secondary: "Third Year",
    },
    imageUrl: "https://iili.io/Jkm4H2p.jpg",
    link: "https://www.linkedin.com/in/tanya-mithaniya-0b2a8025a/",
  },
  {
    id: "10",
    name: "Abhishek Singh",
    title: {
      primary: "Coordinator",
      secondary: "Third Year",
    },
    imageUrl: "https://iili.io/Jkm68fj.jpg",
    link: "https://www.linkedin.com/in/abhishek-singh-b32bb6248/",
  },
  {
    id: "11",
    name: "Shivam Singh",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/shivamsingh2nd.jpg",
    link: "https://www.linkedin.com/in/shivam-singh-94ba9a247/",
  },
  {
    id: "12",
    name: "Abhishek Singh",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/abhishek2nd.jpg",
    link: "https://www.instagram.com/abhishek_.singh03",
  },
  {
    id: "13",
    name: "Nischey Karol",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/nischey2nd.jpg",
    link: "https://www.linkedin.com/in/nischey-karol-308640266/",
  },
  {
    id: "14",
    name: "Tanmay Sharma",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/tanmay2nd.jpg",
    link: "https://www.linkedin.com/in/tanmaysharma2k3/",
  },
  {
    id: "15",
    name: "Kishan Kapoor",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/kishan2nd.jpg",
    link: "https://www.instagram.com/kishan.kapor/",
  },
  {
    id: "16",
    name: "Rohit Patel",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/rohit2nd.jpg",
    link: "https://www.instagram.com/rohit_patel_784",
  },
  {
    id: "17",
    name: "Shivam Yadav",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/shivamyadav2nd.jpg",
    link: "https://www.instagram.com/_.03shivam",
  },
  {
    id: "18",
    name: "Amolak Gujjar",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "src/assets/team/amolak2nd.jpg",
    link: "https://www.instagram.com/gurjar.amolak/",
  },
  {
    id: "19",
    name: "Ayush Verma",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/ayush1st.jpeg",
    link: "https://www.instagram.com/amayush__",
  },
  {
    id: "20",
    name: "Sareha",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/sareha1st.jpg",
    link: "https://www.instagram.com/sareha_singh",
  },
  {
    id: "21",
    name: "Aryan",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/aryan1st.jpg",
    link: "https://www.instagram.com/ar.y.a.n_09",
  },
  {
    id: "22",
    name: "Devansh Negi",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/devansh1st.jpg",
    link: "https://www.linkedin.com/in/devansh-negi-4a2b822a9/",
  },
  {
    id: "23",
    name: "Jyoti Kesharwani",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/jyoti1st.jpg",
    link: "https://www.instagram.com/kesharigenie",
  },
  {
    id: "24",
    name: "Sarika Yadav",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/sarika1st.jpeg",
    link: "https://www.instagram.com/sarika_yadav18",
  },
  {
    id: "25",
    name: "Tanishq Parashar",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/tanishq1st.jpg",
    link: "https://www.linkedin.com/in/tanishq-parashar-817252292/",
  },
  {
    id: "26",
    name: "Nitin Kumar",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/nitin1st.jpg",
    link: "https://www.instagram.com/_raonitin",
  },
  {
    id: "27",
    name: "Arjun Dhania",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "src/assets/team/arjun1st.jpg",
    link: "https://www.instagram.com/arjun___026/",
  },
  {
    id: "28",
    name: "Sagar Baddhan",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: 'src/assets/team/sagar1st.jpeg',
    link: "https://www.instagram.com/sagar_baddhan",
  },
];


export default TeamMember
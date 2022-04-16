import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import TeamMember from "./TeamMember"
import "./Team.scss"

const members = [
  {
    avatar: <StaticImage src="../../images/team-viethung.png" alt="avatar" />,
    name: "Hung Nguyen",
    role: "CEO",
    description:
      "I am the Founder of Plats Network. I am in charge of visualizing ideas, gathering teams, assigning tasks suitable in accordance with member’s desire and capability and encouraging them to fulfill their tasks. I have been spending 10 years on software development in Japan and over 8 years starting my own business.",
    linkedln: "https://www.linkedin.com/in/nghilt/",
  },
  {
    avatar: <StaticImage src="../../images/team-thanhnghi.png" alt="avatar" />,
    name: "Nghi Nguyen",
    role: "CTO",
    description:
      "I work as a system engineer on Plats Network Project. Primarily, I define the system's specification and support my team's members in resolving technical issues. Working on computer networking industry for more than 10 years, has skilled myself in Advertising System Engineer and Blockchain Technology",
    linkedln: "https://www.linkedin.com/in/nghilt/",
  },
  {
    avatar: <StaticImage src="../../images/team-thanhmai.png" alt="avatar" />,
    name: "Mai Phan",
    role: "CMO",
    description:
      "I have been working on designing and coding smart contract, based on Rust programming language at Plats Network.",
    linkedln: "https://www.linkedin.com/in/dinh-dung-880bb0219/",
  },
  {
    avatar: <StaticImage src="../../images/team-quanglien.png" alt="avatar" />,
    name: "Lien Le",
    role: "Blockchain Developer",
    description:
      "I'm a blockchain developer, building smart contract at Plats Network.",
    linkedln: "https://www.linkedin.com/in/thomas-le-3b3498146/",
  },
  {
    avatar: <StaticImage src="../../images/team-dinhdung.png" alt="avatar" />,
    name: "Dung Ho",
    role: "Blockchain Developer",
    description:
      "I did my education in Electronics and Telecommunications engineer in Hue University of Sciences (Viet Nam). I have time to study AI/ Machine Learning in Japan. I'm currently enthusiastic blockchain technology.",
    linkedln: "https://www.linkedin.com/in/dinh-dung-880bb0219/",
  },
  {
    avatar: <StaticImage src="../../images/team-trongthoai.png" alt="avatar" />,
    name: "Thoai Huynh",
    role: "Fullstack Developer",
    description:
      "Graduated from the HCM University of Science (HCMUS); almost 4 years of web experience; undertaking various positions, from developer to team leader. Now, I'm working on system frontend.",
    linkedln: "https://www.linkedin.com/in/thoai-huynh-5035a015b/",
  },
  {
    avatar: <StaticImage src="../../images/team-phuongthao.png" alt="avatar" />,
    name: "Thao Lam",
    role: "Graphic Designer",
    description: "Graduated from Open University majoring in Graphic Design. Obtained 10 years experience of UI/UX and software designing, Currently doing R&D in Blockchain technology.",
    linkedln: "https://www.linkedin.com/in/thaolam3012/",
  },
  {
    avatar: <StaticImage src="../../images/team-manhcuong.png" alt="avatar" />,
    name: "Cuong Nguyen",
    role: "Illustrator - Designer",
    description: "Graduated from Danang Architecture University with over 3 years of graphic design and 1 year of illustration experience.",
    linkedln: "https://www.linkedin.com/in/cuong-nguyen-586a54193",
  },
  {
    avatar: <StaticImage src="../../images/team-hoangyen.png" alt="avatar" />,
    name: "Yen Than",
    role: "Content Specialist",
    description: "I am a content contributor and PR channels manager at Plats Network, aiming to expand our community quickly and properly. Content Marketing (Plats Network); External Specialist Intern (HUST); Teaching Assistant (Wallaby House English)",
    linkedln: "https://www.linkedin.com/in/yen-t-14005b119/",
  },
  {
    avatar: <StaticImage src="../../images/team-vanbach.png" alt="avatar" />,
    name: "Bach Nguyen",
    role: "Content Advisor",
    description: "Graduated from Hanoi University of Science and Technology with a bachelor degree and an IT engineer degree. Has over 10 years working at several multi-national entrepreneurs on sale and customer care of high-technology products.",
    linkedln: "https://www.linkedin.com/in/nguyen-van-bach-20357aa1/",
  },
]

const Team = () => {
  return (
    <main id="team" className="team">
      <h1 className="team__title">Our Team</h1>
      <p className="team__subtitle">
        Innovating world is leading by a team of innovators
      </p>
      <Row xs={1} sm={1} md={2} lg={2} className="justify-content-around">
        {members.map((member, index) => (
          <Col key={index} data-aos="fade-down">
            <TeamMember {...member} />
          </Col>
        ))}
      </Row>
    </main>
  )
}

export default Team

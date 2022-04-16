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
      "Graduated from Hanoi University of Science and Technology, 10 years of experience in designing hardware and software for industrial robots and Diamond Dicing Saw in Japan. Being the Founder of Vietnam AI Next which is invested by Nakashima Corporation Japan.",
    linkedln: "https://www.linkedin.com/in/marcusnguyen68/",
  },
  {
    avatar: <StaticImage src="../../images/team-thanhnghi.png" alt="avatar" />,
    name: "Nghi Nguyen",
    role: "CTO",
    description:
      "As an experienced Chief Technology Officer at Plats, Nghi dedicated himself to the computer networking industry with more than 5 years skilled in Advertising System engineer and Blockchain Technology.",
    linkedln: "https://www.linkedin.com/in/nghilt/",
  },
  {
    avatar: <StaticImage src="../../images/team-thanhmai.png" alt="avatar" />,
    name: "Mai Phan",
    role: "CMO",
    description:
      "Graduated from Hanoi University of Science and Technology with a Bachelor's degree and National University of Economics with MBA degree, has over 10 years of experience in managerial and business development roles.",
    linkedln: "https://www.linkedin.com/in/mai-phan-1b8a5354/",
  },
  {
    avatar: <StaticImage src="../../images/team-quanglien.png" alt="avatar" />,
    name: "Lien Le",
    role: "Blockchain Developer",
    description:
      "Graduated from Hanoi University of Science and Technology, has nearly 10 years of experience in the industry with many different positions from developer to manager, of which more than 1 year of programming on blockchain.",
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
      "Graduated from the HCM University of Science (HCMUS), nearly 4 years of web experience with many different positions from developer to leader.",
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
    description: "Senior at Hanoi University of Science and Technology (HUST). Go-getter for innovative, novel, and sustainable ideas. Vivid experience in External Affairs, ELT, Public Relations.",
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

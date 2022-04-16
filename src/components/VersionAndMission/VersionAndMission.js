import React from "react"
import "./VersionAndMission.scss"
import VersionAndMissionBox from "./VersionAndMissionBox"
const VersionAndMission = () => {
  return (
      <main id="version-and-mission" className="version-and-mission">
        <h1 className="version-and-mission__title" data-aos="fade-down">Plats | Vision & Mission</h1>
          <VersionAndMissionBox/>
      </main>
  )
}
export default VersionAndMission
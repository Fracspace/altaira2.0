import ResortHero from "../components/ResortPageComponents/ResortHero"
import AboveNoise from "../components/ResortPageComponents/AboveNoise"
import ShapedByLand from "../components/ResortPageComponents/ShapedByLand"
import AdventureZone from "../components/ResortPageComponents/AdventureZone"
import EventSpaces from "../components/ResortPageComponents/EventSpaces"

const page = () => {
  return (
    <div>
        <ResortHero/>
        <AboveNoise/>
        <ShapedByLand/>
        <AdventureZone/>
        <EventSpaces/>
    </div>
  )
}

export default page
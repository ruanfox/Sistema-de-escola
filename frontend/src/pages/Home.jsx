import WeeklyTimeTable from "../components/WeeklyTimeTable"
import PersonalInfoCard from "../components/PersonalInfoCard"
import NotificationsCard from "../components/NotificationsCard"
import TodayClassesCard from "../components/TodayClassesCard"
import SubjectsCard from "../components/SubjectsCard"

export default function Home() {
    return(
        <div className="flex flex-row w-full">
            <div className="w-3/6 mr-4 flex flex-col gap-1">
                <PersonalInfoCard />
                <NotificationsCard />
                <TodayClassesCard />
            </div>

            <div className="w-3/6 flex flex-col gap-1">
                <SubjectsCard />
            </div>
        </div>
    )
}

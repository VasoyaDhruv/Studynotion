
import RenderSteps from "./RenderSteps"


export default function AddCourse ()  {
    return (
        <>
           <div className="text-white flex gap-[10%]">
              <div>
                <h1>Add Course</h1>
                 <div className="w-[30rem]">
                   <RenderSteps/>
                 </div>
              </div>
              <div className="p-7 w-[50%] bg-richblack-800">
                <p className="text-2xl">⚡Course Upload Tips</p>
                <ul  className="text-richblack-300 h-fit">
                    <li>Set the Course Price option or make it free.</li>
                    <li>Standard size for the course thumbnail is 1024x576.</li>
                    <li>Video section controls the course overview video.</li>
                    <li>Course Builder is where you create & organize a course.</li>
                    <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                    <li>Information from the Additional Data section shows up on the course single page.</li>
                    <li>Make Announcements to notify any important</li>
                    <li>Notes to all enrolled students at once.</li>
                </ul>
              </div>
           </div>
        </>
    )
}
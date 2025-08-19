
export default function ListCourse() {
    let course = ["HTML", "CSS", "JavaScript", "ReactJS"];

  return (
    <div>
      <h1> Danh sách khóa học</h1>
      <ol>
        {course.map(item => {
            return <li key = {item}>{item}</li>
        })}
      </ol>
    </div>
  )
}

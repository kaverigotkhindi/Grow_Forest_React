const tasks = [
  {
    id: 1,
    text :'Doctor\'s appointment',
    day: 'Feb 5th at 2:30 PM ',
    reminder :'true',
  },
  {
    id: 2,
    text :'Meeting at School',
    day: 'Feb 6th at 12:30 PM ',
    reminder :'true',
  },
  {
    id: 3,
    text :'Food Shopping ',
    day: 'Feb 7th at 5:30 PM ',
    reminder :'false',
  }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task)=>(
      <h3 key={'task.id'}>{task.text}</h3>
    ))}
     
    </>
  )
}

export default Tasks

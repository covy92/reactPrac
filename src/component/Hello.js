import World from "./World";

export default function Hello(){
  return (
    <div>
      <h1 style={
        {
          color: 'red',
          borderRight: '2px solid #000',
          marginBottom: '50px',
          opacity:1
        }
      }>Hello</h1>
      <World/>
      <World/>
    </div>
  )

};
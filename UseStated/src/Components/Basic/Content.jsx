export const Content = ({ Students }) => {
  const Pass = Students.filter(student => student.marks > 50);

  return (
    <div>
      {Pass.map((item) => (
        <div key={item.id}>{item.id}. {item.name}</div>
      ))}
    </div>
  );
};
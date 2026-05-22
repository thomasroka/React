import { Content } from "./Content";

export const StudentsMain = () => {
  const Students = [
    { id: 1, name: "Tom",  marks: 90 },
    { id: 2, name: "John", marks: 60 },
    { id: 3, name: "Suju", marks: 30 },
    { id: 4, name: "Muju", marks: 40 },
  ];

  return <Content Students={Students} />;
};
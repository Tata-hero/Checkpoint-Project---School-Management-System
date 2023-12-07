const studentsData = [
  {
    id: "S1",
    name: "Alice Johnson",
    class: "Fullstack Web Programming",
    subjects: [
      { name: "JavaScript Fundamentals", grade: 4 },
      { name: "HTML and CSS Basics", grade: 4 },
      { name: "Responsive Web Design", grade: 6 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S2",
    name: "Bob Smith",
    class: "AWS Cloud Engineering",
    subjects: [
      { name: "Introduction to AWS Services", grade: 5 },
      { name: "Cloud Security", grade: 4 },
      { name: "Serverless Architecture", grade: 6 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S3",
    name: "Charlie Brown",
    class: "Software Testing",
    subjects: [
      { name: "Testing Methodologies", grade: 6 },
      { name: "Automated Testing with Selenium", grade: 5 },
      { name: "Performance Testing", grade: 5 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S4",
    name: "David White",
    class: "Fullstack Web Programming",
    subjects: [
      { name: "JavaScript Fundamentals", grade: 5 },
      { name: "HTML and CSS Basics", grade: 5 },
      { name: "Responsive Web Design", grade: 5 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S5",
    name: "Eva Rodriguez",
    class: "AWS Cloud Engineering",
    subjects: [
      { name: "Introduction to AWS Services", grade: 6 },
      { name: "Cloud Security", grade: 6 },
      { name: "Serverless Architecture", grade: 4 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S6",
    name: "Frank Thomas",
    class: "Software Testing",
    subjects: [
      { name: "Testing Methodologies", grade: 5 },
      { name: "Automated Testing with Selenium", grade: 6 },
      { name: "Performance Testing", grade: 4 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S7",
    name: "Grace Lee",
    class: "Fullstack Web Programming",
    subjects: [
      { name: "JavaScript Fundamentals", grade: 6 },
      { name: "HTML and CSS Basics", grade: 5 },
      { name: "Responsive Web Design", grade: 4 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S8",
    name: "Henry Wang",
    class: "AWS Cloud Engineering",
    subjects: [
      { name: "Introduction to AWS Services", grade: 4 },
      { name: "Cloud Security", grade: 5 },
      { name: "Serverless Architecture", grade: 4 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S9",
    name: "Ivy Chen",
    class: "Software Testing",
    subjects: [
      { name: "Testing Methodologies", grade: 6 },
      { name: "Automated Testing with Selenium", grade: 5 },
      { name: "Performance Testing", grade: 3 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S10",
    name: "Jack Martin",
    class: "Fullstack Web Programming",
    subjects: [
      { name: "JavaScript Fundamentals", grade: 3 },
      { name: "HTML and CSS Basics", grade: 5 },
      { name: "Responsive Web Design", grade: 5 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S11",
    name: "Karen Anderson",
    class: "AWS Cloud Engineering",
    subjects: [
      { name: "Introduction to AWS Services", grade: 5 },
      { name: "Cloud Security", grade: 4 },
      { name: "Serverless Architecture", grade: 6 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S12",
    name: "Leo Garcia",
    class: "Software Testing",
    subjects: [
      { name: "Testing Methodologies", grade: 4 },
      { name: "Automated Testing with Selenium", grade: 4 },
      { name: "Performance Testing", grade: 3 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S13",
    name: "Mia Wilson",
    class: "Fullstack Web Programming",
    subjects: [
      { name: "JavaScript Fundamentals", grade: 4 },
      { name: "HTML and CSS Basics", grade: 5 },
      { name: "Responsive Web Design", grade: 6 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S14",
    name: "Nathan Brown",
    class: "AWS Cloud Engineering",
    subjects: [
      { name: "Introduction to AWS Services", grade: 6 },
      { name: "Cloud Security", grade: 5 },
      { name: "Serverless Architecture", grade: 4 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S15",
    name: "Olivia Taylor",
    class: "Software Testing",
    subjects: [
      { name: "Testing Methodologies", grade: 5 },
      { name: "Automated Testing with Selenium", grade: 6 },
      { name: "Performance Testing", grade: 5 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S16",
    name: "Peter Martinez",
    class: "Fullstack Web Programming",
    subjects: [
      { name: "JavaScript Fundamentals", grade: 4 },
      { name: "HTML and CSS Basics", grade: 4 },
      { name: "Responsive Web Design", grade: 4 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S17",
    name: "Quinn Nguyen",
    class: "AWS Cloud Engineering",
    subjects: [
      { name: "Introduction to AWS Services", grade: 4 },
      { name: "Cloud Security", grade: 6 },
      { name: "Serverless Architecture", grade: 6 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S18",
    name: "Rachel Turner",
    class: "Software Testing",
    subjects: [
      { name: "Testing Methodologies", grade: 6 },
      { name: "Automated Testing with Selenium", grade: 3 },
      { name: "Performance Testing", grade: 4 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S19",
    name: "Samuel Wright",
    class: "Fullstack Web Programming",
    subjects: [
      { name: "JavaScript Fundamentals", grade: 4 },
      { name: "HTML and CSS Basics", grade: 5 },
      { name: "Responsive Web Design", grade: 5 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
  {
    id: "S20",
    name: "Tina Adams",
    class: "AWS Cloud Engineering",
    subjects: [
      { name: "Introduction to AWS Services", grade: 6 },
      { name: "Cloud Security", grade: 5 },
      { name: "Serverless Architecture", grade: 6 },
    ],
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.s",
  },
];

export default studentsData;

import Express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import faker from "faker";
import { times, identity, includes } from "ramda";
import { buildSchema } from "graphql";

const app = Express();

const schema = buildSchema(`
  type Query {
      course(id: Int!): Course
      courses(topic: String): [Course]
  },
  type Course {
      id: Int
      topic: String
      title: String
      author: String
      description: String
      url: String
  }
`);

export interface Course {
  id: number;
  topic: string;
  title: string;
  author: string;
  description: string;
  url: string;
}

interface QueryParams {
  id?: number;
  topic?: string;
}

const coursesData = times<Course>(
  (idx): Course => ({
    id: identity(idx),
    title: faker.company.companyName(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.words(),
    topic: faker.lorem.paragraph(),
    url: faker.internet.url(),
  }),
  30
);

const getCourse = ({ id }: QueryParams) =>
  coursesData.find((course) => course.id === id);

const getCourses = ({ topic }: QueryParams) => {
  console.warn(topic);
  if (topic) {
    return coursesData.filter((course) => includes(topic, course.topic));
  } else {
    return coursesData;
  }
};

const updateCourseTopic = ({ id, topic }: QueryParams) => {
  if (topic) {
    coursesData.map((course) => {
      if (course.id === id) {
        course.topic = topic;
        return course;
      }
    });
  }

  return getCourse({ id });
};

const root = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic: updateCourseTopic,
};

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.warn("Listening on *:4000");
});

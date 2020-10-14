import React, { Component, FormEvent, ChangeEvent } from "react";
import { isEmpty } from "ramda";

import { Course } from "@/../server/graphql";

export type State = {
  courses?: Course[];
  search: string;
};

type SendRequest = (topic?: string) => any;

const sendRequest: SendRequest = async function (topic = "") {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        courses(topic: "${topic}") {
          id
          title
          author
          description
          topic
          url
        }
      }`,
    }),
  });
  const { data } = await response.json();
  return data;
};

export class Courses extends Component<{}, State> {
  state = {
    courses: [],
    search: "",
  };

  onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { search } = this.state;
    if (!isEmpty(search)) {
      const data = await sendRequest(search);
      console.warn(data);

      this.setState({ courses: data.courses });
    }
  };

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const search = event.target.value;
    this.setState({ search });
  };

  async componentDidMount() {
    const data = await sendRequest();
    console.warn(data);

    this.setState({ courses: data.courses });
  }

  render() {
    const { courses, search } = this.state;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            Search:
            <input
              placeholder="Search..."
              value={search}
              onChange={this.onChange}
              required
              minLength={0}
              maxLength={10}
            />
          </label>
          <button>Send</button>
        </form>
        {!isEmpty(courses)
          ? courses.map(
              ({ id, title, topic, author, description, url }: Course) => (
                <div key={id}>
                  <b>
                    Id: {id}, URL: {url}
                  </b>
                  <h4>Title: {title}</h4>
                  <b>Topic: </b>
                  <div>{topic}</div>
                  <b>Author: </b>
                  <div>{author}</div>
                  <b>Description: </b>
                  <div>{description}</div>
                </div>
              )
            )
          : null}
      </>
    );
  }
}

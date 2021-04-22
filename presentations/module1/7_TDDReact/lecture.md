---
title: TDD + React
description: TDD and React
---

# OTUS

## ReactJS

<!-- v -->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!-- v -->

### Вопросы?

<!-- s -->

### TST — Total System Testing

<!-- v -->

### Как не сломать приложение после каждого исправления?

> После каждого исправления ошибки нужно прогнать весь набор контрольных примеров, по которым система проверялась раньше

Ф. Брукс, Мифический человеко-месяц 1975

Англоязычный журнал PC World поместил книгу Брукса на первое место в списке «Десять IT-книг, которые стыдно признать, что не читал»

<!-- v -->

### Тотальное тестирование системы (TST — Total System Testing)

Нет ненужных тестов. Многие, повторюсь, очень многие разработчики говорят, что у них нет времени на те или иные тесты.
Представьте себе доктора, который не сделав и изучив должным образом анализы, выписал вам кучу лекарств и рекомендовал вам принимать их каждый день. Или вы купили автомобиль, который не прошел все необходимые проверки перед эксплуатацией. Или вам надо садиться и лететь на самолете, который должным образом, согласно всем инструкциям, не был протестирован перед полетом.
Так себе ситуация, неправда ли?

<!-- v -->

### Тотальное тестирование системы (TST — Total System Testing)

![Spacex interface](images/touch-panels.jpeg)

<!-- v -->

### Total System Testing

![Tesing Pyramid](images/testing-pyramid.png)

<!-- v -->

### Unit testing

![Tesing Pyramid](images/unit-testing.png)

<!-- v -->

### Mock object

![Tesing Pyramid](images/mock-obj.jpeg)

<!-- v -->

### Вопросы?

<!-- s -->

### Unit testing

Модульный тест применяется для тестирования одной логически выделенной и изолированной единицы системы. Чаще всего это метод класса или простая функция (хотя я допускаю и весь класс). Изолированность тестируемой единицы достигается при помощи Заглушек (Stubs, Dummies) и Макетов (Mockups)

<!-- v -->

### Примеры

<!-- v -->

### Вопросы?

<!-- s -->

### Faker

[faker.js - generate massive amounts of fake data in the browser and node.js](https://github.com/marak/Faker.js/)

```js
    var faker = require('faker');

    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```

<!-- v -->

### Пример

<!-- v -->

### Fast-check

[Property Based Testing with Fast-Check](https://github.com/dubzzz/fast-check)

```js
const fc = require('fast-check');

// Code under test
const contains = (text, pattern) => text.indexOf(pattern) >= 0;

// Properties
describe('properties', () => {
  // string text always contains itself
  it('should always contain itself', () => {
    fc.assert(fc.property(fc.string(), text => contains(text, text)));
  });
  // string a + b + c always contains b, whatever the values of a, b and c
  it('should always contain its substrings', () => {
    fc.assert(fc.property(fc.string(), fc.string(), fc.string(), (a,b,c) => {
      // Alternatively: no return statement and direct usage of expect or assert
      return contains(a+b+c, b);
    }));
  });
});
```

<!-- v -->

### Вопросы?

<!-- s -->

### React-testing-library

> The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils

<!-- v -->

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    // Render component
    render(<App />);
    // Debug info
    screen.debug();
  });
});

```

<!-- v -->

#### Output

> React Testing Library is used to interact with your React components like a human being. What a human being sees is just rendered HTML from your React components, so that's why you see this HTML structure as output

```js
<body>
  <div>
    <div>
      Hello React
    </div>
  </div>
</body>
```

<!-- v -->

### SELECTING ELEMENTS

[jest-dom](https://github.com/testing-library/jest-dom/)

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});
```

<!-- v -->

### SELECTING ELEMENTS

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Search:');
 
    // explicit assertion
    // recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});
```

<!-- v -->

### SELECTING ELEMENTS

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    // fails
    expect(screen.getByText('Search')).toBeInTheDocument();
 
    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();
 
    // succeeds
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });
});
```

<!-- v -->

### SEARCH TYPES

The getByRole function is usually used to retrieve elements by [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attributes. However, there are also [implicit roles on HTML elements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) -- like button for a button element

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    screen.getByRole('');
  });
});
```

<!-- v -->

```
Unable to find an accessible element with the role ""
 
Here are the accessible roles:
 
document:
 
Name "":
<body />
 
--------------------------------------------------
textbox:
 
Name "Search:":
<input
  id="search"
  type="text"
  value=""
/>
 
--------------------------------------------------
```

<!-- v -->

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
```

<!-- v -->

### There are other search types which are more element specific:

<div style="text-align:left; font-size:20px">

  LabelText: getByLabelText: 
  ```js
  <label for="search" />
  ```

  PlaceholderText: getByPlaceholderText:
  ```js
  <input placeholder="Search" />
  ```

  AltText: getByAltText: 
  ```js
  <img alt="profile" />
  ```

  DisplayValue: getByDisplayValue: 
  ```js
  <input value="JavaScript" />
  ```
</div>

<!-- v -->

### There are other search types which are more element specific:

* getByText
* getByRole
* getByLabelText
* getByPlaceholderText
* getByAltText
* getByDisplayValue


<!-- v -->

### getBy vs queryBy

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    screen.debug();
 
    // fails
    expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  });
});
```

<!-- v -->

### getBy vs queryBy

> This doesn't work, because, even though debug output shows that the element with the text "Searches for JavaScript" isn't there, getBy throws an error before we can make the assertion, because it cannot find the element with this text. In order to assert elements which aren't there, we can exchange getBy with queryBy

<!-- v -->

### getBy vs queryBy

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});
```

<!-- v -->

### The findBy search variant is used for asynchronous elements

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    expect(screen.queryByText(/Signed in as/)).toBeNull();
 
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});
```

<!-- v -->

### multiple elements

* getAllBy
* queryAllBy
* findAllBy


<!-- v -->

### Assertive Functions

[jest-dom](https://github.com/testing-library/jest-dom/)

* toBeDisabled
* toBeEnabled
* toBeEmpty
* toBeEmptyDOMElement
* toBeInTheDocument
* toBeInvalid
* toBeRequired
* and etc...

<!-- v -->

### Вопросы?

<!-- s -->

### FIRE EVENT

```js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    screen.debug();
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
 
    screen.debug();
  });
});
```

<!-- v -->

### Afterward, we can make the assertions from before and after the event

```js
describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    // wait for the user to resolve
    // needs only be used in our special case
    await screen.findByText(/Signed in as/);
 
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
 
    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});
```

<!-- v -->

### React Testing Library: User Event

React Testing Library comes with an extended user event library which builds up on top of the fireEvent API. Previously we have used fireEvent to trigger user interactions; this time we will use userEvent as replacement, because the userEvent API mimics the actual browser behavior more closely than the fireEvent API. For example, a fireEvent.change() triggers only a change event whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.

<!-- v -->

### User Event

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    // wait for the user to resolve
    await screen.findByText(/Signed in as/);
 
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
 
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
 
    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });
});
```

<!-- v -->

### CALLBACK HANDLERS

```js
function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
```

<!-- v -->

### CALLBACK HANDLERS

```js
describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();
 
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
 
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
```

<!-- v -->

### CALLBACK HANDLERS + User Event

```js
describe('Search', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();
 
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
 
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
 
    expect(onChange).toHaveBeenCalledTimes(10);
  });
});
```

<!-- v -->

### Вопросы?

<!-- s -->

### ASYNCHRONOUS / ASYNC

<div style="font-size: 20px">

```js
import React from 'react';
import axios from 'axios';
 
const URL = 'http://hn.algolia.com/api/v1/search';
 
function App() {
  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(null);
 
  async function handleFetch(event) {
    let result;
 
    try {
      result = await axios.get(`${URL}?query=React`);
 
      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }
 
  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch Stories
      </button>
 
      {error && <span>Something went wrong ...</span>}
 
      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
```

</div>

<!-- v -->

### ASYNCHRONOUS / ASYNC

<div style="font-size: 20px">

```js
import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import App from './App';
 
jest.mock('axios');
 
describe('App', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];
 
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );
 
    render(<App />);
 
    await userEvent.click(screen.getByRole('button'));
 
    const items = await screen.findAllByRole('listitem');
 
    expect(items).toHaveLength(2);
  });
});
```

</div>

<!-- v -->

### ASYNCHRONOUS / ASYNC

<div style="font-size: 20px">

```js
import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import App from './App';
 
jest.mock('axios');
 
describe('App', () => {
  test('fetches stories from an API and displays them', async () => {
    ...
  });
 
  test('fetches stories from an API and fails', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error())
    );
 
    render(<App />);
 
    await userEvent.click(screen.getByRole('button'));
 
    const message = await screen.findByText(/Something went wrong/);
 
    expect(message).toBeInTheDocument();
  });
});
```

</div>

<!-- v -->

### ASYNCHRONOUS / ASYNC

<div style="font-size: 25px">

```js
import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import App from './App';
 
jest.mock('axios');
 
describe('App', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];
 
    const promise = Promise.resolve({ data: { hits: stories } });
 
    axios.get.mockImplementationOnce(() => promise);
 
    render(<App />);
 
    await userEvent.click(screen.getByRole('button'));
 
    // After rendering the component and clicking the button, we wait for the error message to show up.
    await act(() => promise);
 
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
 
  test('fetches stories from an API and fails', async () => {
    ...
  });
});
```

</div>


<!-- v -->

### Вопросы?

<!-- s -->

## Спасибо за внимание!

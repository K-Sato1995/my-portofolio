---
title: "React in TypeScript"
description: "Things I should keep in mind when I'm creating react apps in Typescript."
cover: "assets/react-typescript.png"
category: "React"
tags:
  - TypeScript
  - React
readTime:
date: "20/07/2019"
---
# Add types to props

```tsx
import React from 'react'; // we need this to make JSX compile

type CardProps = {
  title: string,
  paragraph: string
}

export const Card = ({ title, paragraph }: CardProps) => <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
</aside>

const el = <Card title="Welcome!" paragraph="To this example" />
```

## Pass an array

```tsx
interface cardProps {
  issues: {
    id: string;
    paragraph: string
  }[];
}
```

## Make properties optional
If you want to make some properties optional, do that in the respective Props type:

```
type CardProps = {
  title: string,
  paragraph?: string  // the paragraph is optional
}
```

# Use a hook in map function

When you get the error below, remember the code!

```
./src/components/molecules/messageClient/Item/index.tsx
  Line 21:  React Hook "useDeactivateTokenMutation" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

Search for the keywords to learn more about each error.
```

```tsx
import React from "react";
import { useDeleteMutation } from "../../../../generated/graphql";

interface Props {
  name: string;
  tokens: string[];
}

const Item = ({ name, tokens }: Props) => {
  const DeleteMutation =  useDeleteMutation();
  return (
    <div>
      <div>
        {name}
        <ul>
          {tokens.map(token => (
            <li>
              {token}
              <button
                onClick={() => {
                   DeleteMutation({ variables: { token } });
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Item;
```

# References
- [TypeScript and React: Components](https://fettblog.eu/typescript-react/components/)
- [Do's and Don'ts · TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [useTypescript — A Complete Guide to React Hooks and TypeScript](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)
- [Typed useState with TypeScript - Carl's Blog](https://www.carlrippon.com/typed-usestate-with-typescript/)
- [React Hooks in TypeScript - James Ravenscroft - Medium](https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d)

---
sidebar_position: 1
---

# Demo Markdown

## Abbreviations

Not implemented.

## Admonitions

we could customize admotion title

:::danger "Attention, please"

admotion is awesome

:::


:::info

I'm spoiler

:::

### Spoiler / Details

<details>
  <summary>Toggle me!</summary>

    🦖 🦕

</details>


## Annotations

Not implemented.

## Code blocks

ref: Syntax highlighting

### Syntax highlighting

``` py {2-5}
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

### Interactive code editor

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      Current time is <code>{date.toLocaleTimeString()}</code>
    </div>
  );
}
```

# Tabs

## Regular

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="orange">
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

## Code

<Tabs defaultValue="py">
<TabItem value="js" label="JavaScript">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print 'Hello, world!'
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>

## Data tables

| Method      | Description                            |
| ----------- | -------------------------------------- |
| `GET`       | :white_check_mark:     Fetch resource  |
| `PUT`       | :x:                    Update resource |
| `DELETE`    | :x:                    Delete resource |

## Diagrams (Meramid)

> ref: https://github.com/facebook/docusaurus/issues/1258

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR;
		A-->B;
		B-->C;
		B-->D[plop lanflz eknlzeknfz];
`}/>


## Formatting

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

## emojis

That's :musical_note: in the background is me in my :rocket:

## Images

![rap](https://code.s3.yandex.net/web-code/procrastinate/3.png)

### Youtube

<div class="video-wrapper">
  <iframe  height="540" frameborder="0" allowfullscreen width="100%" src="https://www.youtube.com/embed/CUX4-2ukrA0" frameborder="0" allowfullscreen></iframe>
</div>

## Task lists

- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![Solution](./public/solution.png)


### Links

- Solution URL: [Click here](https://urealaden.github.io/chart-component/)
- Live Site URL: [Click here](https://urealaden.github.io/chart-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [ChartJS]()
- [React](https://reactjs.org/) - JS library
- [Fluent UI ](https://styled-components.com/) - For OOB Components and Merged Style sets


### What I learned

For this project I learned how to implement a vertical Bar Chart with ChartJS. I didn't have to included a css file as the API was fairly customizable.

```js
 const labels = jsonData.map((entry) => entry.day);
    const today = new Date().toString().split(" ")[0].toLowerCase();
    const dataset = [{
        label: "Total Spent",
        data: jsonData.map((entry) => entry.amount),
        backgroundColor: jsonData.map((entry) => entry.day === today ? cyan : redOrange),
        borderRadius: 15,
        borderSkipped: false,
    }];
    const data = { labels, datasets: dataset };
    const option = {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: lightBrown
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false,
                },
                border: {
                    display: false,
                }
            }
        }
    }
    return (
        <Bar data={data} options={option} />
    )
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

What i need to improve on moving forward is developing a mobile first workflow.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [ChartJS Channel](https://www.youtube.com/@ChartJS-tutorials) - This YouTube Channel had tons of useful videos that were perfect for my needs
- [How to create shapes with CSS](https://www.w3schools.com/howto/howto_css_shapes.asp) - I referred to this resource to better understand how to draw shapes using CSS.
- [Overlap Div without absolute position](https://tomduffytech.com/overlap-div-without-absolute-position/) - I didn't want to use absolute positioning for the circle overlay.

## Author

- Website - [Leaundrae Mckinney](https://www.linkedin.com/in/leaundrae-mckinney/)
- Frontend Mentor - [@UreaLaden](https://www.frontendmentor.io/profile/UreaLaden)
# Stage 1: Build Your Personal Website (FRONTEND TASK)

## Study Material

- [HTML & CSS 11-Hour Course - freeCodeCamp](https://www.freecodecamp.org/news/html-css-11-hour-course/)
- [HTML Tutorial - W3Schools](https://www.w3schools.com/html/)
- [CSS Tutorial - W3Schools](https://www.w3schools.com/css/)
- [Responsive Web Design Guide - Mozilla](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode)
- [HTMLImageElement - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalHeight)
- [GitHub Pages - GitHub Docs](https://docs.github.com/articles/creating-project-pages-manually)

## Task

You will create and host a simple single-page website outlining your goals for the next 2 years in the tech field. The website should be visually appealing, mobile-friendly, and utilize HTML, CSS, and JavaScript only. Each required element should have a specified `data-testid` attribute for easy identification and testing.

## Requirements

- **Languages:** Only HTML, CSS, and JavaScript allowed for this stage.
- **Responsiveness:** The website must be responsive and function well on all devices (desktop, tablet, mobile).
- **Images:** All images used on the website must have natural dimensions (width and height specified in the image file itself). Websites with images that don't have natural dimensions will be automatically disqualified.
- **Required Elements:** Each required element on the website (Slack name, slack profile picture, links) should have a `data-test-id` attribute assigned for easy testing purposes.

### Required Elements and Attributes

- **Slack Name:** Display your Slack Display Name.
  - Attribute: `data-testid="slackDisplayName"`
- **Current Time in UTC:** Display the current time in UTC.
  - Attribute: `data-testid="currentTimeUTC"`
- **Current Day of the Week:** Display the current day of the week (e.g. Monday, Friday).
  - Attribute: `data-testid="currentDay"`
- **Slack Email:** Display your Slack Email.
  - Attribute: `data-testid="slackEmail"`
- **Slack Profile Picture:** Display your Slack Profile Picture.
  - Attribute: `data-testid="slackProfilePicture"`
  - **Dimensions:** The image must have natural dimensions (width and height specified in the image file itself) and be added to the page in its original size (natural width and natural height).
- **Links:**
  - Add a link to [hng.tech/learn](https://hng.tech/learn).
    - Attribute: `data-testid="hngLink"`
  - Add a link to [keyword.dog](https://keyword.dog).
    - Attribute: `data-testid="keywordLink"`
  - Add a link to [scrapeanyweb.site](https://scrapeanyweb.site).
    - Attribute: `data-testid="scrapeanywebLink"`

## Acceptance Criteria

- **Content:** The website should clearly outline your tech goals for the next 2 years.
- **Visuals:** The website should be visually appealing and well-organized.
- **Functionality:** All links should function properly and direct users to the specified websites ([hng.tech/learn](https://hng.tech/learn), [keyword.dog](https://keyword.dog), [scrapeanyweb.site](https://scrapeanyweb.site)). The website should be fully responsive and adjust to different screen sizes.
- **Code Quality:** The code should be well-structured, indented, and easy to read. Each required element should have a unique `data-testid` attribute assigned.
- **Accuracy:** Your Slack name should correspond to the actual data. Your Slack profile picture dimensions must be in its original size (Make sure the image has natural dimensions).
- **Data-attributes adherence:** Every specified detail on the page should correctly have the `data-testid` attribute as indicated above, ensuring easy identification during any potential testing.

## Submission Mode

Submit your task through the designated submission form. Ensure you've:

- Hosted the page on a platform of your choice (e.g., Vercel, GitHub Pages, Netlify).
- Double-checked all requirements and acceptance criteria.
- Provided the hosted page's URL in the submission form.
- Thoroughly reviewed your work to ensure accuracy, functionality, and adherence to the specified guidelines before you submit it.

## Submission Deadline

The deadline for submissions is **Wednesday, July 3rd, at 11:59 PM GMT**. Late submissions will not be entertained!

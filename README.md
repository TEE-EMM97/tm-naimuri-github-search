# naimuri_submission

### **Basic Overview**

#### Github Rest API

The goal of the challenge was to develop a React application for searching and filtering Github repository results using the GitHub Search API. 

Using the GitHub API we are able to search and get the details of a repository e.g forks, watchers and stars.

View demo [here](https://tm-naimuri-github-search.vercel.app/)

## Getting Started

### Install

```
git clone https://github.com/TEE-EMM97/tm-naimuri-github-search.git
npm install or yarn install
```

#### Run the development server

You now have a new directory called `tm-naimuri-github-search`. Let’s `cd` into it:

```
cd tm-naimuri-github-search
```

Then, run the following command(s):

```
npm run dev or yarn dev
```

#### Github API Authentication

This project will consume github API even if you skip this step. If you skip this step, github API will limit requests.

See how to create one [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

- Create a `.env` file on application root
- Add github `NEXT_PUBLIC_GITHUB_ACCESS_TOKEN`

```
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN=xxxxxxxxxxxxxxxxx
```

## Improvements

- UI can be improved for accessibility and visual appeal 
- Sort/Filter functionality
- Allow user to increase number of repositories shown
- Implement Pagination
- Improve structure and make more component based

### Used Libraries

- [Markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) - Parses markdown into native JSX
- [Apollo](https://www.apollographql.com/docs/) - Enables you to manage both local and remote data with GraphQL
- [use-debounce](https://www.npmjs.com/package/use-debounce) - Delays the execution of a function that you don’t want to run as often.

## GitHub Api

- Search Repositories API - documentation [here](https://docs.github.com/en/rest/search).



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

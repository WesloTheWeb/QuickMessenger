## About
This is a NextJS full stack project that is essentially a chatroom. Users can create account and chat.

## Developer 
I want to emphasis use of TypeScript more along with technologies I have used at work such as websockets. This is to gain
more practice. Typically I design for my projects, but for this one in particular I want to get the front-end up and 
running as fast as possible to place a more emphasis on the backend. Particularly authentication, account creation, and
use the App Router more of NextJS as exploratory features. Overtime, I will improve the UI but I am doing just enough
to get the backend work at the moment. This project started on 7/17/2024.

I am going to officially start treating this as a featured project with appropriate development branches and
release branches once this launches. This will act as a update of my skills as a software engineer at this point in time,
as well as a playground to experiment with different strategies and technologies. Some could be subtle as abstractions or
dynamic components.

Fall 2024 update:
- Due to recent events and having more time I decided to continue development. At the time of writing users can create
accounts and sign in. The chat components are still being made but the backend and API endpoints have been created. I plan
on launching this soon with guest access to chatroom as it is created while still continuously integrating on this.

I do want to have safety measures in store due to people being people and do not want abuse of the chat should any malicious
users want to troll when it is live.

## Getting Started (Local)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tech Stack
Below is the tech stack I will be using. Not all of it is implemented. 

### Front-End
- NextJS 14+ (with App Router)
- TypeScript
- (S)CSS Modules
- React Hook Form
- Redux Tool Kit (RTK) + Redux

### Back-End (Not yet implemented yet)
- ReactQuery
- Socket.io
- MongoDB (or Redis) 
- NextAuth

# Learnings
I am trying my best to grow not just in my code of writing better code but also optimal documentation. As I mentioned in the
README this project is also me trying new technologies I have don't use often. It is not meant to be an extensive list,
but rather a reference point for more if I come back in the future or someone views this repo. After all, it is not
the destination it is often the journey.

## React Query
This API can be added to any data fetching methods such as the Fetch API or Axios. React Query does not replace the HTTP client (like fetch API or Axios); instead, it enhances the data-fetching experience with caching, synchronization, and more.
[`React Query`](https://tanstack.com/query/latest/docs/framework/react/overview)

## NextJS stuff 
- _app.tsx or anything with `myApp` is not needed with the app router. Just use the `layout.tsx` file instead.
- Every component is considered a server side component, unless stated otherwise with `use client`. 
    - Serverside components CANNOT use any hooks (useState, etc.) or anything that affects the client UI.
    
1. Server Components 
- By default, all components in the App Router are server components.
- They can fetch data using getStaticProps or getServerSideProps.
- They cannot use hooks like useState, useEffect, or any client-side-only feature.
- You should avoid including use client in server components.

2. Client Components:
- To use client-side features, you need to add the use client directive at the top of the file.
- They can use hooks like useState, useEffect, useContext, etc.
- *Client components can be imported and used within server components, but the reverse is not true.
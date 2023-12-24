import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Fetching dengan CSR
// export default function HomePage() {
//   const [data, setData] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (router.query.userId) {
//       // Fetching dengan CSR (Client Side Rendering)
//       fetch(`https://jsonplaceholder.typicode.com/users/${router.query.userId}`)
//         .then((res) => res.json())
//         .then((data) => setData(data));
//     }
//   }, [router.query.userId]);

//   if (!data) return <div>Loading...</div>;

//   return <div>{data.name}</div>;
// }

// Fetching dengan SSR
export async function getServerSideProps(router) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${router.params.userId}`);
  const data = await resp.json();
  return { props: {data} };
}

export default function SSR({data}) {
//   return <div>{data.name}</div>;
  return <div>{JSON.stringify(data)}</div>;
}

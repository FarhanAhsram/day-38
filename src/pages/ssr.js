export async function getServerSideProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await resp.json();
  return { props: {data} };
}

export default function SSR({data}) {
//   return <div>{data.name}</div>;
  return <div>{JSON.stringify(data)}</div>;
}

import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching dengan CSR (Client Side Rendering)
    fetch("https://jsonplaceholder.typicode.com/users/8")
      .then((res) => res.json())
      .then((data) => setData(data));

    // const fetchSecaraAsync = async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/8"
    //   );
    //   const data = await res.json();

    //   setData(data);
    // };
    // fetchSecaraAsync();

  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{data.name}</div>;
}

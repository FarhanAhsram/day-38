import { useEffect, useState } from "react";

export default function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;
  
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="my-4">
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(router) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${router.params.postId}`
  );
  const data = await resp.json();

  return { props: { data } };
}

export default function DetailBlog({ data }) {
  return (
    <>
      <div key={data.id}>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    </>
  );
}

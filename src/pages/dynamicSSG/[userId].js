// Function untuk mengambil data keseluruhan API dari server
export async function getStaticPaths() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await resp.json();
  const userIds = users.map((user) => ({
    params: { userId: String(user.id) },
  }));

  return { paths: userIds, fallback: false };
}

// Funtion untuk mengambil data API (berdasarkan id) dari penyimpanan public
export async function getStaticProps(router) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${router.params.userId}`
  );
  const detailUser = await resp.json();

  return { props: { detailUser } };
}

export default function userDetailPage({detailUser}) {
  return <div>{JSON.stringify(detailUser)}</div>
}

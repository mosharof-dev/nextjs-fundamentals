import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Mastering React Basics",
    shortDescription: "React er core concepts like components, props, state.",
    longDescription:
      "Ei post e amra React er fundamental gula deep dive korbo. Functional components, props passing, state management, event handling — sob clear example diye explain kora hobe jate tumi real project e easily apply korte paro.",
    author: "Mosharof",
    date: "2026-04-01",
  },
  {
    id: 2,
    title: "Understanding Next.js App Router",
    shortDescription: "Next.js App Router and file-based routing system.",
    longDescription:
      "Next.js er App Router system ta kibhabe kaj kore, layout, page, nested routing, server vs client component — sob step by step breakdown kora hoyeche real project mindset e.",
    author: "Mosharof",
    date: "2026-04-03",
  },
  {
    id: 3,
    title: "Tailwind CSS Layout Secrets",
    shortDescription: "Flexbox vs Grid use korar proper guideline.",
    longDescription:
      "Flexbox kothay use korba, Grid kothay best — ei confusion clear korar jonno practical layout example deya hoyeche. Responsive design o include kora hoyeche.",
    author: "Mosharof",
    date: "2026-04-05",
  },
  {
    id: 4,
    title: "Building Fullstack App with Next.js",
    shortDescription: "Frontend + Backend ekshathe Next.js diye.",
    longDescription:
      "Next.js diye fullstack app build korar complete flow: API routes, data fetching, server actions, database connection — sob ekta real project structure e dekhano hoyeche.",
    author: "Mosharof",
    date: "2026-04-07",
  },
];

const BolgDetailPage = async ({ params }) => {
    const { bolgId } = await params;
    const post = posts.find((p) => p.id === parseInt(bolgId));

    console.log(bolgId, post);
    return (
        <div>
            <h2 className='text-6xl text-center'>Bolg Detail Page</h2>
            {post && (
                <div className="border p-4 rounded-lg mt-4">
                    <h3 className='text-3xl font-bold'>{post.title}</h3>
                    <p className='text-lg'>{post.longDescription}</p>
                    <p className='text-sm text-gray-500'>By {post.author} on {post.date}</p>
                    <Link href="/bolg" className="btn btn-secondary mt-4">
                        Back to Bolg List
                    </Link>
                </div>
            )}
        </div>
    );
};

export default BolgDetailPage;
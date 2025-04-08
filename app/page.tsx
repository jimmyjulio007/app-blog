import { getPosts } from "@/server/action";
import Link from "next/link";
import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface Post {
  id: string;
  title: string;
  description: string; 
  image: string;
  content: string;
  createdAt: Date
}


export default async function Home() {
  const posts = await getPosts();
  console.log(posts)
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-semibold ">Blog</p>
    <div className="flex items-start gap-10 pt-10 px-auto">
      <Suspense fallback={<p>Loading...</p>}>
      {posts.map((post: Post) => (
          <Card className="w-[350px]" key={post.id}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold uppercase">{post.title}</CardTitle>
              <CardDescription className="text-lg font-medium">{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image className="flex-1" src={post.image} alt={post.title} width={350} height={200} />
              <span className="text-sm font-semibold">{post.createdAt.toDateString()}</span>
            </CardContent>
            <CardFooter>
              <Button variant={"outline"}>
              <Link href={`/article/${post.id}`}>Lire</Link>
              </Button>
            </CardFooter>
          </Card>
      ))}
      </Suspense>
      
    </div>
    </div>
  );
}

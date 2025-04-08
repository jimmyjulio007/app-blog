import { Button } from "@/components/ui/button"
import { getPostById } from "@/server/action"
import Image from "next/image"
import Link from "next/link"

export default async function Page({params,}: {params: Promise<{ id: string }>}) 
{
    const article = await getPostById((await params).id)

    if (!article) return <div>User not found</div>

    return (
    <div className="py-10 px-4 border-accent border flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold">Article n° {article?.id}</h1>
      <p className="text-sm font-medium">titre: {article?.title}</p>
      <p className="text-sm font-medium">description: {article?.description}</p>
      <p className="text-sm font-medium">contenu: {article?.content}</p>
      <Image className="flex-1" src={article?.image} alt={article?.title} width={350} height={200} />
      <p className="text-sm font-medium">crée le: {article?.createdAt.toDateString()}</p>
      <Button variant={"secondary"}>
      <Link href={'/'}>Retour</Link>
      </Button>
      
    </div>
    )
  }
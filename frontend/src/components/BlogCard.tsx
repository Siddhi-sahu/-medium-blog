interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <div className="border border-slate-200 pb-4">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName} />

            </div>
            <div className="font-extralight pl-2 text-sm">{authorName}</div>
            <div className="flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-500">

                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm">
            {`${Math.ceil(content.length / 300)} min read`}
        </div>

    </div>
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}

function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>

}
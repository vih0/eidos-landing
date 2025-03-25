export function MissionItem({ title, content }: { title: string; content: string }) {
    return (
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="w-8 h-8 rounded-full bg-[#00A7BE] border-4 border-white shadow-lg mb-4"></div>
        <div className="w-full h-px bg-gray-300 mb-8"></div>
        <h3 className="text-3xl font-semibold mb-4 text-center">{title}</h3>
        <p className="text-lg text-center">{content}</p>
      </div>
    )
  }
  
import { Search } from "lucide-react";

const HeaderSearch = () => {
    return (
        <div className="h-10 flex flex-1 items-center rounded-md border border-gray-300 bg-black px-3">
            <input
                type="text"
                placeholder="カードを検索"
                className="flex-1 bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
            />
            <Search size={18} className="text-white mr-2" />
        </div>
    )
}

export default HeaderSearch;
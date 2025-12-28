import HeaderSearch from "../search/HeaderSearch";

const AppHeader = () => {
    return (
        <header className="flex bg-black h-20 items-center">
            <h1 className="flex-1 text-white">TCG Manager</h1>
            <HeaderSearch />
            <div className="flex-1">02</div>
        </header>
    )
}

export default AppHeader;

interface Info {
    info: string
}

export const InfoNewsLetter = ({ info }: Info) => {

    return (
        <div className="flex flex-row items-center gap-4">
            {/* <img src="../images/icon-list.svg" alt="icon list" className="w-5 h-5 shrink-0 self-start mt-0.5"/> */}
            <p className="text-[#242742] text-base font-light">{ info }</p>
        </div>
    )

}

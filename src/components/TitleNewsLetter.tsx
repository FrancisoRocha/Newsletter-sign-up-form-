
interface Title {
    title: string
    texto: string
}

export const TitleNewsLetter = ( { title, texto }: Title ) => {

    return (
        <>
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl text-[#242742] font-bold text-left">{ title }</h2>
                <p className="text-[#242742] text-base font-light mb-6">{ texto }</p>
            </div>
        </>
    )

}

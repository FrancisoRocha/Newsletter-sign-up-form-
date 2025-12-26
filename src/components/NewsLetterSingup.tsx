

export const ImageNewsLetter = () => {

    return (
        <div>
            <picture>
                <source
                    srcSet="../images/illustration-sign-up-desktop.svg"
                    media="(min-width: 1024px)"
                />
                <source
                    srcSet="../images/illustration-sign-up-tablet.svg"
                    media="(min-width: 768px)"
                />
                <img
                    src="../images/illustration-sign-up-mobile.svg"
                    alt="Imagen De Ilustracion"
                    className="w-full h-auto
                        md:w-xl md:h-80 md:rounded-2xl md:m-auto
                        lg:w-96 lg:h-auto"
                />
            </picture>
        </div>
    )

}



export const NewsLetterSingup = () => {

    return (
        <div>
            <picture>
                <source
                    srcSet="../images/illustration-sign-up-desktop.svg"
                    media="(min-width: 768px)"
                />
                <source
                    srcSet="../images/illustration-sign-up-tablet.svg"
                    media="(min-width: 1024px)"
                />
                <img
                    src="../images/illustration-sign-up-mobile.svg"
                    alt="Imagen De Ilustracion"
                    className="w-full h-auto object-cover"
                />
            </picture>
        </div>
    )

}

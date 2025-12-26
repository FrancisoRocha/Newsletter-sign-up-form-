import { InfoNewsLetter } from "./components/InfoNewsLetter";
import { NewsLetterSingup } from "./components/NewsLetterSingup";
import { TitleNewsLetter } from "./components/TitleNewsLetter";

export function NewsLetter () {
    return (
        <>
            <div className="w-full h-auto bg-white flex flex-col gap-10">
                <NewsLetterSingup />
                <div className="p-10">
                    <TitleNewsLetter
                        title="Stay updated!"
                        texto="Join 60,000+ product managers receiving monthly updates on:"
                    />
                    <div className="flex flex-col gap-4">
                        <InfoNewsLetter
                            info="Product discovery and building what matters"
                        />
                        <InfoNewsLetter
                            info="Measuring to ensure updates are a success"
                        />
                        <InfoNewsLetter
                            info="And much more!"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

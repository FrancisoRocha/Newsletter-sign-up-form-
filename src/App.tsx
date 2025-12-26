import { InfoNewsLetter } from "./components/InfoNewsLetter";
import { ImageNewsLetter } from "./components/NewsLetterSingup";
import { TitleNewsLetter } from "./components/TitleNewsLetter";

export function NewsLetter() {
  return (
    <div className="md:flex md:items-center md:justify-center md:min-h-screen">
      <div className="w-full h-auto bg-white flex flex-col-reverse gap-10 md:p-10
          md:w-xl md:h-4xl md:rounded-2xl lg:flex-row lg:items-center"> 
        <div className="md:m-auto">
          <div className="m-auto">
              <TitleNewsLetter 
                title="Stay updated!"
                texto="Join 60,000+ product managers receiving monthly updates on:"
              />
              
              <div>
                <InfoNewsLetter info="Product discovery and building what matters" />
                <InfoNewsLetter info="Measuring to ensure updates are a success" />
                <InfoNewsLetter info="And much more!" />
              </div>
          </div>
        </div>
        <div>
          <ImageNewsLetter />
        </div>
      </div>
    </div>
  );
}
